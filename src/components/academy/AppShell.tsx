import { useEffect, useState } from "react";
import { getCatalogStats } from "@/lib/nucleus-api";
import { CaseViewer } from "./CaseViewer";
import { Library, Mock, Physics, Plan, Risc, Rounds, StudioFrame, Track } from "./OtherViews";

export type AcademyView =
  | "explorer"
  | "rounds"
  | "plan"
  | "library"
  | "track"
  | "physics"
  | "risc"
  | "mock"
  | "studio"
  | "radreview";

const NAV: { id: AcademyView; label: string; hint: string }[] = [
  { id: "studio", label: "Board Studio", hint: "Main audiobook app" },
  { id: "radreview", label: "RAD REVIEW", hint: "Split worklist widget" },
  { id: "explorer", label: "Nucleus Board Academy", hint: "33k widget" },
  { id: "rounds", label: "Today’s Rounds", hint: "Six exemplars" },
  { id: "plan", label: "30-Day Plan", hint: "88 hours" },
  { id: "library", label: "Case Library", hint: "31 showcases" },
  { id: "track", label: "33K Track", hint: "Integrity" },
  { id: "physics", label: "Physics Lab", hint: "Decay" },
  { id: "risc", label: "RISC & Safety", hint: "Simulations" },
  { id: "mock", label: "Mock Boards", hint: "Course format" },
];

const TABS: { id: AcademyView; label: string }[] = [
  { id: "studio", label: "Board Studio" },
  { id: "radreview", label: "RAD REVIEW" },
  { id: "explorer", label: "Academy widget" },
];

function learnerId() {
  if (typeof window === "undefined") return "pending";
  const k = "nba-learner";
  let id = localStorage.getItem(k);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(k, id);
  }
  return id;
}

export function AppShell({ initialView }: { initialView: AcademyView }) {
  const [view, setView] = useState<AcademyView>(initialView);
  const [openId, setOpenId] = useState<number | null>(null);
  const [days, setDays] = useState(0);
  const [lid, setLid] = useState("pending");
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getCatalogStats>> | null>(null);
  const [mastered, setMastered] = useState(0);
  const [review, setReview] = useState(0);
  const widget = view === "studio" || view === "radreview" || view === "explorer";

  useEffect(() => {
    setLid(learnerId());
    getCatalogStats().then(setStats).catch(() => setStats(null));
    try {
      setDays((JSON.parse(localStorage.getItem("nba-days") || "[]") as number[]).length);
    } catch {
      setDays(0);
    }
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-none items-center gap-4 px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">NucMed Board Studio</p>
            <p className="truncate text-sm text-muted">Main app · RAD REVIEW and Nucleus Board Academy are split widgets</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setView(t.id)}
                className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold ${
                  view === t.id ? "bg-cyan text-bg" : "border border-line text-fg hover:border-cyan"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="hidden text-right font-mono text-[11px] text-muted lg:block">
            <p>{stats ? `${stats.total.toLocaleString()} encounters` : "Indexing catalog…"}</p>
            <p>
              Day {days}/30 · mastered {mastered} · review {review}
            </p>
          </div>
        </div>
        <div className="h-1 bg-elevated">
          <div className="h-full bg-cyan" style={{ width: `${Math.min(100, (days / 30) * 100)}%` }} />
        </div>
      </header>

      <div className={`mx-auto flex ${widget ? "max-w-none" : "max-w-[1560px]"}`}>
        <aside
          className={`sticky top-[73px] hidden h-[calc(100dvh-73px)] w-[260px] shrink-0 overflow-auto border-r border-line p-3 md:block ${widget ? "!hidden" : ""}`}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setView(n.id)}
                className={`rounded-xl px-3 py-2 text-left text-sm ${view === n.id ? "bg-elevated text-cyan" : "text-muted hover:text-fg"}`}
              >
                <span className="block font-medium">{n.label}</span>
                <span className="block font-mono text-[10px] uppercase tracking-widest">{n.hint}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div className={`flex gap-2 overflow-x-auto border-b border-line px-3 py-2 md:hidden ${widget ? "hidden" : ""}`}>
            {NAV.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setView(n.id)}
                className={`shrink-0 rounded-full border px-3 py-2 text-xs ${view === n.id ? "border-cyan text-cyan" : "border-line text-muted"}`}
              >
                {n.label}
              </button>
            ))}
          </div>
          <main className={widget ? "p-0" : "px-4 py-6"}>
            {view === "explorer" ? <StudioFrame mode="academy" onBack={() => setView("studio")} /> : null}
            {view === "rounds" ? <Rounds onOpen={setOpenId} /> : null}
            {view === "plan" ? <Plan onOpen={setOpenId} /> : null}
            {view === "library" ? <Library onOpen={setOpenId} /> : null}
            {view === "track" ? <Track stats={stats} /> : null}
            {view === "physics" ? <Physics /> : null}
            {view === "risc" ? <Risc /> : null}
            {view === "mock" ? <Mock onOpen={setOpenId} /> : null}
            {view === "studio" ? <StudioFrame mode="home" onBack={() => setView("studio")} /> : null}
            {view === "radreview" ? <StudioFrame mode="radreview" onBack={() => setView("studio")} /> : null}
          </main>
        </div>
      </div>

      {openId !== null && lid !== "pending" ? (
        <CaseViewer
          studyId={openId}
          learnerId={lid}
          onClose={() => setOpenId(null)}
          onProgress={(m, r) => {
            setMastered(m);
            setReview(r);
          }}
        />
      ) : null}
    </div>
  );
}
