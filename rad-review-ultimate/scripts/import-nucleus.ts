/**
 * NUCLEUS PORTABLE EXPORT → RAD REVIEW
 *
 * Converts a nucleus-portable-export bundle into public/nucleus-export.json and
 * copies its image assets into public/nucleus/.
 *
 *   npm run nucleus:import -- "<path to extracted export root>"
 *
 * The export root is the folder containing BOTH `public/` (the image assets)
 * and `exports/<name>/data/*.jsonl` (the catalog).
 *
 * Only studies that actually ship an image are emitted. The bundle's other
 * ~25,600 studies are `tcia-dicom`: their pixels live in The Cancer Imaging
 * Archive, not in the export, so emitting them would produce catalogue entries
 * with nothing to display.
 */

import { createReadStream, existsSync, mkdirSync, readdirSync, copyFileSync, writeFileSync, statSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { dirname, join, resolve } from 'node:path'

interface CatalogRow {
  id: number
  study_key: string
  source_name: string | null
  collection_name: string | null
  track: string | null
  modality_bucket: string | null
  dicom_modality: string | null
  body_region: string | null
  study_description: string | null
  series_description: string | null
  image_count: number | null
  source_url: string | null
  license_name: string | null
  license_url: string | null
  attribution: string | null
  image_delivery: string | null
  preview_url: string | null
  teaching_status: string | null
}

interface QuestionRow {
  study_id: number
  stem: string | null
  option_a: string | null
  option_b: string | null
  option_c: string | null
  option_d: string | null
  correct_option: string | null
  answer_title: string | null
  explanation: string | null
  distractor_analysis: string | null
  board_pearl: string | null
  case_basis: string | null
  case_kind: string | null
  read_prompt: string | null
}

const ROOT = resolve(process.argv[2] ?? '')
if (!ROOT || !existsSync(ROOT)) {
  console.error('Usage: npm run nucleus:import -- "<extracted export root>"')
  process.exit(1)
}

const OUT_JSON = resolve(process.cwd(), 'public/nucleus-export.json')
const OUT_IMAGES = resolve(process.cwd(), 'public/nucleus')
const SRC_PUBLIC = join(ROOT, 'public')

/** Locate exports/<name>/data inside the bundle. */
function findDataDir(root: string): string {
  const exportsDir = join(root, 'exports')
  if (existsSync(exportsDir)) {
    for (const entry of readdirSync(exportsDir)) {
      const d = join(exportsDir, entry, 'data')
      if (existsSync(d)) return d
    }
  }
  const direct = join(root, 'data')
  if (existsSync(direct)) return direct
  throw new Error(`No data directory found under ${root}`)
}

async function readJsonl<T>(file: string, onRow: (row: T) => void): Promise<number> {
  let n = 0
  const rl = createInterface({ input: createReadStream(file), crlfDelay: Infinity })
  for await (const line of rl) {
    if (!line.trim()) continue
    try {
      onRow(JSON.parse(line) as T)
      n++
    } catch {
      /* skip malformed line */
    }
  }
  return n
}

/** Recursively copy image assets, returning how many were written. */
function copyImages(from: string, to: string): number {
  if (!existsSync(from)) return 0
  let count = 0
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const src = join(from, entry.name)
    const dst = join(to, entry.name)
    if (entry.isDirectory()) {
      count += copyImages(src, dst)
      continue
    }
    if (!/\.(webp|png|jpe?g)$/i.test(entry.name)) continue
    mkdirSync(dirname(dst), { recursive: true })
    // Skip unchanged files so re-running is fast.
    if (existsSync(dst) && statSync(dst).size === statSync(src).size) {
      count++
      continue
    }
    copyFileSync(src, dst)
    count++
  }
  return count
}

async function main() {
  const dataDir = findDataDir(ROOT)
  console.log(`export root : ${ROOT}`)
  console.log(`data dir    : ${dataDir}`)

  console.log('copying image assets...')
  const copied = copyImages(SRC_PUBLIC, OUT_IMAGES)
  console.log(`  ${copied.toLocaleString()} image files under public/nucleus/`)

  // Board questions, keyed by study id.
  const questions = new Map<number, QuestionRow>()
  const qFile = join(dataDir, 'board_questions.jsonl')
  if (existsSync(qFile)) {
    await readJsonl<QuestionRow>(qFile, (q) => {
      if (typeof q.study_id === 'number') questions.set(q.study_id, q)
    })
  }
  console.log(`  ${questions.size.toLocaleString()} board questions`)

  const out: unknown[] = []
  let total = 0
  let skippedNoImage = 0
  let missingAsset = 0

  await readJsonl<CatalogRow>(join(dataDir, 'catalog_studies.jsonl'), (r) => {
    total++
    if (!r.preview_url) {
      skippedNoImage++
      return
    }
    // preview_url is rooted at the export's public/, e.g. /nm/thyroid/x.webp
    const rel = r.preview_url.replace(/^\//, '')
    if (!existsSync(join(SRC_PUBLIC, rel))) {
      missingAsset++
      return
    }

    const q = questions.get(r.id)
    const title =
      r.study_description ||
      r.series_description ||
      [r.modality_bucket, 'examination'].filter(Boolean).join(' ')

    const board =
      q?.stem && q.option_a
        ? {
            question: q.stem,
            options: [q.option_a, q.option_b, q.option_c, q.option_d].filter(
              (o): o is string => Boolean(o),
            ),
            answer: q.correct_option ?? undefined,
            explanation: [q.answer_title, q.explanation, q.board_pearl]
              .filter(Boolean)
              .join(' — '),
          }
        : undefined

    out.push({
      id: r.study_key || String(r.id),
      study: title,
      modality: r.dicom_modality || r.modality_bucket || r.track || '',
      region: r.body_region || '',
      collection: r.collection_name || r.source_name || '',
      caseType: q?.case_basis === 'source-label' ? 'Source-label case' : 'Interpretation case',
      teachingState: r.teaching_status || '',
      readFirst: q?.read_prompt || '',
      skills: q?.distractor_analysis ? [q.distractor_analysis] : [],
      images: [{ label: r.series_description || 'SLICE 1', url: `/nucleus/${rel}` }],
      source: r.attribution || r.source_name || '',
      license: r.license_name || '',
      sourceUrl: r.source_url || r.license_url || '',
      board,
    })
  })

  mkdirSync(dirname(OUT_JSON), { recursive: true })
  writeFileSync(OUT_JSON, JSON.stringify(out))

  const kb = Math.round(statSync(OUT_JSON).size / 1024)
  console.log(`\ncatalog rows     : ${total.toLocaleString()}`)
  console.log(`  no image       : ${skippedNoImage.toLocaleString()} (TCIA-hosted DICOM)`)
  console.log(`  asset missing  : ${missingAsset.toLocaleString()}`)
  console.log(`  written        : ${out.length.toLocaleString()} studies`)
  console.log(`  with board item: ${out.filter((o) => (o as { board?: unknown }).board).length.toLocaleString()}`)
  console.log(`\n→ public/nucleus-export.json (${kb.toLocaleString()} KB)`)
}

await main()
