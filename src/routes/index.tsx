import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const CSCE = "/studio/CSCE-Masters-Studio.html";
const NUC = "/studio/NucMed-Board-Studio.html";

function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-center bg-bg px-6 py-10 text-fg">
      <p className="font-mono text-xs tracking-widest text-amber">TEACHING STUDIOS</p>
      <h1 className="mt-2 max-w-xl text-3xl font-semibold">CSCE Master's Studio</h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        A spoken map of the CSCE graduate catalog, an open shelf, and a 36-credit
        study log. Not a diploma and not advising. The nuclear medicine studio is unchanged.
      </p>
      <div className="mt-8 flex max-w-md flex-col gap-3">
        <a
          href={CSCE}
          className="rounded-xl bg-cyan px-5 py-4 text-center font-semibold text-bg"
        >
          Open CSCE Master's Studio
        </a>
        <a
          href={NUC}
          className="rounded-xl border border-line px-5 py-4 text-center font-semibold text-fg"
        >
          Open NucMed Board Studio
        </a>
      </div>
    </main>
  );
}
