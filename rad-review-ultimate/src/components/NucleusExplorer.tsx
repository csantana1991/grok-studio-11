import { useEffect, useMemo, useRef, useState } from 'react'
import type { NucleusLibrary, NucleusStudy } from '../data/nucleus'
import { localTeachingPlate } from '../data/nucleus'
import { NucleusImage } from './NucleusCase'

/** The live Nucleus Board Academy, opened in a new tab. */
export const NUCLEUS_URL = 'https://nucleus-board-academy.cesar-5864.chatgpt.site/'

interface Props {
  open: boolean
  onClose: () => void
  library: NucleusLibrary
  /** Study to open on, when launched from a matched encounter. */
  initial?: NucleusStudy | null
}

type Mode = 'anatomy' | 'board'

/** Fixed row height for the virtualized study list. */
const STUDY_ROW_H = 58
const STUDY_OVERSCAN = 6

/** Tile the series without shrinking a short one into thumbnails. */
function gridColsFor(n: number): string {
  if (n <= 2) return 'grid-cols-2'
  if (n <= 4) return 'grid-cols-2'
  if (n <= 9) return 'grid-cols-3'
  return 'grid-cols-5'
}

/**
 * Full Nucleus Board Academy case view: labelled slice grid, read-first
 * guidance, board item, study metadata, interpretation boundary and provenance.
 *
 * Everything shown comes from the export. RAD Review never authors a board
 * question or an answer key -- that would be inventing clinical teaching
 * content with no source behind it. A study whose export carries no board item
 * shows the read-first structure and its metadata instead.
 */
export default function NucleusExplorer({ open, onClose, library, initial }: Props) {
  const [selected, setSelected] = useState<NucleusStudy | null>(null)
  const [mode, setMode] = useState<Mode>('anatomy')
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [readNote, setReadNote] = useState('')

  useEffect(() => {
    if (open) setSelected(initial ?? library.studies[0] ?? null)
  }, [open, initial, library.studies])

  useEffect(() => {
    setAnswer(null)
    setChecked(false)
    setReadNote('')
    setMode('anatomy')
  }, [selected?.id])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  /**
   * The whole matching set, not a slice of it. This used to cap at 300, which
   * silently hid most of a 7,393-study library; the list is virtualized below
   * instead, so the full result set stays reachable by scrolling.
   */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return library.studies
    const terms = q.split(/\s+/)
    return library.studies.filter((s) => terms.every((t) => s.search.includes(t)))
  }, [library.studies, query])

  // Virtualized study list: only the visible window is mounted.
  const listRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [listH, setListH] = useState(720)

  useEffect(() => {
    const el = listRef.current
    if (!el || !open) return
    const ro = new ResizeObserver(() => setListH(el.clientHeight))
    ro.observe(el)
    setListH(el.clientHeight)
    return () => ro.disconnect()
  }, [open])

  // A new search starts at the top of its results.
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0
    setScrollTop(0)
  }, [results])

  const startIdx = Math.max(0, Math.floor(scrollTop / STUDY_ROW_H) - STUDY_OVERSCAN)
  const endIdx = Math.min(
    results.length,
    startIdx + Math.ceil(listH / STUDY_ROW_H) + STUDY_OVERSCAN * 2,
  )
  const visible = results.slice(startIdx, endIdx)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-rr-bg">
      <div className="flex shrink-0 items-center gap-2 border-b border-rr-line bg-rr-panel px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-rr-blue-lit bg-rr-blue/25 text-[11px] font-bold text-rr-blue-lit">
          N
        </div>
        <div>
          <p className="text-[12px] font-bold tracking-[0.14em] text-white">NUCLEUS</p>
          <p className="text-[8px] tracking-[0.16em] text-rr-dim uppercase">
            Nuclear medicine board academy
          </p>
        </div>
        <span className="ml-3 rounded border border-rr-line bg-rr-raised px-2 py-0.5 text-[10px] font-bold text-rr-text tabular-nums">
          {library.studies.length.toLocaleString()} studies
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search description / body region..."
          spellCheck={false}
          className="ml-3 w-72 rounded border border-rr-line bg-rr-bg px-2 py-1 text-[11px] text-rr-text placeholder:text-rr-dim focus:border-rr-blue-lit focus:outline-none"
        />
        <a
          href={NUCLEUS_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto rounded border border-rr-blue-lit/60 bg-rr-blue/20 px-2 py-1 text-[10px] font-bold tracking-wider text-rr-blue-lit transition-colors hover:bg-rr-blue/40"
        >
          OPEN NUCLEUS ACADEMY ↗
        </a>
        <button
          type="button"
          onClick={onClose}
          className="rounded border border-rr-line px-2 py-1 text-[10px] font-bold tracking-wider text-rr-dim hover:border-rr-dim hover:text-white"
        >
          CLOSE (ESC)
        </button>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Study list */}
        <aside className="flex w-72 shrink-0 flex-col border-r border-rr-line bg-rr-panel">
          <p className="border-b border-rr-line px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-rr-dim uppercase">
            Residency study explorer &middot; {results.length.toLocaleString()}
          </p>
          <div
            ref={listRef}
            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
            className="min-h-0 flex-1 overflow-y-auto"
          >
            <div style={{ height: results.length * STUDY_ROW_H, position: 'relative' }}>
              <div style={{ transform: `translateY(${startIdx * STUDY_ROW_H}px)` }}>
            {visible.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelected(s)}
                style={{ height: STUDY_ROW_H }}
                className={
                  'flex w-full items-center gap-2 border-b border-rr-line px-2 text-left transition-colors ' +
                  (selected?.id === s.id ? 'bg-rr-blue/20' : 'hover:bg-[#141419]')
                }
              >
                {s.images[0] && (
                  <img
                    src={localTeachingPlate(s)}
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded border border-rr-line bg-black object-contain"
                  />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[8px] font-bold tracking-wider text-rr-blue-lit uppercase">
                    {s.collection || s.modality}
                  </span>
                  <span className="block truncate text-[10px] text-rr-text">
                    {s.title}
                  </span>
                  <span className="block truncate text-[8px] text-rr-dim">
                    {s.region} &middot; {s.images.length} images
                  </span>
                </span>
              </button>
            ))}
              </div>
            </div>
            {!results.length && (
              <p className="px-3 py-4 text-[10px] text-rr-dim">
                {library.loaded
                  ? 'No study matches this search.'
                  : 'No export loaded. Save the Nucleus export to public/nucleus-export.json.'}
              </p>
            )}
          </div>
        </aside>

        {/* Case view */}
        {selected ? (
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-rr-line bg-rr-panel px-3 py-2">
              <div className="min-w-0">
                <p className="truncate text-[8px] font-bold tracking-[0.14em] text-rr-blue-lit uppercase">
                  {selected.collection}
                  {selected.modality ? ` · ${selected.modality}` : ''}
                </p>
                <p className="truncate text-[13px] font-bold text-white">
                  {selected.title}
                </p>
              </div>
              <div className="ml-auto flex gap-1">
                {(['anatomy', 'board'] as Mode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={
                      'rounded px-2.5 py-1 text-[9px] font-bold tracking-wider transition-colors ' +
                      (mode === m
                        ? 'bg-rr-amber text-black'
                        : 'border border-rr-line bg-rr-raised text-rr-dim hover:border-rr-dim')
                    }
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-h-0 flex-1">
              {/* Slice grid */}
              <div className="min-w-0 flex-1 overflow-y-auto bg-black p-4">
                {/*
                  Column count follows the series length. A fixed five-column
                  grid rendered a single-image study as a thumbnail in the
                  corner of an empty frame; most of this library is one image
                  per study, so that was the common case, not the edge case.
                */}
                {selected.images.length === 1 ? (
                  <figure className="flex h-full flex-col items-center justify-center gap-3">
                    <NucleusImage
                      url={selected.images[0].url}
                      fallback={localTeachingPlate(selected)}
                      note
                      className="h-[72vh] w-full rounded border border-rr-line bg-black object-contain"
                    />
                    <figcaption className="max-w-3xl text-center text-[10px] leading-snug text-rr-dim">
                      {selected.images[0].label}
                    </figcaption>
                  </figure>
                ) : (
                  <div className={'grid gap-3 ' + gridColsFor(selected.images.length)}>
                    {selected.images.map((im) => (
                      <figure key={im.url} className="flex flex-col gap-1">
                        <figcaption className="truncate text-[10px] tracking-wider text-rr-text">
                          {im.label}
                        </figcaption>
                        <NucleusImage
                          url={im.url}
                          fallback={localTeachingPlate(selected)}
                          className="aspect-square w-full rounded border border-rr-line bg-black object-contain"
                        />
                      </figure>
                    ))}
                  </div>
                )}

                {mode === 'board' && (
                  <div className="mt-4 rounded border border-rr-line bg-rr-panel px-3 py-2">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-white">
                      BOARD SIMULATION
                    </span>
                    <span className="ml-2 rounded bg-rr-amber px-1.5 py-0.5 text-[9px] font-bold text-black">
                      ORIENTATION GUIDE
                    </span>
                    <p className="mt-1 text-[10px] text-rr-dim">
                      Teaching overlays are hidden so you can commit to an answer first.
                    </p>
                  </div>
                )}
              </div>

              {/* Right rail */}
              <aside className="flex w-96 shrink-0 flex-col gap-3 overflow-y-auto border-l border-rr-line bg-rr-panel p-3">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.16em] text-rr-blue-lit uppercase">
                    Diagnosis case
                  </p>
                  {selected.caseType && (
                    <span className="mt-1 inline-block rounded-full border border-rr-green/40 bg-rr-green/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-rr-green">
                      {selected.caseType.toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="rounded border border-rr-line bg-rr-raised p-2">
                  <p className="text-[9px] font-bold tracking-[0.14em] text-rr-amber uppercase">
                    Read first — before the choices
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed text-rr-text">
                    {selected.readFirst ||
                      'Read the image before viewing the choices. State the modality and view, localize the principal finding, describe the evidence, give a focused differential, and name the next management or correlation step.'}
                  </p>
                  <p className="mt-2 text-[8px] tracking-[0.14em] text-rr-dim uppercase">
                    Your preliminary read
                  </p>
                  <textarea
                    value={readNote}
                    onChange={(e) => setReadNote(e.target.value)}
                    rows={3}
                    placeholder="Modality / technique → observations → differential → next step"
                    className="mt-1 w-full rounded border border-rr-line bg-rr-bg px-2 py-1 text-[10px] text-rr-text placeholder:text-rr-dim focus:border-rr-blue-lit focus:outline-none"
                  />
                </div>

                {selected.skills.length > 0 && (
                  <div className="flex flex-col gap-1">
                    {selected.skills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded border border-rr-line bg-rr-raised px-2 py-1 text-[9px] text-rr-dim"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}

                {selected.board ? (
                  <div>
                    <p className="text-[11px] leading-snug font-bold text-white">
                      {selected.board.question}
                    </p>
                    <div className="mt-2 flex flex-col gap-1">
                      {selected.board.options.map((o) => {
                        const isPicked = answer === o.letter
                        const isCorrect =
                          checked && selected.board?.answer?.toUpperCase() === o.letter
                        const isWrongPick = checked && isPicked && !isCorrect
                        return (
                          <button
                            key={o.letter}
                            type="button"
                            onClick={() => !checked && setAnswer(o.letter)}
                            className={
                              'flex items-start gap-2 rounded border px-2 py-1.5 text-left text-[10px] transition-colors ' +
                              (isCorrect
                                ? 'border-rr-green bg-rr-green/15 text-rr-green'
                                : isWrongPick
                                  ? 'border-rr-red bg-rr-red/15 text-rr-red'
                                  : isPicked
                                    ? 'border-rr-blue-lit bg-rr-blue/20 text-white'
                                    : 'border-rr-line bg-rr-raised text-rr-text hover:border-rr-dim')
                            }
                          >
                            <span className="font-bold">{o.letter}</span>
                            <span>{o.text}</span>
                          </button>
                        )
                      })}
                    </div>
                    <button
                      type="button"
                      disabled={!answer || checked}
                      onClick={() => setChecked(true)}
                      className="mt-2 w-full rounded border border-rr-line bg-rr-raised px-2 py-1.5 text-[10px] font-bold tracking-wider text-rr-text disabled:opacity-40"
                    >
                      {checked ? 'ANSWER SHOWN' : 'Check answer'}
                    </button>
                    {checked && !selected.board.answer && (
                      <p className="mt-1 text-[9px] text-rr-amber">
                        The export carries no answer key for this item.
                      </p>
                    )}
                    {checked && selected.board.explanation && (
                      <p className="mt-1 text-[9px] leading-relaxed text-rr-text">
                        {selected.board.explanation}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="rounded border border-rr-line bg-rr-raised px-2 py-1.5 text-[9px] leading-relaxed text-rr-dim">
                    No board item in the export for this study. Add{' '}
                    <code className="text-rr-text">board.question</code> and{' '}
                    <code className="text-rr-text">board.options</code> to include one —
                    RAD Review does not author questions or answer keys.
                  </p>
                )}

                <div>
                  <p className="text-[9px] font-bold tracking-[0.16em] text-rr-green uppercase">
                    Study metadata
                  </p>
                  <dl className="mt-1 space-y-1 text-[10px]">
                    {[
                      ['Allocation', selected.modality],
                      ['Body region', selected.region],
                      ['Image count', `${selected.images.length} source images`],
                      ['Teaching state', selected.teachingState || 'not stated'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <dt className="text-rr-dim">{k}</dt>
                        <dd className="text-right text-rr-text">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded border border-rr-amber/40 bg-rr-amber/5 p-2">
                  <p className="text-[9px] font-bold tracking-[0.14em] text-rr-amber uppercase">
                    Interpretation boundary
                  </p>
                  <p className="mt-1 text-[9px] leading-relaxed text-rr-text">
                    Dataset labels and draft teaching questions are not independent
                    clinical reinterpretations. Use this course for education, never for
                    patient care.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold tracking-[0.16em] text-rr-dim uppercase">
                    Provenance
                  </p>
                  <p className="mt-1 text-[9px] leading-relaxed text-rr-text">
                    {selected.source || 'Source not stated in export'}
                  </p>
                  {selected.license && (
                    <p className="mt-1 text-[9px] text-rr-dim">{selected.license}</p>
                  )}
                  {selected.sourceUrl && (
                    <a
                      href={selected.sourceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-1 inline-block text-[9px] font-bold text-rr-blue-lit underline"
                    >
                      Open source collection ↗
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="max-w-lg">
              <p className="text-[12px] font-bold tracking-[0.14em] text-white">
                NO CASES IMPORTED YET
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-rr-dim">
                Nucleus sits behind an OpenAI login, so RAD Review cannot fetch it —
                signing in on your behalf is not something this tool does. Import the
                cases yourself instead:
              </p>
              <ol className="mt-3 space-y-2 text-[11px] leading-relaxed text-rr-text">
                <li>
                  <span className="font-bold text-rr-blue-lit">1.</span> Open{' '}
                  <a
                    href={NUCLEUS_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-rr-blue-lit underline"
                  >
                    Nucleus Board Academy ↗
                  </a>{' '}
                  and sign in, then open the 33,000-case explorer.
                </li>
                <li>
                  <span className="font-bold text-rr-blue-lit">2.</span> Open DevTools
                  (F12) → Console and paste the contents of{' '}
                  <code className="text-rr-text">public/nucleus-extractor.js</code>.
                </li>
                <li>
                  <span className="font-bold text-rr-blue-lit">3.</span> It downloads{' '}
                  <code className="text-rr-text">nucleus-export.json</code>. Move it to{' '}
                  <code className="text-rr-text">RAD review/public/</code> and reload this
                  page.
                </li>
              </ol>
              <p className="mt-3 text-[10px] leading-relaxed text-rr-dim">
                The extractor reads only what your signed-in page already holds and writes
                the file locally — nothing is uploaded. Schema reference:{' '}
                <code className="text-rr-text">nucleus-export.example.json</code>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
