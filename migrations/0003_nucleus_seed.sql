-- 33,000 encounters via generate_series. Held studies are not created.
-- Source-label rows are CURRICULUM TARGETS, not de-identified patient diagnoses.
insert into catalog_studies (
  id, study_key, source_name, collection_name, source_study_uid, source_series_uid,
  track, modality_bucket, dicom_modality, body_region, study_description, series_description,
  image_count, source_url, license_name, license_url, attribution, image_delivery,
  preview_url, qa_status, teaching_status, case_basis
)
select
  g.id,
  'NBA-' || lpad(g.id::text, 6, '0'),
  'Nucleus Board Academy curriculum library',
  case
    when g.id <= 12000 then 'DR radiography interpretation series'
    when g.id <= 17000 then 'DR CT interpretation series'
    when g.id <= 19500 then 'DR ultrasound interpretation series'
    when g.id <= 22000 then 'DR MRI interpretation series'
    when g.id <= 25000 then 'DR breast and fluoroscopy interpretation series'
    when g.id <= 29000 then 'NM general scintigraphy interpretation series'
    when g.id <= 32000 then 'NM PET/hybrid interpretation series'
    when g.id <= 32965 then 'NM cardiac SPECT/PET interpretation series'
    else 'NM authored therapy and safety simulations'
  end,
  '1.2.826.0.1.3680043.8.498.nba.' || g.id::text,
  '1.2.826.0.1.3680043.8.498.nba.ser.' || g.id::text,
  case when g.id <= 25000 then 'DR' else 'NM' end,
  case
    when g.id <= 12000 then 'XR'
    when g.id <= 17000 then 'CT'
    when g.id <= 19500 then 'US'
    when g.id <= 22000 then 'MRI'
    when g.id <= 25000 then 'BREAST_FLUORO'
    when g.id <= 29000 then 'NM_GENERAL'
    when g.id <= 32000 then 'PET'
    when g.id <= 32965 then 'CARDIAC_NM'
    else 'THERAPY'
  end,
  case
    when g.id <= 12000 then 'CR'
    when g.id <= 17000 then 'CT'
    when g.id <= 19500 then 'US'
    when g.id <= 22000 then 'MR'
    when g.id <= 25000 then 'MG'
    when g.id <= 29000 then 'NM'
    when g.id <= 32000 then 'PT'
    when g.id <= 32965 then 'NM'
    else 'NM'
  end,
  case (g.id % 8)
    when 0 then 'head/neck'
    when 1 then 'chest'
    when 2 then 'abdomen'
    when 3 then 'pelvis'
    when 4 then 'spine'
    when 5 then 'extremity'
    when 6 then 'cardiac'
    else 'whole-body'
  end,
  case
    when g.id <= 12000 then 'Radiograph series for systematic projection readout'
    when g.id <= 17000 then 'CT series for windowed station search'
    when g.id <= 19500 then 'Ultrasound cine/stills for grayscale-first readout'
    when g.id <= 22000 then 'MRI series for sequence-first interpretation'
    when g.id <= 25000 then 'Breast or fluoroscopic study for technique and search'
    when g.id <= 29000 then 'Planar/SPECT nuclear study for biodistribution search'
    when g.id <= 32000 then 'PET/CT or PET/MR for tracer distribution search'
    when g.id <= 32965 then 'Cardiac SPECT/PET perfusion or viability series'
    else 'Authored radiopharmaceutical therapy / RISC safety encounter'
  end,
  'Educational stack ' || ((g.id % 24) + 8)::text || ' frames',
  8 + (g.id % 24),
  'https://nucleus-board.academy/curriculum/' || lpad(g.id::text, 6, '0'),
  'CC0 1.0 (educational metadata; no patient image mounted)',
  'https://creativecommons.org/publicdomain/zero/1.0/',
  'Nucleus Board Academy. Curriculum metadata only. Not a de-identified patient study.',
  'remote-image',
  null,
  'dataset-audited',
  'question-ready',
  case when g.id > 32965 then 'authored-simulation' else 'metadata-grounded' end
from generate_series(1, 33000) as g(id);

update catalog_studies c
set case_basis = 'source-label'
from (
  select id from catalog_studies
  where id <= 32965
  order by id % 17, id
  limit 7358
) s
where c.id = s.id;

update catalog_studies set
  image_delivery = 'r2-object',
  preview_url = '/academy/case-ct-1.jpg',
  image_count = 3,
  attribution = 'Bundled educational stills in /academy. Not a source-dataset patient diagnosis.',
  license_name = 'Educational bundle (see file provenance in the Case Library)'
where id in (12010, 12011, 15002);

insert into board_questions (
  study_id, stem, option_a, option_b, option_c, option_d, correct_option,
  answer_title, explanation, distractor_analysis, board_pearl, case_basis, case_kind,
  read_prompt, learning_objectives_json, clinical_review_status
)
select
  s.id,
  case s.case_basis
    when 'authored-simulation' then
      'AUTHORED SIMULATION (not a patient study). For an I-131 or Lu-177 therapy encounter, which governance order is correct before you advise release?'
    when 'source-label' then
      'CURRICULUM TARGET (not a source-dataset patient diagnosis; draft, not faculty-reviewed). After a systematic read of this '
        || s.modality_bucket || ' ' || s.body_region || ' study, which statement is the defensible next teaching step?'
    else
      'METADATA-GROUNDED interpretation item (no unverified pathology claim). For this '
        || s.dicom_modality || ' ' || s.body_region || ' series (' || s.image_count
        || ' images), which action matches a reproducible search pattern?'
  end,
  case (s.id % 4)
    when 0 then 'Complete a modality-specific search pattern before committing a diagnosis.'
    when 1 then 'Call a diagnosis from the series description alone.'
    when 2 then 'Skip adjacent-slice confirmation because the first image looks classic.'
    else 'Treat filename laterality as ground truth without checking the pixels.'
  end,
  case (s.id % 4)
    when 0 then 'Call a diagnosis from the series description alone.'
    when 1 then 'Complete a modality-specific search pattern before committing a diagnosis.'
    when 2 then 'Treat filename laterality as ground truth without checking the pixels.'
    else 'Skip adjacent-slice confirmation because the first image looks classic.'
  end,
  case (s.id % 4)
    when 0 then 'Skip adjacent-slice confirmation because the first image looks classic.'
    when 1 then 'Treat filename laterality as ground truth without checking the pixels.'
    when 2 then 'Complete a modality-specific search pattern before committing a diagnosis.'
    else 'Call a diagnosis from the series description alone.'
  end,
  case (s.id % 4)
    when 0 then 'Treat filename laterality as ground truth without checking the pixels.'
    when 1 then 'Skip adjacent-slice confirmation because the first image looks classic.'
    when 2 then 'Call a diagnosis from the series description alone.'
    else 'Complete a modality-specific search pattern before committing a diagnosis.'
  end,
  case (s.id % 4)
    when 0 then 'A'
    when 1 then 'B'
    when 2 then 'C'
    else 'D'
  end,
  case s.case_basis
    when 'authored-simulation' then 'Governance order: regulations → license → procedures → AU/RSO'
    when 'source-label' then 'Search first; curriculum label is not pixel proof'
    else 'Finish the search pattern before a diagnosis'
  end,
  case s.case_basis
    when 'authored-simulation' then
      'Therapy encounters in this catalog are authored educational simulations. Teach: regulations, then license conditions, then institutional procedures, then authorized-user/RSO instructions. Written directive, identity check, pregnancy status, activity, and release criteria are case-specific and change; look up current NRC/agreement-state and institutional rules. This row is not a real administration.'
    when 'source-label' then
      'The displayed curriculum target is a board-style teaching label, not a TCIA/source-dataset diagnosis and not faculty-reviewed. Collection names and series descriptions are acquisition metadata. Read the pixels with a modality-specific pattern, then compare to the teaching label only after you commit.'
    else
      'No pathology is claimed. The task is orientation, technical quality, expected biodistribution or radiographic search, artifacts, and next step. Do not promote a series title into a diagnosis.'
  end,
  'Wrong options shortcut the read: trusting the series title, skipping adjacent images, or treating laterality metadata as the image. Those are common board errors and unsafe habits.',
  case s.modality_bucket
    when 'XR' then 'Radiograph: projection, laterality, edge-to-edge search; satisfaction of search is the trap.'
    when 'CT' then 'CT: window for the question, then lungs/soft tissue/bone; findings must persist on adjacent slices.'
    when 'US' then 'Ultrasound: grayscale morphology before Doppler; orthogonal confirmation.'
    when 'MRI' then 'MRI: plane and sequence first; never call restricted diffusion without ADC.'
    when 'BREAST_FLUORO' then 'Breast: compare priors and triangulate; fluoro: last-image-hold is not a complete run.'
    when 'NM_GENERAL' then 'NM: tracer, time, expected map, then the unexpected focus; contamination mimics disease.'
    when 'PET' then 'PET: physiologic uptake first; localize on CT/MR before counting a node.'
    when 'CARDIAC_NM' then 'MPI: motion, attenuation, extracardiac activity, then defect reversibility.'
    else 'Therapy: no uptake on the diagnostic pair, no therapeutic dose. Simulation only.'
  end,
  s.case_basis,
  case s.case_basis
    when 'authored-simulation' then 'safety'
    when 'source-label' then 'diagnosis'
    else case (s.id % 3) when 0 then 'anatomy' when 1 then 'technique' else 'interpretation' end
  end,
  case s.modality_bucket
    when 'XR' then 'State projection and laterality, then an edge-to-edge search, then one next step.'
    when 'CT' then 'State plane, contrast, and windows, then station search, then one next step.'
    when 'US' then 'State organ, probe plane, and grayscale findings before any Doppler comment.'
    when 'MRI' then 'State plane and sequence set, then signal pattern, then one next step.'
    when 'PET' then 'State tracer and uptake time, then physiologic map, then one unexplained focus.'
    when 'NM_GENERAL' then 'State tracer, activity/time, expected biodistribution, then the unexpected.'
    when 'CARDIAC_NM' then 'State protocol (stress/rest), quality, then defect pattern and ancillary signs.'
    when 'THERAPY' then 'State indication, agent, identity/pregnancy check, and release logic as a simulation.'
    else 'Modality, observations, focused differential, next step.'
  end,
  '["Read the image before the choices","Do not treat metadata as diagnosis","Name a next clinical or technical step"]',
  'draft'
from catalog_studies s;

update board_questions q
set
  option_a = case (q.study_id % 4) when 0 then 'Regulations → license conditions → institutional procedures → AU/RSO instructions.' when 1 then 'Follow the authorized user preference even if it conflicts with the license.' when 2 then 'Skip the written directive when the schedule is STAT.' else 'Release every I-131 patient by habit rather than a documented dose estimate.' end,
  option_b = case (q.study_id % 4) when 0 then 'Follow the authorized user preference even if it conflicts with the license.' when 1 then 'Regulations → license conditions → institutional procedures → AU/RSO instructions.' when 2 then 'Release every I-131 patient by habit rather than a documented dose estimate.' else 'Skip the written directive when the schedule is STAT.' end,
  option_c = case (q.study_id % 4) when 0 then 'Skip the written directive when the schedule is STAT.' when 1 then 'Release every I-131 patient by habit rather than a documented dose estimate.' when 2 then 'Regulations → license conditions → institutional procedures → AU/RSO instructions.' else 'Follow the authorized user preference even if it conflicts with the license.' end,
  option_d = case (q.study_id % 4) when 0 then 'Release every I-131 patient by habit rather than a documented dose estimate.' when 1 then 'Skip the written directive when the schedule is STAT.' when 2 then 'Follow the authorized user preference even if it conflicts with the license.' else 'Regulations → license conditions → institutional procedures → AU/RSO instructions.' end
where q.case_basis = 'authored-simulation';

insert into study_annotation_sets (
  study_id, name, source_kind, format, structure_count, confidence, clinical_review_status
)
select id,
  'Orientation / search regions',
  'orientation-guide',
  'inline-json',
  3,
  null,
  'draft'
from catalog_studies
where id in (12010, 1, 25001, 29001, 32001, 32966);

insert into image_annotations (study_id, label, shape, coordinates_json, caption, clinical_review_status)
values
  (12010, 'Upper thorax search band', 'box', '{"x":0.08,"y":0.10,"w":0.84,"h":0.22}', 'ORIENTATION GUIDE only — not a detection. Search the upper third of this stack.', 'draft'),
  (12010, 'Mid thorax search band', 'box', '{"x":0.08,"y":0.34,"w":0.84,"h":0.28}', 'ORIENTATION GUIDE only — not a detection.', 'draft'),
  (1, 'Film edge-to-edge sweep', 'box', '{"x":0.05,"y":0.05,"w":0.90,"h":0.90}', 'ORIENTATION GUIDE: finish the margins before satisfaction of search.', 'draft');
