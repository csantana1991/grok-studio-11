const HOST = "https://noardstudiomannus.vercel.app";

const BRIDGE = `(function(){
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
      var m = src.match(/youtube(?:-nocookie)?\\.com\\/embed\\/([A-Za-z0-9_-]{6,15})/);
      if (!m) continue;
      loadCues(m[1]);
      if (!fr.id) fr.id = "ytcap" + j;
      try {
        var win = fr.contentWindow;
        win.postMessage(JSON.stringify({ event: "listening", id: fr.id, channel: "widget" }), "*");
        win.postMessage(JSON.stringify({ event: "command", func: "getCurrentTime", args: [], id: fr.id, channel: "widget" }), "*");
      } catch (e) {}
    }
    var heads = document.querySelectorAll("h1,h2,h3");
    for (var h = 0; h < heads.length; h++) {
      var s = (heads[h].textContent || "").replace(/\\s+/g, " ").trim();
      if (s.length > 18 && s !== titleSent && !/board studio|independent specialty|harvard:john|catalogue/i.test(s)) { titleSent = s; post(s); break; }
    }
  }
  setInterval(tick, 1000);
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
