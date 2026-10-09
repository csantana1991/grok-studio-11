/**
 * SEARCH CORRECTION AND SUGGESTION.
 *
 * Public archives are unforgiving: "pancreatic adenocarcinom" returns nothing
 * from PubMed Central, and "MRI nee" returns noise. A reader typing from memory
 * should not have to spell oncology terms perfectly to find imaging.
 *
 * Three separate jobs, deliberately kept apart:
 *   correct()    fix what is almost certainly a typo, and SAY that you did
 *   suggest()    offer completions and related terms while typing
 *   broaden()    when a corrected query still returns nothing, drop the most
 *                specific term rather than giving up
 *
 * A correction is never silent. Search results that came from a different query
 * than the one typed must say so, or the reader draws conclusions about the
 * archive from a question they did not ask.
 */

import { ANATOMY_QUERIES } from '../pmcSearch'

/**
 * The vocabulary corrections are drawn from.
 *
 * Assembled from the terms this workstation already reasons about — the anatomy
 * queries behind the station map, plus the modality and pathology words the
 * matcher and the QA validators key on — so the spell checker cannot suggest a
 * word the rest of the app would not understand.
 */
const MODALITY_WORDS = [
  'radiograph', 'radiography', 'ultrasound', 'sonography', 'doppler', 'mammography',
  'tomosynthesis', 'scintigraphy', 'spect', 'pet', 'petct', 'fdg', 'psma', 'dotatate',
  'mri', 'mrcp', 'diffusion', 'perfusion', 'angiography', 'fluoroscopy', 'densitometry',
  'computed', 'tomography', 'magnetic', 'resonance', 'contrast', 'sagittal', 'coronal',
  'axial', 'anteroposterior', 'lateral',
]

const PATHOLOGY_WORDS = [
  'adenocarcinoma', 'carcinoma', 'sarcoma', 'lymphoma', 'melanoma', 'glioblastoma',
  'glioma', 'meningioma', 'metastasis', 'metastases', 'neoplasm', 'nodule', 'mass',
  'lesion', 'effusion', 'consolidation', 'pneumonia', 'pneumothorax', 'embolism',
  'thrombosis', 'aneurysm', 'dissection', 'stenosis', 'infarct', 'ischaemia', 'ischemia',
  'haemorrhage', 'hemorrhage', 'fracture', 'dislocation', 'tear', 'rupture', 'sprain',
  'arthritis', 'osteomyelitis', 'abscess', 'cyst', 'calculus', 'obstruction',
  'inflammation', 'fibrosis', 'sclerosis', 'atrophy', 'hydronephrosis', 'cirrhosis',
  'steatosis', 'pancreatitis', 'appendicitis', 'diverticulitis', 'cholecystitis',
  'endometriosis', 'adenoma', 'hyperplasia', 'dysplasia', 'necrosis', 'oedema', 'edema',
  'meniscal', 'meniscus', 'ligament', 'cruciate', 'rotator', 'labral', 'tendinopathy',
  'sarcoidosis', 'tuberculosis', 'emphysema', 'bronchiectasis', 'honeycombing',
]

const ANATOMY_WORDS = [
  'brain', 'cerebral', 'cerebellum', 'pituitary', 'orbit', 'sinus', 'skull', 'temporal',
  'thyroid', 'parotid', 'cervical', 'carotid', 'neck', 'chest', 'thorax', 'lung',
  'pulmonary', 'mediastinal', 'mediastinum', 'pleural', 'cardiac', 'aorta', 'aortic',
  'breast', 'oesophagus', 'esophagus', 'liver', 'hepatic', 'biliary', 'gallbladder',
  'pancreas', 'pancreatic', 'spleen', 'splenic', 'adrenal', 'kidney', 'renal', 'ureter',
  'bowel', 'ileal', 'colon', 'colorectal', 'rectal', 'abdomen', 'abdominal', 'pelvis',
  'pelvic', 'bladder', 'prostate', 'uterus', 'uterine', 'ovarian', 'ovary', 'inguinal',
  'femur', 'femoral', 'thigh', 'hip', 'knee', 'patella', 'tibia', 'tibial', 'fibula',
  'ankle', 'talus', 'calcaneus', 'calcaneal', 'achilles', 'plantar', 'foot', 'toe',
  'shoulder', 'humerus', 'elbow', 'wrist', 'hand', 'spine', 'lumbar', 'thoracic',
  'sacrum', 'vertebral', 'marrow', 'nodal', 'lymph',
]

function vocabulary(): Set<string> {
  const out = new Set<string>()
  for (const w of [...MODALITY_WORDS, ...PATHOLOGY_WORDS, ...ANATOMY_WORDS]) out.add(w)
  for (const queries of Object.values(ANATOMY_QUERIES)) {
    for (const q of queries) {
      for (const w of q.toLowerCase().split(/[^a-z]+/)) {
        if (w.length > 3) out.add(w)
      }
    }
  }
  return out
}

export const VOCABULARY = vocabulary()

/** Words a reader legitimately types that must never be "corrected". */
const KEEP = new Set([
  'and', 'with', 'the', 'for', 'from', 'left', 'right', 'male', 'female', 'year',
  'old', 'adult', 'child', 'infant', 'case', 'study', 'scan', 'image', 'images',
])

/**
 * Damerau-Levenshtein distance, capped.
 *
 * Transpositions are counted as one edit rather than two, because the commonest
 * real typo in these words is a swapped pair ("adenocarinoma", "raidograph") and
 * plain Levenshtein scores those the same as a genuinely different word.
 */
export function editDistance(a: string, b: string, cap = 3): number {
  if (a === b) return 0
  if (Math.abs(a.length - b.length) > cap) return cap + 1
  const prev2: number[] = []
  let prev: number[] = Array.from({ length: b.length + 1 }, (_, i) => i)
  let cur: number[] = []
  let prevRow: number[] = []

  for (let i = 1; i <= a.length; i++) {
    cur = [i]
    let best = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      let v = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, prevRow[j - 2] + 1)
      }
      cur[j] = v
      if (v < best) best = v
    }
    if (best > cap) return cap + 1
    prevRow = prev
    prev = cur
    void prev2
  }
  return prev[b.length]
}

export interface Correction {
  /** The query to actually search with. */
  query: string
  /** Word-level changes made, for the "searched for X instead" notice. */
  changes: { from: string; to: string }[]
  corrected: boolean
}

/**
 * Fix near-miss spellings against the vocabulary.
 *
 * Only words of five letters or more are touched, and only when exactly one
 * vocabulary word is close enough. Short words have too many near neighbours
 * ("cyst"/"cast"/"cost"), and an ambiguous correction is a guess — better to
 * leave the reader's word alone and let suggest() offer alternatives.
 */
export function correct(query: string): Correction {
  const changes: { from: string; to: string }[] = []
  const out = query.split(/(\s+)/).map((token) => {
    const word = token.toLowerCase()
    if (!/^[a-z]{5,}$/.test(word)) return token
    if (VOCABULARY.has(word) || KEEP.has(word)) return token

    let best: string | null = null
    let bestD = Infinity
    let ties = 0
    const budget = word.length > 8 ? 2 : 1
    for (const candidate of VOCABULARY) {
      if (Math.abs(candidate.length - word.length) > budget) continue
      const d = editDistance(word, candidate, budget)
      if (d > budget) continue
      if (d < bestD) {
        bestD = d
        best = candidate
        ties = 1
      } else if (d === bestD) ties++
    }
    if (!best || ties > 1) return token
    changes.push({ from: token, to: best })
    return best
  })

  return { query: out.join(''), changes, corrected: changes.length > 0 }
}

/**
 * Completions and related terms for what has been typed so far.
 *
 * Prefix matches first — that is what a reader half-way through a word wants —
 * then near spellings, so a typo still surfaces the intended term instead of an
 * empty list.
 */
export function suggest(fragment: string, limit = 8): string[] {
  const word = fragment.trim().toLowerCase().split(/\s+/).pop() ?? ''
  if (word.length < 2) return []
  const prefix: string[] = []
  const near: string[] = []
  for (const candidate of VOCABULARY) {
    if (candidate === word) continue
    if (candidate.startsWith(word)) prefix.push(candidate)
    else if (word.length >= 4 && editDistance(word, candidate, 2) <= 2) near.push(candidate)
  }
  const byLength = (a: string, b: string) => a.length - b.length || a.localeCompare(b)
  return [...prefix.sort(byLength), ...near.sort(byLength)].slice(0, limit)
}

/**
 * Progressively less specific versions of a query.
 *
 * When a corrected search still comes back empty the answer is usually that the
 * archive has nothing for that exact phrase, not that it has nothing relevant.
 * Dropping the least common word first keeps the clinical subject and loses the
 * qualifier, which is the order a person would try by hand.
 */
export function broaden(query: string): string[] {
  const words = query
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 2)
  if (words.length < 2) return []
  const scored = words.map((w) => ({
    w,
    // Vocabulary words are the clinical core; unknown words are usually the
    // qualifiers a reader added, so they go first.
    keep: VOCABULARY.has(w.toLowerCase()) ? 1 : 0,
  }))
  const out: string[] = []
  const remaining = [...scored]
  while (remaining.length > 1) {
    let dropAt = 0
    for (let i = 1; i < remaining.length; i++) {
      if (remaining[i].keep < remaining[dropAt].keep) dropAt = i
    }
    remaining.splice(dropAt, 1)
    out.push(remaining.map((r) => r.w).join(' '))
  }
  return out
}
