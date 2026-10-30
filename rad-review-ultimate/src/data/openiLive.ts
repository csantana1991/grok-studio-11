/**
 * CT, MRI, and PET frames for RAD REVIEW come from Open-i (PubMed Central).
 * Chest radiographs stay on the NIH index. These catalogs are paged, not stored:
 * CT, MRI, and PET are each capped at 112,120 to match the chest library.
 * PET is the Open-i search for "positron emission tomography", not the plastic.
 */

import { useEffect, useState } from 'react'

export const OPENI_TOTAL = { ct: 112120, mri: 112120, pet: 112120 } as const
export type OpeniModality = keyof typeof OPENI_TOTAL

export function openiToken(modality: OpeniModality, idx: number): string {
  const total = OPENI_TOTAL[modality]
  const rank = (Math.abs(idx) * 104729) % total + 1
  return `oi:${modality}:${rank}`
}

export function isOpeniToken(url: string | undefined | null): boolean {
  return !!url && url.startsWith('oi:')
}

export type OpeniFilm = { url: string; caption: string }

const cache = new Map<string, OpeniFilm>()
const flight = new Map<string, Promise<OpeniFilm>>()

export async function resolveOpeni(token: string): Promise<OpeniFilm> {
  const hit = cache.get(token)
  if (hit) return hit
  let job = flight.get(token)
  if (!job) {
    job = (async () => {
      const m = /^oi:(ct|mri|pet):(\d+)$/.exec(token)
      if (!m) throw new Error('token')
      const modality = m[1]
      const rank = m[2]
      const res = await fetch(
        '/api/pmc/match?source=openi-page&modality=' + modality + '&m=' + rank + '&n=1',
        { signal: AbortSignal.timeout(12000) },
      )
      if (!res.ok) throw new Error('openi ' + res.status)
      const data = (await res.json()) as { list?: { url?: string; caption?: string; pmcid?: string }[] }
      const row = data.list?.[0]
      if (!row?.url) throw new Error('empty')
      const kind = modality === 'ct' ? 'CT' : modality === 'mri' ? 'MRI' : 'PET'
      const caption =
        row.caption +
        '. Open-i ' +
        kind +
        (row.pmcid ? ' ' + row.pmcid : '') +
        '. Not this row’s scan.'
      const film = {
        url: '/api/pmc/img?src=' + encodeURIComponent(row.url),
        caption,
      }
      cache.set(token, film)
      return film
    })().finally(() => {
      flight.delete(token)
    })
    flight.set(token, job)
  }
  return job
}

export function useOpeniFilm(token: string | undefined): OpeniFilm | null {
  const [film, setFilm] = useState<OpeniFilm | null>(null)
  useEffect(() => {
    if (!isOpeniToken(token)) {
      setFilm(null)
      return
    }
    let dead = false
    setFilm(null)
    resolveOpeni(token as string)
      .then((hit) => {
        if (!dead) setFilm(hit)
      })
      .catch(() => {
        if (!dead) setFilm({ url: '', caption: 'Open-i figure did not load. Not this row’s scan.' })
      })
    return () => {
      dead = true
    }
  }, [token])
  return isOpeniToken(token) ? film : null
}
