/**
 * RAD ATLAS PROVIDERS — PubMed Central, TCIA, OpenNeuro, and authenticated
 * adapters for IDC and Radiopaedia.
 *
 * Ported from the RadAtlas source with two deliberate changes:
 *
 * 1. PMC reuses this workstation's existing pipeline (src/data/pmcSearch.ts)
 *    instead of the port's own XML parser. Two independent PMC implementations
 *    would drift, and drift between "the image the matcher found" and "the image
 *    the atlas found" is exactly the class of bug this app has already been bitten
 *    by. One pipeline, one set of licence rules, one bot-challenge detector.
 *
 * 2. zod is dropped from the authenticated adapter in favour of an explicit
 *    check, to avoid adding a dependency for one schema.
 */

import { fetchWithTimeout, withCache } from './http'
import { searchArticles, figuresFor, extractTerms, BlockedError } from '../pmcSearch'
import type {
  ArticleFigure,
  FullStudy,
  Modality,
  ProviderResult,
  SourceId,
  StudyPreview,
} from './types'

// ---------------------------------------------------------------- PubMed Central

const PMC_SOURCE = {
  id: 'pmc' as const,
  name: 'PubMed Central',
  url: 'https://pmc.ncbi.nlm.nih.gov/',
}

export function modalityFromText(text: string): Modality | undefined {
  const t = text.toLowerCase()
  if (/pet|positron emission/.test(t)) return 'PT'
  if (/mri|magnetic resonance|diffusion.weighted/.test(t)) return 'MR'
  if (/ct\b|computed tomography/.test(t)) return 'CT'
  if (/ultrasound|sonograph/.test(t)) return 'US'
  if (/radiograph|x-ray|x ray/.test(t)) return 'DX'
  if (/scintigraph|nuclear medicine/.test(t)) return 'NM'
  return undefined
}

/** How many articles are opened per atlas search. Each costs two fetches. */
const PMC_ARTICLES = 3

async function loadPmc(query: string, limit: number): Promise<ArticleFigure[]> {
  const terms = extractTerms(query)
  if (!terms.length) return []
  const articles = (await searchArticles(terms, PMC_ARTICLES)).slice(0, PMC_ARTICLES)

  // Concurrently, not in sequence: each article costs a full-text fetch plus an
  // article-page fetch, and running eight of those end to end made one atlas
  // search take minutes.
  const perArticle = await Promise.all(
    articles.map(async (article) => {
      try {
        return { article, figures: (await figuresFor(article.pmcid)).slice(0, 4) }
      } catch (e) {
        // A bot challenge is a provider-level failure and must be reported as
        // one; a single article that yields nothing is not.
        if (e instanceof BlockedError) throw e
        return { article, figures: [] as { url: string; caption: string }[] }
      }
    }),
  )

  const out: ArticleFigure[] = []
  for (const { article, figures } of perArticle) {
    for (const [i, f] of figures.entries()) {
      if (out.length >= limit) return out
      out.push({
        id: `${article.pmcid}-${i}`,
        kind: 'article_figure',
        title: article.title || 'Article figure',
        caption: f.caption || `Figure from ${article.title}`,
        imageUrl: f.url,
        modality: modalityFromText(`${article.title} ${f.caption}`),
        articleTitle: article.title,
        articleUrl: `https://pmc.ncbi.nlm.nih.gov/articles/${article.pmcid}/`,
        pmcid: article.pmcid,
        source: { ...PMC_SOURCE, license: article.license || undefined },
      })
    }
  }
  return out
}

export async function searchPmc(query: string, limit = 18): Promise<ProviderResult> {
  const cached = await withCache(`pmc:atlas:${query.toLowerCase()}:${limit}`, 10 * 60_000, () =>
    loadPmc(query, limit),
  )
  return { groups: { articleFigures: cached.value }, cached: cached.cached }
}

// ------------------------------------------------------------------------ TCIA

const NBIA_PUBLIC = 'https://services.cancerimagingarchive.net/nbia-api/services/v1'
const COLLECTION_API = 'https://www.cancerimagingarchive.net/api/v2/collections/'
const TCIA_SOURCE = {
  id: 'tcia' as const,
  name: 'The Cancer Imaging Archive',
  url: 'https://www.cancerimagingarchive.net/',
  license: 'Collection-specific data usage policy',
  licenseUrl: 'https://www.cancerimagingarchive.net/data-usage-policies-and-restrictions/',
}

/** Curated fallbacks so the search stays useful when collection discovery is down. */
const COLLECTION_HINTS: Array<[RegExp, string[]]> = [
  [/pancrea|paad|pancreatic/i, ['CPTAC-PDA', 'TCGA-PAAD', 'Pancreas-CT']],
  [/glioblast|\bgbm\b/i, ['CPTAC-GBM', 'TCGA-GBM']],
  [/prostat/i, ['PROSTATEx', 'TCGA-PRAD', 'Prostate-MRI-US-Biopsy']],
  [/lung|pulmon|nsclc/i, ['NSCLC-Radiomics', 'LIDC-IDRI', 'CPTAC-LUAD']],
  [/breast|mammar/i, ['TCGA-BRCA', 'CBIS-DDSM', 'Duke-Breast-Cancer-MRI']],
  [/liver|hepato/i, ['TCGA-LIHC', 'CPTAC-HCC']],
  [/kidney|renal/i, ['CPTAC-CCRCC', 'TCGA-KIRC']],
  [/colon|colorectal/i, ['CPTAC-COAD', 'TCGA-COAD']],
]

export interface RawTciaSeries {
  Collection?: string
  PatientID?: string
  StudyInstanceUID?: string
  SeriesInstanceUID?: string
  Modality?: string
  SeriesDescription?: string
  StudyDescription?: string
  BodyPartExamined?: string
  ImageCount?: number | string
}

function fieldText(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return fieldText(value[0])
  if (value && typeof value === 'object') {
    const o = value as Record<string, unknown>
    return fieldText(o.rendered ?? o.name ?? o.value ?? o.post_title ?? '')
  }
  return ''
}

function modality(value?: string): Modality {
  const n = String(value ?? '').toUpperCase()
  return (['CT', 'MR', 'PT', 'NM', 'US', 'CR', 'DX', 'MG', 'XA'] as const).includes(
    n as Modality & ('CT' | 'MR'),
  )
    ? (n as Modality)
    : 'OTHER'
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)]
}

function studyPortalUrl(studyInstanceUid: string): string {
  const url = new URL('https://nbia.cancerimagingarchive.net/nbia-search/')
  url.searchParams.set('StudyUIDCriteria', studyInstanceUid)
  return url.toString()
}

async function findCollections(query: string): Promise<string[]> {
  const url = new URL(COLLECTION_API)
  url.searchParams.set('search', query)
  url.searchParams.set('per_page', '5')
  url.searchParams.set(
    '_fields',
    'collection_short_title,collection_title,slug,collection_page_accessibility',
  )
  let discovered: string[] = []
  try {
    const response = await fetchWithTimeout(url, {}, 6_000)
    const json = (await response.json()) as
      | Record<string, unknown>[]
      | { data?: Record<string, unknown>[] }
    const rows = Array.isArray(json) ? json : (json.data ?? [])
    discovered = rows
      .filter((row) => !/limited|restricted/i.test(fieldText(row.collection_page_accessibility)))
      .map((row) => fieldText(row.collection_short_title) || fieldText(row.slug))
      .filter(Boolean)
  } catch {
    /* fall back to the curated hints below */
  }
  const hinted = COLLECTION_HINTS.filter(([p]) => p.test(query)).flatMap(([, names]) => names)
  return unique([...hinted, ...discovered]).slice(0, 2)
}

async function firstSopInstance(seriesInstanceUid: string): Promise<string | undefined> {
  try {
    const url = new URL(`${NBIA_PUBLIC}/getSOPInstanceUIDs`)
    url.searchParams.set('SeriesInstanceUID', seriesInstanceUid)
    const response = await fetchWithTimeout(url, {}, 5_000)
    const rows = (await response.json()) as Array<{ SOPInstanceUID?: string }>
    return rows[0]?.SOPInstanceUID
  } catch {
    return undefined
  }
}

export function normalizeTciaSeries(seriesRows: RawTciaSeries[]): {
  previews: StudyPreview[]
  studies: FullStudy[]
} {
  const byStudy = new Map<string, RawTciaSeries[]>()
  for (const row of seriesRows) {
    if (!row.StudyInstanceUID || !row.SeriesInstanceUID) continue
    const current = byStudy.get(row.StudyInstanceUID) ?? []
    current.push(row)
    byStudy.set(row.StudyInstanceUID, current)
  }

  const previews: StudyPreview[] = []
  const studies: FullStudy[] = []
  for (const [studyUid, rows] of [...byStudy.entries()].slice(0, 8)) {
    const rep = rows.find((r) => ['CT', 'MR', 'PT', 'NM'].includes(String(r.Modality))) ?? rows[0]
    const modalities = unique(rows.map((r) => modality(r.Modality)))
    const imageCount = rows.reduce((sum, r) => sum + (Number(r.ImageCount) || 0), 0) || undefined
    const collection = rep.Collection || 'TCIA public collection'
    const description =
      rep.StudyDescription || rep.SeriesDescription || `${modalities.join(' / ')} imaging study`
    const fullStudyUrl = studyPortalUrl(studyUid)
    const downloadUrl = `${NBIA_PUBLIC}/getImage?SeriesInstanceUID=${encodeURIComponent(rep.SeriesInstanceUID!)}`

    previews.push({
      id: `tcia-preview-${studyUid}`,
      kind: 'study_preview',
      title: description,
      description: rep.SeriesDescription || description,
      collection,
      patientId: rep.PatientID,
      studyInstanceUid: studyUid,
      seriesInstanceUid: rep.SeriesInstanceUID!,
      modality: modality(rep.Modality),
      modalities,
      bodyPart: rep.BodyPartExamined,
      imageCount,
      fullStudyUrl,
      downloadUrl,
      source: TCIA_SOURCE,
    })
    studies.push({
      id: `tcia-study-${studyUid}`,
      kind: 'full_study',
      title: description,
      description,
      collection,
      format: 'DICOM',
      studyInstanceUid: studyUid,
      patientId: rep.PatientID,
      modalities,
      imageCount,
      seriesCount: rows.length,
      series: rows.map((r) => ({
        seriesInstanceUid: r.SeriesInstanceUID!,
        modality: modality(r.Modality),
        description: r.SeriesDescription,
        imageCount: Number(r.ImageCount) || undefined,
      })),
      fullStudyUrl,
      downloadUrl,
      source: TCIA_SOURCE,
    })
  }
  return { previews, studies }
}

async function loadTcia(query: string): Promise<{ previews: StudyPreview[]; studies: FullStudy[] }> {
  const collections = await findCollections(query)
  if (!collections.length) return { previews: [], studies: [] }
  const responses = await Promise.allSettled(
    collections.map(async (collection) => {
      const url = new URL(`${NBIA_PUBLIC}/getSeries`)
      url.searchParams.set('Collection', collection)
      const response = await fetchWithTimeout(url, {}, 25_000)
      return (await response.json()) as RawTciaSeries[]
    }),
  )
  if (responses.every((r) => r.status === 'rejected')) {
    throw new Error('TCIA study search is temporarily unavailable')
  }
  const rows = responses
    .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
    .slice(0, 250)
  const normalized = normalizeTciaSeries(rows)

  await Promise.all(
    normalized.previews.map(async (preview) => {
      const objectUid = await firstSopInstance(preview.seriesInstanceUid)
      if (objectUid) {
        preview.previewUrl =
          `/api/radatlas/tcia-thumbnail?series=${encodeURIComponent(preview.seriesInstanceUid)}` +
          `&object=${encodeURIComponent(objectUid)}`
      }
    }),
  )
  return normalized
}

export async function searchTcia(query: string): Promise<ProviderResult> {
  const cached = await withCache(`tcia:atlas:${query.toLowerCase()}`, 15 * 60_000, () =>
    loadTcia(query),
  )
  return {
    groups: { studyPreviews: cached.value.previews, fullStudies: cached.value.studies },
    cached: cached.cached,
  }
}

// ------------------------------------------------------------------- OpenNeuro

const OPENNEURO_GRAPHQL = 'https://openneuro.org/crn/graphql'
const OPENNEURO_SOURCE = {
  id: 'openneuro' as const,
  name: 'OpenNeuro',
  url: 'https://openneuro.org/',
  license: 'Dataset-specific license',
}

function normalizeNeuroModality(value: string): Modality {
  const n = value.toLowerCase()
  if (n.includes('mri') || n.includes('magnetic')) return 'MR'
  if (n.includes('pet')) return 'PT'
  return 'OTHER'
}

async function loadOpenNeuro(query: string): Promise<FullStudy[]> {
  const graphQuery = `
    query RadAtlasSearch($input: DatasetSearchInput!, $first: Int!) {
      advancedSearch(query: $input, first: $first, allDatasets: true) {
        edges { node {
          id name
          metadata { modalities studyDomain dxStatus }
          latestSnapshot { tag size description { Name DatasetDOI License } }
        } }
      }
    }
  `
  const response = await fetchWithTimeout(
    OPENNEURO_GRAPHQL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: graphQuery,
        variables: { input: { query: { simple_query_string: { query } } }, first: 8 },
      }),
    },
    9_000,
  )
  const json = (await response.json()) as {
    data?: {
      advancedSearch?: {
        edges?: Array<{
          node?: {
            id: string
            name?: string
            metadata?: { modalities?: string[] }
            latestSnapshot?: { tag: string; description?: { Name?: string; License?: string } }
          }
        }>
      }
    }
    errors?: Array<{ message?: string }>
  }
  if (json.errors?.length) throw new Error('OpenNeuro rejected the search')

  return (json.data?.advancedSearch?.edges ?? []).flatMap((edge) => {
    const node = edge.node
    if (!node?.id) return []
    const name = node.latestSnapshot?.description?.Name || node.name || node.id
    const modalities = unique((node.metadata?.modalities ?? []).map(normalizeNeuroModality))
    return [
      {
        id: `openneuro-${node.id}`,
        kind: 'full_study' as const,
        title: name,
        description: `OpenNeuro dataset ${node.id}${node.latestSnapshot?.tag ? ` · ${node.latestSnapshot.tag}` : ''}`,
        collection: 'OpenNeuro',
        format: 'BIDS' as const,
        modalities: modalities.length ? modalities : (['OTHER'] as Modality[]),
        fullStudyUrl: `https://openneuro.org/datasets/${node.id}`,
        downloadUrl: `https://openneuro.org/datasets/${node.id}/download`,
        source: {
          ...OPENNEURO_SOURCE,
          license: node.latestSnapshot?.description?.License || OPENNEURO_SOURCE.license,
        },
      },
    ]
  })
}

export async function searchOpenNeuro(query: string): Promise<ProviderResult> {
  const cached = await withCache(`openneuro:atlas:${query.toLowerCase()}`, 15 * 60_000, () =>
    loadOpenNeuro(query),
  )
  return { groups: { fullStudies: cached.value }, cached: cached.cached }
}

// -------------------------------------------------- authenticated adapters

export interface AuthenticatedAdapterConfig {
  source: Extract<SourceId, 'idc' | 'radiopaedia'>
  name: string
  url?: string
  token?: string
}

declare const process: { env: Record<string, string | undefined> } | undefined

export function adapterConfig(source: 'idc' | 'radiopaedia'): AuthenticatedAdapterConfig {
  // Read lazily and defensively: this module is imported by the browser bundle
  // for its types, where `process` does not exist.
  const env = (k: string) =>
    (typeof process !== 'undefined' ? process.env[k] : undefined) || undefined
  if (source === 'idc') {
    return {
      source,
      name: 'NCI Imaging Data Commons',
      url: env('IDC_ADAPTER_URL'),
      token: env('IDC_API_TOKEN'),
    }
  }
  return {
    source,
    name: 'Radiopaedia',
    url: env('RADIOPAEDIA_ADAPTER_URL'),
    token: env('RADIOPAEDIA_API_TOKEN'),
  }
}

const MODALITIES: Modality[] = ['CT', 'MR', 'PT', 'NM', 'US', 'CR', 'DX', 'MG', 'XA', 'OTHER']

/** Explicit validation in place of zod: reject anything that is not usable. */
function parseAdapterStudy(raw: unknown): Omit<FullStudy, 'source'> | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const str = (v: unknown) => (typeof v === 'string' ? v : undefined)
  const id = str(r.id)
  const title = str(r.title)
  const fullStudyUrl = str(r.fullStudyUrl)
  if (!id || !title || !fullStudyUrl) return null
  try {
    new URL(fullStudyUrl)
  } catch {
    return null
  }
  const format = r.format === 'BIDS' ? 'BIDS' : 'DICOM'
  const modalities = Array.isArray(r.modalities)
    ? (r.modalities.filter((m): m is Modality => MODALITIES.includes(m as Modality)) as Modality[])
    : []
  return {
    id,
    kind: 'full_study',
    title,
    description: str(r.description) ?? 'Authenticated imaging result',
    collection: str(r.collection) ?? 'Authenticated collection',
    format,
    studyInstanceUid: str(r.studyInstanceUid),
    patientId: str(r.patientId),
    modalities,
    imageCount: typeof r.imageCount === 'number' ? r.imageCount : undefined,
    seriesCount: typeof r.seriesCount === 'number' ? r.seriesCount : undefined,
    fullStudyUrl,
    downloadUrl: str(r.downloadUrl),
  }
}

export async function searchRadiopaedia(query: string): Promise<ProviderResult> {
  const q = query.trim().slice(0, 180)
  const url = `https://radiopaedia.org/search?lang=us&q=${encodeURIComponent(q)}&scope=cases`
  return {
    groups: {
      fullStudies: [
        {
          id: `radiopaedia:${q.toLowerCase()}`,
          kind: 'full_study',
          title: q || 'Radiopaedia cases',
          description:
            'Free Radiopaedia case search for this line. The images stay on Radiopaedia.',
          collection: 'Radiopaedia',
          format: 'DICOM',
          modalities: ['OTHER'],
          fullStudyUrl: url,
          source: {
            id: 'radiopaedia',
            name: 'Radiopaedia',
            url,
            license: 'CC BY-NC-SA',
          },
        },
      ],
    },
  }
}

export async function searchAuthenticatedAdapter(
  config: AuthenticatedAdapterConfig,
  query: string,
): Promise<ProviderResult> {
  if (!config.url || !config.token) throw new Error('Adapter is not configured')
  const response = await fetchWithTimeout(
    config.url,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    },
    7_000,
  )
  const json = (await response.json()) as { fullStudies?: unknown[] }
  const fullStudies: FullStudy[] = (json.fullStudies ?? []).flatMap((raw) => {
    const parsed = parseAdapterStudy(raw)
    if (!parsed) return []
    return [{ ...parsed, source: { id: config.source, name: config.name, url: config.url! } }]
  })
  return { groups: { fullStudies } }
}
