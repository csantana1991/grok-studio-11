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
  mammo: ['findings/f-545a14848ba3.jpg', 'one/mammo-4.jpg'],
  ctChest: ['one/ct-chest-2.jpg', 'one/ct-chest-3.jpg'],
  ctBody: ['one/ct-body-2.jpg'],
  ctHead: ['one/mr-1.jpg'],
  us: ['case-us-1.jpg'],
  cardiac: ['one/pyp-1.jpg'],
  xrChest: ['one/xr-1.jpg'],
  xrLimb: ['one/bone-1.jpg'],
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
  xrLimb: 'Bone scan example',
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

/** Files that are not medical images. Checked by looking at the plates. */
const NOT_MEDICAL = new Set([
  'findings/f-120ebfe6476e.jpg',
  'findings/f-235ba8299238.jpg',
  'findings/f-136cc4ce7a65.jpg',
  'findings/f-0bb3755d7216.jpg',
  'findings/f-2c7a45bd3a1e.jpg',
  'findings/f-da4fefdf11a4.jpg',
  'findings/f-49174daffba2.jpg',
  'findings/f-bd8e48b069d1.jpg',
  'findings/f-980391e4595b.jpg',
  'findings/f-b1a39588fdd1.jpg',
  'findings/f-5c2d4b04274d.jpg',
  'findings/f-2bab3736a45b.jpg',
  'findings/f-d1eb6708c108.jpg',
  'findings/f-37048e089e42.jpg',
  'findings/f-4b515e5e90a8.jpg',
  'findings/f-b334ce81ac3b.jpg',
  'findings/f-e75c99f4651a.jpg',
  'findings/f-1c28b389ead9.jpg',
  'findings/f-74cce839a7cb.jpg',
  'findings/f-ad2aeb142d2f.jpg',
  'findings/f-e3ad9014135b.jpg',
  'findings/f-33a625e1c107.jpg',
  'findings/f-e480d7130c09.jpg',
  'findings/f-7b6c756c765c.jpg',
  'findings/f-c83f78263af4.jpg',
  'findings/f-8657786de02a.jpg',
  'findings/f-92d35ac8162b.jpg',
  'findings/f-54ad8f79d70c.jpg',
  'findings/f-23f4fcc9337a.jpg',
  'findings/f-3c2c6e463f64.jpg',
  'findings/f-d02571330cc6.jpg',
  'findings/f-339115396360.jpg',
  'findings/f-ed98e8a516bd.jpg',
  'findings/f-65651c108cbb.jpg',
  'findings/f-c95b43efaccf.jpg',
  'findings/f-a0c926e7c42c.jpg',
  'one/ct-chest-1.jpg',
  'findings/f-3f28baa57252.jpg',
  'findings/f-8ee477e3bf8c.jpg',
  'findings/f-a971d1510ec7.jpg',
  'findings/f-abd6f6d9eed5.jpg',
  'findings/f-78e09cef1800.jpg',
  'findings/f-a74a738347a8.jpg',
  'findings/f-f90e4505b0f5.jpg',
  'findings/f-0b9ee728f081.jpg',
  'findings/f-e80ac187643e.jpg',
  'findings/f-85b21a1988b8.jpg',
  'findings/f-d32ecf121ee9.jpg',
  'findings/f-0729bb1ed9ad.jpg',
  'findings/f-cab61ec45f84.jpg',
  'findings/f-6e4360fc2483.jpg',
  'findings/f-865242483ff5.jpg',
  'one/mammo-1.jpg',
  'one/mammo-2.jpg',
  'findings/f-4e7aeb18e430.jpg',
  'findings/f-63f4c7411469.jpg',
  'findings/f-04ac72e70e8f.jpg',
  'findings/f-afa5de7b2673.jpg',
  'findings/f-67edfc706f64.jpg',
  'findings/f-664d1b56473e.jpg',
  'findings/f-e8b1d50fc93f.jpg',
  'findings/f-00f615628a07.jpg',
  'findings/f-5db253593bfd.jpg',
  'findings/f-49e0ef95b492.jpg',
  'findings/f-16c4e1d801ce.jpg',
  'findings/f-2311b0433752.jpg',
  'findings/f-4210a4e8e26c.jpg',
  'findings/f-037c646c589d.jpg',
  'findings/f-d64201b73aba.jpg',
  'findings/f-03b08c5b5bb4.jpg',
  'findings/f-364ae9b17c81.jpg',
  'findings/f-5baf32a6af09.jpg',
  'findings/f-0db08bf86f5b.jpg',
  'findings/f-cd5ba454105f.jpg',
  'findings/f-8903885f7d22.jpg',
  'findings/f-f9043a9880c9.jpg',
  'findings/f-6a9935e2ef03.jpg',
  'findings/f-0a9028fbddff.jpg',
  'findings/f-24a019674475.jpg',
  'findings/f-47fec47b2efc.jpg',
])

/** The finding's own file when the library has a real study, otherwise the checked modality plate. */
function pick(finding: string, stationId: string, categoryId: string): string {
  void stationId
  const named = FINDING_PLATES[finding]
  if (named && !NOT_MEDICAL.has(named)) return DR + named
  const pool = POOLS[plateKind(finding, categoryId)] ?? POOLS.ctBody
  const name = pool.find((file) => !NOT_MEDICAL.has(file)) ?? 'one/ct-body-2.jpg'
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
