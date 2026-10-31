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
  var push = history.pushState;
  var replace = history.replaceState;
  history.pushState = function(state, title, url){
    return push.call(this, state, title, url === undefined ? url : localHist(url));
  };
  history.replaceState = function(state, title, url){
    return replace.call(this, state, title, url === undefined ? url : localHist(url));
  };
  if (location.pathname === "/hj" || location.pathname === "/hj/") {
    history.replaceState(history.state, "", "/");
  }
  function here(raw){
    if (!raw || raw.charAt(0) === "#" || raw.indexOf("mailto:") === 0 || raw.indexOf("javascript:") === 0) return "";
    try {
      var u = new URL(raw, OWN + "/");
      if (u.origin !== OWN && u.origin !== location.origin) return "";
      if (/\\.(mp4|webm|jpg|jpeg|png|svg|pdf|css|js|vtt)$/i.test(u.pathname)) return "";
      return u.pathname + u.search + u.hash;
    } catch (e) { return ""; }
  }
  function fixAnchors(){
    var list = document.querySelectorAll("a[href]");
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a.target === "_blank") continue;
      var next = here(a.getAttribute("href") || "");
      if (!next) continue;
      var abs = location.origin + next;
      if (a.href !== abs) a.setAttribute("href", abs);
    }
  }
  window.addEventListener("click", function(e){
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
    var next = here(a.getAttribute("href") || a.href || "");
    if (!next) return;
    a.setAttribute("href", location.origin + next);
    e.preventDefault();
    e.stopImmediatePropagation();
    history.pushState(null, "", next);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, true);
  fixAnchors();
  document.addEventListener("DOMContentLoaded", fixAnchors);
  setInterval(fixAnchors, 500);
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
  function ensurePlayer(){
    var bits = location.pathname.split("/").filter(Boolean);
    if (bits[0] !== "watch" || !bits[2]) return;
    var id = "";
    try { id = decodeURIComponent(bits[2]); } catch (e) { return; }
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return;
    var box = document.querySelector("div.overflow-hidden.rounded-lg");
    if (!box) return;
    var src = "https://www.youtube-nocookie.com/embed/" + id + "?rel=0&playsinline=1&enablejsapi=1&origin=" + encodeURIComponent(location.origin);
    var frames = box.querySelectorAll("iframe");
    var keep = null;
    for (var i = 0; i < frames.length; i++) {
      var cur = frames[i].getAttribute("src") || "";
      if (!keep && cur.indexOf("/embed/" + id) >= 0) keep = frames[i];
    }
    if (!keep) {
      keep = document.createElement("iframe");
      keep.id = "hj-play";
      keep.className = "aspect-video w-full";
      keep.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      keep.setAttribute("allowfullscreen", "true");
      keep.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      var title = document.querySelector("h1");
      if (title) keep.title = title.textContent || "Lecture";
      keep.setAttribute("src", src);
      box.appendChild(keep);
    }
    for (var j = 0; j < frames.length; j++) if (frames[j] !== keep) frames[j].remove();
  }
  function neuterYt(){
    var yt = window.YT;
    if (!yt || !yt.Player || yt.Player.__plain) return;
    function Player(){ this.destroy = function(){}; this.getCurrentTime = function(){ return 0; }; this.getOption = function(){ return null; }; }
    Player.__plain = true;
    yt.Player = Player;
  }
  function tick(){
    neuterYt();
    ensurePlayer();
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
    fitPlayer();
    var named = lectureTitle();
    if (named && named !== titleSent) { titleSent = named; post(named); }
    var heads = document.querySelectorAll("h1");
    for (var h = 0; h < heads.length; h++) {
      var s = (heads[h].textContent || "").replace(/\\s+/g, " ").trim();
      if (s.length > 8 && s !== titleSent && !/harvard\\s*:\\s*johns/i.test(s)) { titleSent = s; post(s); break; }
    }
  }
  function filmRow(id, edge){
    var row = document.getElementById(id);
    if (row) return row;
    row = document.createElement("div");
    row.id = id;
    row.style.cssText = "position:fixed;left:0;right:0;height:64px;z-index:80;display:flex;gap:8px;align-items:center;overflow:hidden;background:#101820;padding:4px 8px;" + (edge === "bottom" ? "bottom:28px;" : "top:0;");
    if (edge === "bottom") row.style.display = "none";
    document.body.appendChild(row);
    return row;
  }
  function addFilms(row, urls){
    for (var i = 0; i < urls.length; i++) {
      if (row.querySelector('img[src="' + urls[i] + '"]')) continue;
      var img = document.createElement("img");
      img.src = urls[i];
      img.alt = "";
      img.style.cssText = "height:56px;width:84px;object-fit:cover;border-radius:6px;flex:0 0 auto;background:#000";
      row.appendChild(img);
    }
    while (row.children.length > 20) row.removeChild(row.firstChild);
  }
  var packs = {
    brain: ["/meta-image/films/mri-ax-09.webp","/meta-image/films/mri-sag-06.webp"],
    chest: ["/meta-image/films/ct-th-axi-40.webp","/meta-image/films/xpa-a.webp","/meta-image/films/pet-ax.webp"],
    cardiac: ["/meta-image/films/ct-th-axi-40.webp","/meta-image/films/pet-ax.webp"]
  };
  function lectureTitle(){
    var nodes = document.querySelectorAll("h1, h2, h3");
    for (var i = 0; i < nodes.length; i++) {
      var s = (nodes[i].textContent || "").replace(/\\s+/g, " ").trim();
      if (s.length < 4 || s.length > 90) continue;
      if (/harvard|johns|emory|atlas|results|hj med|residency|diagnostic radiology|mark as watched/i.test(s)) continue;
      return s;
    }
    var text = (document.body.innerText || "").replace(/\\s+/g, " ");
    var m = text.match(/Next lecture\\s+(.{4,80}?)\\s+(?:CTisus|YouTube|·)/);
    return m ? m[1] : "";
  }
  function queryFor(title){
    var t = title.toLowerCase();
    if (/breast|mammo|tomosynthesis/.test(t)) return "breast mammography MRI";
    if (/cardiac|heart|coronary|myocard/.test(t)) return "cardiac CT angiography";
    if (/brain|cerebr|stroke|neuro/.test(t)) return "brain MRI";
    if (/chest|lung|pulmonary|thorax/.test(t)) return "chest CT lung";
    if (/abdomen|liver|pancrea|bowel/.test(t)) return "abdominal CT";
    return title + " radiology";
  }
  function onTopic(q, title){
    var T = String(title || "").toLowerCase();
    if (offTopic(q, title)) return false;
    if (/lizard|galliwasp|fourier|spectrum|novel|portrait|drawing|diagram|schematic|people|hospital/.test(T)) return false;
    var L = String(q || "").toLowerCase();
    if (/cardiac|heart|coronary|congenital/.test(L)) return /heart|cardiac|coronary|myocard|aorta|ventric|septal|congenital/.test(T);
    if (/breast|mammo/.test(L)) return /breast|mammo/.test(T);
    if (/brain|stroke/.test(L)) return /brain|cerebr|stroke|head/.test(T);
    if (/chest|lung/.test(L)) return /chest|lung|pulmon|thorax/.test(T);
    return /ct|mri|x-ray|radiograph|pet|scan|angiograph/.test(T);
  }
  function offTopic(lecture, title){
    var L = String(lecture || "").toLowerCase();
    var T = String(title || "").toLowerCase();
    if (/breast|mammo/.test(L) && /cardiac|myocard|coronary|heart failure|brain mri/.test(T)) return true;
    if (/cardiac|heart|coronary|myocard/.test(L) && /breast|mammo|gynecomastia/.test(T)) return true;
    if (/brain|cerebr|stroke/.test(L) && /breast|mammo|cardiac|coronary/.test(T)) return true;
    return false;
  }
  function localFor(q){
    var t = q.toLowerCase();
    if (/breast|mammo/.test(t)) return [];
    if (/brain|cerebr|stroke/.test(t)) return packs.brain;
    if (/cardiac|heart|coronary/.test(t)) return [];
    if (/chest|lung|thorax|ct/.test(t)) return packs.chest;
    return [];
  }
  function paintLive(){
    var row = filmRow("hjLive", "top");
    var title = window.__liveQ || lectureTitle();
    var q = title ? queryFor(title) : "";
    if (q && q !== row.getAttribute("data-q")) {
      row.setAttribute("data-q", q);
      row.innerHTML = "";
      row.scrollLeft = 0;
      addFilms(row, localFor(q));
      fetch("https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + encodeURIComponent(q) + "&gsrlimit=8&prop=pageimages&pithumbsize=320&format=json&origin=*")
        .then(function(r){ return r.json(); })
        .then(function(data){
          if (row.getAttribute("data-q") !== q) return;
          var pages = (data.query && data.query.pages) || {};
          var urls = [];
          for (var k in pages) {
            var p = pages[k];
            if (!p.thumbnail || !onTopic(q, p.title)) continue;
            urls.push(p.thumbnail.source);
          }
          addFilms(row, urls);
        })
        .catch(function(){});
    }
    if (row.scrollWidth <= row.clientWidth + 24 && row.children.length && row.children.length < 14) {
      var clones = [];
      for (var c = 0; c < row.children.length; c++) clones.push(row.children[c].cloneNode(true));
      for (var n = 0; n < clones.length; n++) row.appendChild(clones[n]);
    }
    row.scrollLeft += 1.1;
    if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 2) row.scrollLeft = 0;
    var lib = document.getElementById("hjLib");
    if (lib && lib.style.display !== "none") {
      lib.scrollLeft += 1.1;
      if (lib.scrollLeft + lib.clientWidth >= lib.scrollWidth - 2) lib.scrollLeft = 0;
    }
  }
  document.addEventListener("click", function(e){
    var node = e.target && e.target.closest ? e.target.closest("button, a") : null;
    var label = node ? (node.textContent || "") : "";
    if (!/image library/i.test(label)) return;
    var row = filmRow("hjLib", "bottom");
    row.style.display = "flex";
    var live = document.getElementById("hjLive");
    var q = live ? (live.getAttribute("data-q") || "") : "";
    if (q && row.getAttribute("data-q") !== q) {
      row.setAttribute("data-q", q);
      row.innerHTML = "";
      addFilms(row, localFor(q));
    }
  }, true);
  window.addEventListener("message", function(e){
    if (!e.data || e.data.source !== "hj-library") return;
    var row = filmRow("hjLib", "bottom");
    row.style.display = "flex";
    var live = document.getElementById("hjLive");
    var q = live ? (live.getAttribute("data-q") || "") : "";
    if (q && row.getAttribute("data-q") !== q) {
      row.setAttribute("data-q", q);
      row.innerHTML = "";
      addFilms(row, localFor(q));
    }
  });
  var fitted = "";
  function fitPlayer(){
    var yt = document.querySelector("iframe[src*='youtube']");
    if (!yt) return;
    var id = ((yt.getAttribute("src") || "").match(/embed\\/([A-Za-z0-9_-]{6,15})/) || [])[1] || "";
    if (!id || fitted === id) return;
    var b = yt.getBoundingClientRect();
    if (b.height < 80) return;
    var room = window.innerHeight - 8;
    if (b.top >= 64 && b.bottom <= room) { fitted = id; return; }
    window.scrollTo(0, Math.max(0, window.scrollY + b.top - 68));
    fitted = id;
  }
  window.addEventListener("message", function(e){
    if (!e.data || e.data.source !== "lecture-words" || !e.data.q) return;
    window.__liveQ = String(e.data.q).replace(/\\s+/g, " ").trim().slice(0, 120);
    var frames = document.querySelectorAll("iframe");
    for (var i = 0; i < frames.length; i++) {
      try { frames[i].contentWindow.postMessage({ type: "studio-query", q: window.__liveQ }, "*"); } catch (err) {}
    }
  });
  setInterval(paintLive, 40);
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
  const inject = `<script>${BRIDGE}</script><base href="${HOST}/">`;
  html = html.includes("<head>") ? html.replace("<head>", "<head>" + inject) : inject + html;
  return new Response(method === "HEAD" ? null : html, {
    status: upstream.ok ? 200 : upstream.status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
