import { describe, it, expect } from 'vitest'
import { queryLadder, splitFinding } from './queryLadder'
import { buildFeedbackModel, applyFeedback, type FeedbackEntry } from './feedback'

describe('finding segmentation', () => {
  it('splits the reported Open-i failure into its parts', () => {
    // "46F melanoma acral primary left calcaneal marrow uptake SUV 4.7"
    // returned nothing on Open-i because it was sent whole.
    const p = splitFinding('46F melanoma acral primary left calcaneal marrow uptake SUV 4.7')
    expect(p.diagnosis).toContain('melanoma')
    expect(p.anatomy).toContain('calcaneal')
    // laterality, "primary" and the SUV carry no retrieval signal
    expect([...p.diagnosis, ...p.anatomy]).not.toContain('left')
    expect([...p.diagnosis, ...p.anatomy]).not.toContain('primary')
  })

  it('picks the modality out of the finding', () => {
    expect(splitFinding('CT PE study segmental filling defect').modality).toBe('CT')
    expect(splitFinding('MRI knee bucket-handle meniscal tear').modality).toBe('MRI')
    expect(splitFinding('68M melanoma new liver lesion SUV 8.1', 'PET/Hybrid').modality).toBe(
      'PET',
    )
    expect(splitFinding('Thyroid uptake scan Graves disease').modality).toBe('scintigraphy')
  })
})

describe('query ladder', () => {
  const finding = '46F melanoma acral primary left calcaneal marrow uptake SUV 4.7'

  it('starts narrower than the raw finding', () => {
    const ladder = queryLadder(finding, 'PET/Hybrid')
    expect(ladder.length).toBeGreaterThan(1)
    expect(ladder[0].terms.length).toBeLessThan(finding.length)
    expect(ladder[0].terms).not.toMatch(/SUV|46F|left/i)
  })

  it('gets progressively broader and never repeats a query', () => {
    const ladder = queryLadder(finding, 'PET/Hybrid')
    const seen = new Set(ladder.map((r) => r.terms))
    expect(seen.size).toBe(ladder.length)
    for (let i = 1; i < ladder.length; i++) {
      expect(ladder[i].breadth).toBeGreaterThan(ladder[i - 1].breadth)
    }
  })

  it('reaches a single-concept query at the broad end', () => {
    const ladder = queryLadder(finding, 'PET/Hybrid')
    const broadest = ladder[ladder.length - 1]
    expect(broadest.terms.split(/\s+/).length).toBeLessThanOrEqual(2)
  })

  it('always returns something usable', () => {
    for (const f of ['Bone scan flare phenomenon', 'DEXA osteoporosis', 'x']) {
      expect(queryLadder(f).length).toBeGreaterThan(0)
      expect(queryLadder(f)[0].terms.length).toBeGreaterThan(0)
    }
  })
})

describe('learning from approve / reject', () => {
  const mk = (url: string, verdict: 'approved' | 'rejected'): FeedbackEntry => ({
    url,
    verdict,
    finding: 'f',
    stationId: 'CHEST',
    at: 1,
  })
  const cand = (url: string) => ({ match: { url } as { url: string } })

  it('never offers a rejected image again', () => {
    const model = buildFeedbackModel({ 'a.jpg': mk('a.jpg', 'rejected') })
    const out = applyFeedback([cand('a.jpg'), cand('b.jpg')], model)
    expect(out.map((c) => c.match.url)).toEqual(['b.jpg'])
  })

  it('promotes an approved image to the front', () => {
    const model = buildFeedbackModel({ 'b.jpg': mk('b.jpg', 'approved') })
    const out = applyFeedback([cand('a.jpg'), cand('b.jpg')], model)
    expect(out[0].match.url).toBe('b.jpg')
  })

  it('needs a pattern before judging a whole domain', () => {
    const one = buildFeedbackModel({
      'https://bad.org/1.jpg': mk('https://bad.org/1.jpg', 'rejected'),
    })
    expect(one.byDomain['bad.org']).toBeUndefined()

    const several = buildFeedbackModel({
      'https://bad.org/1.jpg': mk('https://bad.org/1.jpg', 'rejected'),
      'https://bad.org/2.jpg': mk('https://bad.org/2.jpg', 'rejected'),
      'https://bad.org/3.jpg': mk('https://bad.org/3.jpg', 'rejected'),
    })
    expect(several.byDomain['bad.org']).toBeLessThan(0)
  })

  it('down-ranks images from a source that keeps being rejected', () => {
    const model = buildFeedbackModel({
      'https://bad.org/1.jpg': mk('https://bad.org/1.jpg', 'rejected'),
      'https://bad.org/2.jpg': mk('https://bad.org/2.jpg', 'rejected'),
      'https://bad.org/3.jpg': mk('https://bad.org/3.jpg', 'rejected'),
      'https://good.org/1.jpg': mk('https://good.org/1.jpg', 'approved'),
      'https://good.org/2.jpg': mk('https://good.org/2.jpg', 'approved'),
      'https://good.org/3.jpg': mk('https://good.org/3.jpg', 'approved'),
    })
    const out = applyFeedback([cand('https://bad.org/9.jpg'), cand('https://good.org/9.jpg')], model)
    expect(out[0].match.url).toContain('good.org')
  })
})
