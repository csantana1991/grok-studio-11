/**
 * LATERALITY
 *
 * "Right knee ACL tear" matched to a left-knee figure is wrong in a way that a
 * region check cannot see. Extracted separately from both sides of the pairing
 * so it can be compared -- and left UNKNOWN rather than guessed when the text
 * does not say, because inventing a side is worse than admitting it is unstated.
 */

export type Laterality = 'RIGHT' | 'LEFT' | 'BILATERAL' | 'MIDLINE' | 'UNKNOWN'

const RIGHT = /\b(right|rt\.?|dextral)\b/i
const LEFT = /\b(left|lt\.?|sinistral)\b/i
const BILATERAL = /\b(bilateral|both\s+(?:sides|knees|lungs|kidneys|breasts)|b\/l)\b/i
const MIDLINE = /\b(midline|median|central|axial\s+skeleton)\b/i

export function lateralityOf(text: string): Laterality {
  if (BILATERAL.test(text)) return 'BILATERAL'
  const r = RIGHT.test(text)
  const l = LEFT.test(text)
  if (r && l) return 'BILATERAL'
  if (r) return 'RIGHT'
  if (l) return 'LEFT'
  if (MIDLINE.test(text)) return 'MIDLINE'
  return 'UNKNOWN'
}

/**
 * True only when the two sides are stated AND disagree. An unstated side never
 * conflicts: most figure captions omit it, and rejecting those would discard
 * nearly every usable figure.
 */
export function lateralityConflict(a: Laterality, b: Laterality): boolean {
  if (a === 'UNKNOWN' || b === 'UNKNOWN') return false
  if (a === 'BILATERAL' || b === 'BILATERAL') return false
  return a !== b
}

/** Structures where a side is meaningless, so the check should not run. */
const UNPAIRED =
  /\b(liver|spleen|pancreas|bladder|prostate|uterus|cervix|aorta|oesophagus|esophagus|stomach|rectum|heart|thyroid isthmus|spine|vertebra|sacrum|coccyx)\b/i

export function lateralityMatters(findingText: string): boolean {
  return !UNPAIRED.test(findingText)
}
