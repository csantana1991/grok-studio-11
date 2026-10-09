import { describe, it, expect } from 'vitest'
import {
  captionPopulation,
  encounterPopulation,
  populationConflict,
} from './population'
import { verifyMatch } from './verifyMatch'

describe('population detection', () => {
  it('reads an age in years from a caption', () => {
    expect(captionPopulation('Fig. 3 A 33-year-old male with back pain')).toBe('adult')
    expect(captionPopulation('Figure 1 A 7 year old girl with an abdominal mass')).toBe(
      'paediatric',
    )
  })

  it('treats an age in months as paediatric', () => {
    expect(captionPopulation('Figure 2 A 6-month-old with pyloric stenosis')).toBe(
      'paediatric',
    )
  })

  it('reads population words when no age is given', () => {
    expect(captionPopulation('Axial CT in a neonate with NEC')).toBe('paediatric')
    expect(captionPopulation('Contrast CT in an adult patient')).toBe('adult')
  })

  it('stays unknown when the caption names no patient', () => {
    expect(captionPopulation('Figure 4 Axial fused PET/CT of the upper abdomen')).toBe(
      'unknown',
    )
  })

  it('classifies encounters by age and by the Peds category', () => {
    expect(encounterPopulation(10, 'PEDS')).toBe('paediatric')
    expect(encounterPopulation(17, 'CT')).toBe('paediatric')
    expect(encounterPopulation(33, 'CT')).toBe('adult')
    // A Peds encounter stays paediatric regardless of a stray age.
    expect(encounterPopulation(40, 'PEDS')).toBe('paediatric')
  })

  it('only conflicts when the caption actually states a population', () => {
    expect(populationConflict('Axial CT of the abdomen', 'paediatric')).toBe(false)
    expect(populationConflict('A 33-year-old male', 'paediatric')).toBe(true)
    expect(populationConflict('A 7-year-old girl', 'adult')).toBe(true)
  })
})

describe('BUG FIX: a paediatric encounter is never illustrated with an adult study', () => {
  const finding = '7F neuroblastoma MIBG avid abdominal mass crossing midline'

  it('REJECTS the reported case: a 33-year-old figure for a Peds encounter', () => {
    const v = verifyMatch(
      'Fig. 3 A 33-year-old male with a history of nonspecific back pain and associated paraspinal mass, now presenting with lower back and lower left extremity pain',
      finding,
      'MID_ABDOMEN',
      'paediatric',
    )
    expect(v.verdict).toBe('mismatch')
    expect(v.reasons.join(' ')).toContain('adult')
  })

  it('REJECTS a paediatric figure for an adult encounter', () => {
    const v = verifyMatch(
      'Figure 2 A 6-month-old infant with duodenal atresia',
      'CT abdomen small bowel obstruction with transition point',
      'MID_ABDOMEN',
      'adult',
    )
    expect(v.verdict).toBe('mismatch')
  })

  it('still accepts a caption that states no population', () => {
    const v = verifyMatch(
      'Figure 1 Axial fused PET/CT of the abdomen showing a mesenteric mass',
      finding,
      'MID_ABDOMEN',
      'paediatric',
    )
    expect(v.verdict).not.toBe('mismatch')
  })

  it('accepts a matching paediatric caption', () => {
    const v = verifyMatch(
      'Figure 4 MIBG scan in a 7-year-old with an abdominal neuroblastoma',
      finding,
      'MID_ABDOMEN',
      'paediatric',
    )
    expect(v.verdict).toBe('confirmed')
  })
})
