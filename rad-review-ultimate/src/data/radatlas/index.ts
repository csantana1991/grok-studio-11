/**
 * RAD ATLAS ORCHESTRATOR — fan out to every enabled source, never let one
 * failure empty the panel.
 *
 * Ported from the RadAtlas source. Each provider is settled independently and
 * reports its own state, so a 429 from PubMed Central still leaves the TCIA and
 * OpenNeuro results on screen with an honest "PMC unavailable" note, rather than
 * an empty panel that looks like "no results exist".
 */

import { safeProviderMessage } from './http'
import {
  adapterConfig,
  searchAuthenticatedAdapter,
  searchOpenNeuro,
  searchPmc,
  searchRadiopaedia,
  searchTcia,
} from './providers'
import type {
  ProviderResult,
  ProviderStatus,
  RadiologySearchResponse,
  SearchGroups,
  SourceId,
} from './types'

export const ALL_SOURCES: SourceId[] = ['pmc', 'tcia', 'openneuro', 'idc', 'radiopaedia']
export const DEFAULT_SOURCES: SourceId[] = ['pmc', 'tcia']

/**
 * Hard ceiling on any one provider. Without it a rate-limited upstream holds the
 * whole response open and the panel just spins -- which reads to the user as
 * "broken app" rather than "PubMed Central is throttling us right now".
 */
export const PROVIDER_DEADLINE_MS = 20_000

function withDeadline<T>(run: () => Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Provider timed out after ${ms}ms`)), ms)
    run().then(
      (v) => {
        clearTimeout(timer)
        resolve(v)
      },
      (e) => {
        clearTimeout(timer)
        reject(e)
      },
    )
  })
}

interface Provider {
  source: SourceId
  run: () => Promise<ProviderResult>
  disabled?: string
}

export async function settleProvider(
  provider: Provider,
): Promise<{ result: ProviderResult; status: ProviderStatus }> {
  const started = Date.now()
  if (provider.disabled) {
    return {
      result: { groups: {} },
      status: {
        source: provider.source,
        state: 'disabled',
        count: 0,
        latencyMs: 0,
        cached: false,
        message: provider.disabled,
      },
    }
  }
  try {
    const result = await withDeadline(provider.run, PROVIDER_DEADLINE_MS)
    const count = Object.values(result.groups).reduce((sum, g) => sum + (g?.length ?? 0), 0)
    return {
      result,
      status: {
        source: provider.source,
        state: count ? 'ok' : 'empty',
        count,
        latencyMs: Date.now() - started,
        cached: Boolean(result.cached),
      },
    }
  } catch (error) {
    return {
      result: { groups: {} },
      status: {
        source: provider.source,
        state: 'error',
        count: 0,
        latencyMs: Date.now() - started,
        cached: false,
        message: safeProviderMessage(error),
      },
    }
  }
}

export async function searchRadiology(
  query: string,
  sources: SourceId[] = DEFAULT_SOURCES,
): Promise<RadiologySearchResponse> {
  const started = Date.now()
  const selected = new Set(sources)
  const providers: Provider[] = []
  if (selected.has('pmc')) providers.push({ source: 'pmc', run: () => searchPmc(query) })
  if (selected.has('tcia')) providers.push({ source: 'tcia', run: () => searchTcia(query) })
  if (selected.has('openneuro')) {
    providers.push({ source: 'openneuro', run: () => searchOpenNeuro(query) })
  }
  for (const source of ['idc', 'radiopaedia'] as const) {
    if (!selected.has(source)) continue
    if (source === 'radiopaedia') {
      providers.push({ source, run: () => searchRadiopaedia(query) })
      continue
    }
    const config = adapterConfig(source)
    providers.push({
      source,
      run: () => searchAuthenticatedAdapter(config, query),
      disabled:
        !config.url || !config.token ? 'Authenticated adapter is not configured' : undefined,
    })
  }

  const settled = await Promise.all(providers.map(settleProvider))
  const groups: SearchGroups = { articleFigures: [], studyPreviews: [], fullStudies: [] }
  for (const item of settled) {
    groups.articleFigures.push(...(item.result.groups.articleFigures ?? []))
    groups.studyPreviews.push(...(item.result.groups.studyPreviews ?? []))
    groups.fullStudies.push(...(item.result.groups.fullStudies ?? []))
  }
  const statuses = settled.map((item) => item.status)
  return {
    query,
    groups,
    providers: statuses,
    meta: {
      requestedAt: new Date().toISOString(),
      durationMs: Date.now() - started,
      partial: statuses.some((s) => s.state === 'error'),
      cacheMaxAgeSeconds: 300,
    },
  }
}

export function parseSources(raw: string | null): SourceId[] {
  if (!raw) return DEFAULT_SOURCES
  const wanted = raw
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter((s): s is SourceId => (ALL_SOURCES as string[]).includes(s))
  return wanted.length ? wanted : DEFAULT_SOURCES
}

export * from './types'
