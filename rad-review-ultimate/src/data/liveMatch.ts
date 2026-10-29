/**
 * Client side of the live public literature search.
 *
 * IMPORTANT FRAMING: the 33,000 encounters in this log are generated. A figure
 * returned here is a REAL, separately published patient's imaging that matches
 * the finding text -- it is a literature reference, never "this case's scan".
 * The UI must always present it as such, with its citation attached.
 */

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
}

export interface MatchResponse {
  query: string
  terms: string[]
  results: LiveMatch[]
  error?: string
  /** Upstream served a bot-challenge page: back off, do not record an empty. */
  blocked?: boolean
}

/** In-memory cache so re-selecting a case never re-hits the network. */
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

  const url = `/api/pmc/match?q=${encodeURIComponent(query)}&limit=${limit}`
  const r = await fetch(url, { signal })
  if (r.status === 429) {
    const body = (await r.json().catch(() => ({}))) as MatchResponse
    return { query, terms: body.terms ?? [], results: [], blocked: true }
  }
  if (!r.ok) throw new Error(`Search failed (HTTP ${r.status})`)
  const body = (await r.json()) as MatchResponse
  // Never cache an empty result: it may just be a transient upstream refusal.
  if (body.results?.length) cache.set(query, body)
  return body
}

/** Short attribution line for a matched figure. */
export function matchCredit(m: LiveMatch): string {
  const first = m.authors.split(',')[0] || 'Unknown'
  return `${first} et al., ${m.journal || 'n/a'} ${m.year} · ${m.license.toUpperCase()}`
}
