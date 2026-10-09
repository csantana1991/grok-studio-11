import { describe, it, expect } from 'vitest'
import { autoReview } from './autoReview'
import { ageProximity, captionAge, captionSex } from './population'
import type { LiveMatch } from './liveMatch'
import type { Encounter } from './generateCases'

const enc = (over: Partial<Encounter> = {}): Encounter =>
  ({
    idx: 0,
    accession: 'RR-2026-000001',
    mrn: '1',
    age: 63,
    sex: 'F',
    categoryId: 'MAMMO',
    finding: '63F breast carcinoma spiculated mass upper outer quadrant',
    stationId: 'CHEST',
    stationName: 'CHEST',
    slice: 25,
    suv: null,
    status: 'Q-READY',
    priority: 'ROUTINE',
    acgme: 'IV.C.4',
    date: '2026-01-01',
    search: '',
    ...over,
  }) as Encounter

const fig = (caption: string): LiveMatch =>
  ({ url: 'https://x/y.jpg', caption, license: 'CC BY' }) as LiveMatch

describe('age and sex read from a caption', () => {
  it('reads years, months and sex', () => {
    expect(captionAge('A 60-year-old woman with breast carcinoma')).toBe(60)
    expect(captionAge('A 6-month-old infant')).toBeCloseTo(0.5, 1)
    expect(captionSex('A 60-year-old woman with breast carcinoma')).toBe('F')
    expect(captionSex('A 55-year-old man')).toBe('M')
    expect(captionSex('Axial CT of the chest')).toBeNull()
  })

  it('scores age closeness as a gradient, never a gate', () => {
    expect(ageProximity(63, 60)).toBe(1)
    expect(ageProximity(63, 55)).toBeGreaterThan(ageProximity(63, 40))
    expect(ageProximity(63, 20)).toBeGreaterThan(0) // still usable, just ranked lower
    // An unstated age is neutral: most captions never mention the patient.
    expect(ageProximity(63, null)).toBe(0.5)
  })
})

describe('automatic review', () => {
  it('approves a close age, sex and modality match', () => {
    const r = autoReview(
      fig('Figure 2 Mammography in a 60-year-old woman with breast carcinoma showing a spiculated mass'),
      enc(),
    )
    expect(r.verdict).toBe('auto-approved')
    expect(r.captionAge).toBe(60)
    expect(r.reasons.join(' ')).toMatch(/age 60/)
    expect(r.reasons.join(' ')).toMatch(/sex F matches/)
  })

  it('still shows a distant-age study, ranked lower rather than removed', () => {
    const close = autoReview(fig('Mammography in a 60-year-old woman with breast carcinoma'), enc())
    const far = autoReview(fig('Mammography in a 28-year-old woman with breast carcinoma'), enc())
    expect(far.verdict).not.toBe('auto-rejected')
    expect(far.score).toBeLessThan(close.score)
  })

  it('rejects only genuine conflicts', () => {
    // wrong body region
    expect(autoReview(fig('Axial MRI of the brain showing a glioma'), enc()).verdict).toBe(
      'auto-rejected',
    )
    // wrong population
    expect(
      autoReview(fig('Chest radiograph in a 4-year-old child'), enc()).verdict,
    ).toBe('auto-rejected')
    // wrong kind of image
    expect(
      autoReview(fig('Figure 1 Kaplan-Meier survival curve for the cohort'), enc()).verdict,
    ).toBe('auto-rejected')
  })

  it('never rejects for a merely weak description', () => {
    const r = autoReview(fig('Figure 4 Imaging of the chest'), enc())
    expect(r.verdict).toBe('needs-review')
    expect(r.verdict).not.toBe('auto-rejected')
  })

  it('prefers the nearer age when everything else is equal', () => {
    const cases = [40, 52, 61, 78].map((a) => ({
      a,
      score: autoReview(fig(`Mammography in a ${a}-year-old woman with breast carcinoma`), enc())
        .score,
    }))
    const best = cases.reduce((m, x) => (x.score > m.score ? x : m))
    expect(best.a).toBe(61)
  })

  it('explains itself — every verdict carries reasons', () => {
    const r = autoReview(fig('Mammography in a 60-year-old woman with breast carcinoma'), enc())
    expect(r.reasons.length).toBeGreaterThan(0)
  })
})
