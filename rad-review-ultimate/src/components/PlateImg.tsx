import type { CSSProperties } from 'react'
import { useFilledPlate, wholeBodyLayout } from '../data/plateCrop'

export default function PlateImg({
  src,
  stationId,
  alt,
  className,
  onError,
}: {
  src: string
  stationId: string
  alt?: string
  className?: string
  onError?: () => void
}) {
  const fill = useFilledPlate(src)
  const lay = wholeBodyLayout(src, stationId)
  const style: CSSProperties = lay
    ? {
        objectFit: 'fill',
        bottom: 'auto',
        right: 'auto',
        maxWidth: 'none',
        maxHeight: 'none',
        ...lay,
      }
    : fill
  return <img src={src} alt={alt ?? ''} draggable={false} className={className} style={style} onError={onError} />
}
