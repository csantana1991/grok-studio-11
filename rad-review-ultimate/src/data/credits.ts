/**
 * IMAGE PROVENANCE AND ATTRIBUTION
 *
 * Every source image is a real published PET/CT figure retrieved from the
 * PubMed Central open-access subset via Europe PMC. All six are licensed
 * CC BY 4.0, which permits reuse and format conversion with attribution.
 * The only modification made was conversion to WebP and downscaling.
 *
 * Attribution is displayed in the viewer and in the mount drawer. Do not
 * remove it -- it is a licence condition, not decoration.
 */

export interface Credit {
  /** Filename in /resource that this credit describes. */
  file: string
  /** What the figure actually depicts, verified by inspection. */
  depicts: string
  figure: string
  title: string
  authors: string
  journal: string
  year: string
  doi: string
  pmcid: string
  license: string
}

export const CREDITS: Credit[] = [
  {
    file: 'axial_brain_vertex_pet_ct.webp',
    depicts: 'Axial FDG PET, CT and fused PET/CT of the brain',
    figure: 'Figure 2',
    title:
      'A Rare Case of Solitary Brain Metastasis From Papillary Thyroid Carcinoma: The Role of Empiric I-131 Therapy and SPECT/CT in Achieving an 11-Year Survival',
    authors: 'Vatankulu B, Yilmaz S',
    journal: 'Cureus',
    year: '2026',
    doi: '10.7759/cureus.105291',
    pmcid: 'PMC13080539',
    license: 'CC BY 4.0',
  },
  {
    file: 'coronal_pet_ct_mediastinum.webp',
    depicts: 'Whole-body MIP with axial thoracic fused PET/CT sections',
    figure: 'Figure 1',
    title:
      '68Ga-pentixafor PET/CT shows better diagnostic performance than 18F-FDG PET/CT in chronic lymphocytic leukemia/small lymphocytic lymphoma: a case report and review of literature',
    authors: 'Wu D, Hua R, Mao Z, Hu Y, Zhang J, Tian C, Zheng L, Zhang X, Bian Y',
    journal: 'Frontiers in Oncology',
    year: '2026',
    doi: '10.3389/fonc.2026.1699568',
    pmcid: 'PMC13082928',
    license: 'CC BY 4.0',
  },
  {
    file: 'axial_pet_ct_fusion.webp',
    depicts:
      'Coronal and axial fused PET/CT of the upper abdomen -- liver, spleen, both kidneys and retroperitoneal nodes',
    figure: 'Figure 1',
    title: 'FDG uptake in upper abdominal lymph node as a distinctive pattern in sarcoidosis',
    authors:
      'Minamimoto R, Abe Y, Morimoto R, Ito R, Fujita N, Murohara T, Kato K, Naganawa S',
    journal: 'Japanese Journal of Radiology',
    year: '2026',
    doi: '10.1007/s11604-025-01935-x',
    pmcid: 'PMC13144277',
    license: 'CC BY 4.0',
  },
  {
    file: 'axial_pet_ct_pelvis.webp',
    depicts: 'Axial fused PET/CT of the pelvis',
    figure: 'Figure 1',
    title:
      'Discordant Radiologic and Biochemical Response With Inflammatory Activity in Metastatic Prostate Cancer: A Case Report',
    authors: 'Bivolarski I, Dimitrov M, Yordanova T',
    journal: 'Cureus',
    year: '2026',
    doi: '10.7759/cureus.109495',
    pmcid: 'PMC13198888',
    license: 'CC BY 4.0',
  },
  {
    file: 'fdg_pet_coronal_mip.webp',
    depicts: 'Whole-body coronal FDG PET maximum intensity projection, vertex to feet',
    figure: 'Figure 1',
    title: 'Intrahepatic Cholangiocarcinoma: The Weight of History',
    authors: 'Costa Cabral T, Ambrosio AR, Silva BM, de Oliveira I, Pego H',
    journal: 'Cureus',
    year: '2026',
    doi: '10.7759/cureus.110072',
    pmcid: 'PMC13322748',
    license: 'CC BY 4.0',
  },
  {
    file: 'distal_limb_bone.jpg',
    depicts:
      'Four-view skeletal scintigraphy used as the distal-limb teaching analogue (knee / ankle / toes). Replaces a pelvis PET/CT that had been mis-filed as the ankle station image.',
    figure: 'Teaching analogue',
    title: 'Four-view bone scan — distal limb station plate',
    authors: 'NucMed Board Studio plate library',
    journal: 'Educational analogue',
    year: '2026',
    doi: '',
    pmcid: '',
    license: 'educational analogue',
  },
]

export const CREDIT_BY_FILE: Record<string, Credit> = Object.fromEntries(
  CREDITS.map((c) => [c.file, c]),
)

/** Compact one-line attribution, e.g. for an image overlay. */
export function shortCredit(c: Credit): string {
  return `${c.authors.split(',')[0]} et al., ${c.journal} ${c.year} - ${c.figure} - ${c.license}`
}
