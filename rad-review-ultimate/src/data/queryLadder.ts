/**
 * QUERY LADDER — narrow to broad, for external image search.
 *
 * A finding line is written for a worklist, not for a search box. Sent whole,
 * "46F melanoma acral primary left calcaneal marrow uptake SUV 4.7" returns
 * nothing on Open-i: too many terms, and several of them (laterality, "primary",
 * the SUV) carry no retrieval signal at all.
 *
 * This splits a finding into its parts and builds progressively broader
 * queries. The app cannot auto-detect a zero-result page on these sites -- they
 * have no API and are cross-origin, so the response is unreadable -- so instead
 * of pretending to retry, it offers the ladder and lets the reader step down it.
 *
 * Tokens are classified by reusing the anatomy resolver: a token that resolves
 * to a station on its own is anatomy, which avoids maintaining a second
 * vocabulary that could drift from the one the rest of the app uses.
 */

import { stationIdForFinding } from './anatomyMap'

/** Words that carry no retrieval signal in an image search. */
const NOISE = new Set([
  'left', 'right', 'bilateral', 'new', 'with', 'and', 'the', 'of', 'for', 'in',
  'on', 'at', 'to', 'from', 'after', 'post', 'pre', 'status', 'primary',
  'focal', 'multifocal', 'diffuse', 'mild', 'moderate', 'severe', 'acute',
  'chronic', 'stable', 'known', 'suspected', 'possible', 'probable', 'early',
  'late', 'follow', 'followup', 'interval', 'further', 'additional', 'again',
  'study', 'protocol', 'view', 'views', 'series', 'scan', 'imaging', 'image',
  'findings', 'finding', 'evaluation', 'assessment', 'without', 'within',
  'no', 'not', 'negative', 'positive', 'seen', 'noted', 'shows', 'showing',
  'demonstrates', 'consistent', 'suggestive', 'versus', 'vs',
])

/** Modality words, normalised to what an image search expects. */
const MODALITY_WORDS: [RegExp, string][] = [
  [/\bpet\/?ct\b|\bpet\b|\bfdg\b|\bpsma\b|\bdotatate\b/i, 'PET'],
  [/\bct\b|\bcta\b|\bctpa\b|\bcect\b/i, 'CT'],
  [/\bmri\b|\bmr\b|\bmrcp\b|\bmra\b/i, 'MRI'],
  [/\bultrasound\b|\bsonograph\w*\b|\bdoppler\b|\bduplex\b|\bus\b/i, 'ultrasound'],
  // Nuclear studies are often named by what they measure rather than by the
  // word "scintigraphy" -- "thyroid uptake scan", "bone scan", "renogram".
  [
    /\bscintigraph\w*\b|\bspect\b|\bmibg\b|\bmdp\b|\bmag3\b|\bdmsa\b|\buptake scan\b|\bbone scan\b|\bwhole[- ]body scan\b|\brenogram\b|\bmuga\b|\bdatscan\b|\bthyroid scan\b|\bmeckel scan\b|\bv\/q\b/i,
    'scintigraphy',
  ],
  [/\bmammogra\w*\b|\btomosynthesis\b/i, 'mammography'],
  [/\bradiograph\w*\b|\bx-?ray\b|\bplain film\b/i, 'radiograph'],
]

export interface QueryRung {
  /** Short label for the UI, e.g. "diagnosis + modality". */
  label: string
  /** The query string to send. */
  terms: string
  /** 0 = most specific. Higher is broader. */
  breadth: number
}

export interface FindingParts {
  modality: string | null
  anatomy: string[]
  diagnosis: string[]
}

/** Split a finding into modality, anatomy and diagnosis terms. */
export function splitFinding(finding: string, categoryLabel?: string): FindingParts {
  const cleaned = finding
    .replace(/^\d+\s*[MFmf]\b/, ' ')
    .replace(/\bSUV\s*[\d.]+/gi, ' ')
    .replace(/\bDeauville\s*\d\b/gi, ' ')
    .replace(/\b(?:LI-RADS|PI-RADS|BI-RADS|Lung-RADS|TI-RADS)\s*\d?\b/gi, ' ')
    .replace(/\b\d+(?:\.\d+)?\s*(?:mm|cm|gy|mci|mbq|percent|%)\b/gi, ' ')

  let modality: string | null = null
  for (const [re, name] of MODALITY_WORDS) {
    if (re.test(cleaned)) {
      modality = name
      break
    }
  }
  if (!modality && categoryLabel) {
    for (const [re, name] of MODALITY_WORDS) {
      if (re.test(categoryLabel)) {
        modality = name
        break
      }
    }
  }

  const anatomy: string[] = []
  const diagnosis: string[] = []

  for (const raw of cleaned.split(/[^A-Za-z-]+/)) {
    const w = raw.trim()
    if (w.length < 4) continue
    const lower = w.toLowerCase()
    if (NOISE.has(lower)) continue
    // A modality word is already captured; don't repeat it as a term.
    if (MODALITY_WORDS.some(([re]) => re.test(w))) continue

    // Reusing the anatomy resolver keeps one vocabulary for the whole app.
    if (stationIdForFinding(w)) {
      if (!anatomy.includes(lower)) anatomy.push(lower)
    } else if (!diagnosis.includes(lower)) {
      diagnosis.push(lower)
    }
  }

  return { modality, anatomy, diagnosis }
}

/**
 * Progressively broader queries for a finding, most specific first.
 * Duplicates and empties are removed, so the ladder is always usable.
 */
export function queryLadder(finding: string, categoryLabel?: string): QueryRung[] {
  const { modality, anatomy, diagnosis } = splitFinding(finding, categoryLabel)
  const dx = diagnosis.slice(0, 2)
  const an = anatomy.slice(0, 1)
  const mod = modality ? [modality] : []

  const candidates: QueryRung[] = [
    { label: 'diagnosis + site + modality', terms: [...dx, ...an, ...mod].join(' '), breadth: 0 },
    { label: 'diagnosis + modality', terms: [...dx, ...mod].join(' '), breadth: 1 },
    { label: 'diagnosis only', terms: dx.join(' '), breadth: 2 },
    { label: 'lead term + modality', terms: [dx[0] ?? '', ...mod].join(' '), breadth: 3 },
    { label: 'site + modality', terms: [...an, ...mod].join(' '), breadth: 4 },
    { label: 'site only', terms: an.join(' '), breadth: 5 },
  ]

  const seen = new Set<string>()
  const out: QueryRung[] = []
  for (const c of candidates) {
    const t = c.terms.trim().replace(/\s+/g, ' ')
    if (!t || seen.has(t)) continue
    seen.add(t)
    out.push({ ...c, terms: t })
  }

  // Never return nothing: fall back to the finding with the obvious noise gone.
  if (!out.length) {
    const fallback = finding
      .replace(/^\d+\s*[MFmf]\b/, '')
      .replace(/\bSUV\s*[\d.]+/gi, '')
      .trim()
    if (fallback) out.push({ label: 'full finding', terms: fallback, breadth: 9 })
  }
  return out
}
