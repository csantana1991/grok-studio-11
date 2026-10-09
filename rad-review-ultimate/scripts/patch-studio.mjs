/**
 * Patches the Board Studio page with the two things it cannot get on its own:
 * a way back to the workstation, and the image QA agent.
 *
 * The Studio is a self-contained third-party HTML app served from
 * public/studio/. Its own "RAD REVIEW" button opens an internal panel
 * (id="radRoot") rather than leaving the page, so without this there is no way
 * back to the workstation once you are in it.
 *
 * The patch is additive and idempotent: it injects one fixed-position anchor
 * before </body> and marks it, so re-running after a fresh export is safe.
 *
 *   node scripts/patch-studio.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const FILE = resolve(process.cwd(), 'public/studio/NucMed-Board-Studio.html')
const MARKER = 'rr-home-link'
const QA_MARKER = 'rr-qa-agent-script'
const ATLAS_MARKER = 'rr-atlas-tab'

if (!existsSync(FILE)) {
  console.error(`Not found: ${FILE}\nExtract the Board Studio export into public/studio/ first.`)
  process.exit(1)
}

let html = readFileSync(FILE, 'utf8')

let changed = false

// Sits bottom-left, clear of the Studio's own top nav and its audio player
// (which is full-width along the bottom edge, roughly 80px tall).
const snippet = `
<a id="${MARKER}" href="/" title="Back to RAD Review Ultimate"
   style="position:fixed;left:16px;bottom:96px;z-index:2147483647;
          display:inline-flex;align-items:center;gap:8px;
          padding:9px 14px;border-radius:999px;
          background:#0a0a0b;border:1px solid #3b82f6;color:#3b82f6;
          font:600 12px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
          letter-spacing:.08em;text-decoration:none;
          box-shadow:0 4px 16px rgba(0,0,0,.45);">
  <span style="display:inline-flex;align-items:center;justify-content:center;
               width:16px;height:16px;border-radius:4px;
               background:#3b82f6;color:#0a0a0b;font-size:9px;">RR</span>
  RAD REVIEW ULTIMATE
</a>
`

/**
 * The QA agent, built from the workstation's own TypeScript by
 * `npm run studio:qa`. Loading it here rather than reimplementing the checks in
 * the Studio's inline script is what keeps one set of rules: the Studio's own
 * assertions test that an image EXISTS and is described, while this tests
 * whether the image is right for the case.
 */
const qaSnippet = `
<script id="${QA_MARKER}" src="./qa-agent.js" defer></script>
`

/**
 * Adds RAD ATLAS to the Studio's own widget tab row, beside Board Studio.
 *
 * An anchor rather than a `data-view` button: the Studio's tab handler swaps
 * panels inside this document, and RAD ATLAS is a full page of its own. Styled
 * to match the surrounding tabs so it does not read as a foreign control.
 */
function addAtlasTab() {
  const anchor = '<button type="button" data-view="radreview">RAD REVIEW</button>'
  if (!html.includes(anchor)) {
    console.warn('Could not find the widget tab row — RAD ATLAS tab not added.')
    return
  }
  const tab =
    `<a id="${ATLAS_MARKER}" href="./radatlas.html" ` +
    `title="Open the full RAD ATLAS search page">RAD ATLAS</a>`
  html = html.replace(anchor, anchor + tab)
  // The tab row styles buttons, not anchors, so give the anchor the same shape.
  const css =
    `<style id="${ATLAS_MARKER}-css">` +
    `#appTabs #${ATLAS_MARKER}{display:inline-flex;align-items:center;` +
    `text-decoration:none;font:inherit;cursor:pointer;` +
    `border:1px solid #047857;border-radius:999px;padding:8px 16px;` +
    `background:#ecfdf5;color:#047857;font-weight:700;letter-spacing:.02em}` +
    `#appTabs #${ATLAS_MARKER}:hover{background:#d1fae5}` +
    `</style>`
  const head = html.indexOf('</head>')
  html = head === -1 ? css + html : html.slice(0, head) + css + html.slice(head)
  changed = true
}

function insert(fragment) {
  const idx = html.lastIndexOf('</body>')
  html = idx === -1 ? html + fragment : html.slice(0, idx) + fragment + html.slice(idx)
  changed = true
}

if (html.includes(MARKER)) {
  console.log('Home link already present.')
} else {
  insert(snippet)
  console.log('Added "RAD REVIEW ULTIMATE" home link to the Board Studio page.')
}

if (html.includes(ATLAS_MARKER)) {
  console.log('RAD ATLAS tab already present.')
} else {
  addAtlasTab()
  console.log('Added the RAD ATLAS tab to the Board Studio widget row.')
}

if (html.includes(QA_MARKER)) {
  console.log('QA agent already present.')
} else {
  insert(qaSnippet)
  console.log('Added the image QA agent to the Board Studio page.')
}

if (!changed) {
  console.log('Nothing to do.')
  process.exit(0)
}

writeFileSync(FILE, html)
