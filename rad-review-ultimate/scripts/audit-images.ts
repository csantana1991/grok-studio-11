/**
 * IMAGE AUDIT — every encounter, through the real production selection.
 *
 *   npm run audit:images
 *
 * Runs data/selectFigure.ts (the exact code the viewer and the worklist use)
 * over all 33,000 encounters against the real match corpus, and re-verifies
 * whatever it chose. Anything reported here is a defect the UI would show.
 *
 * What this CAN check, because it is all text:
 *   - the chosen figure's caption describes this encounter's body region
 *   - it describes the right patient population
 *   - it is a radiological image, not a flow chart or an arthroscopy photo
 *   - the worklist thumbnail is the identical image the viewer will load
 *
 * What it CANNOT check: whether the pixels show the stated finding. There is
 * no vision model here, so "correct image" means "correctly described and
 * correctly matched", not "verified by looking". Do not read this report as
 * visual confirmation.
 */

import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { generateCases } from '../src/data/generateCases'
import { buildFigureIndex, figureFor, thumbFor } from '../src/data/selectFigure'
import { verifyMatch } from '../src/data/verifyMatch'
import { encounterPopulation } from '../src/data/population'
import { isNonRadiologic } from '../src/data/nonRadiologic'
import type { LiveMatch } from '../src/data/liveMatch'

function loadCorpus(): Record<string, LiveMatch[]> {
  const out: Record<string, LiveMatch[]> = {}
  const idx = resolve(process.cwd(), 'public/match-index.json')
  if (existsSync(idx)) {
    try {
      const j = JSON.parse(readFileSync(idx, 'utf8')) as {
        entries?: Record<string, { results: LiveMatch[] }>
      }
      for (const [finding, entry] of Object.entries(j.entries ?? {})) {
        if (entry?.results?.length) out[finding] = entry.results
      }
    } catch {
      console.warn('! match-index.json unreadable')
    }
  }
  return out
}

const corpus = loadCorpus()
const findingsWithImages = Object.keys(corpus).length
const index = buildFigureIndex(corpus)
const cases = generateCases()

interface Problem {
  kind: string
  accession: string
  detail: string
}
const problems: Problem[] = []

let withImage = 0
let noImage = 0
const byCategory: Record<string, { total: number; withImage: number }> = {}
const byStation: Record<string, { total: number; withImage: number }> = {}
const verdicts: Record<string, number> = {}

for (const c of cases) {
  byCategory[c.categoryId] ??= { total: 0, withImage: 0 }
  byStation[c.stationName] ??= { total: 0, withImage: 0 }
  byCategory[c.categoryId].total++
  byStation[c.stationName].total++

  const chosen = figureFor(c, index)
  if (!chosen) {
    noImage++
    continue
  }
  withImage++
  byCategory[c.categoryId].withImage++
  byStation[c.stationName].withImage++

  const pop = encounterPopulation(c.age, c.categoryId)
  const v = verifyMatch(chosen.match.caption, c.finding, c.stationId, pop)
  verdicts[v.verdict] = (verdicts[v.verdict] ?? 0) + 1

  // A displayed mismatch is the defect this audit exists to catch.
  if (v.verdict === 'mismatch') {
    problems.push({
      kind: 'displayed-mismatch',
      accession: c.accession,
      detail: `${c.finding} @ ${c.stationName} -> ${v.reasons.join('; ')}`,
    })
  }
  if (isNonRadiologic(chosen.match.caption)) {
    problems.push({
      kind: 'non-radiological',
      accession: c.accession,
      detail: chosen.match.caption.slice(0, 90),
    })
  }
  // The row must show exactly what clicking it loads.
  const thumb = thumbFor(c, index)
  if (thumb !== chosen.match.url) {
    problems.push({
      kind: 'thumbnail-differs',
      accession: c.accession,
      detail: `${thumb ?? 'none'} !== ${chosen.match.url}`,
    })
  }
}

const pct = (n: number, d: number) => (d ? ((n / d) * 100).toFixed(1) + '%' : '—')

console.log('IMAGE AUDIT — production selection over every encounter\n')
console.log(`corpus            : ${findingsWithImages} findings carry figures`)
console.log(`encounters        : ${cases.length.toLocaleString()}`)
console.log(`  with an image   : ${withImage.toLocaleString()} (${pct(withImage, cases.length)})`)
console.log(`  no image        : ${noImage.toLocaleString()} (${pct(noImage, cases.length)})`)
console.log(`\nverification of what is displayed`)
for (const [k, n] of Object.entries(verdicts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k.padEnd(10)} ${n.toLocaleString().padStart(7)}  ${pct(n, withImage)}`)
}

console.log(`\nPROBLEMS: ${problems.length}`)
const kinds: Record<string, number> = {}
for (const p of problems) kinds[p.kind] = (kinds[p.kind] ?? 0) + 1
for (const [k, n] of Object.entries(kinds)) console.log(`  ${k}: ${n}`)
for (const p of problems.slice(0, 10)) console.log(`   ! ${p.accession}  ${p.detail}`)

console.log('\ncoverage by category')
for (const [k, v] of Object.entries(byCategory).sort((a, b) => b[1].total - a[1].total)) {
  console.log(`  ${k.padEnd(9)} ${String(v.withImage).padStart(6)}/${String(v.total).padEnd(6)} ${pct(v.withImage, v.total)}`)
}
console.log('\ncoverage by station')
for (const [k, v] of Object.entries(byStation).sort((a, b) => b[1].total - a[1].total)) {
  console.log(`  ${k.padEnd(15)} ${String(v.withImage).padStart(6)}/${String(v.total).padEnd(6)} ${pct(v.withImage, v.total)}`)
}

console.log(
  '\nNOTE: this is a TEXT audit. It confirms the chosen figure is described as\n' +
    'the right region, population and image kind — not that its pixels show the\n' +
    'finding. No vision model is available here; visual checks are done by hand.',
)

if (problems.length) process.exitCode = 1
