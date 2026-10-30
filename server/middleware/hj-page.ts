/**
 * Same-origin shell for HJ Med, matching the Med-b embed.
 * The lecture app stays theirs. Pages, lesson links, and caption
 * messages stay on this origin so YouTube and the image strip can see them.
 */
const HOST = "https://hj-med.vercel.app";

const BRIDGE = `(function(){
  var OWN = "https://hj-med.vercel.app";
  function localHist(url){
    if (typeof url !== "string" || !url) return url;
    try {
      var u = new URL(url, location.href);
      if (u.origin !== location.origin) {
        var n = new URL(url, OWN + "/");
        if (n.origin !== OWN) return url;
        u = n;
      }
      return location.origin + u.pathname + u.search + u.hash;
    } catch (e) { return url; }
  }
  if (location.pathname === "/hj" || location.pathname === "/hj/") {
    history.replaceState(history.state, "", "/");
  }
  var push = history.pushState;
  var replace = history.replaceState;
  history.pushState = function(state, title, url){
    return push.call(this, state, title, url === undefined ? url : localHist(url));
  };
  history.replaceState = function(state, title, url){
    return replace.call(this, state, title, url === undefined ? url : localHist(url));
  };
  var videoId = "";
  var cues = [];
  var last = "";
  var titleSent = "";
  function post(text){
    text = String(text || "").replace(/\\s+/g, " ").trim();
    if (text.length < 8 || text === last) return;
    last = text;
    try { parent.postMessage({ source: "hj-caption", cc: true, text: text, videoId: videoId }, "*"); } catch (e) {}
  }
  function loadCues(id){
    if (!id || id === videoId) return;
    videoId = id;
    cues = [];
    fetch(location.origin + "/api/pmc/match?source=captions&v=" + encodeURIComponent(id))
      .then(function(r){ return r.json(); })
      .then(function(b){ if (id === videoId) cues = (b && b.lines) || []; })
      .catch(function(){});
  }
  function lineAt(t){
    if (!cues.length) return;
    var hit = null;
    for (var i = 0; i < cues.length; i++) if (cues[i].t <= t + 0.3) hit = cues[i]; else break;
    if (hit && hit.text) post(hit.text);
  }
  window.addEventListener("message", function(e){
    if (String(e.origin || "").indexOf("youtube.com") < 0) return;
    var data = e.data;
    if (typeof data === "string") { try { data = JSON.parse(data); } catch (err) { return; } }
    var info = data && data.info;
    if (!info) return;
    if (info.videoData && info.videoData.video_id) loadCues(info.videoData.video_id);
    if (typeof info.currentTime === "number") lineAt(info.currentTime);
  });
  function tick(){
    var frames = document.querySelectorAll("iframe");
    for (var j = 0; j < frames.length; j++) {
      var fr = frames[j];
      var src = fr.getAttribute("src") || "";
      if (src.indexOf("youtube") < 0) continue;
      if (src.indexOf("origin=") < 0) {
        fr.setAttribute("src", src + (src.indexOf("?") < 0 ? "?" : "&") + "origin=" + encodeURIComponent(location.origin));
        src = fr.getAttribute("src") || src;
      }
      var m = src.match(/embed\\/([A-Za-z0-9_-]{6,15})/);
      if (!m) continue;
      loadCues(m[1]);
      if (!fr.id) fr.id = "hj-yt";
      try {
        var win = fr.contentWindow;
        win.postMessage(JSON.stringify({ event: "listening", id: fr.id, channel: "widget" }), "*");
        win.postMessage(JSON.stringify({ event: "command", func: "getCurrentTime", args: [], id: fr.id, channel: "widget" }), "*");
      } catch (e) {}
    }
    var heads = document.querySelectorAll("h1");
    for (var h = 0; h < heads.length; h++) {
      var s = (heads[h].textContent || "").replace(/\\s+/g, " ").trim();
      if (s.length > 8 && s !== titleSent && !/harvard\\s*:\\s*johns/i.test(s)) { titleSent = s; post(s); break; }
    }
  }
  setInterval(tick, 1000);
})();`;

interface HjEvent {
  url: URL;
  req: Request;
}

function isHjPage(path: string, dest: string | null): boolean {
  if (path === "/hj" || path === "/hj/") return true;
  if (path === "/readiness") return true;
  if (path === "/boards" || path.startsWith("/boards/")) return true;
  if (path === "/programs" || path.startsWith("/programs/")) return true;
  if (path === "/watch" || path.startsWith("/watch/")) return true;
  if ((path === "/" || path === "") && dest === "iframe") return true;
  return false;
}

export default async function hjPage(event: HjEvent, next: () => unknown): Promise<unknown> {
  const path = event.url.pathname;
  const method = (event.req.method || "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();
  if (/\.[a-z0-9]{2,5}$/i.test(path)) return next();
  const dest = event.req.headers.get("sec-fetch-dest");
  if (!isHjPage(path, dest)) return next();

  const upstreamPath = path === "/hj" || path === "/hj/" ? "/" : path;
  const upstream = await fetch(HOST + upstreamPath + event.url.search, {
    headers: { "user-agent": "BoardStudio/1.0 (teaching)", accept: "text/html" },
    redirect: "follow",
  });
  let html = await upstream.text();
  const inject = `<base href="${HOST}/"><script>${BRIDGE}</script>`;
  html = html.includes("<head>") ? html.replace("<head>", "<head>" + inject) : inject + html;
  return new Response(method === "HEAD" ? null : html, {
    status: upstream.ok ? 200 : upstream.status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
