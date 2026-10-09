import { IMAGES, STATIONS } from './stations'

export interface SourceImage {
  /** Served path, e.g. /resource/axial_pet_ct_fusion.webp */
  path: string
  /** Bare filename, used as the mount key. */
  filename: string
  /** Stations that render this image. */
  stations: string[]
}

export function basename(path: string): string {
  const i = path.lastIndexOf('/')
  return i === -1 ? path : path.slice(i + 1)
}

/** The six real source images, each with the stations it serves. */
export const SOURCE_IMAGES: SourceImage[] = Array.from(
  new Set(Object.values(IMAGES) as string[]),
).map((path) => ({
  path,
  filename: basename(path),
  stations: STATIONS.filter((s) => s.image === path).map((s) => s.name),
}))

export const SOURCE_FILENAMES = SOURCE_IMAGES.map((s) => s.filename)
