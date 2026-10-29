/**
 * NUCLEUS BOARD ACADEMY — case-library ingestion.
 *
 * The Nucleus residency study explorer holds ~33,000 audited studies with real
 * labelled slice series and dataset provenance. Its own site sits behind an
 * OpenAI login, so it cannot be fetched: instead it exports a case list, which
 * this module loads and matches against RAD Review encounters.
 *
 * Drop the export at  public/nucleus-export.json.
 *
 * The reader is tolerant of shape, because an export format written by another
 * tool should not have to match this one exactly. Accepted per study:
 *
 *   study | title | description        -> title
 *   modality | allocation              -> modality code (NM, CT, MR, PT, MG...)
 *   region | bodyRegion | body_region  -> body region
 *   collection | database              -> source collection name
 *   caseType | case_type               -> e.g. "Source-label case"
 *   images: string[]  OR  { label?, url }[]
 *   source | provenance | citation     -> attribution line
 *   license | licence                  -> licence text
 *   sourceUrl | url | link             -> link to the original collection
 *
 * Nothing here reinterprets a study. Dataset labels are acquisition metadata,
 * not diagnoses, and are surfaced as-is.
 */

import { stationIdForFinding } from './anatomyMap'

export interface NucleusImage {
  label: string
  url: string
}

export interface NucleusOption {
  letter: string
  text: string
}

/**
 * Board item carried by the export. RAD Review never authors these: inventing
 * a question and an answer key would be authoring clinical teaching content
 * with no source behind it. If the export has no item, the case shows the
 * read-first structure and the study metadata instead.
 */
export interface NucleusBoardItem {
  question: string
  options: NucleusOption[]
  /** Correct option letter, if the export supplies one. */
  answer?: string
  explanation?: string
}

export interface NucleusStudy {
  id: string
  title: string
  modality: string
  region: string
  collection: string
  caseType: string
  images: NucleusImage[]
  source: string
  license: string
  sourceUrl: string
  /** RAD Review station this study belongs to, derived on load. */
  stationId: string | null
  /** RAD Review category id this modality maps to, derived on load. */
  categoryId: string | null
  /** Optional teaching extras carried by the export. */
  teachingState: string
  readFirst: string
  skills: string[]
  board?: NucleusBoardItem
  /**
   * True for records the catalogue itself marks as authored simulations —
   * schematic diagrams, not acquired imaging. They stay in the explorer, where
   * their provenance is displayed, but are kept out of the head-to-toe viewer:
   * a synthetic figure must never sit in the diagnostic frame as a case image.
   */
  synthetic: boolean
  /** Lowercased haystack for matching. */
  search: string
}

/** Catalogue markers for an authored (non-acquired) record. */
const SYNTHETIC = /authored simulation|simulation|simulated|schematic/i

/** Nucleus modality allocation -> RAD Review category id. */
const MODALITY_TO_CATEGORY: [RegExp, string][] = [
  [/\b(nm|spect|scinti\w*|nuclear)\b/i, 'NUC'],
  [/\b(pt|pet|pet\/ct|hybrid)\b/i, 'PETHYB'],
  [/\b(mg|mammo\w*)\b/i, 'MAMMO'],
  [/\b(mr|mri)\b/i, 'MRI'],
  [/\bct\b/i, 'CT'],
  [/\b(us|ultrasound|sono\w*)\b/i, 'US'],
  [/\b(dr|cr|xr|x-?ray|radiograph\w*|fluoro\w*)\b/i, 'RAD'],
  [/\b(rt|radiotherapy|therapy|dosimetry)\b/i, 'THERAPY'],
  [/\b(peds|paediatric|pediatric)\b/i, 'PEDS'],
  [/\bcardiac\b/i, 'CARDIAC'],
]

/** Nucleus body region -> RAD Review station id. */
const REGION_TO_STATION: [RegExp, string][] = [
  [/\b(toe|forefoot|metatars\w*|phalan\w*)\b/i, 'TOES'],
  [/\b(ankle|foot|calcaneus|talus|hindfoot)\b/i, 'ANKLE'],
  [/\b(knee|patella|menisc\w*|tibia)\b/i, 'KNEE'],
  [/\b(thigh|femur|femoral|quadriceps)\b/i, 'THIGH'],
  [/\b(pelvis|pelvic|prostate|bladder|uter\w*|ovar\w*|hip|rectum)\b/i, 'PELVIS'],
  [/\b(bowel|colon|small bowel|mesenter\w*|appendix)\b/i, 'MID_ABDOMEN'],
  [/\b(abdomen|abdominal|liver|hepat\w*|kidney|renal|spleen|pancrea\w*)\b/i, 'UPPER_ABDOMEN'],
  [/\b(heart|cardiac|chest|thorax|thoracic|lung|breast|mediastin\w*)\b/i, 'CHEST'],
  [/\b(neck|thyroid|cervical|larynx|parotid)\b/i, 'NECK'],
  [/\b(skull base|sella|pituitary|orbit|sinus|temporal bone)\b/i, 'SKULL_BASE'],
  [/\b(brain|head|cerebral|cranial|intracranial)\b/i, 'VERTEX'],
]

function pick(o: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = o[k]
    if (typeof v === 'string' && v.trim()) return v.trim()
  }
  return ''
}

function normaliseStrings(raw: unknown): string[] {
  if (!Array.isArray(raw)) return []
  return raw.filter((x): x is string => typeof x === 'string' && x.trim().length > 0)
}

function normaliseBoard(raw: unknown): NucleusBoardItem | undefined {
  if (!raw || typeof raw !== 'object') return undefined
  const o = raw as Record<string, unknown>
  const question = pick(o, 'question', 'stem', 'prompt')
  if (!question) return undefined

  const rawOpts = o.options ?? o.choices ?? o.answers
  const options: NucleusOption[] = []
  if (Array.isArray(rawOpts)) {
    rawOpts.forEach((opt, i) => {
      const letter = String.fromCharCode(65 + i)
      if (typeof opt === 'string') options.push({ letter, text: opt })
      else if (opt && typeof opt === 'object') {
        const oo = opt as Record<string, unknown>
        const text = pick(oo, 'text', 'label', 'value', 'option')
        if (text) options.push({ letter: pick(oo, 'letter', 'key') || letter, text })
      }
    })
  }
  if (!options.length) return undefined

  return {
    question,
    options,
    answer: pick(o, 'answer', 'correct', 'correctAnswer') || undefined,
    explanation: pick(o, 'explanation', 'rationale', 'teaching') || undefined,
  }
}

function normaliseImages(raw: unknown): NucleusImage[] {
  if (!Array.isArray(raw)) return []
  const out: NucleusImage[] = []
  raw.forEach((entry, i) => {
    if (typeof entry === 'string') {
      out.push({ label: `SLICE ${i + 1}`, url: entry })
      return
    }
    if (entry && typeof entry === 'object') {
      const o = entry as Record<string, unknown>
      const url = pick(o, 'url', 'src', 'href', 'image')
      if (!url) return
      out.push({ label: pick(o, 'label', 'name', 'slice') || `SLICE ${i + 1}`, url })
    }
  })
  return out
}

function categoryFor(modality: string, title: string): string | null {
  const hay = `${modality} ${title}`
  for (const [re, id] of MODALITY_TO_CATEGORY) if (re.test(hay)) return id
  return null
}

function stationFor(region: string, title: string): string | null {
  for (const [re, id] of REGION_TO_STATION) if (re.test(region)) return id
  // Fall back to the same anatomy resolver the encounters use.
  return stationIdForFinding(`${region} ${title}`)
}

/** Normalise one raw export record. Returns null if it carries no images. */
export function normaliseStudy(raw: unknown, index: number): NucleusStudy | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>

  const images = normaliseImages(o.images ?? o.slices ?? o.frames)
  if (!images.length) return null

  const title = pick(o, 'study', 'title', 'description', 'name')
  const modality = pick(o, 'modality', 'allocation', 'modalityAllocation')
  const region = pick(o, 'region', 'bodyRegion', 'body_region', 'anatomy')
  const collection = pick(o, 'collection', 'database', 'dataset')
  const caseType = pick(o, 'caseType', 'case_type', 'type')

  return {
    id: pick(o, 'id', 'caseId', 'uid') || `nucleus-${index}`,
    title,
    modality,
    region,
    collection,
    caseType,
    images,
    source: pick(o, 'source', 'provenance', 'citation', 'attribution'),
    license: pick(o, 'license', 'licence', 'rights'),
    sourceUrl: pick(o, 'sourceUrl', 'url', 'link', 'source_url'),
    teachingState: pick(o, 'teachingState', 'teaching_state', 'state'),
    readFirst: pick(o, 'readFirst', 'read_first', 'guidance'),
    skills: normaliseStrings(o.skills ?? o.objectives ?? o.competencies),
    board: normaliseBoard(o.board ?? o.question ?? o.boardItem),
    synthetic:
      SYNTHETIC.test(`${pick(o, 'source', 'provenance', 'citation', 'attribution')} ${title}`) ||
      modality.toUpperCase() === 'SIM',
    stationId: stationFor(region, title),
    categoryId: categoryFor(modality, title),
    search: `${title} ${modality} ${region} ${collection}`.toLowerCase(),
  }
}

export interface NucleusLibrary {
  studies: NucleusStudy[]
  byStation: Map<string, NucleusStudy[]>
  loaded: boolean
  error?: string
}

export const EMPTY_LIBRARY: NucleusLibrary = {
  studies: [],
  byStation: new Map(),
  loaded: false,
}

export function buildLibrary(raw: unknown[]): NucleusLibrary {
  const studies = raw
    .map((r, i) => normaliseStudy(r, i))
    .filter((s): s is NucleusStudy => s !== null)

  const byStation = new Map<string, NucleusStudy[]>()
  for (const s of studies) {
    if (!s.stationId) continue
    const bucket = byStation.get(s.stationId)
    if (bucket) bucket.push(s)
    else byStation.set(s.stationId, [s])
  }
  return { studies, byStation, loaded: true }
}

/** A cardiac SPECT is not a teaching image for a mammogram, even at the same station. */
const COMPATIBLE_CATEGORY: Record<string, string[]> = {
  PEDS: ['RAD', 'CT', 'MRI', 'US', 'NUC', 'PETHYB'],
  QREADY: ['RAD', 'CT', 'MRI', 'US', 'NUC', 'PETHYB', 'MAMMO', 'CARDIAC'],
  CARDIAC: ['NUC', 'PETHYB', 'CT', 'MRI'],
  NUC: ['CARDIAC', 'PETHYB', 'THERAPY'],
  THERAPY: ['NUC', 'PETHYB'],
  PETHYB: ['NUC', 'CT'],
}

function categoriesCompatible(encounter: string, study: string): boolean {
  if (encounter === study) return true
  return (
    (COMPATIBLE_CATEGORY[encounter] ?? []).includes(study) ||
    (COMPATIBLE_CATEGORY[study] ?? []).includes(encounter)
  )
}

/**
 * Score a study against an encounter. Station agreement is required -- a study
 * of the wrong body region is never a match, for the same reason a brain figure
 * is never shown for an ankle case. Modality agreement and shared wording rank
 * the survivors.
 */
export function scoreStudy(
  study: NucleusStudy,
  finding: string,
  stationId: string,
  categoryId: string,
  /** Encounter age, used to keep paediatric cases on paediatric studies. */
  age?: number,
): number {
  if (study.stationId !== stationId) return -1
  if (
    study.categoryId &&
    categoryId &&
    !categoriesCompatible(categoryId, study.categoryId)
  ) {
    return -1
  }
  let score = 2

  // Exact modality agreement is the strongest signal.
  if (study.categoryId === categoryId) score += 4
  // Different named modalities at the same station is a weak match: a cardiac
  // SPECT and a paediatric chest radiograph are both CHEST, and only one of
  // them belongs on a bronchiolitis case.
  else if (study.categoryId && categoryId) score -= 2

  // Keep paediatric encounters on paediatric collections and vice versa.
  const studyIsPaediatric = /\b(paediatric|pediatric|child|infant|neonat)\w*/i.test(
    `${study.region} ${study.collection} ${study.title}`,
  )
  if (age !== undefined) {
    const encounterIsPaediatric = age <= 17 || categoryId === 'PEDS'
    if (studyIsPaediatric === encounterIsPaediatric) score += 3
    else score -= 3
  }

  const terms = finding
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 4)
  for (const t of terms) if (study.search.includes(t)) score += 1
  return score
}

/** Best matching studies for an encounter, best first. */
export function matchStudies(
  lib: NucleusLibrary,
  finding: string,
  stationId: string,
  categoryId: string,
  limit = 6,
  age?: number,
): NucleusStudy[] {
  // Authored simulations are excluded here on purpose: this feed drives the
  // head-to-toe viewer. They remain browsable in the Nucleus explorer.
  const pool = (lib.byStation.get(stationId) ?? []).filter((s) => !s.synthetic)
  return pool
    .map((s) => ({ s, score: scoreStudy(s, finding, stationId, categoryId, age) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.s)
}

/**
 * The export names 7,393 catalogue files that are not packed on this site.
 * Until a file answers, show a real local plate of the same study type.
 */
export function localTeachingPlate(study: {
  title?: string
  modality?: string
  collection?: string
  region?: string
}): string {
  const hay = `${study.collection || ''} ${study.modality || ''} ${study.region || ''} ${study.title || ''}`
  if (/mibi|myocard|perfusion|cardiac|heart/i.test(hay)) return '/studio/assets/images/cardiac-ac.jpg'
  if (/thyroid|i-131|iodine/i.test(hay)) return '/studio/assets/images/thyroid-scan-i123.jpg'
  if (/bone/i.test(hay)) return '/studio/assets/images/bone-scan-wb.jpg'
  if (/breast|ultrasound/i.test(hay)) return '/studio/assets/images/case-us-1.jpg'
  if (/dotatate|psma|lu-177|y-90|ra-223/i.test(hay)) return '/studio/assets/images/rai-therapy.jpg'
  if (/chest|pediatr|radiograph|\bdx\b|x-ray|xray/i.test(hay)) return '/studio/assets/images/xr-chest.jpg'
  return '/studio/assets/images/gamma-camera-patient.jpg'
}
