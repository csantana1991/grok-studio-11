import { describe, it, expect } from 'vitest'
import { NON_RADIOLOGIC, isNonRadiologic } from './nonRadiologic'

describe('non-radiological figure detection', () => {
  /**
   * This pattern was once written through a shell heredoc that converted its
   * word-boundary escapes into literal backspace bytes (0x08). The regex still
   * looked correct in an editor and in `sed` output, but could never match, so
   * arthroscopy photos and flow charts kept reaching the viewer. Assert the
   * source is clean rather than trusting how it renders.
   */
  it('contains no control characters and keeps its word boundaries', () => {
    const src = NON_RADIOLOGIC.source
    const hasControlChar = [...src].some((c) => c.charCodeAt(0) < 0x20)
    expect(hasControlChar).toBe(false)
    expect(src.startsWith(String.raw`\b`)).toBe(true)
    expect(src.endsWith(String.raw`\b`)).toBe(true)
  })

  it('rejects the figure kinds observed in the viewer', () => {
    for (const cap of [
      'Fig 2 Arthroscopic view of the medial meniscus showing a bucket-handle tear',
      'Figure 1 Participant flow. CECT, contrast-enhanced CT; HBP-AMRI',
      'Figure 4 Histological section stained with haematoxylin and eosin',
      'Figure 5 Kaplan-Meier survival curve for the cohort',
      'Figure 1 Study design flow chart',
      'Figure 3 Intraoperative photograph of the resected specimen',
      'Figure 6 CONSORT diagram of screened patients',
      'Figure 6 A Stepwise Approach to Evaluate a Pericardial Mass Highlighting When to Use DOTATATE PET',
      'Figure 2 Proposed diagnostic algorithm for indeterminate adrenal lesions',
      'Figure 7 Graphical abstract of the management pathway',
    ]) {
      expect(isNonRadiologic(cap), cap).toBe(true)
    }
  })

  it('accepts genuine radiological captions', () => {
    for (const cap of [
      'Figure 3 Coronal MRI of the knee demonstrating a displaced bucket-handle meniscal tear',
      'Figure 1 Axial fused PET/CT of the upper abdomen: liver, spleen and both kidneys',
      'Fig 5 Sagittal PET/CT of the ankle showing talar marrow uptake',
      'Figure 2 Contrast-enhanced CT of the chest with a segmental filling defect',
    ]) {
      expect(isNonRadiologic(cap), cap).toBe(false)
    }
  })

  it('rejects quantitative-analysis plots, which name real anatomy', () => {
    // Observed live: this was APPROVED for an ankle case and shown in the viewer.
    expect(
      isNonRadiologic(
        'Figure 2 SnPM vector analyses and post hoc analysis for gait cycle, ' +
          'comparing kinematics in conditions without orthoses',
      ),
    ).toBe(true)
    for (const c of [
      'Figure 3 Box plot of SUV values by group',
      'Figure 1 Histogram of Hounsfield unit distribution',
      'Figure 4 Regression analysis of tumour volume against survival',
      'Figure 5 Heat map of regional uptake',
    ]) {
      expect(isNonRadiologic(c), c).toBe(true)
    }
  })

  it('rejects wildlife photographs that only share a place-name region word', () => {
    expect(
      isNonRadiologic(
        'White-faced Storm Petrel (Pelagodroma marina), East of Eaglehawk Neck, Tasmania',
      ),
    ).toBe(true)
  })

  it('does not reject a spectral Doppler waveform, which is a real image', () => {
    expect(
      isNonRadiologic('Spectral Doppler waveform of the popliteal vein showing absent flow'),
    ).toBe(false)
  })
})
