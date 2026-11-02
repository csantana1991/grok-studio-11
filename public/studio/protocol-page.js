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
    if (stage && figs) stage.insertBefore(figs, stage.firstChild);
    if (stage) stage.scrollTop = 0;
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
  setInterval(fit, 300);
  document.addEventListener("click", function () { setTimeout(fit, 30); setTimeout(fit, 300); }, true);
  fit();
})();
