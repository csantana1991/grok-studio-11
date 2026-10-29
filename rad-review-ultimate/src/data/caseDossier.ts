import type { Encounter } from './generateCases'
import { CATEGORY_BY_ID } from './categories'
import { knownPlateKind, teachingPlateFor } from './teachingPlate'

/**
 * One record per encounter. Every panel should read this instead of inventing
 * its own modality, measurement, or image claim.
 *
 * The 33,000 rows are generated in the browser. This record says so.
 */

export type StudyKind =
  | 'muga'
  | 'pyp'
  | 'mpi'
  | 'pet-fdg'
  | 'pet-psma'
  | 'pet-dota'
  | 'bone'
  | 'thyroid'
  | 'vq'
  | 'hida'
  | 'renal'
  | 'ct'
  | 'mri'
  | 'us'
  | 'mammo'
  | 'radiograph'
  | 'other'

export type ImageRole = 'published-reference' | 'teaching-plate' | 'none'

export interface CaseDossier {
  id: string
  /** Always true. These rows are not verified clinical encounters. */
  synthetic: true
  kind: StudyKind
  modalityLabel: string
  tracer: string | null
  region: string
  stationId: string
  age: number
  sex: 'M' | 'F'
  stem: string
  /** Null unless this study type reports SUV and the stem states one. */
  suv: string | null
  lesionLabel: string | null
  imageRole: ImageRole
  imageNote: string
  /** A static teaching figure is one frame. It is not a 100-slice DICOM series. */
  frameCount: number
  stackLabel: string
  acgmeNote: string
  statusNote: string
}

export function studyKind(finding: string, categoryId: string): StudyKind {
  const f = finding.toLowerCase()
  if (/\bmuga\b|gated blood|equilibrium radionuclide|\berna\b/.test(f)) return 'muga'
  if (/\bpyp\b|pyrophosphate/.test(f)) return 'pyp'
  if (/parathyroid/.test(f)) return 'other'
  // MRI before perfusion words, so a stress-perfusion MRI is not called MPI.
  if (/\bmri\b|\bmra\b|mrcp|choledocholithiasis/.test(f)) return 'mri'
  if (/\becho\b/.test(f)) return 'other'
  if (
    /sestamibi|tetrofosmin|myocardial perfusion|\bmibi\b|stress pet myocardial|thallium viability/.test(
      f,
    )
  ) {
    return 'mpi'
  }
  if (/\bpsma\b/.test(f)) return 'pet-psma'
  if (/dotatate|octreotide|krenning/.test(f)) return 'pet-dota'
  if (/\bv\/?q\b|ventilation[- ]perfusion|ventilation study/.test(f)) return 'vq'
  if (/hida|hepatobiliary iminodiacetic/.test(f)) return 'hida'
  if (/mag3|dmsa|renogram|captopril/.test(f)) return 'renal'
  if (/thyroid scan|thyroid uptake|graves|pertechnetate|\bi-123\b|\bi-131\b|radioiodine/.test(f)) {
    return 'thyroid'
  }
  if (/bone scan|three-phase bone|\bmdp\b|ra-223/.test(f)) return 'bone'
  if (/leukocyte/.test(f)) return 'other'
  if (categoryId === 'MAMMO' || (/mammogram|tomosynthesis|\bbi-rads\b/.test(f) && !/\bmri\b/.test(f))) {
    return 'mammo'
  }
  if (categoryId === 'US' || (/\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f) && !/\bct\b|\bmri\b/.test(f))) {
    return 'us'
  }
  if (
    categoryId === 'RAD' ||
    /radiograph/.test(f) ||
    /bronchiolitis|steeple sign|\bcroup\b/.test(f)
  ) {
    return 'radiograph'
  }
  if (categoryId === 'CT' || /\bct\b|\bcta\b/.test(f)) return 'ct'
  if (categoryId === 'PETHYB' || /\bpet\b|\bfdg\b|\bsuv\b|deauville/.test(f)) return 'pet-fdg'
  return 'other'
}

const TRACER: Partial<Record<StudyKind, string>> = {
  muga: 'Tc-99m labeled red cells',
  pyp: 'Tc-99m PYP',
  mpi: 'Tc-99m sestamibi or tetrofosmin',
  'pet-fdg': 'F-18 FDG',
  'pet-psma': 'PSMA ligand',
  'pet-dota': 'Ga-68 DOTATATE',
  bone: 'Tc-99m MDP',
  thyroid: 'I-123 or Tc-99m pertechnetate',
  vq: 'Tc-99m MAA / Xe-133 or DTPA',
  hida: 'Tc-99m mebrofenin',
  renal: 'Tc-99m MAG3 or DMSA',
}

export function reportsSuv(kind: StudyKind): boolean {
  return kind === 'pet-fdg' || kind === 'pet-psma' || kind === 'pet-dota'
}

/** The number written in the stem. Never a second random value. */
export function statedSuv(finding: string): string | null {
  const m = finding.match(/\bSUV\s*(\d+(?:\.\d+)?)/i)
  return m ? m[1] : null
}

/** True when this file or caption is a different study from the case. */
export function conflictsWith(kind: StudyKind, blob: string): boolean {
  const h = blob.toLowerCase()
  if (!h) return false
  const pyp = /pyp|pyrophosphate/.test(h)
  const muga = /\bmuga\b|gated blood|labeled red cell|erna/.test(h)
  const pet = /\bfdg\b|\bpet\b|psma|dotatate|\bsuv\b/.test(h)
  const mpi = /sestamibi|tetrofosmin|myocardial perfusion|\bmibi\b|short axis/.test(h)
  if (pyp && kind !== 'pyp') return true
  if (muga && kind !== 'muga') return true
  if (kind === 'muga') return pyp || pet || mpi || !/muga|blood-pool|bloodpool|erna|gated/.test(h)
  if (kind === 'pyp') return muga || (pet && !pyp) || mpi || !pyp
  if (kind === 'mpi') return pyp || muga || (pet && !mpi)
  if (kind === 'pet-fdg') return pyp || muga || mpi
  if (kind === 'pet-psma') return pyp || muga || (/\bfdg\b/.test(h) && !/psma/.test(h))
  if (kind === 'pet-dota') return pyp || muga || (/\bfdg\b/.test(h) && !/dota/.test(h))
  if (kind === 'bone' || kind === 'thyroid' || kind === 'vq' || kind === 'hida' || kind === 'renal') {
    return pyp || muga
  }
  if (kind === 'ct' || kind === 'mri' || kind === 'us' || kind === 'mammo' || kind === 'radiograph') {
    return pyp || muga
  }
  return false
}

function mentions(blob: string) {
  const h = blob.toLowerCase()
  return {
    mri: /\bmri\b|\bmra\b|\bmr\b|flair|\bdwi\b/.test(h),
    ct: /\bct\b|\bcta\b|hounsfield/.test(h),
    us: /ultrasound|sonograph|duplex|doppler/.test(h),
    pet: /\bpet\b|\bfdg\b|\bsuv\b/.test(h),
    psma: /psma/.test(h),
    dota: /dotatate|dotatoc/.test(h),
    xr: /radiograph|x-ray|chest film|\bcxr\b/.test(h),
    mammo: /mammogr|tomosynthesis/.test(h),
    bone: /bone scan|scintigraph|\bmdp\b/.test(h),
    pyp: /pyp|pyrophosphate/.test(h),
    muga: /\bmuga\b|blood-pool|blood pool|erna|gated blood/.test(h),
    mpi: /sestamibi|tetrofosmin|myocardial perfusion|\bmibi\b/.test(h),
    thyroid: /thyroid|pertechnetate|\bi-123\b|\bi-131\b/.test(h),
    vq: /v\/?q|ventilation|perfusion scan|\bmaa\b/.test(h),
    hida: /hida|mebrofenin|hepatobiliary/.test(h),
    renal: /mag3|dmsa|renogram/.test(h),
  }
}

/** A published figure is eligible only when its caption names this study type. */
export function publishedFits(kind: StudyKind, blob: string): boolean {
  if (!blob.trim() || conflictsWith(kind, blob)) return false
  const m = mentions(blob)
  switch (kind) {
    case 'ct':
      return m.ct && !m.pet && !m.mri && !m.us && !m.mammo && !m.pyp && !m.muga && !m.mpi
    case 'mri':
      return m.mri && !m.pet && !m.us && !m.pyp && !m.muga
    case 'us':
      return m.us && !m.ct && !m.mri && !m.pet
    case 'mammo':
      return m.mammo && !m.mri && !m.pet
    case 'radiograph':
      return m.xr && !m.ct && !m.mri && !m.pet && !m.bone
    case 'pet-fdg':
      return (m.pet || /\bfdg\b|\bsuv\b/.test(blob.toLowerCase())) && !m.psma && !m.dota && !m.pyp && !m.muga && !m.mpi
    case 'pet-psma':
      return m.psma
    case 'pet-dota':
      return m.dota
    case 'bone':
      return m.bone && !m.pet && !m.pyp
    case 'pyp':
      return m.pyp
    case 'muga':
      return m.muga && !m.pyp && !m.mpi && !m.pet
    case 'mpi':
      return m.mpi && !m.pyp && !m.muga
    case 'thyroid':
      return m.thyroid && !m.pet
    case 'vq':
      return m.vq && !m.pet
    case 'hida':
      return m.hida && !m.pet
    case 'renal':
      return m.renal && !m.pet
    default:
      return false
  }
}

/** Local plates are allow-listed by file. A hash filename is not evidence. */
export function acceptImage(
  kind: StudyKind,
  shown?: { url?: string; caption?: string; source?: string } | null,
): boolean {
  if (!shown?.url) return false
  const local = shown.source === 'plate' || shown.url.includes('/studio/assets/')
  if (local) return knownPlateKind(shown.url) === kind
  return publishedFits(kind, `${shown.url} ${shown.caption || ''}`)
}

export interface ResolvedFigure {
  url: string
  caption: string
  source: 'openi' | 'plate'
  /** How many published figures were eligible. The plate does not count. */
  openCount: number
}

/** The only image the worklist and the viewer may share for this row. */
export function resolveCaseFigure(
  enc: Pick<Encounter, 'finding' | 'categoryId' | 'stationId' | 'idx'>,
  openi?: { url: string; caption?: string; title?: string }[] | null,
  offset = 0,
): ResolvedFigure | null {
  void openi
  void offset
  const kind = studyKind(enc.finding, enc.categoryId)
  // Published figures stay in the source and literature panes. The case frame
  // is only an allow-listed plate of the same study type.
  const plate = teachingPlateFor(enc)
  if (plate.url && knownPlateKind(plate.url) === kind) {
    return { url: plate.url, caption: plate.caption, source: 'plate', openCount: 0 }
  }
  return null
}

/** Strip age, sex, and identifiers before a query leaves the app. */
export function publicQuery(text: string): string {
  return text
    .replace(/^\d{1,3}\s*[mf]\b\s*/i, '')
    .replace(/\b(mrn|accession|ssn)\b[:\s-]*[a-z0-9-]*/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180)
}

export function buildDossier(
  enc: Encounter,
  shown?: { url?: string; caption?: string; source?: string } | null,
): CaseDossier {
  const kind = studyKind(enc.finding, enc.categoryId)
  const cat = CATEGORY_BY_ID[enc.categoryId]
  const ok = Boolean(shown?.url) && acceptImage(kind, shown)
  const published = shown?.source === 'literature' || shown?.source === 'openi'
  const imageRole: ImageRole = !ok ? 'none' : published ? 'published-reference' : 'teaching-plate'
  const imageNote = !ok
    ? 'No matched case image. Nothing on file is this study type, so it is not shown as this case.'
    : imageRole === 'published-reference'
      ? 'Published reference figure. Not this demo row’s pixels.'
      : 'Teaching plate for this study type. One static frame, not a diagnostic DICOM series.'
  const suv = reportsSuv(kind) ? statedSuv(enc.finding) : null

  return {
    id: enc.accession,
    synthetic: true,
    kind,
    modalityLabel: cat?.label ?? enc.categoryId,
    tracer: TRACER[kind] ?? null,
    region: enc.stationName,
    stationId: enc.stationId,
    age: enc.age,
    sex: enc.sex,
    stem: enc.finding,
    suv,
    lesionLabel: suv ? enc.finding : null,
    imageRole,
    imageNote,
    frameCount: ok ? 1 : 0,
    stackLabel: 'ATLAS 0–100',
    acgmeNote: `Demo code ${enc.acgme}. Not an ACGME case log entry.`,
    statusNote: `Demo status ${enc.status}. Not a signed report.`,
  }
}
