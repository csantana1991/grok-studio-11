/**
 * MODALITY CLASSIFICATION from text.
 *
 * A set, not a single value: hybrid-imaging papers routinely caption one figure
 * "computed tomography (CT) and positron emission tomography (PET)", and taking
 * only the first match penalised a CT encounter for a figure that genuinely
 * shows it CT.
 */

export type Modality = 'PET' | 'MRI' | 'CT' | 'US' | 'NM' | 'MAMMO' | 'RAD' | 'FLUORO' | 'DEXA'

const PATTERNS: [Modality, RegExp][] = [
  ['PET', /\bpet\b|\bfdg\b|\bpsma\b|\bdotatate\b|positron emission/i],
  ['MRI', /\bmri\b|\bmr\b|\bmrcp\b|magnetic resonance|\bdwi\b|\bflair\b|t1-?weighted|t2-?weighted/i],
  ['CT', /\bct\b|\bcta\b|\bctpa\b|computed tomograph/i],
  ['US', /\bultrasound\b|\bsonograph|\bdoppler\b|\becho(?:cardiograph)?\b/i],
  ['NM', /\bscintigraph|\bspect\b|\bmibg\b|\bmag3\b|\bmdp\b|bone scan|\bmaa\b|\bhida\b/i],
  ['MAMMO', /\bmammogra|\btomosynthes/i],
  ['RAD', /\bradiograph|\bx-?ray\b|\bcxr\b|\bkub\b|plain film/i],
  ['FLUORO', /\bfluoroscop|barium|\bvcug\b|\bhsg\b|\bercp\b/i],
  ['DEXA', /\bdexa\b|\bdxa\b|bone densitometry/i],
]

export function modalitiesIn(text: string): Set<Modality> {
  const out = new Set<Modality>()
  for (const [m, re] of PATTERNS) if (re.test(text)) out.add(m)
  return out
}

/** The modality a case category requires. Null where the category is agnostic. */
export const CATEGORY_MODALITY: Record<string, Modality> = {
  PETHYB: 'PET',
  MRI: 'MRI',
  CT: 'CT',
  US: 'US',
  NUC: 'NM',
  MAMMO: 'MAMMO',
  RAD: 'RAD',
}

/**
 * Modalities that may legitimately stand in for one another.
 * PET/CT figures carry the CT; a nuclear-medicine case is served by a SPECT/CT.
 * MRI and CT are NOT interchangeable -- that substitution is the exact defect
 * the spec calls out.
 */
const SUBSTITUTES: Record<string, Modality[]> = {
  PET: ['PET', 'CT'],
  NM: ['NM', 'PET'],
  CT: ['CT'],
  MRI: ['MRI'],
  US: ['US'],
  MAMMO: ['MAMMO'],
  RAD: ['RAD', 'FLUORO'],
}

/** Does a caption's modality set satisfy what the case requires? */
export function modalitySatisfies(required: Modality | null, found: Set<Modality>): boolean {
  if (!required) return true
  if (!found.size) return false
  const ok = SUBSTITUTES[required] ?? [required]
  return ok.some((m) => found.has(m))
}

/** The modality a case's own wording states, which beats its category label. */
export function requiredModality(finding: string, categoryId: string): Modality | null {
  const stated = modalitiesIn(finding)
  const fromCategory = CATEGORY_MODALITY[categoryId] ?? null
  if (fromCategory && stated.has(fromCategory)) return fromCategory
  if (stated.size === 1) return [...stated][0]
  return fromCategory
}
