/**
 * Finding-matched teaching analogue.
 *
 * Literature figures (PMC) still win when they exist and verify. When they
 * do not, the viewer must not fall back to a wrong-station atlas plate
 * (the failure that put a pelvis PET/CT on an ankle case). These plates
 * were visually inspected; filenames that do not match their pixels are
 * not used for the named finding.
 */

import type { Encounter } from './generateCases'
import type { LiveMatch } from './liveMatch'

const DR = '/studio/assets/dr/'
const RES = '/resource/'

function pick(finding: string, stationId: string, categoryId: string, salt = 0): string {
  const t = `${finding} ${stationId} ${categoryId}`.toLowerCase()
  let list: string[]
  if (/datscan|ioflupane|striatum|parkinson/.test(t))
    list = [DR + 'nm-mag3.jpg'] // pixels ARE I-123 ioflupane SPECT
  else if (/amyloid|temporoparietal|alzheimer/.test(t))
    list = [DR + 'nm-petmri-brain.jpg', DR + 'nm-amyloid.jpg', DR + 'mri-brain-t2.jpg']
  else if (/vertex|subdural|brain|skull|meningioma|cerebral|glioblast|perineural|convexity/.test(t))
    list = [DR + 'mri-brain-t2.jpg', RES + 'axial_brain_vertex_pet_ct.webp']
  else if (/parathyroid|thyroid|graves|iodine|i-123|i-131/.test(t))
    list = [DR + 'thyroid-scan-i123.jpg', DR + 'thyroid-patterns.jpg']
  else if (categoryId === 'CARDIAC' || /sestamibi|myocard|pyp|muga|viability|heart/.test(t))
    list = [DR + 'cardiac-ac.jpg']
  else if (/psma|prostate/.test(t))
    list = [DR + 'nm-psma.jpg', RES + 'axial_pet_ct_pelvis.webp']
  else if (/\bv\/?q\b|ventilation|perfusion/.test(t))
    list = [DR + 'nm-vq1.jpg', DR + 'nm-vq2.jpg']
  else if (/hida|gallbladder|cholecyst/.test(t))
    list = [DR + 'nm-hida.jpg']
  else if (/intussuscept/.test(t))
    list = [DR + 'peds-410.jpg', DR + 'case-ct-1.jpg']
  else if (/round pneumonia|croup|steeple|pediatric chest|pediatric neck/.test(t))
    list = [DR + 'gi-398.jpg', DR + 'peds-410.jpg', DR + 'xr-chest.jpg']
  else if (/wilms|neuroblastoma/.test(t))
    list = [DR + 'nm-bone-4view.jpg', DR + 'case-ct-1.jpg'] // pixels ARE peds FDG PET abdomen
  else if (/kidney|renal|dmsa|mag3|hydroneph|adrenal/.test(t))
    list = [DR + 'case-ct-1.jpg', RES + 'axial_pet_ct_fusion.webp']
  else if (/ipmn|pancrea/.test(t))
    list = [DR + 'case-ct-1.jpg']
  else if (/hepatic|liver|spleen|segment vii/.test(t))
    list = [DR + 'case-ct-1.jpg', DR + 'nm-hida.jpg', RES + 'axial_pet_ct_fusion.webp']
  else if (/small.?bowel|sbo|mesenteric|bowel|intestine/.test(t))
    list = [DR + 'case-ct-1.jpg', RES + 'axial_pet_ct_fusion.webp']
  else if (categoryId === 'MAMMO' || /breast|mammo|gynecomastia/.test(t))
    list = [DR + 'breast-calcs.jpg']
  else if (stationId === 'KNEE' || /popliteal|menisc|patella|\bknee\b|acl/.test(t))
    list = [DR + 'case-mr-1.jpg', DR + 'case-mr-2.jpg', DR + 'case-mr-3.jpg']
  else if (stationId === 'ANKLE' || stationId === 'TOES' || /calcaneus|talus|tibiotalar|forefoot|mtp|lisfranc/.test(t))
    list = [RES + 'distal_limb_bone.jpg', DR + 'bone-scan-wb.jpg']
  else if (stationId === 'THIGH' || /femoral|sarcoma/.test(t))
    list = [DR + 'bone-scan-wb.jpg', RES + 'fdg_pet_coronal_mip.webp']
  else if (/lung|pulmonary|hilar|chest|mediastinal|deauville/.test(t) || stationId === 'CHEST')
    list = [DR + 'xr-chest.jpg', DR + 'case-ct-2.jpg', RES + 'coronal_pet_ct_mediastinum.webp']
  else if (stationId === 'NECK')
    list = [DR + 'case-us-1.jpg', DR + 'thyroid-scan-i123.jpg']
  else if (stationId === 'PELVIS' || /bladder|uterus|iliac/.test(t))
    list = [RES + 'axial_pet_ct_pelvis.webp', DR + 'nm-psma.jpg']
  else if (/\bpet\b|fdg|dotatate/.test(t) || categoryId === 'PETHYB' || categoryId === 'QREADY' || categoryId === 'NUC')
    list = [DR + 'nm-fdg-mip.jpg', RES + 'fdg_pet_coronal_mip.webp']
  else if (categoryId === 'THERAPY')
    list = [DR + 'thyroid-scan-i123.jpg']
  else if (categoryId === 'US')
    list = [DR + 'case-us-1.jpg']
  else if (categoryId === 'RAD')
    list = [DR + 'xr-chest.jpg', DR + 'case-ct-2.jpg']
  else if (categoryId === 'CT')
    list = [DR + 'case-ct-1.jpg', DR + 'case-ct-2.jpg']
  else if (categoryId === 'MRI')
    list = [DR + 'mri-brain-t2.jpg', DR + 'case-mr-1.jpg']
  else if (stationId === 'UPPER_ABDOMEN' || stationId === 'MID_ABDOMEN')
    list = [DR + 'case-ct-1.jpg', RES + 'axial_pet_ct_fusion.webp']
  else list = [DR + 'case-ct-1.jpg', DR + 'xr-chest.jpg', DR + 'nm-fdg-mip.jpg']
  return list[Math.abs(salt | 0) % list.length]
}

export function teachingPlateFor(c: Pick<Encounter, 'finding' | 'stationId' | 'categoryId'> & { idx?: number }): {
  url: string
  caption: string
} {
  const url = pick(c.finding, c.stationId, c.categoryId, c.idx ?? 0)
  const file = url.split('/').pop() || url
  return {
    url,
    caption: `${c.finding} · teaching analogue (${file}) · not this accession's pixels`,
  }
}

export function teachingMatch(c: Encounter): LiveMatch {
  const plate = teachingPlateFor(c)
  return {
    url: plate.url,
    caption: plate.caption,
    relevance: 0.4,
    pmcid: '',
    title: plate.caption,
    authors: 'Teaching analogue',
    journal: 'NucMed Board Studio plate library',
    year: '2026',
    doi: '',
    license: 'educational analogue',
  }
}
