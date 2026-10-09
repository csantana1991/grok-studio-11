/**
 * IMAGE SOURCE REGISTRY
 *
 * The cascade of places to look for imaging for an encounter. Each source
 * declares honestly what it can do, because they differ sharply and pretending
 * otherwise would produce buttons that silently do nothing:
 *
 *   fetch  — RAD Review can retrieve images itself and add them to the
 *            rotation. Requires a public API AND a licence permitting reuse.
 *   link   — opens that site's own search, pre-filled for this encounter.
 *            Used where there is no usable API, where results are DICOM rather
 *            than web images, or where the terms do not permit redistribution.
 *
 * Measured on 2026-09-01:
 *   PMC          fetch   working through the local proxy
 *   TCIA         link    public JSON API exists, but it serves DICOM series;
 *                        rendering them needs a conversion step this app does
 *                        not have, so the search is opened instead
 *   Open-i       link    /api/search times out; every other path returns the
 *                        Angular shell. No usable API at present.
 *   Radiopaedia  link    API returns 401 without a token, and cases are
 *                        CC BY-NC-SA, so images are not redistributed here
 *   IDC          link    portal search; programmatic access needs BigQuery
 *   MedPix       link    no public API, and NLM reports availability issues
 *   CTisus       link    teaching library, no API, all rights reserved
 */

export type SourceKind = 'fetch' | 'link'

export interface ImageSource {
  id: string
  name: string
  /** One line on what this source is best for. */
  note: string
  kind: SourceKind
  /** Build a search URL for a finding. */
  url: (terms: string, modality?: string) => string
  /** Why a link-only source cannot be fetched. Shown in the UI. */
  reason?: string
}

const q = (s: string) => encodeURIComponent(s.trim())

/**
 * Reduce a finding to searchable terms: drop the age/sex prefix, SUV values
 * and scoring artefacts that mean nothing to an image search engine.
 */
export function searchTerms(finding: string): string {
  return finding
    .replace(/^\d+\s*[MFmf]\b/, ' ')
    .replace(/\bSUV\s*[\d.]+/gi, ' ')
    .replace(/\bDeauville\s*\d\b/gi, ' ')
    .replace(/\b(?:LI-RADS|PI-RADS|BI-RADS|Lung-RADS|TI-RADS)\s*\d?\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Open-i modality filter codes, mapped from a RAD Review category. */
const OPENI_MODALITY: Record<string, string> = {
  CT: 'c',
  MRI: 'm',
  PETHYB: 'p',
  NUC: 'p',
  US: 'u',
  RAD: 'x',
  MAMMO: 'x',
}

/**
 * Domains whose radiology images carry a citable, checkable origin. Used to
 * constrain a Google image search, because an unrestricted one returns
 * screenshots, lecture slides and reposts with no traceable source -- which is
 * precisely what must not end up in a teaching viewer without provenance.
 */
export const TRUSTED_IMAGE_DOMAINS = [
  'radiopaedia.org',
  'ncbi.nlm.nih.gov',
  'pmc.ncbi.nlm.nih.gov',
  'openi.nlm.nih.gov',
  'medpix.nlm.nih.gov',
  'cancerimagingarchive.net',
  'ctisus.com',
  'radiologyassistant.nl',
  'ajronline.org',
  'pubs.rsna.org',
  'eurorad.org',
  'appliedradiology.com',
]

const siteFilter = TRUSTED_IMAGE_DOMAINS.map((d) => `site:${d}`).join(' OR ')

export const IMAGE_SOURCES: ImageSource[] = [
  {
    id: 'openi',
    name: 'Open-i',
    note: 'NLM image search across open-access PMC literature; filters by modality',
    kind: 'link',
    reason: 'API unreachable — every endpoint returns the site shell',
    url: (t, m) =>
      `https://openi.nlm.nih.gov/gridquery?q=${q(t)}${m && OPENI_MODALITY[m] ? `&it=${OPENI_MODALITY[m]}` : ''}`,
  },
  {
    id: 'radiopaedia',
    name: 'Radiopaedia',
    note: 'Best for learning one diagnosis: real cases with scrollable series',
    kind: 'link',
    reason: 'API needs your access token; cases are CC BY-NC-SA, not redistributable',
    url: (t) => `https://radiopaedia.org/search?lang=us&q=${q(t)}&scope=cases`,
  },
  {
    id: 'tcia',
    name: 'TCIA',
    note: 'Complete de-identified CT/MRI/PET studies as DICOM',
    kind: 'link',
    reason: 'Serves DICOM series; rendering them needs a conversion step',
    url: (t) => `https://www.cancerimagingarchive.net/?s=${q(t)}`,
  },
  {
    id: 'idc',
    name: 'NCI Imaging Data Commons',
    note: 'Large-scale searchable DICOM; viewable online without login',
    kind: 'link',
    reason: 'Programmatic access is via BigQuery, not a simple image API',
    url: (t) => `https://portal.imaging.datacommons.cancer.gov/explore/?search=${q(t)}`,
  },
  {
    id: 'ctisus',
    name: 'CTisus',
    note: 'Large CT teaching file: abdomen, chest, cardiac, PET/CT',
    kind: 'link',
    reason: 'No public API and the library is all rights reserved',
    url: (t) => `https://www.ctisus.com/search?q=${q(t)}`,
  },
  {
    id: 'medpix',
    name: 'MedPix',
    note: 'NLM teaching file: ~59,000 images across ~12,000 patient cases',
    kind: 'link',
    reason: 'No public API; NLM reports intermittent availability',
    url: (t) => `https://medpix.nlm.nih.gov/search?allen=true&query=${q(t)}`,
  },
  {
    id: 'google-trusted',
    name: 'Google Images — trusted sources',
    note: `Restricted to ${TRUSTED_IMAGE_DOMAINS.length} citable radiology sources (Radiopaedia, PMC, RSNA, Eurorad, TCIA…)`,
    kind: 'link',
    reason: 'Google has no free image API; a Custom Search key would be needed to fetch',
    url: (t) => `https://www.google.com/search?tbm=isch&q=${q(`${t} (${siteFilter})`)}`,
  },
  {
    id: 'google-all',
    name: 'Google Images — everywhere',
    note: 'Widest reach, but results carry no provenance and many are reposts',
    kind: 'link',
    reason: 'Unrestricted results are uncited — check the origin before trusting one',
    url: (t) => `https://www.google.com/search?tbm=isch&q=${q(`${t} radiology`)}`,
  },
  {
    id: 'pmc',
    name: 'PubMed Central',
    note: 'Open-access full text with reusable figures — the source this app fetches',
    kind: 'fetch',
    url: (t) => `https://www.ncbi.nlm.nih.gov/pmc/?term=${q(t)}`,
  },
]

export const FETCHABLE = IMAGE_SOURCES.filter((s) => s.kind === 'fetch')
export const LINK_ONLY = IMAGE_SOURCES.filter((s) => s.kind === 'link')
