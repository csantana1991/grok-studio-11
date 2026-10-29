import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  IMAGES,
  MAX_SLICE,
  SCALE_TICKS,
  formatSlice,
  getStationForSlice,
  sliceFromClientY,
  type Station,
} from '../data/stations'
import { basename } from '../data/sourceImages'
import { CREDIT_BY_FILE, shortCredit } from '../data/credits'
import PlateImg from './PlateImg'
import { searchTerms } from '../data/imageSources'
import SourcePicker from './SourcePicker'

interface Props {
  slice: number
  onSlice: (s: number) => void
  finding: string
  modalityLabel: string
  accent: string
  /** filename -> object URL for locally mounted source images. */
  mounted: Record<string, string>
  onMountFile: (filename: string, file: File) => void
  onMountBatch: (files: FileList | File[]) => void
  /**
   * Real published imagery matched to the selected encounter. Shown as the
   * primary frame when present, with the head-to-toe atlas one click away.
   */
  caseImage?: {
    tier?: 'finding' | 'broad' | 'anatomy'
    url: string
    caption: string
    authors: string
    journal: string
    year: string
    doi: string
    pmcid: string
    license: string
  }
  caseLabel?: string
  /** Encounter index. Each of the 33,000 opens a different frame of its plate. */
  imageIndex?: number
  /** True while a live search for this encounter is running. */
  caseSearching?: boolean
  /** Explicit user-triggered live search for the selected encounter. */
  onSearchCase?: () => void
  /** Set when a search ran for this encounter and returned nothing. */
  caseSearchEmpty?: boolean
  /** Whether the matched figure's caption actually depicts this station. */
  verdict?: 'confirmed' | 'plausible' | 'mismatch'
  verdictReasons?: string[]
  /** The QA agent's live decision about the image on screen right now. */
  agentStatus?: string | null
  agentReasons?: string[]
  agentBusy?: boolean
  matchIndex?: number
  matchTotal?: number
  onNextMatch?: () => void
  /** Open the 120-position multiplanar stack for this encounter. */
  onOpenStack?: () => void
  /** How many Nucleus catalogue studies lead this encounter's rotation. */
  nucleusCount?: number
  /** Jump the rotation to the first Nucleus study. */
  onShowNucleus?: () => void
  /** Category id, used to pre-filter the external image searches. */
  categoryId?: string
  /** Reader's verdict on the displayed image, if any. */
  imageVerdict?: 'approved' | 'rejected'
  /** Record a verdict; clicking the same one again clears it. */
  onJudgeImage?: (v: 'approved' | 'rejected') => void
  /** Drag the title bar to resize this pane against the worklist. */
  onDragEdge?: (e: React.PointerEvent) => void
  /** Show this source in the window above Control. */
  onPickSource?: (label: string, href: string) => void
}

const UNIQUE_IMAGES = Array.from(new Set(Object.values(IMAGES) as string[]))

/** Width of the station scale, sitting on the image border. */
const SCALE_W = '4.6rem'

export default function Viewer({
  slice,
  onSlice,
  finding,
  modalityLabel,
  accent,
  mounted,
  onMountFile,
  onMountBatch,
  caseImage,
  caseLabel,
  imageIndex = 0,
  caseSearching,
  onSearchCase,
  caseSearchEmpty,
  verdict,
  verdictReasons,
  agentStatus,
  agentReasons,
  agentBusy,
  matchIndex = 0,
  matchTotal = 0,
  onNextMatch,
  onOpenStack,
  nucleusCount = 0,
  onShowNucleus,
  categoryId,
  imageVerdict,
  onJudgeImage,
  onDragEdge,
  onPickSource,
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [hover, setHover] = useState<{ x: number; y: number; slice: number } | null>(null)
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const [dragOver, setDragOver] = useState(false)
  const [sourcesOpen, setSourcesOpen] = useState(false)
  // 'case' shows the encounter's own matched imagery; 'atlas' shows the
  // head-to-toe station reference. Case wins whenever a match exists.
  const [mode, setMode] = useState<'case' | 'atlas'>('case')
  const [panel, setPanel] = useState<{ min: boolean; max: boolean; h: number }>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('rr-viewer-chrome') || '{}') as {
        min?: boolean
        max?: boolean
        h?: number
      }
      return { min: !!raw.min, max: !!raw.max, h: raw.h && raw.h > 160 ? raw.h : 0 }
    } catch {
      return { min: false, max: false, h: 0 }
    }
  })
  const gripRef = useRef<HTMLDivElement>(null)
  const [caseFailed, setCaseFailed] = useState(false)
  const [gallery, setGallery] = useState<{ url: string; caption: string }[]>([])
  const [picked, setPicked] = useState(0)
  useEffect(() => setCaseFailed(false), [caseImage?.url])
  useEffect(() => {
    const q = searchTerms(finding || '')
    if (q.length < 3) return
    let cancel = false
    setGallery([])
    setPicked(0)
    fetch('/api/pmc/match?source=openi&q=' + encodeURIComponent(q))
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { results?: { url: string; caption: string }[] } | null) => {
        if (cancel || !data?.results) return
        setGallery(data.results.filter((row) => row.url))
      })
      .catch(() => {})
    return () => {
      cancel = true
    }
  }, [finding])
  const [sourceLabel, setSourceLabel] = useState('Open-i')
  const [sourceHref, setSourceHref] = useState('')
  const [sourceOpen, setSourceOpen] = useState(true)
  useEffect(() => {
    setSourceOpen(true)
    setSourceLabel('Open-i')
    setSourceHref('')
  }, [finding])
  const shown = gallery[picked]
  const showCase = Boolean(caseImage || shown) && mode === 'case' && !caseFailed

  useEffect(() => {
    try {
      localStorage.setItem('rr-viewer-chrome', JSON.stringify(panel))
    } catch {
      /* ignore */
    }
  }, [panel])

  useEffect(() => {
    const el = gripRef.current
    if (!el) return
    const onDown = (e: PointerEvent) => {
      e.preventDefault()
      el.setPointerCapture(e.pointerId)
      const startY = e.clientY
      const startH = frameRef.current?.parentElement?.getBoundingClientRect().height || 320
      const move = (ev: PointerEvent) => {
        const next = Math.min(window.innerHeight - 120, Math.max(160, startH + (ev.clientY - startY)))
        setPanel((p) => ({ ...p, min: false, max: false, h: next }))
      }
      const up = () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerup', up)
      }
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerup', up)
    }
    el.addEventListener('pointerdown', onDown)
    return () => el.removeEventListener('pointerdown', onDown)
  }, [])

  const station = getStationForSlice(slice)
  const hoverStation: Station = getStationForSlice(hover?.slice ?? slice)

  /** A locally mounted file wins over the file on disk. */
  const srcFor = useCallback(
    (path: string) => mounted[basename(path)] ?? path,
    [mounted],
  )

  const activeSrc = srcFor(station.image)
  const imageMissing = failed[activeSrc] === true
  // Credit follows the on-disk source; a locally mounted override is uncredited.
  const credit = mounted[basename(station.image)]
    ? undefined
    : CREDIT_BY_FILE[basename(station.image)]

  const markFailed = useCallback((src: string) => {
    setFailed((prev) => (prev[src] ? prev : { ...prev, [src]: true }))
  }, [])

  /**
   * Click behaviour is contextual on the mode already exposed by the header
   * toggle, so both actions stay available without a modifier key:
   *   CASE IMAGE   -> cycle to the next verified figure for this encounter
   *   STATION ATLAS-> navigate the head-to-toe stack by click position
   * Slice navigation is never lost: the right-edge scale, the control-panel
   * scrubber, arrow keys and PgUp/PgDn all still move the slice in either mode.
   */
  const cyclesOnClick = showCase && Boolean(onNextMatch)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cyclesOnClick) {
        onNextMatch?.()
        return
      }
      const rect = e.currentTarget.getBoundingClientRect()
      onSlice(sliceFromClientY(e.clientY, rect))
    },
    [cyclesOnClick, onNextMatch, onSlice],
  )

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHover({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      slice: sliceFromClientY(e.clientY, rect),
    })
  }, [])

  // Arrow keys step a slice, PageUp/PageDown jump a whole station.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        onSlice(Math.min(MAX_SLICE, slice + 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        onSlice(Math.max(0, slice - 1))
      } else if (e.key === 'PageDown') {
        e.preventDefault()
        onSlice(Math.min(MAX_SLICE, getStationForSlice(slice).end + 1))
      } else if (e.key === 'PageUp') {
        e.preventDefault()
        onSlice(Math.max(0, getStationForSlice(slice).start - 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slice, onSlice])

  const crosshairPct = useMemo(() => (slice / MAX_SLICE) * 100, [slice])

  return (
    <section
      className={
        'flex min-w-0 flex-col bg-rr-bg ' +
        (panel.max
          ? 'fixed inset-2 z-50 shadow-2xl'
          : panel.min
            ? 'shrink-0'
            : 'flex-1')
      }
      style={!panel.max && !panel.min && panel.h ? { flex: 'none', height: panel.h } : undefined}
    >
      <div
        title="Drag to resize the image. Double-click to fill the screen."
        onDoubleClick={(e) => {
          if ((e.target as HTMLElement).closest('button')) return
          setPanel((p) => ({ ...p, max: !p.max, min: false }))
        }}
        onPointerDown={(e) => {
          if (e.button !== 0 || (e.target as HTMLElement).closest('button')) return
          onDragEdge?.(e)
        }}
        className="flex shrink-0 cursor-ns-resize flex-wrap items-center gap-x-2 gap-y-1 border-b border-rr-line bg-rr-panel px-3 py-1.5"
      >
        <h2 className="text-[11px] font-bold tracking-[0.16em] whitespace-nowrap text-white">
          HEAD-TO-TOE VIEWER · DRAG
        </h2>
        <span className="ml-auto flex items-center gap-1">
          <button
            type="button"
            title="Minimize viewer"
            onClick={() => setPanel((p) => ({ ...p, min: !p.min, max: false }))}
            className="h-10 w-10 rounded-xl bg-white text-lg font-extrabold text-black shadow"
          >
            –
          </button>
          <button
            type="button"
            title="Expand viewer"
            onClick={() => setPanel((p) => ({ ...p, max: !p.max, min: false }))}
            className="h-10 w-10 rounded-xl bg-white text-lg font-extrabold text-black shadow"
          >
            □
          </button>
        </span>
        <span className="rounded border border-rr-line bg-rr-raised px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap text-rr-text tabular-nums">
          SLICE {formatSlice(slice)}/{MAX_SLICE}
        </span>
        <span
          className="rounded border px-1.5 py-0.5 text-[10px] font-bold tracking-wider whitespace-nowrap"
          style={{ borderColor: accent + '66', background: accent + '1f', color: accent }}
        >
          {station.name}
        </span>
        <span className="text-[9px] tracking-[0.14em] whitespace-nowrap text-rr-dim uppercase">
          {station.plane} &middot; {modalityLabel}
        </span>
        {caseImage && (
          <button
            type="button"
            onClick={() => setMode(showCase ? 'atlas' : 'case')}
            title="Switch between this encounter's matched imagery and the head-to-toe atlas"
            className={
              'rounded border px-1.5 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap transition-colors ' +
              (showCase
                ? 'border-rr-green/50 bg-rr-green/10 text-rr-green'
                : 'border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
            }
          >
            {showCase ? 'CASE IMAGE' : 'STATION ATLAS'}
          </button>
        )}

        {onShowNucleus && nucleusCount > 0 && (
          <button
            type="button"
            onClick={onShowNucleus}
            title="Show the matched Nucleus catalogue study for this encounter"
            className="flex items-center gap-1 rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap text-rr-blue-lit transition-colors hover:bg-rr-blue/40"
          >
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-rr-blue-lit text-[7px] font-bold text-black">
              N
            </span>
            NUCLEUS CASE {nucleusCount}
          </button>
        )}

        {onOpenStack && (
          <button
            type="button"
            onClick={onOpenStack}
            title="Open the 120-position multiplanar stack for this encounter"
            className="rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap text-rr-blue-lit transition-colors hover:bg-rr-blue/40"
          >
            120-SLICE STACK
          </button>
        )}

        <span className="ml-auto hidden text-[9px] whitespace-nowrap text-rr-dim xl:inline">
          {cyclesOnClick
            ? 'Click the image for the next match · scale or arrow keys navigate'
            : 'Click the image to navigate · Arrow keys step · PgUp/PgDn jump station'}
        </span>
      </div>

      {!panel.min && (
      <div className="relative min-h-0 flex-1 p-3">
        <div
          ref={frameRef}
          onClick={handleClick}
          onMouseMove={handleMove}
          onMouseLeave={() => setHover(null)}
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            if (e.dataTransfer.files.length) onMountBatch(e.dataTransfer.files)
          }}
          className={
            'relative h-full w-full overflow-hidden rounded border bg-black select-none ' +
            (cyclesOnClick ? 'cursor-pointer ' : 'cursor-crosshair ') +
            (dragOver ? 'border-rr-blue-lit' : 'border-rr-line')
          }
        >
          {/* Real PET/CT source images, crossfaded. Never a drawn placeholder. */}
          {UNIQUE_IMAGES.map((path) => {
            const src = srcFor(path)
            return (
              <img
                key={src}
                src={src}
                alt=""
                draggable={false}
                onError={() => markFailed(src)}
                className="rr-fade pointer-events-none absolute inset-0 h-full w-full object-contain"
                style={{
                  opacity: !showCase && path === station.image && !failed[src] ? 1 : 0,
                }}
              />
            )
          })}

          {/* The selected encounter's own matched published imagery */}
          {(caseImage || shown) && (
            <div
              className="rr-fade pointer-events-none absolute overflow-hidden border-2 border-white bg-black"
              style={
                showCase
                  ? {
                      opacity: 1,
                      left: 6,
                      top: 40,
                      width: `calc(100% - 6px - ${SCALE_W})`,
                      height: 'calc(100% - 68px)',
                    }
                  : { opacity: 0, inset: 0 }
              }
            >
              <PlateImg
                key={`${shown?.url || caseImage?.url}-${imageIndex}`}
                src={shown?.url || caseImage?.url || ''}
                stationId={station.id}
                alt={shown?.caption || caseImage?.caption || finding || ''}
                onError={() => {
                  if (gallery.length > picked + 1) setPicked((n) => n + 1)
                  else setCaseFailed(true)
                }}
                className="absolute"
              />
            </div>
          )}

          {!showCase && imageMissing && (
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
              style={{ right: SCALE_W }}
            >
              <span className="rounded border border-rr-amber/50 bg-rr-amber/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-rr-amber">
                IMAGE NOT MOUNTED
              </span>
              <p className="max-w-lg text-[11px] leading-relaxed text-rr-text">
                {station.name} expects the real source image
                <br />
                <code className="mt-1 inline-block rounded border border-rr-line bg-rr-raised px-2 py-1 text-[11px] break-all text-white">
                  {basename(station.image)}
                </code>
              </p>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) onMountFile(basename(station.image), f)
                  e.target.value = ''
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  fileRef.current?.click()
                }}
                className="pointer-events-auto rounded border border-rr-blue-lit bg-rr-blue/25 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white transition-colors hover:bg-rr-blue/40"
              >
                MOUNT THIS IMAGE
              </button>

              <p className="max-w-md text-[9px] leading-relaxed text-rr-dim">
                Or drop the file anywhere on this frame. Placeholder anatomy is
                deliberately never drawn -- a synthetic shape at this level is exactly the
                failure the Slice 095 fix exists to prevent.
              </p>
            </div>
          )}

          {/* No matched imagery yet: offer an explicit live search */}
          {!caseImage && onSearchCase && (
            <div className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
              <button
                type="button"
                disabled={caseSearching}
                onClick={(e) => {
                  e.stopPropagation()
                  onSearchCase()
                }}
                className="pointer-events-auto rounded border border-rr-blue-lit bg-rr-blue/30 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white shadow-lg transition-colors hover:bg-rr-blue/50 disabled:opacity-50"
              >
                {caseSearching
                  ? 'SEARCHING PUBLISHED LITERATURE...'
                  : 'FIND REAL IMAGE FOR THIS CASE'}
              </button>
              <p className="rounded bg-black/70 px-2 py-0.5 text-[9px] text-rr-dim">
                {caseSearchEmpty
                  ? 'No openly licensed figure found — showing the station atlas'
                  : 'Searches PubMed Central for an openly licensed figure'}
              </p>
            </div>
          )}

          {!showCase && <div className="rr-grid pointer-events-none absolute inset-0" />}

          {!showCase && (
          <div
            className="pointer-events-none absolute right-0 left-0 h-px bg-rr-red"
            style={{ top: `${crosshairPct}%`, boxShadow: '0 0 6px rgba(239,68,68,0.8)' }}
          />
          )}
          {!showCase && <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-px bg-rr-red/35" />}
          {!showCase && (
          <div
            className="pointer-events-none absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rr-red"
            style={{ top: `${crosshairPct}%` }}
          />
          )}
          {!showCase && (
          <div
            className="pointer-events-none absolute left-1 rounded bg-rr-red px-1 py-px text-[9px] font-bold text-white tabular-nums"
            style={{ top: `calc(${crosshairPct}% + 4px)` }}
          >
            {formatSlice(slice)}
          </div>
          )}

          {/* Lesion marks for the active station */}
          {!showCase && !imageMissing &&
            station.lesions.map((l) => (
              <div
                key={l.label}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${l.x * 100}%`, top: `${l.y * 100}%` }}
              >
                <span className="rr-lesion block h-3 w-3 rounded-full border-2 border-rr-amber bg-rr-amber/35" />
              </div>
            ))}

          {/* Hover readout while the pointer is over the frame */}
          {hover && (
            <div
              className="pointer-events-none absolute right-[7.5rem] bottom-7 left-1 z-20 truncate rounded bg-black/80 px-2 py-0.5 text-[10px] text-white"
            >
              {hoverStation.name} · Slice {formatSlice(hover.slice)} — {hoverStation.anatomy}
            </div>
          )}

          {/* Matched-encounter imagery: caption + citation. Licence condition. */}
          {showCase && caseImage && (
            <>
              <div className="absolute top-1 right-[7.5rem] left-1 z-20 flex max-h-8 flex-nowrap items-center gap-1 overflow-hidden">
                <div
                  className={
                    'pointer-events-none rounded border bg-black/80 px-2 py-0.5 text-[9px] font-bold tracking-wider ' +
                    (verdict === 'mismatch'
                      ? 'border-rr-red/60 text-rr-red'
                      : caseImage.tier === 'anatomy' || verdict === 'plausible'
                        ? 'border-rr-amber/50 text-rr-amber'
                        : 'border-rr-green/50 text-rr-green')
                  }
                >
                  {verdict === 'mismatch'
                    ? 'REGION MISMATCH — figure shows a different body part'
                    : caseImage.tier === 'anatomy'
                      ? caseImage.caption.split('.')[0]
                      : verdict === 'confirmed'
                        ? `VERIFIED — depicts ${station.name}`
                        : 'RELATED PUBLISHED CASE'}
                  {caseLabel ? ` · ${caseLabel}` : ''}
                </div>
                {verdictReasons && verdictReasons.length > 0 && (
                  <div className="pointer-events-none w-fit rounded bg-black/70 px-2 py-0.5 text-[8px] text-rr-dim">
                    {verdictReasons.join(' · ')}
                  </div>
                )}

                {/* The agent's live decision about THIS file, taken after
                    fetching it — not the sweep's earlier conclusion. */}
                {(agentStatus || agentBusy) && (
                  <div
                    className={
                      'pointer-events-none w-fit rounded border bg-black/80 px-2 py-0.5 text-[8px] font-bold tracking-wider ' +
                      (agentBusy
                        ? 'border-rr-line text-rr-dim'
                        : agentStatus?.startsWith('APPROVED') || agentStatus === 'REPLACED'
                          ? 'border-rr-green/50 text-rr-green'
                          : agentStatus === 'NEEDS_HUMAN_REVIEW'
                            ? 'border-rr-amber/50 text-rr-amber'
                            : 'border-rr-red/60 text-rr-red')
                    }
                  >
                    {agentBusy
                      ? 'AGENT — fetching and checking this file…'
                      : `AGENT ${String(agentStatus).replace(/_/g, ' ')}`}
                    {!agentBusy && agentReasons && agentReasons.length > 0
                      ? ` · ${agentReasons.slice(0, 3).join(' · ')}`
                      : ''}
                  </div>
                )}
                {onJudgeImage && (
                  <div className="pointer-events-auto flex w-fit items-center gap-1">
                    <button
                      type="button"
                      title="Good teaching image for this case — rank it first in future"
                      onClick={(e) => {
                        e.stopPropagation()
                        onJudgeImage('approved')
                      }}
                      className={
                        'rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider transition-colors ' +
                        (imageVerdict === 'approved'
                          ? 'border-rr-green bg-rr-green/25 text-rr-green'
                          : 'border-rr-line bg-black/80 text-rr-dim hover:border-rr-green hover:text-rr-green')
                      }
                    >
                      ✓ APPROVE
                    </button>
                    <button
                      type="button"
                      title="Wrong or unhelpful — never show this image again"
                      onClick={(e) => {
                        e.stopPropagation()
                        onJudgeImage('rejected')
                      }}
                      className={
                        'rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider transition-colors ' +
                        (imageVerdict === 'rejected'
                          ? 'border-rr-red bg-rr-red/25 text-rr-red'
                          : 'border-rr-line bg-black/80 text-rr-dim hover:border-rr-red hover:text-rr-red')
                      }
                    >
                      ✗ REJECT
                    </button>
                  </div>
                )}

                <div className="pointer-events-auto relative flex w-fit max-w-full flex-wrap items-center gap-1">
                  {onNextMatch && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onNextMatch()
                      }}
                      className="rounded border border-rr-blue-lit/60 bg-black/80 px-2 py-0.5 text-[9px] font-bold tracking-wider text-rr-blue-lit transition-colors hover:bg-rr-blue/30"
                    >
                      NEXT MATCH {matchIndex + 1}/{matchTotal}
                    </button>
                  )}
                  <button
                    type="button"
                    title="Add more images for this case from other sources"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSourcesOpen((v) => !v)
                    }}
                    className="rounded border border-rr-blue-lit/60 bg-black/80 px-2 py-0.5 text-[11px] leading-none font-bold text-rr-blue-lit transition-colors hover:bg-rr-blue/30"
                  >
                    +
                  </button>
                  {(
                    [
                      ['PubMed', `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(searchTerms(finding))}`],
                      ['Open-i', `https://openi.nlm.nih.gov/search?query=${encodeURIComponent(searchTerms(finding))}`],
                      ['Radiopaedia', `https://radiopaedia.org/search?lang=us&q=${encodeURIComponent(searchTerms(finding))}&scope=cases`],
                      ['MedPix', `https://medpix.nlm.nih.gov/search?q=${encodeURIComponent(searchTerms(finding))}`],
                      ['Eurorad', `https://www.eurorad.org/search?search=${encodeURIComponent(searchTerms(finding))}`],
                      ['OE login', `https://www.openevidence.com/ask?query=${encodeURIComponent(searchTerms(finding))}`],
                    ] as const
                  ).map(([label, href]) => (
                    <button
                      key={label}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSourceLabel(label)
                        setSourceHref(href)
                        setSourceOpen(true)
                        onPickSource?.(label, href)
                      }}
                      className={
                        'rounded border bg-black/80 px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-white hover:border-rr-blue-lit ' +
                        (sourceOpen && sourceLabel === label ? 'border-white' : 'border-rr-line')
                      }
                    >
                      {label}
                    </button>
                  ))}
                  <SourcePicker
                    open={sourcesOpen}
                    onClose={() => setSourcesOpen(false)}
                    finding={finding}
                    categoryId={categoryId}
                    categoryLabel={modalityLabel}
                    onFetchMore={() => onSearchCase?.()}
                    fetching={caseSearching}
                  />
                </div>
              </div>
              {gallery.length > 0 && (
                <div
                  className="pointer-events-auto absolute bottom-7 left-2 z-10 flex gap-1 overflow-x-auto"
                  style={{ right: `calc(${SCALE_W} + 8px)` }}
                >
                  {gallery.map((g, i) => (
                    <button
                      key={g.url}
                      type="button"
                      title={g.caption}
                      onClick={(e) => {
                        e.stopPropagation()
                        setPicked(i)
                        setCaseFailed(false)
                      }}
                      className={
                        'h-12 w-12 shrink-0 overflow-hidden rounded border bg-black ' +
                        (i === picked ? 'border-white' : 'border-rr-line')
                      }
                    >
                      <img src={g.url} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              {caseImage && (
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-6 overflow-hidden bg-black/75 px-2 py-0.5 text-[8px] leading-6 whitespace-nowrap text-rr-dim"
                style={{ right: SCALE_W }}
              >
                <span className="text-rr-text">{(shown?.caption || caseImage.caption).slice(0, 190)}</span>
                {' — '}
                {caseImage.authors.split(',')[0]} et al., {caseImage.journal}{' '}
                {caseImage.year} · {caseImage.license.toUpperCase()} · {caseImage.pmcid} ·
                doi:{caseImage.doi}
              </div>
              )}
            </>
          )}

          {/* CC BY attribution -- licence condition, do not remove */}
          {!showCase && !imageMissing && credit && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 bg-black/65 px-2 py-0.5 text-[8px] leading-tight text-rr-dim"
              style={{ right: SCALE_W }}
            >
              <span className="text-rr-text">{credit.depicts}</span>
              {' — '}
              {shortCredit(credit)} {' · '} {credit.pmcid} {' · '} doi:
              {credit.doi}
            </div>
          )}

          {/* Station scale down the right edge */}
          <div
            className="absolute top-0 right-0 bottom-0 flex flex-col justify-between overflow-hidden border-l-2 border-white bg-black/55"
            style={{ width: SCALE_W }}
          >
            {SCALE_TICKS.map((t) => {
              const on = t.name === station.name
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSlice(t.slice)
                  }}
                  className={
                    'relative flex min-h-0 w-full flex-1 items-center gap-0.5 overflow-hidden px-0.5 text-left text-[8px] leading-none text-white ' +
                    (on ? 'bg-white/20 font-bold' : '')
                  }
                >
                  <span className="shrink-0 tabular-nums">{formatSlice(t.slice)}</span>
                  <span className="truncate">{t.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      )}
      {!panel.min && !panel.max && (
        <div
          ref={gripRef}
          title="Drag to resize viewer"
          className="h-3 shrink-0 cursor-ns-resize bg-rr-line hover:bg-rr-blue-lit"
        />
      )}
    </section>
  )
}
