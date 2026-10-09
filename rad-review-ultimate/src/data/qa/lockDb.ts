/**
 * Persistence for connection locks and image probes.
 *
 * IndexedDB rather than localStorage: 33,000 locks plus probe results exceed the
 * 5 MB string quota, and a silent quota failure here would look exactly like
 * image drift returning.
 */

import type { ProbeResult } from './types'
import type { LockRecord } from './locks'

const DB_NAME = 'rr-image-qa'
const DB_VERSION = 1
const LOCKS = 'locks'
const PROBES = 'probes'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(LOCKS)) db.createObjectStore(LOCKS, { keyPath: 'caseId' })
      if (!db.objectStoreNames.contains(PROBES)) db.createObjectStore(PROBES, { keyPath: 'url' })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

function tx<T>(
  store: string,
  mode: IDBTransactionMode,
  run: (s: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(store, mode)
        const req = run(t.objectStore(store))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
        t.oncomplete = () => db.close()
      }),
  )
}

export async function loadLocks(): Promise<Map<string, LockRecord>> {
  try {
    const all = await tx<LockRecord[]>(LOCKS, 'readonly', (s) => s.getAll())
    return new Map(all.filter((l) => l?.caseId).map((l) => [l.caseId, l]))
  } catch {
    return new Map()
  }
}

/** Written in batches: one transaction per lock would thrash on a full sweep. */
export async function saveLocks(locks: LockRecord[]): Promise<void> {
  if (!locks.length) return
  try {
    const db = await openDb()
    await new Promise<void>((resolve, reject) => {
      const t = db.transaction(LOCKS, 'readwrite')
      const s = t.objectStore(LOCKS)
      for (const l of locks) s.put(l)
      t.oncomplete = () => {
        db.close()
        resolve()
      }
      t.onerror = () => reject(t.error)
    })
  } catch {
    /* non-fatal: the session keeps its in-memory table */
  }
}

export async function clearLocks(): Promise<void> {
  try {
    await tx(LOCKS, 'readwrite', (s) => s.clear())
  } catch {
    /* non-fatal */
  }
}

export async function loadProbes(): Promise<Map<string, ProbeResult>> {
  try {
    const all = await tx<ProbeResult[]>(PROBES, 'readonly', (s) => s.getAll())
    return new Map(all.filter((p) => p?.url).map((p) => [p.url, p]))
  } catch {
    return new Map()
  }
}

export async function saveProbes(probes: ProbeResult[]): Promise<void> {
  if (!probes.length) return
  try {
    const db = await openDb()
    await new Promise<void>((resolve, reject) => {
      const t = db.transaction(PROBES, 'readwrite')
      const s = t.objectStore(PROBES)
      for (const p of probes) s.put(p)
      t.oncomplete = () => {
        db.close()
        resolve()
      }
      t.onerror = () => reject(t.error)
    })
  } catch {
    /* non-fatal */
  }
}
