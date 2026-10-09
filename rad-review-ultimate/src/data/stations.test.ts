import { describe, it, expect } from 'vitest'
import {
  STATIONS,
  getStationForSlice,
  getSliceFromClick,
  sliceFromClientY,
  formatSlice,
  IMAGES,
  MIN_SLICE,
  MAX_SLICE,
} from './stations'
import {
  GROUP_1_TOTAL,
  GROUP_2_TOTAL,
  GRAND_TOTAL,
  EXPECTED_GROUP_1,
  EXPECTED_GROUP_2,
  EXPECTED_GRAND,
  CATEGORY_BY_ID,
} from './categories'
import { FINDING_POOLS, MIN_POOL_SIZE } from './findings'
import { generateCases } from './generateCases'

describe('BUG FIX: slice 095 is the ankle, never the kidneys', () => {
  it('0.95 -> 095 -> ANKLE (regression that shipped kidneys/liver)', () => {
    const slice = getSliceFromClick(0.95)
    expect(formatSlice(slice)).toBe('095')
    const station = getStationForSlice(slice)
    expect(station.name).toBe('ANKLE')
    expect(station.image).toBe(IMAGES.DISTAL_LIMB)
    expect(station.anatomy.toLowerCase()).toContain('talus')
    expect(station.anatomy.toLowerCase()).not.toContain('kidney')
    expect(station.anatomy.toLowerCase()).not.toContain('liver')
  })

  it('0.42 -> 042 -> UPPER ABDOMEN showing kidney and liver', () => {
    const slice = getSliceFromClick(0.42)
    expect(formatSlice(slice)).toBe('042')
    const station = getStationForSlice(slice)
    expect(station.name).toBe('UPPER ABDOMEN')
    expect(station.image).toBe(IMAGES.AXIAL_FUSION)
    expect(station.anatomy.toLowerCase()).toContain('kidney')
    expect(station.anatomy.toLowerCase()).toContain('liver')
  })

  it('no slice at or below the knee ever resolves to abdominal imagery', () => {
    for (let s = 80; s <= MAX_SLICE; s++) {
      const st = getStationForSlice(s)
      expect(st.image).not.toBe(IMAGES.AXIAL_FUSION)
      expect(st.image).not.toBe(IMAGES.AXIAL_PELVIS)
      expect(st.anatomy.toLowerCase()).not.toContain('kidney')
    }
  })
})

describe('station map integrity', () => {
  it('covers 0..100 contiguously with no gap or overlap', () => {
    expect(STATIONS[0].start).toBe(MIN_SLICE)
    expect(STATIONS[STATIONS.length - 1].end).toBe(MAX_SLICE)
    for (let i = 1; i < STATIONS.length; i++) {
      expect(STATIONS[i].start).toBe(STATIONS[i - 1].end + 1)
    }
  })

  it('resolves every slice in 0..100 to exactly one station', () => {
    for (let s = MIN_SLICE; s <= MAX_SLICE; s++) {
      const matches = STATIONS.filter((st) => s >= st.start && s <= st.end)
      expect(matches).toHaveLength(1)
      expect(getStationForSlice(s)).toBe(matches[0])
    }
  })

  it('matches the specified station boundaries exactly', () => {
    const expected: [string, number, number][] = [
      ['VERTEX', 0, 6],
      ['SKULL BASE', 7, 12],
      ['NECK', 13, 20],
      ['CHEST', 21, 35],
      ['UPPER ABDOMEN', 36, 48],
      ['MID ABDOMEN', 49, 56],
      ['PELVIS', 57, 65],
      ['THIGH', 66, 79],
      ['KNEE', 80, 88],
      ['ANKLE', 89, 96],
      ['TOES', 97, 100],
    ]
    expect(STATIONS.map((s) => [s.name, s.start, s.end])).toEqual(expected)
  })

  it('station weights sum to 100', () => {
    expect(STATIONS.reduce((a, s) => a + s.weight, 0)).toBe(100)
  })

  it('uses only the six real source images', () => {
    const allowed = new Set(Object.values(IMAGES))
    expect(allowed.size).toBe(6)
    for (const s of STATIONS) expect(allowed.has(s.image as never)).toBe(true)
  })
})

describe('click mapping', () => {
  it('slice = round((clientY - rect.top) / height * 100)', () => {
    const rect = { top: 100, height: 800 }
    expect(sliceFromClientY(100, rect)).toBe(0)
    expect(sliceFromClientY(900, rect)).toBe(100)
    expect(sliceFromClientY(436, rect)).toBe(42)
    expect(sliceFromClientY(860, rect)).toBe(95)
  })

  it('clamps out-of-bounds clicks', () => {
    const rect = { top: 100, height: 800 }
    expect(sliceFromClientY(-500, rect)).toBe(0)
    expect(sliceFromClientY(99999, rect)).toBe(100)
    expect(getSliceFromClick(-2)).toBe(0)
    expect(getSliceFromClick(7)).toBe(100)
  })
})

describe('encounter ledger', () => {
  it('group and grand totals are exact', () => {
    expect(GROUP_1_TOTAL).toBe(EXPECTED_GROUP_1)
    expect(GROUP_2_TOTAL).toBe(EXPECTED_GROUP_2)
    expect(GRAND_TOTAL).toBe(EXPECTED_GRAND)
    expect(GROUP_1_TOTAL + GROUP_2_TOTAL).toBe(33000)
  })

  it('CT is the corrected 4500, not 6500', () => {
    expect(CATEGORY_BY_ID.CT.count).toBe(4500)
  })

  it('every modality pool carries 30 or more findings', () => {
    for (const [id, pool] of Object.entries(FINDING_POOLS)) {
      expect(pool.length, id).toBeGreaterThanOrEqual(MIN_POOL_SIZE)
    }
  })
})

describe('generated 33,000 encounters', () => {
  const cases = generateCases()

  it('generates exactly 33,000 rows', () => {
    expect(cases).toHaveLength(33000)
  })

  it('honours the exact per-category counts', () => {
    const tally: Record<string, number> = {}
    for (const c of cases) tally[c.categoryId] = (tally[c.categoryId] ?? 0) + 1
    for (const [id, cat] of Object.entries(CATEGORY_BY_ID)) {
      expect(tally[id], id).toBe(cat.count)
    }
  })

  it('every encounter slice falls inside its own station range', () => {
    for (const c of cases) {
      const st = getStationForSlice(c.slice)
      expect(st.id).toBe(c.stationId)
      expect(st.name).toBe(c.stationName)
    }
  })

  it('is deterministic across runs', () => {
    const again = generateCases()
    expect(again[0]).toEqual(cases[0])
    expect(again[32999]).toEqual(cases[32999])
  })

  it('every finding comes from its own modality pool', () => {
    const pools: Record<string, Set<string>> = {}
    for (const [id, pool] of Object.entries(FINDING_POOLS)) pools[id] = new Set(pool)
    for (const c of cases) expect(pools[c.categoryId].has(c.finding)).toBe(true)
  })
})
