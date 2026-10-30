import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import type { Encounter } from '../data/generateCases'
import { CATEGORIES, CATEGORY_BY_ID, GRAND_TOTAL } from '../data/categories'
import { formatSlice } from '../data/stations'
import PlateImg from './PlateImg'
import { teachingPlateFor } from '../data/teachingPlate'
import { isNihToken, useNihFilm } from '../data/nihLive'
import { reportsSuv, statedSuv, studyKind } from '../data/caseDossier'
import { displayUrl } from '../data/liveMatch'

export const ROW_H = 188
const OVERSCAN = 6

interface Props {
  cases: Encounter[]
  selectedIdx: number | null
  onSelect: (c: Encounter) => void
  /** Double-click: commit the encounter to the viewer and search if unmatched. */
  onLoad: (c: Encounter) => void
  query: string
  onQuery: (q: string) => void
  filter: string
  onFilter: (id: string) => void
  /** Per-category totals. Search results, not the catalog, when a query is active. */
  counts?: Record<string, number>
  allCount?: number
  indexing: boolean
  /** The exact figure this encounter will show in the viewer, if any. */
  thumbFor: (c: Encounter) => string | undefined
  /** Whether the RAD ATLAS results panel is open under the search box. */
  atlasOpen: boolean
  onToggleAtlas: () => void
  /** Rendered directly under the search box, at one case row's width. */
  atlasPanel?: ReactNode
  /** The sentence the audiobook is speaking, shown on the playing row. */
  caption?: string
}

function FullThumb({
  c,
  src,
  className,
  plain,
}: {
  c: Encounter
  src?: string
  className: string
  plain?: boolean
}) {
  const nih = useNihFilm(isNihToken(src) ? src : undefined)
  const [dead, setDead] = useState(false)
  useEffect(() => {
    setDead(false)
  }, [src, nih?.url])
  if (isNihToken(src) && !nih) {
    return (
      <span className="flex h-full items-center px-1 text-center text-[9px] font-bold text-[#ffe14a]">
        Loading NIH film…
      </span>
    )
  }
  if (isNihToken(src) && nih && !nih.url) {
    return (
      <span className="flex h-full items-center px-1 text-center text-[9px] font-bold text-[#ffe14a]">
        NIH film did not load
      </span>
    )
  }
  const live = nih?.url || src
  if (!live || dead) {
    return (
      <span className="flex h-full items-center px-1 text-center text-[9px] font-bold text-[#ffe14a]">
        No matched case image
      </span>
    )
  }
  const shown = live.startsWith('/') ? live : displayUrl(live)
  return (
    <PlateImg
      src={shown}
      stationId={c.stationId}
      alt=""
      plain={plain}
      onError={() => setDead(true)}
      className={className}
    />
  )
}

function FilmCell({
  c,
  src,
  thumbW,
  onSelect,
}: {
  c: Encounter
  src?: string
  thumbW: number
  onSelect: (c: Encounter) => void
}) {
  const nih = useNihFilm(isNihToken(src) ? src : undefined)
  const label = nih?.caption || (src ? teachingPlateFor(c).caption || 'Meta Image' : 'No match')
  return (
    <button
      type="button"
      title={label}
      onClick={() => onSelect(c)}
      className="relative h-full shrink-0 overflow-hidden rounded border border-rr-line bg-black"
      style={{ width: thumbW }}
    >
      {src ? (
        <FullThumb c={c} src={src} plain className="absolute inset-x-0 top-0 bottom-6 h-auto w-full" />
      ) : (
        <span className="absolute inset-x-0 top-0 bottom-6 flex items-center justify-center px-1 text-center text-[11px] font-bold text-[#ffe14a]">No match</span>
      )}
      <span className="absolute inset-x-0 bottom-0 h-6 truncate bg-black/80 px-1 text-left text-[10px] leading-6 text-white">{label}</span>
    </button>
  )
}

const STATUS_STYLE: Record<Encounter['status'], string> = {
  'Q-READY': 'border-rr-green/40 bg-rr-green/10 text-rr-green',
  READ: 'border-rr-line bg-rr-raised text-rr-dim',
  PENDING: 'border-rr-amber/40 bg-rr-amber/10 text-rr-amber',
}

function Row({
  c,
  selected,
  onSelect,
  onLoad,
  thumb,
  caption,
  height,
}: {
  c: Encounter
  selected: boolean
  onSelect: (c: Encounter) => void
  onLoad: (c: Encounter) => void
  thumb?: string
  caption?: string
  height: number
}) {
  const nih = useNihFilm(isNihToken(thumb) ? thumb : undefined)
  const cat = CATEGORY_BY_ID[c.categoryId]
  const plateLine = nih?.caption || (thumb ? teachingPlateFor(c).caption : '')
  return (
    <button
      type="button"
      onClick={() => onSelect(c)}
      onDoubleClick={() => onLoad(c)}
      title="Double-click to load this encounter into the viewer"
      style={{ height }}
      data-selected={selected ? '1' : undefined}
      className={
        'flex w-full items-stretch gap-2 overflow-hidden border-b border-rr-line px-2 text-left transition-colors ' +
        (selected ? 'bg-rr-blue/20' : 'hover:bg-[#141419]')
      }
    >
      <span className="relative h-full w-[58%] max-w-[520px] shrink-0 overflow-hidden bg-black">
        {thumb ? (
          <FullThumb c={c} src={thumb} plain className="absolute inset-0 h-full w-full" />
        ) : (
          <span className="flex h-full items-center px-1 text-center text-[9px] font-bold text-[#ffe14a]">
            No matched case image
          </span>
        )}
      </span>
      <span className="flex min-w-0 flex-1 flex-col justify-center gap-1">
      <div className="flex items-center gap-1.5">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-sm"
          style={{ background: cat.accent }}
        />
        <span className="text-[12px] font-bold text-white tabular-nums">
          {c.accession}
        </span>
        <span
          className={
            'rounded border px-1 py-px text-[8px] font-bold tracking-wider ' +
            STATUS_STYLE[c.status]
          }
          title="Teaching-row status. Not a signed report."
        >
          {c.status}
        </span>
        {c.priority === 'STAT' && (
          <span className="rounded border border-rr-red/50 bg-rr-red/15 px-1 py-px text-[8px] font-bold tracking-wider text-rr-red">
            STAT
          </span>
        )}
        <span className="ml-auto text-[9px] text-rr-dim tabular-nums">{c.date}</span>
      </div>

      <p className="line-clamp-3 text-[15px] leading-snug text-white">{c.finding}</p>
      {caption && (
        <p className="line-clamp-2 text-[12px] font-semibold leading-snug text-[#facc15]">
          {caption}
        </p>
      )}
      {thumb && !thumb.startsWith('/') && !caption && (
        <p className="line-clamp-1 text-[11px] leading-tight text-rr-amber">
          Published reference. Not this row’s scan.
        </p>
      )}
      {thumb && (thumb.startsWith('/') || isNihToken(thumb)) && !caption && (
        <p className="line-clamp-2 text-[11px] leading-tight text-rr-amber">
          {plateLine || 'NIH ChestX-ray14. Loading this study’s finding.'}
        </p>
      )}
      {!thumb && !caption && (
        <p className="line-clamp-1 text-[11px] leading-tight text-[#ffe14a]">No matched case image</p>
      )}

      <div className="flex items-center gap-2 text-[11px] text-rr-dim">
        <span style={{ color: cat.accent }}>{cat.pill}</span>
        <span className="text-rr-line">|</span>
        <span className="text-rr-text">{c.stationName}</span>
        <span className="text-rr-line">|</span>
        <span className="tabular-nums">ATLAS {formatSlice(c.slice)}</span>
        <span className="text-rr-line">|</span>
        <span className="tabular-nums">
          {c.age}
          {c.sex}
        </span>
        {reportsSuv(studyKind(c.finding, c.categoryId)) && statedSuv(c.finding) && (
          <>
            <span className="text-rr-line">|</span>
            <span className="tabular-nums text-rr-amber">SUV {statedSuv(c.finding)} demo</span>
          </>
        )}
        <span className="ml-auto tabular-nums" title="Demo code. Not an ACGME case log.">
          demo {c.acgme}
        </span>
      </div>
      </span>
    </button>
  )
}

export default function CaseList({
  cases,
  selectedIdx,
  onSelect,
  onLoad,
  query,
  onQuery,
  filter,
  onFilter,
  counts,
  allCount = GRAND_TOTAL,
  indexing,
  thumbFor,
  atlasOpen,
  onToggleAtlas,
  atlasPanel,
  caption,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [viewportH, setViewportH] = useState(720)
  const [filmH, setFilmH] = useState(420)
  const [rowH, setRowH] = useState(ROW_H)

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  // Track the scroller height so the rendered window matches the viewport.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setViewportH(el.clientHeight))
    ro.observe(el)
    setViewportH(el.clientHeight)
    return () => ro.disconnect()
  }, [])

  // Reset to the top whenever the rendered result set actually changes.
  // Keyed on the filtered array identity, NOT on the raw query: the query
  // updates on every keystroke but the list only changes after the debounce,
  // so keying on the query resets the scroll 180ms before the content moves
  // and leaves the user part-way down a fresh result set.
  useEffect(() => {
    const el = scrollRef.current
    if (!el || selectedIdx == null) return
    const pos = cases.findIndex((c) => c.idx === selectedIdx)
    if (pos < 0) return
    const top = pos * rowH
    el.scrollTop = top
    setScrollTop(top)
  }, [cases, selectedIdx, rowH])

  const totalHeight = cases.length * rowH
  const startIdx = Math.max(0, Math.floor(scrollTop / rowH) - OVERSCAN)
  const visibleCount = Math.ceil(viewportH / rowH) + OVERSCAN * 2
  const endIdx = Math.min(cases.length, startIdx + visibleCount)
  const rows = cases.slice(startIdx, endIdx)
  const offsetY = startIdx * rowH

  const filmRef = useRef<HTMLDivElement>(null)
  const [filmLeft, setFilmLeft] = useState(0)
  const [filmW, setFilmW] = useState(480)
  const thumbW = Math.max(240, Math.min(560, Math.round(filmH * 1.25)))
  const THUMB = thumbW + 6

  useEffect(() => {
    const el = filmRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setFilmW(el.clientWidth))
    ro.observe(el)
    setFilmW(el.clientWidth)
    return () => ro.disconnect()
  }, [filmH, cases.length])

  const filmStart = Math.max(0, Math.floor(filmLeft / THUMB) - 6)
  const filmEnd = Math.min(cases.length, filmStart + Math.ceil(filmW / THUMB) + 12)
  const withFilm: Encounter[] = []
  const withoutFilm: Encounter[] = []
  for (const c of cases) {
    if (thumbFor(c)) withFilm.push(c)
    else withoutFilm.push(c)
  }
  const strip = withFilm.length ? withFilm.concat(withoutFilm) : cases

  return (
    <aside className="flex h-full min-h-0 w-full flex-col border-r border-rr-line bg-rr-panel">
      <div className="shrink-0 border-b border-rr-line px-3 py-2">
        <div className="flex items-baseline gap-2">
          <h2 className="text-[11px] font-bold tracking-[0.16em] text-white">
            {filter === 'ALL' ? 'ALL ENCOUNTERS' : (CATEGORY_BY_ID[filter]?.pill ?? filter) + ' CASES'}
          </h2>
          <span className="text-[15px] font-bold text-rr-blue-lit tabular-nums">
            {cases.length.toLocaleString()}
          </span>
          <span className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">
            {query.trim() ? 'unique stems' : 'library rows'}
          </span>
          <span className="ml-auto text-[9px] text-rr-dim tabular-nums">
            of {GRAND_TOTAL.toLocaleString()}
          </span>
        </div>

      {filmH > 48 && cases.length > 0 && (
        <div className="rr-film -mx-3 shrink-0 border-b border-rr-line px-2 pt-1" style={{ height: filmH + 36 }}>
          <div className="px-1 text-[11px] font-bold text-white tabular-nums">
            {cases.length.toLocaleString()} images · scroll left and right
          </div>
          <div
            ref={filmRef}
            onScroll={(e) => setFilmLeft(e.currentTarget.scrollLeft)}
            onWheel={(e) => {
              if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
              e.currentTarget.scrollLeft += e.deltaY
            }}
            className="rr-scroll overflow-x-scroll"
            style={{ height: filmH }}
          >
            <div style={{ width: strip.length * THUMB, height: '100%', position: 'relative' }}>
              <div
                className="absolute top-0 flex h-full"
                style={{ left: filmStart * THUMB, gap: 6 }}
              >
                {strip.slice(filmStart, filmEnd).map((c) => (
                  <FilmCell
                    key={c.idx}
                    c={c}
                    src={thumbFor(c)}
                    thumbW={thumbW}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        title="Drag down to make the images bigger. Drag up to give the case row more room. Double-click to hide the strip."
        onDoubleClick={() => setFilmH((h) => (h < 48 ? 180 : 0))}
        onPointerDown={(e) => {
          if (e.button !== 0) return
          e.preventDefault()
          const startY = e.clientY
          const startH = filmH
          const move = (ev: PointerEvent) => {
            setFilmH(Math.min(560, Math.max(0, startH + (ev.clientY - startY))))
          }
          const up = () => {
            globalThis.removeEventListener('pointermove', move)
            globalThis.removeEventListener('pointerup', up)
          }
          globalThis.addEventListener('pointermove', move)
          globalThis.addEventListener('pointerup', up)
        }}
        className="flex h-4 shrink-0 cursor-ns-resize items-center justify-center border-b border-rr-line bg-[#1d4ed8] text-[10px] font-bold tracking-wide text-white"
      >
        drag to resize images
      </div>
        <div className="mt-2 flex items-stretch gap-1">
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search finding, station, modality, demo id"
            spellCheck={false}
            className="min-w-0 flex-1 rounded border border-rr-line bg-rr-bg px-2 py-1.5 text-[11px] text-rr-text placeholder:text-rr-dim focus:border-rr-blue-lit focus:outline-none"
          />
          {/* The same green RadAtlas control the browser add-on places under a
              search box: it searches the public archives, not this log. */}
          <button
            type="button"
            onClick={onToggleAtlas}
            disabled={!query.trim()}
            title={
              query.trim()
                ? `Search PubMed Central, TCIA and OpenNeuro for “${query.trim()}”`
                : 'Type something to search the public archives'
            }
            className={
              'shrink-0 rounded border px-2 text-[9px] font-bold tracking-[0.1em] transition-colors disabled:opacity-40 ' +
              (atlasOpen
                ? 'border-rr-green bg-rr-green/25 text-rr-green'
                : 'border-rr-green/40 bg-rr-green/10 text-rr-green hover:border-rr-green')
            }
          >
            ◉ ATLAS
          </button>
        </div>
        {atlasPanel}
      </div>

      <div className="flex shrink-0 flex-wrap gap-1 border-b border-rr-line px-3 py-2">
        <button
          type="button"
          onClick={() => onFilter('ALL')}
          className={
            'rounded border px-1.5 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
            (filter === 'ALL'
              ? 'border-rr-blue-lit bg-rr-blue/25 text-white'
              : 'border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
          }
        >
          ALL {(allCount).toLocaleString()}
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onFilter(c.id)}
            className={
              'rounded border px-1.5 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
              (filter === c.id
                ? 'border-rr-blue-lit bg-rr-blue/25 text-white'
                : 'border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
            }
          >
            {c.pill} {(counts?.[c.id] ?? c.count).toLocaleString()}
          </button>
        ))}
      </div>


      <div ref={scrollRef} onScroll={onScroll} className="rr-scroll min-h-0 flex-1 overflow-y-scroll">
        {indexing ? (
          <div className="px-3 py-6 text-[10px] text-rr-dim">Indexing...</div>
        ) : cases.length === 0 ? (
          <div className="px-3 py-6 text-[10px] text-rr-dim">
            No encounters match this filter.
          </div>
        ) : (
          <div style={{ height: totalHeight, position: 'relative' }}>
            <div style={{ transform: `translateY(${offsetY}px)` }}>
              {rows.map((c) => (
                <Row
                  key={c.idx}
                  c={c}
                  selected={c.idx === selectedIdx}
                  onSelect={onSelect}
                  onLoad={onLoad}
                  thumb={thumbFor(c)}
                  caption={c.idx === selectedIdx ? caption : undefined}
                  height={rowH}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        title="Drag down to make the 54F-style case row taller"
        onPointerDown={(e) => {
          if (e.button !== 0) return
          e.preventDefault()
          const startY = e.clientY
          const start = rowH
          const move = (ev: PointerEvent) => {
            setRowH(Math.min(320, Math.max(96, start + (ev.clientY - startY))))
          }
          const up = () => {
            globalThis.removeEventListener('pointermove', move)
            globalThis.removeEventListener('pointerup', up)
          }
          globalThis.addEventListener('pointermove', move)
          globalThis.addEventListener('pointerup', up)
        }}
        className="shrink-0 cursor-ns-resize border-t border-rr-line px-3 py-1.5 text-[9px] text-white"
      >
        Drag this bar to make the case row taller · row {rowH}px · showing {rows.length} of{' '}
        {cases.length.toLocaleString()} · double-click a row to load
      </div>
    </aside>
  )
}
