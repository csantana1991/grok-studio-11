/**
 * RAD ATLAS — dev/preview server middleware.
 *
 * Serves the same contract as the standalone RadAtlas app the reader supplied,
 * so the browser add-on in browser-addon/ works against either one:
 *
 *   GET /api/radatlas/search?q=<text>&sources=pmc,tcia
 *   GET /api/radatlas/tcia-thumbnail?series=<uid>&object=<uid>
 *
 * Server-side because none of these upstreams is reachable from the page: TCIA
 * needs an OAuth guest token and returns image/jpeg without CORS headers, and
 * PMC article pages are the only place a figure's CDN URL can be resolved.
 */

import type { Plugin, ViteDevServer, PreviewServer } from 'vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { searchRadiology, parseSources } from './src/data/radatlas'
import { fetchWithTimeout, withCache } from './src/data/radatlas/http'

const SEARCH = '/api/radatlas/search'
const THUMB = '/api/radatlas/tcia-thumbnail'

const TOKEN_URL = 'https://services.cancerimagingarchive.net/nbia-api/oauth/token'
const THUMBNAIL_URL = 'https://services.cancerimagingarchive.net/nbia-api/services/getThumbnail'
const UID = /^\d+(\.\d+)+$/

function json(res: ServerResponse, code: number, body: unknown) {
  res.statusCode = code
  res.setHeader('Content-Type', 'application/json')
  // The add-on runs on google.com and needs to read this; the endpoint exposes
  // only public catalogue data and takes no credentials.
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end(JSON.stringify(body))
}

async function handleSearch(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? '', 'http://localhost')
  const q = (url.searchParams.get('q') ?? '').trim().slice(0, 300)
  if (!q) return json(res, 200, { query: '', groups: { articleFigures: [], studyPreviews: [], fullStudies: [] }, providers: [], meta: { requestedAt: new Date().toISOString(), durationMs: 0, partial: false, cacheMaxAgeSeconds: 0 } })
  try {
    const body = await searchRadiology(q, parseSources(url.searchParams.get('sources')))
    res.setHeader('Cache-Control', `public, max-age=${body.meta.cacheMaxAgeSeconds}`)
    json(res, 200, body)
  } catch {
    json(res, 502, { error: 'RadAtlas search is temporarily unavailable' })
  }
}

async function guestToken(): Promise<string> {
  const cached = await withCache('nbia:guest-token', 90 * 60_000, async () => {
    const response = await fetchWithTimeout(
      TOKEN_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          username: 'nbia_guest',
          password: '',
          client_id: 'NBIA',
          grant_type: 'password',
        }),
      },
      7_000,
    )
    const j = (await response.json()) as { access_token?: string }
    if (!j.access_token) throw new Error('NBIA guest token was not returned')
    return j.access_token
  })
  return cached.value
}

async function handleThumbnail(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? '', 'http://localhost')
  const series = url.searchParams.get('series') ?? ''
  const object = url.searchParams.get('object') ?? ''
  if (!UID.test(series) || !UID.test(object) || series.length > 128 || object.length > 128) {
    return json(res, 400, { error: 'Invalid DICOM identifier.' })
  }
  try {
    const token = await guestToken()
    const response = await fetchWithTimeout(
      THUMBNAIL_URL,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'image/jpeg',
        },
        body: new URLSearchParams({ seriesUID: series, objectUID: object }),
      },
      8_000,
    )
    const buf = Buffer.from(await response.arrayBuffer())
    res.statusCode = 200
    res.setHeader('Content-Type', response.headers.get('Content-Type') || 'image/jpeg')
    res.setHeader('Cache-Control', 'public, max-age=86400, immutable')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(buf)
  } catch {
    // The preview is a convenience; the full DICOM study stays reachable.
    json(res, 502, { error: 'Preview is temporarily unavailable.' })
  }
}

function attach(server: ViteDevServer | PreviewServer) {
  server.middlewares.use((req, res, next) => {
    const path = (req.url ?? '').split('?')[0]
    if (path === SEARCH) return void handleSearch(req, res)
    if (path === THUMB) return void handleThumbnail(req, res)
    next()
  })
}

export function radAtlas(): Plugin {
  return {
    name: 'radatlas-search',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}
