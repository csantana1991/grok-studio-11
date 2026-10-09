import { useEffect, useMemo, useRef, useState } from 'react'
import { IMAGE_SOURCES } from '../data/imageSources'
import { queryLadder } from '../data/queryLadder'

interface Props {
  open: boolean
  onClose: () => void
  finding: string
  categoryId?: string
  /** Run the in-app fetch (PubMed Central) for this encounter. */
  categoryLabel?: string
  onFetchMore: () => void
  fetching?: boolean
}

/**
 * The "+" cascade: add more imagery for this encounter.
 *
 * Sources are shown with what they can actually do. Only PubMed Central can be
 * fetched into the rotation; the rest open their own search pre-filled for this
 * case, because they either have no usable API or licence terms that do not
 * permit redistributing their images here. Saying so on the button is better
 * than a control that appears to fetch and quietly does nothing.
 */
export default function SourcePicker({
  open,
  onClose,
  finding,
  categoryId,
  categoryLabel,
  onFetchMore,
  fetching,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // Narrow-to-broad queries. Sending the whole finding line returns nothing on
  // most image engines, so the ladder starts trimmed and can be widened.
  const ladder = useMemo(() => queryLadder(finding, categoryLabel), [finding, categoryLabel])
  const [rung, setRung] = useState(0)
  useEffect(() => setRung(0), [finding])
  const terms = ladder[Math.min(rung, ladder.length - 1)]?.terms ?? finding

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className="absolute top-full left-0 z-40 mt-1 w-[26rem] rounded border border-rr-line bg-rr-panel p-2 shadow-2xl"
    >
      <p className="px-1 pb-1 text-[9px] font-bold tracking-[0.16em] text-rr-blue-lit uppercase">
        Add images for this case
      </p>
      <p className="mb-1 px-1 text-[8px] tracking-[0.14em] text-rr-dim uppercase">
        Query &middot; narrow to broad
      </p>
      <div className="mb-2 flex flex-wrap gap-1 px-1">
        {ladder.map((r, i) => (
          <button
            key={r.terms}
            type="button"
            onClick={() => setRung(i)}
            title={r.label}
            className={
              'rounded border px-1.5 py-0.5 text-[9px] transition-colors ' +
              (i === rung
                ? 'border-rr-blue-lit bg-rr-blue/25 text-white'
                : 'border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
            }
          >
            {r.terms}
          </button>
        ))}
      </div>
      <p className="mb-2 px-1 text-[8px] text-rr-dim">
        {ladder[Math.min(rung, ladder.length - 1)]?.label} &middot; if a site returns
        nothing, pick a broader term
      </p>

      <button
        type="button"
        onClick={() => {
          onFetchMore()
          onClose()
        }}
        disabled={fetching}
        className="mb-2 flex w-full items-center gap-2 rounded border border-rr-green/50 bg-rr-green/10 px-2 py-1.5 text-left transition-colors hover:border-rr-green disabled:opacity-50"
      >
        <span className="rounded bg-rr-green px-1 py-px text-[8px] font-bold text-black">
          FETCH
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-bold text-white">
            {fetching ? 'Searching PubMed Central...' : 'Search PubMed Central again'}
          </span>
          <span className="block text-[8px] text-rr-dim">
            Adds verified figures straight into the match rotation
          </span>
        </span>
      </button>

      <p className="px-1 pb-1 text-[8px] tracking-[0.14em] text-rr-dim uppercase">
        Open elsewhere &middot; searches this case
      </p>
      <div className="flex flex-col gap-1">
        {IMAGE_SOURCES.filter((s) => s.kind === 'link').map((s) => (
          <a
            key={s.id}
            href={s.url(terms, categoryId)}
            target="_blank"
            rel="noreferrer noopener"
            onClick={onClose}
            className="flex items-start gap-2 rounded border border-rr-line bg-rr-raised px-2 py-1.5 transition-colors hover:border-rr-blue-lit"
          >
            <span className="mt-px rounded border border-rr-line px-1 py-px text-[8px] font-bold text-rr-dim">
              LINK
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold text-rr-text">
                {s.name} ↗
              </span>
              <span className="block text-[8px] leading-snug text-rr-dim">{s.note}</span>
              {s.reason && (
                <span className="mt-0.5 block text-[8px] leading-snug text-rr-amber">
                  Not fetched: {s.reason}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
