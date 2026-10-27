import { useEffect, useState } from 'react'
import { buildLibrary, EMPTY_LIBRARY, type NucleusLibrary } from '../data/nucleus'

const NUCLEUS_URLS = [
  'nucleus-export.json',
  '/rru/nucleus-export.json',
  '/nucleus-export.json',
]

/**
 * Loads the Nucleus case export. Tries the file beside this page first, then
 * the copy served with RAD REVIEW Ultimate, then the site root.
 */
export function useNucleusLibrary(url?: string): NucleusLibrary {
  const [lib, setLib] = useState<NucleusLibrary>(EMPTY_LIBRARY)

  useEffect(() => {
    let cancelled = false
    const urls = url ? [url, ...NUCLEUS_URLS.filter((u) => u !== url)] : NUCLEUS_URLS
    ;(async () => {
      for (const candidate of urls) {
        try {
          const r = await fetch(candidate, { cache: 'no-store' })
          if (!r.ok) continue
          const raw: unknown = await r.json()
          if (cancelled) return
          const arr = Array.isArray(raw)
            ? raw
            : ((raw as Record<string, unknown>).studies ??
              (raw as Record<string, unknown>).cases ??
              (raw as Record<string, unknown>).data)
          if (!Array.isArray(arr)) {
            setLib({ ...EMPTY_LIBRARY, error: 'Export is not an array of studies' })
            return
          }
          setLib(buildLibrary(arr))
          return
        } catch {
          /* try the next location */
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [url])

  return lib
}
