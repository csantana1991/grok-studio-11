import { useEffect, useMemo, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { LiveMatch } from '../data/liveMatch'
import type { QaRecord } from '../data/qa/types'
import type { QaSummary } from '../data/qa/engine'
import type { FeedbackModel, Verdict } from '../data/feedback'
import type { PageAudit } from '../hooks/usePageImageAudit'

interface Props {
  open: boolean
  onClose: () => void
  summary: QaSummary
  records: QaRecord[]
  exceptions: QaRecord[]
  usable: QaRecord[]
  blocked: QaRecord[]
  caseById: Map<string, Encounter>
  chosen: Map<string, LiveMatch>
  progress: { done: number; total: number }
  running: boolean
  probed: number
  /** What is actually rendered on the page right now. */
  pageAudit: PageAudit
  model: FeedbackModel
  onJudge: (url: string, v: Verdict, finding: string, stationId: string) => void
  onOpenCase: (caseId: string) => void
  onRevalidate: () => void
}

type Tab = 'needs-look' | 'auto-approved' | 'blocked' | 'decided'

const PAGE = 120

/**
 * THE QA CONSOLE.
 *
 * Deliberately NOT a queue of every image. The agent validates all 33,000
 * connections itself and locks the ones that pass; what shows here is the
 * aggregate result plus the exceptions it could not resolve. The reader works
 * through the exceptions, not the library.
 */
export default function QaConsole({
  open,
  onClose,
  summary,
  records,
  exceptions,
  usable,
  blocked,
  caseById,
  chosen,
  progress,
  running,
  probed,
  pageAudit,
  model,
  onJudge,
  onOpenCase,
  onRevalidate,
}: Props) {
  const [tab, setTab] = useState<Tab>('needs-look')
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // A rejected record still carries the URL it refused, so "has an image" is
  // not the same as "approved". Only usable statuses belong here.
  const approved = usable
  const decided = useMemo(
    () => records.filter((r) => r.imageUrl && model.byUrl[r.imageUrl]),
    [records, model],
  )

  if (!open) return null

  const list =
    tab === 'needs-look'
      ? exceptions
      : tab === 'decided'
        ? decided
        : tab === 'blocked'
          ? blocked
          : approved
  const shown = list.slice(page * PAGE, page * PAGE + PAGE)
  const pages = Math.ceil(list.length / PAGE)
  const rate = (summary.autoApprovalRate * 100).toFixed(2)

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-rr-bg">
      <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-rr-line bg-rr-panel px-3 py-2">
        <span className="text-[12px] font-bold tracking-[0.14em] text-white">IMAGE QA AGENT</span>
        <span
          className={
            'rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider ' +
            (running
              ? 'border-rr-amber bg-rr-amber/15 text-rr-amber'
              : 'border-rr-green bg-rr-green/15 text-rr-green')
          }
        >
          {running
            ? `VALIDATING ${progress.done.toLocaleString()}/${progress.total.toLocaleString()}`
            : `${progress.total.toLocaleString()} VALIDATED`}
        </span>
        {(
          [
            ['needs-look', `Needs a look ${exceptions.length.toLocaleString()}`, 'text-rr-amber'],
            ['auto-approved', `Auto approved ${approved.length.toLocaleString()}`, 'text-rr-green'],
            ['blocked', `Flagged on screen ${blocked.length.toLocaleString()}`, 'text-rr-red'],
            ['decided', `You decided ${decided.length.toLocaleString()}`, 'text-rr-blue-lit'],
          ] as [Tab, string, string][]
        ).map(([t, label, colour]) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t)
              setPage(0)
            }}
            className={
              'rounded border px-2 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
              (tab === t
                ? 'border-rr-blue-lit bg-rr-blue/25 text-white'
                : `border-rr-line bg-rr-raised ${colour} hover:border-rr-dim`)
            }
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          onClick={onRevalidate}
          title="Discard every locked connection and validate all 33,000 again"
          className="rounded border border-rr-line px-2 py-1 text-[9px] font-bold tracking-wider text-rr-dim hover:border-rr-amber hover:text-rr-amber"
        >
          REVALIDATE ALL
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded border border-rr-line px-2 py-1 text-[10px] font-bold tracking-wider text-rr-dim hover:border-rr-dim hover:text-white"
        >
          CLOSE (ESC)
        </button>
      </div>

      <Report
        summary={summary}
        rate={rate}
        probed={probed}
        exceptions={exceptions.length}
        pageAudit={pageAudit}
      />

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {!shown.length && (
          <p className="text-[11px] text-rr-dim">
            {tab === 'needs-look'
              ? 'Nothing needs a look. Every connection the agent could reach was resolved automatically.'
              : tab === 'blocked'
                ? 'Every case is showing a validated figure.'
                : 'Nothing here yet.'}
          </p>
        )}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] gap-2">
          {shown.map((r) => {
            const c = caseById.get(r.caseId)
            const img = r.imageUrl ?? chosen.get(r.caseId)?.url
            const human = img ? model.byUrl[img]?.verdict : undefined
            return (
              <div
                key={r.caseId}
                className="flex flex-col gap-1 rounded border border-rr-line bg-rr-panel p-2"
              >
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onOpenCase(r.caseId)}
                    className="text-[9px] font-bold text-rr-blue-lit tabular-nums hover:underline"
                  >
                    {r.caseId}
                  </button>
                  {c && (
                    <span className="rounded border border-rr-line px-1 py-px text-[8px] text-rr-dim">
                      {c.age}
                      {c.sex}
                    </span>
                  )}
                  <StatusChip status={r.status} />
                  <span className="ml-auto rounded bg-rr-raised px-1 py-px text-[8px] font-bold text-rr-text tabular-nums">
                    {(r.consensus * 100).toFixed(0)}%
                  </span>
                </div>

                <p className="truncate text-[10px] text-rr-text">{c?.finding ?? r.caseId}</p>

                {img ? (
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-32 w-full rounded border border-rr-line bg-black object-contain"
                  />
                ) : (
                  <div className="flex h-32 w-full items-center justify-center rounded border border-dashed border-rr-line bg-black text-[9px] text-rr-dim">
                    no validated image available
                  </div>
                )}

                <dl className="grid grid-cols-2 gap-x-2 text-[8px] leading-tight text-rr-dim">
                  <Field
                    label="region"
                    want={r.expectedStation.replace('_', ' ')}
                    got={r.detectedStation?.replace('_', ' ') ?? 'not stated'}
                  />
                  <Field
                    label="modality"
                    want={r.expectedModality ?? 'any'}
                    got={r.detectedModality ?? 'not stated'}
                  />
                </dl>

                <p className="line-clamp-3 text-[8px] leading-snug text-rr-amber">
                  {r.reasons.slice(0, 3).join(' · ')}
                </p>
                <p className="text-[8px] text-rr-dim">contents unverified — no pixel check</p>

                {img && (
                  <div className="mt-auto flex gap-1 pt-1">
                    <button
                      type="button"
                      onClick={() => c && onJudge(img, 'approved', c.finding, c.stationId)}
                      className={
                        'flex-1 rounded border px-1.5 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
                        (human === 'approved'
                          ? 'border-rr-green bg-rr-green/25 text-rr-green'
                          : 'border-rr-line text-rr-dim hover:border-rr-green hover:text-rr-green')
                      }
                    >
                      ✓ APPROVE
                    </button>
                    <button
                      type="button"
                      onClick={() => c && onJudge(img, 'rejected', c.finding, c.stationId)}
                      className={
                        'flex-1 rounded border px-1.5 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
                        (human === 'rejected'
                          ? 'border-rr-red bg-rr-red/25 text-rr-red'
                          : 'border-rr-line text-rr-dim hover:border-rr-red hover:text-rr-red')
                      }
                    >
                      ✗ DENY
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenCase(r.caseId)}
                      title="Open the case and pick a different figure"
                      className="flex-1 rounded border border-rr-line px-1.5 py-1 text-[9px] font-bold tracking-wider text-rr-dim hover:border-rr-blue-lit hover:text-rr-blue-lit"
                    >
                      ⟳ REPLACE
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {pages > 1 && (
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="rounded border border-rr-line px-2 py-1 text-[9px] font-bold text-rr-dim disabled:opacity-30"
            >
              PREV
            </button>
            <span className="text-[9px] text-rr-dim tabular-nums">
              {page + 1} / {pages}
            </span>
            <button
              type="button"
              disabled={page >= pages - 1}
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
              className="rounded border border-rr-line px-2 py-1 text-[9px] font-bold text-rr-dim disabled:opacity-30"
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Report({
  summary,
  rate,
  probed,
  exceptions,
  pageAudit,
}: {
  summary: QaSummary
  rate: string
  probed: number
  exceptions: number
  pageAudit: PageAudit
}) {
  const rows: [string, string][] = [
    ['Connections validated', summary.cases.toLocaleString()],
    ['Distinct images', summary.images.toLocaleString()],
    ['Auto approved', (summary.approved + summary.approvedWithWarning).toLocaleString()],
    ['Auto repaired / replaced', summary.replaced.toLocaleString()],
    ['Rejected outright', summary.rejected.toLocaleString()],
    ['Quarantined', summary.quarantined.toLocaleString()],
    ['No figure sourced yet', summary.sourceUnavailable.toLocaleString()],
    ['Flagged, shown with a banner', summary.rejected.toLocaleString()],
    ['Needs a look', exceptions.toLocaleString()],
    ['Auto-approval rate', `${rate}%`],
    ['Wrong body part caught', summary.anatomyMismatches.toLocaleString()],
    ['Wrong modality caught', summary.modalityMismatches.toLocaleString()],
    ['Laterality conflicts caught', summary.lateralityConflicts.toLocaleString()],
    ['Broken files caught', summary.brokenImages.toLocaleString()],
    ['Files fetched and decoded', probed.toLocaleString()],
    ['Images rendered on page', pageAudit.total.toLocaleString()],
    ['Rendering faults now', pageAudit.faults.length.toLocaleString()],
  ]
  return (
    <div className="shrink-0 border-b border-rr-line bg-rr-raised px-3 py-2">
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 sm:grid-cols-4 lg:grid-cols-7">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-2">
            <span className="truncate text-[8px] uppercase tracking-wider text-rr-dim">{k}</span>
            <span className="text-[10px] font-bold text-white tabular-nums">{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-1 text-[8px] leading-snug text-rr-dim">
        <span className="font-bold text-rr-text">Ordering: </span>
        each case opens on its highest-ranked figure — usable ones always lead. A case
        whose every candidate was refused still shows the closest one, under a red banner,
        rather than an empty frame; the ranking is deterministic, so the same case opens on
        the same image every time.
      </p>
      {pageAudit.faults.length > 0 && (
        <p className="mt-1 text-[8px] leading-snug text-rr-red">
          <span className="font-bold">Rendering: </span>
          {pageAudit.faults
            .slice(0, 4)
            .map((f) => `${f.where}: ${f.problem}`)
            .join(' · ')}
          {pageAudit.faults.length > 4 ? ` · +${pageAudit.faults.length - 4} more` : ''}
        </p>
      )}
      <p className="mt-1.5 text-[8px] leading-snug text-rr-dim">
        <span className="font-bold text-rr-amber">Every check here reads text, not pixels.</span>{' '}
        Region, modality, laterality, age, sex and wording are compared across the caption, the
        article title, the file name and the case itself, and the file is fetched to confirm it
        decodes. Nothing has looked at what the image actually depicts, so no record claims visual
        confirmation.
      </p>
    </div>
  )
}

function StatusChip({ status }: { status: QaRecord['status'] }) {
  const colour =
    status === 'APPROVED'
      ? 'bg-rr-green/20 text-rr-green'
      : status === 'REPLACED' || status === 'AUTO_REPAIRED'
        ? 'bg-rr-blue/25 text-rr-blue-lit'
        : status === 'APPROVED_WITH_WARNING'
          ? 'bg-rr-amber/15 text-rr-amber'
          : status === 'QUARANTINED' || status === 'REJECTED'
            ? 'bg-rr-red/20 text-rr-red'
            : 'bg-rr-amber/20 text-rr-amber'
  return (
    <span className={`rounded px-1 py-px text-[8px] font-bold ${colour}`}>
      {status.replace(/_/g, ' ')}
    </span>
  )
}

function Field({ label, want, got }: { label: string; want: string; got: string }) {
  const agrees = want.toLowerCase() === got.toLowerCase()
  return (
    <div className="truncate">
      <span className="uppercase tracking-wider">{label} </span>
      <span className={agrees ? 'text-rr-green' : 'text-rr-text'}>{want}</span>
      <span className="text-rr-dim"> → {got}</span>
    </div>
  )
}
