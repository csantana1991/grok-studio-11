(function () {
  function reading() {
    try {
      var mod = (typeof currentModule === "function") ? currentModule() : null;
      return !!(mod && /protocol/i.test((mod.id || "") + " " + (mod.title || "")) && typeof state !== "undefined" && state.view === "module");
    } catch (e) {
      return false;
    }
  }

  function fit() {
    var yes = reading();
    if (document.body) document.body.classList.toggle("protocol-read", yes);
    var wikiDef = document.getElementById("wikiDef");
    if (!yes) {
      if (wikiDef && wikiDef.dataset.protocolHidden) {
        wikiDef.style.removeProperty("display");
        delete wikiDef.dataset.protocolHidden;
      }
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
    if (wikiDef) {
      wikiDef.dataset.protocolHidden = "1";
      wikiDef.style.setProperty("display", "none", "important");
    }
    document.querySelectorAll(".wiki-panel, .def-panel, aside.wiki").forEach(function (el) {
      el.style.setProperty("display", "none", "important");
    });
    var vid = document.querySelector(".vid-panel");
    if (vid) vid.style.setProperty("display", "none", "important");
    var split = document.querySelector(".vid-split");
    if (split) split.style.setProperty("display", "none", "important");
    var stage = document.querySelector(".stage");
    var figs = document.getElementById("lessonFigs");
    if (stage && figs && figs.parentNode !== stage) stage.insertBefore(figs, stage.firstChild);
    var fig = document.querySelector("#lessonFigs figure");
    if (fig) fig.style.setProperty("background", "#fff", "important");
    var img = document.getElementById("lessonFigMain");
    if (img) {
      img.style.setProperty("display", "block", "important");
      img.style.setProperty("width", "100%", "important");
      img.style.setProperty("height", "auto", "important");
      img.style.setProperty("max-height", "none", "important");
      img.style.setProperty("object-fit", "contain", "important");
      img.style.setProperty("background", "#fff", "important");
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
      var fwd = document.createElement("button");
      fwd.id = "protoFwd";
      fwd.type = "button";
      fwd.textContent = "→";
      fwd.title = "Next page";
      fwd.setAttribute("aria-label", "Next page");
      [back, fwd].forEach(function (b) {
        b.style.cssText = "min-width:40px;height:34px;border-radius:999px;border:1px solid #8aa4c8;background:#fff;color:#123;font-size:20px;font-weight:700;line-height:1;";
      });
      count.style.cssText = "font-size:13px;font-weight:700;color:#123;min-width:64px;text-align:center;";
      anchor.parentNode.insertBefore(back, anchor.nextSibling);
      anchor.parentNode.insertBefore(count, back.nextSibling);
      anchor.parentNode.insertBefore(fwd, count.nextSibling);
      back.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(-1); });
      fwd.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(1); });
    }
    if (!document.getElementById("protoNav")) {
      var bar = document.createElement("div");
      bar.id = "protoNav";
      bar.style.cssText = "position:fixed;z-index:5000;left:50%;transform:translateX(-50%);bottom:70px;display:none;gap:10px;align-items:center;background:#fff;border:1px solid #8aa4c8;border-radius:999px;padding:6px 8px;box-shadow:0 6px 18px rgba(0,0,0,.2)";
      bar.innerHTML = '<button type="button" id="protoPrev" aria-label="Previous page" style="min-width:64px;height:40px;border-radius:999px;border:1px solid #8aa4c8;background:#eef4ff;font-weight:700;">← Back</button><span id="protoCount" style="font-weight:700;min-width:72px;text-align:center;"></span><button type="button" id="protoNext" aria-label="Next page" style="min-width:88px;height:40px;border-radius:999px;border:1px solid #8aa4c8;background:#eef4ff;font-weight:700;">Forward →</button>';
      document.body.appendChild(bar);
      document.getElementById("protoPrev").addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); step(-1); });
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
    if (count) count.textContent = label;
    var prev = document.getElementById("protoPrev");
    var next = document.getElementById("protoNext");
    if (prev) prev.disabled = n <= 1;
    if (next) next.disabled = n >= total;
  }

  fit();
  hook();
  paintNav();
  document.addEventListener("click", function () { setTimeout(fit, 40); setTimeout(paintNav, 80); }, true);
  setInterval(function () { fit(); hook(); paintNav(); }, 800);
})();
