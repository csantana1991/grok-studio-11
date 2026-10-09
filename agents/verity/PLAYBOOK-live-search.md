# Live-search correctness playbook (50-case probe, 2026-09-01)

## What we asked
Fifty board-style queries (NM, PET, CT, MRI, US, XR, peds, therapy) against:
- Wikipedia `generator=search` + `pageimages`
- Wikipedia `titles=` + `pageimages` (canonical article)
- Wikimedia Commons `gsrnamespace=6` (files only)
- Europe PMC full-text search (`OPEN_ACCESS:y`)

## What actually happened

| Source | Image returned? | Matches the case? |
|---|---|---|
| Wikipedia **compound clinical query** ("FDG PET lymphoma mediastinum") | **0/50 thumbs** | Query never maps to a page that has a lead image |
| Wikipedia **canonical title** ("Positron emission tomography") | Yes (until 429) | Lead image is often a scanner or cartoon, **not** the pathology |
| Commons **file search** on canonical term | Yes (PET-MIPS gif, glioblastoma HE, PE 3D animation) | Better, but mixes histology, cartoons, generators, and real scans |
| Europe PMC paper search | **50/50 had papers** | **Titles frequently wrong-disease**: DaTscan Parkinson → Huntington; bone superscan → dyspepsia case; octreotide carcinoid → citalopram ADR; FDG lymphoma → extramedullary hematopoiesis |

## Failure modes to encode as deny-rules
1. **Query too specific** → wiki returns nothing; agent must fall back to canonical article then Commons files.
2. **PMC returns text hits, not figures.** A paper existing ≠ an image of that finding.
3. **First PMC title is not the case.** Semantic overlap in one token (Parkinson, octreotide, PET) is not a match.
4. **Commons file names lie.** "PET" can be positron-emission **mammography**, a generator photo, or an animation.
5. **Rate limits (429)** after ~5 wiki calls. Sub-agent must backoff and cache.

## Capture-correctness recipe (the loop)
1. Parse case → `{finding, anatomy, modality, deny_anatomy, deny_modality}`.
2. Build query ladder, stop at first grounded image:
   - exact finding + modality + anatomy
   - canonical disease article
   - Commons `File:` search with `filetype:bitmap` + modality token
   - Europe PMC **figure** API / OA media, not abstract search
3. **Accept only if ALL pass:**
   - file loads as an image
   - caption or filename contains anatomy OR disease
   - caption does not contain deny-anatomy / deny-modality
   - not a person photo, logo, generator product shot, or histology unless the case is histology
4. Else **DENY** and keep the matched plate / schematic. Do not invent pixels.

## How I would change image *generation* (not search)
Do **not** generate a fake scan and label it as the case. Generation is only allowed for:
- labeled teaching schematics (F-18 decay, Deauville scale)
- never as a substitute for a PubMed/Commons figure of that accession

If you later want generated analogues, they must be tagged `kind=depict` and spoken as schematic.

## Tighten-or-not (your call)
I would tighten: PMC must use figure captions; Commons must pass anatomy deny-list; compound wiki search is a dead path.
I would **not** tighten: keep schematics as honest fallbacks. They are not the disease, and the agent should say so.
