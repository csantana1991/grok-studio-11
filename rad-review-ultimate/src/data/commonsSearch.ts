import { isNonRadiologic } from './nonRadiologic'
/**
 * WIKIMEDIA COMMONS — a second figure source, for when PubMed Central will not
 * serve us.
 *
 * WHY THIS EXISTS: PMC is the better source — real case figures with real
 * captions and citations — but it rate-limits hard, and while it is blocking,
 * tens of thousands of encounters have no imagery at all. Commons is a different
 * host on a different budget, it carries a substantial radiology collection
 * (case-report uploads, teaching files, atlas plates), and every file arrives
 * with machine-readable licence and attribution metadata.
 *
 * WHAT IT IS NOT: curated. Commons will happily return a diagram, a photograph
 * of a machine, or a mislabelled file. That is acceptable here precisely because
 * nothing from this module reaches the viewer unchecked — it feeds the same
 * candidate pool the QA agent judges, and a wrong-region or non-radiological
 * file is rejected exactly as a wrong PMC figure is. It widens the funnel; it
 * does not lower the bar.
 */

import type { MatchResult, MatchTier } from './pmcSearch'
import { ANATOMY_QUERIES } from './pmcSearch'
import { modalitiesIn, type Modality } from './qa/modality'

const API = 'https://commons.wikimedia.org/w/api.php'

/**
 * Wikimedia asks API clients to identify themselves and to keep requests
 * serialised. Ignoring that earns a plain-text "You are making too many requests
 * to the API." — which is not JSON, so it surfaces as a parse error rather than
 * an HTTP status, and looked exactly like "this finding has no imagery".
 */
const UA = 'rad-review-ultimate/1.0 (residency teaching log; contact via repository)'
const MIN_GAP_MS = 1_100
const MAX_GAP_MS = 15_000

/**
 * Serialises every Commons request in this process and paces them, widening the
 * gap when Commons pushes back and narrowing it again once it stops.
 *
 * A fixed rate is the wrong shape for a shared, anonymous API: what is polite
 * from one machine on a quiet day is throttled on a busy one, and the ceiling is
 * not published. Backing off on refusal and easing forward on success finds the
 * rate that host is actually willing to serve.
 */
let queue: Promise<unknown> = Promise.resolve()
let lastAt = 0
let gapMs = MIN_GAP_MS

export function commonsPace(): number {
  return gapMs
}

function slowDown() {
  gapMs = Math.min(MAX_GAP_MS, Math.round(gapMs * 2))
}

function speedUp() {
  if (gapMs > MIN_GAP_MS) gapMs = Math.max(MIN_GAP_MS, Math.round(gapMs * 0.8))
}

function paced<T>(run: () => Promise<T>): Promise<T> {
  const next = queue.then(async () => {
    const wait = gapMs - (Date.now() - lastAt)
    if (wait > 0) await new Promise((r) => setTimeout(r, wait))
    lastAt = Date.now()
    return run()
  })
  // Keep the chain alive even when a call rejects, or one failure stalls
  // every later request behind it.
  queue = next.then(
    () => undefined,
    () => undefined,
  )
  return next
}

/** Commons is throttling us. Distinct from "nothing matched". */
export class CommonsThrottled extends Error {
  constructor() {
    super('Wikimedia Commons is rate limiting this client')
    this.name = 'CommonsThrottled'
  }
}

/** Licences we may show. Anything else is dropped rather than guessed at. */
const REUSABLE = /^(cc[- ]by(-sa)?|cc0|public domain|pd|no restrictions)/i

/** Files that are not radiological imaging, however they are titled. */
const NOT_IMAGING =
  /\b(logo|icon|map|flag|portrait|building|hospital exterior|machine|scanner room|equipment|chart|graph|diagram|schematic|drawing|illustration|animation|barchart|timeline|signature|coat of arms)\b/i

/** Titles that read as radiology. Commons search alone is too permissive. */
const IMAGING =
  /\b(mri|\bct\b|computed tomograph|magnetic resonance|radiograph|x-?ray|ultrasound|sonograph|scintigraph|\bspect\b|pet\s*[/\-]?\s*ct|pet\s+scan|fdg|positron|mammogra|angiogra|fluorosco|dexa|myelogra|arthrogra)\b/i

/**
 * Commons categories that mark a file as radiological.
 *
 * The title alone is not enough: "Roe-perthes.jpg" is a real hip radiograph and
 * says so nowhere in its name, but it sits in "X-rays of Legg-Calve-Perthes
 * disease". Commons categorises imaging consistently ("X-rays of ...", "CT scans
 * of ...", "MRI of ..."), so the category is the dependable signal and the title
 * is the convenient one. Either will do; neither is invented.
 */
const CATEGORY_IMAGING =
  /\b(x-?rays? of|radiographs? of|ct scans? of|mri of|mris? of|ultrasounds? of|sonograms? of|scintigraph|pet scans?|angiograms? of|mammograms? of|medical imaging|radiology)\b/i

interface CommonsPage {
  title?: string
  categories?: Array<{ title?: string }>
  imageinfo?: Array<{
    url?: string
    thumburl?: string
    width?: number
    height?: number
    descriptionurl?: string
    extmetadata?: Record<string, { value?: string }>
  }>
}

function plain(html: string | undefined): string {
  return (html ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Minimum edge for a usable teaching figure, matching the QA validators. */
const MIN_EDGE = 200

/**
 * Source formats that are never a single radiological figure.
 *
 * Checked against the FILE TITLE, not the thumbnail URL: Commons renders a page
 * of a PDF or DjVu as a .jpg thumbnail, so scanned books ("Magnetic resonance
 * imaging (IA magneticresonanc00feig).pdf", "hand-book of artillery") sail past
 * an extension check on the image URL and land in the results looking like
 * figures.
 */
const NOT_A_FIGURE = /\.(pdf|djvu|tiff?|svg|gif|webm|ogv)$/i

/** The word Commons files are actually titled with, per modality. */
const MODALITY_WORD: Record<Modality, string> = {
  PET: 'PET',
  MRI: 'MRI',
  CT: 'CT',
  US: 'ultrasound',
  NM: 'scintigraphy',
  MAMMO: 'mammography',
  RAD: 'radiograph',
  FLUORO: 'fluoroscopy',
  DEXA: 'DEXA',
}

/**
 * Query shapes that actually return radiology from Commons, narrowest first.
 *
 * Commons is not a boolean-AND archive of millions of figures: a four-term
 * clinical query returns nothing, while "meniscal tear MRI" returns the right
 * image immediately. Files are titled the way a person would name them, so the
 * modality goes LAST and only two or three clinical words go in front of it.
 */
export function commonsQueries(
  finding: string,
  terms: string[],
  stationId?: string,
): { query: string; tier: MatchTier }[] {
  const mods = [...modalitiesIn(finding)]
  const word = mods.length ? MODALITY_WORD[mods[0]] : ''
  // Drop the modality from the clinical terms: "chest radiograph radiograph"
  // is a worse query than "chest radiograph", and extractTerms keeps it.
  const lower = word.toLowerCase()
  const clinical = terms.filter((t) => t.length > 3 && t.toLowerCase() !== lower)
  const out: { query: string; tier: MatchTier }[] = []
  /**
   * On a duplicate query, keep the WEAKER label rather than the first one seen.
   *
   * "knee MRI" is both the broad rung and the anatomy rung for a meniscal-tear
   * case. Dropping the second occurrence silently left those results labelled
   * 'broad' — presented as a match to the finding when the query never mentioned
   * it. The tier drives what the viewer claims about an image, so it has to
   * describe the weakest query that produced it.
   */
  const STRENGTH: Record<MatchTier, number> = { finding: 2, broad: 1, anatomy: 0 }
  const add = (parts: string[], tier: MatchTier) => {
    const q = parts.filter(Boolean).join(' ').trim()
    if (!q) return
    const existing = out.find((o) => o.query === q)
    if (!existing) {
      out.push({ query: q, tier })
      return
    }
    if (STRENGTH[tier] < STRENGTH[existing.tier]) existing.tier = tier
  }

  // Two clinical words plus the modality is the shape that names a real file.
  add([...clinical.slice(0, 2), word], 'finding')
  add([...clinical.slice(0, 1), word], 'broad')
  if (clinical.length > 2) add([clinical[0], clinical[2], word], 'broad')
  // Last resort: correct body region, not this finding. Tiered so the UI can
  // never present it as a match to the case.
  const anatomy = stationId ? ANATOMY_QUERIES[stationId] : undefined
  if (anatomy?.length) add([anatomy[0], word], 'anatomy')
  return out
}

export async function searchCommons(
  query: string,
  limit: number,
  tier: MatchTier,
  signal?: AbortSignal,
): Promise<MatchResult[]> {
  if (!query.trim()) return []
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const url = new URL(API)
  url.searchParams.set('action', 'query')
  url.searchParams.set('format', 'json')
  url.searchParams.set('origin', '*')
  url.searchParams.set('generator', 'search')
  url.searchParams.set('gsrsearch', query)
  url.searchParams.set('gsrnamespace', '6') // File: namespace only
  url.searchParams.set('gsrlimit', String(Math.min(limit * 3, 50)))
  url.searchParams.set('prop', 'imageinfo|categories')
  url.searchParams.set('cllimit', 'max')
  url.searchParams.set('iiprop', 'url|size|extmetadata')
  url.searchParams.set('iiurlwidth', '1000')

  const r = await paced(() =>
    fetch(url, {
      headers: { Accept: 'application/json', 'Api-User-Agent': UA, 'User-Agent': UA },
      signal,
    }),
  )
  if (r.status === 429) {
    slowDown()
    throw new CommonsThrottled()
  }
  if (!r.ok) throw new Error(`Commons returned HTTP ${r.status}`)

  // A throttled Commons answers 200 with a plain-text sentence. Parsing that as
  // JSON throws, and a caught parse error is indistinguishable from an empty
  // result — which is how a rate limit came to be recorded as "no match".
  const body = await r.text()
  if (!body.startsWith('{')) {
    if (/too many requests|rate limit/i.test(body)) {
      slowDown()
      throw new CommonsThrottled()
    }
    throw new Error(`Commons returned a non-JSON response: ${body.slice(0, 80)}`)
  }
  speedUp()
  const json = JSON.parse(body) as { query?: { pages?: Record<string, CommonsPage> } }
  const pages = Object.values(json.query?.pages ?? {})

  const out: MatchResult[] = []
  for (const page of pages) {
    const info = page.imageinfo?.[0]
    if (!info) continue
    const src = info.thumburl || info.url
    if (!src || !/\.(jpe?g|png|webp)$/i.test(src.split('?')[0])) continue
    if ((info.width ?? 0) < MIN_EDGE || (info.height ?? 0) < MIN_EDGE) continue

    const meta = info.extmetadata ?? {}
    const licence = plain(meta.LicenseShortName?.value) || plain(meta.UsageTerms?.value)
    if (!REUSABLE.test(licence)) continue

    const rawTitle = plain(page.title).replace(/^File:/, '')
    if (NOT_A_FIGURE.test(rawTitle)) continue
    const title = rawTitle.replace(/\.(jpe?g|png|webp)$/i, '')
    const description = plain(meta.ImageDescription?.value)
    const caption = `${title}${description ? ` — ${description}` : ''}`.slice(0, 320)
    const categories = (page.categories ?? [])
      .map((c) => plain(c.title).replace(/^Category:/, ''))
      .join(' · ')
    if (!IMAGING.test(caption) && !CATEGORY_IMAGING.test(categories)) continue
    if (NOT_IMAGING.test(caption) || NOT_IMAGING.test(categories)) continue
    // "pet" in a filename is an animal. A PET scan says PET/CT, PET scan, or FDG.
    if (/\b(birds?|snakes?|parrots?|parakeets?|conures?|pets|reptiles|wildlife)\b/i.test(categories)) continue
    if (isNonRadiologic(caption) || isNonRadiologic(categories)) continue

    const lc = caption.toLowerCase()
    out.push({
      url: src,
      caption,
      relevance: terms.filter((t) => lc.includes(t)).length,
      tier,
      pmcid: '',
      title,
      authors: plain(meta.Artist?.value) || 'Wikimedia Commons contributors',
      journal: 'Wikimedia Commons',
      year: plain(meta.DateTimeOriginal?.value).slice(0, 4),
      doi: info.descriptionurl ?? '',
      license: licence,
    })
    if (out.length >= limit) break
  }
  return out
}
