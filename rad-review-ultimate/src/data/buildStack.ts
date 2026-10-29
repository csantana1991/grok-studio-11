/**
 * MULTIPLANAR STACK BUILDER
 *
 * Builds a 120-position scrollable stack for one encounter, in a chosen plane,
 * the way a PACS scroll-through behaves: each position maps to an anatomical
 * level, and each level resolves to the best REAL image available for it.
 *
 * Deliberately NOT synthesised. Generating a plausible-looking CT of a finding
 * that was never imaged would be a fabricated medical image -- the same class
 * of error as the Slice 095 defect, but far more convincing and therefore far
 * more dangerous in a teaching tool. Levels with no real image say so.
 */

import { getStationForSlice, MAX_SLICE, type Station } from './stations'
import type { LiveMatch } from './liveMatch'
import { stationIdForFinding } from './anatomyMap'
import type { NucleusStudy } from './nucleus'

export const STACK_SIZE = 120

export type Plane = 'Axial' | 'Coronal' | 'Sagittal'
export const PLANES: Plane[] = ['Axial', 'Coronal', 'Sagittal']

export type SliceSource = 'series' | 'literature' | 'atlas' | 'none'

export interface StackSlice {
  /** 1-based position in the stack. */
  index: number
  /** Anatomical level 0..100 this position corresponds to. */
  level: number
  station: Station
  url: string | null
  source: SliceSource
  /** Caption or credit line for whatever is shown. */
  label: string
  /** Provenance for a literature image. */
  match?: LiveMatch
}

/** Plane named in a figure caption, if any. */
function captionPlane(caption: string): Plane | null {
  if (/\baxial|transverse\b/i.test(caption)) return 'Axial'
  if (/\bcoronal\b/i.test(caption)) return 'Coronal'
  if (/\bsagittal\b/i.test(caption)) return 'Sagittal'
  return null
}

/**
 * Build the stack. Images are chosen per level, best-first:
 *   1. a matched figure whose caption names BOTH this plane and this region
 *   2. a matched figure whose caption names this region
 *   3. the station atlas image, when its plane matches the requested plane
 *   4. nothing -- reported honestly rather than filled in
 */
export function buildStack(
  matches: LiveMatch[],
  plane: Plane,
  atlasPlaneOnly = true,
): StackSlice[] {
  // Index the matched figures by the region their caption describes.
  const byStation = new Map<string, { match: LiveMatch; plane: Plane | null }[]>()
  for (const m of matches) {
    const st = stationIdForFinding(m.caption)
    if (!st) continue
    const entry = { match: m, plane: captionPlane(m.caption) }
    const list = byStation.get(st)
    if (list) list.push(entry)
    else byStation.set(st, [entry])
  }

  const out: StackSlice[] = []
  for (let i = 0; i < STACK_SIZE; i++) {
    const level = Math.round((i / (STACK_SIZE - 1)) * MAX_SLICE)
    const station = getStationForSlice(level)
    const candidates = byStation.get(station.id) ?? []

    // Rotate through this region's candidates so consecutive positions in the
    // same station do not all repeat one figure.
    const samePlane = candidates.filter((c) => c.plane === plane)
    const pool = samePlane.length ? samePlane : candidates

    if (pool.length) {
      const chosen = pool[i % pool.length]
      out.push({
        index: i + 1,
        level,
        station,
        url: chosen.match.url,
        source: 'literature',
        label: chosen.match.caption.slice(0, 150),
        match: chosen.match,
      })
      continue
    }

    if (!atlasPlaneOnly || station.plane === plane) {
      out.push({
        index: i + 1,
        level,
        station,
        url: station.image,
        source: 'atlas',
        label: `${station.name} reference — ${station.plane.toLowerCase()} atlas`,
        match: undefined,
      })
      continue
    }

    out.push({
      index: i + 1,
      level,
      station,
      url: null,
      source: 'none',
      label: `No real ${plane.toLowerCase()} image held for ${station.name}`,
    })
  }
  return out
}

/**
 * Build a stack from a Nucleus study's own slice series.
 *
 * This is the closest thing to scrolling a real acquisition: the frames are
 * contiguous slices from one DICOM-derived series, in their published order,
 * with the study's own slice labels. Nothing is interpolated to pad the series
 * to a round number -- a ten-slice series is ten positions, and says so.
 */
export function buildSeriesStack(study: NucleusStudy): StackSlice[] {
  const station = getStationForSlice(seriesLevelFor(study))
  return study.images.map((im, i) => ({
    index: i + 1,
    // Spread the series across the station's own slice span so the level
    // readout still tracks the body as the reader scrolls.
    level: Math.round(
      station.start +
        (station.end - station.start) * (study.images.length > 1 ? i / (study.images.length - 1) : 0),
    ),
    station,
    url: im.url,
    source: 'series',
    label: im.label,
  }))
}

/** One atlas frame per slider step, 0 through 100. Not padded to 120. */
export function buildAtlasStack(): StackSlice[] {
  const out: StackSlice[] = []
  for (let level = 0; level <= MAX_SLICE; level++) {
    const station = getStationForSlice(level)
    out.push({
      index: level + 1,
      level,
      station,
      url: station.image,
      source: 'atlas',
      label: `${station.name} atlas. Same 0–100 scale as the slider. Not this case’s DICOM stack.`,
    })
  }
  return out
}

/** Mid-point of the study's station, used to anchor its series. */
function seriesLevelFor(study: NucleusStudy): number {
  if (!study.stationId) return 50
  for (let s = 0; s <= MAX_SLICE; s++) {
    if (getStationForSlice(s).id === study.stationId) {
      const st = getStationForSlice(s)
      return Math.round((st.start + st.end) / 2)
    }
  }
  return 50
}

/** Coverage summary for the stack header. */
export function stackCoverage(stack: StackSlice[]) {
  return {
    series: stack.filter((s) => s.source === 'series').length,
    literature: stack.filter((s) => s.source === 'literature').length,
    atlas: stack.filter((s) => s.source === 'atlas').length,
    empty: stack.filter((s) => s.source === 'none').length,
    total: stack.length,
  }
}
