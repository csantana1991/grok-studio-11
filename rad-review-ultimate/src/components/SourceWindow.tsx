import { useEffect, useState } from 'react'
import { caseSources, searchTerms } from '../data/imageSources'
import { displayUrl } from '../data/liveMatch'

interface Props {
  finding: string
  label: string
  href: string
  onPick?: (label: string, href: string) => void
}

/** Source browser sitting above Control. Figures come from Open-i. Every library is listed here. */
export default function SourceWindow({ finding, label, href, onPick }: Props) {
  const [gallery, setGallery] = useState<{ url: string; caption: string }[]>([])
  const [picked, setPicked] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready'>('loading')
  const q = searchTerms(finding || '')
  const sources = caseSources(q)

  useEffect(() => {
    if (q.length < 3) {
      setGallery([])
      setStatus('ready')
      return
    }
    let cancel = false
    setGallery([])
    setPicked(0)
    setStatus('loading')
    const timer = window.setTimeout(() => {
      if (!cancel) setStatus('ready')
    }, 12000)
    fetch('/api/pmc/match?source=openi&q=' + encodeURIComponent(q))
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { results?: { url: string; caption: string }[] } | null) => {
        if (cancel) return
        setGallery((data?.results || []).filter((row) => row.url))
        setStatus('ready')
      })
      .catch(() => {
        if (!cancel) setStatus('ready')
      })
    return () => {
      cancel = true
      window.clearTimeout(timer)
    }
  }, [q])

  const shown = gallery[picked]
  const site = href || sources.find((s) => s.label === (label || 'Open-i'))?.href || sources[1].href
  const embedded = label === 'Open-i' || label === 'PubMed' || !href

  return (
    <section className="flex h-72 shrink-0 flex-col border-b border-white bg-black">
      <div className="flex items-center gap-2 border-b border-white/30 px-2 py-1">
        <span className="text-[13px] font-bold text-[#ffe14a]">{label || 'Open-i'}</span>
        <a href={site} target="_blank" rel="noreferrer" className="text-[11px] font-bold text-white underline">
          Open site
        </a>
      </div>
      <div className="rr-scroll flex gap-1 overflow-x-scroll border-b border-white/20 px-2 py-1">
        {sources.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => onPick?.(s.label, s.href)}
            className={
              'shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-bold text-white ' +
              (s.label === label ? 'border-white bg-white/10' : 'border-white/30')
            }
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="rr-scroll min-h-0 flex-1 overflow-y-scroll">
        {embedded ? (
          <>
            {shown ? <img src={displayUrl(shown.url)} alt="" className="max-h-40 w-full object-contain" /> : null}
            <p className="px-2 py-1 text-[12px] leading-snug text-white">
              {shown?.caption ||
                (status === 'loading'
                  ? 'Looking up figures for this case...'
                  : 'No Open-i figure came back for this line. Use a source above, or Open site.')}
            </p>
          </>
        ) : (
          <p className="px-2 py-1 text-[12px] leading-snug text-white">
            {label} does not allow its pages inside this app. Open site opens the search. The pictures below are the
            Open-i figures for this same case.
          </p>
        )}
        {!embedded && shown ? <img src={displayUrl(shown.url)} alt="" className="max-h-36 w-full object-contain" /> : null}
        <div className="flex gap-1 px-2 pb-2">
          {gallery.map((g, i) => (
            <button
              key={g.url}
              type="button"
              onClick={() => setPicked(i)}
              className={
                'h-12 w-12 shrink-0 overflow-hidden border bg-black ' +
                (i === picked ? 'border-white' : 'border-white/30')
              }
            >
              <img src={displayUrl(g.url)} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}