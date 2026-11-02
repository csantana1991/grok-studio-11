(function () {
  /* Chrome bug: speechSynthesis.speak() silently no-ops after stopSpeech() or
     rapid page changes. Wake the engine, delay, and retry. */
  function wake() {
    try {
      var v = speechSynthesis.getVoices();
      if (!v || !v.length) {
        speechSynthesis.addEventListener("voiceschanged", function () {
          speechSynthesis.getVoices();
        }, { once: true });
      }
    } catch (e) {}
  }
  wake();

  function safeSpeak(utterance) {
    try {
      speechSynthesis.cancel();
    } catch (e) {}
    setTimeout(function () {
      try {
        speechSynthesis.speak(utterance);
        if (speechSynthesis.paused) speechSynthesis.resume();
      } catch (e) {
        setTimeout(function () {
          try { speechSynthesis.speak(utterance); } catch (err) {}
        }, 250);
      }
    }, 120);
  }

  if (typeof speakLesson === "function" && !speakLesson.__audioFix) {
    var orig = speakLesson;
    function wrapped(lesson) {
      wake();
      return orig(lesson);
    }
    wrapped.__audioFix = true;
    wrapped.__packed = speakLesson.__packed;
    window.speakLesson = wrapped;
  }

  if (typeof window.__speakRaw === "function" && !window.__speakRaw.__audioFix) {
    var raw = window.__speakRaw;
    window.__speakRaw = function (u) { safeSpeak(u); };
    window.__speakRaw.__audioFix = true;
  }

  /* Play-all button: reads every page of the current protocol in order */
  function ensurePlayAll() {
    if (document.getElementById("protoPlayAll")) return;
    var anchor = document.getElementById("tabsDown") || document.getElementById("fsUp");
    if (!anchor || !anchor.parentNode) return;
    var btn = document.createElement("button");
    btn.id = "protoPlayAll";
    btn.type = "button";
    btn.textContent = "▶ Play all";
    btn.title = "Read every page of this protocol aloud";
    anchor.parentNode.insertBefore(btn, anchor.nextSibling);
    btn.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var mod = (typeof currentModule === "function") ? currentModule() : null;
      if (!mod || !mod.lessons) return;
      if (btn.classList.contains("is-on")) {
        btn.classList.remove("is-on");
        btn.textContent = "▶ Play all";
        if (typeof stopSpeech === "function") stopSpeech();
        if (typeof state !== "undefined") state.playAll = false;
        return;
      }
      btn.classList.add("is-on");
      btn.textContent = "■ Stop";
      if (typeof state !== "undefined") state.playAll = true;
      var nx = mod.lessons[state.lesson || 0];
      if (nx && typeof speakLesson === "function") speakLesson(nx);
    });
  }
  ensurePlayAll();
  setInterval(ensurePlayAll, 1000);

  /* Protocol layout: entire page visible, nothing overlapping, no internal scroll */
  function ensureLayout() {
    if (document.getElementById("protoLayoutFix")) return;
    var st = document.createElement("style");
    st.id = "protoLayoutFix";
    st.textContent = "
      body.protocol-read .stage{overflow:hidden !important}
      body.protocol-read .script{overflow:auto !important;max-height:calc(100dvh - 96px) !important}
      body.protocol-read .script img,#lessonFigMain{max-height:calc(100dvh - 120px) !important;width:auto !important;max-width:100% !important}
      body.protocol-read #playerDock{position:fixed !important;bottom:0 !important;left:0 !important;right:0 !important;z-index:40 !important}
      body.protocol-read #modStrip{z-index:41 !important}
      #protoPlayAll{background:#0b5cff;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-weight:700;cursor:pointer;margin-left:8px}
      #protoPlayAll.is-on{background:#b00020}
    ";
    document.head.appendChild(st);
  }
  ensureLayout();
  setInterval(ensureLayout, 2000);
})();