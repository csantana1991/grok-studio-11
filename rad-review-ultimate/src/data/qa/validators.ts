/**
 * INDEPENDENT VALIDATION PASSES
 *
 * The spec asks for repeated validation rather than a single evaluation. Running
 * one check ten times would prove nothing -- a deterministic rule agrees with
 * itself every time -- so these passes are independent by CONSTRUCTION: each
 * reads a different piece of evidence (caption, article title, file name, case
 * text, file bytes, recorded history) or applies a different method to the same
 * text (first-match resolution vs. clause tally vs. adversarial alternative).
 *
 * `evidence` is recorded on every result so the consensus engine can tell
 * corroboration from one field agreeing with itself.
 */

import { stationIdForFinding } from '../anatomyMap'
import { isNonRadiologic, nonRadiologicReason } from '../nonRadiologic'
import {
  ageProximity,
  captionAge,
  captionSex,
  encounterPopulation,
  populationConflict,
} from '../population'
import { lateralityConflict, lateralityMatters, lateralityOf } from './laterality'
import { modalitiesIn, modalitySatisfies, requiredModality, type Modality } from './modality'
import type { PassResult, QaContext } from './types'

/** Regions that legitimately share one figure. */
export const ADJACENT: Record<string, string[]> = {
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

/**
 * Body-part pairs that must NEVER be substituted, whatever else agrees.
 * Adjacency permits a chest figure for an upper-abdomen case; it must never
 * permit a brain figure for a knee case.
 */
export function criticalMismatch(expected: string, detected: string): boolean {
  if (expected === detected) return false
  return !(ADJACENT[expected] ?? []).includes(detected)
}

const CLAUSE = /[.;:,()]|\s+and\s+|\s+with\s+|\s+showing\s+/i

/**
 * Every station the text names, tallied by clause.
 *
 * A different method from stationIdForFinding, which returns the first rule that
 * fires anywhere in the string. A caption that mentions the knee once and the
 * brain four times is about the brain, and only a tally sees that.
 */
export function stationTally(text: string): Map<string, number> {
  const out = new Map<string, number>()
  for (const clause of text.split(CLAUSE)) {
    const s = stationIdForFinding(clause)
    if (s) out.set(s, (out.get(s) ?? 0) + 1)
  }
  return out
}

/** Anatomy words a URL path or file name carries, if any. */
export function stationFromUrl(url: string): string | null {
  const path = url.split('?')[0].split('#')[0]
  const words = path.replace(/[^A-Za-z]+/g, ' ')
  return stationIdForFinding(words)
}

const PHI =
  /\b(mrn|medical record (?:no|number)|accession (?:no|number)|date of birth|dob|patient name|social security)\b/i

const PLACEHOLDER =
  /\b(placeholder|coming soon|no image|image unavailable|sample-?image|default-?thumb)\b/i

/** Minimum useful edge for a teaching figure. Below this it cannot be read. */
export const MIN_EDGE_PX = 200
/** Below this a "figure" is almost always a spacer, icon or tracking pixel. */
export const MIN_BYTES = 2048

export function runPasses(ctx: QaContext): PassResult[] {
  const { encounter: c, match: m } = ctx
  const caption = m.caption ?? ''
  const title = m.title ?? ''
  const out: PassResult[] = []

  // ---- 1. figure kind: is this a radiological image at all? --------------
  out.push(
    isNonRadiologic(caption)
      ? {
          id: 'figure-kind',
          evidence: 'caption',
          decision: 'deny',
          reason: `not a radiological figure (${nonRadiologicReason(caption)})`,
          code: 'NOT_RADIOLOGICAL',
          veto: true,
        }
      : {
          id: 'figure-kind',
          evidence: 'caption',
          decision: 'approve',
          reason: 'reads as a radiological figure',
        },
  )

  if (PLACEHOLDER.test(caption) || PLACEHOLDER.test(m.url)) {
    out.push({
      id: 'placeholder',
      evidence: 'url',
      decision: 'deny',
      reason: 'placeholder asset',
      code: 'PLACEHOLDER_IMAGE',
      veto: true,
    })
  }

  // ---- 2. anatomy, three independent ways --------------------------------
  out.push(anatomyPass('anatomy-caption', 'caption', stationIdForFinding(caption), c.stationId))
  out.push(
    anatomyPass('anatomy-title', 'title', title ? stationIdForFinding(title) : null, c.stationId),
  )
  out.push(anatomyPass('anatomy-url', 'url', stationFromUrl(m.url), c.stationId))

  // ---- 3. adversarial: does a COMPETING region fit better? ---------------
  // Deliberately looks for evidence that the current classification is wrong,
  // rather than more evidence that it is right.
  const tally = stationTally(caption)
  const mine = tally.get(c.stationId) ?? 0
  let rival: [string, number] | null = null
  for (const [st, n] of tally) {
    if (st === c.stationId) continue
    if (!rival || n > rival[1]) rival = [st, n]
  }
  if (rival && rival[1] > mine && criticalMismatch(c.stationId, rival[0])) {
    out.push({
      id: 'adversarial-anatomy',
      evidence: 'caption',
      decision: 'deny',
      reason: `caption is mostly about ${rival[0].replace('_', ' ')} (${rival[1]} vs ${mine})`,
      code: 'WRONG_ANATOMY',
      veto: true,
    })
  } else if (mine > 0) {
    out.push({
      id: 'adversarial-anatomy',
      evidence: 'caption',
      decision: 'approve',
      reason: 'no competing region dominates the caption',
    })
  } else {
    out.push({
      id: 'adversarial-anatomy',
      evidence: 'caption',
      decision: 'abstain',
      reason: 'caption names no region',
    })
  }

  // ---- 4. modality, from caption and from title --------------------------
  const need = requiredModality(c.finding, c.categoryId)
  out.push(modalityPass('modality-caption', 'caption', need, modalitiesIn(caption)))
  out.push(modalityPass('modality-title', 'title', need, modalitiesIn(title)))

  // ---- 5. population, age, sex -------------------------------------------
  const pop = encounterPopulation(c.age, c.categoryId)
  out.push(
    populationConflict(caption, pop)
      ? {
          id: 'population',
          evidence: 'caption',
          decision: 'deny',
          reason: `figure describes ${pop === 'paediatric' ? 'an adult' : 'a paediatric'} patient`,
          code: 'WRONG_AGE_CATEGORY',
          veto: true,
        }
      : {
          id: 'population',
          evidence: 'caption',
          decision: 'approve',
          reason: `population consistent (${pop})`,
        },
  )

  const cAge = captionAge(caption)
  const prox = ageProximity(c.age, cAge)
  out.push(
    cAge === null
      ? { id: 'age', evidence: 'caption', decision: 'abstain', reason: 'caption states no age' }
      : {
          id: 'age',
          evidence: 'caption',
          decision: prox >= 0.6 ? 'approve' : 'deny',
          reason: `caption age ${cAge} vs case ${c.age}`,
          code: prox >= 0.6 ? undefined : 'WRONG_AGE_CATEGORY',
        },
  )

  const cSex = captionSex(caption)
  out.push(
    cSex === null
      ? { id: 'sex', evidence: 'caption', decision: 'abstain', reason: 'caption states no sex' }
      : {
          id: 'sex',
          evidence: 'caption',
          decision: cSex === c.sex ? 'approve' : 'deny',
          reason: `caption sex ${cSex} vs case ${c.sex}`,
          code: cSex === c.sex ? undefined : 'WRONG_SEX',
        },
  )

  // ---- 6. laterality ------------------------------------------------------
  if (lateralityMatters(c.finding)) {
    const want = lateralityOf(c.finding)
    const got = lateralityOf(caption)
    if (lateralityConflict(want, got)) {
      out.push({
        id: 'laterality',
        evidence: 'caption',
        decision: 'deny',
        reason: `case is ${want}, figure is ${got}`,
        code: 'LATERALITY_CONFLICT',
        veto: true,
      })
    } else if (want !== 'UNKNOWN' && got === want) {
      out.push({
        id: 'laterality',
        evidence: 'caption',
        decision: 'approve',
        reason: `both ${want}`,
      })
    } else {
      out.push({
        id: 'laterality',
        evidence: 'caption',
        decision: 'abstain',
        reason: 'side not stated on both sides',
      })
    }
  }

  // ---- 7. diagnosis wording ----------------------------------------------
  const shared = sharedTerms(c.finding, `${caption} ${title}`)
  out.push(
    shared.length >= 2
      ? {
          id: 'diagnosis',
          evidence: 'case',
          decision: 'approve',
          reason: `shares ${shared.slice(0, 4).join(', ')}`,
        }
      : {
          id: 'diagnosis',
          evidence: 'case',
          decision: 'abstain',
          reason: 'too little shared wording to judge the diagnosis',
        },
  )

  // ---- 8. file integrity, from the bytes ---------------------------------
  out.push(integrityPass(ctx))

  // ---- 9. privacy ---------------------------------------------------------
  out.push(
    PHI.test(caption)
      ? {
          id: 'privacy',
          evidence: 'caption',
          decision: 'deny',
          reason: 'caption mentions identifying fields',
          code: 'PHI_RISK',
          veto: true,
        }
      : {
          id: 'privacy',
          evidence: 'caption',
          decision: 'approve',
          reason: 'no identifiers in text',
        },
  )

  // ---- 10. licence --------------------------------------------------------
  out.push(
    m.license
      ? { id: 'licence', evidence: 'caption', decision: 'approve', reason: m.license }
      : {
          id: 'licence',
          evidence: 'caption',
          decision: 'abstain',
          reason: 'LICENSE_UNKNOWN',
          code: 'LICENSE_PROBLEM',
        },
  )

  // ---- 11. recorded history ----------------------------------------------
  if (ctx.humanVerdict === 'rejected') {
    out.push({
      id: 'history',
      evidence: 'history',
      decision: 'deny',
      reason: 'a reader rejected this image',
      code: 'HUMAN_REJECTED',
      veto: true,
    })
  } else if (ctx.humanVerdict === 'approved') {
    out.push({
      id: 'history',
      evidence: 'history',
      decision: 'approve',
      reason: 'a reader approved this image',
    })
  }

  // ---- 12. pixels ---------------------------------------------------------
  // Declared and permanently abstaining: no vision model is wired into this app,
  // and an approval here would be a fabricated confirmation.
  out.push({
    id: 'visual',
    evidence: 'pixels',
    decision: 'abstain',
    reason: 'no visual classifier available — image contents unverified',
  })

  return out
}

function anatomyPass(
  id: string,
  evidence: PassResult['evidence'],
  detected: string | null,
  expected: string,
): PassResult {
  if (!detected) return { id, evidence, decision: 'abstain', reason: 'no region named' }
  if (detected === expected) {
    return { id, evidence, decision: 'approve', reason: `${expected.replace('_', ' ')} agrees` }
  }
  if (!criticalMismatch(expected, detected)) {
    return {
      id,
      evidence,
      decision: 'approve',
      reason: `adjacent region (${detected.replace('_', ' ')})`,
    }
  }
  return {
    id,
    evidence,
    decision: 'deny',
    reason: `${detected.replace('_', ' ')} is not ${expected.replace('_', ' ')}`,
    code: 'WRONG_ANATOMY',
    veto: true,
  }
}

function modalityPass(
  id: string,
  evidence: PassResult['evidence'],
  need: Modality | null,
  found: Set<Modality>,
): PassResult {
  if (!need) return { id, evidence, decision: 'abstain', reason: 'case names no modality' }
  if (!found.size) return { id, evidence, decision: 'abstain', reason: 'figure names no modality' }
  if (modalitySatisfies(need, found)) {
    return { id, evidence, decision: 'approve', reason: `${need} satisfied` }
  }
  return {
    id,
    evidence,
    decision: 'deny',
    reason: `${[...found].join('/')} cannot stand in for ${need}`,
    code: 'WRONG_MODALITY',
    veto: true,
  }
}

function integrityPass(ctx: QaContext): PassResult {
  const p = ctx.probe
  if (!p) {
    return { id: 'integrity', evidence: 'file', decision: 'abstain', reason: 'not yet fetched' }
  }
  if (!p.ok) {
    return {
      id: 'integrity',
      evidence: 'file',
      decision: 'deny',
      reason: `fetch failed (${p.httpStatus ?? 'no response'})`,
      code: p.failure ?? 'BROKEN_URL',
      veto: true,
    }
  }
  if (p.contentType && !/^image\//.test(p.contentType)) {
    return {
      id: 'integrity',
      evidence: 'file',
      decision: 'deny',
      reason: `served ${p.contentType}, not an image`,
      code: 'NOT_IMAGE',
      veto: true,
    }
  }
  if (p.bytes !== null && p.bytes < MIN_BYTES) {
    return {
      id: 'integrity',
      evidence: 'file',
      decision: 'deny',
      reason: `${p.bytes} bytes is too small to be a figure`,
      code: 'CORRUPTED_FILE',
      veto: true,
    }
  }
  if (p.width !== null && p.height !== null && (p.width < MIN_EDGE_PX || p.height < MIN_EDGE_PX)) {
    return {
      id: 'integrity',
      evidence: 'file',
      decision: 'deny',
      reason: `${p.width}x${p.height} is below the readable minimum`,
      code: 'LOW_RESOLUTION',
      veto: true,
    }
  }
  return {
    id: 'integrity',
    evidence: 'file',
    decision: 'approve',
    reason: `decodes at ${p.width ?? '?'}x${p.height ?? '?'}`,
  }
}

const STOP = new Set([
  'with', 'and', 'the', 'for', 'from', 'after', 'left', 'right', 'new', 'post',
  'showing', 'shows', 'scan', 'imaging', 'image', 'images', 'study', 'complete',
  'stable', 'acute', 'chronic', 'mild', 'severe', 'focal', 'diffuse', 'disease',
  'patient', 'figure', 'representative', 'demonstrating', 'year', 'case',
])

function terms(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z\s-]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOP.has(w)),
  )
}

export function sharedTerms(a: string, b: string): string[] {
  const bt = terms(b)
  return [...terms(a)].filter((t) => bt.has(t))
}
