import { describe, expect, it } from 'vitest'
import { buildDossier, caseSearchBlob, conflictsWith, publicQuery, resolveCaseFigure, resolveVisibleFigure, statedSuv, studyKind } from './caseDossier'
import type { Encounter } from './generateCases'

function enc(partial: Partial<Encounter>): Encounter {
  return {
    idx: 1,
    accession: 'RR-2026-000099',
    mrn: '1234567',
    age: 70,
    sex: 'M',
    categoryId: 'CARDIAC',
    finding: 'MUGA equilibrium radionuclide angiogram LVEF',
    stationId: 'CHEST',
    stationName: 'CHEST',
    slice: 40,
    suv: '8.2',
    status: 'Q-READY',
    priority: 'ROUTINE',
    acgme: 'IV.C.4',
    date: '2026-01-01',
    search: '',
    ...partial,
  }
}

describe('case dossier', () => {
  it('does not put SUV or a PYP file on a MUGA case', () => {
    expect(studyKind(enc({}).finding, 'CARDIAC')).toBe('muga')
    expect(conflictsWith('muga', '/studio/assets/dr/one/pyp-1.jpg')).toBe(true)
    const d = buildDossier(enc({}), { url: '/studio/assets/dr/one/pyp-1.jpg', source: 'plate' })
    expect(d.suv).toBeNull()
    expect(d.imageRole).toBe('none')
    const unlabeled = buildDossier(enc({}), {
      url: '/studio/assets/dr/findings/f-6f3fb55d2ca6.jpg',
      source: 'plate',
    })
    expect(unlabeled.imageRole).toBe('none')
    expect(d.synthetic).toBe(true)
    expect(d.acgmeNote).toMatch(/Not an ACGME/)
    expect(resolveCaseFigure(enc({}), null)?.url ?? '').toBe('')
  })

  it('keeps the stem SUV on an FDG case and strips identifiers from a public query', () => {
    const d = buildDossier(
      enc({
        categoryId: 'PETHYB',
        finding: '62M lung nodule FDG avid SUV 9.1',
        suv: '8.2',
      }),
      { url: '/studio/assets/dr/one/pet-mip-1.jpg', caption: 'FDG PET', source: 'plate' },
    )
    expect(d.kind).toBe('pet-fdg')
    expect(d.suv).toBe('9.1')
    expect(statedSuv('no number here')).toBeNull()
    expect(d.imageRole).toBe('teaching-plate')
    expect(d.frameCount).toBe(1)
    expect(publicQuery('62M lung nodule MRN 1234567')).toBe('lung nodule')
  })

  it('refuses a brain MRI on a CT, a bone scan on a radiograph, and SUV on a bone scan', () => {
    const ct = buildDossier(
      enc({ categoryId: 'CT', finding: 'CT head non-contrast acute subdural haematoma' }),
      { url: '/studio/assets/dr/one/mr-1.jpg', source: 'plate' },
    )
    expect(ct.kind).toBe('ct')
    expect(ct.imageRole).toBe('none')
    expect(ct.suv).toBeNull()

    const xr = buildDossier(
      enc({
        categoryId: 'RAD',
        finding: 'Elbow radiograph posterior fat pad sign occult radial head fracture',
      }),
      { url: '/studio/assets/dr/one/bone-1.jpg', source: 'plate' },
    )
    expect(xr.kind).toBe('radiograph')
    expect(xr.imageRole).toBe('none')

    const bone = buildDossier(
      enc({
        categoryId: 'NUC',
        finding: 'Bone scan Paget disease of the pelvis with Mickey Mouse sign',
        suv: '4.4',
      }),
      { url: '/studio/assets/dr/one/bone-1.jpg', source: 'plate' },
    )
    expect(bone.kind).toBe('bone')
    expect(bone.suv).toBeNull()
    expect(bone.imageRole).toBe('teaching-plate')
  })

  it('uses a cardiac MRI plate for myocarditis and not a PYP file', () => {
    const finding = 'Cardiac MRI myocarditis subepicardial late gadolinium lateral wall'
    expect(studyKind(finding, 'CARDIAC')).toBe('mri')
    const bad = buildDossier(enc({ categoryId: 'CARDIAC', finding }), {
      url: '/studio/assets/dr/one/pyp-1.jpg',
      source: 'plate',
    })
    expect(bad.imageRole).toBe('none')
    const good = resolveCaseFigure(enc({ categoryId: 'CARDIAC', finding, stationId: 'CHEST' }))
    expect(good?.url).toContain('ct-396.jpg')
    expect(good?.source).toBe('plate')
  })

  it('keeps a rejected plate off the case and refuses a mismatched pin', () => {
    const pet = enc({
      categoryId: 'PETHYB',
      finding: 'FDG PET NSCLC RUL SUV 11.8',
      stationId: 'CHEST',
    })
    const plate = resolveVisibleFigure(pet)
    expect(plate?.url).toMatch(/\/meta-image\/tcia\/pet\//)
    const hidden = resolveVisibleFigure(pet, { rejected: (url) => url === plate?.url })
    expect(hidden).toBeNull()
    const pypPin = resolveVisibleFigure(pet, {
      pin: { url: 'https://example.test/pyp.jpg', caption: 'Tc-99m PYP cardiac scan', title: 'PYP' },
    })
    expect(pypPin?.url ?? '').not.toContain('pyp')
    expect(pypPin?.url).toMatch(/\/meta-image\/tcia\/pet\//)
    const cited = resolveVisibleFigure(pet, {
      pin: {
        url: 'https://example.test/fdg.jpg',
        caption: 'FDG PET maximum intensity projection',
        title: 'FDG PET',
      },
    })
    expect(cited?.source).toBe('openi')
    expect(cited?.url).toContain('fdg.jpg')
  })

  it('keeps breast ultrasound and pediatric chest films as their own study', () => {
    const breast = 'Breast ultrasound BI-RADS 3 circumscribed oval hypoechoic mass'
    expect(studyKind(breast, 'US')).toBe('us')
    const us = resolveCaseFigure(enc({ categoryId: 'US', finding: breast, stationId: 'BREAST' }))
    expect(us?.url).toContain('breast-us-mass')
    expect(
      buildDossier(enc({ categoryId: 'US', finding: breast }), { url: us?.url, source: 'plate' }).imageRole,
    ).toBe('teaching-plate')

    const chest = '7M sickle cell acute chest syndrome bibasilar consolidation'
    expect(studyKind(chest, 'PEDS')).toBe('radiograph')
    const xr = resolveCaseFigure(enc({ categoryId: 'PEDS', finding: chest, stationId: 'CHEST' }))
    expect(xr?.url).toMatch(/^nih:/)
    expect(
      buildDossier(enc({ categoryId: 'PEDS', finding: chest }), { url: xr?.url, source: 'plate' }).imageRole,
    ).toBe('teaching-plate')

    const rds = 'Preterm infant respiratory distress syndrome ground glass and air bronchograms'
    expect(studyKind(rds, 'PEDS')).toBe('radiograph')
  })

  it('searches the tracer named by the study, not a random SUV', () => {
    const blob = caseSearchBlob({
      search: 'muga equilibrium radionuclide',
      finding: 'MUGA equilibrium radionuclide angiogram LVEF',
      categoryId: 'CARDIAC',
    })
    expect(blob).toContain('labeled red cells')
    expect(blob).not.toContain('suv')
  })
})