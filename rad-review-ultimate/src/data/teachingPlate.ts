/**
 * One single-frame teaching image per finding.
 *
 * Multi-panel boards (four MRIs in one file, three PETs side by side) are
 * never shown. Each distinct finding is given the next unused frame in its
 * own pool, so neighbouring cases do not share a picture until that pool
 * runs out. The same finding always opens on the same frame.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'
import { FINDING_POOLS } from './findings'

const DR = '/studio/assets/dr/'

/** Files that are several different pictures in one frame. Never show these. */
const COLLAGE =
  /case-mr-1\.jpg|nm-fdg-mip\.jpg|case-ct-2\.jpg|case-pet-[123]\.jpg|nm-fdg-wb\.jpg|nm-psma-wb\.jpg|nm-psma\.jpg|bone-scan-wb\.jpg|nm-bone-4view\.jpg|thyroid-scan-i123\.jpg|breast-calcs\.jpg|breast-spiculated\.jpg|case-ct-3\.jpg|nm-vq1\.jpg|nm-vq2\.jpg|nm-pyp\.jpg|nm-iodine\.jpg|nm-dotatate\.jpg|cardiac-ac\.jpg|case-xr-1\.jpg/

const POOLS: Record<string, string[]> = {
  mriBrain: ['one/mr-1.jpg', 'case-mr-3.jpg'],
  mriKnee: ['one/mr-2.jpg', 'case-mr-2.jpg'],
  mriShoulder: ['one/mr-3.jpg'],
  mriSpine: ['one/mr-4.jpg'],
  mrcp: ['mrcp-choledocholithiasis.jpg'],
  pet: [
    'one/pet-mip-1.jpg',
    'one/pet-mip-2.jpg',
    'one/pet-mip-3.jpg',
    'one/pet-ax-1.jpg',
    'one/pet-ax-2.jpg',
    'one/pet-ax-3.jpg',
    'one/pet-fuse-1.jpg',
    'one/pet-fuse-2.jpg',
    'one/pet-quad-1.jpg',
    'one/pet-quad-2.jpg',
    'one/pet-quad-3.jpg',
    'one/pet-quad-4.jpg',
    'one/fdg-pair-1.jpg',
    'one/fdg-pair-2.jpg',
  ],
  petBrain: ['nm-petmri-brain.jpg', 'one/mr-1.jpg'],
  psma: ['one/psma-pair-1.jpg', 'one/psma-pair-2.jpg', 'one/psma-1.jpg', 'one/psma-2.jpg'],
  dotatate: ['one/dota-1.jpg'],
  bone: [
    'one/bone-1.jpg',
    'one/bone-2.jpg',
    'one/bone-3.jpg',
    'one/bone-4.jpg',
    'one/bone4-1.jpg',
    'one/bone4-2.jpg',
    'one/bone4-3.jpg',
    'one/bone4-4.jpg',
  ],
  thyroid: ['one/thyroid-1.jpg', 'one/thyroid-2.jpg', 'one/thyroid-3.jpg', 'one/thyroid-4.jpg', 'one/iodine-1.jpg', 'one/iodine-2.jpg'],
  mammo: [
    'one/mammo-1.jpg',
    'one/mammo-2.jpg',
    'one/mammo-3.jpg',
    'one/mammo-4.jpg',
    'one/breast-1.jpg',
    'one/breast-2.jpg',
    'one/breast-3.jpg',
    'one/breast-4.jpg',
  ],
  ctChest: ['one/ct-chest-1.jpg', 'one/ct-chest-2.jpg', 'one/ct-chest-3.jpg', 'one/ct-body-1.jpg'],
  ctBody: ['case-ct-1.jpg', 'one/ct-body-2.jpg', 'one/ct-body-3.jpg'],
  ctHead: ['one/mr-1.jpg', 'case-mr-3.jpg'],
  us: ['case-us-1.jpg', 'case-us-2.jpg'],
  cardiac: ['one/pyp-1.jpg', 'one/pyp-2.jpg', 'one/pyp-3.jpg', 'one/pyp-4.jpg', 'one/pyp-5.jpg', 'one/pyp-6.jpg'],
  xrChest: ['xr-chest.jpg', 'gi-398.jpg', 'gi-399.jpg'],
  xrLimb: ['one/xr-1.jpg', 'one/xr-2.jpg', 'one/bone-1.jpg', 'one/bone-2.jpg'],
  hida: ['nm-hida.jpg'],
  renal: ['nm-mag3.jpg'],
  vq: ['one/vq-1.jpg', 'one/vq-2.jpg', 'one/vq-3.jpg', 'one/vq-4.jpg', 'one/vq-5.jpg', 'one/vq-6.jpg'],
}

export function plateKind(finding: string, categoryId: string): string {
  const f = finding.toLowerCase()
  const cat = categoryId.toLowerCase()
  if (/mrcp|choledocho|biliary|cholangio|bile duct/.test(f)) return 'mrcp'
  if (cat === 'mammo' || (/bi-rads|tomosynthesis|mammogram|gynaecomastia|implant/.test(f) && !/\bpet\b|\bfdg\b/.test(f))) return 'mammo'
  if (cat === 'us' || /\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f)) return 'us'
  if (cat === 'cardiac' || /cardiac mri|coronary cta|myocard|\bmuga\b|\bpyp\b|flurpiridaz|thallium viability|stress pet myocardial|\btavi\b|pericardial/.test(f)) return 'cardiac'
  if (/thyroid scan|thyroid uptake|graves disease|i-123|i-131|autonomous nodule|pertechnetate|parathyroid/.test(f)) return 'thyroid'
  if (/\bpsma\b/.test(f)) return 'psma'
  if (/dotatate|octreotide|krenning/.test(f)) return 'dotatate'
  if (/hida|hepatobiliary iminodiacetic/.test(f)) return 'hida'
  if (/mag3|dmsa|renogram|captopril/.test(f)) return 'renal'
  if (/\bv\/?q\b|ventilation study/.test(f)) return 'vq'
  if (cat === 'therapy') {
    if (/y-90|radioembol/.test(f)) return 'hida'
    if (/ra-223|osseous|bone metast|femor/.test(f)) return 'bone'
    if (/brain|hippocamp/.test(f)) return 'mriBrain'
    if (/lung|chest/.test(f)) return 'ctChest'
    return 'ctBody'
  }
  if (/bone scan|three-phase|\bmdp\b|ra-223/.test(f)) return 'bone'
  const mri = cat === 'mri' || /\bmri\b|\bmra\b/.test(f)
  const ct = !mri && (cat === 'ct' || /\bct\b|\bcta\b/.test(f))
  const rad = cat === 'rad' || /radiograph/.test(f)
  if (mri) {
    if (/knee|\bacl\b|menisc|patella/.test(f)) return 'mriKnee'
    if (/shoulder|slap|rotator|supraspinatus/.test(f)) return 'mriShoulder'
    if (/spine|lumbar|cervical|discitis|epidural|cord signal/.test(f)) return 'mriSpine'
    if (/breast/.test(f)) return 'mammo'
    if (/cardiac|myocarditis|cardiomyopathy/.test(f)) return 'cardiac'
    if (/liver|hepat|adrenal|pancrea|abdomen/.test(f)) return 'mrcp'
    if (/ankle|foot|forefoot|thigh|hip|wrist|elbow|sacroiliac/.test(f)) return 'bone'
    if (/prostate|pelvis|uterine|rectal|endometrio|fistula/.test(f)) return 'ctBody'
    return 'mriBrain'
  }
  if (ct) {
    if (/head|brain|subarachnoid|subdural|facial|temporal|sinus|ischaem|\bmca\b|stroke|odontoid/.test(f)) return 'ctHead'
    if (/chest|lung|pulmonary|\bpe\b|aort|pneumothorax|thymoma|bronch|emphysema|nodule|lymphang|miliary|covid|mediastin/.test(f)) return 'ctChest'
    if (/femur|extremity|tibial/.test(f)) return 'bone'
    return 'ctBody'
  }
  if (rad) {
    if (/chest|pneumo|pleural|pneumonia|effusion|hilar|pacemaker|\brib\b|tube|carina|kerley|silhouette|sarcoid|miliary|asbestos|nasogastric|subcutaneous|lobar|contusion/.test(f)) return 'xrChest'
    return 'xrLimb'
  }
  if (cat === 'pethyb' || cat === 'pethybrid' || /\bpet\b|\bfdg\b|deauville|\bsuv\b/.test(f)) {
    if (/brain|skull|scalp|pituitary/.test(f)) return 'petBrain'
    return 'pet'
  }
  if (cat === 'nuc' || cat === 'nuclear') return 'bone'
  return 'ctBody'
}

const BY_FINDING = new Map<string, string>()
{
  const cursor: Record<string, number> = {}
  for (const [cat, findings] of Object.entries(FINDING_POOLS)) {
    for (const finding of findings) {
      const kind = plateKind(finding, cat)
      const pool = POOLS[kind] ?? POOLS.ctBody
      const i = cursor[kind] ?? 0
      cursor[kind] = i + 1
      BY_FINDING.set(finding, pool[i % pool.length])
    }
  }
}

function pick(finding: string, stationId: string, categoryId: string): string {
  void stationId
  const name = BY_FINDING.get(finding) ?? (POOLS[plateKind(finding, categoryId)] ?? POOLS.ctBody)[0]
  return DR + name
}

/** A literature figure may lead only when it is one picture of the same kind of study. */
export function plateAgrees(finding: string, categoryId: string, hay: string): boolean {
  const h = hay.toLowerCase()
  if (COLLAGE.test(h)) return false
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
    return /mrcp|choledocho|biliary|cholangio/.test(h)
  }
  if (kind === 'mri') return /mri|mrt|case-mr|mrcp|one\/mr-/.test(h) && !/fdg-mip|nm-psma|bone-scan-wb|pet_ct|pet\/ct/.test(h)
  if (kind === 'ct') return /case-ct|ct-body|ct-chest|tomograph|\bct\b/.test(h) && !/fdg|psma|pet|bone-scan|nm-/.test(h)
  if (kind === 'rad') return /xr-|radiograph|x-ray|xray|gi-39/.test(h) && !/fdg|psma|pet|nm-/.test(h)
  if (kind === 'pet') {
    const distal = /ankle|calcane|talus|heel|\bfoot\b|toe|metatars|knee|menisc|thigh|femur|tibia/.test(f)
    if (distal && /nm-fdg-mip|nm-psma|nm-dotatate|nm-iodine/.test(h) && !/ankle|foot|knee|femur|tibia|calcane|heel/.test(h)) {
      return false
    }
    return /pet|fdg|psma|dotatate|one\/pet-|one\/fdg-/.test(h)
  }
  if (kind === 'mammo') return /breast|mammo|one\/mammo/.test(h)
  if (kind === 'cardiac') return /cardiac|sestamibi|myocard|spect|nm-pyp/.test(h)
  if (kind === 'nm') return /nm-|bone-scan|thyroid|scint|hida|mag3|vq|spect|i-123|i123|dotatate|psma|one\/bone|one\/thyroid/.test(h)
  return !COLLAGE.test(h)
}

export function teachingPlateFor(c: Pick<Encounter, 'finding' | 'stationId' | 'categoryId'> & { idx?: number }): {
  url: string
  caption: string
} {
  const url = pick(c.finding, c.stationId, c.categoryId)
  const file = url.split('/').pop() || url
  return {
    url,
    caption: `${c.finding} · one teaching image (${file})`,
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
