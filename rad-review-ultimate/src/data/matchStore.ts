/**
 * Persistent store for matched figures, keyed by finding text.
 *
 * IndexedDB rather than localStorage: a 50-figure target across ~350 findings
 * is roughly 17,500 records (~7MB of JSON), which exceeds the ~5MB
 * localStorage ceiling. Overflowing it silently truncates a top-up run that
 * took hours, so the capacity matters.
 */

import type { LiveMatch } from './liveMatch'

const DB_NAME = 'rr-match-store'
const DB_VERSION = 1
const STORE = 'matches'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE)
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

/**
 * Key used before matches moved to IndexedDB. Storage was switched for
 * capacity, and without this migration every figure accumulated under the old
 * key is silently orphaned -- which is exactly what happened: 194 findings and
 * 666 figures disappeared from the UI the moment the store changed.
 */
const LEGACY_KEY = 'rr-literature-matches-v1'
const MIGRATED_FLAG = 'rr-match-store-migrated'

/** One-time copy of legacy localStorage matches into IndexedDB. */
export async function migrateLegacyMatches(): Promise<number> {
  try {
    if (localStorage.getItem(MIGRATED_FLAG)) return 0
    const raw = localStorage.getItem(LEGACY_KEY)
    if (!raw) {
      localStorage.setItem(MIGRATED_FLAG, '1')
      return 0
    }
    const legacy = JSON.parse(raw) as Record<string, LiveMatch[]>
    const current = await loadAllMatches()
    let moved = 0

    for (const [finding, list] of Object.entries(legacy)) {
      if (!Array.isArray(list) || !list.length) continue
      const existing = current[finding] ?? []
      const seen = new Set(existing.map((m) => m.url))
      const merged = [...existing]
      for (const m of list) {
        if (!m?.url || seen.has(m.url)) continue
        seen.add(m.url)
        merged.push(m)
        moved++
      }
      if (merged.length !== existing.length) await saveMatches(finding, merged)
    }

    // Only flag once the copy succeeded, so a failed run retries next load.
    localStorage.setItem(MIGRATED_FLAG, '1')
    return moved
  } catch {
    return 0
  }
}

export async function loadAllMatches(): Promise<Record<string, LiveMatch[]>> {
  try {
    const keys = await tx<IDBValidKey[]>('readonly', (s) => s.getAllKeys())
    const values = await tx<LiveMatch[][]>('readonly', (s) => s.getAll())
    const out: Record<string, LiveMatch[]> = {}
    keys.forEach((k, i) => {
      if (typeof k === 'string' && Array.isArray(values[i])) out[k] = values[i]
    })
    return out
  } catch {
    return {} // private mode or blocked storage: session-only matching
  }
}

export async function saveMatches(finding: string, list: LiveMatch[]): Promise<void> {
  try {
    await tx('readwrite', (s) => s.put(list, finding))
  } catch {
    /* non-fatal: the session keeps its in-memory copy */
  }
}

export async function clearMatches(): Promise<void> {
  try {
    await tx('readwrite', (s) => s.clear())
  } catch {
    /* non-fatal */
  }
}
