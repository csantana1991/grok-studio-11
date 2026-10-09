/**
 * MATCH VERIFICATION
 *
 * A matched figure is only useful if it actually depicts what the encounter
 * describes. This runs the same anatomy map over the FIGURE CAPTION that the
 * generator runs over the finding: if the caption resolves to a different body
 * region than the encounter's station, the figure is showing the wrong part of
 * the body and must be rejected -- the exact failure the Slice 095 fix exists
 * to prevent, arriving this time through the literature instead of the atlas.
 *
 * Verdicts:
 *   confirmed  caption agrees on region AND shares wording with the finding
 *   plausible  no conflict, but weak textual support
 *   mismatch   caption names a different body region -- do not display by default
 */

import { stationIdForFinding } from './anatomyMap'
import { isNonRadiologic, nonRadiologicReason } from './nonRadiologic'
import { populationConflict, type Population } from './population'
import { captionFitsFinding } from './findingCaption'

export type Verdict = 'confirmed' | 'plausible' | 'mismatch'

/**
 * Figure types that are not cross-sectional radiology. A caption naming the
 * right body region is not enough: an arthroscopic photograph of a meniscal
 * tear, a histology slide or a Kaplan-Meier plot all describe the correct
 * anatomy while being the wrong KIND of image for a head-to-toe imaging
 * viewer. Observed directly - a knee MRI encounter rendered an arthroscopy
 * photo labelled fc / mm / tp.
 */
// Non-radiological figure detection lives in its own tested module.

export interface Verification {
  verdict: Verdict
  score: number
  /** Short human-readable reasons, shown in the UI. */
  reasons: string[]
  captionStation: string | null
}

const STOP = new Set([
  'with', 'and', 'the', 'for', 'from', 'after', 'left', 'right', 'new', 'post',
  'showing', 'shows', 'scan', 'imaging', 'image', 'study', 'complete', 'stable',
  'acute', 'chronic', 'mild', 'severe', 'focal', 'diffuse', 'disease', 'patient',
])

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP.has(w))
}

/**
 * Regions that legitimately co-occur in one figure, so a caption naming one
 * while the encounter sits at the other is not a genuine conflict.
 */
const ADJACENT: Record<string, string[]> = {
  VERTEX: ['SKULL_BASE'],
  SKULL_BASE: ['VERTEX', 'NECK'],
  NECK: ['SKULL_BASE', 'CHEST'],
  CHEST: ['NECK', 'UPPER_ABDOMEN'],
  UPPER_ABDOMEN: ['CHEST', 'MID_ABDOMEN'],
  MID_ABDOMEN: ['UPPER_ABDOMEN', 'PELVIS'],
  PELVIS: ['MID_ABDOMEN', 'THIGH'],
  THIGH: ['PELVIS', 'KNEE'],
  KNEE: ['THIGH', 'ANKLE'],
  ANKLE: ['KNEE', 'TOES'],
  TOES: ['ANKLE'],
}

export function verifyMatch(
  caption: string,
  finding: string,
  stationId: string,
  /** Encounter population; a stated conflict rejects the figure. */
  population?: Population,
): Verification {
  const reasons: string[] = []
  const captionStation = stationIdForFinding(caption)

  // Wrong kind of image beats right region: reject before any region logic.
  if (isNonRadiologic(caption)) {
    const kind = nonRadiologicReason(caption) ?? 'non-radiological'
    reasons.push(`not a radiological image (${kind})`)
    return { verdict: 'mismatch', score: 0, reasons, captionStation }
  }

  if (!captionFitsFinding(finding, caption)) {
    reasons.push('caption is not this diagnosis')
    return { verdict: 'mismatch', score: 0, reasons, captionStation }
  }

  // Wrong patient population beats right region: a paediatric encounter must
  // not be illustrated with an adult study, or vice versa.
  if (population && populationConflict(caption, population)) {
    reasons.push(
      `caption describes an ${population === 'paediatric' ? 'adult' : 'a paediatric'} patient`,
    )
    return { verdict: 'mismatch', score: 0, reasons, captionStation }
  }

  // Shared wording between the finding and the caption.
  const fTokens = new Set(tokens(finding))
  const cTokens = new Set(tokens(caption))
  let overlap = 0
  for (const t of fTokens) if (cTokens.has(t)) overlap++

  if (captionStation && captionStation !== stationId) {
    const adjacent = ADJACENT[stationId]?.includes(captionStation)
    if (!adjacent) {
      reasons.push(`caption describes ${captionStation.replace('_', ' ')}`)
      return { verdict: 'mismatch', score: 0, reasons, captionStation }
    }
    reasons.push('adjacent region')
  }

  if (captionStation === stationId) reasons.push('region agrees')
  if (overlap >= 2) reasons.push(`${overlap} shared terms`)
  else if (overlap === 1) reasons.push('1 shared term')

  const score = (captionStation === stationId ? 2 : 0) + Math.min(overlap, 3)

  // Region agreement is the strongest available signal for an anatomy viewer:
  // a caption that independently names this station is depicting this station,
  // even when it shares no wording with the finding ("calcaneal" vs "calcaneus"
  // are the same structure but not the same token). Shared wording alone also
  // confirms, since two clinical phrases rarely overlap twice by chance.
  if (captionStation === stationId || overlap >= 2) {
    return { verdict: 'confirmed', score, reasons, captionStation }
  }
  if (score < 1) reasons.push('no textual support')
  return { verdict: 'plausible', score, reasons, captionStation }
}

/**
 * Order a finding's matched figures best-first and drop region mismatches.
 * Returns every candidate so the reader can still cycle through them manually.
 */
export function rankMatches<T extends { caption: string }>(
  matches: T[],
  finding: string,
  stationId: string,
  population?: Population,
): { match: T; verification: Verification }[] {
  return matches
    .map((m) => ({
      match: m,
      verification: verifyMatch(m.caption, finding, stationId, population),
    }))
    .sort((a, b) => {
      const rank = (v: Verdict) => (v === 'confirmed' ? 0 : v === 'plausible' ? 1 : 2)
      return (
        rank(a.verification.verdict) - rank(b.verification.verdict) ||
        b.verification.score - a.verification.score
      )
    })
}
