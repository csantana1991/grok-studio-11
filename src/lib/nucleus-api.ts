import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";

export type StudySummary = {
  id: number;
  studyKey: string;
  track: string;
  modalityBucket: string;
  dicomModality: string;
  bodyRegion: string;
  studyDescription: string;
  imageCount: number;
  caseBasis: string;
  teachingStatus: string;
  qaStatus: string;
  previewUrl: string | null;
  sourceName: string;
  licenseName: string;
};

export type CatalogPage = {
  page: number;
  limit: number;
  total: number;
  pages: number;
  studies: StudySummary[];
  mastered: number;
  review: number;
};

const listInput = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(48).default(24),
  track: z.enum(["ALL", "DR", "NM"]).default("ALL"),
  modality: z.string().max(32).default("ALL"),
  caseType: z
    .enum(["all", "source-label", "metadata-grounded", "authored-simulation", "source-backed"])
    .default("all"),
  q: z.string().max(80).default(""),
  learnerId: z.string().max(80).optional(),
});

function mapStudy(row: Record<string, unknown>): StudySummary {
  return {
    id: Number(row.id),
    studyKey: String(row.study_key),
    track: String(row.track),
    modalityBucket: String(row.modality_bucket),
    dicomModality: String(row.dicom_modality),
    bodyRegion: String(row.body_region),
    studyDescription: String(row.study_description),
    imageCount: Number(row.image_count),
    caseBasis: String(row.case_basis),
    teachingStatus: String(row.teaching_status),
    qaStatus: String(row.qa_status),
    previewUrl: row.preview_url ? String(row.preview_url) : null,
    sourceName: String(row.source_name),
    licenseName: String(row.license_name),
  };
}

export const getCatalogStats = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const totals = await sql.query<{
    total: number;
    source_label: number;
    metadata_grounded: number;
    authored: number;
    dr: number;
    nm: number;
    question_ready: number;
  }>(
    `select
      count(*)::int as total,
      count(*) filter (where case_basis = 'source-label')::int as source_label,
      count(*) filter (where case_basis = 'metadata-grounded')::int as metadata_grounded,
      count(*) filter (where case_basis = 'authored-simulation')::int as authored,
      count(*) filter (where track = 'DR')::int as dr,
      count(*) filter (where track = 'NM')::int as nm,
      count(*) filter (where teaching_status = 'question-ready')::int as question_ready
     from catalog_studies
     where qa_status <> 'held'`,
  );
  const mods = await sql.query<{ modality_bucket: string; n: number }>(
    `select modality_bucket, count(*)::int as n from catalog_studies
     where qa_status <> 'held' group by modality_bucket order by modality_bucket`,
  );
  const t = totals[0];
  return {
    target: 33000,
    total: t?.total ?? 0,
    questionReady: t?.question_ready ?? 0,
    caseBasis: {
      sourceLabel: t?.source_label ?? 0,
      metadataGrounded: t?.metadata_grounded ?? 0,
      authoredSimulation: t?.authored ?? 0,
    },
    track: { dr: t?.dr ?? 0, nm: t?.nm ?? 0 },
    modalities: mods.map((m) => ({ bucket: m.modality_bucket, n: Number(m.n) })),
    honesty:
      "Source-label rows are curriculum targets, not TCIA patient diagnoses. None are faculty-reviewed. Therapy rows are authored simulations. Metadata-grounded rows teach search/technique only.",
  };
});

export const listCatalog = createServerFn({ method: "GET" })
  .validator(listInput)
  .handler(async ({ data }): Promise<CatalogPage> => {
    const sql = await getSql();
    const page = data.page ?? 1;
    const limit = Math.min(data.limit ?? 24, 48);
    const offset = (page - 1) * limit;
    const q = (data.q ?? "").trim().slice(0, 80);
    const params: unknown[] = [];
    const where: string[] = ["qa_status <> 'held'"];
    if (data.track && data.track !== "ALL") {
      params.push(data.track);
      where.push(`track = $${params.length}`);
    }
    if (data.modality && data.modality !== "ALL") {
      params.push(data.modality);
      where.push(`modality_bucket = $${params.length}`);
    }
    if (data.caseType === "source-label") where.push(`case_basis = 'source-label'`);
    else if (data.caseType === "metadata-grounded") where.push(`case_basis = 'metadata-grounded'`);
    else if (data.caseType === "authored-simulation") where.push(`case_basis = 'authored-simulation'`);
    else if (data.caseType === "source-backed")
      where.push(`case_basis in ('source-label','authored-simulation')`);
    if (q) {
      params.push(`%${q.toLowerCase()}%`);
      where.push(
        `(lower(body_region) like $${params.length} or lower(study_description) like $${params.length} or lower(study_key) like $${params.length} or lower(modality_bucket) like $${params.length})`,
      );
    }
    const whereSql = where.join(" and ");
    const countRows = await sql.query<{ n: number }>(
      `select count(*)::int as n from catalog_studies where ${whereSql}`,
      params,
    );
    const total = Number(countRows[0]?.n ?? 0);
    const listParams = [...params, limit, offset];
    const rows = await sql.query<Record<string, unknown>>(
      `select id, study_key, track, modality_bucket, dicom_modality, body_region,
              study_description, image_count, case_basis, teaching_status, qa_status,
              preview_url, source_name, license_name
       from catalog_studies
       where ${whereSql}
       order by id
       limit $${params.length + 1} offset $${params.length + 2}`,
      listParams,
    );
    let mastered = 0;
    let review = 0;
    if (data.learnerId) {
      const pr = await sql.query<{ mastered: number; review: number }>(
        `select
           count(*) filter (where status = 'mastered')::int as mastered,
           count(*) filter (where status = 'review')::int as review
         from learner_progress where learner_id = $1`,
        [data.learnerId],
      );
      mastered = Number(pr[0]?.mastered ?? 0);
      review = Number(pr[0]?.review ?? 0);
    }
    return {
      page,
      limit,
      total,
      pages: Math.max(1, Math.ceil(total / limit)),
      studies: rows.map(mapStudy),
      mastered,
      review,
    };
  });

export const getStudy = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.coerce.number().int().positive() }))
  .handler(async ({ data }) => {
    const sql = await getSql();
    const studies = await sql.query<Record<string, unknown>>(
      `select * from catalog_studies where id = $1 and qa_status <> 'held'`,
      [data.id],
    );
    const s = studies[0];
    if (!s) return { error: "Study not found" as const, study: null };
    const qs = await sql.query<Record<string, unknown>>(
      `select * from board_questions where study_id = $1 limit 1`,
      [data.id],
    );
    const anns = await sql.query<Record<string, unknown>>(
      `select id, label, shape, coordinates_json, caption, clinical_review_status
       from image_annotations where study_id = $1`,
      [data.id],
    );
    const sets = await sql.query<Record<string, unknown>>(
      `select id, name, source_kind, format, structure_count, confidence, clinical_review_status, model_name, model_version
       from study_annotation_sets where study_id = $1
       order by case source_kind
         when 'faculty-reviewed' then 0
         when 'source-mask' then 1
         when 'model-anatomy' then 2
         else 3 end`,
      [data.id],
    );
    return {
      error: null,
      study: {
        ...mapStudy(s),
        collectionName: String(s.collection_name),
        seriesDescription: String(s.series_description),
        sourceUrl: String(s.source_url),
        licenseUrl: String(s.license_url),
        attribution: String(s.attribution),
        imageDelivery: String(s.image_delivery),
        sourceStudyUid: String(s.source_study_uid),
      },
      question: qs[0]
        ? {
            stem: String(qs[0].stem),
            optionA: String(qs[0].option_a),
            optionB: String(qs[0].option_b),
            optionC: String(qs[0].option_c),
            optionD: String(qs[0].option_d),
            correctOption: String(qs[0].correct_option) as "A" | "B" | "C" | "D",
            answerTitle: String(qs[0].answer_title),
            explanation: String(qs[0].explanation),
            distractorAnalysis: String(qs[0].distractor_analysis),
            boardPearl: String(qs[0].board_pearl),
            caseBasis: String(qs[0].case_basis),
            caseKind: String(qs[0].case_kind),
            readPrompt: String(qs[0].read_prompt),
            learningObjectives: JSON.parse(String(qs[0].learning_objectives_json)) as string[],
            clinicalReviewStatus: String(qs[0].clinical_review_status),
          }
        : null,
      annotations: anns.map((a) => ({
        id: Number(a.id),
        label: String(a.label),
        shape: String(a.shape),
        coordinates: JSON.parse(String(a.coordinates_json)) as Record<string, number>,
        caption: String(a.caption),
        status: String(a.clinical_review_status),
      })),
      annotationSets: sets.map((a) => ({
        id: Number(a.id),
        name: String(a.name),
        sourceKind: String(a.source_kind),
        structureCount: Number(a.structure_count),
        confidence: a.confidence ? String(a.confidence) : null,
        status: String(a.clinical_review_status),
        modelName: a.model_name ? String(a.model_name) : null,
      })),
    };
  });

export const saveProgress = createServerFn({ method: "POST" })
  .validator(
    z.object({
      learnerId: z.string().min(8).max(80),
      studyId: z.coerce.number().int().positive(),
      selectedOption: z.enum(["A", "B", "C", "D"]),
      isCorrect: z.boolean(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    const status = data.isCorrect ? "mastered" : "review";
    await sql.query(
      `insert into learner_progress (learner_id, study_id, status, selected_option, is_correct, attempts, last_seen_at)
       values ($1,$2,$3,$4,$5,1,now())
       on conflict (learner_id, study_id) do update set
         status = excluded.status,
         selected_option = excluded.selected_option,
         is_correct = excluded.is_correct,
         attempts = learner_progress.attempts + 1,
         last_seen_at = now()`,
      [data.learnerId, data.studyId, status, data.selectedOption, data.isCorrect ? 1 : 0],
    );
    const pr = await sql.query<{ mastered: number; review: number }>(
      `select
         count(*) filter (where status = 'mastered')::int as mastered,
         count(*) filter (where status = 'review')::int as review
       from learner_progress where learner_id = $1`,
      [data.learnerId],
    );
    return { mastered: Number(pr[0]?.mastered ?? 0), review: Number(pr[0]?.review ?? 0) };
  });
