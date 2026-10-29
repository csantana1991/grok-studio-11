/**
 * Checked teaching image for each case.
 *
 * The image label names the picture that was reviewed. It does not repeat
 * the case diagnosis, because the old per-finding files often showed a
 * different study.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'
import { GRAND_TOTAL } from './categories'
import { FINDING_PLATES } from './findingPlates'

const DR = '/studio/assets/dr/'

/** First file of each pool was checked by eye. The label is that picture, not the case sentence. */
const POOLS: Record<string, string[]> = {
  mriBrain: ['one/mr-1.jpg', 'case-mr-3.jpg'],
  mriKnee: ['case-mr-2.jpg', 'one/mr-2.jpg'],
  mriShoulder: ['one/mr-3.jpg'],
  mriSpine: ['one/mr-4.jpg'],
  mrcp: ['mrcp-choledocholithiasis.jpg'],
  pet: ['one/pet-mip-1.jpg'],
  petBrain: ['nm-petmri-brain.jpg'],
  psma: ['one/psma-pair-1.jpg'],
  dotatate: ['one/dota-1.jpg'],
  bone: ['one/bone-1.jpg'],
  thyroid: ['one/thyroid-1.jpg'],
  mammo: ['one/mammo-1.jpg'],
  ctChest: ['one/ct-chest-1.jpg'],
  ctBody: ['one/ct-body-2.jpg'],
  ctHead: ['one/mr-1.jpg'],
  us: ['case-us-1.jpg'],
  cardiac: ['one/pyp-1.jpg'],
  xrChest: ['xr-chest.jpg'],
  xrLimb: ['one/xr-1.jpg'],
  hida: ['nm-hida.jpg'],
  renal: ['nm-mag3.jpg'],
  vq: ['one/vq-1.jpg'],
}

const KIND_LABEL: Record<string, string> = {
  mriBrain: 'Brain MRI example',
  mriKnee: 'Knee MRI example',
  mriShoulder: 'Shoulder MRI example',
  mriSpine: 'Lumbar spine MRI example',
  mrcp: 'MRCP example',
  pet: 'FDG PET example',
  petBrain: 'Brain PET example',
  psma: 'PSMA PET example',
  dotatate: 'DOTATATE PET example',
  bone: 'Bone scan example',
  thyroid: 'Thyroid scan example',
  mammo: 'Mammogram example',
  ctChest: 'Chest CT example',
  ctBody: 'Abdomen CT example',
  ctHead: 'Brain MRI example',
  us: 'Ultrasound example',
  cardiac: 'PYP scan example',
  xrChest: 'Chest radiograph example',
  xrLimb: 'Foot radiograph example',
  hida: 'HIDA scan example',
  renal: 'MAG3 renogram example',
  vq: 'V/Q scan example',
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

/** The finding's own file when the library has one, otherwise the checked modality plate. */
function pick(finding: string, stationId: string, categoryId: string): string {
  void stationId
  const named = FINDING_PLATES[finding]
  if (named) return DR + named
  const name = (POOLS[plateKind(finding, categoryId)] ?? POOLS.ctBody)[0]
  return DR + name
}

export function imageLabel(c: { finding: string; categoryId: string; idx?: number }): string {
  const label = KIND_LABEL[plateKind(c.finding, c.categoryId)] ?? 'Teaching image'
  const n = (c.idx ?? 0) + 1
  return `${label} · ${n.toLocaleString()} / ${GRAND_TOTAL.toLocaleString()}`
}

/** A literature figure may replace the plate only when it is this same checked file. */
export function plateAgrees(finding: string, categoryId: string, hay: string): boolean {
  const name = pick(finding, '', categoryId).slice(DR.length)
  const file = name.split('/').pop() || name
  return hay.includes(name) || hay.includes(file)
}

export function teachingPlateFor(c: Pick<Encounter, 'finding' | 'stationId' | 'categoryId'> & { idx?: number }): {
  url: string
  caption: string
} {
  const url = pick(c.finding, c.stationId, c.categoryId)
  const label = KIND_LABEL[plateKind(c.finding, c.categoryId)] ?? 'Teaching image'
  const n = (c.idx ?? 0) + 1
  const caption = `${label}. Image ${n.toLocaleString()} of ${GRAND_TOTAL.toLocaleString()}.`
  return { url, caption }
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
    tier: 'anatomy',
  }
}
