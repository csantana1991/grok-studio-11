/**
 * FINDING -> STATION MAPPING
 *
 * BUG FIX (second class, same family as the Slice 095 defect): stations were
 * originally drawn by weighted random roll, independent of the finding text.
 * That let "CT head non-contrast acute subdural haematoma" be filed at TOES and
 * "MRI knee bucket-handle tear" at NECK, so the viewer faithfully rendered a
 * foot for a head CT. The image pipeline was right; the encounter data was not.
 *
 * Station is now DERIVED from the anatomy named in the finding, with the
 * modality as a secondary hint. The weighted roll survives only for findings
 * that name no region at all, so it can no longer contradict the text.
 *
 * Consequence, stated plainly: the station distribution is now driven by what
 * the finding pools describe rather than by the specified weights. That is the
 * correct trade -- a real worklist's station mix is a function of what was
 * scanned, and an arbitrary distribution is not worth a head CT showing a foot.
 *
 * Resolution order:
 *   1. SPECIFIC_RULES  -- named structures and unambiguous pathology
 *   2. REGION_RULES    -- generic region words (head, chest, abdomen, pelvis)
 *   3. CATEGORY_STATION-- modality implies the region (mammography is thoracic)
 *   4. null            -- caller falls back to the weighted roll
 *
 * Ordering inside SPECIFIC_RULES matters. Unambiguous intracranial pathology is
 * tested before NECK so "CTA head and neck ... M1 occlusion" resolves to the
 * brain, while "head and neck SCC base of tongue" is caught earlier by the
 * tongue/tonsil rule and stays at NECK.
 */

import { isNonRadiologic } from './nonRadiologic'

/** Named structures and pathology that pin a single level. Most specific first. */
export const SPECIFIC_RULES: [RegExp, string][] = [
  // ---- Distal lower limb -------------------------------------------------
  [/\b(toe|toes|metatars\w*|phalan\w*|forefoot|hallux|mtp\b|interdigital)/i, 'TOES'],
  [
    /\b(ankle|calcaneal|calcaneus|talar|talus|tibiotalar|subtalar|achilles|plantar|heel|hindfoot|midfoot|lisfranc|malleol\w*|charcot|weber b)/i,
    'ANKLE',
  ],
  [/\bfoot\b/i, 'ANKLE'],
  [
    /\b(knee|menisc\w*|patell\w*|tibial plateau|tibial shaft|cruciate|\bacl\b|\bpcl\b|popliteal|schatzker|baker cyst)/i,
    'KNEE',
  ],

  // ---- Hip belongs to PELVIS, and must beat THIGH's "femoral" ------------
  [
    /\b(femoral neck|hip\b|acetabul\w*|garden i|slipped capital|perthes|labral tear|arthroplasty)/i,
    'PELVIS',
  ],
  [
    /\b(thigh|quadriceps|vastus\w*|hamstring|femoral shaft|femoral diaphysis|femur|femoral access|deep vein thrombosis|\bdvt\b|lower extremity venous)/i,
    'THIGH',
  ],

  // ---- Pelvic organs -----------------------------------------------------
  [
    /\b(bladder|prostat\w*|\bpsma\b|uter\w*|endometri\w*|ovar\w*|adnex\w*|cervix|rectal|rectum|perianal|iliac|sacr\w*|sacroiliac|testic\w*|torsion|scrotal|varicocele|inguinal|vesicoureteral|obstetric|ectopic pregnancy|nuchal|leiomyoma|dermoid|endometrioma)/i,
    'PELVIS',
  ],

  // ---- Upper abdominal organs -------------------------------------------
  [
    /\b(liver|hepat\w*|kidney|renal|nephr\w*|renogram|mag3|dmsa|adrenal|pancrea\w*|splee\w*|splenic|gallbladder|cholecyst\w*|cholelith\w*|choledocho\w*|biliary|cholangio\w*|gastric|stomach|pylor\w*|duoden\w*|porta hepatis|hepatic flexure|wilms|mrcp|morison|portal vein|portal hypertension|radioembolisation|radioembolization|bremsstrahlung|\by-90\b|steatosis)/i,
    'UPPER_ABDOMEN',
  ],

  // ---- Mid abdominal organs ---------------------------------------------
  [
    /\b(bowel|colon\w*|colitis|colonograph\w*|sigmoid|caecal|cecal|ileal|ileum|ileocolic|jejun\w*|mesenter\w*|appendic\w*|appendix|appendicolith|crohn|diverticul\w*|retroperiton\w*|intraperitoneal|viscus|omental|peritoneal|intussusception|enterocolitis|meckel|volvulus|midgut|gastrointestinal bleed|abdominal aorta|infrarenal|neuroblastoma|lumbar spine|\bl[1-5]\s*[-/]\s*[ls]?[1-5]\b)/i,
    'MID_ABDOMEN',
  ],

  // ---- Unambiguous intracranial (must precede NECK) ---------------------
  [
    /\b(brain|cerebral|cerebell\w*|intracranial|subdural|subarachnoid|extradural|glioma|glioblastoma|meningioma|medulloblastoma|hydrocephalus|encephalitis|encephalopathy|demyelinat\w*|multiple sclerosis|\bmca\b|\bm1\b|stroke|striatal|datscan|\bcsf\b|shunt patency|germinal matrix|craniospinal|whole brain|gamma knife|pseudoprogression|dawson|cavernous malformation|limbic)/i,
    'VERTEX',
  ],

  // ---- Skull base and facial --------------------------------------------
  [
    /\b(skull|petrous|temporal bone|sella|pituitary|cavernous sinus|posterior fossa|vestibular schwannoma|clivus|orbit\w*|optic|sinus\w*|rhinosinusitis|mandib\w*|maxill\w*|facial bones|zygomatic|cholesteatoma|otosclerosis|internal auditory|nasopharyn\w*|waldeyer|adenoid)/i,
    'SKULL_BASE',
  ],

  // ---- Neck --------------------------------------------------------------
  [
    /\b(neck|thyroid|thyroglossal|thyroiditis|graves|laryn\w*|vocal cord|tonsil\w*|peritonsillar|tongue|oropharyn\w*|pharyn\w*|parotid|salivary|sialolith\w*|sjogren|carotid|supraclavicular|cervical spine|\bc[1-7]\b|odontoid|croup|retropharyngeal|goitre|goiter|parathyroid|radioiodine|\bi-131\b|\bi-123\b|thyroglobulin)/i,
    'NECK',
  ],

  // ---- Thoracic ----------------------------------------------------------
  [
    /\b(lung|pulmonary|pleural|pneumo\w*|bronch\w*|bronchiectasis|mediastin\w*|hilar|hila\b|thorac\w*|chest|cardiac|myocard\w*|heart|coronary|pericard\w*|ventricular|atrial|aort\w*|\btavi\b|annulus|valve|\bmuga\b|\blvef\b|ejection fraction|agatston|calcium score|thallium|viability|perfusion defect|segmental defect|ventilation|\bv\/q\b|amyloidosis|takotsubo|cardiomyopathy|myocarditis|breast|mammogra\w*|\bbi-rads\b|rib|sternal|thymoma|oesophag\w*|esophag\w*|\bgej\b|lobar|lobe\b|emphysema|asbestos|tuberculo\w*|sarcoid\w*|pectus|nsclc|\brul\b|\brll\b|\blul\b|\blll\b|station 7|hodgkin|dlbcl|deauville|axillary|sentinel node|inferior wall|inferolateral|septal)/i,
    'CHEST',
  ],

  // Upper limb: with the arms alongside or overhead these sit at thoracic
  // level on a head-to-toe acquisition. CHEST is the least-wrong station.
  [
    /\b(shoulder|humer\w*|clavic\w*|elbow|forearm|radius|ulnar|wrist|scaphoid|hand\b|supraspinatus|rotator cuff|brachial|colles|prosthetic joint)/i,
    'CHEST',
  ],

  // Spine without a named level: the thoracic segment is the longest.
  [/\b(spine|spinal|vertebra\w*|discitis|cord\b|kypho\w*|scoliosis|ankylosing|bamboo)/i, 'CHEST'],

  // These name a disease and not a level. Pin the station the study is read
  // at, instead of rolling a random one the caption can never confirm.
  [/\bosteomyelitis three-phase\b|\bcomplex regional pain\b/i, 'ANKLE'],
  [
    /\bbone scan\b|\bsuperscan\b|\bsarcopenia\b|\bbone density\b|\bpainful bone metastasis\b|\bmyeloma\b/i,
    'PELVIS',
  ],
  [/\bspondylolysis\b|\bpars defects?\b|\blumbar\b/i, 'MID_ABDOMEN'],
  [/\bforeign body\b/i, 'THIGH'],
  [/\bmetabolic response\b|\btotal body irradiation\b/i, 'CHEST'],
]

/** Generic region words, tested only after every specific rule has missed. */
export const REGION_RULES: [RegExp, string][] = [
  [/\babdomin\w*|\babdomen\b/i, 'MID_ABDOMEN'],
  [/\bpelvi\w*/i, 'PELVIS'],
  [/\bhead\b|cranial/i, 'VERTEX'],
]

/**
 * Modalities whose anatomy is fixed by definition. Mammography is thoracic and
 * cardiac imaging is thoracic regardless of the wording of the finding.
 */
export const CATEGORY_STATION: Record<string, string> = {
  MAMMO: 'CHEST',
  CARDIAC: 'CHEST',
}

/**
 * Station id implied by a finding, or null when nothing anatomical is named.
 * Callers fall back to the weighted roll for null.
 */
export function stationIdForFinding(finding: string, categoryId?: string): string | null {
  if (isNonRadiologic(finding)) return null
  for (const [re, id] of SPECIFIC_RULES) if (re.test(finding)) return id
  for (const [re, id] of REGION_RULES) if (re.test(finding)) return id
  if (categoryId && CATEGORY_STATION[categoryId]) return CATEGORY_STATION[categoryId]
  return null
}
