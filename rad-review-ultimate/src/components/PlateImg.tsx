import { useEffect, useRef, type CSSProperties } from 'react'

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
    if (!src || src.startsWith('/')) return
    timer.current = window.setTimeout(() => err.current?.(), 8000)
    return () => window.clearTimeout(timer.current)
  }, [src])
  return (
    <img
      src={src}
      alt={alt ?? ''}
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
