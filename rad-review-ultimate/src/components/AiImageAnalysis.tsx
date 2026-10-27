import { useEffect, useRef, useState } from 'react'
import { wholeBodyLayout } from '../data/plateCrop'

interface Props {
  imageUrl?: string
  finding: string
  stationId: string
  stationName: string
  modality: string
  accession: string
}

type Agreement = 'match' | 'partial' | 'mismatch'

interface Analysis {
  modalitySeen: string
  regionSeen: string
  description: string
  agreement: Agreement
  why: string
  teachingPoint: string
  confidence: string
  cached?: boolean
}

const AGREE: Record<Agreement, { label: string; cls: string }> = {
  match: { label: 'MATCHES THE STEM', cls: 'border-rr-green/50 bg-rr-green/10 text-rr-green' },
  partial: { label: 'PARTIAL MATCH', cls: 'border-rr-amber/50 bg-rr-amber/10 text-rr-amber' },
  mismatch: { label: 'DOES NOT MATCH', cls: 'border-rr-red/50 bg-rr-red/10 text-rr-red' },
}

function cacheKey(imageUrl: string, finding: string, stationId: string) {
  return `rru-ai:${stationId}|${finding}|${imageUrl}`
}

/** The same crop the viewer uses, so the model reads the frame on screen. */
async function visibleJpeg(url: string, stationId: string): Promise<string | null> {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  try {
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('load'))
      img.src = url
    })
  } catch {
    return null
  }
  const ctxCanvas = document.createElement('canvas')
  const ctx = ctxCanvas.getContext('2d')
  if (!ctx || !img.naturalWidth) return null
  const lay = wholeBodyLayout(url, stationId)
  let sx = 0
  let sy = 0
  let sw = img.naturalWidth
  let sh = img.naturalHeight
  if (lay) {
    const wPct = parseFloat(lay.width)
    const hPct = parseFloat(lay.height)
    const left = parseFloat(lay.left)
    const top = parseFloat(lay.top)
    sx = Math.max(0, (-left / wPct) * img.naturalWidth)
    sy = Math.max(0, (-top / hPct) * img.naturalHeight)
    sw = Math.min(img.naturalWidth - sx, (100 / wPct) * img.naturalWidth)
    sh = Math.min(img.naturalHeight - sy, (100 / hPct) * img.naturalHeight)
  }
  const max = 960
  const scale = Math.min(1, max / Math.max(sw, sh))
  ctxCanvas.width = Math.max(1, Math.round(sw * scale))
  ctxCanvas.height = Math.max(1, Math.round(sh * scale))
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, ctxCanvas.width, ctxCanvas.height)
  return ctxCanvas.toDataURL('image/jpeg', 0.82)
}

export default function AiImageAnalysis({
  imageUrl,
  finding,
  stationId,
  stationName,
  modality,
  accession,
}: Props) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<Analysis | null>(null)
  const requestId = useRef(0)

  useEffect(() => {
    requestId.current += 1
    setError('')
    setBusy(false)
    if (!imageUrl) {
      setResult(null)
      return
    }
    try {
      const raw = sessionStorage.getItem(cacheKey(imageUrl, finding, stationId))
      setResult(raw ? (JSON.parse(raw) as Analysis) : null)
    } catch {
      setResult(null)
    }
  }, [imageUrl, finding, stationId])

  async function analyze() {
    if (!imageUrl || !finding || busy) return
    const id = ++requestId.current
    const key = cacheKey(imageUrl, finding, stationId)
    setBusy(true)
    setError('')
    try {
      const imageData = await visibleJpeg(imageUrl, stationId)
      if (requestId.current !== id) return
      const res = await fetch('/api/rru-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageData: imageData ?? undefined,
          imageUrl: imageData ? undefined : imageUrl,
          finding,
          station: stationName,
          modality,
          accession,
        }),
      })
      const data = (await res.json()) as Analysis & { ok?: boolean; error?: string }
      if (requestId.current !== id) return
      if (!res.ok || data.ok === false) {
        setError(data.error || 'Analysis failed.')
        return
      }
      const next: Analysis = {
        modalitySeen: data.modalitySeen,
        regionSeen: data.regionSeen,
        description: data.description,
        agreement: data.agreement,
        why: data.why,
        teachingPoint: data.teachingPoint,
        confidence: data.confidence,
        cached: data.cached,
      }
      setResult(next)
      try {
        sessionStorage.setItem(key, JSON.stringify(next))
      } catch {
        /* a full storage quota should not hide the read */
      }
    } catch {
      if (requestId.current === id) setError('Could not reach the image analysis.')
    } finally {
      if (requestId.current === id) setBusy(false)
    }
  }

  const tone = result ? AGREE[result.agreement] ?? AGREE.partial : null

  return (
    <section className="border-b border-rr-line" data-rru-ai="1">
      <h3 className="px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-[#c4b5fd] uppercase">
        AI image analysis
      </h3>
      <div className="px-3 pb-3">
        <p className="text-[9px] leading-snug text-rr-dim">
          Reads the frame on screen against this case stem. A teaching analogue, not a diagnosis.
        </p>
        <button
          type="button"
          onClick={() => void analyze()}
          disabled={!imageUrl || busy}
          className="mt-2 w-full rounded border border-[#a78bfa]/50 bg-[#a78bfa]/15 px-2 py-1.5 text-[10px] font-bold tracking-wider text-white transition-colors hover:border-[#c4b5fd] disabled:opacity-40"
        >
          {busy ? 'READING THE FRAME…' : result ? 'ANALYZE AGAIN' : 'ANALYZE THIS IMAGE'}
        </button>
        {!imageUrl && (
          <p className="mt-2 text-[10px] text-rr-dim">Select a case with a picture first.</p>
        )}
        {error && <p className="mt-2 text-[10px] leading-snug text-rr-red">{error}</p>}
        {result && tone && (
          <div className="mt-2 rounded border border-rr-line bg-rr-raised p-2">
            <div className="flex flex-wrap items-center gap-1">
              <span className={'rounded border px-1.5 py-px text-[9px] font-bold tracking-wider ' + tone.cls}>
                {tone.label}
              </span>
              <span className="text-[9px] tracking-wider text-rr-dim uppercase">
                {result.confidence} confidence
              </span>
            </div>
            <p className="mt-2 text-[10px] leading-snug text-rr-text">{result.description}</p>
            <dl className="mt-2 space-y-1 text-[10px] leading-snug">
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">Seen as</dt>
                <dd className="text-white">
                  {result.modalitySeen} · {result.regionSeen}
                </dd>
              </div>
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">Against the stem</dt>
                <dd className="text-rr-text">{result.why}</dd>
              </div>
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">Pearl</dt>
                <dd className="text-rr-text">{result.teachingPoint}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </section>
  )
}
