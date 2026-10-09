/**
 * CLIENT-SIDE ENCOUNTER GENERATION -- all 33,000 rows built in the browser in a
 * single useMemo. No network, no fixtures on disk, no external fetch.
 *
 * Deterministic: a seeded mulberry32 PRNG means the same log renders on every
 * load, which is what makes the FIX VERIFICATION panel meaningful.
 */

import { CATEGORIES, GRAND_TOTAL, ACGME_CODES } from './categories'
import { FINDING_POOLS } from './findings'
import { STATIONS, type Station } from './stations'
import { stationIdForFinding } from './anatomyMap'

const STATION_BY_ID: Record<string, Station> = Object.fromEntries(
  STATIONS.map((s) => [s.id, s]),
)

export interface Encounter {
  idx: number
  accession: string
  mrn: string
  age: number
  sex: 'M' | 'F'
  categoryId: string
  finding: string
  stationId: string
  stationName: string
  slice: number
  suv: string | null
  status: 'Q-READY' | 'READ' | 'PENDING'
  priority: 'STAT' | 'ROUTINE'
  acgme: string
  date: string
  /** Lowercased haystack precomputed once so search never re-builds strings. */
  search: string
}

/** mulberry32 -- small, fast, deterministic. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Cumulative station weights (weights sum to 100). */
const STATION_CDF: { station: Station; upTo: number }[] = (() => {
  let running = 0
  return STATIONS.map((s) => {
    running += s.weight
    return { station: s, upTo: running }
  })
})()

const TOTAL_WEIGHT = STATION_CDF[STATION_CDF.length - 1].upTo

function pickStation(r: number): Station {
  const target = r * TOTAL_WEIGHT
  for (const entry of STATION_CDF) {
    if (target < entry.upTo) return entry.station
  }
  return STATION_CDF[STATION_CDF.length - 1].station
}

/** Precomputed date strings across a 24 month window ending 2026-08-31. */
const DATES: string[] = (() => {
  const out: string[] = []
  const end = Date.UTC(2026, 7, 31)
  const DAY = 86400000
  for (let i = 0; i < 730; i++) {
    const d = new Date(end - i * DAY)
    const y = d.getUTCFullYear()
    const m = String(d.getUTCMonth() + 1).padStart(2, '0')
    const day = String(d.getUTCDate()).padStart(2, '0')
    out.push(y + '-' + m + '-' + day)
  }
  return out
})()

const SUV_MODALITIES = new Set(['PETHYB', 'NUC', 'THERAPY'])

/**
 * Build the full log. Each category contributes exactly its declared count, so
 * the generated array length is exactly GRAND_TOTAL (33,000).
 */
export function generateCases(seed = 0x5ad12026): Encounter[] {
  const rand = mulberry32(seed)
  const out: Encounter[] = new Array(GRAND_TOTAL)
  let idx = 0

  for (const cat of CATEGORIES) {
    const pool = FINDING_POOLS[cat.id]
    const poolLen = pool.length

    for (let i = 0; i < cat.count; i++) {
      // Draw the finding FIRST: the station must follow the anatomy it names,
      // otherwise a head CT can be filed at TOES and the viewer will faithfully
      // render a foot for it. The weighted roll is only a fallback for findings
      // that name no body region.
      const finding = pool[Math.floor(rand() * poolLen)]
      const roll = rand()
      const derivedId = stationIdForFinding(finding, cat.id)
      const station = (derivedId ? STATION_BY_ID[derivedId] : undefined) ?? pickStation(roll)
      const span = station.end - station.start
      const slice = station.start + Math.floor(rand() * (span + 1))
      const age =
        cat.id === 'PEDS' ? 1 + Math.floor(rand() * 17) : 22 + Math.floor(rand() * 63)
      const sex: 'M' | 'F' = rand() < 0.5 ? 'M' : 'F'

      const statusRoll = rand()
      const status: Encounter['status'] =
        cat.id === 'QREADY'
          ? 'Q-READY'
          : statusRoll < 0.42
            ? 'Q-READY'
            : statusRoll < 0.82
              ? 'READ'
              : 'PENDING'

      const priority: Encounter['priority'] = rand() < 0.13 ? 'STAT' : 'ROUTINE'

      const suv = SUV_MODALITIES.has(cat.id)
        ? (1.4 + rand() * 16).toFixed(1)
        : null

      const accession = 'RR-2026-' + String(idx + 1).padStart(6, '0')
      const mrn = String(1000000 + Math.floor(rand() * 8999999))
      const date = DATES[Math.floor(rand() * DATES.length)]
      const acgme = ACGME_CODES[Math.floor(rand() * ACGME_CODES.length)]

      out[idx] = {
        idx,
        accession,
        mrn,
        age,
        sex,
        categoryId: cat.id,
        finding,
        stationId: station.id,
        stationName: station.name,
        slice,
        suv,
        status,
        priority,
        acgme,
        date,
        search: (
          accession +
          ' ' +
          mrn +
          ' ' +
          cat.label +
          ' ' +
          station.name +
          ' ' +
          finding +
          ' ' +
          status +
          ' ' +
          priority +
          ' ' +
          acgme +
          ' ' +
          date
        ).toLowerCase(),
      }
      idx++
    }
  }

  return out
}
