# RAD REVIEW ULTIMATE

A head-to-toe PET/CT residency-log workstation: 33,000 generated encounters across
11 anatomical stations, each matched to real, openly-licensed published imaging,
with an autonomous agent that validates every case-to-image connection.

## Running it

```bash
npm install
npm run dev
```

Vite picks a free port (3000 unless something already has it) and prints the URL.
Nothing needs a database, an API key or a login.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server, plus the background figure matcher |
| `npm run build` | Type-check and produce `dist/` |
| `npm test` | The full suite |
| `npm run qa` | Headless QA audit over all 33,000 connections |
| `npm run qa -- --probe` | …and fetch every distinct figure to verify it decodes |
| `npm run index:build` | Fill the figure index once |
| `npm run index:watch` | Keep filling it in a loop |
| `npm run studio:build` | Rebuild the Board Studio bundles and re-patch the page |
| `npm run nucleus:import <export.zip>` | Import a Nucleus Board Academy export |

Set `RR_NO_MATCHER=1` to stop the dev server spawning the background matcher.

## What is in here

```
src/
  data/
    stations.ts        slice → station, the single source of truth for anatomy
    anatomyMap.ts      finding text → station (fixes head-CT-filed-at-toes)
    generateCases.ts   the 33,000 encounters, deterministically seeded
    pmcSearch.ts       PubMed Central figure search
    commonsSearch.ts   Wikimedia Commons fallback, for when PMC throttles
    selectFigure.ts    which image an encounter shows — one source of truth
    qa/                the image QA agent (see below)
    radatlas/          federated open-archive search
  components/          the workstation UI
  studio/              bundles injected into Board Studio
scripts/               index builder, Nucleus import, QA audit, Studio patcher
public/studio/         NucMed Board Studio + RAD ATLAS page + agent bundles
browser-addon/         the RAD ATLAS search-engine extension (MV3)
```

## The image QA agent

Every case-to-image connection is validated by several **independent** checks —
independent by construction, each reading different evidence: the figure caption,
the article title, the file name, the case wording, the file's own bytes, and any
verdict you recorded earlier.

- Wrong body part, wrong modality, wrong laterality, wrong patient population, a
  non-radiological figure, a broken file or an image you rejected are **vetoes**:
  no amount of agreement elsewhere overrides them.
- Unanimous agreement across enough independent evidence **auto-approves** and
  **locks** the connection, so the same case shows the same image every time.
- Disagreement is escalated, never split. Those land in the review queue.
- A case opens on its **highest-ranked** figure, not merely the first acceptable
  one.

Open it from the `IMAGE QA n/33,000` control in the header.

### What it cannot do

**Nothing here inspects pixels.** There is no vision model wired in, so "anatomy"
always means *the caption says knee*, never *the image shows a knee*. Every record
carries `visual: unverified` and the UI says so on each card. `VisualClassifier` in
`src/data/qa/types.ts` is the declared seam for adding one; the visual pass
permanently abstains rather than fabricating a confirmation.

## Sources and honesty

Matched figures are **real, separately published patients' imaging** that fits the
finding — a literature reference, never "this case's scan". The UI labels them as
such and carries the citation and licence. Only CC BY / CC BY-SA / CC0 /
public-domain material is shown.

Two archives are used, and both rate-limit:

- **PubMed Central** — the better source, and currently throttling hard. When it
  refuses, the search says so rather than recording "this finding has no imagery".
- **Wikimedia Commons** — the fallback. Weaker labelling, so its results sit below
  PMC's and are tiered; they pass through exactly the same QA gate.

Filling all 33,000 findings is a background job measured in hours, paced to stay
inside both archives' limits. `npm run index:watch` keeps at it.

## Board Studio

`public/studio/` holds NucMed Board Studio, patched with:

- a **RAD REVIEW ULTIMATE** link back to the workstation,
- a **RAD ATLAS** tab opening the full open-archive search page, with narration,
  spelling correction and suggestions,
- the **QA agent**, which watches the document and checks images as the widgets
  generate them — including during narration.

Re-run `npm run studio:build` after replacing the Studio export; the patcher is
idempotent.

## Browser add-on

`browser-addon/` is a Manifest V3 extension that puts a green RAD ATLAS control
under the search box on Google, Bing and DuckDuckGo, showing open radiology for
the query already on the page. See `browser-addon/README.md`. It talks only to
your own machine and stores nothing but the app's address.

## Not a medical device

An educational review aid. The encounters are generated; the imagery belongs to
other patients and is cited as such. Nothing here is a diagnosis, and no image has
been visually verified.
