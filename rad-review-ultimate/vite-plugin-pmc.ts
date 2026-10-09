/**
 * LIVE PUBLIC LITERATURE SEARCH -- dev/preview server middleware.
 *
 * The browser can reach the Europe PMC REST API directly (CORS is allowed), but
 * it CANNOT reach the PMC article HTML page, which is the only place the CDN
 * blob URL for a figure can be resolved from. So figure resolution is proxied
 * here, server-side; the browser only renders the resulting image URL in an
 * <img> tag, which needs no CORS.
 *
 * Endpoint:  GET /api/pmc/match?q=<free text>&limit=<n>
 * Returns :  { query, terms, results: [ { url, caption, ...citation } ] }
 *
 * The search itself lives in src/data/pmcSearch.ts and is shared with the
 * offline index builder (scripts/build-match-index.ts), so the live path and
 * the prebuilt index can never drift apart.
 */

import type { Plugin, ViteDevServer, PreviewServer } from 'vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { extractTerms, matchFinding, BlockedError } from './src/data/pmcSearch'
import { stationIdForFinding } from './src/data/anatomyMap'

const cache = new Map<string, { at: number; body: unknown }>()
const TTL = 30 * 60 * 1000
const ROUTE = '/api/pmc/match'

async function handleMatch(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? '', 'http://localhost')
  const q = (url.searchParams.get('q') ?? '').slice(0, 300)
  const limit = Math.min(Number(url.searchParams.get('limit') ?? 6) || 6, 12)
  const terms = extractTerms(q)
  const key = `${terms.join('+')}|${limit}`

  const send = (code: number, body: unknown) => {
    res.statusCode = code
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }

  if (!terms.length) return send(200, { query: q, terms, results: [] })

  const hit = cache.get(key)
  if (hit && Date.now() - hit.at < TTL) return send(200, hit.body)

  try {
    const station = stationIdForFinding(q) ?? undefined
    // A tighter budget than the background builder gets: this is a live lookup
    // with a reader waiting on it, and an answer from Commons beats a spinner.
    const { results, blocked } = await matchFinding(q, limit, 6, station, [], 8_000)
    // Throttling with nothing to show is still a 429, so the client backs off
    // instead of caching an empty as "this finding has no imagery". Throttling
    // that the Commons fallback covered is a normal 200 -- the reader gets
    // figures, and `blocked` records where they did NOT come from.
    if (blocked && !results.length) {
      return send(429, { query: q, terms, results: [], blocked: true })
    }
    const body = { query: q, terms, results, blocked }
    cache.set(key, { at: Date.now(), body })
    send(200, body)
  } catch (e) {
    if (e instanceof BlockedError) {
      return send(429, { query: q, terms, results: [], blocked: true })
    }
    send(502, { query: q, terms, results: [], error: String(e).slice(0, 200) })
  }
}

export function pmcLiveSearch(): Plugin {
  const attach = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use(ROUTE, (req, res) => {
      void handleMatch(req, res)
    })
  }
  return {
    name: 'pmc-live-search',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}
