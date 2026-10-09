import { describe, it, expect } from 'vitest'
import {
  RANK_POOL,
  accuracyRank,
  consensusOf,
  descriptionFingerprint,
  evaluate,
  rankCandidates,
  selectForCase,
  summarise,
} from './engine'
import { runPasses } from './validators'
import { lateralityOf, lateralityConflict } from './laterality'
import { modalitiesIn, modalitySatisfies, requiredModality } from './modality'
import type { Encounter } from '../generateCases'
import type { LiveMatch } from '../liveMatch'
import type { ProbeResult } from './types'

const enc = (over: Partial<Encounter> = {}): Encounter =>
  ({
    idx: 0,
    accession: 'RR-2026-004021',
    mrn: '1',
    age: 34,
    sex: 'M',
    categoryId: 'MRI',
    finding: 'MRI right knee anterior cruciate ligament complete tear',
    stationId: 'KNEE',
    stationName: 'KNEE',
    slice: 82,
    suv: null,
    status: 'Q-READY',
    priority: 'ROUTINE',
    acgme: 'IV.C.4',
    date: '2026-01-01',
    search: '',
    ...over,
  }) as Encounter

const fig = (over: Partial<LiveMatch> = {}): LiveMatch =>
  ({
    url: 'https://example.org/figs/knee-mri-acl.jpg',
    caption: 'Figure 1 Sagittal MRI of the right knee demonstrating a complete tear of the anterior cruciate ligament',
    title: 'Magnetic resonance imaging of acute knee injury',
    relevance: 3,
    pmcid: 'PMC1',
    authors: 'A. Author',
    journal: 'J Test',
    year: '2024',
    doi: '',
    license: 'CC BY',
    ...over,
  }) as LiveMatch

const goodProbe = (url: string): ProbeResult => ({
  url,
  ok: true,
  httpStatus: 200,
  contentType: 'image/jpeg',
  bytes: 180_000,
  width: 900,
  height: 700,
  at: 0,
})

describe('positive matching', () => {
  it('approves a correct knee MRI for a knee MRI case', () => {
    const m = fig()
    const ev = evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) })
    expect(ev.status).toBe('APPROVED')
    expect(ev.consensus.consensus).toBe(1)
    expect(ev.consensus.independentApprovals).toBeGreaterThanOrEqual(3)
  })

  it('never claims the pixels were checked', () => {
    const m = fig()
    const r = selectForCase(enc(), [m], { probes: new Map([[m.url, goodProbe(m.url)]]) })
    expect(r.record.visual).toBe('unverified')
    const visual = runPasses({ encounter: enc(), match: m }).find((p) => p.id === 'visual')
    expect(visual?.decision).toBe('abstain')
  })
})

// The spec is explicit that a validator which approves everything is worthless.
describe('negative testing — these must all DENY', () => {
  const cases: [string, Partial<LiveMatch>][] = [
    [
      'brain MRI for a knee case',
      { caption: 'Axial MRI of the brain showing a left frontal glioma', url: 'https://x/brain.jpg' },
    ],
    [
      'shoulder for a knee case',
      { caption: 'MRI of the shoulder demonstrating a rotator cuff tear', url: 'https://x/sh.jpg' },
    ],
    [
      'abdomen for a knee case',
      { caption: 'CT of the abdomen showing a liver metastasis', url: 'https://x/abd.jpg' },
    ],
    [
      'knee radiograph when MRI is required',
      { caption: 'Plain radiograph of the right knee, anteroposterior view' },
    ],
    [
      'left knee for a right knee case',
      { caption: 'Sagittal MRI of the left knee with an anterior cruciate ligament tear' },
    ],
    [
      'a survival curve, not imaging',
      { caption: 'Figure 5 Kaplan-Meier survival curve for the study cohort' },
    ],
  ]

  for (const [name, over] of cases) {
    it(`denies ${name}`, () => {
      const m = fig(over)
      const ev = evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) })
      expect(ev.status, `${name} -> ${ev.reasons.join('; ')}`).not.toBe('APPROVED')
      expect(['REJECTED', 'QUARANTINED']).toContain(ev.status)
    })
  }

  it('treats a wrong body part as critical, not adjacent', () => {
    const m = fig({ caption: 'Axial CT of the brain' })
    const ev = evaluate({ encounter: enc(), match: m })
    expect(ev.code).toBe('WRONG_ANATOMY')
  })
})

describe('file integrity', () => {
  const bad: [string, Partial<ProbeResult>, string][] = [
    ['a 404', { ok: false, httpStatus: 404 }, 'BROKEN_URL'],
    ['HTML pretending to be a jpg', { contentType: 'text/html' }, 'NOT_IMAGE'],
    ['a truncated file', { bytes: 300 }, 'CORRUPTED_FILE'],
    ['a thumbnail', { width: 90, height: 70 }, 'LOW_RESOLUTION'],
  ]
  for (const [name, over, code] of bad) {
    it(`rejects ${name}`, () => {
      const m = fig()
      const ev = evaluate({
        encounter: enc(),
        match: m,
        probe: { ...goodProbe(m.url), ...over },
      })
      expect(ev.status).toBe('REJECTED')
      expect(ev.code).toBe(code)
    })
  }
})

describe('self-healing selection', () => {
  it('replaces a broken first candidate with a valid one instead of blanking', () => {
    const broken = fig({ url: 'https://x/broken.jpg' })
    const good = fig({ url: 'https://x/good.jpg' })
    const probes = new Map<string, ProbeResult>([
      ['https://x/broken.jpg', { ...goodProbe('https://x/broken.jpg'), ok: false, httpStatus: 404 }],
      ['https://x/good.jpg', goodProbe('https://x/good.jpg')],
    ])
    const r = selectForCase(enc(), [broken, good], { probes })
    expect(r.chosen?.url).toBe('https://x/good.jpg')
    expect(r.record.status).toBe('REPLACED')
    expect(r.record.replacedFrom).toBe('https://x/broken.jpg')
    expect(r.attempts).toHaveLength(2)
  })

  it('stays bounded rather than looping over a long candidate list', () => {
    const dud = (n: number) => fig({ url: `https://x/${n}.jpg`, caption: 'Axial MRI of the brain' })
    const many = Array.from({ length: 30 }, (_, i) => dud(i))
    const r = selectForCase(enc(), many)
    expect(r.attempts.length).toBeLessThanOrEqual(RANK_POOL)
    expect(r.chosen).toBeNull()
  })

  it('reports honestly when nothing is available', () => {
    const r = selectForCase(enc(), [])
    expect(r.record.status).toBe('SOURCE_UNAVAILABLE')
    expect(r.chosen).toBeNull()
  })

  it('obeys a reader who rejected an image, over every automatic signal', () => {
    const m = fig()
    const ev = evaluate({
      encounter: enc(),
      match: m,
      probe: goodProbe(m.url),
      humanVerdict: 'rejected',
    })
    expect(ev.status).toBe('REJECTED')
    expect(ev.code).toBe('HUMAN_REJECTED')
  })
})

describe('the best match leads, not merely the first acceptable one', () => {
  const probes = (...urls: string[]) => new Map(urls.map((u) => [u, goodProbe(u)]))

  it('opens on the closest figure even when a weaker one is listed first', () => {
    // Both are usable knee MRIs. The second names the region in its title and
    // file name as well as its caption, so more independent sources agree.
    const weak = fig({
      url: 'https://x/a.jpg',
      caption: 'Sagittal MRI of the right knee',
      title: 'Imaging in sports injury',
    })
    const strong = fig({
      url: 'https://x/knee-acl.jpg',
      caption:
        'Sagittal MRI of the right knee demonstrating a complete anterior cruciate ligament tear',
      title: 'MRI of the knee in acute anterior cruciate ligament rupture',
    })
    const r = selectForCase(enc(), [weak, strong], { probes: probes(weak.url, strong.url) })
    expect(r.chosen?.url).toBe(strong.url)
    expect(r.record.status).toBe('REPLACED')
    expect(r.record.replacedFrom).toBe(weak.url)
  })

  it('ranks strictly worse candidates below better ones', () => {
    const good = fig({ url: 'https://x/good.jpg' })
    const vague = fig({ url: 'https://x/vague.jpg', caption: 'MRI of the knee', title: '' })
    const wrong = fig({ url: 'https://x/wrong.jpg', caption: 'Axial MRI of the brain' })
    const order = rankCandidates(enc(), [wrong, vague, good], {
      probes: probes(good.url, vague.url, wrong.url),
    }).map((r) => r.match.url)
    expect(order[0]).toBe(good.url)
    expect(order[order.length - 1]).toBe(wrong.url)
  })

  it('orders identically however the candidates arrive', () => {
    const a = fig({ url: 'https://x/a.jpg' })
    const b = fig({ url: 'https://x/b.jpg', caption: 'MRI of the knee', title: '' })
    const c = fig({ url: 'https://x/c.jpg', caption: 'Axial CT of the abdomen' })
    const key = (list: typeof a[]) =>
      rankCandidates(enc(), list, { probes: probes(a.url, b.url, c.url) })
        .map((r) => r.match.url)
        .join(',')
    expect(key([a, b, c])).toBe(key([c, b, a]))
    expect(key([a, b, c])).toBe(key([b, a, c]))
  })

  it('scores a fully-corroborated match above a thinly-described one', () => {
    const m = fig()
    const full = accuracyRank(evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) }))
    const thin = accuracyRank(
      evaluate({ encounter: enc(), match: fig({ caption: 'MRI of the knee', title: '' }) }),
    )
    expect(full).toBeGreaterThan(thin)
  })
})

describe('uncertainty is escalated, not guessed', () => {
  it('sends an unnamed region to human review rather than approving it', () => {
    const m = fig({ caption: 'Figure 2 Representative images from the cohort', title: '' })
    const ev = evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) })
    expect(ev.status).toBe('NEEDS_HUMAN_REVIEW')
  })

  it('does not split the difference when checks disagree', () => {
    // Region agrees; the stated age is far off. One deny, several approves.
    const m = fig({
      caption:
        'Sagittal MRI of the right knee in a 4-year-old boy with an anterior cruciate ligament tear',
    })
    const ev = evaluate({ encounter: enc({ age: 34 }), match: m, probe: goodProbe(m.url) })
    expect(ev.status).not.toBe('APPROVED')
  })

  it('counts abstentions separately from agreement', () => {
    const c = consensusOf([
      { id: 'a', evidence: 'caption', decision: 'approve', reason: '' },
      { id: 'b', evidence: 'title', decision: 'abstain', reason: '' },
    ])
    expect(c.consensus).toBe(1)
    expect(c.abstentions).toBe(1)
    expect(c.independentApprovals).toBe(1)
  })
})

describe('determinism', () => {
  it('reaches the same verdict on 100 repeats', () => {
    const m = fig()
    const first = JSON.stringify(evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) }))
    for (let i = 0; i < 100; i++) {
      expect(JSON.stringify(evaluate({ encounter: enc(), match: m, probe: goodProbe(m.url) }))).toBe(
        first,
      )
    }
  })

  it('fingerprints the medical meaning, not the paperwork', () => {
    const a = descriptionFingerprint(enc({ accession: 'RR-1', date: '2020-01-01' }))
    const b = descriptionFingerprint(enc({ accession: 'RR-2', date: '2026-09-09' }))
    expect(a).toBe(b)
    // A different diagnosis must invalidate the lock.
    expect(descriptionFingerprint(enc({ finding: 'MRI right knee medial meniscal tear' }))).not.toBe(
      a,
    )
  })
})

describe('supporting rules', () => {
  it('reads laterality without inventing it', () => {
    expect(lateralityOf('MRI right knee ACL tear')).toBe('RIGHT')
    expect(lateralityOf('bilateral pulmonary emboli')).toBe('BILATERAL')
    expect(lateralityOf('CT chest')).toBe('UNKNOWN')
    expect(lateralityConflict('RIGHT', 'UNKNOWN')).toBe(false)
    expect(lateralityConflict('RIGHT', 'LEFT')).toBe(true)
  })

  it('lets PET/CT serve a PET case but never lets CT serve an MRI case', () => {
    expect(modalitySatisfies('PET', modalitiesIn('FDG PET/CT maximum intensity projection'))).toBe(
      true,
    )
    expect(modalitySatisfies('MRI', modalitiesIn('Axial contrast-enhanced CT'))).toBe(false)
    expect(modalitySatisfies('CT', modalitiesIn('T2-weighted MRI'))).toBe(false)
  })

  it("takes the modality from the case's own words over its category label", () => {
    expect(requiredModality('MRI right knee ACL tear', 'MRI')).toBe('MRI')
    expect(requiredModality('bone scintigraphy whole body', 'NUC')).toBe('NM')
  })
})

describe('summary', () => {
  it('aggregates statuses and reason codes', () => {
    const m = fig()
    const rows = [
      selectForCase(enc(), [m], { probes: new Map([[m.url, goodProbe(m.url)]]) }).record,
      selectForCase(enc({ accession: 'RR-2' }), [fig({ caption: 'Axial MRI of the brain' })]).record,
      selectForCase(enc({ accession: 'RR-3' }), []).record,
    ]
    const s = summarise(rows)
    expect(s.cases).toBe(3)
    expect(s.approved).toBe(1)
    expect(s.sourceUnavailable).toBe(1)
    expect(s.anatomyMismatches).toBe(1)
    expect(s.autoApprovalRate).toBeCloseTo(1 / 3, 5)
  })
})
