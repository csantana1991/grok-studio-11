import { useState } from 'react'
import { matchCredit, type LiveMatch } from '../data/liveMatch'
import { isNonRadiologic } from '../data/nonRadiologic'
import type { BatchProgress, LoopStatus, MatchState } from '../hooks/useLiteratureMatches'
import { TARGET_PER_CASE } from '../hooks/useLiteratureMatches'

interface Props {
  finding: string
  matches: LiveMatch[] | undefined
  state: MatchState | undefined
  enabled: boolean
  onToggleEnabled: (v: boolean) => void
  onSearch: () => void
  batch: BatchProgress
  onRunBatch: () => void
  onStopBatch: () => void
  matchedCount: number
  uniqueFindings: number
  loop: LoopStatus
  loopOn: boolean
  onToggleLoop: (v: boolean) => void
}

function LicenceBadge({ license }: { license: string }) {
  const pure = license.toLowerCase().trim() === 'cc by'
  return (
    <span
      className={
        'shrink-0 rounded border px-1 py-px text-[8px] font-bold tracking-wider ' +
        (pure
          ? 'border-rr-green/40 bg-rr-green/10 text-rr-green'
          : 'border-rr-amber/40 bg-rr-amber/10 text-rr-amber')
      }
    >
      {license.toUpperCase()}
    </span>
  )
}

export default function LiteratureMatch({
  finding,
  matches,
  state,
  enabled,
  onToggleEnabled,
  onSearch,
  batch,
  onRunBatch,
  onStopBatch,
  matchedCount,
  uniqueFindings,
  loop,
  loopOn,
  onToggleLoop,
}: Props) {
  const [open, setOpen] = useState<LiveMatch | null>(null)

  return (
    <section className="border-b border-rr-line">
      <div className="flex items-center gap-1.5 px-3 py-1.5">
        <h3 className="text-[9px] font-bold tracking-[0.18em] text-rr-blue-lit uppercase">
          Live literature match
        </h3>
        <span className="rounded border border-rr-line bg-rr-raised px-1 py-px text-[8px] text-rr-dim tabular-nums">
          {matchedCount}/{uniqueFindings} findings
        </span>
        <button
          type="button"
          onClick={() => onToggleEnabled(!enabled)}
          className={
            'ml-auto rounded border px-1.5 py-0.5 text-[8px] font-bold tracking-wider transition-colors ' +
            (enabled
              ? 'border-rr-green/40 bg-rr-green/10 text-rr-green'
              : 'border-rr-line bg-rr-raised text-rr-dim')
          }
        >
          {enabled ? 'LIVE ON' : 'LIVE OFF'}
        </button>
      </div>

      <div className="px-3 pb-3">
        <div className="mb-2 rounded border border-rr-line bg-rr-raised px-2 py-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className={
                'h-1.5 w-1.5 shrink-0 rounded-full ' +
                (loop.running ? 'rr-lesion bg-rr-green' : 'bg-rr-dim')
              }
            />
            <span className="text-[9px] font-bold tracking-[0.12em] text-rr-text">
              BACKGROUND MATCHER
            </span>
            <button
              type="button"
              onClick={() => onToggleLoop(!loopOn)}
              className={
                'ml-auto rounded border px-1.5 py-0.5 text-[8px] font-bold tracking-wider transition-colors ' +
                (loopOn
                  ? 'border-rr-green/40 bg-rr-green/10 text-rr-green'
                  : 'border-rr-line text-rr-dim')
              }
            >
              {loopOn ? 'RUNNING' : 'PAUSED'}
            </button>
          </div>
          <div className="mt-1 h-1 w-full overflow-hidden rounded bg-rr-bg">
            <div
              className="h-full bg-rr-green transition-all"
              style={{
                width: `${loop.total ? (loop.complete / loop.total) * 100 : 0}%`,
              }}
            />
          </div>
          <p className="mt-1 text-[8px] text-rr-dim tabular-nums">
            {loop.complete}/{loop.total} findings at {TARGET_PER_CASE} figures &middot;{' '}
            {loop.started} started &middot; {loop.figures.toLocaleString()} figures held
          </p>
          {loop.blocked && (
            <p className="mt-1 rounded border border-rr-amber/40 bg-rr-amber/10 px-1.5 py-0.5 text-[8px] leading-snug text-rr-amber">
              Upstream is rate-limiting. Waiting it out and retrying — no results
              are being recorded as empty.
            </p>
          )}
          {loop.running && !loop.blocked && loop.current && (
            <p className="mt-0.5 truncate text-[8px] text-rr-dim">
              working: {loop.current}
            </p>
          )}
        </div>

        <p className="mb-2 rounded border border-rr-amber/30 bg-rr-amber/5 px-2 py-1 text-[9px] leading-snug text-rr-dim">
          <span className="font-bold text-rr-amber">Published literature.</span> These are
          real, separately published patients whose findings match this text. They are
          reference material, not this encounter&apos;s imaging.
        </p>

        {finding && (
          <p className="mb-2 truncate text-[9px] text-rr-dim">
            <span className="tracking-wider text-rr-blue-lit">QUERY:</span> {finding}
          </p>
        )}

        {!enabled ? (
          <p className="text-[10px] text-rr-dim">
            Live search is off. No external requests are made.
          </p>
        ) : (
          <>
            <div className="mb-2 flex gap-1">
              <button
                type="button"
                onClick={onSearch}
                disabled={state === 'loading' || batch.running}
                className="flex-1 rounded border border-rr-blue-lit/50 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold tracking-wider text-white transition-colors hover:border-rr-blue-lit disabled:opacity-40"
              >
                {state === 'loading' ? 'SEARCHING...' : 'MATCH THIS CASE'}
              </button>
              {batch.running ? (
                <button
                  type="button"
                  onClick={onStopBatch}
                  className="rounded border border-rr-red/50 bg-rr-red/15 px-2 py-1 text-[9px] font-bold tracking-wider text-rr-red"
                >
                  STOP
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onRunBatch}
                  className="rounded border border-rr-line bg-rr-raised px-2 py-1 text-[9px] font-bold tracking-wider text-rr-dim transition-colors hover:border-rr-dim hover:text-white"
                >
                  MATCH ALL IN VIEW
                </button>
              )}
            </div>

            {batch.running && (
              <div className="mb-2">
                <div className="h-1 w-full overflow-hidden rounded bg-rr-raised">
                  <div
                    className="h-full bg-rr-blue-lit transition-all"
                    style={{
                      width: `${batch.total ? (batch.done / batch.total) * 100 : 0}%`,
                    }}
                  />
                </div>
                <p className="mt-1 truncate text-[8px] text-rr-dim tabular-nums">
                  {batch.done}/{batch.total} &middot; {batch.current}
                </p>
              </div>
            )}

            {state === 'loading' && (
              <p className="text-[10px] text-rr-dim">Searching PubMed Central...</p>
            )}
            {state === 'empty' && (
              <p className="text-[10px] text-rr-dim">
                No open-access figure matched this finding.
              </p>
            )}
            {state === 'error' && (
              <p className="text-[10px] text-rr-red">
                Search failed. The public API may be unreachable.
              </p>
            )}

            {matches && matches.length > 0 && (
              <div className="flex flex-col gap-1.5">
                {matches
                  .filter((m) => m.url.startsWith('https://') && !/wikipedia/i.test(m.journal || '') && !isNonRadiologic(`${m.title} ${m.caption}`))
                  .map((m) => (
                  <button
                    key={m.url}
                    type="button"
                    onClick={() => setOpen(m)}
                    className="flex gap-2 rounded border border-rr-line bg-rr-raised p-1.5 text-left transition-colors hover:border-rr-blue-lit"
                  >
                    <img
                      src={m.url}
                      alt=""
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded border border-rr-line bg-black object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <LicenceBadge license={m.license} />
                        <span className="text-[8px] text-rr-dim tabular-nums">
                          {m.pmcid}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-rr-text">
                        {m.caption}
                      </p>
                      <p className="mt-0.5 truncate text-[8px] text-rr-dim">
                        {matchCredit(m)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded border border-rr-line bg-rr-panel"
          >
            <div className="flex items-center gap-2 border-b border-rr-line px-3 py-2">
              <span className="text-[11px] font-bold tracking-[0.14em] text-white">
                PUBLISHED REFERENCE FIGURE
              </span>
              <LicenceBadge license={open.license} />
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="ml-auto rounded border border-rr-line px-2 py-1 text-[10px] font-bold text-rr-dim hover:text-white"
              >
                CLOSE
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <img src={open.url} alt="" className="max-h-[60vh] w-full object-contain" />
              <div className="border-t border-rr-line px-3 py-2">
                <p className="text-[10px] leading-snug text-rr-text">{open.caption}</p>
                <p className="mt-2 text-[9px] leading-snug text-rr-dim">
                  <span className="text-rr-text">{open.title}</span>
                  <br />
                  {open.authors}
                  <br />
                  {open.journal} {open.year} &middot; {open.pmcid} &middot; doi:
                  {open.doi} &middot; {open.license.toUpperCase()}
                </p>
                <p className="mt-1 text-[9px] text-rr-amber">
                  Separately published patient. Not the imaging of this encounter.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
