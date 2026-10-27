import {
  CATEGORIES,
  GROUP_1_TOTAL,
  GROUP_2_TOTAL,
  GRAND_TOTAL,
  type Category,
} from '../data/categories'

interface Props {
  active: string
  onSelect: (id: string) => void
  counts: Record<string, number>
  mountedCount: number
  totalImages: number
  onOpenMount: () => void
  nucleusCount: number
  onOpenNucleus: () => void
  reviewedCount: number
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

function Tile({
  cat,
  active,
  onSelect,
  live,
}: {
  cat: Category
  active: boolean
  onSelect: (id: string) => void
  live: number
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(cat.id)}
      title={`Filter to ${cat.label} - ${cat.count.toLocaleString()} encounters`}
      className={
        'group relative flex min-w-0 flex-col items-start gap-0.5 rounded border px-2 py-1.5 text-left transition-colors ' +
        (active
          ? 'border-rr-blue-lit bg-rr-blue/20'
          : 'border-rr-line bg-rr-raised hover:border-rr-dim hover:bg-[#1c1c22]')
      }
    >
      <span
        className="absolute top-0 left-0 h-full w-[2px] rounded-l"
        style={{ background: cat.accent, opacity: active ? 1 : 0.5 }}
      />
      <span className="truncate pl-1 text-[9px] tracking-[0.14em] text-rr-dim uppercase">
        {cat.pill}
      </span>
      <span
        className="pl-1 text-[15px] leading-none font-bold tabular-nums"
        style={{ color: active ? '#fff' : cat.accent }}
      >
        {cat.count.toLocaleString()}
      </span>
      <span className="pl-1 text-[8px] tabular-nums text-rr-dim">
        {live.toLocaleString()} in view
      </span>
    </button>
  )
}

export default function Header({
  active,
  onSelect,
  counts,
  mountedCount,
  totalImages,
  onOpenMount,
  nucleusCount,
  onOpenNucleus,
  reviewedCount,
  totalEncounters,
  pendingReview,
  onOpenReview,
}: Props) {
  const g1 = CATEGORIES.filter((c) => c.group === 1)
  const g2 = CATEGORIES.filter((c) => c.group === 2)

  return (
    <header className="shrink-0 border-b border-rr-line bg-rr-panel">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-rr-blue-lit bg-rr-blue/25 text-[15px] font-bold tracking-tight text-rr-blue-lit">
          RR
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-[13px] font-bold tracking-[0.1em] text-white">
            RAD REVIEW ULTIMATE
            <span className="mx-2 text-rr-dim">|</span>
            <span className="text-rr-blue-lit">33K ENCOUNTERS</span>
            <span className="mx-2 text-rr-dim">|</span>
            <span className="text-rr-text">Residency Log</span>
          </h1>
          <p className="truncate text-[9px] tracking-[0.18em] text-rr-dim uppercase">
            Full Edition &middot; Head-to-Toe PET/CT Workstation &middot; Station-matched images
          </p>
        </div>

        <div className="ml-auto flex shrink-0 flex-wrap items-center justify-end gap-1.5">
          <a
            href={STUDIO_URL}
            title="Exit to NucMed Board Studio"
            className="flex items-center gap-1 rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-rr-blue-lit transition-colors hover:bg-rr-blue/40"
          >
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-rr-blue-lit text-[7px] font-bold text-black">
              S
            </span>
            EXIT TO STUDIO
          </a>

          <button
            type="button"
            onClick={onOpenNucleus}
            title="Open the Nucleus Board Academy case explorer"
            className="flex items-center gap-1 rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-rr-blue-lit transition-colors hover:bg-rr-blue/40"
          >
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-rr-blue-lit text-[7px] font-bold text-black">
              N
            </span>
            {nucleusCount.toLocaleString()} NUCLEUS
          </button>

          <button
            type="button"
            onClick={onOpenReview}
            title="Image QA agent — every case-to-image connection it validated, and the exceptions it could not resolve"
            className={
              'rounded border px-2 py-1 text-[9px] font-bold tracking-[0.12em] transition-colors ' +
              (pendingReview > 0
                ? 'border-rr-amber/50 bg-rr-amber/10 text-rr-amber hover:border-rr-amber'
                : 'border-rr-green/40 bg-rr-green/10 text-rr-green hover:border-rr-green')
            }
          >
            IMAGE QA {reviewedCount.toLocaleString()}/{totalEncounters.toLocaleString()}
            {pendingReview > 0 ? ` · ${pendingReview.toLocaleString()} need a look` : ' · clear'}
          </button>

          <button
            type="button"
            onClick={onOpenMount}
            title="Mount the six real PET/CT source images"
            className={
              'rounded border px-2 py-1 text-[9px] font-bold tracking-[0.12em] transition-colors ' +
              (mountedCount === totalImages
                ? 'border-rr-green/40 bg-rr-green/10 text-rr-green hover:border-rr-green'
                : 'border-rr-amber/50 bg-rr-amber/10 text-rr-amber hover:border-rr-amber')
            }
          >
            IMAGES {mountedCount}/{totalImages}
          </button>
          <span className="rounded border border-rr-green/40 bg-rr-green/10 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-rr-green">
            ACGME IV.C.4 COMPLIANT
          </span>
          <span className="rounded border border-rr-blue-lit/40 bg-rr-blue/15 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-rr-blue-lit">
            ABR CORE READY
          </span>
        </div>
      </div>

      <div className="flex items-stretch gap-2 overflow-x-auto border-t border-rr-line px-3 py-2">
        <button
          type="button"
          onClick={() => onSelect('ALL')}
          className={
            'flex shrink-0 flex-col justify-center rounded border px-3 py-1.5 transition-colors ' +
            (active === 'ALL'
              ? 'border-rr-blue-lit bg-rr-blue/25'
              : 'border-rr-line bg-rr-raised hover:border-rr-dim')
          }
        >
          <span className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">
            All encounters
          </span>
          <span className="text-[17px] leading-none font-bold text-white tabular-nums">
            {GRAND_TOTAL.toLocaleString()}
          </span>
        </button>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-[9px] tracking-[0.16em] text-rr-dim uppercase">
              Group 1
            </span>
            <span className="text-[10px] font-bold text-rr-text tabular-nums">
              {GROUP_1_TOTAL.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {g1.map((c) => (
              <Tile
                key={c.id}
                cat={c}
                active={active === c.id}
                onSelect={onSelect}
                live={counts[c.id] ?? 0}
              />
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-[1.75]">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-[9px] tracking-[0.16em] text-rr-dim uppercase">
              Group 2
            </span>
            <span className="text-[10px] font-bold text-rr-text tabular-nums">
              {GROUP_2_TOTAL.toLocaleString()}
            </span>
          </div>
          <div className="grid min-w-[28rem] grid-cols-7 gap-1.5">
            {g2.map((c) => (
              <Tile
                key={c.id}
                cat={c}
                active={active === c.id}
                onSelect={onSelect}
                live={counts[c.id] ?? 0}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
