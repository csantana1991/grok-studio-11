/**
 * CONSENSUS ENGINE AND AUTONOMOUS SELECTION
 *
 * Runs the independent passes over a proposed case-to-image connection, decides
 * automatically, and — when a candidate fails — moves down the candidate list
 * rather than handing the problem to the reader. Only what cannot be resolved
 * this way becomes NEEDS_HUMAN_REVIEW.
 *
 * ON "100% CONSENSUS": it means every configured check that was able to decide
 * agreed, corroborated across at least MIN_INDEPENDENT different pieces of
 * evidence. It does NOT mean the image has been visually confirmed — no pass
 * reads pixels (see validators.ts), and `visual` stays `unverified` on every
 * record. Abstentions are counted and reported, never silently treated as
 * agreement.
 */

import type { Encounter } from '../generateCases'
import type { LiveMatch } from '../liveMatch'
import { stationIdForFinding } from '../anatomyMap'
import { modalitiesIn, requiredModality } from './modality'
import { runPasses } from './validators'
import {
  VALIDATION_VERSION,
  type ConsensusResult,
  type PassResult,
  type ProbeResult,
  type QaContext,
  type QaRecord,
  type QaStatus,
  type ReasonCode,
} from './types'

/**
 * How many DIFFERENT kinds of evidence must approve before a connection locks.
 * One field agreeing with itself is not corroboration, so this counts distinct
 * evidence sources (caption, title, url, case text, file bytes, history), not
 * the number of passes.
 */
export const MIN_INDEPENDENT = 3
/**
 * The floor below which nothing is auto-usable. Between this and
 * MIN_INDEPENDENT a connection is still accepted, as APPROVED_WITH_WARNING:
 * requiring three kinds of evidence where only two EXIST would measure how
 * richly a publisher captioned its figure, not whether the image fits the case,
 * and would push thousands of sound matches at the reader for no gain.
 */
export const MIN_INDEPENDENT_WARN = 2

export function consensusOf(passes: PassResult[]): ConsensusResult {
  let approvals = 0
  let denials = 0
  let abstentions = 0
  const evidence = new Set<string>()
  for (const p of passes) {
    if (p.decision === 'approve') {
      approvals++
      evidence.add(p.evidence)
    } else if (p.decision === 'deny') denials++
    else abstentions++
  }
  const decided = approvals + denials
  return {
    passes,
    consensus: decided ? approvals / decided : 0,
    approvals,
    denials,
    abstentions,
    independentApprovals: evidence.size,
  }
}

export interface Evaluation {
  status: QaStatus
  code?: ReasonCode
  consensus: ConsensusResult
  reasons: string[]
}

/** Decide one proposed connection. Pure, deterministic, no side effects. */
export function evaluate(ctx: QaContext): Evaluation {
  const passes = runPasses(ctx)
  const c = consensusOf(passes)

  // A veto denial is decisive: no amount of agreement elsewhere makes a brain
  // figure acceptable for a knee case.
  const veto = passes.find((p) => p.decision === 'deny' && p.veto)
  if (veto) {
    return {
      status: veto.code === 'PHI_RISK' ? 'QUARANTINED' : 'REJECTED',
      code: veto.code,
      consensus: c,
      reasons: [veto.reason],
    }
  }

  const denied = passes.filter((p) => p.decision === 'deny')
  if (denied.length && c.consensus === 0) {
    return {
      status: 'REJECTED',
      code: denied[0].code ?? 'METADATA_MISMATCH',
      consensus: c,
      reasons: denied.map((p) => p.reason),
    }
  }
  if (denied.length) {
    // Genuine disagreement. Never split the difference by picking a side.
    return {
      status: 'NEEDS_HUMAN_REVIEW',
      code: denied[0].code ?? 'METADATA_MISMATCH',
      consensus: c,
      reasons: [
        `checks disagree (${c.approvals} approve, ${c.denials} deny)`,
        ...denied.map((p) => p.reason),
      ],
    }
  }

  // Unanimous among the checks that could decide. Now ask whether enough
  // independent evidence actually decided.
  // A file name is corroboration, never the sole anatomical evidence: paths are
  // written by publishers for their own filing, and "knee-mri-acl.jpg" has been
  // wrong often enough that trusting it alone is how a wrong body part gets in.
  const anatomyConfirmed = passes.some(
    (p) => (p.id === 'anatomy-caption' || p.id === 'anatomy-title') && p.decision === 'approve',
  )
  const approving = passes.filter((p) => p.decision === 'approve').map((p) => p.reason)

  if (!anatomyConfirmed) {
    return {
      status: 'NEEDS_HUMAN_REVIEW',
      code: 'WRONG_ANATOMY',
      consensus: c,
      reasons: ['no source names the body region, so anatomy is unconfirmed'],
    }
  }
  if (c.independentApprovals < MIN_INDEPENDENT_WARN) {
    return {
      status: 'NEEDS_HUMAN_REVIEW',
      code: 'CONFIDENCE_TOO_LOW',
      consensus: c,
      reasons: [
        `only ${c.independentApprovals} independent source(s) agreed, ` +
          `${MIN_INDEPENDENT_WARN} required`,
      ],
    }
  }

  // Full approval additionally requires that the file itself was fetched and
  // decoded. Until then the connection is usable but carries the warning: the
  // text can be perfect while the URL serves a login page.
  const fileVerified = passes.some((p) => p.id === 'integrity' && p.decision === 'approve')
  const warnings = passes.filter((p) => p.decision === 'abstain' && p.code)
  const thin = c.independentApprovals < MIN_INDEPENDENT

  if (!fileVerified || thin || warnings.length) {
    return {
      status: 'APPROVED_WITH_WARNING',
      code: warnings[0]?.code ?? (fileVerified ? 'CONFIDENCE_TOO_LOW' : 'RENDER_FAILURE'),
      consensus: c,
      reasons: [
        ...approving,
        ...(fileVerified ? [] : ['file not fetched yet — contents unconfirmed']),
        ...(thin ? [`${c.independentApprovals} independent sources agreed`] : []),
        ...warnings.map((w) => w.reason),
      ],
    }
  }
  return { status: 'APPROVED', consensus: c, reasons: approving }
}

/**
 * How good a match is, as one comparable number.
 *
 * Composed in the order that actually matters to a reader: whether the pairing
 * is usable at all, then how completely the checks agreed, then across how many
 * INDEPENDENT sources they agreed, then how many checks could decide at all.
 * A figure whose caption, article title and file name all name the knee beats
 * one where only the caption does, even when both reach 100% consensus.
 */
export function accuracyRank(ev: Evaluation): number {
  const tier =
    ev.status === 'APPROVED'
      ? 4
      : ev.status === 'REPLACED' || ev.status === 'AUTO_REPAIRED'
        ? 3
        : ev.status === 'APPROVED_WITH_WARNING'
          ? 2
          : ev.status === 'NEEDS_HUMAN_REVIEW'
            ? 1
            : 0
  const c = ev.consensus
  return tier * 1000 + c.consensus * 100 + c.independentApprovals * 5 + Math.min(c.approvals, 12) * 0.1
}

export interface RankedCandidate {
  match: LiveMatch
  evaluation: Evaluation
  rank: number
}

/**
 * How many candidates are SCORED. Scoring is pure computation over text, not a
 * network attempt, so this is not the anti-loop bound -- MAX_ATTEMPTS below still
 * limits how many images are actually fetched and repaired.
 */
export const RANK_POOL = 8

/**
 * Score a case's candidates and return them best first.
 *
 * Deterministic: same case, same candidates, same rules gives the same order
 * every time, with the URL as the final tie-break so two equally-good figures
 * can never swap places between runs.
 */
export function rankCandidates(
  c: Encounter,
  candidates: LiveMatch[],
  opts: SelectOptions = {},
): RankedCandidate[] {
  return candidates
    .slice(0, opts.maxAttempts ?? RANK_POOL)
    .map((match) => {
      const evaluation = evaluate({
        encounter: c,
        match,
        probe: opts.probes?.get(match.url),
        humanVerdict: opts.humanVerdicts?.[match.url],
        lockedElsewhere: opts.lockedBy?.get(match.url) ?? null,
      })
      return { match, evaluation, rank: accuracyRank(evaluation) }
    })
    .sort((a, b) => b.rank - a.rank || a.match.url.localeCompare(b.match.url))
}

const USABLE: QaStatus[] = ['APPROVED', 'APPROVED_WITH_WARNING', 'AUTO_REPAIRED', 'REPLACED']

export function isUsable(s: QaStatus): boolean {
  return USABLE.includes(s)
}

/**
 * A stable fingerprint of what the case MEANS, so a locked image is reused
 * while the medical content is unchanged and revalidated the moment it is not.
 * Deliberately excludes cosmetic fields (accession, dates, priority) which would
 * otherwise force pointless revalidation.
 */
export function descriptionFingerprint(c: Encounter): string {
  const mod = requiredModality(c.finding, c.categoryId) ?? 'ANY'
  const key = c.finding
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join('-')
  return `${c.stationId}|${mod}|${c.categoryId}|${key}|v${VALIDATION_VERSION}`
}

export interface SelectOptions {
  probes?: Map<string, ProbeResult>
  humanVerdicts?: Record<string, 'approved' | 'rejected'>
  /** url -> caseId, so the same figure is not locked to two cases silently. */
  lockedBy?: Map<string, string>
  /** Bound on how many candidates are tried, per the anti-loop rule. */
  maxAttempts?: number
}

export interface SelectResult {
  record: QaRecord
  chosen: LiveMatch | null
  /** Every candidate that was tried and why it failed, for the audit log. */
  attempts: { url: string; status: QaStatus; code?: ReasonCode; reason: string }[]
}

export const MAX_ATTEMPTS = 3

/**
 * Walk a case's candidate images in order and return the first that validates.
 *
 * This is the self-healing step: a broken, mislabelled or wrong-region figure is
 * replaced from the same candidate list instead of being shown, blanked, or
 * pushed at the reader. Bounded by MAX_ATTEMPTS so a bad case cannot loop.
 */
export function selectForCase(
  c: Encounter,
  candidates: LiveMatch[],
  opts: SelectOptions = {},
): SelectResult {
  // Score the pool first, then take the best usable one. Taking the FIRST that
  // passed -- what this did before -- meant the reader saw whichever acceptable
  // figure happened to be listed earliest, not the one that best represents the
  // case. Both are "valid"; only one is the right image to open on.
  const ranked = rankCandidates(c, candidates, opts)
  const attempts: SelectResult['attempts'] = ranked.map((r) => ({
    url: r.match.url,
    status: r.evaluation.status,
    code: r.evaluation.code,
    reason: r.evaluation.reasons[0] ?? '',
  }))

  const best = ranked.find((r) => isUsable(r.evaluation.status))
  if (best) {
    // "Replaced" means the figure the case would otherwise have shown -- the
    // first candidate offered -- was not the one chosen.
    const displaced = candidates[0] && candidates[0].url !== best.match.url ? candidates[0].url : null
    return {
      chosen: best.match,
      attempts,
      record: record(c, best.match, best.evaluation, {
        status: displaced ? 'REPLACED' : best.evaluation.status,
        repairAttempted: Boolean(displaced),
        repairResult: displaced
          ? `ranked ${ranked.length} candidates and took the closest match`
          : undefined,
        replacedFrom: displaced,
      }),
    }
  }

  // Nothing validated. Report the honest reason rather than showing something.
  const ev: Evaluation = ranked[0]?.evaluation ?? {
    status: 'SOURCE_UNAVAILABLE',
    code: 'SOURCE_UNAVAILABLE',
    consensus: consensusOf([]),
    reasons: ['no candidate image available'],
  }
  return {
    chosen: null,
    attempts,
    record: record(c, candidates[0] ?? null, ev, {
      status: candidates.length ? ev.status : 'SOURCE_UNAVAILABLE',
      repairAttempted: attempts.length > 1,
      repairResult: attempts.length > 1 ? `${attempts.length} candidates all failed` : undefined,
    }),
  }
}

function record(
  c: Encounter,
  m: LiveMatch | null,
  ev: Evaluation,
  over: Partial<QaRecord>,
): QaRecord {
  const caption = m?.caption ?? ''
  const detected = [...modalitiesIn(caption)]
  return {
    caseId: c.accession,
    descriptionFingerprint: descriptionFingerprint(c),
    imageUrl: m?.url ?? null,
    status: ev.status,
    code: ev.code,
    consensus: Math.round(ev.consensus.consensus * 100) / 100,
    expectedStation: c.stationId,
    detectedStation: caption ? stationIdForFinding(caption) : null,
    expectedModality: requiredModality(c.finding, c.categoryId),
    detectedModality: detected.length ? detected.join('/') : null,
    visual: 'unverified',
    reasons: ev.reasons,
    repairAttempted: false,
    validationVersion: VALIDATION_VERSION,
    at: 0,
    ...over,
  }
}

export interface QaSummary {
  cases: number
  images: number
  connections: number
  approved: number
  approvedWithWarning: number
  replaced: number
  quarantined: number
  rejected: number
  sourceUnavailable: number
  needsHumanReview: number
  autoApprovalRate: number
  byCode: Record<string, number>
  anatomyMismatches: number
  modalityMismatches: number
  lateralityConflicts: number
  brokenImages: number
  duplicates: number
  /** Distinct images that serve more than one case. */
  reusedImages: number
}

export function summarise(records: QaRecord[]): QaSummary {
  const byCode: Record<string, number> = {}
  const urls = new Map<string, number>()
  let approved = 0
  let warned = 0
  let replaced = 0
  let quarantined = 0
  let rejected = 0
  let unavailable = 0
  let review = 0

  for (const r of records) {
    if (r.imageUrl) urls.set(r.imageUrl, (urls.get(r.imageUrl) ?? 0) + 1)
    if (r.code) byCode[r.code] = (byCode[r.code] ?? 0) + 1
    switch (r.status) {
      case 'APPROVED':
        approved++
        break
      case 'APPROVED_WITH_WARNING':
        warned++
        break
      case 'AUTO_REPAIRED':
      case 'REPLACED':
        replaced++
        break
      case 'QUARANTINED':
        quarantined++
        break
      case 'REJECTED':
        rejected++
        break
      case 'SOURCE_UNAVAILABLE':
        unavailable++
        break
      default:
        review++
    }
  }

  const usable = approved + warned + replaced
  return {
    cases: records.length,
    images: urls.size,
    connections: records.filter((r) => r.imageUrl).length,
    approved,
    approvedWithWarning: warned,
    replaced,
    quarantined,
    rejected,
    sourceUnavailable: unavailable,
    needsHumanReview: review,
    autoApprovalRate: records.length ? usable / records.length : 0,
    byCode,
    anatomyMismatches: byCode.WRONG_ANATOMY ?? 0,
    modalityMismatches: byCode.WRONG_MODALITY ?? 0,
    lateralityConflicts: byCode.LATERALITY_CONFLICT ?? 0,
    brokenImages: (byCode.BROKEN_URL ?? 0) + (byCode.NOT_IMAGE ?? 0) + (byCode.CORRUPTED_FILE ?? 0),
    duplicates: byCode.DUPLICATE ?? 0,
    reusedImages: [...urls.values()].filter((n) => n > 1).length,
  }
}
