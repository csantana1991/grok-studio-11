/**
 * FIGURE SELECTION — the single source of truth for which image an encounter
 * shows, anywhere in the app.
 *
 * Pure and React-free on purpose. While this lived inside the component it
 * could only be checked by clicking through the UI, which is how two defects
 * survived: a rotation that reached past a verification result, and a worklist
 * thumbnail computed differently from the viewer. Extracted here, the exact
 * production selection can be audited headlessly over all 33,000 encounters --
 * see selectFigure.test.ts and scripts/audit-images.ts.
 */

import type { LiveMatch } from './liveMatch'
import type { Encounter } from './generateCases'
import { stationIdForFinding } from './anatomyMap'
import { encounterPopulation, type Population } from './population'
import { rankMatches, type Verification } from './verifyMatch'
import { autoReview, type AutoReview } from './autoReview'
import { rankCandidates } from './qa/engine'
import { captionFitsFinding } from './findingCaption'
import { teachingMatch } from './teachingPlate'

function teachingCandidate(c: Encounter): Candidate {
  return {
    match: teachingMatch(c),
    verification: {
      verdict: 'plausible',
      score: 0,
      reasons: ['local stand-in — a published PubMed figure replaces this when one matches'],
      captionStation: c.stationId,
    },
  }
}

export interface Candidate {
  match: LiveMatch
  verification: Verification
  /** Automatic review of this pairing, attached when an encounter is known. */
  review?: AutoReview
}

/**
 * Attach automatic review to a candidate list for one encounter: drop hard
 * conflicts, then order by review score so the closest age, sex and modality
 * lead. A weak score never removes an image -- it only ranks lower.
 */
export function reviewCandidates(c: Encounter, list: Candidate[]): Candidate[] {
  return list
    .map((x) => ({ ...x, review: autoReview(x.match, c) }))
    .filter((x) => x.review!.verdict !== 'auto-rejected')
    .sort((a, b) => (b.review?.score ?? 0) - (a.review?.score ?? 0))
}

/** Borrowing same-station figures is disabled: a named diagnosis must match. */

export interface FigureIndex {
  /** finding -> population -> verified candidates, best first. */
  byFinding: Map<string, Record<Population, Candidate[]>>
  /** station -> every distinct figure whose caption describes that station. */
  byStation: Map<string, LiveMatch[]>
}

/**
 * Rank the whole match store once.
 *
 * Ranked separately per population: the same figure is a valid match for an
 * adult encounter and a mismatch for a paediatric one, so a single shared
 * ranking cannot serve both.
 */
export function buildFigureIndex(store: Record<string, LiveMatch[]>): FigureIndex {
  const byFinding = new Map<string, Record<Population, Candidate[]>>()
  for (const [finding, list] of Object.entries(store)) {
    if (!list?.length) continue
    const station = stationIdForFinding(finding) ?? ''
    byFinding.set(finding, {
      paediatric: rankMatches(list, finding, station, 'paediatric').filter(
        (r) => r.verification.verdict !== 'mismatch',
      ),
      adult: rankMatches(list, finding, station, 'adult').filter(
        (r) => r.verification.verdict !== 'mismatch',
      ),
      unknown: rankMatches(list, finding, station).filter(
        (r) => r.verification.verdict !== 'mismatch',
      ),
    })
  }

  const byStation = new Map<string, LiveMatch[]>()
  const seen = new Set<string>()
  for (const list of Object.values(store)) {
    for (const m of list ?? []) {
      if (seen.has(m.url)) continue
      seen.add(m.url)
      const st = stationIdForFinding(m.caption)
      if (!st) continue
      const bucket = byStation.get(st)
      if (bucket) bucket.push(m)
      else byStation.set(st, [m])
    }
  }

  return { byFinding, byStation }
}

/**
 * Verified candidate figures for an encounter, in display order.
 * Its own finding's published figures win. The local plate is only the
 * fallback, and it stays behind any real PubMed Central figure.
 */
export function candidatesFor(c: Encounter, index: FigureIndex): Candidate[] {
  const pop = encounterPopulation(c.age, c.categoryId)
  const own = (index.byFinding.get(c.finding)?.[pop] ?? []).filter((x) =>
    captionFitsFinding(c.finding, x.match.caption),
  )
  const plate = teachingCandidate(c)
  if (own.length) {
    const reviewed = reviewCandidates(c, own)
    if (reviewed.length) return [...reviewed, plate]
  }
  return [plate]
}

/**
 * The figure an encounter actually displays, including the per-encounter
 * rotation. `offset` is the reader's manual rematch cursor.
 */
export function figureFor(
  c: Encounter,
  index: FigureIndex,
  offset = 0,
): Candidate | undefined {
  const pool = orderedFor(c, index)
  if (!pool.length) return undefined
  return pool[offset % pool.length]
}

/**
 * The candidate list ordered by how well each figure represents the case, best
 * first — the same ordering the viewer opens on.
 *
 * This used to be `pool[(c.idx + offset) % pool.length]`: an index rotation that
 * handed the reader an arbitrary member of the acceptable set, and gave two
 * encounters with identical findings different images purely because of where
 * they sat in the log. Worse, the worklist thumbnail and the viewer computed
 * that offset differently, so they could disagree about the same case.
 */
export function orderedFor(c: Encounter, index: FigureIndex): Candidate[] {
  const pool = candidatesFor(c, index)
  if (pool.length < 2) return pool
  const byUrl = new Map(pool.map((x) => [x.match.url, x]))
  const ranked = rankCandidates(
    c,
    pool.map((x) => x.match),
  )
  const head = ranked.map((r) => byUrl.get(r.match.url)).filter((x) => x !== undefined)
  const scored = new Set(head.map((x) => x.match.url))
  return [...head, ...pool.filter((x) => !scored.has(x.match.url))]
}

/** Convenience for the worklist thumbnail: the same image, no offset. */
export function thumbFor(c: Encounter, index: FigureIndex): string | undefined {
  return figureFor(c, index)?.match.url
}

/**
 * Present a matched Nucleus study as a candidate figure.
 *
 * Nucleus studies are already region- and modality-matched against an audited
 * catalogue with its own provenance, so they lead the rotation: they are a
 * stronger match than a figure lifted from a paper's results section.
 */
export function nucleusCandidate(study: {
  images: { url: string; label: string }[]
  title: string
  collection: string
  modality: string
  source: string
  license: string
  sourceUrl: string
  id: string
}): Candidate | null {
  const first = study.images[0]
  if (!first) return null
  return {
    match: {
      url: first.url,
      caption: [study.title, first.label].filter(Boolean).join(' — '),
      relevance: 3,
      tier: 'finding',
      pmcid: study.id,
      title: study.title,
      authors: study.source,
      journal: study.collection,
      year: '',
      doi: '',
      license: study.license,
    } as LiveMatch,
    verification: {
      verdict: 'confirmed',
      score: 5,
      reasons: ['Nucleus catalogue match', study.collection].filter(Boolean),
      captionStation: null,
    },
  }
}
