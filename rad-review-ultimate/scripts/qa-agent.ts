/**
 * HEADLESS IMAGE QA RUN.
 *
 * Runs the same engine the app runs, over all 33,000 encounters, and prints the
 * aggregate report. Unlike the browser it can fetch the figures directly, so it
 * fills in the fields an <img> decode cannot see -- HTTP status, content type,
 * byte length -- and catches an HTML error page served with a .jpg name.
 *
 *   npm run qa                 validate everything, no network
 *   npm run qa -- --probe      also fetch each distinct figure once
 *   npm run qa -- --limit=500  first N encounters, for a quick pass
 */

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { generateCases } from '../src/data/generateCases'
import { buildFigureIndex, candidatesFor } from '../src/data/selectFigure'
import { selectForCase, summarise } from '../src/data/qa/engine'
import type { ProbeResult, QaRecord, ReasonCode } from '../src/data/qa/types'
import type { LiveMatch } from '../src/data/liveMatch'

const STORE = 'public/match-index.json'
const OUT = 'qa-report.json'

const args = process.argv.slice(2)
const wantProbe = args.includes('--probe')
const limitArg = args.find((a) => a.startsWith('--limit='))
const limit = limitArg ? Number(limitArg.split('=')[1]) : Infinity

async function loadStore(): Promise<Record<string, LiveMatch[]>> {
  if (!existsSync(STORE)) {
    console.warn(`no ${STORE} on disk — running against an empty match corpus`)
    return {}
  }
  const j = JSON.parse(await readFile(STORE, 'utf8')) as {
    entries?: Record<string, { results: LiveMatch[] }>
  }
  const out: Record<string, LiveMatch[]> = {}
  for (const [finding, entry] of Object.entries(j.entries ?? {})) {
    if (entry?.results?.length) out[finding] = entry.results
  }
  return out
}

/**
 * Fetch a figure and report what actually came back. Deliberately reads the
 * body: a URL ending in .jpg that returns an HTML shell is the failure mode the
 * spec calls out, and only the bytes reveal it.
 */
async function probe(url: string): Promise<ProbeResult> {
  const base: ProbeResult = {
    url,
    ok: false,
    httpStatus: null,
    contentType: null,
    bytes: null,
    width: null,
    height: null,
    at: Date.now(),
  }
  try {
    const r = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'rad-review-image-qa/1.0' },
      signal: AbortSignal.timeout(15_000),
    })
    const ct = r.headers.get('content-type')
    if (!r.ok) {
      const failure: ReasonCode =
        r.status === 401 || r.status === 403
          ? 'AUTH_REQUIRED'
          : r.status === 429
            ? 'SOURCE_UNAVAILABLE'
            : r.status >= 500
              ? 'API_FAILURE'
              : 'BROKEN_URL'
      return { ...base, httpStatus: r.status, contentType: ct, failure }
    }
    const buf = Buffer.from(await r.arrayBuffer())
    const dims = imageSize(buf)
    return {
      ...base,
      ok: true,
      httpStatus: r.status,
      contentType: ct,
      bytes: buf.byteLength,
      width: dims?.width ?? null,
      height: dims?.height ?? null,
      failure: dims ? undefined : 'NOT_IMAGE',
    }
  } catch (e) {
    return { ...base, failure: 'SOURCE_UNAVAILABLE', contentType: String(e).slice(0, 60) }
  }
}

/**
 * Dimensions straight from the file header for the formats these sources serve.
 * A parse failure is itself the signal that the bytes are not an image.
 */
function imageSize(b: Buffer): { width: number; height: number } | null {
  if (b.length < 24) return null
  // PNG
  if (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
  }
  // GIF
  if (b.toString('ascii', 0, 3) === 'GIF') {
    return { width: b.readUInt16LE(6), height: b.readUInt16LE(8) }
  }
  // WEBP (VP8X / VP8 / VP8L)
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const fmt = b.toString('ascii', 12, 16)
    if (fmt === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) }
    if (fmt === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
  }
  // JPEG: walk the segments to the frame header
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2
    while (i < b.length - 9) {
      if (b[i] !== 0xff) {
        i++
        continue
      }
      const marker = b[i + 1]
      const len = b.readUInt16BE(i + 2)
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
      }
      i += 2 + len
    }
  }
  return null
}

async function main() {
  const store = await loadStore()
  const index = buildFigureIndex(store)
  const all = generateCases()
  const cases = Number.isFinite(limit) ? all.slice(0, limit) : all
  console.log(
    `validating ${cases.length.toLocaleString()} connections against ` +
      `${Object.keys(store).length.toLocaleString()} matched findings`,
  )

  // ---- optional: fetch every distinct candidate once ---------------------
  const probes = new Map<string, ProbeResult>()
  if (wantProbe) {
    const urls = new Set<string>()
    for (const c of cases) for (const x of candidatesFor(c, index).slice(0, 3)) urls.add(x.match.url)
    const list = [...urls]
    console.log(`probing ${list.length.toLocaleString()} distinct figures...`)
    let n = 0
    const workers = Array.from({ length: 4 }, async () => {
      while (list.length) {
        const url = list.pop()!
        probes.set(url, await probe(url))
        if (++n % 25 === 0) process.stdout.write(`\r  ${n} probed`)
      }
    })
    await Promise.all(workers)
    process.stdout.write('\n')
  }

  // ---- validate -----------------------------------------------------------
  const records: QaRecord[] = []
  for (const c of cases) {
    const candidates = candidatesFor(c, index).map((x) => x.match)
    records.push(selectForCase(c, candidates, { probes }).record)
  }

  const s = summarise(records)
  const exceptions = records.filter((r) => r.status === 'NEEDS_HUMAN_REVIEW')

  console.log(`
IMAGE QA SUMMARY
  Cases evaluated:            ${s.cases.toLocaleString()}
  Distinct images:            ${s.images.toLocaleString()}
  Connections made:           ${s.connections.toLocaleString()}
  Approved:                   ${s.approved.toLocaleString()}
  Approved with warning:      ${s.approvedWithWarning.toLocaleString()}
  Replaced / auto-repaired:   ${s.replaced.toLocaleString()}
  Rejected:                   ${s.rejected.toLocaleString()}
  Quarantined:                ${s.quarantined.toLocaleString()}
  No source available:        ${s.sourceUnavailable.toLocaleString()}
  Needs a look:               ${s.needsHumanReview.toLocaleString()}
  Auto-approval rate:         ${(s.autoApprovalRate * 100).toFixed(2)}%

  Wrong body part caught:     ${s.anatomyMismatches.toLocaleString()}
  Wrong modality caught:      ${s.modalityMismatches.toLocaleString()}
  Laterality conflicts:       ${s.lateralityConflicts.toLocaleString()}
  Broken files caught:        ${s.brokenImages.toLocaleString()}
  Images serving >1 case:     ${s.reusedImages.toLocaleString()}
  Files fetched:              ${probes.size.toLocaleString()}${wantProbe ? '' : ' (pass --probe to fetch)'}

  Visual content:             UNVERIFIED — no pixel-level classifier is wired in`)

  const codes = Object.entries(s.byCode).sort((a, b) => b[1] - a[1])
  if (codes.length) {
    console.log('\nTOP REASONS')
    for (const [code, n] of codes.slice(0, 10)) {
      console.log(`  ${String(n).padStart(7)}  ${code}`)
    }
  }

  if (exceptions.length) {
    console.log(`\nHUMAN REVIEW REQUIRED: ${exceptions.length.toLocaleString()} case(s)`)
    for (const r of exceptions.slice(0, 10)) {
      console.log(`  ${r.caseId} — ${r.reasons[0]}`)
    }
    if (exceptions.length > 10) console.log(`  ...and ${exceptions.length - 10} more`)
  }

  await writeFile(OUT, JSON.stringify({ summary: s, records }, null, 1))
  console.log(`\nfull audit written to ${OUT}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
