import { createFileRoute } from "@tanstack/react-router";

/**
 * Figures for a case line. Wikipedia thumbnails, served from this origin.
 * A miss is an empty list, never a 404.
 */

type Hit = {
  url: string;
  caption: string;
  relevance: number;
  pmcid: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  license: string;
};

const JUNK = /bear|aircraft|portrait|biography|painting|football|soccer|album|song\b/i;

export const Route = createFileRoute("/api/pmc/match")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const q = (url.searchParams.get("q") || "").slice(0, 300);
        if (url.searchParams.get("source") === "openi-page") {
          const modality = url.searchParams.get("modality") || "ct";
          const spec =
            modality === "mri"
              ? { q: "mri", cap: 112120 }
              : modality === "pet"
                ? { q: "pet", cap: 64440 }
                : { q: "computed tomography", cap: 112120 };
          const n = Math.min(36, Math.max(1, Number(url.searchParams.get("n") || 36) || 36));
          let m = Math.max(1, Number(url.searchParams.get("m") || 1) || 1);
          if (m > spec.cap) m = ((m - 1) % spec.cap) + 1;
          const take = Math.min(n, spec.cap - m + 1);
          try {
            const search =
              "https://openi.nlm.nih.gov/api/search?coll=pmc&query=" +
              encodeURIComponent(spec.q) +
              "&m=" +
              m +
              "&n=" +
              take;
            const res = await fetch(search, {
              signal: AbortSignal.timeout(12000),
              headers: { "User-Agent": "BoardStudio/1.0 (teaching)" },
            });
            if (!res.ok) return Response.json({ modality, total: spec.cap, m, list: [] });
            const data = (await res.json()) as {
              total?: number;
              list?: {
                title?: string;
                imgLarge?: string;
                pmcid?: string;
                image?: { caption?: string };
              }[];
            };
            const total = Math.min(spec.cap, data.total || spec.cap);
            const list = (data.list || [])
              .filter((row) => row.imgLarge)
              .map((row) => {
                const raw = row.image?.caption || row.title || spec.q;
                const caption = raw
                  .replace(/<[^>]+>/g, " ")
                  .replace(/&[a-z#0-9]+;/gi, " ")
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 220);
                return {
                  url: "https://openi.nlm.nih.gov" + row.imgLarge,
                  caption: caption || spec.q,
                  pmcid: row.pmcid || "",
                  title: (row.title || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 180),
                };
              });
            return Response.json({ modality, total, m, list });
          } catch {
            return Response.json({ modality, total: spec.cap, m, list: [] });
          }
        }
        if (url.searchParams.get("source") === "openi") {
          const words = q.split(/[^A-Za-z0-9+-]+/).filter((w) => w.length >= 3).slice(0, 6);
          if (!words.length) return Response.json({ query: q, results: [] });
          const start = Math.max(1, Number(url.searchParams.get("m") || 1) || 1);
          const take = Math.min(24, Math.max(1, Number(url.searchParams.get("n") || 12) || 12));
          const tries = [words.slice(0, 3), words.slice(0, 2), words.slice(0, 1)];
          try {
            for (const terms of tries) {
              const search =
                "https://openi.nlm.nih.gov/api/search?query=" +
                encodeURIComponent(terms.join(" ")) +
                "&n=" +
                take +
                "&m=" +
                start +
                "&it=x,c,m,p,u";
              const res = await fetch(search, { signal: AbortSignal.timeout(8000) });
              if (!res.ok) continue;
              const data = (await res.json()) as {
                list?: { title?: string; imgLarge?: string; journal?: string }[];
              };
              const results = (data.list || [])
                .filter((row) => row.imgLarge && !JUNK.test(row.title || "") && !/e-poster|poster session/i.test(row.title || ""))
                .slice(0, take)
                .map((row) => ({
                  url: "https://openi.nlm.nih.gov" + row.imgLarge,
                  caption: row.title || q,
                  relevance: 2,
                  pmcid: "",
                  title: row.title || q,
                  authors: "Open-i",
                  journal: row.journal || "Open-i",
                  year: "",
                  doi: "",
                  license: "CC BY",
                }));
              if (results.length) return Response.json({ query: q, results });
            }
            return Response.json({ query: q, results: [] });
          } catch {
            return Response.json({ query: q, results: [] });
          }
        }
        const limit = Math.min(Number(url.searchParams.get("limit") || 6) || 6, 8);
        const terms = q.split(/[^A-Za-z0-9+-]+/).filter((w) => w.length >= 3).slice(0, 8);
        if (!terms.length) return Response.json({ query: q, terms, results: [] });
        try {
          const search =
            "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" +
            encodeURIComponent(terms.join(" ") + " (PET OR SPECT OR scintigraphy OR nuclear medicine)") +
            "&gsrlimit=8&prop=pageimages|info&inprop=url&pithumbsize=800&format=json";
          const res = await fetch(search, { signal: AbortSignal.timeout(8000) });
          if (!res.ok) return Response.json({ query: q, terms, results: [] });
          const data = (await res.json()) as {
            query?: { pages?: Record<string, { title?: string; thumbnail?: { source?: string } }> };
          };
          const pages = Object.values(data.query?.pages || {});
          const results: Hit[] = [];
          for (const page of pages) {
            const title = page.title || "";
            if (!title || !page.thumbnail?.source || JUNK.test(title)) continue;
            results.push({
              url: "/api/pmc/img?title=" + encodeURIComponent(title),
              caption: title,
              relevance: 1,
              pmcid: "",
              title,
              authors: "Wikipedia",
              journal: "Wikipedia",
              year: "",
              doi: "",
              license: "CC",
            });
            if (results.length >= limit) break;
          }
          return Response.json({ query: q, terms, results });
        } catch {
          return Response.json({ query: q, terms, results: [] });
        }
      },
    },
  },
});
