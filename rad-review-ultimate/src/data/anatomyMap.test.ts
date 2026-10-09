import { describe, it, expect } from 'vitest'
import { stationIdForFinding } from './anatomyMap'
import { generateCases } from './generateCases'
import { FINDING_POOLS } from './findings'
import { getStationForSlice } from './stations'

describe('BUG FIX: the station must follow the anatomy named in the finding', () => {
  const cases: [string, string][] = [
    ['CT head non-contrast acute subdural haematoma with midline shift', 'VERTEX'],
    ['MRI knee bucket-handle medial meniscal tear displaced fragment', 'KNEE'],
    ['CT neck deep space infection peritonsillar abscess', 'NECK'],
    ['MRI liver LI-RADS 5 observation in cirrhotic background', 'UPPER_ABDOMEN'],
    ['Chest radiograph new right lower lobe consolidation', 'CHEST'],
    ['46F melanoma acral primary left calcaneal marrow uptake SUV 4.7', 'ANKLE'],
    ['9M Meckel scan ectopic gastric mucosa right lower quadrant', 'UPPER_ABDOMEN'],
    ['MRI prostate PI-RADS 4 left peripheral zone lesion', 'PELVIS'],
    ['DEXA osteoporosis T-score -2.8 femoral neck', 'PELVIS'],
    ['8F toddler fracture spiral tibial shaft undisplaced', 'KNEE'],
    ['3M Langerhans cell histiocytosis skull lytic lesion bevelled edge', 'SKULL_BASE'],
    ['MRI brain glioblastoma with rim enhancement and central necrosis', 'VERTEX'],
  ]

  for (const [finding, expected] of cases) {
    it(`"${finding.slice(0, 46)}..." -> ${expected}`, () => {
      expect(stationIdForFinding(finding)).toBe(expected)
    })
  }
})

describe('no encounter contradicts its own anatomy', () => {
  const generated = generateCases()

  it('every derivable finding is filed at the station its text names', () => {
    const offenders = generated
      .filter((c) => {
        const want = stationIdForFinding(c.finding, c.categoryId)
        return want !== null && want !== c.stationId
      })
      .slice(0, 5)
      .map((c) => `${c.finding} -> ${c.stationName}`)
    expect(offenders).toEqual([])
  })

  it('an intracranial finding never lands below the skull base', () => {
    // "head and neck SCC" is a neck primary, not an intracranial one, so the
    // probe uses unambiguous intracranial words rather than the word "head".
    const intracranial = /\b(brain|subdural|intracranial|cerebral|glioblastoma)/i
    for (const c of generated) {
      if (!intracranial.test(c.finding)) continue
      expect(['VERTEX', 'SKULL_BASE'], c.finding).toContain(c.stationId)
      expect(c.slice).toBeLessThanOrEqual(12)
    }
  })

  it('the reported regression is fixed: a head CT is never filed at the foot', () => {
    const headCt = generated.filter((c) =>
      /^CT head non-contrast acute subdural/.test(c.finding),
    )
    expect(headCt.length).toBeGreaterThan(0)
    for (const c of headCt) {
      expect(c.stationId).toBe('VERTEX')
      expect(c.stationName).not.toBe('TOES')
    }
  })

  it('a foot, ankle or toe finding never lands above the knee', () => {
    const distal = /\b(ankle|calcaneal|talus|achilles|toe|metatars|forefoot|foot)\b/i
    for (const c of generated) {
      if (!distal.test(c.finding)) continue
      expect(['ANKLE', 'TOES'], c.finding).toContain(c.stationId)
      expect(c.slice).toBeGreaterThanOrEqual(89)
    }
  })

  it('the rendered image still matches the encounter station', () => {
    for (const c of generated) {
      expect(getStationForSlice(c.slice).id).toBe(c.stationId)
    }
  })

  it('every pooled finding across all modalities resolves or is deliberately generic', () => {
    const unresolved: string[] = []
    for (const [modality, pool] of Object.entries(FINDING_POOLS)) {
      for (const f of pool) if (!stationIdForFinding(f, modality)) unresolved.push(f)
    }
    // Entries naming no anatomy at all (e.g. "Post-treatment PET response
    // assessment") legitimately fall back to the weighted roll, but they must
    // stay a small minority of the ~350 pooled findings.
    expect(unresolved.length).toBeLessThan(15)
  })
})
