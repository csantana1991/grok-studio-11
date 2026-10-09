import { useEffect, useState } from 'react'
import { buildLibrary, EMPTY_LIBRARY, type NucleusLibrary } from '../data/nucleus'

/**
 * Loads the Nucleus case export from public/nucleus-export.json.
 *
 * The file is optional: without it the rest of the workstation is unaffected
 * and the case-readout panel explains what to drop in. Accepts either a bare
 * array or an object wrapping one under `studies` / `cases` / `data`, because
 * exports from another tool should not have to match this shape exactly.
 */
export function useNucleusLibrary(url = '/nucleus-export.json'): NucleusLibrary {
  const [lib, setLib] = useState<NucleusLibrary>(EMPTY_LIBRARY)

  useEffect(() => {
    let cancelled = false
    fetch(url, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((raw: unknown) => {
        if (cancelled || !raw) return
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
      })
      .catch(() => {
        /* no export present; panel explains how to add one */
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return lib
}
