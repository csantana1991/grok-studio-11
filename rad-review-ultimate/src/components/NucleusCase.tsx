import { useEffect, useState } from 'react'
import type { NucleusStudy } from '../data/nucleus'
import { localTeachingPlate } from '../data/nucleus'

export function NucleusImage({
  url,
  fallback,
  className,
  note,
}: {
  url: string
  fallback: string
  className: string
  note?: boolean
}) {
  const [src, setSrc] = useState(url)
  const [usedFallback, setUsedFallback] = useState(false)
  useEffect(() => {
    setSrc(url)
    setUsedFallback(false)
  }, [url])
  return (
    <span className="block">
      <img
        src={src}
        alt=""
        className={className}
        onError={() => {
          if (!usedFallback && fallback && src !== fallback) {
            setUsedFallback(true)
            setSrc(fallback)
          }
        }}
      />
      {note && usedFallback && (
        <span className="mt-1 block text-[8px] leading-snug text-rr-amber">
          The catalogue file is not on this site. This is the local teaching plate for this study type.
        </span>
      )}
    </span>
  )
}

interface Props {
  studies: NucleusStudy[]
  libraryLoaded: boolean
  encounterLabel: string
}

/**
 * Nucleus-style case readout: the matched study shown as a labelled slice grid
 * with its dataset provenance, rather than a single figure.
 *
 * Dataset labels are acquisition metadata, not diagnoses. The interpretation
 * boundary is displayed with every study and is not decoration.
 */
export default function NucleusCase({ studies, libraryLoaded, encounterLabel }: Props) {
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState<{ url: string; label: string } | null>(null)

  if (!libraryLoaded) {
    return (
      <section className="border-b border-rr-line">
        <h3 className="px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-rr-blue-lit uppercase">
          Nucleus case library
        </h3>
        <div className="px-3 pb-3">
          <p className="rounded border border-rr-amber/30 bg-rr-amber/5 px-2 py-1.5 text-[9px] leading-snug text-rr-dim">
            <span className="font-bold text-rr-amber">No export loaded.</span> Save the
            Nucleus case export to{' '}
            <code className="text-rr-text">public/nucleus-export.json</code> and reload.
            Each record needs a title, modality, body region, image URLs, source and
            licence — see{' '}
            <code className="text-rr-text">public/nucleus-export.example.json</code>.
          </p>
        </div>
      </section>
    )
  }

  if (!studies.length) {
    return (
      <section className="border-b border-rr-line">
        <h3 className="px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-rr-blue-lit uppercase">
          Nucleus case library
        </h3>
        <div className="px-3 pb-3">
          <p className="text-[10px] text-rr-dim">
            No study in the library matches this encounter&apos;s body region.
          </p>
        </div>
      </section>
    )
  }

  const study = studies[Math.min(idx, studies.length - 1)]

  return (
    <section className="border-b border-rr-line">
      <div className="flex items-center gap-1.5 px-3 py-1.5">
        <h3 className="text-[9px] font-bold tracking-[0.18em] text-rr-blue-lit uppercase">
          Nucleus case library
        </h3>
        <span className="rounded border border-rr-line bg-rr-raised px-1 py-px text-[8px] text-rr-dim tabular-nums">
          {idx + 1}/{studies.length}
        </span>
        {studies.length > 1 && (
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % studies.length)}
            className="ml-auto rounded border border-rr-blue-lit/50 bg-rr-blue/20 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-rr-blue-lit hover:bg-rr-blue/40"
          >
            NEXT STUDY
          </button>
        )}
      </div>

      <div className="px-3 pb-3">
        {study.collection && (
          <p className="text-[8px] font-bold tracking-[0.14em] text-rr-blue-lit uppercase">
            {study.collection}
            {study.modality ? ` · ${study.modality}` : ''}
          </p>
        )}
        <p className="mt-0.5 text-[11px] leading-snug font-bold text-white">
          {study.title || 'Untitled study'}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-1">
          {study.caseType && (
            <span className="rounded border border-rr-green/40 bg-rr-green/10 px-1 py-px text-[8px] font-bold tracking-wider text-rr-green">
              {study.caseType.toUpperCase()}
            </span>
          )}
          {study.region && (
            <span className="rounded border border-rr-line px-1 py-px text-[8px] text-rr-dim">
              {study.region}
            </span>
          )}
          <span className="rounded border border-rr-line px-1 py-px text-[8px] text-rr-dim tabular-nums">
            {study.images.length} images
          </span>
        </div>

        {/* Labelled slice grid */}
        {study.images.length === 1 ? (
          <button
            type="button"
            onClick={() => setZoom({ url: study.images[0].url, label: study.images[0].label })}
            className="mt-2 block w-full text-left"
            title={study.images[0].label}
          >
            <NucleusImage
              url={study.images[0].url}
              fallback={localTeachingPlate(study)}
              note
              className="h-48 w-full rounded border border-rr-line bg-black object-contain"
            />
            <span className="mt-1 block truncate text-[8px] text-rr-dim">{study.images[0].label}</span>
          </button>
        ) : (
        <div className="mt-2 grid grid-cols-5 gap-1">
          {study.images.slice(0, 10).map((im) => (
            <button
              key={im.url}
              type="button"
              onClick={() => setZoom(im)}
              className="group flex flex-col gap-0.5 text-left"
              title={im.label}
            >
              <span className="truncate text-[7px] tracking-wider text-rr-dim uppercase">
                {im.label}
              </span>
              <NucleusImage
                url={im.url}
                fallback={localTeachingPlate(study)}
                className="h-16 w-full rounded border border-rr-line bg-black object-contain transition-colors group-hover:border-rr-blue-lit"
              />
            </button>
          ))}
        </div>
        )}
        {study.images.length > 10 && (
          <p className="mt-1 text-[8px] text-rr-dim tabular-nums">
            +{study.images.length - 10} further slices in this series
          </p>
        )}

        <p className="mt-2 rounded border border-rr-amber/30 bg-rr-amber/5 px-2 py-1 text-[8px] leading-snug text-rr-dim">
          <span className="font-bold text-rr-amber">Interpretation boundary.</span>{' '}
          Dataset labels are acquisition metadata, not diagnoses, and are not a
          reinterpretation of this encounter. Education only, never patient care.
        </p>

        {(study.source || study.license) && (
          <p className="mt-1.5 text-[8px] leading-snug text-rr-dim">
            {study.source}
            {study.license ? ` · ${study.license}` : ''}
            {study.sourceUrl && (
              <>
                {' · '}
                <a
                  href={study.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-rr-blue-lit underline"
                >
                  source collection
                </a>
              </>
            )}
          </p>
        )}
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setZoom(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded border border-rr-line bg-rr-panel"
          >
            <div className="flex items-center gap-2 border-b border-rr-line px-3 py-2">
              <span className="text-[11px] font-bold tracking-[0.14em] text-white">
                {zoom.label}
              </span>
              <span className="truncate text-[10px] text-rr-dim">{study.title}</span>
              <button
                type="button"
                onClick={() => setZoom(null)}
                className="ml-auto rounded border border-rr-line px-2 py-1 text-[10px] font-bold text-rr-dim hover:text-white"
              >
                CLOSE
              </button>
            </div>
            <NucleusImage
              url={zoom.url}
              fallback={localTeachingPlate(study)}
              className="max-h-[70vh] w-full bg-black object-contain"
            />
            <p className="border-t border-rr-line px-3 py-2 text-[9px] leading-snug text-rr-dim">
              {study.source}
              {study.license ? ` · ${study.license}` : ''} · matched to {encounterLabel}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
