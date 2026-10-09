/**
 * POPULATION MATCHING
 *
 * A figure can name the right body region and still be the wrong patient. A
 * paediatric encounter ("7F neuroblastoma MIBG avid abdominal mass") matched to
 * a figure captioned "A 33-year-old male with nonspecific back pain" is wrong
 * in a way that matters: paediatric and adult imaging differ in anatomy,
 * technique and normal appearances, so an adult study teaches the wrong
 * baseline for a child.
 *
 * Observed live before this check existed.
 */

/** Ages at or below this are paediatric for matching purposes. */
export const PAEDIATRIC_MAX_AGE = 17

const AGE_IN_YEARS = /\b(\d{1,3})[-\s]?(?:year|yr|y)[-\s]?old\b/i
const AGE_IN_MONTHS = /\b(\d{1,3})[-\s]?month[-\s]?old\b/i
const PAEDIATRIC_WORDS =
  /\b(neonat\w*|newborn|infant\w*|toddler|child|children|paediatric|pediatric|adolescent|prematur\w*|foetal|fetal|schoolboy|schoolgirl)\b/i
const ADULT_WORDS = /\b(adult|elderly|middle[- ]aged|octogenarian|nonagenarian)\b/i

export type Population = 'paediatric' | 'adult' | 'unknown'
export type Sex = 'M' | 'F' | null

/** Numeric age in years stated by a caption, or null. Months become a fraction. */
export function captionAge(caption: string): number | null {
  const months = caption.match(AGE_IN_MONTHS)
  if (months) {
    const m = Number(months[1])
    if (Number.isFinite(m)) return Math.round((m / 12) * 10) / 10
  }
  const years = caption.match(AGE_IN_YEARS)
  if (years) {
    const y = Number(years[1])
    if (Number.isFinite(y) && y >= 0 && y <= 120) return y
  }
  return null
}

/** Sex stated by a caption, or null when it says nothing. */
export function captionSex(caption: string): Sex {
  if (/\b(female|woman|girl|lady|\bF\b(?=\s*(?:patient|,|\.)))\b/i.test(caption)) return 'F'
  if (/\b(male|man|boy|gentleman)\b/i.test(caption)) return 'M'
  return null
}

/**
 * How close a caption's stated age is to the encounter's, 0..1.
 *
 * A 63-year-old encounter is best served by a study of someone in their
 * sixties, but a 58-year-old is still a good teaching match and a 45-year-old
 * is usable. This returns a gradient rather than a gate, so a merely imperfect
 * age lowers a figure's rank instead of removing it — the reader should never
 * be left with an empty frame because no exact-age case exists.
 */
export function ageProximity(encounterAge: number, stated: number | null): number {
  if (stated === null) return 0.5 // unstated: neutral, neither rewarded nor punished
  const gap = Math.abs(encounterAge - stated)
  if (gap <= 5) return 1
  if (gap <= 10) return 0.85
  if (gap <= 20) return 0.6
  if (gap <= 30) return 0.35
  return 0.15
}

/** The patient population a figure caption describes, if it states one. */
export function captionPopulation(caption: string): Population {
  const months = caption.match(AGE_IN_MONTHS)
  if (months) return 'paediatric'

  const years = caption.match(AGE_IN_YEARS)
  if (years) {
    const age = Number(years[1])
    if (Number.isFinite(age)) return age <= PAEDIATRIC_MAX_AGE ? 'paediatric' : 'adult'
  }

  if (PAEDIATRIC_WORDS.test(caption)) return 'paediatric'
  if (ADULT_WORDS.test(caption)) return 'adult'
  return 'unknown'
}

/** The population an encounter belongs to. */
export function encounterPopulation(age: number, categoryId: string): Population {
  if (categoryId === 'PEDS' || age <= PAEDIATRIC_MAX_AGE) return 'paediatric'
  return 'adult'
}

/**
 * True when a caption's stated population contradicts the encounter's.
 * A caption that states no population never conflicts -- most figure captions
 * omit the patient entirely, and rejecting those would discard nearly
 * everything.
 */
export function populationConflict(caption: string, encounter: Population): boolean {
  const stated = captionPopulation(caption)
  if (stated === 'unknown') return false
  return stated !== encounter
}
