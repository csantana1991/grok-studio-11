(() => {
  const PAGE_SIZE = 2;
  const DEFAULT_API_BASE = 'http://localhost:3000';
  const state = { query: '', page: 0, results: [], apiBase: DEFAULT_API_BASE, panel: null };

  const icon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3h14v18H5z" stroke="currentColor" stroke-width="1.7"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="16.5" cy="16.5" r="3" fill="#8ff3df"/></svg>';

  function searchHost() {
    return document.querySelector('form[role="search"], form#sb_form, form#search_form')
      || document.querySelector('input[name="q"], input[name="query"]')?.closest('form');
  }

  function queryFromPage() {
    const params = new URLSearchParams(location.search);
    const parameterQuery = params.get('q') || params.get('query');
    const input = document.querySelector('input[name="q"], input[name="query"]');
    return (parameterQuery || input?.value || '').trim();
  }

  function absoluteUrl(value) {
    if (!value) return '';
    try {
      const url = new URL(value, `${state.apiBase}/`);
      return /^https?:$/.test(url.protocol) ? url.toString() : '';
    } catch {
      return '';
    }
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  }

  function flatten(groups) {
    return [
      ...(groups.articleFigures || []).map((item) => ({ ...item, group: 'Publication figure', image: item.imageUrl, action: item.articleUrl })),
      ...(groups.studyPreviews || []).map((item) => ({ ...item, group: 'Study preview', image: item.previewUrl, action: item.fullStudyUrl })),
      ...(groups.fullStudies || []).map((item) => ({ ...item, group: 'Full DICOM study', image: '', action: item.fullStudyUrl })),
    ];
  }

  function preview(item) {
    const url = absoluteUrl(item.image);
    return url ? `<img src="${escapeHtml(url)}" alt="" loading="lazy">` : '<span>Study available</span>';
  }

  function render() {
    if (!state.panel) return;
    const totalPages = Math.max(1, Math.ceil(state.results.length / PAGE_SIZE));
    state.page = Math.min(state.page, totalPages - 1);
    const visible = state.results.slice(state.page * PAGE_SIZE, (state.page + 1) * PAGE_SIZE);
    const cards = visible.length
      ? visible.map((item) => `<article class="radatlas-card">
          <a class="radatlas-preview" href="${escapeHtml(absoluteUrl(item.action) || state.apiBase)}" target="_blank" rel="noreferrer">${preview(item)}</a>
          <div class="radatlas-copy"><div class="radatlas-meta">${escapeHtml(item.group)}<em>${escapeHtml(item.modality || item.format || item.source?.name || 'Open')}</em></div>
          <h3>${escapeHtml(item.title || 'Untitled imaging result')}</h3><p>${escapeHtml(item.caption || item.description || item.collection || '')}</p></div>
        </article>`).join('')
      : '<div class="radatlas-empty">No open imaging was found for this search.</div>';
    state.panel.innerHTML = `<div class="radatlas-head"><div class="radatlas-title"><span class="radatlas-brand">RadAtlas</span><span>${state.query || 'Search imaging'}</span></div><button class="radatlas-close" aria-label="Close RadAtlas panel">×</button></div>
      <div class="radatlas-grid">${cards}</div><div class="radatlas-footer"><div class="radatlas-paging"><button data-page="prev" ${state.page === 0 ? 'disabled' : ''}>Previous</button><span class="radatlas-count">${state.results.length ? `${state.page + 1} / ${totalPages} · ${state.results.length} results` : ''}</span><button data-page="next" ${state.page >= totalPages - 1 ? 'disabled' : ''}>Next</button></div><a class="radatlas-open" href="${state.apiBase}/" target="_blank" rel="noreferrer">Open RadAtlas →</a></div>`;
    state.panel.querySelector('.radatlas-close').onclick = () => closePanel();
    state.panel.querySelector('[data-page="prev"]').onclick = () => { state.page--; render(); };
    state.panel.querySelector('[data-page="next"]').onclick = () => { state.page++; render(); };
  }

  async function openPanel() {
    const query = queryFromPage();
    if (!query) return;
    state.query = query;
    state.page = 0;
    if (!state.panel) {
      state.panel = document.createElement('section');
      state.panel.id = 'radatlas-search-panel';
      state.panel.setAttribute('aria-label', 'RadAtlas imaging results');
      (searchHost() || document.body).insertAdjacentElement('afterend', state.panel);
    }
    state.panel.innerHTML = '<div class="radatlas-empty">Searching RadAtlas for open imaging…</div>';
    state.panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    try {
      const response = await fetch(`${state.apiBase}/api/radatlas/search?q=${encodeURIComponent(query)}&sources=pmc,tcia`);
      if (!response.ok) throw new Error('Search unavailable');
      const data = await response.json();
      state.results = flatten(data.groups || {});
      render();
    } catch {
      state.panel.innerHTML = `<div class="radatlas-head"><div class="radatlas-title"><span class="radatlas-brand">RadAtlas</span><span>${query}</span></div><button class="radatlas-close" aria-label="Close RadAtlas panel">×</button></div><div class="radatlas-error">RadAtlas is not available at ${state.apiBase}. Start RAD REVIEW ULTIMATE (npm run dev), then try again.</div>`;
      state.panel.querySelector('.radatlas-close').onclick = () => closePanel();
    }
  }

  function closePanel() {
    state.panel?.remove();
    state.panel = null;
  }

  function ensureTrigger() {
    const host = searchHost();
    if (!host || document.querySelector('#radatlas-search-trigger')) return;
    const button = document.createElement('button');
    button.id = 'radatlas-search-trigger';
    button.type = 'button';
    button.innerHTML = `${icon}<span>RadAtlas</span>`;
    button.addEventListener('click', openPanel);
    host.insertAdjacentElement('afterend', button);
  }

  chrome.storage.sync.get({ apiBase: DEFAULT_API_BASE }, ({ apiBase }) => {
    state.apiBase = String(apiBase || DEFAULT_API_BASE).replace(/\/$/, '');
    ensureTrigger();
    setInterval(ensureTrigger, 1000);
  });
})();
