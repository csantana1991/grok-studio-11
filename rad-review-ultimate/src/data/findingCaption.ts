/**
 * Diagnosis-specific caption gates.
 *
 * Region agreement is not enough. "Eaglehawk Neck" is not a soft-tissue neck
 * radiograph, and a parathyroid SPECT-CT of the thorax is not croup. When the
 * finding names a specific entity, the figure caption must name that entity
 * (or a standard imaging synonym) or the match is rejected.
 */

export const FINDING_CAPTION: [RegExp, RegExp][] = [
  [/croup|steeple/, /croup|steeple|airway|trachea|subglottic|epiglott/i],
  [/wilms/, /wilms|nephroblast|renal (mass|tumor|tumour)|kidney/i],
  [/intussuscept/, /intussuscept|target sign|currant/i],
  [/round pneumonia/, /round pneumonia|pediatric chest|paediatric chest|lung/i],
  [/datscan|ioflupane|striatum/, /datscan|ioflupane|striatum|putamen|fp-?cit/i],
  [/menisc/, /menisc|bucket.?handle|knee mri/i],
  [/appendic/, /appendic|appendix/i],
  [/graves/, /graves|thyroid|radioiodine|i-?123/i],
  [/sestamibi|mpi|myocard/, /sestamibi|myocard|perfusion|polar|muga|pyp/i],
  [/psma/, /psma|prostate|ga-?68|psma-11|prostate-specific membrane/i],
  [/pulmonary embol|\bpe study\b|filling defect/, /embol|filling defect|pulmonary arter|pe protocol|cta chest|chest ct angiogram|perfusion/i],
  [/pituitary|microadenoma/, /pituitary|sella|microadenoma|hypophys/i],
  [/hida/, /hida|hbrc|cholescintig|gallbladder|biliary/i],
]

export function captionFitsFinding(finding: string, caption: string): boolean {
  const f = String(finding || '')
  const c = String(caption || '')
  for (const [findRe, capRe] of FINDING_CAPTION) {
    if (findRe.test(f)) return capRe.test(c)
  }
  return true
}
