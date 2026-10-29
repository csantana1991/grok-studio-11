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

/**
 * A stable window into the teaching plate. The same encounter always opens
 * the same frame, and a different encounter never opens the same one.
 */
export function encounterFrame(idx: number): {
  left: string
  top: string
  width: string
  height: string
  objectFit: 'cover'
  maxWidth: 'none'
  maxHeight: 'none'
  bottom: 'auto'
  right: 'auto'
} {
  const n = ((idx % 33000) + 33000) % 33000
  const zoom = 175 + (n % 8) * 6
  const x = Math.floor(n / 8) % 65
  const y = Math.floor(n / 520) % 65
  return {
    objectFit: 'cover',
    width: `${zoom}%`,
    height: `${zoom}%`,
    maxWidth: 'none',
    maxHeight: 'none',
    left: `${-x}%`,
    top: `${-y}%`,
    bottom: 'auto',
    right: 'auto',
  }
}
