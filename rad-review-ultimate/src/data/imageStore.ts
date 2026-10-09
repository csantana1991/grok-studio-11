/**
 * Local image mount store.
 *
 * The six real PET/CT sources normally live in public/resource/. When they are
 * not on disk the reader can mount them through the UI instead; the blobs are
 * persisted in IndexedDB so the mount survives reloads. Everything stays on the
 * machine -- nothing is uploaded and nothing is fetched off-origin.
 */

const DB_NAME = 'rr-image-mount'
const DB_VERSION = 1
const STORE = 'images'

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

export async function getAllImages(): Promise<Record<string, Blob>> {
  try {
    const keys = await tx<IDBValidKey[]>('readonly', (s) => s.getAllKeys())
    const values = await tx<Blob[]>('readonly', (s) => s.getAll())
    const out: Record<string, Blob> = {}
    keys.forEach((k, i) => {
      if (typeof k === 'string' && values[i]) out[k] = values[i]
    })
    return out
  } catch {
    // Private mode or blocked storage -- mounting degrades to session-only.
    return {}
  }
}

export async function putImage(name: string, blob: Blob): Promise<void> {
  await tx('readwrite', (s) => s.put(blob, name))
}

export async function deleteImage(name: string): Promise<void> {
  await tx('readwrite', (s) => s.delete(name))
}

export async function clearImages(): Promise<void> {
  await tx('readwrite', (s) => s.clear())
}
