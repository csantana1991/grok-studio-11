/**
 * AUTONOMOUS IMAGE QA — shared contract.
 *
 * WHAT THIS SUBSYSTEM DOES: it validates every case-to-image connection with
 * several genuinely independent checks, reaches a consensus, repairs or replaces
 * what fails, and locks what passes so the same case returns the same image
 * every time. The reader is left with the exceptions.
 *
 * WHAT IT HONESTLY CANNOT DO: there is no vision model wired into this app, so
 * nothing here inspects pixels. Every check reads text -- the caption, the
 * article title, the file name, the case wording -- or the bytes of the file
 * (does it decode, how large is it). Anatomy is therefore "the caption says
 * knee", never "the image shows femoral condyles". `visual` stays
 * `unverified` and no status ever claims otherwise. The visual pass is a
 * declared, pluggable seam (see VisualClassifier) so a classifier can be added
 * without reworking the engine.
 */

import type { LiveMatch } from '../liveMatch'
import type { Encounter } from '../generateCases'

export type QaStatus =
  | 'APPROVED'
  | 'APPROVED_WITH_WARNING'
  | 'AUTO_REPAIRED'
  | 'REPLACED'
  | 'QUARANTINED'
  | 'REJECTED'
  | 'SOURCE_UNAVAILABLE'
  | 'NEEDS_HUMAN_REVIEW'

/** Machine-readable reason codes. Every denial carries one. */
export type ReasonCode =
  | 'BROKEN_URL'
  | 'NOT_IMAGE'
  | 'CORRUPTED_FILE'
  | 'WRONG_MODALITY'
  | 'WRONG_ANATOMY'
  | 'WRONG_DIAGNOSIS'
  | 'WRONG_AGE_CATEGORY'
  | 'WRONG_SEX'
  | 'LATERALITY_CONFLICT'
  | 'LOW_RESOLUTION'
  | 'DUPLICATE'
  | 'PHI_RISK'
  | 'LICENSE_PROBLEM'
  | 'SOURCE_UNAVAILABLE'
  | 'AUTH_REQUIRED'
  | 'API_FAILURE'
  | 'IRRELEVANT_RESULT'
  | 'PLACEHOLDER_IMAGE'
  | 'THUMBNAIL_ONLY'
  | 'RENDER_FAILURE'
  | 'METADATA_MISMATCH'
  | 'CONFIDENCE_TOO_LOW'
  | 'NOT_RADIOLOGICAL'
  | 'HUMAN_REJECTED'
  | 'OTHER'

export type PassDecision = 'approve' | 'deny' | 'abstain'

export interface PassResult {
  /** Stable id of the check. */
  id: string
  /** Which evidence this check read, so two passes over the same field are not
   *  mistaken for independent confirmation. */
  evidence: 'caption' | 'title' | 'url' | 'case' | 'file' | 'history' | 'pixels'
  decision: PassDecision
  reason: string
  code?: ReasonCode
  /** A veto pass denies decisively: no amount of agreement elsewhere overrides
   *  a wrong body part. */
  veto?: boolean
}

/** Result of actually fetching the bytes. Absent when never probed. */
export interface ProbeResult {
  url: string
  ok: boolean
  httpStatus: number | null
  contentType: string | null
  bytes: number | null
  width: number | null
  height: number | null
  /** Set when the response was HTML, an auth page, or otherwise not an image. */
  failure?: ReasonCode
  at: number
}

/** Seam for a future pixel-level classifier. Nothing implements it today. */
export interface VisualClassifier {
  classify(url: string): Promise<{
    modality: string | null
    stationId: string | null
    confidence: number
  } | null>
}

export interface ConsensusResult {
  passes: PassResult[]
  /** approve / (approve + deny), over passes that actually decided. */
  consensus: number
  approvals: number
  denials: number
  abstentions: number
  /** Distinct evidence sources that approved -- one field agreeing with itself
   *  is not corroboration. */
  independentApprovals: number
}

export interface QaRecord {
  caseId: string
  descriptionFingerprint: string
  imageUrl: string | null
  status: QaStatus
  code?: ReasonCode
  consensus: number
  /** Text-derived, never pixel-derived. */
  expectedStation: string
  detectedStation: string | null
  expectedModality: string | null
  detectedModality: string | null
  visual: 'unverified'
  reasons: string[]
  repairAttempted: boolean
  repairResult?: string
  replacedFrom?: string | null
  validationVersion: number
  at: number
}

export interface QaContext {
  encounter: Encounter
  match: LiveMatch
  probe?: ProbeResult
  /** Human verdicts already recorded, keyed by url. */
  humanVerdict?: 'approved' | 'rejected'
  /** urls already locked to a different case, for duplicate detection. */
  lockedElsewhere?: string | null
}

/** Bumped whenever a validation rule changes, to invalidate stale locks. */
export const VALIDATION_VERSION = 3
