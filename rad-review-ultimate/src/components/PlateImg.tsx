import { useEffect, useRef, type CSSProperties } from 'react'
import { isNihToken, useNihFilm } from '../data/nihLive'
import { isOpeniToken, useOpeniFilm } from '../data/openiLive'

export default function PlateImg({
  src,
  alt,
  className,
  onError,
}: {
  src: string
  stationId: string
  alt?: string
  className?: string
  onError?: () => void
  /** Kept so callers can still pass it. Thumbs and the viewer both fill the frame. */
  plain?: boolean
}) {
  const nih = useNihFilm(isNihToken(src) ? src : undefined)
  const oi = useOpeniFilm(isOpeniToken(src) ? src : undefined)
  const remote = nih || oi
  const shown = isNihToken(src) || isOpeniToken(src) ? remote?.url || '' : src
  const style: CSSProperties = {
    objectFit: 'cover',
    objectPosition: 'center center',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    filter: 'contrast(1.72) brightness(1.05)',
  }
  const err = useRef(onError)
  err.current = onError
  const timer = useRef(0)
  useEffect(() => {
    if (!shown || shown.startsWith('/') || isNihToken(src) || isOpeniToken(src)) return
    timer.current = window.setTimeout(() => err.current?.(), 8000)
    return () => window.clearTimeout(timer.current)
  }, [shown, src])
  useEffect(() => {
    if ((isNihToken(src) || isOpeniToken(src)) && remote && !remote.url) err.current?.()
  }, [src, remote])
  if ((isNihToken(src) || isOpeniToken(src)) && !shown) {
    return (
      <span className="flex h-full w-full items-center justify-center bg-black px-2 text-center text-[11px] font-bold text-[#ffe14a]">
        {remote?.caption || (isNihToken(src) ? 'Loading NIH film…' : 'Loading Open-i figure…')}
      </span>
    )
  }
  return (
    <img
      src={shown}
      alt={remote?.caption || alt || ''}
      draggable={false}
      className={className}
      style={style}
      onLoad={() => window.clearTimeout(timer.current)}
      onError={() => {
        window.clearTimeout(timer.current)
        err.current?.()
      }}
    />
  )
}