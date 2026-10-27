import { describe, it, expect } from 'vitest'
import { buildFigureIndex, candidatesFor, figureFor, orderedFor, thumbFor } from './selectFigure'
import { accuracyRank, evaluate } from './qa/engine'
import { generateCases } from './generateCases'
import type { LiveMatch } from './liveMatch'

const fig = (over: Partial<LiveMatch>): LiveMatch =>
  ({
    url: 'https://example.org/f.jpg',
    caption: '',
    relevance: 2,
    pmcid: 'PMC1',
    title: '',
    authors: '',
    journal: '',
    year: '',
    doi: '',
    license: 'CC BY',
    ...over,
  }) as LiveMatch

const FINDING = 'MRI knee bucket-handle medial meniscal tear displaced fragment'

/** Two usable knee figures plus one that is merely adjacent. */
const store: Record<string, LiveMatch[]> = {
  [FINDING]: [
    fig({
      url: 'https://example.org/vague.jpg',
      caption: 'Figure 2 Imaging of the knee joint',
      title: 'Sports injury review',
    }),
    fig({
      url: 'https://example.org/knee-meniscus-mri.jpg',
      caption:
        'Figure 1 Sagittal MRI of the knee demonstrating a displaced bucket-handle tear of the medial meniscus',
      title: 'MRI of meniscal tears of the knee',
    }),
  ],
}

describe('the displayed figure is the best-supported one', () => {
  const index = buildFigureIndex(store)
  const enc = generateCases().find((c) => c.finding === FINDING)!

  it('opens on the figure with the most corroboration, not the first listed', () => {
    const chosen = figureFor(enc, index)
    expect(chosen?.match.url).toBe('https://example.org/knee-meniscus-mri.jpg')
    // A caption that only says "knee joint" is not this diagnosis.
    expect(orderedFor(enc, index).map((x) => x.match.url)).not.toContain(
      'https://example.org/vague.jpg',
    )
  })

  it('orders by accuracy rank, highest first', () => {
    const ordered = orderedFor(enc, index)
    const ranks = ordered.map((x) => accuracyRank(evaluate({ encounter: enc, match: x.match })))
    for (let i = 1; i < ranks.length; i++) expect(ranks[i - 1]).toBeGreaterThanOrEqual(ranks[i])
  })

  it('shows the worklist thumbnail and the viewer the same image', () => {
    // These disagreeing is a defect this app has actually shipped before: the
    // two computed their own offset into the candidate list.
    expect(thumbFor(enc, index)).toBe(figureFor(enc, index)?.match.url)
  })

  it('gives every encounter with the same finding the same first image', () => {
    const same = generateCases()
      .filter((c) => c.finding === FINDING)
      .slice(0, 40)
    const urls = new Set(same.map((c) => figureFor(c, index)?.match.url))
    // Age and sex can legitimately split a finding's ranking; body region and
    // wording cannot. One image per finding here, since none of these figures
    // states a patient.
    expect(urls.size).toBe(1)
  })

  it('walks down the ranking as the reader asks for another match', () => {
    const pool = orderedFor(enc, index)
    for (let offset = 0; offset < pool.length * 2; offset++) {
      expect(figureFor(enc, index, offset)?.match.url).toBe(
        pool[offset % pool.length].match.url,
      )
    }
  })

  it('uses the assigned teaching plate instead of a wrong-region figure', () => {
    const wrongOnly = buildFigureIndex({
      [FINDING]: [fig({ url: 'https://x/brain.jpg', caption: 'Axial MRI of the brain' })],
    })
    const list = candidatesFor(enc, wrongOnly)
    expect(list).toHaveLength(1)
    expect(list[0].match.journal).toBe('NucMed Board Studio plate library')
    expect(figureFor(enc, wrongOnly)?.match.url).toContain('/findings/')
  })
})
