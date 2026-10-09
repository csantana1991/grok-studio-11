/**
 * RAD ATLAS — federated public radiology search.
 *
 * Ported from the RadAtlas Next.js source the reader supplied. The shapes are
 * kept verbatim so the browser add-on, the standalone RadAtlas app and this
 * workstation all speak the same response format: an add-on built against the
 * original API works unchanged against this one.
 *
 * Three result kinds, deliberately kept apart rather than flattened:
 *   article_figure  a published figure with a caption and a citation
 *   study_preview   one representative image from a real DICOM study
 *   full_study      a whole study or dataset to open or download
 * They are not interchangeable — a figure teaches, a study is data — so the
 * panel labels which is which instead of blending them into one list.
 */

export type SourceId = 'pmc' | 'tcia' | 'openneuro' | 'idc' | 'radiopaedia'

export type Modality = 'CT' | 'MR' | 'PT' | 'NM' | 'US' | 'CR' | 'DX' | 'MG' | 'XA' | 'OTHER'

export interface SourceAttribution {
  id: SourceId
  name: string
  url: string
  license?: string
  licenseUrl?: string
}

export interface ArticleFigure {
  id: string
  kind: 'article_figure'
  title: string
  caption: string
  imageUrl: string
  modality?: Modality
  articleTitle: string
  articleUrl: string
  pmcid: string
  source: SourceAttribution
}

export interface StudyPreview {
  id: string
  kind: 'study_preview'
  title: string
  description: string
  collection: string
  patientId?: string
  studyInstanceUid: string
  seriesInstanceUid: string
  modality: Modality
  modalities: Modality[]
  bodyPart?: string
  imageCount?: number
  previewUrl?: string
  fullStudyUrl: string
  downloadUrl?: string
  source: SourceAttribution
}

export interface SeriesReference {
  seriesInstanceUid: string
  modality: Modality
  description?: string
  imageCount?: number
}

export interface FullStudy {
  id: string
  kind: 'full_study'
  title: string
  description: string
  collection: string
  format: 'DICOM' | 'BIDS'
  studyInstanceUid?: string
  patientId?: string
  modalities: Modality[]
  imageCount?: number
  seriesCount?: number
  series?: SeriesReference[]
  fullStudyUrl: string
  downloadUrl?: string
  source: SourceAttribution
}

export type AtlasItem = ArticleFigure | StudyPreview | FullStudy

export interface SearchGroups {
  articleFigures: ArticleFigure[]
  studyPreviews: StudyPreview[]
  fullStudies: FullStudy[]
}

export type ProviderState = 'ok' | 'empty' | 'error' | 'disabled'

export interface ProviderStatus {
  source: SourceId
  state: ProviderState
  count: number
  latencyMs: number
  cached: boolean
  message?: string
}

export interface ProviderResult {
  groups: Partial<SearchGroups>
  cached?: boolean
}

export interface RadiologySearchResponse {
  query: string
  groups: SearchGroups
  providers: ProviderStatus[]
  meta: {
    requestedAt: string
    durationMs: number
    partial: boolean
    cacheMaxAgeSeconds: number
  }
}

export const EMPTY_GROUPS: SearchGroups = {
  articleFigures: [],
  studyPreviews: [],
  fullStudies: [],
}

/** Every item in one ordered list: figures first, they are what a reader wants. */
export function flattenGroups(groups: SearchGroups): AtlasItem[] {
  return [...groups.articleFigures, ...groups.studyPreviews, ...groups.fullStudies]
}

export function itemImage(item: AtlasItem): string | undefined {
  if (item.kind === 'article_figure') return item.imageUrl
  if (item.kind === 'study_preview') return item.previewUrl
  return undefined
}

export function itemModality(item: AtlasItem): string | undefined {
  if (item.kind === 'article_figure') return item.modality
  if (item.kind === 'study_preview') return item.modality
  return item.modalities[0]
}

export function itemLink(item: AtlasItem): string {
  return item.kind === 'article_figure' ? item.articleUrl : item.fullStudyUrl
}

export function itemDescription(item: AtlasItem): string {
  return item.kind === 'article_figure' ? item.caption : item.description
}
