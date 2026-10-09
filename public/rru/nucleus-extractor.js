/**
 * NUCLEUS → RAD REVIEW EXPORT EXTRACTOR
 * =====================================
 *
 * Run this in YOUR OWN browser, on a Nucleus tab you are already signed in to.
 * It reads the case data the page already has and downloads it as
 * nucleus-export.json in the shape RAD Review expects.
 *
 * RAD Review cannot do this itself: Nucleus is behind an OpenAI login, and
 * signing in on your behalf is not something this tool will do.
 *
 * HOW TO USE
 *   1. Open  https://nucleus-board-academy.cesar-5864.chatgpt.site/
 *      and sign in as normal.
 *   2. Go to the "33,000 board cases" explorer. Scroll or page through as much
 *      of the library as you want captured -- this reads what the app has
 *      loaded, so more scrolling means more cases.
 *   3. Open DevTools (F12) → Console.
 *   4. Paste this whole file, press Enter.
 *   5. A nucleus-export.json download appears. Move it to:
 *         RAD review/public/nucleus-export.json
 *   6. Reload RAD Review.
 *
 * It tries three sources in order and reports which one worked:
 *   A. embedded application state (__NEXT_DATA__ / JSON script tags)
 *   B. the app's own JSON API responses, if any are cached
 *   C. the rendered DOM cards, as a fallback
 *
 * Nothing is sent anywhere. The file is written locally by your browser.
 */

;(async () => {
  const OUT = []
  const seen = new Set()
  let method = 'none'

  const push = (rec) => {
    if (!rec || !rec.images || !rec.images.length) return
    const key = rec.id || rec.study + '|' + rec.images[0]
    if (seen.has(key)) return
    seen.add(key)
    OUT.push(rec)
  }

  const asRecord = (o) => {
    if (!o || typeof o !== 'object') return null
    const get = (...keys) => {
      for (const k of keys) {
        const v = o[k]
        if (typeof v === 'string' && v.trim()) return v.trim()
      }
      return ''
    }
    // Accept several plausible image field names.
    let images = o.images || o.slices || o.frames || o.imageUrls || o.thumbnails
    if (!Array.isArray(images)) return null
    images = images
      .map((im, i) => {
        if (typeof im === 'string') return { label: `SLICE ${i + 1}`, url: im }
        if (im && typeof im === 'object') {
          const url = im.url || im.src || im.href || im.image
          if (!url) return null
          return { label: im.label || im.name || `SLICE ${i + 1}`, url }
        }
        return null
      })
      .filter(Boolean)
    if (!images.length) return null

    return {
      id: get('id', 'caseId', 'uid', 'slug'),
      study: get('study', 'title', 'description', 'name'),
      modality: get('modality', 'allocation', 'modalityAllocation'),
      region: get('region', 'bodyRegion', 'body_region', 'anatomy'),
      collection: get('collection', 'database', 'dataset', 'source_collection'),
      caseType: get('caseType', 'case_type', 'type'),
      teachingState: get('teachingState', 'teaching_state', 'state'),
      images,
      source: get('source', 'provenance', 'citation', 'attribution'),
      license: get('license', 'licence', 'rights'),
      sourceUrl: get('sourceUrl', 'url', 'link', 'source_url'),
      board: o.board || o.question || null,
    }
  }

  /** Walk any object graph and collect things that look like study records. */
  const harvest = (node, depth = 0) => {
    if (!node || depth > 8) return
    if (Array.isArray(node)) {
      node.forEach((n) => harvest(n, depth + 1))
      return
    }
    if (typeof node !== 'object') return
    const rec = asRecord(node)
    if (rec) push(rec)
    for (const v of Object.values(node)) harvest(v, depth + 1)
  }

  // ---- A. embedded application state -------------------------------------
  try {
    if (window.__NEXT_DATA__) harvest(window.__NEXT_DATA__)
    document.querySelectorAll('script[type="application/json"]').forEach((el) => {
      try {
        harvest(JSON.parse(el.textContent || '{}'))
      } catch {}
    })
    if (OUT.length) method = 'embedded state'
  } catch (e) {
    console.warn('embedded state scan failed', e)
  }

  // ---- B. any global store the app exposes -------------------------------
  if (!OUT.length) {
    try {
      for (const k of Object.keys(window)) {
        if (!/case|stud|nucleus|data|store/i.test(k)) continue
        harvest(window[k])
      }
      if (OUT.length) method = 'global store'
    } catch {}
  }

  // ---- C. rendered DOM fallback ------------------------------------------
  if (!OUT.length) {
    const cards = document.querySelectorAll('article, [class*="card"], li')
    cards.forEach((card, i) => {
      const imgs = [...card.querySelectorAll('img')]
        .map((im, j) => ({ label: `SLICE ${j + 1}`, url: im.currentSrc || im.src }))
        .filter((x) => x.url && !x.url.startsWith('data:'))
      if (!imgs.length) return
      const text = (sel) => card.querySelector(sel)?.textContent?.trim() || ''
      push({
        id: `dom-${i}`,
        study: text('h1, h2, h3, h4') || card.textContent.trim().slice(0, 120),
        modality: '',
        region: text('[class*="region"], [class*="body"]'),
        collection: text('[class*="collection"], [class*="eyebrow"], small'),
        caseType: text('[class*="badge"], [class*="tag"]'),
        teachingState: '',
        images: imgs,
        source: '',
        license: '',
        sourceUrl: location.href,
        board: null,
      })
    })
    if (OUT.length) method = 'rendered DOM (partial — open a case for full metadata)'
  }

  if (!OUT.length) {
    console.error(
      'No study records found. Open the 33,000-case explorer, scroll to load ' +
        'cases, then run this again. If it still finds nothing, paste the ' +
        'output of  Object.keys(window)  so the extractor can be pointed at ' +
        "this app's data.",
    )
    return
  }

  const blob = new Blob([JSON.stringify(OUT, null, 1)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'nucleus-export.json'
  a.click()
  URL.revokeObjectURL(a.href)

  const withImages = OUT.reduce((n, r) => n + r.images.length, 0)
  console.log(
    `%cNucleus export ready`,
    'color:#4fb3bf;font-weight:bold',
    `\n  method   : ${method}\n  studies  : ${OUT.length}\n  images   : ${withImages}` +
      `\n\nMove the downloaded nucleus-export.json to:\n  RAD review/public/nucleus-export.json`,
  )
})()
