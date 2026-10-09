-- Nucleus Board Academy catalog. Unowned educational rows (no user_id).
create table if not exists catalog_studies (
  id integer primary key,
  study_key text not null unique,
  source_name text not null,
  collection_name text not null,
  source_study_uid text not null unique,
  source_series_uid text,
  track text not null check (track in ('DR', 'NM')),
  modality_bucket text not null,
  dicom_modality text not null,
  body_region text not null,
  study_description text not null,
  series_description text not null,
  image_count integer not null check (image_count > 0),
  source_url text not null,
  license_name text not null,
  license_url text not null,
  attribution text not null,
  image_delivery text not null check (image_delivery in ('remote-image', 'tcia-dicom', 'r2-object')),
  preview_url text,
  qa_status text not null check (qa_status in ('dataset-audited', 'faculty-verified', 'held')),
  teaching_status text not null check (teaching_status in ('exposure', 'question-ready', 'annotated')),
  case_basis text not null check (case_basis in ('source-label', 'metadata-grounded', 'authored-simulation')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists board_questions (
  id serial primary key,
  study_id integer not null unique references catalog_studies(id) on delete cascade,
  stem text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  correct_option text not null check (correct_option in ('A', 'B', 'C', 'D')),
  answer_title text not null,
  explanation text not null,
  distractor_analysis text not null,
  board_pearl text not null,
  case_basis text not null check (case_basis in ('source-label', 'metadata-grounded', 'authored-simulation')),
  case_kind text not null check (case_kind in ('diagnosis', 'anatomy', 'technique', 'interpretation', 'safety')),
  read_prompt text not null,
  learning_objectives_json text not null,
  clinical_review_status text not null check (clinical_review_status in ('draft', 'reviewed', 'retired')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists image_annotations (
  id serial primary key,
  study_id integer not null references catalog_studies(id) on delete cascade,
  label text not null,
  shape text not null,
  coordinates_json text not null,
  caption text not null,
  clinical_review_status text not null check (clinical_review_status in ('draft', 'reviewed', 'retired'))
);

create table if not exists study_annotation_sets (
  id serial primary key,
  study_id integer not null references catalog_studies(id) on delete cascade,
  name text not null,
  source_kind text not null check (source_kind in ('source-mask', 'model-anatomy', 'faculty-reviewed', 'orientation-guide')),
  format text not null check (format in ('inline-json', 'dicom-seg', 'rle-mask', 'polygon-manifest')),
  manifest_url text,
  structure_count integer not null default 0,
  confidence text,
  clinical_review_status text not null check (clinical_review_status in ('draft', 'reviewed', 'retired')),
  model_name text,
  model_version text,
  created_at timestamptz not null default now()
);

create table if not exists learner_progress (
  learner_id text not null,
  study_id integer not null references catalog_studies(id) on delete cascade,
  status text not null check (status in ('seen', 'answered', 'mastered', 'review')),
  selected_option text,
  is_correct integer,
  attempts integer not null default 0,
  last_seen_at timestamptz not null default now(),
  primary key (learner_id, study_id)
);

create index if not exists catalog_studies_track_mod_idx on catalog_studies (track, modality_bucket);
create index if not exists catalog_studies_basis_idx on catalog_studies (case_basis);
create index if not exists catalog_studies_qa_idx on catalog_studies (qa_status, teaching_status);
create index if not exists catalog_studies_body_idx on catalog_studies (body_region);
create index if not exists board_questions_basis_idx on board_questions (case_basis);
create index if not exists image_annotations_study_idx on image_annotations (study_id);
create index if not exists study_annotation_sets_study_idx on study_annotation_sets (study_id);
create index if not exists learner_progress_status_idx on learner_progress (learner_id, status);
