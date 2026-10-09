import { useEffect, useState } from "react";
import { listCatalog, type CatalogPage, type StudySummary } from "@/lib/nucleus-api";

type Props = {
  learnerId: string;
  onOpen: (id: number) => void;
  onOpenWidget?: (view: "studio" | "radreview") => void;
};

const MODS = [
  "ALL",
  "XR",
  "CT",
  "US",
  "MRI",
  "BREAST_FLUORO",
  "NM_GENERAL",
  "PET",
  "CARDIAC_NM",
  "THERAPY",
] as const;

export function Explorer({ learnerId, onOpen, onOpenWidget }: Props) {
  const [track, setTrack] = useState<"ALL" | "DR" | "NM">("ALL");
  const [modality, setModality] = useState("ALL");
  const [caseType, setCaseType] = useState<
    "all" | "source-label" | "metadata-grounded" | "authored-simulation" | "source-backed"
  >("all");
  const [q, setQ] = useState("");
  const [qDeb, setQDeb] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState<CatalogPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setQDeb(q.slice(0, 80)), 180);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    setPage(1);
  }, [track, modality, caseType, qDeb]);

  useEffect(() => {
    let live = true;
    setLoading(true);
    setError(null);
    listCatalog({
      data: { page, limit: 24, track, modality, caseType, q: qDeb, learnerId },
    })
      .then((res) => {
        if (!live) return;
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        if (!live) return;
        setError("Catalog fetch failed. Records may still be loading.");
        setLoading(false);
      });
    return () => {
      live = false;
    };
  }, [page, track, modality, caseType, qDeb, learnerId]);

  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">Residency study explorer</p>
        <h1 className="mt-1 text-3xl font-semibold text-fg">33,000 board cases</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          One row is one interpreted examination or therapy encounter, not a DICOM slice.{" "}
          <strong className="font-medium text-fg">Source-label</strong> rows are curriculum-target teaching labels — not
          TCIA patient diagnoses and not faculty-reviewed.{" "}
          <strong className="font-medium text-fg">Metadata-grounded</strong> rows teach search, technique, artifacts, or
          safety without a pathology claim. <strong className="font-medium text-fg">Authored simulations</strong> are the
          35 therapy/safety encounters. This is an educational scaffold, not patient care, and it does not guarantee a
          board pass.
        </p>
      </div>

      {onOpenWidget ? (
        <div className="grid gap-3 md:grid-cols-2">
          <button
            type="button"
            onClick={() => onOpenWidget("studio")}
            className="rounded-2xl border border-cyan bg-elevated p-5 text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Widget</p>
            <p className="mt-1 text-lg font-semibold text-fg">Board Studio course</p>
            <p className="mt-2 text-sm text-muted">
              Audiobook modules P0–31, atlas, wiki, player, quizzes. Opens inside this preview.
            </p>
          </button>
          <button
            type="button"
            onClick={() => onOpenWidget("radreview")}
            className="rounded-2xl border border-amber bg-elevated p-5 text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-amber">Widget</p>
            <p className="mt-1 text-lg font-semibold text-fg">RAD REVIEW</p>
            <p className="mt-2 text-sm text-muted">
              33,000-row worklist with mounted station plates. Opens inside this preview.
            </p>
          </button>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {(["ALL", "DR", "NM"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTrack(t)}
            className={`rounded-full border px-3 py-2 text-xs ${track === t ? "border-cyan bg-cyan/10 text-cyan" : "border-line text-muted"}`}
          >
            {t === "ALL" ? "All tracks" : t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {MODS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setModality(m)}
            className={`rounded-full border px-3 py-2 text-xs ${modality === m ? "border-cyan bg-cyan/10 text-cyan" : "border-line text-muted"}`}
          >
            {m === "ALL" ? "All modalities" : m}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["all", "All 33,000"],
            ["source-label", "Source-label / curriculum"],
            ["metadata-grounded", "Interpretation learning"],
            ["source-backed", "Source-backed (7,393 target)"],
            ["authored-simulation", "Therapy simulations"],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setCaseType(k)}
            className={`rounded-full border px-3 py-2 text-xs ${caseType === k ? "border-amber bg-amber/10 text-amber" : "border-line text-muted"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        maxLength={80}
        placeholder="Search body region, description, or study key"
        className="w-full max-w-xl rounded-xl border border-line bg-elevated px-3 py-2 text-sm text-fg"
        suppressHydrationWarning
      />

      {data ? (
        <p className="font-mono text-xs text-muted">
          {data.total.toLocaleString()} matching studies · mastered {data.mastered} · review {data.review} · page {data.page} / {data.pages}
        </p>
      ) : null}

      {loading ? <p className="text-muted">Loading catalog…</p> : null}
      {error ? (
        <div className="rounded-xl border border-rose/40 p-3 text-sm text-rose">
          {error}{" "}
          <button type="button" className="underline" onClick={() => setPage((p) => p)}>
            Retry
          </button>
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {(data?.studies ?? []).map((s) => (
          <StudyCard key={s.id} study={s} onOpen={onOpen} />
        ))}
      </div>

      {data && data.pages > 1 ? (
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-line px-3 py-2 text-sm disabled:opacity-40"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-lg border border-line px-3 py-2 text-sm disabled:opacity-40"
            disabled={page >= data.pages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

function StudyCard({ study, onOpen }: { study: StudySummary; onOpen: (id: number) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(study.id)}
      className="rounded-2xl border border-line bg-elevated p-4 text-left transition hover:border-cyan/40"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {study.track} · {study.modalityBucket} · {study.dicomModality}
      </p>
      <p className="mt-1 font-mono text-sm text-cyan">{study.studyKey}</p>
      <p className="mt-1 text-sm text-fg">{study.bodyRegion}</p>
      <p className="mt-1 line-clamp-2 text-xs text-muted">{study.studyDescription}</p>
      <p className="mt-3 font-mono text-[10px] text-amber">
        {study.caseBasis} · {study.imageCount} images · one study
      </p>
    </button>
  );
}
