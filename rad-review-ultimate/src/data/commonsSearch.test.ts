import { describe, it, expect } from 'vitest'
import { commonsQueries } from './commonsSearch'
import { extractTerms } from './pmcSearch'

const q = (finding: string, station?: string) =>
  commonsQueries(finding, extractTerms(finding), station)

describe('Commons query construction', () => {
  it('puts the modality last, the way files are actually named', () => {
    // Commons titles read like "Meniscal Tear MRI.jpg", not "MRI meniscal tear".
    const first = q('MRI knee bucket-handle medial meniscal tear', 'KNEE')[0]
    expect(first.query).toMatch(/MRI$/)
    expect(first.query).toContain('knee')
  })

  it('keeps queries short — a long ANDed query returns nothing from Commons', () => {
    for (const { query } of q('CT chest interstitial lung disease UIP pattern honeycombing', 'CHEST')) {
      expect(query.split(/\s+/).length).toBeLessThanOrEqual(3)
    }
  })

  it('does not repeat the modality that is already a search term', () => {
    // extractTerms keeps "radiograph", and "chest radiograph radiograph" is a
    // worse query than "chest radiograph".
    for (const { query } of q('Chest radiograph new right lower lobe consolidation', 'CHEST')) {
      expect(query.match(/radiograph/g)?.length ?? 0).toBeLessThanOrEqual(1)
    }
  })

  it('narrows first, then widens', () => {
    const steps = q('MRI pituitary microadenoma 4 mm left aspect of gland', 'SKULL_BASE')
    expect(steps[0].tier).toBe('finding')
    expect(steps.some((s) => s.tier === 'broad')).toBe(true)
  })

  it('tiers the anatomy rung so it can never pose as a case match', () => {
    const steps = q('MRI knee meniscal tear', 'KNEE')
    expect(steps.some((s) => s.tier === 'anatomy')).toBe(true)
  })

  it('downgrades a query that doubles as the anatomy rung', () => {
    // "knee MRI" is both the broad rung and the anatomy rung here. It must carry
    // the weaker label: the query never mentioned the meniscus, so its results
    // are region examples, not matches to this finding.
    const steps = q('MRI knee meniscal tear', 'KNEE')
    expect(steps.find((s) => s.query === 'knee MRI')?.tier).toBe('anatomy')
  })

  it('produces no anatomy rung when the station is unknown', () => {
    expect(q('MRI knee meniscal tear').some((s) => s.tier === 'anatomy')).toBe(false)
  })

  it('never emits an empty or duplicate query', () => {
    const steps = q('Venous duplex acute deep vein thrombosis popliteal segment', 'KNEE')
    const seen = new Set<string>()
    for (const { query } of steps) {
      expect(query.trim()).not.toBe('')
      expect(seen.has(query)).toBe(false)
      seen.add(query)
    }
  })

  it('still builds a query when the finding names no modality', () => {
    const steps = q('popliteal cyst', 'KNEE')
    expect(steps.length).toBeGreaterThan(0)
    expect(steps[0].query).toContain('popliteal')
  })
})
