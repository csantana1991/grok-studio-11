(function () {
  function fit() {
    var mod = null;
    try { mod = (typeof currentModule === "function") ? currentModule() : null; } catch (e) { return; }
    var yes = !!(mod && /protocol/i.test((mod.id || "") + " " + (mod.title || "")) && window.state && state.view === "module");
    document.body.classList.toggle("protocol-read", yes);
    if (!yes) return;
    document.body.classList.remove("wiki-top", "clip-on");
    var wiki = document.getElementById("wikiTop");
    if (wiki) wiki.classList.remove("on");
    var phrase = document.getElementById("phraseDef");
    if (phrase) phrase.style.setProperty("display", "none", "important");
    var vid = document.querySelector(".vid-panel");
    if (vid) vid.style.setProperty("display", "none", "important");
    var stage = document.querySelector(".stage");
    var figs = document.getElementById("lessonFigs");
    if (stage && figs && figs.previousElementSibling) stage.insertBefore(figs, stage.firstChild);
    if (stage) stage.scrollTop = 0;
    var img = document.getElementById("lessonFigMain");
    if (img) {
      img.style.setProperty("display", "block", "important");
      img.style.setProperty("width", "100%", "important");
      img.style.setProperty("height", "auto", "important");
      img.style.setProperty("max-height", "none", "important");
    }
  }
  setInterval(fit, 400);
  document.addEventListener("click", function () { setTimeout(fit, 40); }, true);
})();
