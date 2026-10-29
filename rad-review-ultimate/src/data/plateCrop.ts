import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * Where a head-to-toe composite should open, as a percent down the frame.
 * Calibrated on the four-view bone scan (header, then skull → feet), which is
 * the plate used whenever a torso MIP does not include the legs.
 */
const BAND: Record<string, number> = {
  VERTEX: 12,
  SKULL_BASE: 18,
  NECK: 24,
  CHEST: 34,
  UPPER_ABDOMEN: 48,
  MID_ABDOMEN: 56,
  PELVIS: 64,
  THIGH: 76,
  KNEE: 84,
  ANKLE: 93,
  TOES: 98,
}

export function stationBand(stationId: string): number | null {
  return BAND[stationId] ?? null
}

/** Multi-panel whole-body scans. Regional studies (knee MRI, chest CT) are not these. */
export function isWholeBodyPlate(src: string): boolean {
  const h = src.toLowerCase()
  return /nm-fdg-mip|nm-fdg-wb|nm-psma\.|nm-dotatate|bone-scan-wb|nm-iodine|distal_limb|fdg_pet_coronal_mip/.test(
    h,
  )
}

/**
 * FDG / PSMA / DOTATATE / iodine composites in this library stop around the
 * thighs. Cropping their bottom edge does not reveal a knee, ankle, or foot.
 */
export function plateOmitsDistalLimb(src: string): boolean {
  const h = src.toLowerCase()
  return /nm-fdg-mip|nm-psma\.|nm-dotatate|nm-iodine/.test(h)
}

export function distalStation(stationId: string): boolean {
  return stationId === 'KNEE' || stationId === 'ANKLE' || stationId === 'TOES' || stationId === 'THIGH'
}

/**
 * Place one body from a multi-panel whole-body plate into the frame, opened
 * on this station. Returns null for a regional study, which should be shown whole.
 */
export function wholeBodyLayout(
  src: string,
  stationId: string,
): { left: string; top: string; width: string; height: string } | null {
  if (!isWholeBodyPlate(src)) return null
  const band = stationBand(stationId) ?? 50
  const four = /bone-scan|distal_limb/.test(src.toLowerCase())
  const width = four ? 420 : 310
  const height = 320
  const left = four ? -105 : -103
  const windowFrac = 100 / height
  let topFrac = band / 100 - windowFrac / 2
  if (topFrac < 0) topFrac = 0
  const maxTop = (height - 100) / height
  if (topFrac > maxTop) topFrac = maxTop
  return {
    left: `${left}%`,
    top: `${-(topFrac * height)}%`,
    width: `${width}%`,
    height: `${height}%`,
  }
}

const CONTAIN: CSSProperties = {
  objectFit: 'contain',
  width: '100%',
  height: '100%',
  maxWidth: 'none',
  maxHeight: 'none',
  left: '0',
  top: '0',
  bottom: '0',
  right: '0',
}

const fillCache = new Map<string, CSSProperties>()

/** Scale a plate so the non-black scan fills the frame instead of sitting in a dark margin. */
export function measurePlate(src: string): Promise<CSSProperties> {
  const hit = fillCache.get(src)
  if (hit) return Promise.resolve(hit)
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const step = 4
      const c = document.createElement('canvas')
      c.width = Math.max(1, Math.ceil(img.naturalWidth / step))
      c.height = Math.max(1, Math.ceil(img.naturalHeight / step))
      const ctx = c.getContext('2d', { willReadFrequently: true })
      if (!ctx || !img.naturalWidth) {
        fillCache.set(src, CONTAIN)
        resolve(CONTAIN)
        return
      }
      ctx.drawImage(img, 0, 0, c.width, c.height)
      const data = ctx.getImageData(0, 0, c.width, c.height).data
      let minx = c.width
      let miny = c.height
      let maxx = 0
      let maxy = 0
      for (let y = 0; y < c.height; y++) {
        for (let x = 0; x < c.width; x++) {
          const i = (y * c.width + x) * 4
          if (data[i] + data[i + 1] + data[i + 2] > 48) {
            if (x < minx) minx = x
            if (y < miny) miny = y
            if (x > maxx) maxx = x
            if (y > maxy) maxy = y
          }
        }
      }
      if (maxx <= minx || maxy <= miny) {
        fillCache.set(src, CONTAIN)
        resolve(CONTAIN)
        return
      }
      let bx = minx / c.width
      let by = miny / c.height
      let bw = (maxx - minx) / c.width
      let bh = (maxy - miny) / c.height
      if (bw > 0.9 && bh > 0.9) {
        fillCache.set(src, CONTAIN)
        resolve(CONTAIN)
        return
      }
      const pad = 0.03
      bx = Math.max(0, bx - pad)
      by = Math.max(0, by - pad)
      bw = Math.min(1 - bx, bw + pad * 2)
      bh = Math.min(1 - by, bh + pad * 2)
      const style: CSSProperties = {
        objectFit: 'fill',
        width: `${100 / bw}%`,
        height: `${100 / bh}%`,
        left: `${(-bx / bw) * 100}%`,
        top: `${(-by / bh) * 100}%`,
        maxWidth: 'none',
        maxHeight: 'none',
        bottom: 'auto',
        right: 'auto',
      }
      fillCache.set(src, style)
      resolve(style)
    }
    img.onerror = () => {
      fillCache.set(src, CONTAIN)
      resolve(CONTAIN)
    }
    img.src = src
  })
}

export function useFilledPlate(src: string): CSSProperties {
  const [style, setStyle] = useState<CSSProperties>(() => fillCache.get(src) ?? CONTAIN)
  useEffect(() => {
    let live = true
    const known = fillCache.get(src)
    if (known) setStyle(known)
    else
      measurePlate(src).then((next) => {
        if (live) setStyle(next)
      })
    return () => {
      live = false
    }
  }, [src])
  return style
}

/** Full plate. Kept so older call sites still compile. */
export function encounterFrame(_idx: number): CSSProperties {
  return CONTAIN
}
