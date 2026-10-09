import { useMemo, useState } from "react";
import { ATLAS, PLAN_DAYS, ROUNDS } from "@/lib/showcase";
import type { getCatalogStats } from "@/lib/nucleus-api";

type Stats = Awaited<ReturnType<typeof getCatalogStats>>;

export function Rounds({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Today’s rounds</h1>
      <p className="text-sm text-muted">Six image-first exemplars. Commit before teaching. Overlays stay hidden in Board mode.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {ROUNDS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => onOpen(r.id)}
            className="rounded-2xl border border-line bg-elevated p-5 text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-amber">{r.basis}</p>
            <p className="mt-1 text-lg text-fg">{r.title}</p>
            <p className="mt-2 text-sm text-muted">{r.blurb}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Plan({ onOpen }: { onOpen: (id: number) => void }) {
  const [done, setDone] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("nba-days") || "[]") as number[];
    } catch {
      return [];
    }
  });
  const toggle = (i: number) => {
    const next = done.includes(i) ? done.filter((d) => d !== i) : [...done, i];
    setDone(next);
    localStorage.setItem("nba-days", JSON.stringify(next));
  };
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">30-day plan</h1>
      <p className="max-w-3xl text-sm text-muted">
        About 88 guided hours and ~2,400 high-yield encounters. The month samples the bank; it does not require all
        33,000 studies. Four checkpoints. Device-local day ticks; case answers use durable storage.
      </p>
      <p className="font-mono text-xs text-cyan">{done.length} / 30 days marked</p>
      <ol className="space-y-2">
        {PLAN_DAYS.map((name, i) => (
          <li key={name} className="flex items-center gap-3 rounded-xl border border-line bg-elevated px-3 py-2">
            <input type="checkbox" checked={done.includes(i)} onChange={() => toggle(i)} aria-label={`Day ${i + 1}`} />
            <span className="font-mono text-xs text-muted">Day {String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm">{name}</span>
            <button type="button" className="ml-auto text-xs text-cyan" onClick={() => onOpen(1 + i * 1100)}>
              Open a case
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Library({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Case library</h1>
      <p className="text-sm text-muted">
        Six full readout cases plus 25 rapid atlas drills (31 showcase lessons). Atlas cards open a catalog case in the
        same modality family. Attribution stays on the study.
      </p>
      <h2 className="text-sm uppercase tracking-widest text-muted">Full cases</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {ROUNDS.map((r) => (
          <button key={r.id} type="button" onClick={() => onOpen(r.id)} className="rounded-2xl border border-line p-4 text-left">
            {r.title}
          </button>
        ))}
      </div>
      <h2 className="text-sm uppercase tracking-widest text-muted">Rapid atlas</h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {ATLAS.map(([title], i) => (
          <button
            key={title}
            type="button"
            onClick={() => onOpen(25000 + ((i * 97) % 8000) || 25001)}
            className="rounded-xl border border-line bg-elevated p-3 text-left text-sm"
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Track({ stats }: { stats: Stats | null }) {
  return (
    <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-semibold text-fg">33K residency track</h1>
      <p>
        A CT with 900 slices is <em>one</em> study. <code className="text-cyan">image_count</code> records the frames.
        Target allocation: 25,000 diagnostic radiology + 8,000 nuclear medicine = 33,000 encounters.
      </p>
      <p>
        Catalog now: {stats ? stats.total.toLocaleString() : "…"} rows. DR {stats?.track.dr.toLocaleString()} · NM{" "}
        {stats?.track.nm.toLocaleString()}. Case basis: {stats?.caseBasis.sourceLabel.toLocaleString()} curriculum
        source-label · {stats?.caseBasis.metadataGrounded.toLocaleString()} metadata-grounded ·{" "}
        {stats?.caseBasis.authoredSimulation} authored simulations.
      </p>
      <p>
        Elite-program departmental volume is not per-resident volume. A one-month sprint samples about 2,400 high-yield
        encounters rather than requiring all 33,000. Resident case-log literature (ACGME minima and published residency
        series) should be read as program requirements, not as this product’s census.
      </p>
      <p className="text-amber">{stats?.honesty}</p>
      <p>
        Primary sources to re-verify on their current pages: ABR Qualifying/Certifying exam materials, ABNM exam
        content, ACGME nuclear radiology/diagnostic radiology case-log guidance, NRC 10 CFR 20/35, and SNMMI procedure
        standards. Numbers here are dated September 2026 teaching targets, not an official score report.
      </p>
    </div>
  );
}

export function Physics() {
  const [a0, setA0] = useState(10);
  const [th, setTh] = useState(6);
  const [t, setT] = useState(6);
  const remain = useMemo(() => a0 * Math.pow(2, -t / th), [a0, th, t]);
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-semibold">Physics lab</h1>
      <p className="font-mono text-sm text-cyan">A(t) = A0 × 2^(−t / T½)</p>
      <label className="block text-sm">
        Initial activity (mCi)
        <input type="number" value={a0} onChange={(e) => setA0(Number(e.target.value))} className="mt-1 w-full rounded-lg border border-line bg-elevated px-3 py-2" />
      </label>
      <label className="block text-sm">
        Physical half-life (h)
        <input type="number" value={th} onChange={(e) => setTh(Number(e.target.value) || 1)} className="mt-1 w-full rounded-lg border border-line bg-elevated px-3 py-2" />
      </label>
      <label className="block text-sm">
        Elapsed time (h)
        <input type="number" value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full rounded-lg border border-line bg-elevated px-3 py-2" />
      </label>
      <p className="text-lg text-fg">
        {remain.toFixed(3)} mCi · {(remain * 37).toFixed(1)} MBq
      </p>
      <div className="flex flex-wrap gap-2 text-xs">
        {[
          ["Tc-99m", 6],
          ["F-18", 1.83],
          ["I-123", 13.2],
          ["I-131", 192.96],
        ].map(([n, h]) => (
          <button key={String(n)} type="button" className="rounded-full border border-line px-3 py-1" onClick={() => setTh(Number(h))}>
            {n} · {h} h
          </button>
        ))}
      </div>
      <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
        <li>Inverse square: double distance, quarter exposure rate (point source, far field).</li>
        <li>1/Teff = 1/Tp + 1/Tb — effective is always shorter.</li>
        <li>Counting statistics: relative noise falls as 1/√N.</li>
        <li>Resolution vs sensitivity is a collimator trade, not a slogan.</li>
        <li>PET coincidence / TOF localizes along the line of response without a mechanical collimator.</li>
      </ul>
    </div>
  );
}

export function Risc() {
  const cards = [
    ["Major spill", "Secure, survey, absorb, report per institutional procedure and license — not memory."],
    ["Pregnant worker", "Declared pregnancy limit is a regulatory topic; send the person to the RSO, do not improvise."],
    ["Wrong patient / wrong drug", "Stop, notify AU/RSO, document. Identity check is not optional."],
    ["I-131 therapy", "Written directive, pregnancy, activity, release estimate. Simulation only in this app."],
    ["Package receipt", "Wipe tests and records follow 10 CFR 20/36-style receiving rules — look up current text."],
    ["Time, distance, shielding", "ALARA levers. Plastic for positrons at the syringe; lead for 140 keV."],
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">RISC and safety</h1>
      <p className="text-sm text-muted">
        Governance order: regulations → license conditions → institutional procedures → authorized user / RSO
        instructions. Exact numbers change. Use current NRC, agreement-state, and institutional documents.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {cards.map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-line bg-elevated p-4">
            <h2 className="text-cyan">{t}</h2>
            <p className="mt-2 text-sm text-muted">{b}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Mock({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold">Mock boards</h1>
      <p className="text-sm text-muted">
        A 180-question / four-hour training format is a course simulation, not an official ABR/ABNM blueprint. Flag
        strategy: skip, mark, return. Domain meters are educational, not scores that predict a pass.
      </p>
      <button
        type="button"
        className="rounded-xl bg-cyan px-4 py-3 font-semibold text-bg"
        onClick={() => onOpen(7)}
      >
        Start a six-case diagnostic block
      </button>
    </div>
  );
}

export function StudioFrame({
  onBack,
  mode = "home",
}: {
  onBack?: () => void;
  mode?: "home" | "radreview" | "academy";
}) {
  const src =
    mode === "radreview"
      ? "/studio/NucMed-Board-Studio.html?view=radreview"
      : mode === "academy"
        ? "/studio/NucMed-Board-Studio.html?view=academy"
        : "/studio/NucMed-Board-Studio.html?view=home";
  const label = mode === "radreview" ? "RAD REVIEW widget" : "Board Studio course";
  const isTouch =
    typeof navigator !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
  if (isTouch) {
    return (
      <div className="flex min-h-[60vh] flex-col items-start justify-center gap-4 bg-white p-6 text-[#12315c]">
        <p className="text-sm font-semibold uppercase tracking-widest">iPad / iPhone</p>
        <h2 className="text-2xl font-bold">Open {label} full page</h2>
        <p className="max-w-md text-sm">
          Nested windows go blank on iPad. Use the button so Board Studio loads as its own page.
        </p>
        <a
          href={src}
          className="rounded-xl bg-[#1d4ed8] px-5 py-3 text-sm font-extrabold text-white"
        >
          Open {label}
        </a>
      </div>
    );
  }
  return (
    <div className="flex h-[calc(100dvh-73px)] flex-col bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-3 py-1.5 text-xs text-muted">
        <p>{label} — use Academy / RAD REVIEW / Board Studio in the header to switch.</p>
        <span className="flex shrink-0 items-center gap-3">
          {onBack ? (
            <button type="button" className="text-cyan" onClick={onBack}>
              Back to Academy
            </button>
          ) : null}
          <a className="text-cyan" href={src} target="_blank" rel="noreferrer">
            Open full page
          </a>
        </span>
      </div>
      <iframe title={label} src={src} className="min-h-0 w-full flex-1 border-0 bg-white" />
    </div>
  );
}
