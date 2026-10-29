import { useEffect, useMemo, useRef, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { LiveMatch } from '../data/liveMatch'
import {
  flattenGroups,
  itemDescription,
  itemImage,
  itemLink,
  itemModality,
  type AtlasItem,
  type RadiologySearchResponse,
  type SourceId,
} from '../data/radatlas/types'
import { ATLAS_EMPTY, fetchAtlas } from '../data/radatlas/client'
import { broaden, correct } from '../data/radatlas/suggest'
import { evaluate } from '../data/qa/engine'
import type { QaStatus } from '../data/qa/types'

/** Two cards visible at a time, as the RadAtlas add-on panel presents them. */
const PER_PAGE = 2

const SOURCE_CHOICES: [SourceId, string][] = [
  ['pmc', 'PMC'],
  ['tcia', 'TCIA'],
  ['openneuro', 'OpenNeuro'],
  ['idc', 'IDC'],
  ['radiopaedia', 'Radiopaedia'],
]

interface Props {
  open: boolean
  query: string
  onClose: () => void
  /** When a case is selected, every atlas result is QA-checked against it. */
  encounter: Encounter | null
  onUse: (match: LiveMatch) => void
}

/**
 * RAD ATLAS PANEL — federated public-imaging search, under the worklist search
 * box, at the width of one case row.
 *
 * The results are NOT this log's images: they are published figures and public
 * DICOM studies from PubMed Central, TCIA and OpenNeuro, each carrying its own
 * citation and licence. When a case is open, the QA agent judges each result
 * against that case and says so on the card, so "found by search" is never
 * mistaken for "correct for this patient".
 */
export default function RadAtlasPanel({ open, query, onClose, encounter, onUse }: Props) {
  const [sources, setSources] = useState<SourceId[]>(['pmc', 'tcia', 'radiopaedia'])
  const [data, setData] = useState<RadiologySearchResponse>(ATLAS_EMPTY)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  /** What the panel actually searched, when that differs from what was typed. */
  const [notice, setNotice] = useState('')
  const abort = useRef<AbortController | null>(null)

  useEffect(() => {
    if (!open || !query.trim()) return
    abort.current?.abort()
    const controller = new AbortController()
    abort.current = controller
    setLoading(true)
    setError(null)
    setNotice('')

    // Correct the spelling, then broaden if the corrected query still finds
    // nothing. Both are announced: results from a query the reader did not type,
    // shown as theirs, teach the wrong thing about what the archive holds.
    void (async () => {
      const fix = correct(query.trim())
      let said = fix.corrected
        ? `Searched “${fix.query}” — corrected ${fix.changes
            .map((c) => `“${c.from}” → “${c.to}”`)
            .join(', ')}`
        : ''
      try {
        let r = await fetchAtlas(fix.query, sources, controller.signal)
        if (!flattenGroups(r.groups).length) {
          for (const wider of broaden(fix.query)) {
            const attempt = await fetchAtlas(wider, sources, controller.signal)
            if (flattenGroups(attempt.groups).length) {
              r = attempt
              said = `Nothing for “${fix.query}” — broadened to “${wider}”`
              break
            }
          }
        }
        if (controller.signal.aborted) return
        setData(r)
        setNotice(said)
        setPage(0)
      } catch (e: unknown) {
        if ((e as Error)?.name === 'AbortError') return
        setError('RadAtlas is not reachable. The rest of the workstation is unaffected.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    })()
    return () => controller.abort()
  }, [open, query, sources])

  const items = useMemo(() => flattenGroups(data.groups), [data])
  const pages = Math.max(1, Math.ceil(items.length / PER_PAGE))
  const shown = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  if (!open) return null

  return (
    <div className="mt-2 rounded border border-rr-green/40 bg-rr-panel">
      <div className="flex flex-wrap items-center gap-1.5 border-b border-rr-line px-2 py-1.5">
        <span className="rounded bg-rr-green/20 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-rr-green">
          RAD ATLAS
        </span>
        <span className="text-[9px] text-rr-dim tabular-nums">
          {loading ? 'searching…' : `${items.length} result${items.length === 1 ? '' : 's'}`}
          {items.length > 0 && ` · ${page + 1}/${pages}`}
        </span>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[9px] text-rr-blue-lit hover:underline"
        >
          open sources ↗
        </a>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded border border-rr-line px-1.5 py-0.5 text-[9px] font-bold text-rr-dim hover:border-rr-dim hover:text-white"
        >
          CLOSE
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1 border-b border-rr-line px-2 py-1">
        {SOURCE_CHOICES.map(([id, label]) => {
          const on = sources.includes(id)
          const status = data.providers.find((p) => p.source === id)
          return (
            <button
              key={id}
              type="button"
              title={status?.message ?? `${label} · ${status?.state ?? 'not queried'}`}
              onClick={() =>
                setSources((prev) =>
                  prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
                )
              }
              className={
                'rounded border px-1.5 py-0.5 text-[8px] font-bold tracking-wider transition-colors ' +
                (on
                  ? 'border-rr-green/50 bg-rr-green/15 text-rr-green'
                  : 'border-rr-line text-rr-dim hover:border-rr-dim')
              }
            >
              {label}
              {status?.state === 'error' ? ' !' : status?.state === 'disabled' ? ' ·' : ''}
            </button>
          )
        })}
      </div>

      {notice && (
        <p className="border-b border-rr-line px-2 py-1 text-[9px] leading-snug text-rr-amber">
          {notice}
        </p>
      )}
      {error && <p className="px-2 py-2 text-[10px] text-rr-red">{error}</p>}
      {!error && !loading && !items.length && (
        <p className="px-2 py-2 text-[10px] text-rr-dim">
          Nothing came back for “{query}”. Try fewer words, or enable another source above.
        </p>
      )}

      <div className="flex flex-col gap-1.5 p-2">
        {shown.map((item) => (
          <AtlasCard key={item.id} item={item} encounter={encounter} onUse={onUse} />
        ))}
      </div>

      {items.length > PER_PAGE && (
        <div className="flex items-center gap-2 border-t border-rr-line px-2 py-1.5">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="rounded border border-rr-line px-2 py-0.5 text-[9px] font-bold text-rr-dim hover:border-rr-dim hover:text-white disabled:opacity-30"
          >
            ‹ PREV
          </button>
          <span className="text-[9px] text-rr-dim tabular-nums">
            {page * PER_PAGE + 1}–{Math.min(items.length, (page + 1) * PER_PAGE)} of {items.length}
          </span>
          <button
            type="button"
            disabled={page >= pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            className="ml-auto rounded border border-rr-line px-2 py-0.5 text-[9px] font-bold text-rr-dim hover:border-rr-dim hover:text-white disabled:opacity-30"
          >
            NEXT ›
          </button>
        </div>
      )}
    </div>
  )
}

/** Present an atlas result as a LiveMatch so the QA engine can judge it. */
export function atlasAsMatch(item: AtlasItem): LiveMatch {
  const url = itemImage(item) ?? ''
  return {
    url,
    caption: `${item.title} — ${itemDescription(item)}`,
    relevance: 2,
    pmcid: item.kind === 'article_figure' ? item.pmcid : item.id,
    title: item.kind === 'article_figure' ? item.articleTitle : item.title,
    authors: item.source.name,
    journal: item.kind === 'article_figure' ? 'PubMed Central' : item.collection,
    year: '',
    doi: '',
    license: item.source.license ?? 'LICENSE_UNKNOWN',
  } as LiveMatch
}

function AtlasCard({
  item,
  encounter,
  onUse,
}: {
  item: AtlasItem
  encounter: Encounter | null
  onUse: (m: LiveMatch) => void
}) {
  const match = useMemo(() => atlasAsMatch(item), [item])
  const verdict = useMemo(
    () => (encounter && match.url ? evaluate({ encounter, match }) : null),
    [encounter, match],
  )
  const modality = itemModality(item)
  /**
   * Previews come from upstreams that fail independently of the search -- TCIA's
   * getThumbnail is returning 500 for every series at the time of writing, with a
   * perfectly good guest token. A failed preview must degrade to a labelled
   * placeholder, never a broken-image frame, and must not hide the study behind it.
   */
  const [imageFailed, setImageFailed] = useState(false)
  const image = imageFailed ? undefined : itemImage(item)

  return (
    <article className="rounded border border-rr-line bg-rr-raised p-1.5">
      <div className="flex items-center gap-1">
        <span className="rounded bg-rr-blue/25 px-1 py-px text-[8px] font-bold tracking-wider text-rr-blue-lit">
          {item.source.name}
        </span>
        <span className="rounded border border-rr-line px-1 py-px text-[8px] text-rr-dim">
          {item.kind.replace('_', ' ')}
        </span>
        {modality && (
          <span className="rounded border border-rr-line px-1 py-px text-[8px] text-rr-text">
            {modality}
          </span>
        )}
        {verdict && <QaChip status={verdict.status} />}
        <a
          href={itemLink(item)}
          target="_blank"
          rel="noreferrer noopener"
          title="Open the source article or study"
          className="ml-auto text-[10px] text-rr-blue-lit hover:underline"
        >
          ↗
        </a>
      </div>

      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className="mt-1 h-28 w-full rounded border border-rr-line bg-black object-contain"
        />
      ) : (
        <div className="mt-1 flex h-14 w-full items-center justify-center rounded border border-dashed border-rr-line bg-black text-[8px] text-rr-dim">
          {imageFailed
            ? 'preview unavailable from the source — the study still opens'
            : item.kind === 'full_study'
              ? 'full study — open or download at the source'
              : 'no preview available'}
        </div>
      )}

      <p className="mt-1 line-clamp-2 text-[9px] font-bold leading-snug text-rr-text">
        {item.title}
      </p>
      <p className="line-clamp-2 text-[8px] leading-snug text-rr-dim">{itemDescription(item)}</p>
      <p className="mt-0.5 text-[8px] text-rr-dim">
        {item.source.license ?? 'LICENSE_UNKNOWN'}
        {item.kind === 'full_study' && item.imageCount ? ` · ${item.imageCount} images` : ''}
      </p>

      {verdict && (
        <p className="mt-0.5 line-clamp-2 text-[8px] leading-snug text-rr-amber">
          {verdict.reasons.slice(0, 2).join(' · ')}
        </p>
      )}

      <div className="mt-1 flex gap-1">
        {image && (
          <button
            type="button"
            onClick={() => onUse(match)}
            className="flex-1 rounded border border-rr-line px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-rr-dim hover:border-rr-green hover:text-rr-green"
          >
            SEND TO VIEWER
          </button>
        )}
        {item.kind !== 'article_figure' && item.downloadUrl && (
          <a
            href={item.downloadUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 rounded border border-rr-line px-1.5 py-0.5 text-center text-[8px] font-bold tracking-wider text-rr-dim hover:border-rr-blue-lit hover:text-rr-blue-lit"
          >
            FULL STUDY
          </a>
        )}
      </div>
    </article>
  )
}

function QaChip({ status }: { status: QaStatus }) {
  const usable = status.startsWith('APPROVED') || status === 'REPLACED'
  return (
    <span
      title="Agent verdict for the open case — reads text, not pixels"
      className={
        'rounded px-1 py-px text-[8px] font-bold ' +
        (usable
          ? 'bg-rr-green/20 text-rr-green'
          : status === 'NEEDS_HUMAN_REVIEW'
            ? 'bg-rr-amber/20 text-rr-amber'
            : 'bg-rr-red/20 text-rr-red')
      }
    >
      {status.replace(/_/g, ' ')}
    </span>
  )
}
