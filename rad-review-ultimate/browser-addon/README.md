# RAD ATLAS Search Panel — browser add-on

Puts the green RAD ATLAS control under the search box on Google, Bing and
DuckDuckGo. Clicking it reads the query already on the page and shows open
radiology imaging — published figures from PubMed Central and public DICOM
studies from The Cancer Imaging Archive — in a panel directly beneath the search
area, two cards at a time with Previous / Next.

## Install (Chrome, Edge, Brave)

1. Start the workstation so the API is up:

   ```
   npm run dev
   ```

2. Open `chrome://extensions`, turn on **Developer mode**, choose **Load
   unpacked**, and select this `browser-addon` folder.
3. Click the extension icon and confirm the app address. It defaults to
   `http://localhost:3000`; change it if Vite chose another port.

## What it talks to

`GET {apiBase}/api/radatlas/search?q=<query>&sources=pmc,tcia`

That endpoint is served by `vite-plugin-radatlas.ts` in this repo and returns the
same response shape as the standalone RadAtlas app, so this add-on works against
either one without changes.

## Privacy

Everything stays local. The add-on stores one setting — the app address — in
`chrome.storage.sync`. It reads the query already visible on the results page and
sends it to your own machine. It records no history, no identifiers and no
patient data, and it has no host permission for anything but localhost.

## Limits worth knowing

- Results are open-access literature and public research archives. They are
  **reference imaging**, never a specific patient's study.
- PubMed Central rate-limits aggressive use and will return nothing for a while
  if pushed; the panel says so rather than showing an empty list.
- Nothing here inspects pixels. A result matches because its caption and
  metadata match, which is not the same as the image depicting what you asked for.
