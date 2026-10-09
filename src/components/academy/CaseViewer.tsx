import { useEffect, useMemo, useRef, useState } from "react";
import { getStudy, saveProgress } from "@/lib/nucleus-api";
import { teachingGuide } from "@/lib/teaching";

type Props = {
  studyId: number;
  learnerId: string;
  onClose: () => void;
  onProgress?: (m: number, r: number) => void;
};

function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
function stopSpeak() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

function frameSrc(preview: string | null, index: number): string | null {
  if (!preview) return null;
  return preview.replace(/-(\d+)(\.\w+)$/, `-${index}$2`);
}

export function CaseViewer({ studyId, learnerId, onClose, onProgress }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [payload, setPayload] = useState<Awaited<ReturnType<typeof getStudy>> | null>(null);
  const [mode, setMode] = useState<"board" | "anatomy">("board");
  const [slice, setSlice] = useState(1);
  const [choice, setChoice] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [committed, setCommitted] = useState(false);
  const [read, setRead] = useState("");
  const [showAnn, setShowAnn] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let live = true;
    setLoading(true);
    setError(null);
    setCommitted(false);
    setChoice(null);
    setRead("");
    setMode("board");
    setShowAnn(false);
    getStudy({ data: { id: studyId } })
      .then((p) => {
        if (!live) return;
        setPayload(p);
        const mid = Math.max(1, Math.floor((p.study?.imageCount ?? 1) / 2));
        setSlice(mid);
        setLoading(false);
        if (p.error) setError(p.error);
      })
      .catch(() => {
        if (!live) return;
        setError("Could not load this study. Retry.");
        setLoading(false);
      });
    return () => {
      live = false;
      stopSpeak();
    };
  }, [studyId]);

  const study = payload?.study;
  const q = payload?.question;
  const count = study?.imageCount ?? 1;
  const src = frameSrc(study?.previewUrl ?? null, Math.min(count, Math.max(1, slice)));

  const clamp = (n: number) => Math.max(1, Math.min(count, n));
  const guide = useMemo(
    () => (study ? teachingGuide(study.modalityBucket, study.bodyRegion) : null),
    [study],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setSlice((s) => clamp(s + 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") setSlice((s) => clamp(s - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setSlice((s) => clamp(s + (e.deltaY > 0 ? 1 : -1)));
  };

  const commit = async () => {
    if (!choice || !q || !study) return;
    const ok = choice === q.correctOption;
    setCommitted(true);
    const res = await saveProgress({
      data: { learnerId, studyId: study.id, selectedOption: choice, isCorrect: ok },
    });
    onProgress?.(res.mastered, res.review);
  };

  const basisBadge =
    study?.caseBasis === "authored-simulation"
      ? "Authored simulation — not a patient study"
      : study?.caseBasis === "source-label"
        ? "Curriculum target — not a source-dataset diagnosis · not faculty-reviewed"
        : "Metadata-grounded — no pathology claimed";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      className="fixed inset-0 z-50 flex items-stretch bg-bg/90 p-0 md:p-4"
    >
      <div className="mx-auto flex h-full w-full max-w-[1560px] flex-col overflow-hidden rounded-none bg-surface md:rounded-2xl md:border md:border-line">
        <header className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {study?.collectionName} · {study?.dicomModality}
            </p>
            <h2 id="case-title" className="truncate text-lg font-semibold text-fg">
              {study?.studyKey ?? "Loading"} · {study?.studyDescription}
            </h2>
          </div>
          <div className="flex rounded-full border border-line p-1">
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-xs font-semibold ${mode === "board" ? "bg-cyan text-bg" : "text-muted"}`}
              onClick={() => setMode("board")}
            >
              Board
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-xs font-semibold ${mode === "anatomy" ? "bg-cyan text-bg" : "text-muted"}`}
              onClick={() => setMode("anatomy")}
            >
              Anatomy
            </button>
          </div>
          <button type="button" className="rounded-lg border border-line px-3 py-2 text-sm" onClick={onClose}>
            Close
          </button>
        </header>

        {loading ? (
          <p className="p-8 text-muted">Loading study…</p>
        ) : error ? (
          <p className="p-8 text-rose">{error}</p>
        ) : study ? (
          <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
            <div className="flex min-h-0 flex-col bg-black">
              <div
                ref={canvasRef}
                className="relative min-h-[280px] flex-1"
                onWheel={onWheel}
              >
                {src ? (
                  <img
                    src={src}
                    alt={`Educational frame ${slice} of ${count}. Answer hidden.`}
                    className="absolute inset-0 h-full w-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
                    <span>Image not mounted</span>
                    <code className="text-rose">expected {study.studyKey}.stack[{slice}]</code>
                    <span className="normal-case tracking-normal text-muted">
                      No substitute anatomy is drawn. This is a learning encounter, not a patient scan.
                    </span>
                  </div>
                )}
                {mode === "anatomy" && showAnn && payload?.annotations
                  ? payload.annotations.map((a) => (
                      <div
                        key={a.id}
                        className="pointer-events-none absolute border border-amber/80"
                        style={{
                          left: `${(a.coordinates.x ?? 0) * 100}%`,
                          top: `${(a.coordinates.y ?? 0) * 100}%`,
                          width: `${(a.coordinates.w ?? 0.2) * 100}%`,
                          height: `${(a.coordinates.h ?? 0.2) * 100}%`,
                        }}
                      >
                        <span className="bg-amber px-1 font-mono text-[10px] text-bg">{a.label}</span>
                      </div>
                    ))
                  : null}
                <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 font-mono text-xs text-fg">
                  Image {slice} / {count} · {Math.round((slice / count) * 100)}%
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-line bg-elevated p-3">
                <button type="button" className="rounded border border-line px-3 py-2" onClick={() => setSlice((s) => clamp(s - 1))}>
                  Prev
                </button>
                <label className="flex min-w-0 flex-1 items-center gap-2 text-xs text-muted">
                  <span className="sr-only">Slice</span>
                  <input
                    aria-label={`Image ${slice} of ${count}`}
                    type="range"
                    min={1}
                    max={count}
                    value={slice}
                    onChange={(e) => setSlice(Number(e.target.value))}
                    className="w-full"
                  />
                </label>
                <button type="button" className="rounded border border-line px-3 py-2" onClick={() => setSlice((s) => clamp(s + 1))}>
                  Next
                </button>
              </div>
            </div>

            <aside className="min-h-0 overflow-auto border-t border-line p-4 lg:border-t-0 lg:border-l">
              <p className="mb-3 rounded-lg border border-amber/40 bg-amber/10 px-3 py-2 text-xs text-amber">{basisBadge}</p>
              <dl className="mb-4 grid grid-cols-2 gap-2 font-mono text-[11px] text-muted">
                <dt>Track</dt>
                <dd className="text-fg">{study.track}</dd>
                <dt>Modality</dt>
                <dd className="text-fg">{study.modalityBucket}</dd>
                <dt>Region</dt>
                <dd className="text-fg">{study.bodyRegion}</dd>
                <dt>Images</dt>
                <dd className="text-fg">{study.imageCount} (one study)</dd>
                <dt>Case basis</dt>
                <dd className="text-fg">{study.caseBasis}</dd>
                <dt>QA</dt>
                <dd className="text-fg">{study.qaStatus} · not faculty-reviewed</dd>
              </dl>
              <p className="mb-3 text-xs text-muted">
                Source: {study.sourceName}. License: {study.licenseName}. {study.attribution}
              </p>
              <p className="mb-4 text-[11px] text-muted">
                Educational use only. Not for patient care. Completing this catalog does not guarantee a board pass.
              </p>

              {mode === "board" && q ? (
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Read first — before the choices</p>
                  <p className="text-sm text-fg">{q.readPrompt}</p>
                  <div className="flex flex-wrap gap-1">
                    {q.learningObjectives.map((o) => (
                      <span key={o} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">
                        {o}
                      </span>
                    ))}
                  </div>
                  <textarea
                    className="h-24 w-full rounded-xl border border-line bg-elevated p-3 text-sm text-fg"
                    placeholder="Modality / technique → observations → differential → next step"
                    value={read}
                    disabled={committed}
                    onChange={(e) => setRead(e.target.value)}
                  />
                  <fieldset className="space-y-2" disabled={committed}>
                    <legend className="sr-only">Choices</legend>
                    {(["A", "B", "C", "D"] as const).map((k) => {
                      const opt = k === "A" ? q.optionA : k === "B" ? q.optionB : k === "C" ? q.optionC : q.optionD;
                      let cls = "w-full rounded-xl border border-line px-3 py-2 text-left text-sm";
                      if (committed && k === q.correctOption) cls += " border-emerald text-emerald";
                      else if (committed && k === choice && k !== q.correctOption) cls += " border-rose text-rose";
                      else if (choice === k) cls += " border-cyan";
                      return (
                        <button key={k} type="button" className={cls} onClick={() => setChoice(k)}>
                          <span className="mr-2 font-mono text-muted">{k}.</span>
                          {opt}
                          {committed && k === q.correctOption ? <span className="ml-2 text-xs">Correct</span> : null}
                          {committed && k === choice && k !== q.correctOption ? (
                            <span className="ml-2 text-xs">Your selection</span>
                          ) : null}
                        </button>
                      );
                    })}
                  </fieldset>
                  <button
                    type="button"
                    disabled={!choice || committed}
                    onClick={() => void commit()}
                    className="w-full rounded-xl bg-cyan py-2 text-sm font-semibold text-bg disabled:opacity-40"
                  >
                    Check answer
                  </button>
                  <div className="flex gap-2">
                    <button type="button" className="text-xs text-cyan" onClick={() => speak(q.stem + ". " + q.readPrompt)}>
                      Listen to prompt
                    </button>
                    <button type="button" className="text-xs text-muted" onClick={stopSpeak}>
                      Stop
                    </button>
                  </div>
                  {committed ? (
                    <div className="space-y-3 rounded-xl border border-line p-3 text-sm">
                      <h3 className="font-semibold text-cyan">{q.answerTitle}</h3>
                      <p>{q.explanation}</p>
                      <p className="text-muted">{q.distractorAnalysis}</p>
                      <p className="text-amber">Board pearl. {q.boardPearl}</p>
                      {read ? (
                        <p className="text-xs text-muted">
                          Your preliminary read: {read}
                        </p>
                      ) : null}
                      <button type="button" className="text-xs text-cyan" onClick={() => speak(q.explanation + " " + q.boardPearl)}>
                        Listen to teaching
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {mode === "anatomy" && guide ? (
                <div className="space-y-3 text-sm">
                  <p className="rounded border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    Provenance: orientation guide · draft · not faculty-reviewed · not a detection
                  </p>
                  <h3 className="text-cyan">{guide.title}</h3>
                  <p>{guide.summary}</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    {guide.checklist.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ol>
                  <ul className="list-disc space-y-1 pl-5 text-muted">
                    {guide.callouts.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="rounded-lg border border-line px-3 py-2"
                    onClick={() => setShowAnn((v) => !v)}
                  >
                    {showAnn ? "Hide" : "Show"} annotations
                  </button>
                </div>
              ) : null}
            </aside>
          </div>
        ) : null}
      </div>
    </div>
  );
}
