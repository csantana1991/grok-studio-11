(function () {
  var intervalId = null;
  var speech = window.speechSynthesis;
  var utter = null;
  var playing = false;
  var pageIndex = 0;
  var pages = [];

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
    // Hide the stubborn left nav panel while a protocol is open
    var left = document.getElementById("leftNav") || document.querySelector(".left-nav, .nav-left, #sidebar, .sidebar");
    if (left) left.style.setProperty("display", "none", "important");
    var stage = document.querySelector(".stage");
    var figs = document.getElementById("lessonFigs");
    if (stage && figs) stage.insertBefore(figs, stage.firstChild);
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

  function collectPages() {
    pages = [];
    var img = document.getElementById("lessonFigMain");
    if (img && img.src) pages.push({ label: "Page 1", text: (img.alt || "") });
    // Also gather any page list if the app exposes one
    if (typeof lessonPages !== "undefined" && Array.isArray(lessonPages)) {
      pages = lessonPages.map(function (p, i) { return { label: "Page " + (i + 1), text: p.text || p.title || "" }; });
    }
    if (!pages.length) pages = [{ label: "Page 1", text: "" });
  }

  function speakPage(i) {
    if (!speech) return;
    if (utter) { speech.cancel(); utter = null; }
    pageIndex = i;
    var p = pages[pageIndex];
    var text = (p && p.text) ? p.text : ("Page " + (pageIndex + 1));
    utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.onend = function () {
      if (pageIndex < pages.length - 1) {
        pageIndex++;
        speakPage(pageIndex);
      } else {
        playing = false;
        updateBtn();
      }
    };
    speech.speak(utter);
    playing = true;
    updateBtn();
  }

  function togglePlay() {
    if (!speech) return;
    if (playing) {
      speech.cancel();
      playing = false;
      updateBtn();
    } else {
      collectPages();
      speakPage(pageIndex);
    }
  }

  function nextPage() {
    if (pageIndex < pages.length - 1) {
      pageIndex++;
      if (playing) speakPage(pageIndex);
    }
  }

  function prevPage() {
    if (pageIndex > 0) {
      pageIndex--;
      if (playing) speakPage(pageIndex);
    }
  }

  function updateBtn() {
    var btn = document.getElementById("protocolPlayBtn");
    if (btn) btn.textContent = playing ? "Pause" : "Play";
  }

  function ensureControls() {
    if (document.getElementById("protocolPlayBtn")) return;
    var ref = document.querySelector("button");
    // Find the A+ button to anchor next to
    var buttons = document.querySelectorAll("button");
    var anchor = null;
    for (var i = 0; i < buttons.length; i++) {
      if (/^A\+$/.test((buttons[i].textContent || "").trim())) { anchor = buttons[i]; break; }
    }
    if (!anchor || !anchor.parentNode) return;
    var wrap = document.createElement("span");
    wrap.style.display = "inline-flex";
    wrap.style.gap = "6px";
    wrap.style.marginLeft = "8px";
    wrap.style.verticalAlign = "middle";

    function mk(label, fn) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.style.padding = "4px 10px";
      b.style.borderRadius = "8px";
      b.style.border = "1px solid #cfe0ff";
      b.style.background = "#eef4ff";
      b.style.cursor = "pointer";
      b.style.fontWeight = "600";
      b.addEventListener("click", fn);
      return b;
    }

    var playBtn = mk("Play", togglePlay);
    playBtn.id = "protocolPlayBtn";
    var prevBtn = mk("Prev", prevPage);
    var nextBtn = mk("Next", nextPage);
    wrap.appendChild(prevBtn);
    wrap.appendChild(playBtn);
    wrap.appendChild(nextBtn);
    anchor.parentNode.insertBefore(wrap, anchor.nextSibling);
  }

  // Run fit once on load and on clicks, but DO NOT reset scroll or loop
  fit();
  ensureControls();
  document.addEventListener("click", function () { setTimeout(fit, 30); }, true);
  setTimeout(fit, 1000);
  setTimeout(ensureControls, 1500);
})();