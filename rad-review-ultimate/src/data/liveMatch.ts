/**
 * Client side of the live public literature search.
 *
 * IMPORTANT FRAMING: the 33,000 encounters in this log are generated. A figure
 * returned here is a REAL, separately published patient's imaging that matches
 * the finding text -- it is a literature reference, never "this case's scan".
 * The UI must always present it as such, with its citation attached.
 */

import { publicQuery } from './caseDossier'

export interface LiveMatch {
  url: string
  caption: string
  relevance: number
  pmcid: string
  title: string
  authors: string
  journal: string
  year: string
  doi: string
  license: string
  /** How tightly this figure depicts the finding. Teaching plates are anatomy examples. */
  tier?: 'finding' | 'broad' | 'anatomy'
  pageUrl?: string
  imageUrl?: string | null
  permittedUse?: 'display' | 'link'
  licenseNote?: string
}

export interface MatchResponse {
  query: string
  terms: string[]
  results: LiveMatch[]
  error?: string
  /** Server-side outcome. Empty results with timeout/unavailable are not "no such image". */
  state?: 'ok' | 'empty' | 'partial' | 'unavailable' | 'timeout'
  /** Upstream served a bot-challenge page: back off, do not record an empty. */
  blocked?: boolean
}

const cache = new Map<string, MatchResponse>()

export function cachedMatch(query: string): MatchResponse | undefined {
  return cache.get(query)
}

/** Seed the cache from persisted results so a reload makes no new requests. */
export function primeCache(store: Record<string, LiveMatch[]>): void {
  for (const [query, results] of Object.entries(store)) {
    if (!cache.has(query)) cache.set(query, { query, terms: [], results })
  }
}

export async function fetchMatches(
  query: string,
  limit = 6,
  signal?: AbortSignal,
  /** Bypass the cache and re-query, for an explicit user-triggered search. */
  force = false,
): Promise<MatchResponse> {
  const hit = cache.get(query)
  if (hit && !force) return hit

  const sent = publicQuery(query)
  const url = `/api/pmc/match?q=${encodeURIComponent(sent || query)}&limit=${limit}`
  const timeout = AbortSignal.timeout(12000)
  const used = signal ? AbortSignal.any([signal, timeout]) : timeout
  let r: Response
  try {
    r = await fetch(url, { signal: used })
  } catch (error) {
    const message = error instanceof Error ? error.message : ''
    if (/timeout|abort/i.test(message) || (error instanceof DOMException && error.name === 'TimeoutError')) {
      return { query, terms: [], results: [], error: 'timeout' }
    }
    throw error
  }
  if (r.status === 429) {
    const body = (await r.json().catch(() => ({}))) as MatchResponse
    return { query, terms: body.terms ?? [], results: [], blocked: true }
  }
  if (!r.ok) throw new Error(`Search failed (HTTP ${r.status})`)
  const body = (await r.json()) as MatchResponse
  if (body.state === 'timeout' && !body.error) body.error = 'timeout'
  if (body.state === 'unavailable') body.blocked = body.blocked || !body.results?.length
  // Never cache an empty result: it may just be a transient upstream refusal.
  if (body.results?.length) cache.set(query, body)
  return body
}

/** What the case panel should show after one search response. */
export function matchStatus(
  res: MatchResponse,
  held: number,
): 'done' | 'empty' | 'error' | 'timeout' {
  if (res.error === 'timeout' || res.state === 'timeout') return 'timeout'
  if (res.blocked || res.state === 'unavailable') return 'error'
  if ((res.results?.length ?? 0) > 0 || held > 0) return 'done'
  return 'empty'
}

/**
 * Automatic search runs once per finding. A finished, empty, failed, or
 * timed-out finding stays that way until the reader asks again. Otherwise
 * every completed search schedules another one and the panel never leaves
 * "searching".
 */
export function shouldAutoSearch(
  status: string | undefined,
  held: number,
  force: boolean,
  target = 50,
): boolean {
  if (force) return true
  if (held >= target) return false
  if (status === 'empty' || status === 'done' || status === 'timeout' || status === 'error') return false
  return true
}

export function displayUrl(url: string): string {
  if (url.startsWith('https://openi.nlm.nih.gov/imgs/')) {
    return '/api/pmc/img?src=' + encodeURIComponent(url)
  }
  if (
    url.startsWith('https://upload.wikimedia.org/') ||
    url.startsWith('https://thumb.wikimedia.org/') ||
    url.startsWith('https://commons.wikimedia.org/')
  ) {
    return '/api/pmc/img?src=' + encodeURIComponent(url)
  }
  return url
}

/** Short attribution line for a matched figure. */
export function matchCredit(m: LiveMatch): string {
  const first = (m.authors || 'Unknown').split(',')[0]
  const license = m.license && m.license !== 'not stated' ? m.license : 'license not stated'
  return `${first}, ${m.journal || 'n/a'} ${m.year} · ${license}`
}
