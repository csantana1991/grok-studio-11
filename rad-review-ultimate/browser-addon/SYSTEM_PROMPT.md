# RAD ATLAS browser add-on — build prompt

Build a Manifest V3 browser extension called **RAD ATLAS Search Panel**. On
Google, Bing, and DuckDuckGo search-result pages, place a small green RAD ATLAS
icon/button below the search box. When clicked, read the active search query and
request `GET {RADATLAS_API_BASE}/api/radatlas/search?q={query}&sources=pmc,tcia`.

Render a panel immediately below the search area at normal results-column width.
Show exactly two cards per page with image preview, source/type, modality or
format, title, and short description. Include Previous and Next controls, show
the total count, and link every card to its source/full study. Provide an **Open
RAD ATLAS** link to `{RADATLAS_API_BASE}/` for the complete search experience.

Use a local configurable default API base of `http://localhost:3000` — the port
RAD REVIEW ULTIMATE serves, which hosts the same `/api/radatlas/search` contract
as the standalone RadAtlas app. Keep all data handling local to the extension: do
not collect history, identifiers, or patient data. Handle unavailable sources
gracefully and show a plain error state if the RAD ATLAS API is not running.

Never present a result as a specific patient's imaging, and never claim an image
was visually verified: matching is done on captions and metadata.
