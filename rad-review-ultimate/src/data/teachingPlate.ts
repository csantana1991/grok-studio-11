/**
 * Finding-matched teaching analogue.
 *
 * Literature figures (PMC) still win when they exist and verify. When they
 * do not, the viewer must not fall back to a wrong-station atlas plate
 * (the failure that put a pelvis PET/CT on an ankle case). These plates
 * were visually inspected; filenames that do not match their pixels are
 * not used for the named finding.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'
import { distalStation, plateOmitsDistalLimb } from './plateCrop'

const DR = '/studio/assets/dr/'

function normStation(stationId: string): string {
  return stationId.toLowerCase().replace('skull_base', 'skullbase').replace('upper_abdomen', 'uabd').replace('mid_abdomen', 'mabd')
}

/** One plate. The named study wins over the station, so a CT is never a PET. */
function pick(finding: string, stationId: string, categoryId: string): string {
  const f = finding.toLowerCase()
  const cat = categoryId.toLowerCase()
  const sid = normStation(stationId)
  const head = sid === 'vertex' || sid === 'skullbase' || /brain|subdural|convexity|skull|calvar|orbit|pituitary/.test(f)
  const chest = sid === 'chest'
  const neck = sid === 'neck'
  const abd = sid === 'uabd' || sid === 'mabd'
  const pel = sid === 'pelvis'
  const knee = sid === 'knee' || /knee|menisc|patella|popliteal|\bacl\b/.test(f)
  const limb = sid === 'ankle' || sid === 'toes' || sid === 'thigh'
  const petNamed = cat === 'pethyb' || cat === 'pethybrid' || /\bpet\b|\bfdg\b|deauville/.test(f)
  const usNamed = cat === 'us' || (/\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f) && !petNamed)
  const mrNamed = cat !== 'cardiac' && (cat === 'mri' || (/\bmri\b|\bmrcp\b/.test(f) && !petNamed))
  const ctNamed = !petNamed && (cat === 'ct' || (/\bct\b|\bcta\b/.test(f) && cat !== 'mri' && cat !== 'us' && cat !== 'rad'))
  const radNamed = cat === 'rad' || /\bradiograph\b|\bx-?ray\b|\bkub\b|\bportable chest\b/.test(f)
  const breastStudy = /breast|mammo|gynecomastia|implant|tomosynthesis|calcification|architectural distortion|bi-rads|phyllodes|papilloma/.test(f)
    && !/brain|calvar|vertex|liver|adrenal|femoral|acetab|ovary|menisc|bone scan|\bfdg\b/.test(f)
  const skeletal = /bone scan|\bmdp\b|osteomyelitis|superscan|ra-223|bone pain|palliation|stress reaction|stress fracture|insufficiency|arthroplasty|periprosthetic|three-phase|\bfracture\b/.test(f)
  const file = (name: string) => {
    const url = DR + name
    // A torso MIP cannot teach the knee, ankle, or toes — those pixels are not in the frame.
    if (distalStation(stationId) && plateOmitsDistalLimb(url)) return DR + 'bone-scan-wb.jpg'
    return url
  }
  if (/parathyroid/.test(f) || (/sestamibi/.test(f) && /parathyroid|neck/.test(f) && cat !== 'cardiac')) return file('thyroid-scan-i123.jpg')
  if (/dotatate|octreotide|\bsstr\b|\bprrt\b/.test(f) && !usNamed && !ctNamed && !mrNamed && !radNamed) return file('nm-dotatate.jpg')
  if (/\bpsma\b/.test(f) && !usNamed && !ctNamed && !mrNamed && !radNamed) return file('nm-psma.jpg')
  if (usNamed) return file(/gallbladder|cholecyst|hepatic|liver|hida/.test(f) ? 'case-us-2.jpg' : 'case-us-1.jpg')
  if (mrNamed) {
    // case-mr-1 is a brain/knee/shoulder/spine board, not a cholangiogram.
    if (/mrcp|choledocho|biliary|cholangio|bile duct|pancreatic duct/.test(f)) return file('mrcp-choledocholithiasis.jpg')
    if (knee) return file('case-mr-2.jpg')
    if (head) return file('mri-brain-t2.jpg')
    if (neck) return file('case-mr-3.jpg')
    return file('case-mr-1.jpg')
  }
  if (ctNamed) {
    if (head) return file('mri-brain-t2.jpg')
    if (knee) return file('case-mr-2.jpg')
    if (limb) return file('bone-scan-wb.jpg')
    if (chest) return file('case-ct-3.jpg')
    return file('case-ct-1.jpg')
  }
  if (radNamed) {
    if (chest || /chest|lung|rib|pulmonary|pneumothorax/.test(f)) return file('case-xr-3.jpg')
    if (/arthroplasty|periprosthetic|prosthes/.test(f)) return file('bone-scan-wb.jpg')
    if (knee) return file('case-mr-2.jpg')
    if (head) return file('mri-brain-t2.jpg')
    if (abd || pel) return file('case-ct-1.jpg')
    return file('bone-scan-wb.jpg')
  }
  if (cat === 'mammo' && breastStudy) return file('breast-calcs.jpg')
  if (/datscan|ioflupane|striatum/.test(f)) return file('nm-petmri-brain.jpg')
  if (/\bv\/?q\b|ventilation|perfusion/.test(f)) return file('nm-vq1.jpg')
  if (/hida|cholecyst|gallbladder/.test(f)) return file('nm-hida.jpg')
  if (/mag3|dmsa/.test(f)) return file('nm-mag3.jpg')
  if (petNamed) return file(head && /brain|vertex|skull|scalp|temporoparietal|perineural|cerebral/.test(f) ? 'nm-petmri-brain.jpg' : 'nm-fdg-mip.jpg')
  if (skeletal && !usNamed && !ctNamed && !mrNamed && !radNamed) return file('bone-scan-wb.jpg')
  if (/whole body/.test(f) && /i-131|iodine/.test(f)) return file('nm-iodine.jpg')
  if (/thyroid|graves|i-123|i-131|pertechnetate/.test(f) && !skeletal) return file('thyroid-scan-i123.jpg')
  if (cat === 'cardiac' || /myocard|\bpyp\b|\bmuga\b|flurpiridaz|regadenoson/.test(f)) {
    if (/fdg/.test(f)) return file('nm-fdg-mip.jpg')
    if (/\bmri\b/.test(f)) return file('case-mr-1.jpg')
    if (/\bct\b|\bcta\b|calcium/.test(f)) return file('case-ct-3.jpg')
    return file('cardiac-ac.jpg')
  }
  if (cat === 'therapy') {
    if (/y-90|radioembol/.test(f)) return file('nm-hida.jpg')
    if (/i-131|thyroid|graves/.test(f) && !skeletal) return file('thyroid-scan-i123.jpg')
    if (/gamma knife|schwannoma|cranial irradiation/.test(f)) return file('mri-brain-t2.jpg')
    return file('bone-scan-wb.jpg')
  }
  if (head) return file('mri-brain-t2.jpg')
  if (neck) return file('case-ct-1.jpg')
  if (chest) return file(cat === 'nuc' || cat === 'nuclear' || cat === 'qready' ? 'nm-fdg-mip.jpg' : 'case-xr-3.jpg')
  if (knee) return file('case-mr-2.jpg')
  if (limb && (cat === 'nuc' || cat === 'nuclear' || cat === 'therapy')) return file('bone-scan-wb.jpg')
  if (limb) return file('case-mr-2.jpg')
  return file('case-ct-1.jpg')
}

/** A literature figure may lead only when it is the same kind of study. */
export function plateAgrees(finding: string, categoryId: string, hay: string): boolean {
  const h = hay.toLowerCase()
  const f = finding.toLowerCase()
  const cat = categoryId.toLowerCase()
  const pet = cat === 'pethyb' || cat === 'pethybrid' || /\bpet\b|\bfdg\b|deauville|\bpsma\b|dotatate/.test(f)
  let kind = 'any'
  if (/parathyroid/.test(f) || /bone scan|\bmdp\b|osteomyelitis|superscan|\bv\/?q\b|hida|mag3|dmsa|i-123|i-131|thyroid scan/.test(f) || cat === 'nuc' || cat === 'nuclear' || cat === 'therapy') kind = 'nm'
  if (cat === 'us' || (/\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f) && !pet)) kind = 'us'
  if (cat === 'mri' || (/\bmri\b|\bmrcp\b/.test(f) && !pet)) kind = 'mri'
  if (cat === 'ct' || (/\bct\b|\bcta\b/.test(f) && !pet)) kind = 'ct'
  if (cat === 'rad' || /radiograph|x-ray|\bxr\b/.test(f)) kind = 'rad'
  if (cat === 'mammo' && /breast|mammo/.test(f) && !/brain|calvar|liver|bone scan|\bfdg\b/.test(f)) kind = 'mammo'
  if ((cat === 'cardiac' || cat === 'pethyb') && pet) kind = 'pet'
  if (pet && kind !== 'us' && kind !== 'mri' && kind !== 'ct' && kind !== 'rad') kind = 'pet'
  if (cat === 'cardiac' && !pet && !/\bmri\b|\bct\b/.test(f)) kind = 'cardiac'
  if (cat === 'mammo' && !/brain|calvar|vertex|liver|adrenal|femoral|acetab|ovary|menisc|bone scan|\bfdg\b|\bpet\b/.test(f)) kind = 'mammo'
  if (/gamma knife|schwannoma|cranial irradiation/.test(f)) kind = 'mri'
  if (kind === 'us') return /ultrasound|sonograph|case-us|duplex|echograph/.test(h) && !/psma|fdg-mip|bone-scan|pet/.test(h)
  if (kind === 'mri' && /mrcp|choledocho|biliary|cholangio|bile duct/.test(f)) {
    return /mrcp|choledocho|biliary|cholangio/.test(h) && !/case-mr-1/.test(h)
  }
  if (kind === 'mri') return /mri|mrt|case-mr|mrcp/.test(h) && !/fdg-mip|nm-psma|bone-scan-wb|pet_ct|pet\/ct/.test(h)
  if (kind === 'ct') return /case-ct|tomograph|\bct\b/.test(h) && !/fdg|psma|pet|bone-scan|nm-/.test(h)
  if (kind === 'rad') return /xr-|radiograph|x-ray|xray/.test(h) && !/fdg|psma|pet|nm-/.test(h)
  if (kind === 'pet') {
    const distal = /ankle|calcane|talus|heel|\bfoot\b|toe|metatars|knee|menisc|thigh|femur|tibia/.test(f)
    if (distal && /nm-fdg-mip|nm-psma|nm-dotatate|nm-iodine/.test(h) && !/ankle|foot|knee|femur|tibia|calcane|heel/.test(h)) {
      return false
    }
    return /pet|fdg|psma|dotatate|bone-scan/.test(h)
  }
  if (kind === 'mammo') return /breast|mammo/.test(h)
  if (kind === 'cardiac') return /cardiac|sestamibi|myocard|spect/.test(h)
  if (kind === 'nm') return /nm-|bone-scan|thyroid|scint|hida|mag3|vq|spect|i-123|i123|dotatate|psma/.test(h)
  return true
}

export function teachingPlateFor(c: Pick<Encounter, 'finding' | 'stationId' | 'categoryId'> & { idx?: number }): {
  url: string
  caption: string
} {
  const url = pick(c.finding, c.stationId, c.categoryId)
  const file = url.split('/').pop() || url
  return {
    url,
    caption: `${c.finding} · teaching analogue (${file}) · not this accession's pixels`,
  }
}

export function teachingMatch(c: Encounter): LiveMatch {
  const plate = teachingPlateFor(c)
  return {
    url: plate.url,
    caption: plate.caption,
    relevance: 0.4,
    pmcid: '',
    title: plate.caption,
    authors: 'Teaching analogue',
    journal: 'NucMed Board Studio plate library',
    year: '2026',
    doi: '',
    license: 'educational analogue',
  }
}
