import type { CSSProperties } from 'react'
import { useFilledPlate } from '../data/plateCrop'

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
}) {
  const fill = useFilledPlate(src)
  const style: CSSProperties = {
    objectFit: 'contain',
    ...fill,
  }
  return <img src={src} alt={alt ?? ''} draggable={false} className={className} style={style} onError={onError} />
}