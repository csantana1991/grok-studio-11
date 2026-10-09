/**
 * IMAGE PROBING — does the file actually load, and is it big enough to read?
 *
 * HONEST LIMITS IN THE BROWSER: the figures come from other origins and are not
 * CORS-enabled, so `fetch` cannot see their status line, content type or byte
 * length. What an <img> decode CAN establish is decisive anyway: a 404, an HTML
 * error page, an auth wall, an expired link and a corrupt file all fail to
 * decode, and a thumbnail reports its real pixel size. Fields that cannot be
 * observed here are left null rather than guessed, and the headless runner
 * (scripts/qa-agent.ts) fills them in properly where Node can fetch directly.
 */

import type { ProbeResult } from './types'

const TIMEOUT_MS = 12_000

export function probeImage(url: string, now = Date.now()): Promise<ProbeResult> {
  return new Promise((resolve) => {
    const base: ProbeResult = {
      url,
      ok: false,
      httpStatus: null,
      contentType: null,
      bytes: null,
      width: null,
      height: null,
      at: now,
    }
    if (typeof Image === 'undefined') {
      resolve({ ...base, failure: 'API_FAILURE' })
      return
    }

    const img = new Image()
    let settled = false
    const done = (r: ProbeResult) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      img.onload = null
      img.onerror = null
      resolve(r)
    }

    const timer = setTimeout(
      () => done({ ...base, failure: 'SOURCE_UNAVAILABLE' }),
      TIMEOUT_MS,
    )

    img.onload = () =>
      done({
        ...base,
        ok: true,
        width: img.naturalWidth || null,
        height: img.naturalHeight || null,
      })
    // A decode failure covers every way a URL can fail to be an image: dead
    // link, HTML shell, auth page, hotlink block, truncated bytes.
    img.onerror = () => done({ ...base, failure: 'BROKEN_URL' })

    img.referrerPolicy = 'no-referrer'
    img.src = url
  })
}

/**
 * Probe a batch with bounded concurrency, so a sweep never opens hundreds of
 * sockets at once and trips a publisher's rate limiter.
 */
export async function probeAll(
  urls: string[],
  concurrency = 4,
  onResult?: (r: ProbeResult) => void,
): Promise<ProbeResult[]> {
  const out: ProbeResult[] = []
  let i = 0
  const workers = Array.from({ length: Math.min(concurrency, urls.length) }, async () => {
    while (i < urls.length) {
      const url = urls[i++]
      const r = await probeImage(url)
      out.push(r)
      onResult?.(r)
    }
  })
  await Promise.all(workers)
  return out
}
