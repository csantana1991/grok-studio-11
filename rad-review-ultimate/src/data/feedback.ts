/**
 * IMAGE FEEDBACK — approve / reject, and learn from it.
 *
 * Automated verification catches the wrong region, the wrong population and the
 * wrong kind of figure, but it reads captions, not pixels. It cannot tell that
 * a correctly-captioned image is a poor teaching example. That judgement is the
 * reader's, so it is recorded and fed back:
 *
 *   rejected  never offered again, for any encounter
 *   approved  ranked first for that finding
 *
 * It also generalises. A domain that keeps getting rejected is down-ranked
 * everywhere, so a bad source stops costing a decision on every case.
 */

import type { LiveMatch } from './liveMatch'

export type Verdict = 'approved' | 'rejected'

export interface FeedbackEntry {
  url: string
  verdict: Verdict
  /** Finding the judgement was made against. */
  finding: string
  stationId: string
  at: number
}

const DB_NAME = 'rr-image-feedback'
const DB_VERSION = 1
const STORE = 'verdicts'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'url' })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

function tx<T>(
  mode: IDBTransactionMode,
  run: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode)
        const req = run(t.objectStore(STORE))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
        t.oncomplete = () => db.close()
      }),
  )
}

export async function loadFeedback(): Promise<Record<string, FeedbackEntry>> {
  try {
    const all = await tx<FeedbackEntry[]>('readonly', (s) => s.getAll())
    const out: Record<string, FeedbackEntry> = {}
    for (const e of all) if (e?.url) out[e.url] = e
    return out
  } catch {
    return {}
  }
}

export async function saveVerdict(entry: FeedbackEntry): Promise<void> {
  try {
    await tx('readwrite', (s) => s.put(entry))
  } catch {
    /* non-fatal: the session keeps its in-memory copy */
  }
}

export async function clearVerdict(url: string): Promise<void> {
  try {
    await tx('readwrite', (s) => s.delete(url))
  } catch {
    /* non-fatal */
  }
}

/** Host of an image URL, used for the source-level signal. */
export function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export interface FeedbackModel {
  byUrl: Record<string, FeedbackEntry>
  /** domain -> net score. Negative means repeatedly rejected. */
  byDomain: Record<string, number>
}

/** Minimum verdicts on a domain before its score is allowed to influence rank. */
const DOMAIN_EVIDENCE_THRESHOLD = 3

export function buildFeedbackModel(byUrl: Record<string, FeedbackEntry>): FeedbackModel {
  const counts: Record<string, { pos: number; neg: number }> = {}
  for (const e of Object.values(byUrl)) {
    const d = domainOf(e.url)
    if (!d) continue
    counts[d] ??= { pos: 0, neg: 0 }
    if (e.verdict === 'approved') counts[d].pos++
    else counts[d].neg++
  }

  const byDomain: Record<string, number> = {}
  for (const [d, c] of Object.entries(counts)) {
    const total = c.pos + c.neg
    // One bad image is not a bad source. Wait for a pattern.
    if (total < DOMAIN_EVIDENCE_THRESHOLD) continue
    byDomain[d] = c.pos - c.neg
  }
  return { byUrl, byDomain }
}

export function verdictFor(model: FeedbackModel, url: string): Verdict | undefined {
  return model.byUrl[url]?.verdict
}

/**
 * Apply learned feedback to a candidate list: drop rejected images, promote
 * approved ones, and order the rest by how their source has fared.
 */
export function applyFeedback<T extends { match: Pick<LiveMatch, 'url'> }>(
  candidates: T[],
  model: FeedbackModel,
): T[] {
  const kept = candidates.filter((c) => model.byUrl[c.match.url]?.verdict !== 'rejected')
  return kept.sort((a, b) => {
    const av = model.byUrl[a.match.url]?.verdict === 'approved' ? 1 : 0
    const bv = model.byUrl[b.match.url]?.verdict === 'approved' ? 1 : 0
    if (av !== bv) return bv - av
    const ad = model.byDomain[domainOf(a.match.url)] ?? 0
    const bd = model.byDomain[domainOf(b.match.url)] ?? 0
    return bd - ad
  })
}
