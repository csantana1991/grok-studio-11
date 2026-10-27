/**
 * One single-frame teaching image per finding.
 *
 * Each of the 366 findings has its own image file. Cases that repeat a
 * finding open that same file. A different finding never shares it.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'
import { FINDING_PLATES } from './findingPlates'

const DR = '/studio/assets/dr/'

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

const BY_FINDING: Record<string, string> = FINDING_PLATES

/** One file per finding. The same wording always opens the same frame. */
function pick(finding: string, stationId: string, categoryId: string): string {
  void stationId
  const name = BY_FINDING[finding] ?? (POOLS[plateKind(finding, categoryId)] ?? POOLS.ctBody)[0]
  return DR + name
}

/** A shared literature figure must not replace this finding's own file. */
export function plateAgrees(finding: string, categoryId: string, hay: string): boolean {
  void categoryId
  const name = BY_FINDING[finding]
  if (!name) return false
  const file = name.split('/').pop() || name
  return hay.includes(name) || hay.includes(file)
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
