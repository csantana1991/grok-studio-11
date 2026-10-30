/**
 * Checked teaching image for each case.
 *
 * The image label names the picture that was reviewed. It does not repeat
 * the case diagnosis, because the old per-finding files often showed a
 * different study.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'
import type { StudyKind } from './caseDossier'
import { US_PLATES } from './us-plates'
import { nihToken } from './nihLive'
import { openiToken } from './openiLive'
import { TCIA, type TciaRow } from './tciaCatalog'

const META = '/meta-image/films/'

type Film = { src: string; shows: string }

/** Visually distinct frames. Adjacent slices of one HRCT series are not listed twice. */
const CT_CHEST: Film[] = [
  { src: META + 'ct-th-axi-10.webp', shows: 'Axial CT at the thoracic inlet' },
  { src: META + 'ct-th-axi-70.webp', shows: 'Axial HRCT through the heart' },
  { src: META + 'ct-th-axi-100.webp', shows: 'Axial HRCT at the lung bases' },
  { src: META + 'ct-th-cor-40.webp', shows: 'Coronal CT of both lungs' },
  { src: META + 'ct-lung-10.webp', shows: 'Axial lung-window CT, two cuts' },
  { src: META + 'ct-lung-11.webp', shows: 'Axial lung-window CT' },
]
const CT_ABD: Film[] = [
  { src: META + 'ct-abd-00.webp', shows: 'Axial CT of the upper abdomen, kidneys' },
  { src: META + 'ct-abd-01.webp', shows: 'Axial CT of the lower abdomen' },
  { src: META + 'ct-abd-02.webp', shows: 'Axial CT through the liver' },
]
const MRI_BRAIN: Film[] = [
  { src: META + 'mri-sag-06.webp', shows: 'Sagittal T1 MRI of the brain' },
  { src: META + 'mri-sag-11c.webp', shows: 'Sagittal MRI of the brain, marked lesion' },
  { src: META + 'mri-ax-09.webp', shows: 'Axial MRI at the skull base' },
  { src: META + 'mri-ax-11b.webp', shows: 'Axial FLAIR MRI at the lateral ventricles' },
  { src: META + 'mri-ax-11d.webp', shows: 'Axial FLAIR MRI with a left-hemisphere lesion' },
  { src: META + 'mri-ax-7l.webp', shows: 'Axial MRI of the posterior fossa' },
  { src: META + 'mri-ax-7r.webp', shows: 'Axial MRI of the posterior fossa, right' },
  { src: META + 'mri-cor-12.webp', shows: 'Coronal MR angiogram of the neck' },
  { src: META + 'mri-cor-13.webp', shows: 'Coronal MRI of the brain' },
  { src: META + 'mri-ax-09-c.webp', shows: 'Axial MRI of the brain' },
]
const PET_BODY: Film[] = [
  { src: META + 'pet-mip.webp', shows: 'Whole-body FDG PET, coronal MIP' },
  { src: META + 'pet-mip-chest.webp', shows: 'FDG PET coronal MIP, chest included' },
  { src: META + 'pet-ax.webp', shows: 'Axial fused FDG PET/CT of the chest' },
  { src: META + 'pet-p5d.webp', shows: 'Axial fused FDG PET/CT with lung uptake' },
  { src: META + 'pet-p4a.webp', shows: 'Axial CT, left upper lobe nodule outlined' },
  { src: META + 'pet-p4b.webp', shows: 'Axial CT, left lower lobe nodule outlined' },
]
const CARDIAC_MRI = [
  'https://openi.nlm.nih.gov/imgs/512/248/11060229/PMC11060229_ms9-86-3042-g002.png',
  '/studio/assets/dr/ct-396.jpg',
  'https://openi.nlm.nih.gov/imgs/512/195/8392323/PMC8392323_diagnostics-11-01388-g004.png',
  '/studio/assets/dr/cardio-394.jpg',
  'https://openi.nlm.nih.gov/imgs/512/392/5591936/PMC5591936_CMMM2017-8350680.001.png',
  'https://upload.wikimedia.org/wikipedia/commons/1/1e/Cardiac_mri_slice_sagittal_bionerd.jpg',
]
const CARDIAC_CT = [
  'https://openi.nlm.nih.gov/imgs/512/281/9164334/PMC9164334_12872_2022_2690_Fig1_HTML.png',
  '/studio/assets/dr/cardio-393.jpg',
  'https://openi.nlm.nih.gov/imgs/512/294/6032537/PMC6032537_jbsr-99-2-872-g3.png',
  '/studio/assets/dr/cardio-395.jpg',
  'https://openi.nlm.nih.gov/imgs/512/13/11881242/PMC11881242_44215_2025_200_Fig3_HTML.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Coronary_CT_Angiography_Scan.jpg/500px-Coronary_CT_Angiography_Scan.jpg',
]

const DR = '/studio/assets/dr/'

/** First file of each pool was checked by eye. The label is that picture, not the case sentence. */
const POOLS: Record<string, string[]> = {
  mriBrain: ['one/mr-1.jpg', 'case-mr-3.jpg'],
  mriKnee: ['case-mr-2.jpg', 'one/mr-2.jpg', 'one/mr-3.jpg', 'stem/mri-knee-2.jpg', 'stem/mri-knee-3.jpg'],
  mriSpine: ['one/mr-4.jpg'],
  mriBreast: ['breast-mri-malign.jpg', 'breast-mri-occult.jpg'],
  mrcp: ['mrcp-choledocholithiasis.jpg'],
  pet: ['one/pet-mip-1.jpg', 'one/pet-mip-2.jpg'],
  petBrain: ['nm-petmri-brain.jpg'],
  psma: ['one/psma-pair-1.jpg', 'nm-psma.jpg'],
  dotatate: ['one/dota-1.jpg', 'nm-dotatate.jpg'],
  bone: ['one/bone-2.jpg', 'one/bone-1.jpg', 'bone-scan-wb.jpg', 'nm-bone-4view.jpg', 'stem/bone-hmdp.jpg', 'stem/bone-wb.jpg'],
  thyroid: ['one/thyroid-1.jpg', 'thyroid-scan-i123.jpg', 'nm-iodine.jpg', 'stem/thyroid-graves.jpg'],
  mammo: ['one/mammo-3.jpg', 'one/mammo-4.jpg'],
  ctHead: ['stem/ct-subdural.jpg'],
  vq: ['one/vq-1.jpg', 'one/vq-2.jpg', 'nm-vq1.jpg', 'nm-vq2.jpg'],
  usBreast: ['breast-us-mass.jpg'],
  usGb: ['case-us-2.jpg'],
  pyp: ['one/pyp-1.jpg'],
  xrPatella: ['stem/patella-xr.jpg'],
  xrCalc: ['stem/calcaneus-xr.jpg'],
  hida: ['nm-hida.jpg'],
  renal: ['nm-mag3.jpg', 'stem/mag3.jpg', 'stem/dmsa.jpg'],
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
  cardiacCt: 'Cardiac CT example',
  ctBody: 'Abdomen CT example',
  ctHead: 'Head CT example',
  xrPatella: 'Patella radiograph example',
  xrCalc: 'Calcaneus radiograph example',
  mriBreast: 'Breast MRI example',
  usBreast: 'Breast ultrasound example',
  usGb: 'Gallbladder ultrasound example',
  us: 'Ultrasound example',
  pyp: 'PYP scan example',
  xrChest: 'Chest radiograph example',
  hida: 'HIDA scan example',
  renal: 'MAG3 renogram example',
  vq: 'V/Q scan example',
}

export function plateKind(finding: string, categoryId: string): string | null {
  const f = finding.toLowerCase()
  const cat = categoryId.toLowerCase()
  if (/\bmuga\b|gated blood|equilibrium radionuclide|\berna\b/.test(f)) return null
  if (/\bpyp\b|pyrophosphate/.test(f)) return 'pyp'
  if (/parathyroid/.test(f)) return null
  if (/\becho\b/.test(f)) return null
  if (/sestamibi|tetrofosmin|myocardial perfusion|\bmibi\b|stress pet myocardial|thallium viability/.test(f)) {
    return 'mpi'
  }
  if (/\bpsma\b/.test(f)) return 'psma'
  if (/dotatate|octreotide|krenning/.test(f)) return 'dotatate'
  if (/\bv\/?q\b|ventilation[- ]perfusion|ventilation study/.test(f)) return 'vq'
  if (/hida|hepatobiliary iminodiacetic/.test(f)) return 'hida'
  if (/mag3|dmsa|renogram|captopril/.test(f)) return 'renal'
  if (/thyroid scan|thyroid uptake|graves|pertechnetate|\bi-123\b|\bi-131\b|radioiodine/.test(f)) {
    return 'thyroid'
  }
  if (/bone scan|three-phase bone|\bmdp\b|ra-223/.test(f)) return 'bone'
  if (/leukocyte/.test(f)) return null
  if (/mrcp|choledocholithiasis/.test(f)) return 'mrcp'
  if ((cat === 'mammo' || /mammogram|tomosynthesis|\bbi-rads\b/.test(f)) && !/\bmri\b|\bultrasound\b/.test(f)) return 'mammo'
  if (cat === 'us' || (/\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f) && !/\bct\b|\bmri\b/.test(f))) {
    if (/breast/.test(f)) return 'usBreast'
    if (/gallbladder|cholecyst|\bbiliary\b|cholelith/.test(f)) return 'usGb'
    if (/obstetric|nuchal|biometry|placenta|fetal|fetus|anatomy survey/.test(f)) return 'us'
    return null
  }
  if (/steeple|\bcroup\b/.test(f)) return null
  if (
    (cat === 'rad' || cat === 'peds' || /radiograph/.test(f) || /bronchiolitis|acute chest syndrome|air bronchogram/.test(f)) &&
    !/\bct\b|\bmri\b|\bultrasound\b|\bpet\b/.test(f)
  ) {
    if (/patella|knee radiograph/.test(f)) return 'xrPatella'
    if (/calcaneus|\bos calcis\b/.test(f)) return 'xrCalc'
    if (/abdominal|elbow|ankle|wrist|foot radiograph|forefoot|pelvis radiograph|hip radiograph|skull radiograph|humerus|clavicle|scaphoid|hand radiograph|shoulder radiograph|lumbar radiograph|spine radiograph|cervical spine radiograph/.test(f)) {
      return null
    }
    if (/chest|pneumo|pneumonia|kerley|pleural|bronchiol|air bronchogram|acute chest|\bcxr\b|hilar|miliary|rib fracture|silhouette|costophrenic|subdiaphragmatic|nasogastric|pacemaker|lobar/.test(f)) {
      return 'xrChest'
    }
    return null
  }
  const mri = cat === 'mri' || /\bmri\b|\bmra\b/.test(f)
  if (mri) {
    if (/knee|\bacl\b|menisc/.test(f)) return 'mriKnee'
    if (/shoulder|slap|rotator|supraspinatus/.test(f)) return 'mriBrain'
    if (/cervical/.test(f) && !/lumbar/.test(f)) return 'mriBrain'
    if (/spine|lumbar|discitis|epidural|cord signal|stenosis|spondylol|pars/.test(f)) return 'mriSpine'
    if (/cardiac|myocarditis|cardiomyopathy|viability|amyloid|takotsubo|fabry|sarcoid|myxoma|pericarditis|arrhythmogenic|hypertrophic/.test(f)) {
      return 'cardiacMri'
    }
    if (/breast/.test(f)) return 'mriBreast'
    if (/brain|pituitary|orbit|\bms\b|demyelin|glioblastoma|schwannoma|herpes|hydrocephalus|cavernous|encephalopathy|infarct|seizure|cortical dysplasia/.test(f)) {
      return 'mriBrain'
    }
    return 'mriBrain'
  }
  const ct = !mri && (cat === 'ct' || /\bct\b|\bcta\b/.test(f))
  if (ct) {
    if (/facial|temporal|sinus|odontoid|mastoid|skull base|\bcta\b|aneurysm|circle of willis|extremity|femur|tibial|wrist|spine|prostate/.test(f)) {
      return 'ctBody'
    }
    if (/head|brain|skull|subdural|subarachnoid|\bstroke\b|\bmca\b|intracranial|convexity/.test(f)) return 'ctHead'
    if (/coronary|calcium score|tavi|pulmonary vein|atrial appendage|aortic root|prosthetic valve|pericardial calcif|myocardial bridging|pannus/.test(f)) {
      return 'cardiacCt'
    }
    if (/chest|lung|pulmonary|\bpe\b|aort|pneumothorax|thymoma|bronch|emphysema|nodule|lymphang|miliary|covid|mediastin|coronary|calcium score|tavi|pulmonary vein|atrial appendage|aortic root|prosthetic valve/.test(f)) {
      return 'ctChest'
    }
    if (/abdomen|renal|liver|pancrea|bowel|colon|appendix|divertic|spleen|adrenal|urogram|enterography|stone|viscus/.test(f)) {
      return 'ctBody'
    }
    return 'ctBody'
  }
  if (cat === 'pethyb' || /\bpet\b|\bfdg\b|deauville|\bsuv\b/.test(f)) {
    if (/brain|skull|pituitary/.test(f)) return 'petBrain'
    return 'pet'
  }
  return null
}

const FILE_KIND: [string, StudyKind][] = [
  ['/one/mr-1.jpg', 'mri'],
  ['/case-mr-3.jpg', 'mri'],
  ['/case-mr-2.jpg', 'mri'],
  ['/one/mr-2.jpg', 'mri'],
  ['/one/mr-3.jpg', 'mri'],
  ['/one/mr-4.jpg', 'mri'],
  ['/mrcp-choledocholithiasis.jpg', 'mri'],
  ['/ct-396.jpg', 'mri'],
  ['/one/pet-mip-1.jpg', 'pet-fdg'],
  ['/nm-petmri-brain.jpg', 'pet-fdg'],
  ['/one/psma-pair-1.jpg', 'pet-psma'],
  ['/one/dota-1.jpg', 'pet-dota'],
  ['/one/bone-1.jpg', 'bone'],
  ['/one/thyroid-1.jpg', 'thyroid'],
  ['/one/mammo-4.jpg', 'mammo'],
  ['/one/ct-chest-2.jpg', 'ct'],
  ['/one/ct-body-2.jpg', 'ct'],
  ['/case-us-1.jpg', 'us'],
  ['/one/pyp-1.jpg', 'pyp'],
  ['/cardiac-ac.jpg', 'mpi'],
  ['/one/xr-1.jpg', 'radiograph'],
  ['/one/xr-2.jpg', 'radiograph'],
  ['/nm-hida.jpg', 'hida'],
  ['/nm-mag3.jpg', 'renal'],
  ['/one/vq-1.jpg', 'vq'],
]

/** Kind of a checked local file, or null when the file is not an allow-listed plate. */
export function knownPlateKind(url: string): StudyKind | null {
  const u = url.toLowerCase()
  if (u.startsWith('nih:')) return 'radiograph'
  if (u.startsWith('oi:ct:')) return 'ct'
  if (u.startsWith('oi:mri:')) return 'mri'
  if (u.startsWith('oi:pet:')) return 'pet-fdg'
  if (u.includes('/meta-image/tcia/ct/')) return 'ct'
  if (u.includes('/meta-image/tcia/mri/')) return 'mri'
  if (u.includes('/meta-image/tcia/pet/')) return 'pet-fdg'
  if (u.includes('/library/nih/')) return 'radiograph'
  if (u.includes('patella-xr') || u.includes('calcaneus-xr')) return 'radiograph'
  if (u.includes('ct-subdural') || u.includes('/case-ct-')) return 'ct'
  if (u.includes('mri-knee') || u.includes('/one/mr-2') || u.includes('/one/mr-3') || u.includes('/one/mr-4') || u.includes('breast-mri')) return 'mri'
  if (u.includes('breast-us')) return 'us'
  if (u.includes('/one/pyp-') || u.includes('/nm-pyp')) return 'pyp'
  if (u.includes('/one/bone') || u.includes('bone-scan') || u.includes('/nm-bone') || u.includes('bone-hmdp') || u.includes('bone-wb')) return 'bone'
  if (u.includes('/one/vq') || u.includes('/nm-vq')) return 'vq'
  if (u.includes('/one/mammo')) return 'mammo'
  if (u.includes('/one/thyroid') || u.includes('thyroid-scan') || u.includes('thyroid-graves') || u.includes('/nm-iodine')) return 'thyroid'
  if (u.includes('/stem/mag3') || u.includes('/nm-mag3') || u.includes('dmsa')) return 'renal'
  if (u.includes('/meta-image/films/x')) return 'radiograph'
  if (u.includes('/meta-image/films/ct-')) return 'ct'
  if (u.includes('/meta-image/films/mri-')) return 'mri'
  if (u.includes('/meta-image/films/pet-')) return 'pet-fdg'
  if (u.includes('ultrasound_scan_nd') || u.includes('case-us-')) return 'us'
  if (CARDIAC_MRI.some((file) => u.includes((file.split('/').pop() || file).toLowerCase()))) return 'mri'
  if (CARDIAC_CT.some((file) => u.includes((file.split('/').pop() || file).toLowerCase()))) return 'ct'
  for (const [file, kind] of FILE_KIND) {
    if (u.endsWith(file)) return kind
  }
  return null
}

function at<T>(pool: T[], idx: number): T {
  return pool[Math.abs(idx) % pool.length]
}

function filmLine(film: Film, extra?: string): string {
  return extra ? `${film.shows}. ${extra} Not this row’s scan.` : `${film.shows}. Not this row’s scan.`
}

function tciaPool(modality: TciaRow['modality'], anatomy?: string): TciaRow[] {
  return TCIA.filter((row) => row.modality === modality && (!anatomy || row.anatomy === anatomy))
}

/** The finding's checked modality plate, or '' when no plate is this study type. */
function pick(finding: string, _stationId: string, categoryId: string, idx = 0): string {
  const key = plateKind(finding, categoryId)
  if (!key) return ''
  if (key === 'mpi') return '/studio/assets/images/cardiac-ac.jpg'
  if (key === 'cardiacMri' || key === 'mriBrain' || key === 'mriKnee' || key === 'mriSpine' || key === 'mrcp' || key === 'mriBreast') {
    return openiToken('mri', idx)
  }
  if (key === 'cardiacCt' || key === 'ctChest' || key === 'ctBody' || key === 'ctHead') return openiToken('ct', idx)
  if (key === 'xrChest') return nihToken(finding, idx)
  if (key === 'pet' || key === 'petBrain') return openiToken('pet', idx)
  if (key === 'us') {
    const pool = US_PLATES
    if (pool.length) return pool[Math.abs(idx) % pool.length]
    return ''
  }
  const pool = (POOLS[key] || []).filter((file) => !NOT_MEDICAL.has(file))
  if (!pool.length) return ''
  return DR + pool[Math.abs(idx) % pool.length]
}

export function imageLabel(c: { finding: string; categoryId: string; idx?: number }): string {
  return teachingPlateFor(c).caption || 'No matched case image'
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

/** A literature figure may replace the plate only when it is this same checked file. */
export function plateAgrees(finding: string, categoryId: string, hay: string): boolean {
  const name = pick(finding, '', categoryId)
  if (!name) return false
  const file = name.split('/').pop() || name
  return hay.includes(name) || hay.includes(file)
}

export function teachingPlateFor(c: { finding: string; categoryId: string; stationId?: string; idx?: number }): {
  url: string
  caption: string
} {
  const idx = c.idx ?? 0
  const key = plateKind(c.finding, c.categoryId)
  const url = pick(c.finding, c.stationId || '', c.categoryId, idx)
  if (!url || !key) return { url: '', caption: '' }
  if (url.startsWith('nih:')) {
    return {
      url,
      caption: 'NIH ChestX-ray14. Loading this study’s finding. Not this row’s scan.',
    }
  }
  if (url.startsWith('oi:')) {
    const kind = url.startsWith('oi:mri:') ? 'MRI' : url.startsWith('oi:pet:') ? 'PET' : 'CT'
    return { url, caption: 'Open-i ' + kind + ' figure. Loading this figure’s caption. Not this row’s scan.' }
  }
  const tcia = TCIA.find((row) => row.src === url)
  if (tcia) {
    const f = c.finding.toLowerCase()
    const headCt = (key === 'ctChest' || key === 'ctBody') && /head|brain|facial|sinus|intracran|skull/.test(f)
    const limbMri = key === 'mriKnee' || key === 'mriShoulder' || key === 'mriSpine' || key === 'mrcp'
    const extra = headCt
      ? 'No head CT is in this library. This frame is a chest CT.'
      : limbMri
        ? 'No ' + (KIND_LABEL[key] || 'this MRI').replace(' example', '').toLowerCase() + ' is in this library. This frame is a brain MRI.'
        : key === 'petBrain'
          ? 'No dedicated brain PET is in this library. This frame is whole-body FDG PET.'
          : undefined
    const line = extra ? `${tcia.shows} ${extra}` : tcia.shows
    return { url, caption: `${line} Not this row’s scan. ${tcia.license}.` }
  }
  const film = [...CT_CHEST, ...CT_ABD, ...MRI_BRAIN, ...PET_BODY].find((f) => f.src === url)
  if (film) {
    const f = c.finding.toLowerCase()
    const headCt = (key === 'ctChest' || key === 'ctBody') && /head|brain|facial|sinus|intracran|skull/.test(f)
    const limbMri = key === 'mriKnee' || key === 'mriShoulder' || key === 'mriSpine' || key === 'mrcp'
    const extra = headCt
      ? 'No head CT is in Meta Image.'
      : limbMri
        ? 'No ' + (KIND_LABEL[key] || 'this MRI').replace(' example', '').toLowerCase() + ' is in Meta Image. This frame is brain MRI.'
        : key === 'petBrain'
          ? 'No dedicated brain PET is in Meta Image. This frame is FDG PET.'
          : undefined
    return { url, caption: filmLine(film, extra) }
  }
  const named = KIND_LABEL[key] || 'Teaching image'
  return { url, caption: named + '. Not this row’s scan.' }
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
