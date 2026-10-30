/**
 * Chest radiographs for RAD REVIEW Ultimate come from the Meta Image index:
 * 112,120 NIH ChestX-ray14 studies in /meta-image/nih/rows.bin. The pixels
 * are the Hugging Face copy of that CC0 set, one study per row, not a crop
 * of a neighbor and not the old /library/nih thumbnails.
 */

import { useEffect, useState } from 'react'

const HF =
  'https://datasets-server.huggingface.co/rows?dataset=timm/nih-chest-xray-14&config=default&split='

const NAMES = [
  'Atelectasis',
  'Cardiomegaly',
  'Consolidation',
  'Edema',
  'Effusion',
  'Emphysema',
  'Fibrosis',
  'Hernia',
  'Infiltration',
  'Mass',
  'Nodule',
  'Pleural Thickening',
  'Pneumonia',
  'Pneumothorax',
]

const BIT_RULES: [RegExp, number][] = [
  [/pneumothorax/, 13],
  [/pneumonia/, 12],
  [/pleural thick/, 11],
  [/nodule/, 10],
  [/\bmass\b/, 9],
  [/infiltrat/, 8],
  [/hernia/, 7],
  [/fibrosis/, 6],
  [/emphysema|\bcopd\b/, 5],
  [/effusion|pleural fluid/, 4],
  [/edema|heart failure|\bchf\b/, 3],
  [/consolidation/, 2],
  [/cardiomegaly|enlarged heart/, 1],
  [/atelectasis/, 0],
]

export function nihBit(finding: string): number {
  const f = finding.toLowerCase()
  for (const [re, bit] of BIT_RULES) if (re.test(f)) return bit
  return 14
}

/** Stable pointer. The browser resolves it to one NIH study after the index loads. */
export function nihToken(finding: string, idx: number): string {
  return `nih:${nihBit(finding)}:${Math.abs(idx)}`
}

export function isNihToken(url: string | undefined | null): boolean {
  return !!url && url.startsWith('nih:')
}

type Catalog = {
  train: number
  total: number
  dv: DataView
  buckets: number[][]
}

let catalog: Catalog | null = null
let loading: Promise<Catalog> | null = null

function decode(dv: DataView, i: number) {
  const o = i * 8
  const patient = dv.getUint32(o, true)
  const follow = dv.getUint8(o + 4)
  const age = dv.getUint8(o + 5)
  const flags = dv.getUint16(o + 6, true)
  const id = String(patient).padStart(8, '0') + '_' + String(follow).padStart(3, '0')
  const bits = flags & 0x3fff
  const names: string[] = []
  for (let b = 0; b < 14; b++) if (bits & (1 << b)) names.push(NAMES[b])
  const finding = names.length ? names.join(', ') : 'No finding'
  const view = flags & 0x8000 ? 'AP' : 'PA'
  return { id, age, flags, finding, view }
}

async function loadCatalog(): Promise<Catalog> {
  if (catalog) return catalog
  if (!loading) {
    loading = (async () => {
      const [manRes, binRes] = await Promise.all([
        fetch('/meta-image/nih/manifest.json'),
        fetch('/meta-image/nih/rows.bin'),
      ])
      if (!manRes.ok || !binRes.ok) throw new Error('nih index')
      const man = (await manRes.json()) as { train: number; total: number }
      const raw = await binRes.arrayBuffer()
      if (raw.byteLength !== man.total * 8) throw new Error('nih size')
      const dv = new DataView(raw)
      const buckets: number[][] = Array.from({ length: 15 }, () => [])
      for (let i = 0; i < man.total; i++) {
        const bits = dv.getUint16(i * 8 + 6, true) & 0x3fff
        if (!bits) buckets[14].push(i)
        else for (let b = 0; b < 14; b++) if (bits & (1 << b)) buckets[b].push(i)
      }
      catalog = { train: man.train, total: man.total, dv, buckets }
      return catalog
    })().catch((err) => {
      loading = null
      throw err
    })
  }
  return loading
}

const jpegCache = new Map<string, string>()
const jpegFlight = new Map<string, Promise<string>>()

async function jpegFor(split: 'train' | 'test', row: number): Promise<string> {
  const key = split + ':' + row
  const hit = jpegCache.get(key)
  if (hit) return hit
  let job = jpegFlight.get(key)
  if (!job) {
    job = (async () => {
      const res = await fetch(HF + split + '&offset=' + row + '&length=1', {
        signal: AbortSignal.timeout(12000),
      })
      if (!res.ok) throw new Error('hf ' + res.status)
      const data = (await res.json()) as {
        rows?: { row?: { image?: { src?: string } } }[]
      }
      const remote = data.rows?.[0]?.row?.image?.src
      if (!remote) throw new Error('no jpeg')
      const img = await fetch(remote, { signal: AbortSignal.timeout(20000) })
      if (!img.ok) throw new Error('jpeg ' + img.status)
      const blob = new Blob([await img.arrayBuffer()], { type: 'image/jpeg' })
      const url = URL.createObjectURL(blob)
      jpegCache.set(key, url)
      return url
    })().finally(() => {
      jpegFlight.delete(key)
    })
    jpegFlight.set(key, job)
  }
  return job
}

export type NihFilm = { url: string; caption: string; id: string }

export async function resolveNih(token: string): Promise<NihFilm> {
  const m = /^nih:(\d+):(\d+)$/.exec(token)
  if (!m) throw new Error('token')
  const cat = await loadCatalog()
  const bit = Number(m[1])
  const idx = Number(m[2])
  const bucket = cat.buckets[bit]?.length ? cat.buckets[bit] : cat.buckets[14]
  if (!bucket.length) throw new Error('empty')
  const global = bucket[(idx * 104729) % bucket.length]
  const rec = decode(cat.dv, global)
  const split: 'train' | 'test' = global < cat.train ? 'train' : 'test'
  const row = split === 'train' ? global : global - cat.train
  const url = await jpegFor(split, row)
  const caption =
    rec.finding +
    ', ' +
    rec.view +
    ' chest radiograph. NIH ' +
    rec.id +
    '. CC0. Not this row’s scan.'
  return { url, caption, id: rec.id }
}

export function useNihFilm(token: string | undefined): NihFilm | null {
  const [film, setFilm] = useState<NihFilm | null>(null)
  useEffect(() => {
    if (!isNihToken(token)) {
      setFilm(null)
      return
    }
    let dead = false
    setFilm(null)
    resolveNih(token as string)
      .then((hit) => {
        if (!dead) setFilm(hit)
      })
      .catch(() => {
        if (!dead) setFilm({ url: '', caption: 'NIH film did not load. Not this row’s scan.', id: '' })
      })
    return () => {
      dead = true
    }
  }, [token])
  return isNihToken(token) ? film : null
}
