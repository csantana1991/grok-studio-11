import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchMatches, primeCache, type LiveMatch } from '../data/liveMatch'
import {
  loadAllMatches,
  saveMatches,
  clearMatches,
  migrateLegacyMatches,
} from '../data/matchStore'

/**
 * Live literature matching across the encounter log.
 *
 * Matches are keyed by FINDING TEXT, not by encounter. The 33,000 encounters
 * are drawn from ~350 unique finding strings, so ~350 queries cover the entire
 * log -- which is what makes matching the whole worklist practical at all.
 *
 * A background loop runs continuously, topping up every finding toward
 * TARGET_PER_CASE figures. It is deliberately slow: the upstream services are
 * public and shared, and hammering them gets the host a CAPTCHA challenge
 * rather than results.
 */

export type MatchState = 'idle' | 'loading' | 'done' | 'empty' | 'error'

/** Figures to accumulate per finding before the loop moves on. */
export const TARGET_PER_CASE = 50

/** Gap between background top-up queries. Slow on purpose. */
const LOOP_DELAY_MS = 4000
/** Backoff after a failure, which usually means throttling upstream. */
const LOOP_BACKOFF_MS = 30000
/** Longer backoff when upstream explicitly refuses with a bot challenge. */
const LOOP_BLOCKED_MS = 5 * 60 * 1000
/** How often to re-read the headless builder's index. */
const INDEX_POLL_MS = 45000
/**
 * First-pass size for an interactive request. Asking for the full target up
 * front means up to 50 upstream round-trips before anything reaches the screen;
 * a small first pass paints an image in a second or two, then the deep top-up
 * continues behind it.
 */
const QUICK_LIMIT = 6

export interface BatchProgress {
  running: boolean
  done: number
  total: number
  current: string
}

const IDLE_BATCH: BatchProgress = { running: false, done: 0, total: 0, current: '' }

export interface LoopStatus {
  running: boolean
  /** Findings that have reached the target. */
  complete: number
  /** Findings with at least one figure. */
  started: number
  total: number
  current: string
  figures: number
  /** Upstream is serving bot challenges; the loop is waiting it out. */
  blocked: boolean
}

export function useLiteratureMatches(enabled: boolean, allFindings: string[] = []) {
  const [store, setStore] = useState<Record<string, LiveMatch[]>>({})
  const [state, setState] = useState<Record<string, MatchState>>({})
  const [batch, setBatch] = useState<BatchProgress>(IDLE_BATCH)
  const [loopOn, setLoopOn] = useState(true)
  const [loopCurrent, setLoopCurrent] = useState('')
  const [blocked, setBlocked] = useState(false)

  const abortBatch = useRef(false)
  const inflight = useRef<Set<string>>(new Set())
  // Mirrors `store` for the loop, so the loop body never closes over stale state.
  const storeRef = useRef<Record<string, LiveMatch[]>>({})
  const loopAlive = useRef(false)

  useEffect(() => {
    storeRef.current = store
  }, [store])

  /** Merge new figures into a finding, deduped by URL, and persist. */
  const merge = useCallback((finding: string, incoming: LiveMatch[]) => {
    setStore((prev) => {
      const existing = prev[finding] ?? []
      const seen = new Set(existing.map((m) => m.url))
      const merged = [...existing]
      for (const m of incoming) {
        if (seen.has(m.url)) continue
        seen.add(m.url)
        merged.push(m)
      }
      if (merged.length === existing.length) return prev
      void saveMatches(finding, merged)
      const next = { ...prev, [finding]: merged }
      storeRef.current = next
      return next
    })
  }, [])

  // Restore everything previously matched, then seed the request cache.
  // Migration runs first: matches accumulated before the move to IndexedDB
  // live under the old localStorage key and would otherwise be lost.
  useEffect(() => {
    let cancelled = false
    migrateLegacyMatches()
      .then(() => loadAllMatches())
      .then((saved) => {
        if (cancelled || !Object.keys(saved).length) return
        primeCache(saved)
        storeRef.current = saved
        setStore(saved)
        setState((s) => {
          const next = { ...s }
          for (const k of Object.keys(saved)) next[k] ??= 'done'
          return next
        })
      })
    return () => {
      cancelled = true
    }
  }, [])

  /**
   * Poll the index written by the always-on builder (scripts/build-match-index
   * .ts, auto-started by the dev server). The builder keeps matching whether or
   * not a tab is open, so the app re-reads it periodically to pick up whatever
   * accumulated while this page was closed or idle.
   */
  useEffect(() => {
    let cancelled = false
    const pull = () => {
      fetch('/match-index.json', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((idx: { entries?: Record<string, { results: LiveMatch[] }> } | null) => {
          if (cancelled || !idx?.entries) return
          for (const [finding, entry] of Object.entries(idx.entries)) {
            if (entry?.results?.length) merge(finding, entry.results)
          }
        })
        .catch(() => {
          /* no index yet; the in-tab loop still fills in */
        })
    }
    pull()
    const id = window.setInterval(pull, INDEX_POLL_MS)
    return () => {
      cancelled = true
      window.clearInterval(id)
    }
  }, [merge])

  /**
   * Interactive fetch for one finding. Two phases so the reader is never left
   * staring at an empty frame: a small first pass paints an image immediately,
   * then a deeper pass tops the finding up toward the target in the background.
   */
  const ensure = useCallback(
    async (finding: string, force = false): Promise<void> => {
      if ((!enabled && !force) || !finding) return
      if (inflight.current.has(finding)) return
      const held = storeRef.current[finding]?.length ?? 0
      if (!force && (held >= TARGET_PER_CASE || state[finding] === 'empty')) return

      inflight.current.add(finding)
      setState((s) => ({ ...s, [finding]: 'loading' }))
      try {
        // Phase 1 — fast: enough to put a verified image on screen now.
        const quick = await fetchMatches(finding, QUICK_LIMIT, undefined, true)
        if (quick.results.length) merge(finding, quick.results)
        setState((s) => ({
          ...s,
          [finding]:
            quick.results.length || held ? 'done' : quick.blocked ? 'error' : 'empty',
        }))

        // Phase 2 — deep: continue toward the target without blocking the UI.
        if (!quick.blocked) {
          void fetchMatches(finding, TARGET_PER_CASE, undefined, true)
            .then((full) => {
              if (full.results.length) merge(finding, full.results)
            })
            .catch(() => {
              /* the quick pass already delivered something usable */
            })
            .finally(() => inflight.current.delete(finding))
          return // phase 2 owns the inflight release
        }
      } catch {
        setState((s) => ({ ...s, [finding]: 'error' }))
      }
      inflight.current.delete(finding)
    },
    [enabled, state, merge],
  )

  /**
   * Continuous background top-up. Walks the finding list forever, always
   * working on whichever finding is furthest from the target.
   */
  useEffect(() => {
    if (!enabled || !loopOn || !allFindings.length) return
    if (loopAlive.current) return
    loopAlive.current = true
    let stopped = false

    const run = async () => {
      while (!stopped) {
        // Pick the finding with the fewest figures that is not yet at target.
        let pick = ''
        let fewest = Infinity
        for (const f of allFindings) {
          const n = storeRef.current[f]?.length ?? 0
          if (n >= TARGET_PER_CASE) continue
          if (n < fewest) {
            fewest = n
            pick = f
          }
        }
        if (!pick) {
          // Everything is at target; idle rather than spin.
          await new Promise((r) => setTimeout(r, LOOP_BACKOFF_MS))
          continue
        }

        setLoopCurrent(pick)
        let wait = LOOP_DELAY_MS
        try {
          const before = storeRef.current[pick]?.length ?? 0
          const res = await fetchMatches(pick, TARGET_PER_CASE, undefined, true)

          if (res.blocked) {
            // Upstream refused. Do NOT mark this finding done -- it would be
            // recorded as "no imagery exists" when nothing was actually looked
            // at. Wait it out and retry the same finding.
            setBlocked(true)
            wait = LOOP_BLOCKED_MS
          } else {
            setBlocked(false)
            if (res.results.length) merge(pick, res.results)
            const after = (storeRef.current[pick]?.length ?? 0) || before
            // Genuinely produced nothing new: mark done so the loop stops
            // re-picking it and starving every other finding.
            if (after <= before) {
              setState((s) => ({ ...s, [pick]: after ? 'done' : 'empty' }))
            }
          }
        } catch {
          setState((s) => ({ ...s, [pick]: 'error' }))
          wait = LOOP_BACKOFF_MS
        }
        await new Promise((r) => setTimeout(r, wait))
      }
      loopAlive.current = false
    }

    void run()
    return () => {
      stopped = true
      loopAlive.current = false
    }
  }, [enabled, loopOn, allFindings, merge])

  /** Bounded, user-triggered pass over the findings currently in view. */
  const runBatch = useCallback(
    async (findings: string[]) => {
      if (!enabled) return
      const todo = findings.filter(
        (f) => (storeRef.current[f]?.length ?? 0) < TARGET_PER_CASE,
      )
      if (!todo.length) return

      abortBatch.current = false
      setBatch({ running: true, done: 0, total: todo.length, current: todo[0] })
      for (let i = 0; i < todo.length; i++) {
        if (abortBatch.current) break
        setBatch({ running: true, done: i, total: todo.length, current: todo[i] })
        try {
          const res = await fetchMatches(todo[i], TARGET_PER_CASE, undefined, true)
          if (res.results.length) merge(todo[i], res.results)
          setState((s) => ({ ...s, [todo[i]]: res.results.length ? 'done' : 'empty' }))
        } catch {
          setState((s) => ({ ...s, [todo[i]]: 'error' }))
        }
        if (!abortBatch.current && i < todo.length - 1) {
          await new Promise((r) => setTimeout(r, 500))
        }
      }
      setBatch(IDLE_BATCH)
    },
    [enabled, merge],
  )

  const stopBatch = useCallback(() => {
    abortBatch.current = true
    setBatch(IDLE_BATCH)
  }, [])

  const reset = useCallback(async () => {
    await clearMatches()
    setStore({})
    storeRef.current = {}
    setState({})
  }, [])

  const values = Object.values(store)
  const loop: LoopStatus = {
    running: enabled && loopOn,
    complete: values.filter((v) => v.length >= TARGET_PER_CASE).length,
    started: values.filter((v) => v.length > 0).length,
    total: allFindings.length,
    current: loopCurrent,
    figures: values.reduce((a, v) => a + v.length, 0),
    blocked,
  }

  return {
    store,
    state,
    batch,
    ensure,
    runBatch,
    stopBatch,
    reset,
    loop,
    loopOn,
    setLoopOn,
    matchedCount: loop.started,
  }
}
