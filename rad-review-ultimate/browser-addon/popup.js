const input = document.querySelector('#api-base');
const status = document.querySelector('#status');
chrome.storage.sync.get({ apiBase: 'http://localhost:3000' }, ({ apiBase }) => { input.value = apiBase; });
document.querySelector('#save').addEventListener('click', () => {
  const value = input.value.trim().replace(/\/$/, '');
  let url;
  try { url = new URL(value); } catch { status.textContent = 'Enter a valid app address.'; return; }
  if (!['localhost', '127.0.0.1'].includes(url.hostname)) { status.textContent = 'Use a localhost RadAtlas address.'; return; }
  chrome.storage.sync.set({ apiBase: value }, () => { status.textContent = 'Saved.'; });
});
