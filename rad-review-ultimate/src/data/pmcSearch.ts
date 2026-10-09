/**
 * PubMed Central figure search -- shared core.
 *
 * Used by BOTH the dev-server middleware (live, on demand) and the offline
 * index builder agent (bulk, ahead of time). One implementation so the live
 * path and the prebuilt index can never drift apart.
 *
 * Node-side only: it fetches the PMC article page, which the browser cannot
 * reach cross-origin.
 */

const UA = 'RadReviewUltimate/1.0 (residency teaching log; local install)'
const EPMC = 'https://www.ebi.ac.uk/europepmc/webservices/rest'

/** Words that carry no search signal in a radiology finding line. */
const STOP = new Set([
  'new', 'with', 'and', 'the', 'of', 'for', 'versus', 'vs', 'post', 'at', 'in',
  'on', 'to', 'no', 'a', 'an', 'left', 'right', 'bilateral', 'mild', 'severe',
  'acute', 'chronic', 'follow', 'up', 'study', 'scan', 'imaging', 'image',
  'showing', 'shows', 'demonstrating', 'consistent', 'suspicious', 'probable',
  'stable', 'negative', 'positive', 'without', 'within', 'from', 'after',
  // Generic clinical filler: present in most findings, discriminates nothing,
  // and narrows an AND query to zero hits.
  'disease', 'changes', 'finding', 'findings', 'assessment', 'evaluation',
  'response', 'cycle', 'protocol', 'series', 'view', 'views', 'plane', 'level',
  'rising', 'focal', 'multifocal', 'diffuse', 'complete', 'metabolic', 'therapy',
  'restaging', 'interim', 'recurrence', 'solitary', 'known', 'patient', 'scan',
])

/** Imaging words that mark a figure as an actual radiological image. */
const IMAGING =
  /\b(pet|ct|mri|mr|ultrasound|sonograph|radiograph|x-?ray|scinti|spect|axial|coronal|sagittal|fused|fusion|mip|angiogra|mammogra)\b/i

/** PMC page-status metadata sometimes leaks into a parsed <fig> block. */
const JUNK_CAPTION = /pmc-status-|pmc-prop-/i

/**
 * PMC answers sustained automated traffic with a CAPTCHA challenge page served
 * as HTTP 200. It contains no figure URLs, so it is indistinguishable from
 * "this article has no figures" unless detected explicitly -- and recording it
 * as a genuine empty result poisons the index and stops the background loop
 * from ever retrying. Detect it and fail loudly instead.
 */
const CHALLENGE = /recaptcha|challengepage|captcha-delivery|unusual traffic/i

import { CommonsThrottled, commonsQueries, searchCommons } from './commonsSearch'

export class BlockedError extends Error {
  constructor() {
    super('BLOCKED: upstream served a bot-challenge page instead of the article')
    this.name = 'BlockedError'
  }
}

export interface Citation {
  pmcid: string
  title: string
  authors: string
  journal: string
  year: string
  doi: string
  license: string
}

/**
 * How closely a figure was matched.
 *  finding -- resolved from the full finding text (most specific)
 *  broad   -- resolved after dropping terms to widen the query
 *  anatomy -- no figure matched the finding at all, so this is a
 *             station-level example of the right body region
 */
export type MatchTier = 'finding' | 'broad' | 'anatomy'

export interface MatchResult extends Citation {
  url: string
  caption: string
  /** How many query terms appear in the caption. Higher is a better match. */
  relevance: number
  tier: MatchTier
}

/**
 * Reusable licences: every Creative Commons variant plus CC0 and public
 * domain. NC and ND are included -- they permit display with attribution,
 * which is what this teaching log does -- and are badged in the UI so the
 * distinction stays visible. Articles with NO declared licence are still
 * excluded: "free to read" is not the same as "free to reuse".
 */
const REUSABLE_LICENCE = /^(cc0|cc\s*-?\s*by|public[\s-]?domain)/i

/** Ranking: pure CC BY first, then other CC, so the freest option wins ties. */
export function licenceRank(l: string): number {
  const s = l.toLowerCase().trim()
  if (s === 'cc by' || s === 'cc-by' || s === 'cc0') return 0
  if (s.startsWith('cc by-nc-nd') || s.startsWith('cc by-nd')) return 2
  return 1
}

/** Broad, station-level queries used when a finding matches nothing itself. */
export const ANATOMY_QUERIES: Record<string, string[]> = {
  VERTEX: ['brain', 'tomography'],
  SKULL_BASE: ['skull', 'base'],
  NECK: ['neck', 'lymph'],
  CHEST: ['chest', 'tomography'],
  UPPER_ABDOMEN: ['liver', 'abdomen'],
  MID_ABDOMEN: ['abdomen', 'bowel'],
  PELVIS: ['pelvis', 'pelvic'],
  THIGH: ['femur', 'thigh'],
  KNEE: ['knee', 'joint'],
  ANKLE: ['ankle', 'foot'],
  TOES: ['foot', 'metatarsal'],
}

export function extractTerms(finding: string): string[] {
  return finding
    .replace(/^\d+\s*[MFmf]\b/, ' ') // leading age/sex, e.g. "68M"
    .replace(/\bSUV\s*[\d.]+/gi, ' ')
    .replace(/\bDeauville\s*\d\b/gi, ' ')
    .replace(/[^A-Za-z\s-]/g, ' ')
    .split(/\s+/)
    .map((w) => w.trim().toLowerCase())
    .filter((w) => w.length > 3 && !STOP.has(w))
    .slice(0, 4)
}

async function get(url: string, timeoutMs = 15000): Promise<string> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: ctrl.signal })
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    return await r.text()
  } finally {
    clearTimeout(t)
  }
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

export async function searchArticles(terms: string[], want: number): Promise<Citation[]> {
  if (!terms.length) return []
  const u = new URL(`${EPMC}/search`)
  u.searchParams.set('query', `${terms.join(' AND ')} AND OPEN_ACCESS:Y AND HAS_FT:Y`)
  u.searchParams.set('format', 'json')
  u.searchParams.set('pageSize', String(Math.max(want * 4, 12)))
  u.searchParams.set('resultType', 'core')

  const data = JSON.parse(await get(u.toString())) as {
    resultList?: { result?: Record<string, unknown>[] }
  }

  return (data.resultList?.result ?? [])
    .filter((r) => typeof r.pmcid === 'string')
    .filter((r) => REUSABLE_LICENCE.test(String(r.license ?? '')))
    .map((r) => ({
      pmcid: String(r.pmcid),
      title: stripTags(String(r.title ?? '')),
      authors: String(r.authorString ?? ''),
      journal: String(
        (r.journalInfo as { journal?: { title?: string } } | undefined)?.journal?.title ??
          '',
      ),
      year: String(r.pubYear ?? ''),
      doi: String(r.doi ?? ''),
      license: String(r.license ?? ''),
    }))
}

/** Resolve a PMC article's figures to real CDN image URLs plus captions. */
export async function figuresFor(
  pmcid: string,
): Promise<{ url: string; caption: string }[]> {
  const [xml, html] = await Promise.all([
    get(`${EPMC}/${pmcid}/fullTextXML`),
    get(`https://pmc.ncbi.nlm.nih.gov/articles/${pmcid}/`),
  ])

  if (CHALLENGE.test(html)) throw new BlockedError()

  const blobs = new Map<string, string>()
  for (const m of html.matchAll(
    /https:\/\/cdn\.ncbi\.nlm\.nih\.gov\/pmc\/blobs\/[^"'\s]+?\/([^/"'\s]+\.(?:jpg|png|webp))/g,
  )) {
    blobs.set(m[1], m[0])
  }

  const out: { url: string; caption: string }[] = []
  for (const m of xml.matchAll(/<fig[\s\S]*?<\/fig>/g)) {
    const block = m[0]
    const graphic = block.match(/xlink:href="([^"]+)"/)?.[1]
    if (!graphic) continue
    const url = blobs.get(graphic)
    if (!url) continue
    const caption = stripTags(block)
    if (JUNK_CAPTION.test(caption)) continue
    if (!IMAGING.test(caption)) continue
    out.push({ url, caption })
  }
  return out
}

/** Full pipeline for one finding: search, resolve figures, rank. */
export const DEFAULT_TARGET = 50

/** Default ceiling on the PubMed Central phase of a match. */
export const PMC_BUDGET_MS = 20_000

export async function matchFinding(
  finding: string,
  limit = DEFAULT_TARGET,
  maxArticles = 0,
  /** Station id, enabling the anatomy-level fallback. */
  stationId?: string,
  /** Figures already held for this finding; used to dedupe and to top up. */
  existing: MatchResult[] = [],
  /**
   * How long the PubMed Central phase may take before the search moves on to
   * the Commons fallback.
   *
   * While PMC is throttling, every rung of the query cascade still costs a full
   * request round trip, and a live lookup was taking 40-60 seconds to arrive at
   * nothing. The reader is better served by figures from a weaker source in two
   * seconds than by a perfect source that never answers.
   */
  budgetMs = PMC_BUDGET_MS,
): Promise<{
  terms: string[]
  results: MatchResult[]
  /** PubMed Central refused us. */
  blocked: boolean
  /** Wikimedia Commons refused us too — nothing was read from either. */
  commonsBlocked: boolean
}> {
  const started = Date.now()
  // Enough articles to plausibly reach the target: most yield 1-4 usable
  // figures. Capped so a single finding cannot stampede the upstream services.
  const articleBudget = maxArticles || Math.min(25, Math.max(6, Math.ceil(limit / 2)))
  const terms = extractTerms(finding)
  const results: MatchResult[] = [...existing]
  const seen = new Set(results.map((r) => r.url))

  /**
   * Query cascade, widening until something resolves:
   *   1. all extracted terms ANDed        -> tier 'finding'
   *   2. progressively fewer terms        -> tier 'broad'
   *   3. the station's anatomy query      -> tier 'anatomy'
   *
   * Step 3 guarantees every encounter can show real imagery of the correct
   * body region even when its exact finding has no openly-licensed figure.
   * The tier is carried through so the UI never implies an anatomy-level
   * example was matched to the specific finding.
   */
  const attempts: { subset: string[]; tier: MatchTier }[] = []
  for (let n = terms.length; n >= 2; n--) {
    attempts.push({ subset: terms.slice(0, n), tier: n === terms.length ? 'finding' : 'broad' })
  }
  if (terms.length === 1) attempts.push({ subset: terms, tier: 'finding' })
  const anatomy = stationId ? ANATOMY_QUERIES[stationId] : undefined
  if (anatomy) attempts.push({ subset: anatomy, tier: 'anatomy' })

  let blocked = false
  for (const { subset, tier } of attempts) {
    if (blocked) break
    // >= so a budget of 0 skips PubMed Central entirely, which is how the
    // builder keeps harvesting Commons while PMC is in cooldown.
    if (Date.now() - started >= budgetMs) break
    let articles: Citation[] = []
    try {
      articles = await searchArticles(subset, limit)
    } catch {
      continue
    }

    for (const art of articles.slice(0, articleBudget)) {
      if (results.length >= limit) break
      let figs: { url: string; caption: string }[] = []
      try {
        figs = await figuresFor(art.pmcid)
      } catch (e) {
        // Throttling affects every article equally: stop reading PMC rather
        // than grinding through 24 more requests that will all be refused.
        // The block is reported to the caller, but the search continues into
        // the Commons fallback below -- being throttled by one archive is no
        // reason to leave the encounter with no imagery at all.
        if (e instanceof BlockedError) {
          blocked = true
          break
        }
        continue
      }
      // Take every usable figure, not just the first few: reaching a target of
      // 50 needs the whole article, and duplicates are filtered by URL anyway.
      for (const f of figs) {
        if (results.length >= limit) break
        if (seen.has(f.url)) continue
        seen.add(f.url)
        const lc = f.caption.toLowerCase()
        results.push({
          ...art,
          url: f.url,
          caption: f.caption.slice(0, 320),
          relevance: terms.filter((t) => lc.includes(t)).length,
          tier,
        })
      }
    }

    // Keep widening until the target is met -- earlier behaviour stopped at the
    // first rung that produced anything, which capped most findings at 1-3
    // figures and made a 50-image target unreachable.
    if (results.length >= limit) break
  }

  /**
   * Top up from Wikimedia Commons.
   *
   * Runs whenever PMC came up short, whether because it is throttling us or
   * because the finding simply has no openly-licensed figure there. Commons
   * results are a weaker source -- no case context, variable labelling -- so
   * they arrive AFTER whatever PMC gave and are sorted below it by relevance.
   * Nothing here bypasses verification: these join the same candidate pool the
   * QA agent judges, and a wrong-region file is rejected exactly as a wrong PMC
   * figure is.
   */
  let commonsBlocked = false
  if (results.length < limit) {
    for (const { query, tier } of commonsQueries(finding, terms, stationId)) {
      if (results.length >= limit) break
      let found: MatchResult[] = []
      try {
        found = await searchCommons(query, limit - results.length, tier)
      } catch (e) {
        // Throttling applies to every query equally, so stop asking. Reported
        // to the caller so a rate limit is never written down as "this finding
        // has no imagery" -- the mistake that made PMC's block look like an
        // empty archive.
        if (e instanceof CommonsThrottled) {
          commonsBlocked = true
          break
        }
        continue
      }
      for (const m of found) {
        if (results.length >= limit) break
        if (seen.has(m.url)) continue
        seen.add(m.url)
        results.push(m)
      }
    }
  }

  // Best caption match first; among equals, prefer the freest licence.
  results.sort(
    (a, b) => b.relevance - a.relevance || licenceRank(a.license) - licenceRank(b.license),
  )

  return { terms, results, blocked, commonsBlocked }
}
