const HOST = "https://noardstudiomannus.vercel.app";

const BRIDGE = `(function(){
  var OWN = "https://noardstudiomannus.vercel.app";
  function localApi(url){
    if (typeof url !== "string" || !url) return url;
    var path = url;
    if (url.indexOf("http") === 0) {
      try {
        var u = new URL(url);
        if (u.origin !== OWN && u.origin !== location.origin) return url;
        path = u.pathname + u.search;
      } catch (e) { return url; }
    } else if (url.charAt(0) !== "/") return url;
    if (path.indexOf("/api/trpc") === 0 || path.indexOf("/api/content") === 0 || path.indexOf("/api/platform") === 0 || path.indexOf("/api/oembed") === 0 || path.indexOf("/api/oauth") === 0) return location.origin + path;
    return url;
  }
  var ofetch = window.fetch;
  window.fetch = function(input, init){
    try {
      if (typeof input === "string") input = localApi(input);
      else if (input && input.url) {
        var next = localApi(input.url);
        if (next !== input.url) input = new Request(next, input);
      }
    } catch (e) {}
    return ofetch.call(this, input, init);
  };
  var origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url){
    var args = Array.prototype.slice.call(arguments);
    args[1] = localApi(String(url || ""));
    return origOpen.apply(this, args);
  };
  function localHist(url){
    if (typeof url !== "string" || !url) return url;
    try {
      var u = new URL(url, location.href);
      if (u.origin === location.origin) return u.href;
      var n = new URL(url, OWN + "/");
      if (n.origin === OWN) return location.origin + n.pathname + n.search + n.hash;
    } catch (e) {}
    return url;
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
  var spoken = "";
  var lessonSent = "";
  var reportedId = "";
  var lastSlide = "";
  var spin = 0;
  function post(text){
    text = String(text || "").replace(/\\s+/g, " ").trim();
    if (text.length < 8 || text === last) return;
    last = text;
    spoken = text;
    try { parent.postMessage({ source: "hj-caption", cc: true, player: true, text: text, videoId: videoId }, "*"); } catch (e) {}
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
    try { parent.postMessage({ source: "hj-caption", cc: true, t: t, videoId: videoId }, "*"); } catch (e) {}
    if (!cues.length) return;
    var hit = null;
    for (var i = 0; i < cues.length; i++) if (cues[i].t <= t + 0.3) hit = cues[i]; else break;
    if (hit && hit.text) post(hit.text);
  }
  function armPlayer(){
    var frames = document.querySelectorAll("iframe");
    for (var i = 0; i < frames.length; i++) {
      var fr = frames[i];
      var src = fr.getAttribute("src") || "";
      if (src.indexOf("youtube") < 0) continue;
      if (fr.getAttribute("data-arm") !== "1") fr.setAttribute("data-arm", "1");
      if (src.indexOf("enablejsapi") < 0) continue;
      try { fr.contentWindow.postMessage(JSON.stringify({ event: "listening", id: "studio", channel: "widget" }), "*"); } catch (e) {}
    }
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
  function retarget(el){
    if (!el || !el.tagName) return;
    var abs = "";
    try { abs = el.src || ""; } catch (e) {}
    if (!abs) abs = el.getAttribute("src") || "";
    if (!abs) return;
    var u;
    try { u = new URL(abs, location.href); } catch (e) { return; }
    if (u.pathname.indexOf("/manus-storage/") !== 0 && u.pathname.indexOf("/medical-source/") !== 0) return;
    if (u.origin === location.origin) return;
    var next = location.origin + u.pathname + u.search;
    if ((el.currentSrc || el.src) === next) return;
    var tag = el.tagName;
    if (tag === "VIDEO" || tag === "AUDIO") {
      var t = el.currentTime || 0;
      var playing = !el.paused;
      el.src = next;
      if (t > 0.2) { try { el.currentTime = t; } catch (e) {} }
      if (playing) el.play().catch(function(){});
    } else {
      el.src = next;
    }
  }
  function widgetSrc(view, title){
    return "https://teaching-studios.vercel.app/studio/NucMed-Board-Studio.html?view=" + encodeURIComponent(view) + "&embed=1&q=" + encodeURIComponent(title || "");
  }
  function mountReel(){
    var old = document.querySelectorAll(".live-reel");
    for (var i = 0; i < old.length; i++) old[i].remove();
    return null;
  }
  window.addEventListener("message", function(e){
    var msg = e.data;
    if (!msg || msg.source !== "studio-reel" || !msg.urls) return;
    var reel = mountReel();
    if (!reel) return;
    var track = reel.querySelector(".live-reel-track");
    var urls = msg.urls;
    for (var i = 0; i < urls.length; i++) {
      if (track.querySelector('img[src="' + urls[i] + '"]')) continue;
      var img = document.createElement("img");
      img.src = urls[i];
      img.alt = "";
      img.style.cssText = "height:96px;width:140px;object-fit:cover;border-radius:8px;background:#111";
      track.appendChild(img);
    }
    while (track.children.length > 16) track.removeChild(track.firstChild);
  });
  function mountDock(){
    var player = document.querySelector(".media-player");
    if (!player) return;
    var titleEl = player.querySelector(".player-caption strong");
    var title = titleEl ? (titleEl.textContent || "").replace(/\\s+/g, " ").trim() : "lecture";
    var dock = player.querySelector(".studio-widgets");
    if (!dock) {
      dock = document.createElement("section");
      dock.className = "studio-widgets";
      var bar = document.createElement("div");
      bar.className = "inline-actions";
      bar.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;margin-top:8px";
      var kinds = [["radreview","RAD REVIEW"],["radatlas","Rad Atlas"],["caseqa","Q+A"],["rrultimate","RAD REVIEW Ultimate"],["metaimage","Meta Image"],["academy","Academy"],["nucleus","Nucleus"]];
      kinds.forEach(function(pair){
        var b = document.createElement("button");
        b.type = "button";
        b.className = pair[0] === "radatlas" ? "button button-crimson" : "button button-quiet";
        b.textContent = pair[1];
        b.setAttribute("data-view", pair[0]);
        b.addEventListener("click", function(){
          dock.setAttribute("data-view", pair[0]);
          var buttons = bar.querySelectorAll("button");
          for (var n = 0; n < buttons.length; n++) {
            buttons[n].className = buttons[n].getAttribute("data-view") === pair[0] ? "button button-crimson" : "button button-quiet";
          }
          var current = dock.getAttribute("data-title") || title;
          try { window.parent.postMessage({ type: "hj-widget", view: pair[0], title: current }, "*"); } catch (e) {}
        });
        bar.appendChild(b);
      });
      dock.appendChild(bar);
      dock.setAttribute("data-view", "radatlas");
      var caption = player.querySelector(".player-caption");
      if (caption && caption.nextSibling) player.insertBefore(dock, caption.nextSibling);
      else player.appendChild(dock);
    }
    if (dock.getAttribute("data-title") === title) return;
    dock.setAttribute("data-title", title);
    var view = dock.getAttribute("data-view") || "radatlas";
    try { window.parent.postMessage({ type: "hj-widget", view: view, title: title }, "*"); } catch (e) {}
  }
  function tick(){
    mountReel();
    armPlayer();
    mountDock();
    document.querySelectorAll("video, audio, track, source").forEach(retarget);
    var videos = document.querySelectorAll("video");
    for (var i = 0; i < videos.length; i++) {
      var v = videos[i];
      if (v.getAttribute("data-cap") === "1") continue;
      v.setAttribute("data-cap", "1");
      try {
        var tracks = v.textTracks;
        for (var k = 0; k < tracks.length; k++) {
          tracks[k].addEventListener("cuechange", function(){
            var cue = this.activeCues && this.activeCues[0];
            if (cue && cue.text) post(cue.text);
          });
        }
      } catch (e) {}
    }
    var frames = document.querySelectorAll("iframe");
    for (var j = 0; j < frames.length; j++) {
      var fr = frames[j];
      var src = fr.getAttribute("src") || "";
      var m = src.match(/youtube(?:-nocookie)?\\.com\\/embed\\/([A-Za-z0-9_-]{6,15})/) || src.match(/[?&]v=([A-Za-z0-9_-]{6,15})/);
      if (!m) continue;
      loadCues(m[1]);
    }
    var capEl = document.querySelector(".player-caption strong");
    var lesson = capEl ? (capEl.textContent || "").replace(/\\s+/g, " ").trim() : "";
    if (!lesson) {
      var nodes = document.querySelectorAll("h1,h2,h3,h4,li");
      for (var n = 0; n < nodes.length; n++) {
        var s = (nodes[n].textContent || "").replace(/\\s+/g, " ").trim();
        if (s.length < 8 || s.length > 90) continue;
        if (/acgme|case-in-point|youtube|public viewing|disclaimer|board studio|independent|reproduction|meta image|rad atlas|rad review|academy|nucleus|ultimate/i.test(s)) continue;
        lesson = s;
        break;
      }
    }
    if (lesson && lesson !== lessonSent) { lessonSent = lesson; post(lesson); }
    var slideNode = document.querySelector(".media-player .player-caption, .media-player .slide-line, .player-caption");
    var slide = slideNode ? (slideNode.textContent || "").replace(/\\s+/g, " ").trim() : "";
    if (slide.length > 18 && slide !== lastSlide) {
      lastSlide = slide;
      post(slide);
    }
    if (videoId && videoId !== reportedId && lessonSent) {
      reportedId = videoId;
      try { parent.postMessage({ source: "hj-caption", cc: true, videoId: videoId, text: lessonSent }, "*"); } catch (e) {}
    }
    var base = spoken || lesson;
    if (base) {
      spin += 1;
      var bits = base.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\\s+/).filter(function(w){
        return w.length > 3 && !/^(that|this|with|from|what|when|your|have|they|them|then|about|there|their|which|would|could|should|really|made|into|over|lecture|monday|queue|started|advances|playable|lesson|ends|youtube|unit|source|ready)$/.test(w);
      });
      if (bits.length) {
        var pick = bits[spin % bits.length];
        var q = pick + " " + bits[(spin + 1) % bits.length];
        try { parent.postMessage({ source: "hj-caption", cc: true, follow: true, text: q, videoId: videoId }, "*"); } catch (e) {}
      }
    }
  }
  function postBox(){
    var el = document.querySelector("iframe[src*='youtube'], video");
    if (!el) return;
    var r = el.getBoundingClientRect();
    if (r.width < 40 || r.height < 40) return;
    try { parent.postMessage({ source: "hj-caption", box: { top: r.top, left: r.left, width: r.width, height: r.height } }, "*"); } catch (e) {}
  }
  window.addEventListener("scroll", postBox, true);
  setInterval(function(){ tick(); postBox(); }, 1000);
})();`;

export async function medbDocument() {
  const upstream = await fetch(HOST + "/med", {
    headers: { "user-agent": "BoardStudio/1.0 (teaching)" },
  });
  let html = await upstream.text();
  const inject = `<base href="${HOST}/"><script>${BRIDGE}</script>`;
  html = html.includes("<head>") ? html.replace("<head>", "<head>" + inject) : inject + html;
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
