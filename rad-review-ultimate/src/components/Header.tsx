import {
  CATEGORIES,
  GRAND_TOTAL,
  type Category,
} from '../data/categories'

interface Props {
  active: string
  onSelect: (id: string) => void
  counts: Record<string, number>
  /** Result total for the ALL chip. Catalog size when no search is active. */
  allCount?: number
  mountedCount: number
  totalImages: number
  onOpenMount: () => void
  nucleusCount: number
  onOpenNucleus: () => void
  reviewedCount: number
  /** Verdicts a person actually clicked. Separate from the automatic sweep. */
  humanReviewed?: number
  totalEncounters: number
  pendingReview: number
  onOpenReview: () => void
}

/**
 * Standalone companion app, served from public/studio/ and opened in its own
 * tab. Deliberately a plain link: it shares no state with the workstation and
 * is not meant to, so nothing here reaches into RAD Review's data or vice
 * versa.
 */
const STUDIO_URL = '/studio/NucMed-Board-Studio.html'

function Chip({
  label,
  count,
  accent,
  active,
  onClick,
}: {
  label: string
  count: number
  accent: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`Filter to ${label}`}
      className={
        'flex shrink-0 items-center gap-1 rounded border px-2 py-1 text-[10px] font-bold whitespace-nowrap ' +
        (active ? 'border-rr-blue-lit bg-rr-blue/25 text-white' : 'border-rr-line bg-rr-raised text-rr-dim')
      }
    >
      <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
      {label}
      <span className="tabular-nums text-white">{count.toLocaleString()}</span>
    </button>
  )
}

export default function Header({
  active,
  onSelect,
  counts,
  allCount = GRAND_TOTAL,
  mountedCount,
  totalImages,
  onOpenMount,
  nucleusCount,
  onOpenNucleus,
  reviewedCount,
  humanReviewed = 0,
  totalEncounters,
  pendingReview,
  onOpenReview,
}: Props) {
  return (
    <header className="shrink-0 border-b border-rr-line bg-rr-panel">
      <div className="flex items-center gap-2 px-2 py-1">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-rr-blue-lit bg-rr-blue/25 text-[13px] font-bold text-rr-blue-lit">
          RR
        </div>
        <h1 className="shrink-0 text-[12px] font-bold tracking-[0.08em] whitespace-nowrap text-white">
          RAD REVIEW ULTIMATE
          <span className="mx-1.5 text-rr-dim">|</span>
          <span className="text-rr-text">Image library</span>
        </h1>
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-0.5">
          <Chip
            label="ALL"
            count={allCount}
            accent="#60a5fa"
            active={active === 'ALL'}
            onClick={() => onSelect('ALL')}
          />
          {CATEGORIES.map((c: Category) => (
            <Chip
              key={c.id}
              label={c.pill}
              count={counts[c.id] ?? 0}
              accent={c.accent}
              active={active === c.id}
              onClick={() => onSelect(c.id)}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <a
            href={STUDIO_URL}
            title="Exit to NucMed Board Studio"
            className="rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold text-rr-blue-lit"
          >
            EXIT
          </a>
          <button
            type="button"
            onClick={onOpenNucleus}
            className="rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold text-rr-blue-lit"
          >
            {nucleusCount.toLocaleString()} NUCLEUS
          </button>
          <button
            type="button"
            onClick={onOpenReview}
            title={`Automatic check ${reviewedCount.toLocaleString()} of ${totalEncounters.toLocaleString()}. ${pendingReview.toLocaleString()} flagged. A person approved or rejected ${humanReviewed.toLocaleString()}.`}
            className="rounded border border-rr-line px-2 py-1 text-[9px] font-bold text-rr-dim"
          >
            AUTO {reviewedCount.toLocaleString()} · YOU {humanReviewed.toLocaleString()}
          </button>
          <button
            type="button"
            onClick={onOpenMount}
            className="rounded border border-rr-line px-2 py-1 text-[9px] font-bold text-rr-dim"
          >
            IMAGES {mountedCount}/{totalImages}
          </button>
        </div>
      </div>
    </header>
  )
}
