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
    if (!yes) return;
    document.body.classList.remove("wiki-top", "clip-on");
    var wiki = document.getElementById("wikiTop");
    if (wiki) wiki.classList.remove("on");
    var phrase = document.getElementById("phraseDef");
    if (phrase) phrase.style.setProperty("display", "none", "important");
    var bar = document.getElementById("hjBar");
    if (bar) bar.style.setProperty("display", "none", "important");
    var film = document.getElementById("atlasFilm");
    if (film) film.style.setProperty("display", "none", "important");
    var vid = document.querySelector(".vid-panel");
    if (vid) vid.style.setProperty("display", "none", "important");
    var split = document.querySelector(".vid-split");
    if (split) split.style.setProperty("display", "none", "important");
    var stage = document.querySelector(".stage");
    var figs = document.getElementById("lessonFigs");
    if (stage && figs && figs.parentNode !== stage) stage.insertBefore(figs, stage.firstChild);
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

  fit();
  hook();
  document.addEventListener("click", function () { setTimeout(fit, 40); }, true);
  setInterval(function () { fit(); hook(); }, 800);
})();
