(function () {
  function reading() {
    try {
      var mod = (typeof currentModule === "function") ? currentModule() : null;
      return !!(mod && /protocol/i.test((mod.id || "") + " " + (mod.title || "")) && typeof state !== "undefined" && state.view === "module");
    } catch (e) {
      return false;
    }
  }

  function hideEl(el) {
    if (!el || el.dataset.protocolHidden) return;
    el.dataset.protocolHidden = "1";
    el.dataset.protocolDisplay = el.style.display || "";
    el.style.setProperty("display", "none", "important");
  }
  function showEl(el) {
    if (!el || !el.dataset.protocolHidden) return;
    if (el.dataset.protocolDisplay) el.style.display = el.dataset.protocolDisplay;
    else el.style.removeProperty("display");
    delete el.dataset.protocolHidden;
    delete el.dataset.protocolDisplay;
  }

  function fit() {
    var yes = reading();
    if (document.body) document.body.classList.toggle("protocol-read", yes);
    var wikiDef = document.getElementById("wikiDef");
    var win = document.getElementById("winBar");
    var dock = document.getElementById("dockHandle");
    var script = document.querySelector(".media-row .script");
    var strip = document.getElementById("modStrip");
    var player = document.getElementById("playerDock");
    if (!yes) {
      showEl(wikiDef);
      showEl(win);
      showEl(dock);
      showEl(script);
      showEl(strip);
      showEl(player);
      document.querySelectorAll(".lesson-fig-row").forEach(showEl);
      return;
    }
    document.body.classList.remove("wiki-top", "clip-on");
    var wiki = document.getElementById("wikiTop");
    if (wiki) wiki.classList.remove("on");
    var phrase = document.getElementById("phraseDef");
    if (phrase) phrase.style.setProperty("display", "none", "important");
    var bar = document.getElementById("hjBar");
    if (bar) bar.style.setProperty("display", "none", "important");
    var film = document.getElementById("atlasFilm");
    if (film) film.style.setProperty("display", "none", "important");
    hideEl(wikiDef);
    hideEl(win);
    hideEl(dock);
    hideEl(strip);
    hideEl(player);
    document.querySelectorAll(".wiki-panel, .def-panel, aside.wiki").forEach(function (el) {
      el.style.setProperty("display", "none", "important");
    });
    var vid = document.querySelector(".vid-panel");
    if (vid) vid.style.setProperty("display", "none", "important");
    var split = document.querySelector(".vid-split");
    if (split) split.style.setProperty("display", "none", "important");
    document.querySelectorAll(".lesson-fig-row").forEach(function (el) { hideEl(el); });
    var stage = document.querySelector(".stage");
    var figs = document.getElementById("lessonFigs");
    if (stage && figs && figs.parentNode !== stage) stage.insertBefore(figs, stage.firstChild);
    if (stage) {
      stage.style.setProperty("overflow", "hidden", "important");
      stage.style.setProperty("display", "flex", "important");
      stage.style.setProperty("flex-direction", "column", "important");
      stage.style.setProperty("align-items", "center", "important");
      stage.style.setProperty("justify-content", "flex-start", "important");
      stage.scrollTop = 0;
    }
    var work = document.getElementById("work");
    if (work) work.scrollTop = 0;
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    var fig = document.querySelector("#lessonFigs figure");
    if (fig) {
      fig.style.setProperty("background", "#fff", "important");
      fig.style.setProperty("margin", "0 auto", "important");
    }
    var room = Math.max(220, (stage ? stage.clientHeight : window.innerHeight) - 72);
    var img = document.getElementById("lessonFigMain");
    if (img) {
      img.style.setProperty("display", "block", "important");
      img.style.setProperty("width", "auto", "important");
      img.style.setProperty("max-width", "100%", "important");
      img.style.setProperty("height", "auto", "important");
      img.style.setProperty("max-height", room + "px", "important");
      img.style.setProperty("object-fit", "contain", "important");
      img.style.setProperty("background", "#fff", "important");
      img.style.setProperty("margin", "0 auto", "important");
    }
  }

  function pack(lines) {
    var text = (lines || []).join(" ").replace(/\s+/g, " ").trim();
    text = text.replace(/\bpage\s+\d+\s+of\s+\d+\b/ig, " ");
    text = text.replace(/\bconfidential(?:\s+and\s+proprietary)?\b/ig, " ");
    text = text.replace(/This page is on the screen\. Read the sheet\. There is little separate body text on this page\./g, "");
    text = text.replace(/\s+/g, " ").trim();
    if (text.length < 12) return ["Figure page. The sheet is on the screen."];
    var bits = text.split(/(?<=[.;:])\s+/);
    var out = [];
    var buf = "";
    bits.forEach(function (bit) {
      bit = (bit || "").trim();
      if (!bit) return;
      if (buf && buf.length + 1 + bit.length > 320) {
        out.push(buf);
        buf = bit;
      } else {
        buf = buf ? buf + " " + bit : bit;
      }
    });
    if (buf) out.push(buf);
    return out.length ? out : [text];
  }

  function hook() {
    if (typeof speakLesson !== "function" || speakLesson.__packed) return;
    var orig = speakLesson;
    function wrapped(lesson) {
      var mod = (typeof currentModule === "function") ? currentModule() : null;
      var protocol = mod && /protocol/i.test((mod.id || "") + " " + (mod.title || ""));
      if (!(protocol && lesson && lesson.audio && lesson.audio.length)) return orig(lesson);
      var copy = {};
      for (var k in lesson) copy[k] = lesson[k];
      copy.audio = pack(lesson.audio);
      window.__protoLines = copy.audio;
      return orig(copy);
    }
    wrapped.__packed = true;
    window.speakLesson = wrapped;
  }

  function step(dir) {
    var mod = (typeof currentModule === "function") ? currentModule() : null;
    if (!mod || !mod.lessons || typeof state === "undefined") return;
    var n = (state.lesson || 0) + dir;
    if (n < 0 || n >= mod.lessons.length) return;
    var keep = !!(state.speaking || state.playAll);
    if (typeof stopSpeech === "function") stopSpeech();
    state.lesson = n;
    if (typeof render === "function") render();
    var stage = document.querySelector(".stage");
    if (stage) stage.scrollTop = 0;
    window.scrollTo(0, 0);
    if (keep) {
      var nx = currentModule() && currentModule().lessons[state.lesson];
      if (nx && typeof speakLesson === "function") speakLesson(nx);
    }
    paintNav();
  }

  function togglePlay(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    var mod = (typeof currentModule === "function") ? currentModule() : null;
    var lesson = mod && mod.lessons && mod.lessons[state.lesson || 0];
    if (!lesson) return;
    if (state.speaking && typeof stopSpeech === "function") stopSpeech();
    else if (typeof speakLesson === "function") speakLesson(lesson);
    paintNav();
  }

  function ensureNav() {
    var anchor = document.getElementById("tabsDown") || document.getElementById("fsUp");
    if (anchor && !document.getElementById("protoBack")) {
      var back = document.createElement("button");
      back.id = "protoBack";
      back.type = "button";
      back.textContent = "←";
      back.title = "Previous page";
      back.setAttribute("aria-label", "Previous page");
      var count = document.createElement("span");
      count.id = "protoHeadCount";
      var play = document.createElement("button");
      play.id = "protoHeadPlay";
      play.type = "button";
      play.textContent = "Play";
      play.title = "Play this page";
      play.setAttribute("aria-label", "Play this page");
      var fwd = document.createElement("button");
      fwd.id = "protoFwd";
      fwd.type = "button";
      fwd.textContent = "→";
      fwd.title = "Next page";
      fwd.setAttribute("aria-label", "Next page");
      [back, fwd].forEach(function (b) {
        b.style.cssText = "min-width:40px;height:34px;border-radius:999px;border:1px solid #8aa4c8;background:#fff;color:#123;font-size:20px;font-weight:700;line-height:1;";
      });
      play.style.cssText = "min-width:72px;height:34px;border-radius:999px;border:0;background:#1d4ed8;color:#fff;font-size:15px;font-weight:700;";
      count.style.cssText = "font-size:13px;font-weight:700;color:#123;min-width:64px;text-align:center;";
      anchor.parentNode.insertBefore(back, anchor.nextSibling);
      anchor.parentNode.insertBefore(play, back.nextSibling);
      anchor.parentNode.insertBefore(count, play.nextSibling);
      anchor.parentNode.insertBefore(fwd, count.nextSibling);
      back.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(-1); });
      play.addEventListener("click", togglePlay);
      fwd.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(1); });
    }
    if (!document.getElementById("protoNav") || !document.getElementById("protoPlay")) {
      var old = document.getElementById("protoNav");
      if (old) old.remove();
      var bar = document.createElement("div");
      bar.id = "protoNav";
      bar.style.cssText = "position:fixed;z-index:5000;left:50%;transform:translateX(-50%);bottom:8px;display:none;gap:8px;align-items:center;background:#fff;border:1px solid #8aa4c8;border-radius:999px;padding:6px 8px;box-shadow:0 6px 18px rgba(0,0,0,.2)";
      bar.innerHTML = '<button type="button" id="protoPrev" aria-label="Previous page" style="min-width:72px;height:40px;border-radius:999px;border:1px solid #8aa4c8;background:#eef4ff;font-weight:700;">← Back</button><button type="button" id="protoPlay" aria-label="Play this page" style="min-width:84px;height:40px;border-radius:999px;border:0;background:#1d4ed8;color:#fff;font-weight:700;">Play</button><button type="button" id="protoNext" aria-label="Next page" style="min-width:88px;height:40px;border-radius:999px;border:1px solid #8aa4c8;background:#eef4ff;font-weight:700;">Forward →</button><span id="protoCount" style="font-weight:700;min-width:64px;text-align:center;"></span>';
      document.body.appendChild(bar);
      document.getElementById("protoPrev").addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(-1); });
      document.getElementById("protoPlay").addEventListener("click", togglePlay);
      document.getElementById("protoNext").addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(1); });
    }
  }

  function paintNav() {
    ensureNav();
    var yes = reading();
    var bar = document.getElementById("protoNav");
    var back = document.getElementById("protoBack");
    var fwd = document.getElementById("protoFwd");
    var head = document.getElementById("protoHeadCount");
    var count = document.getElementById("protoCount");
    if (!yes) {
      if (bar) bar.style.display = "none";
      if (back) back.style.display = "none";
      if (fwd) fwd.style.display = "none";
      if (head) head.style.display = "none";
      var headPlay = document.getElementById("protoHeadPlay");
      if (headPlay) headPlay.style.display = "none";
      var say = document.getElementById("protoSay");
      if (say) say.style.display = "none";
      return;
    }
    var mod = currentModule();
    var total = mod && mod.lessons ? mod.lessons.length : 0;
    var n = (state.lesson || 0) + 1;
    var label = n + " / " + total;
    if (bar) bar.style.display = "flex";
    if (back) { back.style.display = "inline-flex"; back.disabled = n <= 1; }
    if (fwd) { fwd.style.display = "inline-flex"; fwd.disabled = n >= total; }
    if (head) { head.style.display = "inline-block"; head.textContent = label; }
    var talking = !!(state && state.speaking);
    var headPlay = document.getElementById("protoHeadPlay");
    if (headPlay) { headPlay.style.display = "inline-flex"; headPlay.textContent = talking ? "Pause" : "Play"; }
    var play = document.getElementById("protoPlay");
    if (play) play.textContent = talking ? "Pause" : "Play";
    if (count) count.textContent = label;
    var prev = document.getElementById("protoPrev");
    var next = document.getElementById("protoNext");
    if (prev) prev.disabled = n <= 1;
    if (next) next.disabled = n >= total;
    var say = document.getElementById("protoSay");
    if (!say) {
      say = document.createElement("div");
      say.id = "protoSay";
      say.style.cssText = "position:fixed;z-index:5000;left:10px;right:10px;top:76px;display:none;background:#111;color:#ffe14a;font-weight:700;font-size:16px;line-height:1.35;padding:8px 12px;border-radius:10px;max-height:3.2em;overflow:hidden;";
      document.body.appendChild(say);
    }
    var lines = window.__protoLines;
    var line = (state && state.speaking && lines && lines[state.para]) ? String(lines[state.para]) : "";
    var header = document.querySelector("header");
    if (header) say.style.top = (header.getBoundingClientRect().bottom + 4) + "px";
    say.style.display = line ? "block" : "none";
    say.textContent = line;
  }

  fit();
  hook();
  paintNav();
  document.addEventListener("click", function () { setTimeout(fit, 40); setTimeout(paintNav, 80); }, true);
  setInterval(function () { fit(); hook(); paintNav(); }, 800);
})();
