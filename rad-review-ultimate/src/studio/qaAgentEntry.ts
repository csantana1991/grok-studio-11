/**
 * BOARD STUDIO QA AGENT — the same engine, running inside the studio page.
 *
 * NucMed Board Studio is a standalone HTML document with no React and no module
 * system, and its widgets generate imagery live while narration plays. Rather
 * than reimplementing the checks there — a second set of rules is exactly how
 * the two halves of this app drifted apart before — the real engine is bundled
 * to one IIFE and loaded by the page.
 *
 * What it does once loaded:
 *   - watches the document for images appearing, including ones the widgets
 *     generate during narration, and checks each as it lands
 *   - reads the case text nearest each image to work out what the image is
 *     supposed to show, then runs the full validation
 *   - marks every image with its verdict and keeps a live tally on screen
 *
 * The same honest limit applies here: no pass reads pixels.
 */

import { evaluate } from '../data/qa/engine'
import { probeImage } from '../data/qa/probe'
import { stationIdForFinding } from '../data/anatomyMap'
import { modalitiesIn } from '../data/qa/modality'
import type { Encounter } from '../data/generateCases'
import type { LiveMatch } from '../data/liveMatch'
import type { ProbeResult, QaStatus } from '../data/qa/types'

const BADGE = 'rrqa-badge'
const MARK = 'data-rrqa'
const SWEEP_MS = 900

interface Row {
  src: string
  caseId: string
  finding: string
  status: QaStatus
  reasons: string[]
}

const probes = new Map<string, ProbeResult>()
const seen = new Map<string, Row>()

const CASE_ID = /\b(NBA-\d{6}|RR-\d{4}-\d{6})\b/

/**
 * The case an image belongs to. The Studio prints the identifier on the case
 * heading, which is often several levels above the thumbnail strip, so this
 * walks up until it finds one rather than giving every image the same anonymous
 * label -- without an id the report cannot tell the reader WHICH case is wrong.
 */
function caseIdNear(img: HTMLImageElement, nearby: string): string {
  const own = nearby.match(CASE_ID)?.[1]
  if (own) return own
  let node: HTMLElement | null = img.parentElement
  for (let depth = 0; node && depth < 8; depth++, node = node.parentElement) {
    const hit = (node.textContent ?? '').match(CASE_ID)?.[1]
    if (hit) return hit
  }
  return 'studio-image'
}

/**
 * Work out what a studio image is meant to depict from the text around it.
 *
 * The studio does not carry structured encounters, so the case is reconstructed
 * from the caption, the thumbnail label and the nearest case heading. When a
 * field is genuinely absent — age and sex usually are — it is left absent, and
 * the corresponding checks abstain rather than being handed a guess.
 */
function contextFor(img: HTMLImageElement): { encounter: Encounter; match: LiveMatch } | null {
  const card =
    img.closest('.case-gal, .case-th, .rr-case, article, section, figure') ??
    img.parentElement ??
    document.body
  const nearby = [
    img.getAttribute('alt') ?? '',
    (card.querySelector('.rr-cap, .th-cap, figcaption')?.textContent ?? '').trim(),
    (card.textContent ?? '').slice(0, 400),
  ]
    .filter(Boolean)
    .join(' · ')
  if (!nearby.trim()) return null

  const caseId = caseIdNear(img, nearby)
  // The finding is the case wording, which the studio prints before its own
  // annotations ("· region knee · matched · msk-404.jpg").
  const finding = (nearby.split('·')[0] || nearby).trim().slice(0, 200)
  const stationId = stationIdForFinding(finding) ?? stationIdForFinding(nearby)
  if (!stationId) return null

  const age = Number(nearby.match(/\b(\d{1,3})\s*(?:y|yo|year)/i)?.[1] ?? NaN)
  const sexMatch = nearby.match(/\b\d{1,3}\s*([MF])\b/)
  const mods = [...modalitiesIn(finding)]

  const encounter = {
    idx: 0,
    accession: caseId,
    mrn: '',
    age: Number.isFinite(age) ? age : 55,
    sex: (sexMatch?.[1] as 'M' | 'F') ?? 'M',
    categoryId: mods[0] ?? 'RAD',
    finding,
    stationId,
    stationName: stationId.replace('_', ' '),
    slice: 0,
    suv: null,
    status: 'Q-READY',
    priority: 'ROUTINE',
    acgme: '',
    date: '',
    search: '',
  } as unknown as Encounter

  const match = {
    url: img.currentSrc || img.src,
    caption: nearby,
    relevance: 2,
    pmcid: '',
    title: (card.querySelector('h1,h2,h3,h4,b')?.textContent ?? '').trim().slice(0, 160),
    authors: '',
    journal: '',
    year: '',
    doi: '',
    license: '',
  } as LiveMatch

  return { encounter, match }
}

function paint(img: HTMLImageElement, status: QaStatus, reasons: string[], busy = false) {
  const host = img.parentElement
  if (!host) return
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative'

  let badge = host.querySelector<HTMLElement>(`.${BADGE}`)
  if (!badge) {
    badge = document.createElement('span')
    badge.className = BADGE
    host.appendChild(badge)
  }
  const usable = status.startsWith('APPROVED') || status === 'REPLACED'
  const colour = busy ? '#64748b' : usable ? '#047857' : status === 'REJECTED' ? '#b91c1c' : '#b45309'
  badge.setAttribute(
    'style',
    'position:absolute;top:4px;left:4px;z-index:9;max-width:calc(100% - 8px);' +
      'font:700 9px/1.3 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.06em;' +
      'padding:2px 5px;border-radius:4px;color:#fff;pointer-events:none;' +
      'text-transform:uppercase;box-shadow:0 1px 3px rgba(0,0,0,.35);background:' +
      colour,
  )
  badge.textContent = busy
    ? 'agent · checking'
    : `agent ${status.replace(/_/g, ' ')}${reasons[0] ? ` · ${reasons[0].slice(0, 60)}` : ''}`
  badge.title = reasons.join(' · ') || status
}

function summary() {
  let box = document.getElementById('rrqa-summary')
  if (!box) {
    box = document.createElement('div')
    box.id = 'rrqa-summary'
    box.setAttribute(
      'style',
      'position:fixed;right:10px;bottom:10px;z-index:99999;max-width:320px;' +
        'font:11px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace;color:#e5e7eb;' +
        'background:#0a0a0bee;border:1px solid #1f2937;border-radius:8px;padding:8px 10px;' +
        'box-shadow:0 6px 24px rgba(0,0,0,.45)',
    )
    document.body.appendChild(box)
  }
  const rows = [...seen.values()]
  const usable = rows.filter((r) => r.status.startsWith('APPROVED') || r.status === 'REPLACED')
  const rejected = rows.filter((r) => r.status === 'REJECTED' || r.status === 'QUARANTINED')
  const look = rows.filter((r) => r.status === 'NEEDS_HUMAN_REVIEW')
  const worst = [...rejected, ...look].slice(0, 3)

  box.innerHTML =
    `<div style="font-weight:700;letter-spacing:.12em;color:#fff">IMAGE QA AGENT</div>` +
    `<div style="color:#9ca3af">Board Studio · live</div>` +
    `<div style="margin-top:4px">checked <b>${rows.length}</b> · ` +
    `<span style="color:#34d399">ok ${usable.length}</span> · ` +
    `<span style="color:#fbbf24">look ${look.length}</span> · ` +
    `<span style="color:#f87171">rejected ${rejected.length}</span></div>` +
    (worst.length
      ? `<ul style="margin:5px 0 0;padding-left:16px;color:#9ca3af">${worst
          .map((r) => `<li>${escape_(r.caseId)} — ${escape_(r.reasons[0] ?? r.status)}</li>`)
          .join('')}</ul>`
      : '') +
    `<div style="margin-top:5px;color:#6b7280">Text and file checks only — no pixel inspection.</div>`
}

function escape_(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  )
}

async function check(img: HTMLImageElement) {
  const src = img.currentSrc || img.src
  if (!src || src.startsWith('data:')) return
  const ctx = contextFor(img)
  if (!ctx) return

  const known = probes.get(src)
  const first = evaluate({ ...ctx, probe: known })
  paint(img, first.status, first.reasons, !known)
  record(src, ctx.encounter.accession, ctx.encounter.finding, first.status, first.reasons)

  if (!known) {
    const probe = await probeImage(src)
    probes.set(src, probe)
    const withFile = evaluate({ ...ctx, probe })
    paint(img, withFile.status, withFile.reasons)
    record(src, ctx.encounter.accession, ctx.encounter.finding, withFile.status, withFile.reasons)
  }
  summary()
}

function record(src: string, caseId: string, finding: string, status: QaStatus, reasons: string[]) {
  seen.set(src, { src, caseId, finding, status, reasons })
}

function sweep() {
  for (const img of Array.from(document.images)) {
    const src = img.currentSrc || img.src
    if (!src) continue
    // Re-check when the element is reused for a different file, which is how the
    // studio swaps plates as narration advances.
    if (img.getAttribute(MARK) === src) continue
    img.setAttribute(MARK, src)
    void check(img)
  }
  summary()
}

let timer: number | null = null
function schedule() {
  if (timer !== null) return
  timer = window.setTimeout(() => {
    timer = null
    sweep()
  }, SWEEP_MS)
}

function start() {
  sweep()
  new MutationObserver(schedule).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src'],
  })
  document.addEventListener('load', schedule, true)
  document.addEventListener('error', schedule, true)
}

declare global {
  interface Window {
    RRQA?: {
      evaluate: typeof evaluate
      sweep: () => void
      rows: () => Row[]
    }
  }
}

window.RRQA = { evaluate, sweep, rows: () => [...seen.values()] }

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true })
} else {
  start()
}
