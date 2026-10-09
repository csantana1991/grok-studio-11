import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { LiveMatch } from '../data/liveMatch'
import { candidatesFor, type FigureIndex } from '../data/selectFigure'
import { isUsable, summarise, type QaSummary } from '../data/qa/engine'
import { resolveConnection, type EvalMemo, type LockRecord, type LockTable } from '../data/qa/locks'
import { loadLocks, loadProbes, saveLocks, saveProbes } from '../data/qa/lockDb'
import { probeAll } from '../data/qa/probe'
import type { ProbeResult, QaRecord } from '../data/qa/types'
import type { FeedbackModel, Verdict } from '../data/feedback'

/**
 * How long the sweep may hold the main thread per slice. A time budget rather
 * than a fixed case count: idle callbacks fire far less often in a background
 * tab, and a fixed count made the sweep hostage to how often the browser felt
 * like scheduling it. One frame's worth of work keeps the worklist smooth.
 */
const SLICE_MS = 12
/** Images probed per sweep round, so a full pass never floods a publisher. */
const PROBE_BATCH = 24

export interface QaState {
  /** caseId -> the image that case is locked to, once validated. */
  chosen: Map<string, LiveMatch>
  records: QaRecord[]
  summary: QaSummary
  /** Only what the agent could not resolve on its own AND a human can act on. */
  exceptions: QaRecord[]
  /** Connections the agent could resolve and the viewer can show. */
  usable: QaRecord[]
  /** Cases showing no figure: every candidate failed, or none existed. */
  blocked: QaRecord[]
  /** Cases validated so far, out of the total. */
  progress: { done: number; total: number }
  running: boolean
  probed: number
  revalidate: () => void
  /** Everything fetched so far, so the viewer can rank with the same evidence. */
  probes: Map<string, ProbeResult>
  /** Feed in a probe taken elsewhere (the live viewer check) so the sweep sees it. */
  noteProbe: (r: ProbeResult) => void
  probeFor: (url: string) => ProbeResult | undefined
}

/**
 * THE AUTONOMOUS IMAGE QA AGENT.
 *
 * Runs continuously and without being asked: it walks every encounter, validates
 * the image that encounter would display against several independent checks,
 * replaces what fails from the same candidate list, locks what passes so the
 * connection stops drifting, and probes the files themselves in the background.
 *
 * The reader is never asked to confirm a routine match. Only genuine exceptions
 * -- disagreement between checks, an unnameable region, nothing available at all
 * -- surface for a human.
 *
 * It yields between chunks via requestIdleCallback so a 33,000-case sweep never
 * blocks the worklist.
 */
export function useImageQa(
  cases: Encounter[],
  index: FigureIndex,
  feedback: FeedbackModel,
): QaState {
  const [chosen, setChosen] = useState<Map<string, LiveMatch>>(new Map())
  const [records, setRecords] = useState<QaRecord[]>([])
  const [progress, setProgress] = useState({ done: 0, total: 0 })
  const [running, setRunning] = useState(false)
  const [probes, setProbes] = useState<Map<string, ProbeResult>>(new Map())
  const [epoch, setEpoch] = useState(0)

  const locks = useRef<LockTable>(new Map())
  const loaded = useRef(false)
  /**
   * The sweep reads probes through a ref rather than as an effect dependency.
   * As a state dependency, every finished probe batch would restart a 33,000
   * case sweep; instead a batch bumps `epoch` exactly once when it lands.
   */
  const probesRef = useRef<Map<string, ProbeResult>>(new Map())

  const humanVerdicts = useMemo(() => {
    const out: Record<string, Verdict> = {}
    for (const [url, e] of Object.entries(feedback.byUrl)) out[url] = e.verdict
    return out
  }, [feedback])

  // Restore locks and probes before the first sweep, so a reload reuses the
  // connections it already validated instead of re-deciding them.
  useEffect(() => {
    let cancelled = false
    Promise.all([loadLocks(), loadProbes()]).then(([l, p]) => {
      if (cancelled) return
      locks.current = l
      probesRef.current = p
      setProbes(p)
      loaded.current = true
      setEpoch((n) => n + 1)
    })
    return () => {
      cancelled = true
    }
  }, [])

  // ---- the sweep ----------------------------------------------------------
  useEffect(() => {
    if (!loaded.current || !cases.length) return
    let cancelled = false
    let i = 0
    const nextChosen = new Map<string, LiveMatch>()
    const nextRecords: QaRecord[] = []
    const pendingLocks: LockRecord[] = []
    /**
     * Candidate lists repeat heavily across 33,000 encounters -- the same
     * finding for the same age and sex always produces the same list -- and
     * rebuilding one per case was what made a full sweep take a minute. Keyed on
     * everything the ranking reads, so the cache cannot change any verdict.
     */
    const candidateCache = new Map<string, LiveMatch[]>()
    const memo: EvalMemo = new Map()
    // Publishing progress on every chunk re-rendered the whole console and the
    // virtualised worklist, which starved the idle callbacks driving the sweep:
    // it was the progress bar, not the validation, costing the time.
    let chunk = 0
    setRunning(true)
    setProgress({ done: 0, total: cases.length })

    const step = () => {
      if (cancelled) return
      const until = Date.now() + SLICE_MS
      for (; i < cases.length; i++) {
        // Check the clock every 64 cases: Date.now() per case would itself
        // become a measurable share of the work.
        if ((i & 63) === 0 && Date.now() > until) break
        const c = cases[i]
        const key = `${c.finding}|${c.stationId}|${c.age}|${c.sex}|${c.categoryId}`
        let candidates = candidateCache.get(key)
        if (!candidates) {
          candidates = candidatesFor(c, index).map((x) => x.match)
          candidateCache.set(key, candidates)
        }
        const r = resolveConnection(c, candidates, locks.current, {
          probes: probesRef.current,
          humanVerdicts,
          now: Date.now(),
          memo,
        })
        if (r.chosen) nextChosen.set(c.accession, r.chosen)
        nextRecords.push(r.record)
        if (r.lock) {
          locks.current.set(r.lock.caseId, r.lock)
          pendingLocks.push(r.lock)
        }
      }
      if (++chunk % 5 === 0 || i >= cases.length) {
        setProgress({ done: i, total: cases.length })
      }

      if (i < cases.length) {
        schedule(step)
        return
      }
      setChosen(nextChosen)
      setRecords(nextRecords)
      setRunning(false)
      void saveLocks(pendingLocks)
    }

    schedule(step)
    return () => {
      cancelled = true
    }
  }, [cases, index, humanVerdicts, epoch])

  // ---- background file probing -------------------------------------------
  // Verifies the bytes of images the agent actually chose, a batch at a time,
  // and feeds the results back in so a broken file gets replaced on the next
  // sweep rather than shown as a broken frame.
  useEffect(() => {
    if (running || !chosen.size) return
    const unprobed: string[] = []
    const seen = new Set<string>()
    for (const m of chosen.values()) {
      if (probesRef.current.has(m.url) || seen.has(m.url)) continue
      seen.add(m.url)
      unprobed.push(m.url)
      if (unprobed.length >= PROBE_BATCH) break
    }
    if (!unprobed.length) return

    let cancelled = false
    probeAll(unprobed).then((results) => {
      if (cancelled || !results.length) return
      void saveProbes(results)
      const next = new Map(probesRef.current)
      for (const r of results) next.set(r.url, r)
      probesRef.current = next
      setProbes(next)
      // One re-sweep per batch, so newly confirmed files upgrade their
      // connections and newly broken ones get replaced.
      setEpoch((n) => n + 1)
    })
    return () => {
      cancelled = true
    }
  }, [chosen, probes, running])

  const summary = useMemo(() => summarise(records), [records])
  // SOURCE_UNAVAILABLE is deliberately NOT an exception. There is no image to
  // judge, so a card per case would be thousands of rows a reader cannot act on;
  // it is a sourcing gap for the background matcher, reported as one number.
  const exceptions = useMemo(
    () =>
      records.filter(
        (r) => r.status === 'NEEDS_HUMAN_REVIEW' || r.status === 'QUARANTINED',
      ),
    [records],
  )
  const usable = useMemo(() => records.filter((r) => isUsable(r.status)), [records])
  // Neither approved nor actionable: every candidate was refused, or there was
  // none. The viewer falls back to the station atlas for these, so they are
  // reported rather than queued.
  const blocked = useMemo(
    () => records.filter((r) => r.status === 'REJECTED' || r.status === 'SOURCE_UNAVAILABLE'),
    [records],
  )

  /**
   * Accept a probe taken by the live viewer check. Deliberately does NOT bump
   * the epoch: the reader opening cases would otherwise restart the 33,000-case
   * sweep on every click. The next sweep picks it up from the ref.
   */
  const noteProbe = useCallback((r: ProbeResult) => {
    if (probesRef.current.has(r.url)) return
    const next = new Map(probesRef.current)
    next.set(r.url, r)
    probesRef.current = next
    setProbes(next)
  }, [])

  const probeFor = useCallback((url: string) => probesRef.current.get(url), [])

  /** Drop every lock and decide again from scratch. */
  const revalidate = useCallback(() => {
    locks.current = new Map()
    setEpoch((n) => n + 1)
  }, [])

  return {
    chosen,
    records,
    summary,
    exceptions,
    usable,
    blocked,
    progress,
    running,
    probes,
    probed: probes.size,
    revalidate,
    noteProbe,
    probeFor,
  }
}

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
}

function schedule(fn: () => void): void {
  const w = window as IdleWindow
  if (typeof w.requestIdleCallback === 'function') w.requestIdleCallback(fn, { timeout: 200 })
  else setTimeout(fn, 0)
}
