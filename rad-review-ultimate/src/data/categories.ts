/**
 * ENCOUNTER LEDGER -- exact counts. These are contractual, not approximate.
 *
 * GROUP 1  17,144 = Q-Ready 7,393 + PET/Hybrid 3,000 + Peds 5,824 + US 927
 * GROUP 2  15,856 = CT 4,500 (corrected from 6,500) + MRI 4,200 + Nuclear 2,500
 *                 + Cardiac 800 + Mammo 1,200 + Rad 1,500 + Therapy 1,156
 * GRAND    33,000
 *
 * Sums are asserted at module load and in src/data/categories.test.ts.
 */

export type GroupId = 1 | 2

export interface Category {
  id: string
  label: string
  /** Short label used on filter pills. */
  pill: string
  group: GroupId
  count: number
  accent: string
}

export const CATEGORIES: Category[] = [
  { id: 'QREADY', label: 'Q-Ready', pill: 'Q-READY', group: 1, count: 7393, accent: '#22d3ee' },
  { id: 'PETHYB', label: 'PET/Hybrid', pill: 'PET/HYB', group: 1, count: 3000, accent: '#f97316' },
  { id: 'PEDS', label: 'Peds', pill: 'PEDS', group: 1, count: 5824, accent: '#a78bfa' },
  { id: 'US', label: 'Ultrasound', pill: 'US', group: 1, count: 927, accent: '#34d399' },
  { id: 'CT', label: 'CT', pill: 'CT', group: 2, count: 4500, accent: '#60a5fa' },
  { id: 'MRI', label: 'MRI', pill: 'MRI', group: 2, count: 4200, accent: '#f472b6' },
  { id: 'NUC', label: 'Nuclear', pill: 'NUCLEAR', group: 2, count: 2500, accent: '#fbbf24' },
  { id: 'CARDIAC', label: 'Cardiac', pill: 'CARDIAC', group: 2, count: 800, accent: '#fb7185' },
  { id: 'MAMMO', label: 'Mammo', pill: 'MAMMO', group: 2, count: 1200, accent: '#e879f9' },
  { id: 'RAD', label: 'Radiography', pill: 'RAD', group: 2, count: 1500, accent: '#94a3b8' },
  { id: 'THERAPY', label: 'Therapy', pill: 'THERAPY', group: 2, count: 1156, accent: '#4ade80' },
]

export const CATEGORY_BY_ID: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
)

export const GROUP_1 = CATEGORIES.filter((c) => c.group === 1)
export const GROUP_2 = CATEGORIES.filter((c) => c.group === 2)

const sum = (list: Category[]) => list.reduce((acc, c) => acc + c.count, 0)

export const GROUP_1_TOTAL = sum(GROUP_1)
export const GROUP_2_TOTAL = sum(GROUP_2)
export const GRAND_TOTAL = GROUP_1_TOTAL + GROUP_2_TOTAL

export const EXPECTED_GROUP_1 = 17144
export const EXPECTED_GROUP_2 = 15856
export const EXPECTED_GRAND = 33000

// Fail loudly at load rather than silently shipping a wrong ledger.
if (GROUP_1_TOTAL !== EXPECTED_GROUP_1) {
  throw new Error('Group 1 ledger mismatch: ' + GROUP_1_TOTAL + ' != ' + EXPECTED_GROUP_1)
}
if (GROUP_2_TOTAL !== EXPECTED_GROUP_2) {
  throw new Error('Group 2 ledger mismatch: ' + GROUP_2_TOTAL + ' != ' + EXPECTED_GROUP_2)
}
if (GRAND_TOTAL !== EXPECTED_GRAND) {
  throw new Error('Grand total mismatch: ' + GRAND_TOTAL + ' != ' + EXPECTED_GRAND)
}

/** ACGME diagnostic radiology case-log competency buckets. */
export const ACGME_CODES = [
  'IV.C.4',
  'IV.C.4.a',
  'IV.C.4.b',
  'IV.C.5',
  'IV.C.6',
  'IV.C.7',
] as const
