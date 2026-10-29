import { useEffect, useState } from 'react'
import type { LiveMatch } from '../data/liveMatch'

export interface OaCatalog {
  byFinding: Record<string, LiveMatch[]>
  unique: number
}

const EMPTY: OaCatalog = { byFinding: {}, unique: 0 }

/** Real PubMed Central figures harvested from NIH Open-i, one list per finding. */
export function useOaCatalog(): OaCatalog {
  const [catalog, setCatalog] = useState<OaCatalog>(EMPTY)
  useEffect(() => {
    let cancelled = false
    const url = new URL('oa-catalog.json', document.baseURI).href
    const ctrl = new AbortController()
    const timer = window.setTimeout(() => ctrl.abort(), 20000)
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { images?: LiveMatch[]; map?: Record<string, number[]>; unique?: number } | null) => {
        if (cancelled || !data?.images || !data.map) return
        const byFinding: Record<string, LiveMatch[]> = {}
        for (const [finding, ids] of Object.entries(data.map)) {
          const list = ids.map((i) => data.images![i]).filter(Boolean)
          if (list.length) byFinding[finding] = list
        }
        setCatalog({ byFinding, unique: data.unique ?? data.images.length })
      })
      .catch(() => {
        /* catalog is optional; the local plate remains the fallback */
      })
    return () => {
      cancelled = true
      window.clearTimeout(timer)
      ctrl.abort()
    }
  }, [])
  return catalog
}

export function oaFor(
  finding: string,
  idx: number,
  catalog: OaCatalog,
): LiveMatch | undefined {
  const list = catalog.byFinding[finding]
  if (!list?.length) return undefined
  return list[((idx % list.length) + list.length) % list.length]
}
