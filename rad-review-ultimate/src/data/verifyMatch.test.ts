import { describe, it, expect } from 'vitest'
import { verifyMatch, rankMatches } from './verifyMatch'

describe('match verification — does the figure depict this station?', () => {
  it('confirms a caption that independently names the same region', () => {
    const v = verifyMatch(
      'Fig 5 Sagittal PET/CT of the ankle showing talar marrow uptake at the tibiotalar joint',
      '46F melanoma acral primary left calcaneal marrow uptake SUV 4.7',
      'ANKLE',
    )
    expect(v.verdict).toBe('confirmed')
    expect(v.captionStation).toBe('ANKLE')
  })

  it('REJECTS a brain figure offered for an ankle encounter', () => {
    const v = verifyMatch(
      'Figure 2 Axial FDG PET, CT and fused PET/CT of the brain showing an occipital lesion',
      '46F melanoma acral primary left calcaneal marrow uptake SUV 4.7',
      'ANKLE',
    )
    expect(v.verdict).toBe('mismatch')
    expect(v.captionStation).toBe('VERTEX')
  })

  it('REJECTS a pelvic figure offered for a knee encounter', () => {
    const v = verifyMatch(
      'Figure 6 Pelvic MRI demonstrating a prostate lesion',
      'MRI knee bucket-handle medial meniscal tear displaced fragment',
      'KNEE',
    )
    expect(v.verdict).toBe('mismatch')
  })

  it('REJECTS a chest figure offered for a mid-abdomen encounter', () => {
    const v = verifyMatch(
      'Figure 7 Axial CT of the chest',
      'CT abdomen perforated viscus with free intraperitoneal air',
      'MID_ABDOMEN',
    )
    expect(v.verdict).toBe('mismatch')
  })

  it('tolerates an adjacent region rather than calling it a mismatch', () => {
    const v = verifyMatch(
      'Figure 1 Coronal fused PET/CT of the chest and upper abdomen',
      'CT abdomen acute pancreatitis with peripancreatic fluid CTSI 6',
      'UPPER_ABDOMEN',
    )
    expect(v.verdict).not.toBe('mismatch')
  })

  it('confirms on shared wording even when the caption names no region', () => {
    const v = verifyMatch(
      'Figure 3 Imaging of bucket-handle meniscal displacement',
      'MRI knee bucket-handle medial meniscal tear displaced fragment',
      'KNEE',
    )
    expect(v.verdict).toBe('confirmed')
  })
})

describe('ranking', () => {
  const candidates = [
    { caption: 'Figure 2 Axial brain MRI showing glioblastoma' },
    { caption: 'Fig 5 Sagittal ankle PET/CT talus and calcaneus' },
    { caption: 'Figure 9 Coronal image of unclear region' },
  ]

  it('puts a region mismatch last and a confirmed match first', () => {
    const ranked = rankMatches(
      candidates,
      '46F melanoma acral primary left calcaneal marrow uptake SUV 4.7',
      'ANKLE',
    )
    expect(ranked[0].verification.verdict).toBe('confirmed')
    expect(ranked[0].match.caption).toContain('ankle')
    expect(ranked[ranked.length - 1].verification.verdict).toBe('mismatch')
    expect(ranked[ranked.length - 1].match.caption).toContain('brain')
  })

  it('returns every candidate so the reader can still cycle manually', () => {
    const ranked = rankMatches(candidates, 'anything', 'ANKLE')
    expect(ranked).toHaveLength(candidates.length)
  })
})

describe('non-radiological figures are rejected regardless of region', () => {
  const finding = 'MRI knee bucket-handle medial meniscal tear displaced fragment'

  it('REJECTS an arthroscopic photograph of the correct joint', () => {
    const v = verifyMatch(
      'Fig 2 Arthroscopic view of the medial meniscus showing a bucket-handle tear, fc femoral condyle, tp tibial plateau',
      finding,
      'KNEE',
    )
    expect(v.verdict).toBe('mismatch')
    expect(v.reasons.join(' ')).toContain('not a radiological image')
  })

  it('REJECTS histology and plots', () => {
    for (const cap of [
      'Figure 4 Histological section stained with haematoxylin and eosin',
      'Figure 5 Kaplan-Meier survival curve for the cohort',
      'Figure 1 Study design flow chart',
    ]) {
      expect(verifyMatch(cap, finding, 'KNEE').verdict).toBe('mismatch')
    }
  })

  it('still confirms a genuine knee MRI', () => {
    const v = verifyMatch(
      'Figure 3 Coronal MRI of the knee demonstrating a displaced bucket-handle meniscal tear',
      finding,
      'KNEE',
    )
    expect(v.verdict).toBe('confirmed')
  })
})

describe('diagnosis must match, not just the body region', () => {
  const croup = '5M croup steeple sign on frontal soft tissue neck'

  it('REJECTS a bird photograph whose caption contains the place-name Neck', () => {
    const v = verifyMatch(
      'White-faced Storm Petrel (Pelagodroma marina), East of Eaglehawk Neck, Tasmania',
      croup,
      'NECK',
    )
    expect(v.verdict).toBe('mismatch')
  })

  it('REJECTS parathyroid SPECT-CT offered for croup', () => {
    const v = verifyMatch(
      'Parathyroid Sestamibi SPECT-CT — contrast-enhanced CT of the thorax showed a well-defined soft tissue mass in front of the aortic arch',
      croup,
      'NECK',
    )
    expect(v.verdict).toBe('mismatch')
    expect(v.reasons.join(' ')).toContain('not this diagnosis')
  })

  it('confirms a steeple-sign radiograph for croup', () => {
    const v = verifyMatch(
      'Frontal radiograph of the airway showing the steeple sign of croup with subglottic narrowing',
      croup,
      'NECK',
    )
    expect(v.verdict).not.toBe('mismatch')
  })
})
