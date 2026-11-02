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
      if (!lesson) return orig(lesson);
      var copy = {};
      for (var k in lesson) copy[k] = lesson[k];
      var lines = copy.audio;
      if (lines && lines.length) {
        copy.audio = lines.map(function (line) {
          return {
            text: line.text || line,
            start: line.start,
            end: line.end,
            _speak: function (u) { safeSpeak(u); }
          };
        });
      }
      return orig(copy);
    }
    wrapped.__audioFix = true;
    window.speakLesson = wrapped;
  }

  /* Also patch the raw speak path if it exists globally */
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
})();
