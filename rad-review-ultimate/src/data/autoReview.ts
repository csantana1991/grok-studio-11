/**
 * AUTOMATIC IMAGE REVIEW
 *
 * Reviews every image the app would display and decides, so the reader
 * arbitrates instead of grading each one from scratch.
 *
 * WHAT THIS IS: a rule engine over the text signals available -- body region,
 * patient age and sex, modality, image kind, and wording shared with the
 * finding. It is deterministic and its reasons are always shown.
 *
 * WHAT THIS IS NOT: it does not look at pixels. There is no vision model here,
 * so it cannot confirm that an image labelled "breast MRI" shows a breast. Its
 * verdicts are about how well a study is DESCRIBED as matching the encounter.
 * That is why every decision stays reversible and the human verdict always wins.
 *
 * Deliberately, a poor score never blanks the frame. Only a genuine conflict
 * -- wrong body region, wrong patient population, or a non-radiological figure
 * -- rejects. Everything else ranks.
 */

import type { LiveMatch } from './liveMatch'
import type { Encounter } from './generateCases'
import { isNonRadiologic, nonRadiologicReason } from './nonRadiologic'
import { stationIdForFinding } from './anatomyMap'
import {
  ageProximity,
  captionAge,
  captionSex,
  encounterPopulation,
  populationConflict,
} from './population'

export type AutoVerdict = 'auto-approved' | 'auto-rejected' | 'needs-review'

export interface AutoReview {
  verdict: AutoVerdict
  /** 0..1 confidence in the match. */
  score: number
  reasons: string[]
  /** Age the caption states, when it states one. */
  captionAge: number | null
}

/** Above this an image is auto-approved; below the lower bound it needs a look. */
const APPROVE_AT = 0.7
const REVIEW_BELOW = 0.45

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
 * Every modality a caption names.
 *
 * A set, not a single value: hybrid imaging literature routinely captions one
 * figure "computed tomography (CT) and positron emission tomography (PET)", and
 * picking only the first match penalised a CT encounter for a figure that
 * genuinely shows it CT.
 */
function captionModalities(caption: string): Set<string> {
  const found = new Set<string>()
  if (/pet|fdg|psma|dotatate|positron emission/i.test(caption)) found.add('PET')
  if (/mri|mr|magnetic resonance/i.test(caption)) found.add('MRI')
  if (/ct|cta|ctpa|computed tomograph/i.test(caption)) found.add('CT')
  if (/ultrasound|sonograph|doppler/i.test(caption)) found.add('US')
  if (/scintigraph|spect/i.test(caption)) found.add('NM')
  if (/mammogra/i.test(caption)) found.add('MAMMO')
  if (/radiograph|x-?ray/i.test(caption)) found.add('RAD')
  return found
}

const CATEGORY_MODALITY: Record<string, string> = {
  PETHYB: 'PET',
  MRI: 'MRI',
  CT: 'CT',
  US: 'US',
  NUC: 'NM',
  MAMMO: 'MAMMO',
  RAD: 'RAD',
}

export function autoReview(match: LiveMatch, c: Encounter): AutoReview {
  const reasons: string[] = []
  const caption = match.caption ?? ''
  const cAge = captionAge(caption)

  // ---- hard rejections: a real conflict, not a weak match ----------------
  if (isNonRadiologic(caption)) {
    return {
      verdict: 'auto-rejected',
      score: 0,
      reasons: [`not a radiological image (${nonRadiologicReason(caption)})`],
      captionAge: cAge,
    }
  }

  const captionStation = stationIdForFinding(caption)
  if (captionStation && captionStation !== c.stationId) {
    // Neighbouring regions legitimately share a figure; distant ones do not.
    const adjacent = ADJACENT[c.stationId]?.includes(captionStation)
    if (!adjacent) {
      return {
        verdict: 'auto-rejected',
        score: 0,
        reasons: [`caption describes ${captionStation.replace('_', ' ')}`],
        captionAge: cAge,
      }
    }
    reasons.push('adjacent region')
  }

  const pop = encounterPopulation(c.age, c.categoryId)
  if (populationConflict(caption, pop)) {
    return {
      verdict: 'auto-rejected',
      score: 0,
      reasons: [`states ${pop === 'paediatric' ? 'an adult' : 'a paediatric'} patient`],
      captionAge: cAge,
    }
  }

  // ---- scoring: everything below only ranks -------------------------------
  let score = 0
  let weight = 0

  const regionAgrees = captionStation === c.stationId
  score += (regionAgrees ? 1 : 0.5) * 3
  weight += 3
  if (regionAgrees) reasons.push('region agrees')

  const prox = ageProximity(c.age, cAge)
  score += prox * 3
  weight += 3
  if (cAge !== null) {
    const gap = Math.abs(c.age - cAge)
    reasons.push(
      gap <= 5
        ? `age ${cAge} matches ${c.age}`
        : gap <= 15
          ? `age ${cAge} near ${c.age}`
          : `age ${cAge} vs ${c.age}`,
    )
  }

  const cSex = captionSex(caption)
  score += (cSex === null ? 0.5 : cSex === c.sex ? 1 : 0.2) * 1
  weight += 1
  if (cSex && cSex === c.sex) reasons.push(`sex ${cSex} matches`)
  else if (cSex && cSex !== c.sex) reasons.push(`sex ${cSex} vs ${c.sex}`)

  const wantMod = CATEGORY_MODALITY[c.categoryId]
  const gotMods = captionModalities(caption)
  const modStated = gotMods.size > 0
  const modAgrees = wantMod ? gotMods.has(wantMod) : false
  score += (!modStated ? 0.5 : modAgrees ? 1 : 0.25) * 2
  weight += 2
  if (modAgrees) reasons.push(`${wantMod} matches`)
  else if (modStated && wantMod) reasons.push(`${[...gotMods].join('/')} vs ${wantMod}`)

  const ft = new Set(tokens(c.finding))
  const ct = new Set(tokens(caption))
  let overlap = 0
  for (const t of ft) if (ct.has(t)) overlap++
  score += Math.min(overlap / 3, 1) * 2
  weight += 2
  if (overlap) reasons.push(`${overlap} shared term${overlap > 1 ? 's' : ''}`)

  const normalised = weight ? score / weight : 0

  /**
   * Only a genuine conflict rejects (handled above). A merely weak score is
   * flagged for review and still shown: withholding an image because no
   * exact-age, exact-sex case exists would leave most encounters blank, which
   * is worse for teaching than an imperfect but region-correct study.
   */
  const verdict: AutoVerdict =
    normalised >= APPROVE_AT ? 'auto-approved' : 'needs-review'
  if (normalised < REVIEW_BELOW) reasons.push('weak match — worth a look')

  return {
    verdict,
    score: Math.round(normalised * 100) / 100,
    reasons,
    captionAge: cAge,
  }
}

/** Regions that legitimately share one figure. */
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
