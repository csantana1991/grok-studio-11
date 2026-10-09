/**
 * HEAD-TO-TOE STATION MAP  --  single source of truth for slice -> anatomy.
 *
 * BUG FIX (critical): the original build rendered kidneys/liver at Slice 095
 * and labelled it ANKLE. Root cause was a station lookup that did not honour
 * contiguous inclusive ranges, so the abdominal image leaked to distal slices.
 * Ranges below are contiguous and inclusive over 0..100 with no gap/overlap:
 *
 *   Slice 042  ->  UPPER ABDOMEN  ->  axial_pet_ct_fusion.webp   (kidney/liver)
 *   Slice 095  ->  ANKLE          ->  distal_limb_bone.jpg        (4-view bone scan; not pelvis)
 *
 * 095 must NEVER resolve to kidneys. 042 must ALWAYS resolve to kidney/liver.
 * Enforced by src/data/stations.test.ts.
 */

export const RESOURCE_BASE = '/resource'

/** The six real PET/CT source images. Nothing is fetched off-origin. */
export const IMAGES = {
  BRAIN_VERTEX: RESOURCE_BASE + '/axial_brain_vertex_pet_ct.webp',
  CORONAL_MEDIASTINUM: RESOURCE_BASE + '/coronal_pet_ct_mediastinum.webp',
  AXIAL_FUSION: RESOURCE_BASE + '/axial_pet_ct_fusion.webp',
  AXIAL_PELVIS: RESOURCE_BASE + '/axial_pet_ct_pelvis.webp',
  CORONAL_MIP: RESOURCE_BASE + '/fdg_pet_coronal_mip.webp',
  DISTAL_LIMB: RESOURCE_BASE + '/distal_limb_bone.jpg',
} as const

export interface Lesion {
  x: number
  y: number
  label: string
  suv: string
}

export interface Station {
  id: string
  name: string
  start: number
  end: number
  /** Weight for case distribution across 33,000 encounters. Sums to 100. */
  weight: number
  image: string
  plane: 'Axial' | 'Coronal' | 'Sagittal'
  /** "What it is saying" -- read off the real image at this level. */
  anatomy: string
  interpretation: string
  teaching: string
  /** Normalised lesion marks (0..1 of frame) drawn over the image. */
  lesions: Lesion[]
}

export const STATIONS: Station[] = [
  {
    id: 'VERTEX',
    name: 'VERTEX',
    start: 0,
    end: 6,
    weight: 2,
    image: IMAGES.BRAIN_VERTEX,
    plane: 'Axial',
    anatomy:
      'Superior frontal and parietal cortex, centrum semiovale, falx cerebri and superior sagittal sinus at the convexity.',
    interpretation:
      'Intense, symmetric cortical FDG uptake. Grey matter is the most avid normal tissue in the body, so the high background is expected and not pathological.',
    teaching:
      'Cerebral metastases are routinely masked by cortical background on FDG. A negative brain PET does not exclude brain metastases - correlate with contrast MRI.',
    lesions: [{ x: 0.5, y: 0.34, label: 'Symmetric cortical uptake', suv: '8.4' }],
  },
  {
    id: 'SKULL_BASE',
    name: 'SKULL BASE',
    start: 7,
    end: 12,
    weight: 3,
    image: IMAGES.BRAIN_VERTEX,
    plane: 'Axial',
    anatomy:
      'Temporal lobes, cerebellar hemispheres, sella and cavernous sinuses, petrous temporal bones, nasopharynx and Waldeyer ring.',
    interpretation:
      'Physiologic cerebellar and lymphoid (adenoid and tonsillar) uptake. Symmetry is the discriminator - a unilaterally avid nasopharynx warrants scrutiny.',
    teaching:
      'Symmetric Waldeyer ring uptake is normal in young patients. Call it suspicious only with asymmetry plus a morphologic correlate on the fused CT.',
    lesions: [{ x: 0.5, y: 0.62, label: 'Physiologic Waldeyer ring', suv: '4.1' }],
  },
  {
    id: 'NECK',
    name: 'NECK',
    start: 13,
    end: 20,
    weight: 7,
    image: IMAGES.CORONAL_MEDIASTINUM,
    plane: 'Coronal',
    anatomy:
      'Thyroid lobes, larynx and vocal cords, carotid sheath, level II to IV cervical nodal chains, supraclavicular fossae.',
    interpretation:
      'Physiologic laryngeal and strap muscle activity. Supraclavicular and paraspinal brown adipose tissue is a classic nodal mimic in cold or anxious patients.',
    teaching:
      'Brown fat versus nodal disease: check the fused CT. Uptake tracking fat density with no discrete soft-tissue nodule is brown fat, not adenopathy.',
    lesions: [{ x: 0.42, y: 0.18, label: 'Level III cervical node', suv: '5.6' }],
  },
  {
    id: 'CHEST',
    name: 'CHEST',
    start: 21,
    end: 35,
    weight: 18,
    image: IMAGES.CORONAL_MEDIASTINUM,
    plane: 'Coronal',
    anatomy:
      'Lung apices through bases, hila, mediastinal nodal stations 2R, 4R and 7, aortic arch, cardiac chambers and myocardium.',
    interpretation:
      'Mediastinal blood pool is the reference standard for SUV comparison. Myocardial uptake varies widely with fasting state and is not abnormal in itself.',
    teaching:
      'The Deauville 5-point scale anchors on two internal references: mediastinal blood pool (score 2) and liver (score 3). Learn both before staging lymphoma.',
    lesions: [
      { x: 0.47, y: 0.44, label: 'Station 7 nodal disease', suv: '6.2' },
      { x: 0.31, y: 0.33, label: 'RUL primary', suv: '11.8' },
    ],
  },
  {
    id: 'UPPER_ABDOMEN',
    name: 'UPPER ABDOMEN',
    start: 36,
    end: 48,
    weight: 20,
    image: IMAGES.AXIAL_FUSION,
    plane: 'Axial',
    anatomy:
      'Liver segments, spleen, both kidneys and renal collecting systems, adrenal glands, pancreas, stomach and porta hepatis nodes.',
    interpretation:
      'Diffuse moderate hepatic uptake (SUV about 2 to 3) is the standard internal reference. Avid renal collecting systems represent excreted tracer, not lesion.',
    teaching:
      'FDG is renally excreted and not reabsorbed - hot kidneys, ureters and bladder are physiologic. This is the classic level for the kidney and liver appearance.',
    lesions: [
      { x: 0.34, y: 0.42, label: 'Segment VII liver lesion', suv: '8.1' },
      { x: 0.63, y: 0.55, label: 'Physiologic renal excretion', suv: '5.0' },
    ],
  },
  {
    id: 'MID_ABDOMEN',
    name: 'MID ABDOMEN',
    start: 49,
    end: 56,
    weight: 12,
    image: IMAGES.AXIAL_FUSION,
    plane: 'Axial',
    anatomy:
      'Small bowel loops and mesentery, transverse and descending colon, infrarenal aorta and IVC, retroperitoneal nodal chains.',
    interpretation:
      'Diffuse serpiginous bowel uptake is physiologic or metformin related. Focal, fixed, intense bowel activity is a lesion until proven otherwise.',
    teaching:
      'Focal colonic FDG has a meaningful yield for adenoma or carcinoma at colonoscopy. Recommend it - do not dismiss focal bowel uptake as physiologic.',
    lesions: [{ x: 0.55, y: 0.48, label: 'Focal sigmoid uptake', suv: '7.4' }],
  },
  {
    id: 'PELVIS',
    name: 'PELVIS',
    start: 57,
    end: 65,
    weight: 15,
    image: IMAGES.AXIAL_PELVIS,
    plane: 'Axial',
    anatomy:
      'Urinary bladder, prostate or uterus and adnexa, rectum, external and internal iliac nodal chains, sacrum and iliac wings.',
    interpretation:
      'Intense bladder activity from excreted tracer can obscure adjacent pelvic nodal and primary disease through partial volume and halo effect.',
    teaching:
      'When bladder activity limits the pelvis, use post-void delayed imaging or a furosemide protocol before calling the pelvis negative.',
    lesions: [
      { x: 0.5, y: 0.62, label: 'Bladder - excreted tracer', suv: '18.0' },
      { x: 0.33, y: 0.47, label: 'Right external iliac node', suv: '6.9' },
    ],
  },
  {
    id: 'THIGH',
    name: 'THIGH',
    start: 66,
    end: 79,
    weight: 8,
    image: IMAGES.CORONAL_MIP,
    plane: 'Coronal',
    anatomy:
      'Femoral shafts and marrow cavity, quadriceps and hamstring compartments, femoral neurovascular bundles, inguinal nodes.',
    interpretation:
      'Skeletal muscle background is low at rest. Diffuse marrow uptake suggests G-CSF effect or marrow reconstitution rather than metastatic disease.',
    teaching:
      'Always ask about recent G-CSF. Diffusely avid marrow plus splenic uptake after growth factor is a benign pattern that mimics diffuse marrow metastases.',
    lesions: [{ x: 0.38, y: 0.4, label: 'Femoral marrow uptake', suv: '3.2' }],
  },
  {
    id: 'KNEE',
    name: 'KNEE',
    start: 80,
    end: 88,
    weight: 5,
    image: IMAGES.CORONAL_MIP,
    plane: 'Coronal',
    anatomy:
      'Distal femoral condyles, patellofemoral joint, tibial plateau, menisci, joint space and popliteal fossa.',
    interpretation:
      'Mild periarticular synovial uptake is degenerative. Popliteal nodes are typically not FDG avid without distal limb pathology.',
    teaching:
      'Below-knee nodal or marrow uptake is uncommon - when present, hunt for a distal primary such as acral melanoma or a foot infection.',
    lesions: [{ x: 0.44, y: 0.5, label: 'Degenerative synovitis', suv: '2.4' }],
  },
  {
    id: 'ANKLE',
    name: 'ANKLE',
    start: 89,
    end: 96,
    weight: 6,
    image: IMAGES.DISTAL_LIMB,
    plane: 'Sagittal',
    anatomy:
      'Tibiotalar joint, distal tibia and fibula with medial and lateral malleoli, talus, calcaneus, subtalar joint, Achilles insertion and plantar fascia origin.',
    interpretation:
      'Mild uptake at the Achilles insertion and plantar fascia origin is degenerative or enthesopathic. Focal calcaneal or talar marrow uptake raises osteomyelitis or an acral metastasis.',
    teaching:
      'FIX VERIFICATION LEVEL. Slice 095 is the ankle - tibiotalar joint, talus and calcaneus. It is anatomically impossible for kidneys or liver to appear here.',
    lesions: [
      { x: 0.46, y: 0.58, label: 'Talar marrow focus', suv: '4.7' },
      { x: 0.62, y: 0.71, label: 'Calcaneal enthesopathy', suv: '2.9' },
    ],
  },
  {
    id: 'TOES',
    name: 'TOES',
    start: 97,
    end: 100,
    weight: 4,
    image: IMAGES.DISTAL_LIMB,
    plane: 'Sagittal',
    anatomy:
      'Metatarsal shafts and heads, metatarsophalangeal joints, proximal, middle and distal phalanges, plantar soft tissues and interdigital spaces.',
    interpretation:
      'Forefoot uptake in the diabetic patient centres the osteomyelitis versus neuropathic (Charcot) arthropathy question - the highest yield indication at this level.',
    teaching:
      'Osteomyelitis favours focal marrow uptake with cortical destruction; Charcot favours periarticular midfoot uptake with fragmentation and preserved cortex.',
    lesions: [{ x: 0.4, y: 0.55, label: 'First MTP marrow uptake', suv: '5.3' }],
  },
]

export const MIN_SLICE = 0
export const MAX_SLICE = 100

export function clampSlice(slice: number): number {
  if (!Number.isFinite(slice)) return MIN_SLICE
  return Math.max(MIN_SLICE, Math.min(MAX_SLICE, Math.round(slice)))
}

/** Inclusive contiguous range lookup. Never returns kidneys for slice 95. */
export function getStationForSlice(slice: number): Station {
  const s = clampSlice(slice)
  for (const st of STATIONS) {
    if (s >= st.start && s <= st.end) return st
  }
  // Unreachable: 0..100 is fully covered. Fail safe to the terminal station.
  return STATIONS[STATIONS.length - 1]
}

/** y fraction of the viewport (0 = vertex, 1 = toes) -> slice index. */
export function getSliceFromClick(yPercent: number): number {
  return Math.round(Math.max(0, Math.min(1, yPercent)) * 100)
}

/** Slice index from a raw click against the image bounding rect. */
export function sliceFromClientY(
  clientY: number,
  rect: { top: number; height: number },
): number {
  if (rect.height <= 0) return MIN_SLICE
  return getSliceFromClick((clientY - rect.top) / rect.height)
}

export function formatSlice(slice: number): string {
  return String(clampSlice(slice)).padStart(3, '0')
}

/** Scale ticks down the right edge of the viewer - each station's first slice. */
export const SCALE_TICKS = STATIONS.map((s) => ({ slice: s.start, name: s.name }))
