/**
 * RAD ATLAS — the full page, as a Board Studio widget.
 *
 * Board Studio is a single static HTML document with no bundler, so this ships
 * as one IIFE alongside the QA agent. It is the whole search experience rather
 * than the strip that lives under the worklist: every source, every result kind,
 * spelling correction, suggestions, and a narrator that reads each result aloud
 * in the Studio's own audiobook idiom.
 *
 * The images on this page are checked by the QA agent exactly as they are
 * everywhere else — qa-agent.js sweeps the document, so nothing special is
 * needed here beyond loading it.
 */

import { broaden, correct, suggest } from '../data/radatlas/suggest'
import {
  flattenGroups,
  itemDescription,
  itemImage,
  itemLink,
  itemModality,
  type AtlasItem,
  type RadiologySearchResponse,
  type SourceId,
} from '../data/radatlas/types'

const SOURCES: [SourceId, string][] = [
  ['pmc', 'PubMed Central'],
  ['tcia', 'TCIA'],
  ['openneuro', 'OpenNeuro'],
  ['idc', 'IDC'],
  ['radiopaedia', 'Radiopaedia'],
]

const state = {
  query: '',
  /** The query actually sent, after correction or broadening. */
  searched: '',
  notice: '',
  sources: ['pmc', 'tcia'] as SourceId[],
  items: [] as AtlasItem[],
  providers: [] as RadiologySearchResponse['providers'],
  loading: false,
  error: '',
  narrating: false,
  narrateIndex: -1,
  rate: 1,
}

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)

function esc(v: unknown): string {
  return String(v ?? '').replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  )
}

// ------------------------------------------------------------------ searching

async function runSearch(raw: string) {
  const typed = raw.trim()
  if (!typed) return
  state.query = typed
  state.loading = true
  state.error = ''
  state.notice = ''
  stopNarration()
  render()

  // Correct first, and say so. A result set from a query the reader did not
  // type, presented as theirs, teaches them the wrong thing about the archive.
  const fix = correct(typed)
  let attempt = fix.query
  if (fix.corrected) {
    state.notice = `Searched for “${fix.query}” — corrected ${fix.changes
      .map((c) => `“${c.from}” → “${c.to}”`)
      .join(', ')}.`
  }

  try {
    let response = await fetchAtlas(attempt)
    let items = flattenGroups(response.groups)

    // Still nothing: widen rather than reporting a dead end, and name the query
    // that actually returned something.
    if (!items.length) {
      for (const wider of broaden(attempt)) {
        response = await fetchAtlas(wider)
        items = flattenGroups(response.groups)
        if (items.length) {
          attempt = wider
          state.notice =
            `Nothing for “${fix.query}”. Broadened to “${wider}” — ` +
            `${items.length} result${items.length === 1 ? '' : 's'}.`
          break
        }
      }
    }

    state.searched = attempt
    state.items = items
    state.providers = response.providers
  } catch {
    state.error = 'RAD ATLAS is not reachable. Start the workstation and try again.'
    state.items = []
  } finally {
    state.loading = false
    render()
  }
}

async function fetchAtlas(q: string): Promise<RadiologySearchResponse> {
  const url =
    `/api/radatlas/search?q=${encodeURIComponent(q)}` +
    `&sources=${encodeURIComponent(state.sources.join(','))}`
  const r = await fetch(url)
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return (await r.json()) as RadiologySearchResponse
}

// ----------------------------------------------------------------- narration

/**
 * Reads a result aloud, in the Studio's audiobook idiom.
 *
 * Deliberately narrates what is KNOWN about a result — its kind, modality,
 * title, description and source — and never asserts what the image depicts.
 * The narrator has no more access to the pixels than the QA agent does.
 */
function speechFor(item: AtlasItem, n: number, total: number): string {
  const kind =
    item.kind === 'article_figure'
      ? 'Publication figure'
      : item.kind === 'study_preview'
        ? 'Study preview'
        : 'Full study'
  const modality = itemModality(item)
  return [
    `Result ${n} of ${total}.`,
    `${kind}${modality ? `, ${modality}` : ''}, from ${item.source.name}.`,
    item.title,
    itemDescription(item).slice(0, 320),
    item.source.license ? `Licence: ${item.source.license}.` : 'Licence not stated.',
  ]
    .filter(Boolean)
    .join(' ')
}

function speak(text: string, onEnd: () => void) {
  const u = new SpeechSynthesisUtterance(text)
  u.rate = state.rate
  u.onend = onEnd
  u.onerror = onEnd
  window.speechSynthesis.speak(u)
}

function narrateFrom(index: number) {
  if (!state.items.length) return
  if (index >= state.items.length) {
    stopNarration()
    return
  }
  state.narrating = true
  state.narrateIndex = index
  render()
  const card = document.getElementById(`atlas-card-${index}`)
  card?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  speak(speechFor(state.items[index], index + 1, state.items.length), () => {
    if (!state.narrating) return
    narrateFrom(index + 1)
  })
}

function stopNarration() {
  state.narrating = false
  state.narrateIndex = -1
  if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
}

// -------------------------------------------------------------------- render

function cardHTML(item: AtlasItem, i: number): string {
  const image = itemImage(item)
  const modality = itemModality(item)
  const kind =
    item.kind === 'article_figure'
      ? 'Publication figure'
      : item.kind === 'study_preview'
        ? 'Study preview'
        : 'Full study'
  const download = item.kind !== 'article_figure' ? item.downloadUrl : undefined
  return `<article class="atlas-card${i === state.narrateIndex ? ' reading' : ''}" id="atlas-card-${i}">
    <div class="atlas-meta">
      <span class="atlas-kind">${esc(kind)}</span>
      ${modality ? `<span class="atlas-mod">${esc(modality)}</span>` : ''}
      <span class="atlas-src">${esc(item.source.name)}</span>
      <button type="button" class="atlas-play" data-play="${i}" title="Read this result aloud">▶ read</button>
    </div>
    <div class="atlas-figure">
      ${
        image
          ? `<img src="${esc(image)}" alt="" loading="lazy" referrerpolicy="no-referrer">`
          : `<div class="atlas-nofig">Full study — open or download at the source</div>`
      }
    </div>
    <h3>${esc(item.title)}</h3>
    <p class="atlas-desc">${esc(itemDescription(item))}</p>
    <p class="atlas-lic">${esc(item.source.license ?? 'LICENSE_UNKNOWN')}</p>
    <div class="atlas-actions">
      <a href="${esc(itemLink(item))}" target="_blank" rel="noreferrer noopener">Open source ↗</a>
      ${download ? `<a href="${esc(download)}" target="_blank" rel="noreferrer noopener">Full study ↓</a>` : ''}
    </div>
  </article>`
}

function render() {
  const root = $('#atlas-root')
  if (!root) return
  const provider = state.providers
    .map(
      (p) =>
        `<span class="atlas-prov ${p.state}">${esc(p.source.toUpperCase())} · ${esc(p.state)}${
          p.count ? ` (${p.count})` : ''
        }</span>`,
    )
    .join('')

  root.innerHTML = `
    <div class="atlas-bar">
      <label class="atlas-field">
        <input id="atlas-q" type="search" value="${esc(state.query)}" autocomplete="off"
               placeholder="Search open radiology — anatomy, modality, diagnosis">
        <div id="atlas-sugg" class="atlas-sugg" hidden></div>
      </label>
      <button type="button" id="atlas-go" class="atlas-go">◉ SEARCH</button>
    </div>

    <div class="atlas-sources">
      ${SOURCES.map(
        ([id, label]) =>
          `<button type="button" class="atlas-source${
            state.sources.includes(id) ? ' on' : ''
          }" data-source="${id}">${esc(label)}</button>`,
      ).join('')}
    </div>

    <div class="atlas-player">
      <button type="button" id="atlas-narrate">${state.narrating ? '❚❚ Pause narration' : '▶ Narrate results'}</button>
      <label>Speed
        <select id="atlas-rate">
          ${[0.75, 1, 1.25, 1.5].map((r) => `<option value="${r}"${r === state.rate ? ' selected' : ''}>${r}×</option>`).join('')}
        </select>
      </label>
      <span class="atlas-now">${
        state.narrateIndex >= 0
          ? `Reading ${state.narrateIndex + 1} / ${state.items.length}`
          : 'Reads every result aloud, in order'
      }</span>
    </div>

    ${state.notice ? `<p class="atlas-notice">${esc(state.notice)}</p>` : ''}
    ${state.error ? `<p class="atlas-error">${esc(state.error)}</p>` : ''}
    <div class="atlas-status">
      ${state.loading ? 'Searching…' : `${state.items.length} result${state.items.length === 1 ? '' : 's'}`}
      ${state.searched ? ` for “${esc(state.searched)}”` : ''}
      ${provider}
    </div>

    <div class="atlas-grid">
      ${
        state.items.length
          ? state.items.map(cardHTML).join('')
          : state.loading
            ? ''
            : `<p class="atlas-empty">${
                state.query
                  ? 'Nothing came back. Try fewer words, or enable another source above.'
                  : 'Search the open archives — published figures and public DICOM studies.'
              }</p>`
      }
    </div>

    <p class="atlas-foot">
      Results are open-access literature and public research archives: reference imaging,
      never a specific patient's study. Every image on this page is checked by the QA agent,
      which reads text and file bytes — not pixels.
    </p>`

  wire()
}

function wire() {
  const input = $<HTMLInputElement>('#atlas-q')
  const sugg = $<HTMLDivElement>('#atlas-sugg')

  input?.addEventListener('input', () => {
    const options = suggest(input.value)
    if (!sugg) return
    if (!options.length) {
      sugg.hidden = true
      return
    }
    sugg.hidden = false
    sugg.innerHTML = options
      .map((o) => `<button type="button" data-sugg="${esc(o)}">${esc(o)}</button>`)
      .join('')
  })
  input?.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') void runSearch(input.value)
  })
  sugg?.addEventListener('click', (e) => {
    const word = (e.target as HTMLElement).dataset.sugg
    if (!word || !input) return
    // Complete the word being typed, leaving the rest of the phrase intact.
    const parts = input.value.split(/\s+/)
    parts[parts.length - 1] = word
    input.value = parts.join(' ')
    sugg.hidden = true
    input.focus()
  })

  $('#atlas-go')?.addEventListener('click', () => void runSearch(input?.value ?? ''))

  document.querySelectorAll<HTMLButtonElement>('[data-source]').forEach((b) => {
    b.addEventListener('click', () => {
      const id = b.dataset.source as SourceId
      state.sources = state.sources.includes(id)
        ? state.sources.filter((s) => s !== id)
        : [...state.sources, id]
      if (state.query) void runSearch(state.query)
      else render()
    })
  })

  document.querySelectorAll<HTMLButtonElement>('[data-play]').forEach((b) => {
    b.addEventListener('click', () => {
      stopNarration()
      narrateFrom(Number(b.dataset.play))
    })
  })

  $('#atlas-narrate')?.addEventListener('click', () => {
    if (state.narrating) {
      stopNarration()
      render()
    } else narrateFrom(0)
  })

  $<HTMLSelectElement>('#atlas-rate')?.addEventListener('change', (e) => {
    state.rate = Number((e.target as HTMLSelectElement).value) || 1
    if (state.narrating) {
      const from = state.narrateIndex
      stopNarration()
      narrateFrom(from)
    }
  })
}

function start() {
  render()
  const initial = new URLSearchParams(location.search).get('q')
  if (initial) {
    const input = $<HTMLInputElement>('#atlas-q')
    if (input) input.value = initial
    void runSearch(initial)
  }
  // A narrator left talking after the reader navigates away is the single most
  // annoying failure mode of a speech UI.
  window.addEventListener('pagehide', stopNarration)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true })
} else {
  start()
}
