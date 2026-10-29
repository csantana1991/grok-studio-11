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
        if (url.searchParams.get("source") === "openi") {
          const terms = q.split(/[^A-Za-z0-9+-]+/).filter((w) => w.length >= 3).slice(0, 6);
          if (!terms.length) return Response.json({ query: q, results: [] });
          try {
            const search =
              "https://openi.nlm.nih.gov/api/search?query=" +
              encodeURIComponent(terms.join(" ")) +
              "&n=12&m=1&it=x,c,m,p,u";
            const res = await fetch(search, { signal: AbortSignal.timeout(8000) });
            if (!res.ok) return Response.json({ query: q, results: [] });
            const data = (await res.json()) as {
              list?: { title?: string; imgLarge?: string; journal?: string }[];
            };
            const results = (data.list || [])
              .filter((row) => row.imgLarge && !JUNK.test(row.title || ""))
              .slice(0, 12)
              .map((row) => ({
                url: "https://openi.nlm.nih.gov" + row.imgLarge,
                caption: row.title || q,
                journal: row.journal || "Open-i",
              }));
            return Response.json({ query: q, results });
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
