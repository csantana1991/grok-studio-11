/* Fills the RAD REVIEW source row with figures this app is allowed to show. */
(function () {
  if (window.__rrSourceFigs) return
  window.__rrSourceFigs = true
  var NAMES = ['PubMed', 'Open-i', 'Radiopaedia', 'MedPix', 'Eurorad', 'OE login', 'TCIA']
  var cache = {}
  var painting = false
  var timer = 0

  function query() {
    var row = document.querySelector("[data-selected='1'] p")
    var text = row ? row.textContent : ''
    return String(text || '')
      .replace(/^\d+\s*[MFmf]\b/, ' ')
      .replace(/\bSUV\s*[\d.]+/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 90)
  }

  function sourceRow() {
    var buttons = Array.prototype.filter.call(document.querySelectorAll('button'), function (b) {
      return NAMES.indexOf((b.textContent || '').trim()) >= 0
    })
    return buttons.length >= 3 ? buttons[0].parentElement : null
  }

  function collapse(row) {
    row.style.setProperty('display', 'flex', 'important')
    row.style.setProperty('flex-direction', 'row', 'important')
    row.style.setProperty('flex-wrap', 'nowrap', 'important')
    row.style.setProperty('align-items', 'center', 'important')
    row.style.setProperty('height', 'auto', 'important')
    row.style.setProperty('min-height', '0', 'important')
    row.style.setProperty('max-height', '40px', 'important')
    row.style.setProperty('overflow-x', 'auto', 'important')
    row.style.setProperty('overflow-y', 'hidden', 'important')
    row.style.setProperty('flex', '0 0 auto', 'important')
    Array.prototype.forEach.call(row.children, function (el) {
      el.style.setProperty('height', '26px', 'important')
      el.style.setProperty('max-height', '26px', 'important')
      el.style.setProperty('width', 'auto', 'important')
      el.style.setProperty('flex', '0 0 auto', 'important')
      el.style.setProperty('align-self', 'center', 'important')
    })
  }

  function paint(row, q, items) {
    painting = true
    var host = document.getElementById('rrFetchedFigs')
    if (!host) {
      host = document.createElement('div')
      host.id = 'rrFetchedFigs'
      row.insertAdjacentElement('afterend', host)
    } else if (host.previousElementSibling !== row) {
      row.insertAdjacentElement('afterend', host)
    }
    host.replaceChildren()
    if (!items.length) {
      var empty = document.createElement('p')
      empty.style.cssText = 'margin:0;padding:4px;color:#fff;font:12px/1.35 sans-serif'
      empty.textContent = 'No figure from a source that allows display. Radiopaedia, MedPix, Eurorad, and OpenEvidence stay as links.'
      host.appendChild(empty)
    } else {
      items.forEach(function (it) {
        var fig = document.createElement('a')
        fig.href = it.page || it.src
        fig.target = '_blank'
        fig.rel = 'noreferrer'
        fig.style.cssText = 'flex:0 0 112px;color:#fff;text-decoration:none'
        var img = document.createElement('img')
        img.alt = it.cap
        img.referrerPolicy = 'no-referrer'
        img.src = it.src
        img.onerror = function () {
          if (it.fallback && img.dataset.tried !== '1') {
            img.dataset.tried = '1'
            img.src = it.fallback
            return
          }
          fig.remove()
        }
        var cap = document.createElement('p')
        cap.textContent = it.cap
        cap.style.cssText = 'margin:2px 0 0;font:11px/1.2 sans-serif;color:#fff;max-height:2.6em;overflow:hidden'
        fig.appendChild(img)
        fig.appendChild(cap)
        host.appendChild(fig)
      })
    }
    host.dataset.q = q
    painting = false
  }

  function proxied(src) {
    if (!src) return ''
    if (src.indexOf('/api/pmc/img?') === 0) return src
    if (/^https:\/\/(upload|thumb)\.wikimedia\.org\//.test(src)) return '/api/pmc/img?src=' + encodeURIComponent(src)
    if (/^https:\/\/openi\.nlm\.nih\.gov\/imgs\//.test(src)) return '/api/pmc/img?src=' + encodeURIComponent(src)
    return ''
  }

  function loads(src) {
    return new Promise(function (resolve) {
      if (!src) return resolve(false)
      var im = new Image()
      var done = false
      function finish(ok) { if (!done) { done = true; resolve(!!ok) } }
      im.onload = function () { finish(im.naturalWidth > 16 && im.naturalHeight > 16) }
      im.onerror = function () { finish(false) }
      im.referrerPolicy = 'no-referrer'
      im.src = src
      setTimeout(function () { finish(false) }, 7000)
    })
  }

  function commonsPage(q, offset) {
    var term = encodeURIComponent(q + ' (MRI OR CT OR PET OR radiograph OR scintigraphy OR SPECT) filetype:bitmap')
    var url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + term + '&gsrnamespace=6&gsrlimit=50&gsroffset=' + (offset || 0) + '&prop=imageinfo&iiprop=url&iiurlwidth=480&format=json&origin=*'
    return fetch(url, { signal: AbortSignal.timeout(8000) }).then(function (res) {
      if (!res.ok) return []
      return res.json()
    }).then(function (data) {
      var pages = Object.values((data.query && data.query.pages) || {})
      return pages.map(function (p) {
        var info = (p.imageinfo && p.imageinfo[0]) || {}
        var title = String(p.title || '').replace(/^File:/, '')
        if (/\b(cygnus|galaxy|nebula|telescope|astro|boeing|aircraft|flag|skyline|parrot|bird|snake|lizard)\b/i.test(title)) return null
        if (!/\b(pet|ct\b|mri|scan|scint|radio|x-?ray|tomo|ultra|mammo|bone|thyroid|lung|brain|liver|heart|chest|abdomen|fracture|tumor|cancer|spect|fdg|axial|coronal|sagittal|nuclear|angi|contrast)\b/i.test(title)) return null
        var thumb = info.thumburl || ''
        var original = info.url || ''
        if (thumb && !/\.(jpe?g|png|gif|webp)(\?|$)/i.test(thumb)) thumb = ''
        if (original && !/\.(jpe?g|png|gif|webp)(\?|$)/i.test(original)) original = ''
        var src = proxied(thumb || original)
        if (!src) return null
        return { src: src, fallback: proxied(original), cap: 'Wikimedia · ' + title, page: info.descriptionurl || src }
      }).filter(Boolean)
    }).catch(function () { return [] })
  }

  function commons(q) {
    var short = q.split(/\s+/).filter(Boolean).slice(0, 4).join(' ')
    return Promise.all([commonsPage(q, 0), commonsPage(short, 0), commonsPage(q, 50)]).then(function (parts) {
      return parts.reduce(function (all, list) { return all.concat(list || []) }, [])
    })
  }

  function europePmc(q) {
    var url = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=' + encodeURIComponent('HAS_FT:Y AND OPEN_ACCESS:Y AND (' + q + ')') + '&resultType=core&pageSize=5&format=json'
    return fetch(url, { signal: AbortSignal.timeout(8000) }).then(function (res) {
      if (!res.ok) return []
      return res.json()
    }).then(function (data) {
      var papers = ((data.resultList && data.resultList.result) || []).filter(function (p) { return p.pmcid })
      return Promise.all(papers.slice(0, 5).map(function (p) {
        return fetch('https://www.ebi.ac.uk/europepmc/webservices/rest/' + p.pmcid + '/fullTextXML', { signal: AbortSignal.timeout(6000) })
          .then(function (res) { return res.ok ? res.text() : '' })
          .then(function (xml) {
            var out = []
            var re = /xlink:href="([^"]+)"/g
            var m
            while ((m = re.exec(xml)) && out.length < 6) {
              var blob = String(m[1]).split('/').pop().split('?')[0]
              if (!/^[\w.-]+$/.test(blob)) continue
              out.push({
                src: '/api/pmc/img?pmcid=' + encodeURIComponent(p.pmcid) + '&file=' + encodeURIComponent(blob),
                cap: 'Europe PMC · ' + (p.title || p.pmcid),
                page: 'https://europepmc.org/articles/' + p.pmcid
              })
            }
            return out
          })
          .catch(function () { return [] })
      })).then(function (groups) {
        return groups.reduce(function (all, list) { return all.concat(list) }, [])
      })
    }).catch(function () { return [] })
  }

  function pmc(q) {
    return fetch('/api/pmc/match?q=' + encodeURIComponent(q), { signal: AbortSignal.timeout(8000) }).then(function (res) {
      if (!res.ok) return []
      return res.json()
    }).then(function (data) {
      return (data.results || []).map(function (m) {
        if (m.permittedUse !== 'display' || !m.imageUrl) return null
        var src = String(m.imageUrl)
        if (src.indexOf('https://openi.nlm.nih.gov/imgs/') === 0) src = '/api/pmc/img?src=' + encodeURIComponent(src)
        return { src: src, cap: (m.journal || 'Published') + ' · ' + (m.caption || m.title || 'figure'), page: m.pageUrl || m.url || src }
      }).filter(Boolean)
    })
  }

  function run() {
    var row = sourceRow()
    if (!row || painting) return
    collapse(row)
    var q = query()
    if (q.length < 3) return
    var host = document.getElementById('rrFetchedFigs')
    if (Array.isArray(cache[q])) {
      if (!host || host.dataset.q !== q) paint(row, q, cache[q])
      return
    }
    if (cache[q] === 'pending') return
    if (host && host.dataset.q === q) return
    painting = true
    if (!host) {
      host = document.createElement('div')
      host.id = 'rrFetchedFigs'
      row.insertAdjacentElement('afterend', host)
    }
    host.textContent = 'Searching figures…'
    painting = false
    Promise.all([pmc(q).catch(function () { return [] }), commons(q), europePmc(q)]).then(function (parts) {
      var seen = {}
      var items = []
      parts.forEach(function (list) {
        ;(list || []).forEach(function (it) {
          if (!it || !it.src || seen[it.src] || items.length >= 40) return
          seen[it.src] = 1
          items.push(it)
        })
      })
      cache[q] = 'pending'
      var live = sourceRow()
      if (!live || query() !== q) return
      var checked = []
      var i = 0
      function next() {
        if (i >= items.length || checked.length >= 24) {
          cache[q] = checked
          paint(live, q, checked)
          return
        }
        var batch = items.slice(i, i + 6)
        i += 6
        Promise.all(batch.map(function (it) {
          return loads(it.src).then(function (ok) {
            if (ok) return it
            if (!it.fallback || it.fallback === it.src) return null
            return loads(it.fallback).then(function (ok2) {
              if (!ok2) return null
              it.src = it.fallback
              return it
            })
          })
        })).then(function (rows) {
          rows.forEach(function (it) { if (it) checked.push(it) })
          next()
        })
      }
      next()
    })
  }

  function schedule() {
    if (painting) return
    clearTimeout(timer)
    timer = setTimeout(run, 350)
  }

  var root = document.getElementById('root')
  if (root) new MutationObserver(schedule).observe(root, { childList: true, subtree: true })
  schedule()
})()
