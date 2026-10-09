/** Browser-side call into the RadAtlas endpoint served by vite-plugin-radatlas. */

import type { RadiologySearchResponse, SourceId } from './types'
import { EMPTY_GROUPS } from './types'

export const ATLAS_EMPTY: RadiologySearchResponse = {
  query: '',
  groups: EMPTY_GROUPS,
  providers: [],
  meta: { requestedAt: '', durationMs: 0, partial: false, cacheMaxAgeSeconds: 0 },
}

export async function fetchAtlas(
  query: string,
  sources: SourceId[],
  signal?: AbortSignal,
): Promise<RadiologySearchResponse> {
  const url =
    `/api/radatlas/search?q=${encodeURIComponent(query)}` +
    `&sources=${encodeURIComponent(sources.join(','))}`
  const r = await fetch(url, { signal })
  if (!r.ok) throw new Error(`RadAtlas returned HTTP ${r.status}`)
  return (await r.json()) as RadiologySearchResponse
}
