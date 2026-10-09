/**
 * MATCH INDEX BUILDER AGENT
 *
 * Walks every unique finding in the encounter log, resolves real open-access
 * PET/CT figures for it, and writes public/match-index.json. The app loads that
 * file at startup, so all 33,000 encounters show matched imagery immediately
 * with no live searching -- the images are never re-fetched.
 *
 * The 33,000 encounters are drawn from ~350 unique finding strings, so the
 * whole log is covered by ~350 queries.
 *
 *   npm run index:build          one pass, fills whatever is missing
 *   npm run index:watch          loops forever, refilling gaps and refreshing
 *   npm run index:build -- --force        re-resolve everything from scratch
 *   npm run index:build -- --limit 40     cap findings processed this pass
 *
 * Resumable and additive: an existing index is loaded first and only missing
 * (or stale) findings are fetched, so an interrupted run loses nothing.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { FINDING_POOLS } from '../src/data/findings'
import { matchFinding, BlockedError, DEFAULT_TARGET, type MatchResult } from '../src/data/pmcSearch'
import { stationIdForFinding } from '../src/data/anatomyMap'

const OUT = resolve(process.cwd(), 'public/match-index.json')
const LOCK = resolve(process.cwd(), 'public/.match-index.lock')

/**
 * Single-writer lock. Two builders writing the same index concurrently
 * interleave their writes and silently truncate each other's work -- observed
 * as the resolved count going DOWN between checks. The lock makes a second
 * builder refuse to start rather than corrupt the first one's index.
 */
const LOCK_STALE_MS = 5 * 60 * 1000

/** True when a pid is a live process. Signal 0 tests existence only. */
function isAlive(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) return false
  try {
    process.kill(pid, 0)
    return true
  } catch (e) {
    // EPERM means the process exists but is owned by another user.
    return (e as NodeJS.ErrnoException).code === 'EPERM'
  }
}

function acquireLock(): boolean {
  if (existsSync(LOCK)) {
    try {
      const held = JSON.parse(readFileSync(LOCK, 'utf8')) as { pid: number; at: number }
      // A killed builder leaves its lock behind with a fresh timestamp, which
      // would block every restart for the whole staleness window. Check whether
      // the holder is actually alive before deferring to it.
      if (isAlive(held.pid) && Date.now() - held.at < LOCK_STALE_MS) {
        console.error(
          `another builder is running (pid ${held.pid}). ` +
            `Wait for it, or delete ${LOCK} if it died.`,
        )
        return false
      }
      console.warn(
        isAlive(held.pid)
          ? '! stale lock found, taking over'
          : `! lock held by dead pid ${held.pid}, taking over`,
      )
    } catch {
      console.warn('! unreadable lock, taking over')
    }
  }
  mkdirSync(dirname(LOCK), { recursive: true })
  writeFileSync(LOCK, JSON.stringify({ pid: process.pid, at: Date.now() }))
  return true
}

function touchLock(): void {
  try {
    writeFileSync(LOCK, JSON.stringify({ pid: process.pid, at: Date.now() }))
  } catch {
    /* non-fatal */
  }
}

function releaseLock(): void {
  try {
    rmSync(LOCK, { force: true })
  } catch {
    /* non-fatal */
  }
}

/** Figures to accumulate per finding before moving on. */
const TARGET = DEFAULT_TARGET
/** Delay between findings, to stay polite to the public APIs. */
const DELAY_MS = 1500
/** Long wait when upstream serves a bot challenge instead of an article. */
const BLOCKED_MS = 5 * 60 * 1000
/** Re-check a finding that previously produced nothing after this long. */
const STALE_MS = 7 * 24 * 60 * 60 * 1000
/** Pause between passes in --watch mode. */
const LOOP_PAUSE_MS = 60 * 60 * 1000

interface IndexEntry {
  results: MatchResult[]
  at: number
}
interface MatchIndex {
  built: string
  count: number
  entries: Record<string, IndexEntry>
}

const argv = process.argv.slice(2)
const has = (f: string) => argv.includes(f)
const num = (f: string, d: number) => {
  const i = argv.indexOf(f)
  return i >= 0 && argv[i + 1] ? Number(argv[i + 1]) || d : d
}

const FORCE = has('--force')
const WATCH = has('--watch') || has('--loop')
const LIMIT = num('--limit', Infinity)

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function uniqueFindings(): string[] {
  const set = new Set<string>()
  for (const pool of Object.values(FINDING_POOLS)) for (const f of pool) set.add(f)
  return [...set]
}

function load(): MatchIndex {
  if (!FORCE && existsSync(OUT)) {
    try {
      return JSON.parse(readFileSync(OUT, 'utf8')) as MatchIndex
    } catch {
      console.warn('! existing index unreadable, starting fresh')
    }
  }
  return { built: new Date().toISOString(), count: 0, entries: {} }
}

function save(index: MatchIndex): void {
  index.built = new Date().toISOString()
  index.count = Object.values(index.entries).filter((e) => e.results.length).length
  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify(index))
}

/** True when a finding still needs work: below target, or a stale empty. */
function needsWork(entry: IndexEntry | undefined, now: number): boolean {
  if (!entry) return true
  if (entry.results.length >= TARGET) return false // at target; leave it alone
  if (entry.results.length) return true // partial: keep topping it up
  return now - entry.at > STALE_MS // retry empties only once they go stale
}

async function pass(): Promise<{ filled: number; remaining: number }> {
  const index = load()
  const now = Date.now()
  const all = uniqueFindings()
  const todo = all.filter((f) => needsWork(index.entries[f], now)).slice(0, LIMIT)

  const atTarget = Object.values(index.entries).filter(
    (e) => e.results.length >= TARGET,
  ).length
  const figures = Object.values(index.entries).reduce((a, e) => a + e.results.length, 0)
  console.log(
    `index: ${atTarget}/${all.length} at target · ${index.count} started · ` +
      `${figures} figures held · ${todo.length} queued this pass`,
  )
  if (!todo.length) return { filled: 0, remaining: 0 }

  let filled = 0
  /**
   * When PubMed Central throttles, rest PMC — not the whole run.
   *
   * Sleeping five minutes after every blocked finding meant one finding per five
   * minutes, roughly thirty hours for the queue, while Wikimedia Commons sat
   * idle and perfectly willing to answer. During cooldown the PMC phase is given
   * a zero budget so it is skipped outright, and the loop keeps filling findings
   * from Commons at the normal pace.
   */
  let pmcCooldownUntil = 0
  for (let i = 0; i < todo.length; i++) {
    const finding = todo[i]
    const label = `[${String(i + 1).padStart(3)}/${todo.length}]`
    const held = index.entries[finding]?.results ?? []
    try {
      const station = stationIdForFinding(finding) ?? undefined
      // Pass what is already held so the search dedupes and tops up rather
      // than restarting this finding from zero on every pass.
      const resting = Date.now() < pmcCooldownUntil
      const { results, blocked, commonsBlocked } = await matchFinding(
        finding,
        TARGET,
        0,
        station,
        held,
        resting ? 0 : undefined,
      )
      if (blocked) pmcCooldownUntil = Date.now() + BLOCKED_MS

      // Record whatever was found even when PMC throttled: the Commons fallback
      // may have covered the finding entirely. Only an empty result is a genuine
      // "nothing was read".
      if (results.length <= held.length) {
        // Both archives refusing is not a result. Do NOT write an entry, and
        // rest before asking either of them again.
        if (commonsBlocked) {
          console.log(`${label}  BLOCKED — both archives rate limiting, resting 5 min`)
          save(index)
          touchLock()
          await sleep(BLOCKED_MS)
          continue
        }
        console.log(
          `${label}    0/${TARGET} fig  ${blocked ? '(pmc blocked)' : '(no match)'}  ` +
            finding.slice(0, 50),
        )
        if (i % 10 === 9) save(index)
        if (i < todo.length - 1) await sleep(DELAY_MS)
        continue
      }
      index.entries[finding] = { results, at: Date.now() }
      if (results.length > held.length) filled++
      console.log(
        `${label} ${String(results.length).padStart(3)}/${TARGET} fig` +
          `${blocked ? ' (pmc blocked, commons)' : resting ? ' (commons)' : ''}  ` +
          finding.slice(0, 62),
      )
    } catch (e) {
      if (e instanceof BlockedError) {
        // Do NOT write an entry: recording this as a result would mark the
        // finding resolved when nothing was actually read.
        console.log(`${label}  BLOCKED — upstream rate limit, backing off 5 min`)
        save(index)
        touchLock()
        await sleep(BLOCKED_MS)
        continue
      }
      console.log(`${label}  ERR    ${finding.slice(0, 55)} — ${String(e).slice(0, 40)}`)
    }
    // Write incrementally so an interrupted run keeps everything it earned.
    if (i % 10 === 9 || i === todo.length - 1) {
      save(index)
      touchLock()
    }
    if (i < todo.length - 1) await sleep(DELAY_MS)
  }

  save(index)
  const remaining = uniqueFindings().filter((f) =>
    needsWork(index.entries[f], Date.now()),
  ).length
  console.log(`pass complete: +${filled} resolved · ${remaining} still outstanding`)
  return { filled, remaining }
}

async function main() {
  console.log(`match-index builder → ${OUT}`)
  if (FORCE) console.log('--force: rebuilding from scratch')
  if (!acquireLock()) process.exit(1)
  for (const sig of ['SIGINT', 'SIGTERM'] as const) {
    process.on(sig, () => {
      releaseLock()
      process.exit(0)
    })
  }
  process.on('exit', releaseLock)

  if (!WATCH) {
    await pass()
    return
  }

  console.log('--watch: looping; Ctrl+C to stop')
  for (;;) {
    const { remaining } = await pass()
    // Nothing outstanding: idle until entries go stale rather than spinning.
    const wait = remaining ? LOOP_PAUSE_MS / 6 : LOOP_PAUSE_MS
    console.log(`sleeping ${Math.round(wait / 60000)} min...\n`)
    await sleep(wait)
  }
}

await main()
