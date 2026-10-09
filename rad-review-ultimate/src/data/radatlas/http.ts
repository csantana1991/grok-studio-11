/** Timeout-bounded fetch and a safe error message, ported from RadAtlas. */

export class ProviderHttpError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message)
    this.name = 'ProviderHttpError'
  }
}

export async function fetchWithTimeout(
  input: string | URL,
  init: RequestInit = {},
  timeoutMs = 8_000,
): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const headers = new Headers(init.headers)
    if (!headers.has('Accept')) {
      headers.set('Accept', 'application/json, application/xml, text/xml;q=0.9, */*;q=0.5')
    }
    const response = await fetch(input, { ...init, signal: controller.signal, headers })
    if (!response.ok) {
      throw new ProviderHttpError(`Provider returned HTTP ${response.status}`, response.status)
    }
    return response
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ProviderHttpError(`Provider timed out after ${timeoutMs}ms`)
    }
    throw error
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Never surface a raw upstream error to the panel: it leaks internal URLs and
 * says nothing a reader can act on. One provider failing is normal.
 */
export function safeProviderMessage(error: unknown): string {
  if (error instanceof ProviderHttpError) return error.message
  if (error instanceof Error && /timeout|abort/i.test(error.message)) return 'Provider timed out'
  return 'Provider is temporarily unavailable'
}

interface CacheEntry<T> {
  value?: T
  pending?: Promise<T>
  expiresAt: number
  staleUntil: number
}

const store = new Map<string, CacheEntry<unknown>>()

/**
 * Single-flight cache with stale fallback: concurrent callers share one request,
 * and a provider that starts failing keeps serving its last good answer for a
 * while rather than emptying the panel.
 */
export async function withCache<T>(
  key: string,
  ttlMs: number,
  loader: () => Promise<T>,
  staleMs = ttlMs * 3,
): Promise<{ value: T; cached: boolean }> {
  const now = Date.now()
  const existing = store.get(key) as CacheEntry<T> | undefined

  if (existing?.value !== undefined && existing.expiresAt > now) {
    return { value: existing.value, cached: true }
  }
  if (existing?.pending) return { value: await existing.pending, cached: true }

  const pending = loader()
  store.set(key, {
    value: existing?.value,
    pending,
    expiresAt: existing?.expiresAt ?? 0,
    staleUntil: existing?.staleUntil ?? 0,
  })

  try {
    const value = await pending
    store.set(key, { value, expiresAt: now + ttlMs, staleUntil: now + ttlMs + staleMs })
    return { value, cached: false }
  } catch (error) {
    if (existing?.value !== undefined && existing.staleUntil > now) {
      store.set(key, existing)
      return { value: existing.value, cached: true }
    }
    store.delete(key)
    throw error
  }
}

export function clearAtlasCache(): void {
  store.clear()
}
