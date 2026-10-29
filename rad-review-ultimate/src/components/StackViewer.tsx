import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  buildAtlasStack,
  buildSeriesStack,
  stackCoverage,
} from '../data/buildStack'
import type { NucleusStudy } from '../data/nucleus'
import { formatSlice, MAX_SLICE } from '../data/stations'
import type { LiveMatch } from '../data/liveMatch'
import type { Encounter } from '../data/generateCases'

interface Props {
  open: boolean
  onClose: () => void
  encounter: Encounter | null
  matches: LiveMatch[]
  /** Nucleus studies matched to this encounter, best first. */
  studies?: NucleusStudy[]
}

/**
 * 120-position multiplanar stack, scrolled like a PACS series.
 *
 * Every frame is a real image or an explicit gap. Nothing here is synthesised:
 * a generated CT of a finding that was never imaged would be a fabricated
 * medical image, which is the one thing this workstation must never show.
 */
export default function StackViewer({
  open,
  onClose,
  encounter,
  matches,
  studies = [],
}: Props) {
  void matches
  const [pos, setPos] = useState(0)
  const [studyIdx, setStudyIdx] = useState(0)
  // 'series' scrolls one real acquisition; 'atlas' walks the whole body.
  const [source, setSource] = useState<'series' | 'atlas'>('series')
  const frameRef = useRef<HTMLDivElement>(null)

  const study = studies[Math.min(studyIdx, Math.max(0, studies.length - 1))]
  const realImages = useMemo(
    () => (study?.images || []).filter((im) => im.url && !im.url.startsWith('/nucleus/')),
    [study],
  )
  const useSeries = source === 'series' && realImages.length > 1

  const stack = useMemo(
    () =>
      useSeries && study
        ? buildSeriesStack({ ...study, images: realImages })
        : buildAtlasStack(),
    [useSeries, study, realImages],
  )
  const coverage = useMemo(() => stackCoverage(stack), [stack])
  const slice = stack[Math.min(pos, Math.max(0, stack.length - 1))]
  const [dead, setDead] = useState<Record<string, boolean>>({})
  const remote = slice?.url && !dead[slice.url] ? slice.url : null
  const shown = useSeries ? remote : remote || null

  // Open at the encounter's own level rather than at the vertex.
  useEffect(() => {
    if (!open || !encounter) return
    // A real series is scrolled from its first slice; the head-to-toe stack
    // opens at the encounter's own level.
    setPos(useSeries ? 0 : Math.min(MAX_SLICE, Math.max(0, encounter.slice)))
  }, [open, encounter, useSeries])

  useEffect(() => {
    // Default to a real acquisition whenever one is matched.
    if (open) setSource(realImages.length > 1 ? 'series' : 'atlas')
  }, [open, realImages.length])

  const step = useCallback(
    (d: number) => {
      setPos((p) => Math.max(0, Math.min(stack.length - 1, p + d)))
    },
    [stack.length],
  )

  // Scroll wheel scrubs the stack, as in a real reading workstation.
  useEffect(() => {
    if (!open) return
    const el = frameRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      step(e.deltaY > 0 ? 1 : -1)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [open, step])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        step(1)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        step(-1)
      } else if (e.key === 'PageDown') {
        e.preventDefault()
        step(10)
      } else if (e.key === 'PageUp') {
        e.preventDefault()
        step(-10)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, step])

  if (!open || !encounter || !slice) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      {/* Study header */}
      <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-rr-line bg-rr-panel px-3 py-1.5">
        <span className="text-[11px] font-bold tracking-[0.16em] text-white">
          {useSeries ? `SERIES · ${stack.length}` : `ATLAS 0–${MAX_SLICE}`}
        </span>
        <span className="rounded border border-rr-line bg-rr-raised px-1.5 py-0.5 text-[10px] font-bold text-rr-text tabular-nums">
          {encounter.accession}
        </span>
        <span className="max-w-md truncate text-[10px] text-[#ffe14a]">
          {useSeries
            ? 'Matched series. Not padded, and not the 0–100 atlas.'
            : 'Head-to-toe atlas. Same 0–100 scale as the slider. Not this case’s DICOM stack.'}{' '}
          {encounter.finding}
        </span>

        {studies.length > 0 && (
          <div className="ml-2 flex gap-1">
            <button
              type="button"
              onClick={() => setSource(useSeries ? 'atlas' : 'series')}
              className={
                'rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider transition-colors ' +
                (useSeries
                  ? 'border-rr-green/50 bg-rr-green/10 text-rr-green'
                  : 'border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
              }
            >
              {useSeries ? 'STUDY SERIES' : 'HEAD-TO-TOE'}
            </button>
            {studies.length > 1 && useSeries && (
              <button
                type="button"
                onClick={() => {
                  setStudyIdx((i) => (i + 1) % studies.length)
                  setPos(0)
                }}
                className="rounded border border-rr-line bg-rr-raised px-2 py-0.5 text-[9px] font-bold tracking-wider text-rr-dim hover:border-rr-dim"
              >
                NEXT SERIES {studyIdx + 1}/{studies.length}
              </button>
            )}
          </div>
        )}

        <div className="ml-2 flex gap-1">
          <span className="rounded border border-rr-line bg-rr-raised px-2 py-0.5 text-[9px] font-bold tracking-wider text-rr-dim">
            {useSeries ? 'PLANE FOLLOWS THIS SERIES' : 'ATLAS USES EACH STATION’S PLANE'}
          </span>
        </div>

        <span className="rounded border border-rr-line bg-rr-raised px-1.5 py-0.5 text-[10px] font-bold text-rr-text tabular-nums">
          {useSeries ? `frame ${slice.index} of ${stack.length}` : `atlas ${formatSlice(slice.level)} / ${MAX_SLICE}`}
        </span>
        <span className="rounded border border-rr-blue-lit/40 bg-rr-blue/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-rr-blue-lit">
          {slice.station.name}
        </span>
        <span className="text-[9px] text-rr-dim tabular-nums">
          LEVEL {formatSlice(slice.level)}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded border border-rr-line px-2 py-1 text-[10px] font-bold tracking-wider text-rr-dim hover:border-rr-dim hover:text-white"
        >
          CLOSE (ESC)
        </button>
      </div>

      {/* Frame */}
      <div className="flex min-h-0 flex-1">
        <div
          ref={frameRef}
          className="relative min-w-0 flex-1 cursor-ns-resize bg-black select-none"
        >
          {shown ? (
            <img
              key={shown}
              src={shown}
              alt=""
              draggable={false}
              onError={() => {
                if (slice?.url) setDead((d) => (d[slice.url!] ? d : { ...d, [slice.url!]: true }))
              }}
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center">
              <span className="rounded border border-rr-amber/50 bg-rr-amber/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-rr-amber">
                NO IMAGE AT THIS LEVEL
              </span>
              <p className="max-w-md text-[10px] leading-relaxed text-rr-dim">
                {slice.label}. This position is left empty on purpose — a
                synthesised frame here would be a fabricated medical image.
              </p>
            </div>
          )}

          <div className="rr-grid pointer-events-none absolute inset-0 opacity-60" />

          {/* Source banner */}
          <div
            className={
              'pointer-events-none absolute top-2 left-2 rounded border bg-black/80 px-2 py-0.5 text-[9px] font-bold tracking-wider ' +
              (slice.source === 'series'
                ? 'border-rr-green/60 text-rr-green'
                : slice.source === 'literature'
                  ? 'border-rr-green/50 text-rr-green'
                  : slice.source === 'atlas'
                    ? 'border-rr-blue-lit/50 text-rr-blue-lit'
                    : 'border-rr-amber/50 text-rr-amber')
            }
          >
            {slice.source === 'series'
              ? `ACQUIRED SERIES · ${study?.modality || ''} · ${study?.collection || ''}`.trim()
              : slice.source === 'literature'
                ? 'PUBLISHED FIGURE'
                : slice.source === 'atlas'
                  ? 'STATION ATLAS'
                  : 'NO IMAGE'}
          </div>

          {useSeries && study && (
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 bg-black/75 px-2 py-1 text-[8px] leading-tight text-rr-dim">
              <span className="text-rr-text">{study.title}</span>
              {study.source ? ` — ${study.source}` : ''}
              {study.license ? ` · ${study.license}` : ''}
            </div>
          )}

          {slice.match && (
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 bg-black/75 px-2 py-1 text-[8px] leading-tight text-rr-dim">
              <span className="text-rr-text">{slice.label}</span>
              {' — '}
              {slice.match.authors.split(',')[0]} et al., {slice.match.journal}{' '}
              {slice.match.year} · {slice.match.license.toUpperCase()} ·{' '}
              {slice.match.pmcid}
            </div>
          )}
        </div>

        {/* Scrub rail */}
        <div className="flex w-56 shrink-0 flex-col border-l border-rr-line bg-rr-panel p-3">
          <p className="mb-1 text-[9px] font-bold tracking-[0.16em] text-rr-dim uppercase">
            {useSeries ? 'Series' : 'Atlas'}
          </p>
          <input
            type="range"
            min={0}
            max={Math.max(0, stack.length - 1)}
            value={Math.min(pos, Math.max(0, stack.length - 1))}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={useSeries ? 'Series frame' : 'Atlas position'}
            className="w-full accent-rr-red"
          />
          <p className="mt-1 text-[9px] text-rr-dim tabular-nums">
            {useSeries
              ? `frame ${slice.index} of ${stack.length}`
              : `atlas ${formatSlice(slice.level)} of ${MAX_SLICE}`}
          </p>

          <div className="mt-3 space-y-1 border-t border-rr-line pt-2 text-[9px]">
            <p className="font-bold tracking-[0.14em] text-rr-dim uppercase">Coverage</p>
            <div className="flex justify-between">
              <span className="text-rr-green">Acquired series</span>
              <span className="tabular-nums text-rr-text">{coverage.series}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rr-green">Published figures</span>
              <span className="tabular-nums text-rr-text">{coverage.literature}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rr-blue-lit">Station atlas</span>
              <span className="tabular-nums text-rr-text">{coverage.atlas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rr-amber">No image</span>
              <span className="tabular-nums text-rr-text">{coverage.empty}</span>
            </div>
          </div>

          <p className="mt-3 border-t border-rr-line pt-2 text-[9px] leading-relaxed text-rr-dim">
            Scroll wheel or arrow keys to scrub · PgUp/PgDn jumps 10 · Esc closes.
          </p>
          <p className="mt-2 text-[9px] leading-relaxed text-rr-amber">
            Every frame is a real published image or an explicit gap. Nothing in
            this stack is generated.
          </p>
        </div>
      </div>
    </div>
  )
}
