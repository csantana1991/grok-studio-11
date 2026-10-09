import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import CaseList from './components/CaseList'
import Viewer from './components/Viewer'
import InfoBar from './components/InfoBar'
import ControlPanel from './components/ControlPanel'
import MountDrawer from './components/MountDrawer'
import LiteratureMatch from './components/LiteratureMatch'
import StackViewer from './components/StackViewer'
import NucleusCase from './components/NucleusCase'
import NucleusExplorer from './components/NucleusExplorer'
import QaConsole from './components/QaConsole'
import RadAtlasPanel from './components/RadAtlasPanel'
import AudiobookBar from './components/AudiobookBar'
import type { LiveMatch } from './data/liveMatch'
import { useImageQa } from './hooks/useImageQa'
import { rankCandidates } from './data/qa/engine'
import { useLiveImageCheck } from './hooks/useLiveImageCheck'
import { usePageImageAudit } from './hooks/usePageImageAudit'
import { useNucleusLibrary } from './hooks/useNucleusLibrary'
import { matchStudies } from './data/nucleus'
import { useDebounced, useNoPrint } from './hooks/useDebounced'
import { useMountedImages } from './hooks/useMountedImages'
import { useLiteratureMatches } from './hooks/useLiteratureMatches'
import { useFeedback } from './hooks/useFeedback'
import { caseScript, figureScript, useAudiobook } from './hooks/useAudiobook'
import { applyFeedback } from './data/feedback'
import { generateCases, type Encounter } from './data/generateCases'
import { CATEGORY_BY_ID, GRAND_TOTAL } from './data/categories'
import { getStationForSlice } from './data/stations'
import { FINDING_POOLS } from './data/findings'
import { SOURCE_IMAGES } from './data/sourceImages'
import {
  buildFigureIndex,
  candidatesFor as selectCandidates,
  thumbFor as selectThumb,
  nucleusCandidate,
} from './data/selectFigure'
import { teachingMatch, teachingPlateFor } from './data/teachingPlate'

/**
 * Unmatched findings processed per "match all" run. Bounded to stay polite to
 * the public APIs -- press again to continue through the remainder.
 */
const BATCH_LIMIT = 50

function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-rr-bg">
      <div className="flex h-12 w-12 items-center justify-center rounded border border-rr-blue-lit bg-rr-blue/25 text-[17px] font-bold text-rr-blue-lit">
        RR
      </div>
      <p className="text-[13px] font-bold tracking-[0.16em] text-white">
        Indexing 33,000 encounters...
      </p>
      <div className="h-1 w-64 overflow-hidden rounded bg-rr-raised">
        <div className="rr-scan h-full w-full bg-rr-blue-lit" />
      </div>
      <p className="text-[10px] tracking-[0.14em] text-rr-dim uppercase">
        Client-side generation &middot; no external fetch
      </p>
    </div>
  )
}

export default function App() {
  useNoPrint()

  const [indexing, setIndexing] = useState(true)
  const [filter, setFilter] = useState('ALL')
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounced(query, 180)
  const [slice, setSlice] = useState(95)
  const [selected, setSelected] = useState<Encounter | null>(null)
  const [mountOpen, setMountOpen] = useState(false)
  const [stackOpen, setStackOpen] = useState(false)
  const [nucleusOpen, setNucleusOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [atlasOpen, setAtlasOpen] = useState(false)
  /**
   * A figure the reader pulled in from RAD ATLAS, pinned ahead of every other
   * candidate. Held with the accession it was chosen for: a figure picked while
   * reading one case must not follow the reader to the next one.
   */
  const [atlasPick, setAtlasPick] = useState<{ accession: string; match: LiveMatch } | null>(null)
  const mountApi = useMountedImages()
  const mountedCount = SOURCE_IMAGES.filter((s) => mountApi.urls[s.filename]).length

  // Live public literature search over the encounter log.
  const [liveEnabled, setLiveEnabled] = useState(true)
  const allFindings = useMemo(() => {
    const set = new Set<string>()
    for (const pool of Object.values(FINDING_POOLS)) for (const f of pool) set.add(f)
    return [...set]
  }, [])
  const lit = useLiteratureMatches(liveEnabled, allFindings)

  // Nucleus case library (optional export at public/nucleus-export.json).
  const nucleus = useNucleusLibrary()

  // Reader verdicts on images, persisted and fed back into ranking.
  const feedback = useFeedback()

  // All 33,000 encounters, built client-side in a single memo.
  const cases = useMemo(() => generateCases(), [])

  useEffect(() => {
    const id = window.setTimeout(() => setIndexing(false), 550)
    return () => window.clearTimeout(id)
  }, [])

  // Open on a PET/Hybrid ankle study at slice 095 -- the regression level.
  useEffect(() => {
    if (selected) return
    const seed =
      cases.find((c) => c.categoryId === 'PETHYB' && c.stationId === 'ANKLE') ??
      cases.find((c) => c.categoryId === 'PETHYB') ??
      cases[0]
    setSelected(seed)
  }, [cases, selected])

  const byQuery = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase()
    if (!q) return cases
    const terms = q.split(/\s+/)
    return cases.filter((c) => terms.every((t) => c.search.includes(t)))
  }, [cases, debouncedQuery])

  const counts = useMemo(() => {
    const tally: Record<string, number> = {}
    for (const c of byQuery) tally[c.categoryId] = (tally[c.categoryId] ?? 0) + 1
    return tally
  }, [byQuery])

  const filtered = useMemo(
    () => (filter === 'ALL' ? byQuery : byQuery.filter((c) => c.categoryId === filter)),
    [byQuery, filter],
  )

  const station = getStationForSlice(slice)
  const cat = selected ? CATEGORY_BY_ID[selected.categoryId] : null

  // Unique finding strings drive matching: ~350 queries cover all 33,000 rows.
  const uniqueFindingsInView = useMemo(() => {
    const set = new Set<string>()
    for (const c of filtered) set.add(c.finding)
    return [...set]
  }, [filtered])

  const totalUniqueFindings = allFindings.length

  /** Manual rematch cursor, advanced by clicking the image or NEXT MATCH. */
  const [matchOffset, setMatchOffset] = useState(0)

  /** Reset the rematch cursor whenever the selected encounter changes. */
  useEffect(() => {
    setMatchOffset(0)
  }, [selected?.idx])

  /**
   * Verified candidates per finding, ranked once per store change. Both the
   * viewer and the worklist thumbnails read from this, so a row can never show
   * a different image from the one clicking it will load.
   */
  /**
   * Ranked, verified figure index over the whole match store. The selection
   * logic lives in data/selectFigure.ts so the exact production choice can be
   * audited headlessly over all 33,000 encounters, not just by clicking.
   */
  const figureIndex = useMemo(() => buildFigureIndex(lit.store), [lit.store])

  const candidatesFor = useCallback(
    (c: Encounter) => selectCandidates(c, figureIndex),
    [figureIndex],
  )

  const thumbFor = useCallback(
    (c: Encounter) => selectThumb(c, figureIndex) ?? teachingPlateFor(c).url,
    [figureIndex],
  )

  /**
   * THE AUTONOMOUS IMAGE QA AGENT.
   * Validates all 33,000 case-to-image connections in the background, replaces
   * what fails, and locks what passes so the same case keeps the same figure.
   */
  const qa = useImageQa(cases, figureIndex, feedback.model)

  const caseById = useMemo(() => {
    const m = new Map<string, Encounter>()
    for (const c of cases) m.set(c.accession, c)
    return m
  }, [cases])

  /** Nucleus studies matching the selected encounter's region and modality. */
  const nucleusStudies = useMemo(
    () =>
      selected && nucleus.loaded
        ? matchStudies(
            nucleus,
            selected.finding,
            selected.stationId,
            selected.categoryId,
            6,
            selected.age,
          )
        : [],
    [nucleus, selected],
  )

  /** Reset the manual rematch cursor whenever the encounter changes. */
  useEffect(() => {
    setMatchOffset(0)
  }, [selected?.idx])

  /**
   * Candidate figures for the selected encounter, Nucleus studies first.
   * A Nucleus study is matched against an audited catalogue by region and
   * modality, so it outranks a figure lifted from a paper's results section.
   */
  const rankedMatches = useMemo(() => {
    if (!selected) return []
    const base = candidatesFor(selected)
    const fromNucleus = nucleusStudies
      .map((st) => nucleusCandidate(st))
      .filter((x): x is NonNullable<typeof x> => x !== null)
    // A figure the reader pulled from RAD ATLAS leads everything: they chose it
    // deliberately, which outranks any automatic ranking.
    const pick = atlasPick?.accession === selected.accession ? atlasPick.match : null
    const pinned = pick
      ? [
          {
            match: pick,
            verification: {
              verdict: 'plausible' as const,
              score: 3,
              reasons: ['sent from RAD ATLAS by the reader'],
              captionStation: null,
            },
          },
        ]
      : []
    const seen = new Set([...pinned, ...fromNucleus].map((c) => c.match.url))
    const merged = [
      ...pinned,
      ...fromNucleus.filter((c) => c.match.url !== pick?.url),
      ...base.filter((c) => !seen.has(c.match.url)),
    ]
    // Reader verdicts win over every automatic signal: rejected images are
    // dropped outright and approved ones lead.
    return applyFeedback(merged, feedback.model)
  }, [selected, candidatesFor, nucleusStudies, feedback.model, atlasPick])

  /** How many leading candidates came from Nucleus. */
  const nucleusLead = useMemo(
    () => nucleusStudies.filter((st) => st.images.length).length,
    [nucleusStudies],
  )

  /**
   * The selected encounter's candidates, ordered by how well each represents the
   * case, best first.
   *
   * This replaced an index rotation (`encounter.idx % pool.length`), which put an
   * arbitrary figure in front of the reader: two cases with identical findings
   * opened on different images purely because of their position in the log, and
   * neither was necessarily the closest match. The order now comes from the same
   * agent that judges every connection, so double-clicking a case opens on its
   * best-supported image and NEXT MATCH walks down from there.
   */
  const humanVerdicts = useMemo(() => {
    const out: Record<string, 'approved' | 'rejected'> = {}
    for (const [url, e] of Object.entries(feedback.model.byUrl)) out[url] = e.verdict
    return out
  }, [feedback.model])

  const orderedMatches = useMemo(() => {
    if (!selected || !rankedMatches.length) return []
    // Only figures that survived verification: rotating across the whole list
    // would put a wrong-region figure in front of the reader by default.
    const acceptable = rankedMatches.filter((r) => r.verification.verdict !== 'mismatch')
    if (!acceptable.length) return []

    const byUrl = new Map(acceptable.map((r) => [r.match.url, r]))
    const ranked = rankCandidates(
      selected,
      acceptable.map((r) => r.match),
      { probes: qa.probes, humanVerdicts },
    )
    const ordered = ranked.map((r) => byUrl.get(r.match.url)).filter((r) => r !== undefined)
    // Anything beyond the scored pool keeps its existing order behind the ranked
    // head, so a long candidate list is never truncated in the viewer.
    const scored = new Set(ordered.map((r) => r.match.url))
    return [...ordered, ...acceptable.filter((r) => !scored.has(r.match.url))]
  }, [rankedMatches, selected, qa.probes, humanVerdicts])

  const currentMatch = useMemo(() => {
    if (!selected || !orderedMatches.length) return undefined
    // The reader's own RAD ATLAS pick outranks the ranking: it is a deliberate
    // choice, and the agent's job is to inform it, not overrule it.
    if (atlasPick?.accession === selected.accession) {
      const hit = orderedMatches.find((r) => r.match.url === atlasPick.match.url)
      if (hit) return hit
    }
    return orderedMatches[matchOffset % orderedMatches.length]
  }, [orderedMatches, selected, matchOffset, atlasPick])

  /**
   * Live check of the exact image on screen: fetched and re-judged the moment a
   * case is selected or double-clicked, so the verdict beside the image is about
   * that file now, not a sweep conclusion from minutes ago.
   */
  const liveCheck = useLiveImageCheck(selected, currentMatch?.match, qa.noteProbe, qa.probeFor)

  /** Everything actually rendered: broken frames, collapsed layouts, thumbnails. */
  const pageAudit = usePageImageAudit()

  /** Figures the reader can cycle through, best first. */
  const matchPoolSize = orderedMatches.length

  const caseImage = currentMatch?.match ?? (selected ? teachingMatch(selected) : undefined)

  const audio = useAudiobook()
  const playAllRef = useRef(false)
  const speakOnMatchRef = useRef(false)
  const filteredRef = useRef(filtered)
  filteredRef.current = filtered
  const selectedRef = useRef(selected)
  selectedRef.current = selected
  const stationRef = useRef(station)
  stationRef.current = station
  const figureRef = useRef(caseImage)
  figureRef.current = caseImage

  useEffect(() => {
    if (!speakOnMatchRef.current) return
    speakOnMatchRef.current = false
    const enc = selectedRef.current
    if (!enc) return
    const fig = figureRef.current
    const st = stationRef.current
    const total = matchPoolSize
    const i = total ? matchOffset % total : 0
    audio.speakQueue(
      figureScript(enc, st, fig, i, total, {
        verdict: currentMatch?.verification.verdict,
        agent: liveCheck.status,
        reasons: liveCheck.reasons,
      }),
    )
  }, [matchOffset, caseImage?.url])

  const playEncounter = useCallback(
    (enc: Encounter, thenNext: boolean) => {
      playAllRef.current = thenNext
      const st = getStationForSlice(enc.slice)
      const parts = caseScript(enc, st, figureRef.current)
      audio.speakQueue(parts, () => {
        if (!playAllRef.current) return
        const list = filteredRef.current
        const i = list.findIndex((c) => c.idx === enc.idx)
        const nxt = list[i + 1]
        if (!nxt) {
          playAllRef.current = false
          return
        }
        setSelected(nxt)
        setSlice(nxt.slice)
        window.setTimeout(() => playEncounter(nxt, true), 80)
      })
    },
    [audio],
  )

  /**
   * Double-click commits an encounter to the viewer: select it, jump the
   * viewer to its slice, and if it has no matched imagery, run an explicit
   * live search for it straight away.
   */
  const loadEncounter = useCallback(
    (c: Encounter) => {
      setSelected(c)
      setSlice(c.slice)
      setMatchOffset(0)
      // Double-click is an explicit refresh for this one encounter: jump the
      // queue and top it up now, regardless of what the background loop is
      // currently working on.
      void lit.ensure(c.finding, true)
    },
    [lit],
  )

  // Auto-match the selected encounter as the reader moves through the worklist.
  const selectedFinding = selected?.finding
  const ensureMatch = lit.ensure
  useEffect(() => {
    if (!liveEnabled || !selectedFinding) return
    const id = window.setTimeout(() => void ensureMatch(selectedFinding), 250)
    return () => window.clearTimeout(id)
  }, [liveEnabled, selectedFinding, ensureMatch])

  if (indexing) return <Loading />

  return (
    // A PACS workstation layout has a floor below which columns cannot usefully
    // compress. Below it the whole console scrolls horizontally rather than
    // crushing the viewer and the teaching bar into unreadable slivers.
    <div className="h-full w-full overflow-auto bg-rr-bg">
    <div className="flex h-full min-h-0 min-w-[1500px] flex-col bg-rr-bg">
      <Header
        active={filter}
        onSelect={setFilter}
        counts={counts}
        mountedCount={mountedCount}
        totalImages={SOURCE_IMAGES.length}
        onOpenMount={() => setMountOpen(true)}
        nucleusCount={nucleus.studies.length}
        onOpenNucleus={() => setNucleusOpen(true)}
        reviewedCount={qa.progress.done}
        totalEncounters={cases.length}
        pendingReview={qa.exceptions.length}
        onOpenReview={() => setReviewOpen(true)}
      />

      <main className="flex min-h-0 flex-1">
        <CaseList
          cases={filtered}
          selectedIdx={selected?.idx ?? null}
          onSelect={(c) => {
            playAllRef.current = false
            audio.stop()
            setSelected(c)
            setSlice(c.slice)
          }}
          onLoad={loadEncounter}
          query={query}
          onQuery={setQuery}
          filter={filter}
          onFilter={setFilter}
          indexing={indexing}
          thumbFor={thumbFor}
          atlasOpen={atlasOpen}
          onToggleAtlas={() => setAtlasOpen((v) => !v)}
          atlasPanel={
            <RadAtlasPanel
              open={atlasOpen}
              query={query}
              onClose={() => setAtlasOpen(false)}
              encounter={selected}
              onUse={(m) => {
                if (!selected) return
                setAtlasPick({ accession: selected.accession, match: m })
                setMatchOffset(0)
              }}
            />
          }
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <Viewer
            slice={slice}
            onSlice={setSlice}
            finding={selected?.finding ?? 'No encounter selected'}
            modalityLabel={cat?.label ?? '--'}
            accent={cat?.accent ?? '#3b82f6'}
            mounted={mountApi.urls}
            onMountFile={(name, file) => void mountApi.mount(name, file)}
            onMountBatch={(files) => void mountApi.mountBatch(files)}
            caseImage={caseImage}
            caseLabel={selected?.accession}
            verdict={currentMatch?.verification.verdict}
            verdictReasons={currentMatch?.verification.reasons}
            agentStatus={liveCheck.status}
            agentReasons={liveCheck.reasons}
            agentBusy={liveCheck.busy}
            matchIndex={matchPoolSize ? matchOffset % matchPoolSize : 0}
            matchTotal={matchPoolSize}
            onNextMatch={
              matchPoolSize > 1
                ? () => {
                    speakOnMatchRef.current = true
                    setMatchOffset((o) => o + 1)
                  }
                : undefined
            }
            onOpenStack={selected ? () => setStackOpen(true) : undefined}
            categoryId={selected?.categoryId}
            imageVerdict={
              caseImage ? feedback.model.byUrl[caseImage.url]?.verdict : undefined
            }
            onJudgeImage={
              caseImage && selected
                ? (v) =>
                    feedback.judge(caseImage.url, v, selected.finding, selected.stationId)
                : undefined
            }
            nucleusCount={nucleusLead}
            onShowNucleus={
              nucleusLead > 0 && selected
                ? () => setMatchOffset(-(selected.idx % Math.max(1, rankedMatches.length)))
                : undefined
            }
            caseSearching={selectedFinding ? lit.state[selectedFinding] === 'loading' : false}
            caseSearchEmpty={selectedFinding ? lit.state[selectedFinding] === 'empty' : false}
            onSearchCase={
              selectedFinding ? () => void lit.ensure(selectedFinding, true) : undefined
            }
          />
          <InfoBar station={station} slice={slice} />
        </div>

        <ControlPanel
          active={selected}
          slice={slice}
          station={station}
          onSlice={setSlice}
          literature={
            <>
            <NucleusCase
              studies={nucleusStudies}
              libraryLoaded={nucleus.loaded}
              encounterLabel={selected?.accession ?? ''}
            />
            <LiteratureMatch
              finding={selected?.finding ?? ''}
              matches={selectedFinding ? lit.store[selectedFinding] : undefined}
              state={selectedFinding ? lit.state[selectedFinding] : undefined}
              enabled={liveEnabled}
              onToggleEnabled={setLiveEnabled}
              onSearch={() => selectedFinding && void lit.ensure(selectedFinding)}
              batch={lit.batch}
              onRunBatch={() =>
                void lit.runBatch(uniqueFindingsInView.slice(0, BATCH_LIMIT))
              }
              onStopBatch={lit.stopBatch}
              matchedCount={lit.matchedCount}
              uniqueFindings={totalUniqueFindings}
              loop={lit.loop}
              loopOn={lit.loopOn}
              onToggleLoop={lit.setLoopOn}
            />
            </>
          }
        />
      </main>

      <AudiobookBar
        speaking={audio.speaking}
        rate={audio.rate}
        onRate={audio.setRate}
        line={audio.line}
        index={audio.index}
        total={audio.total}
        onPlayCase={() => {
          if (!selected) return
          playAllRef.current = false
          playEncounter(selected, false)
        }}
        onPlayList={() => {
          const enc = selected ?? filtered[0]
          if (!enc) return
          if (!selected) {
            setSelected(enc)
            setSlice(enc.slice)
          }
          playEncounter(enc, true)
        }}
        onStop={() => {
          playAllRef.current = false
          audio.stop()
        }}
        label={
          selected
            ? `${selected.accession} · ${selected.finding}`
            : 'Select a case, then press play'
        }
      />
      <footer className="flex shrink-0 items-center gap-3 border-t border-rr-line bg-rr-panel px-3 py-1 text-[9px] text-rr-dim">
        <span>
          {GRAND_TOTAL.toLocaleString()} encounters indexed client-side
        </span>
        <span className="text-rr-line">|</span>
        <span>{filtered.length.toLocaleString()} in current view</span>
        <span className="text-rr-line">|</span>
        <span className="text-rr-green">Slice 042 = UPPER ABDOMEN</span>
        <span className="text-rr-line">|</span>
        <span className="text-rr-green">Slice 095 = ANKLE</span>
        <span className="ml-auto">Hardcopy disabled &middot; teaching log</span>
      </footer>

      <QaConsole
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        summary={qa.summary}
        records={qa.records}
        exceptions={qa.exceptions}
        usable={qa.usable}
        blocked={qa.blocked}
        caseById={caseById}
        chosen={qa.chosen}
        progress={qa.progress}
        running={qa.running}
        probed={qa.probed}
        pageAudit={pageAudit}
        model={feedback.model}
        onJudge={feedback.judge}
        onOpenCase={(id) => {
          const c = caseById.get(id)
          if (!c) return
          setSelected(c)
          setSlice(c.slice)
          setMatchOffset(0)
          setReviewOpen(false)
        }}
        onRevalidate={qa.revalidate}
      />

      <NucleusExplorer
        open={nucleusOpen}
        onClose={() => setNucleusOpen(false)}
        library={nucleus}
        initial={nucleusStudies[0] ?? null}
      />

      <StackViewer
        open={stackOpen}
        onClose={() => setStackOpen(false)}
        encounter={selected}
        matches={selected ? (lit.store[selected.finding] ?? []) : []}
        studies={nucleusStudies}
      />

      <MountDrawer
        open={mountOpen}
        onClose={() => setMountOpen(false)}
        mountApi={mountApi}
      />
    </div>
    </div>
  )
}
