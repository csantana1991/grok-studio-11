import { describe, it, expect } from 'vitest'
import { buildLibrary, matchStudies, normaliseStudy } from './nucleus'

const base = {
  images: [{ label: 'A', url: '/x.webp' }],
  license: 'CC BY 4.0',
  sourceUrl: 'https://example.org',
}

describe('authored simulations', () => {
  it('flags a record the catalogue marks as an authored simulation', () => {
    const s = normaliseStudy(
      {
        ...base,
        study: 'Therapeutic administration simulation 001',
        modality: 'SIM',
        region: 'Thyroid',
        source: 'Nucleus authored simulation · primary authority: snmmi.org',
      },
      0,
    )
    expect(s?.synthetic).toBe(true)
  })

  it('does not flag an acquired study', () => {
    const s = normaliseStudy(
      {
        ...base,
        study: '99mTc-pertechnetate thyroid scintigraphy',
        modality: 'NM',
        region: 'Thyroid',
        source: 'Grossling-Vallejos et al. · IICS-UNA · Zenodo',
      },
      0,
    )
    expect(s?.synthetic).toBe(false)
  })

  /**
   * The viewer feed must never offer a schematic as a case image. The explorer
   * still lists it, because there its provenance is on screen.
   */
  it('keeps simulations out of the viewer feed but in the library', () => {
    const lib = buildLibrary([
      {
        ...base,
        study: 'Therapeutic administration simulation 002',
        modality: 'SIM',
        region: 'Thyroid',
        source: 'Nucleus authored simulation',
      },
      {
        ...base,
        images: [{ label: 'A', url: '/real.webp' }],
        study: '99mTc-pertechnetate thyroid scintigraphy',
        modality: 'NM',
        region: 'Thyroid',
        source: 'IICS-UNA · Zenodo',
      },
    ])

    expect(lib.studies).toHaveLength(2)

    const matched = matchStudies(lib, 'Thyroid uptake scan Graves disease', 'NECK', 'NUC', 6, 44)
    expect(matched).toHaveLength(1)
    expect(matched[0].synthetic).toBe(false)
    expect(matched[0].images[0].url).toBe('/real.webp')
  })
})

describe('study matching', () => {
  const lib = buildLibrary([
    {
      ...base,
      images: [{ label: 'A', url: '/peds-cxr.webp' }],
      study: 'Pediatric frontal chest radiograph',
      modality: 'DX',
      region: 'Pediatric chest',
      collection: 'Pediatric CXR',
      source: 'x',
    },
    {
      ...base,
      images: [{ label: 'A', url: '/cardiac.webp' }],
      study: 'Rest-only 99mTc-MIBI myocardial perfusion SPECT',
      modality: 'NM',
      region: 'Heart',
      collection: 'Cardiac SPECT',
      source: 'x',
    },
  ])

  it('sends a paediatric chest case to the paediatric study, not the cardiac one', () => {
    const m = matchStudies(lib, '4M bronchiolitis hyperinflation', 'CHEST', 'PEDS', 6, 4)
    expect(m[0].images[0].url).toBe('/peds-cxr.webp')
  })

  it('sends an adult cardiac case to the cardiac study', () => {
    const m = matchStudies(lib, 'Stress perfusion inducible ischaemia', 'CHEST', 'NUC', 6, 62)
    expect(m[0].images[0].url).toBe('/cardiac.webp')
  })
})
