import { useEffect, useRef, type CSSProperties } from 'react'
import { useFilledPlate } from '../data/plateCrop'

export default function PlateImg({
  src,
  alt,
  className,
  onError,
  plain = false,
}: {
  src: string
  stationId: string
  alt?: string
  className?: string
  onError?: () => void
  /** Small thumbs: show the whole picture, don't crop it out of the box. */
  plain?: boolean
}) {
  const fill = useFilledPlate(plain ? '' : src)
  const style: CSSProperties = plain
    ? { objectFit: 'contain', width: '100%', height: '100%', left: 0, top: 0 }
    : {
        objectFit: 'contain',
        ...fill,
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