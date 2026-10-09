/**
 * CONNECTION LOCK
 *
 * Prevents image drift. Once a case-to-image connection validates, it is written
 * down as `caseId -> imageUrl` alongside a fingerprint of what the case means.
 * On every later load the lock is returned directly instead of re-running a
 * ranking that shifts as the match corpus grows -- which is exactly how the same
 * case used to show a different figure from one session to the next.
 *
 * A lock is only honoured while:
 *   - the case's medical meaning is unchanged (fingerprint match), AND
 *   - the validation rules have not been revised (version match), AND
 *   - the locked image is still present in the candidate list.
 * Any of those failing triggers revalidation rather than silent reuse.
 */

import type { Encounter } from '../generateCases'
import type { LiveMatch } from '../liveMatch'
import { descriptionFingerprint, isUsable, selectForCase, type SelectOptions } from './engine'
import { VALIDATION_VERSION, type QaRecord, type QaStatus } from './types'

export interface LockRecord {
  caseId: string
  imageUrl: string
  descriptionFingerprint: string
  status: QaStatus
  consensus: number
  validationVersion: number
  at: number
}

export type LockTable = Map<string, LockRecord>

export function lockIsValid(lock: LockRecord | undefined, c: Encounter): boolean {
  if (!lock) return false
  if (lock.validationVersion !== VALIDATION_VERSION) return false
  return lock.descriptionFingerprint === descriptionFingerprint(c)
}

/**
 * Evaluation memo for a full sweep.
 *
 * Two encounters with the same finding, region, category, age and sex are the
 * same problem, and the engine is deterministic, so the second one cannot reach
 * a different verdict. Keyed on every field the passes actually read, so reusing
 * a result can never change one -- it only avoids re-running ~1,000 regex tests
 * per duplicate case.
 */
export type EvalMemo = Map<string, { chosen: LiveMatch | null; record: QaRecord }>

export function memoKey(c: Encounter): string {
  return `${c.finding}|${c.stationId}|${c.categoryId}|${c.age}|${c.sex}`
}

export interface ResolveResult {
  record: QaRecord
  chosen: LiveMatch | null
  /** True when the answer came from the lock rather than a fresh evaluation. */
  fromLock: boolean
  /** A lock to persist, when this resolution produced or refreshed one. */
  lock?: LockRecord
}

/**
 * The deterministic entry point: same case + same candidate list + same rules
 * gives the same image, every time, without re-searching.
 */
export function resolveConnection(
  c: Encounter,
  candidates: LiveMatch[],
  locks: LockTable,
  opts: SelectOptions & { now?: number; memo?: EvalMemo } = {},
): ResolveResult {
  const existing = locks.get(c.accession)
  if (lockIsValid(existing, c)) {
    const still = candidates.find((m) => m.url === existing!.imageUrl)
    // A reader's later rejection overrides a lock: the human verdict is final.
    const rejected = opts.humanVerdicts?.[existing!.imageUrl] === 'rejected'
    if (still && !rejected) {
      return {
        fromLock: true,
        chosen: still,
        record: {
          caseId: c.accession,
          descriptionFingerprint: existing!.descriptionFingerprint,
          imageUrl: still.url,
          status: existing!.status,
          consensus: existing!.consensus,
          expectedStation: c.stationId,
          detectedStation: null,
          expectedModality: null,
          detectedModality: null,
          visual: 'unverified',
          reasons: ['locked connection reused'],
          repairAttempted: false,
          validationVersion: existing!.validationVersion,
          at: existing!.at,
        },
      }
    }
  }

  const key = memoKey(c)
  const hit = opts.memo?.get(key)
  const result = hit
    ? { chosen: hit.chosen, record: { ...hit.record, caseId: c.accession } }
    : selectForCase(c, candidates, opts)
  if (opts.memo && !hit) {
    opts.memo.set(key, { chosen: result.chosen, record: result.record })
  }
  const at = opts.now ?? 0
  const lock =
    result.chosen && isUsable(result.record.status)
      ? {
          caseId: c.accession,
          imageUrl: result.chosen.url,
          descriptionFingerprint: result.record.descriptionFingerprint,
          status: result.record.status,
          consensus: result.record.consensus,
          validationVersion: VALIDATION_VERSION,
          at,
        }
      : undefined

  return {
    fromLock: false,
    chosen: result.chosen,
    record: { ...result.record, at },
    lock,
  }
}
