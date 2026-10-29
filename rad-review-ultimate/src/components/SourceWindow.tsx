import { useEffect, useState } from 'react'
import { searchTerms } from '../data/imageSources'

interface Props {
  finding: string
  label: string
  href: string
}

/** Source browser sitting above Control. Open-i shows figures; the other sites load in the frame. */
export default function SourceWindow({ finding, label, href }: Props) {
  const [gallery, setGallery] = useState<{ url: string; caption: string }[]>([])
  const [picked, setPicked] = useState(0)

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

  const shown = gallery[picked]
  const site = href || `https://openi.nlm.nih.gov/search?query=${encodeURIComponent(searchTerms(finding || ''))}`

  return (
    <section className="flex h-64 shrink-0 flex-col border-b border-white bg-black">
      <div className="flex items-center gap-2 border-b border-white/30 px-2 py-1">
        <span className="text-[13px] font-bold text-[#ffe14a]">{label || 'Open-i'}</span>
        <a href={site} target="_blank" rel="noreferrer" className="text-[11px] font-bold text-white underline">
          Open site
        </a>
      </div>
      {label === 'Open-i' || !href ? (
        <div className="rr-scroll min-h-0 flex-1 overflow-y-scroll">
          {shown ? <img src={shown.url} alt="" className="max-h-40 w-full object-contain" /> : null}
          <p className="px-2 py-1 text-[12px] leading-snug text-white">
            {shown?.caption || 'Looking up figures for this case...'}
          </p>
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
                <img src={g.url} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <iframe title={label} src={href} className="min-h-0 w-full flex-1 bg-white" />
      )}
    </section>
  )
}
