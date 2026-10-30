import { createFileRoute } from "@tanstack/react-router";

/**
 * PubMed citations, fetched on this origin.
 * The browser call to NCBI fails with "Failed to fetch", so the studio asks here.
 */

type Paper = { pmid: string; title: string; journal: string; date: string; doi: string };

const TOOL = "tool=BoardStudioTeaching&retmode=json";

async function ncbi(url: string): Promise<unknown> {
  let last = "failed";
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(12000),
        headers: { "User-Agent": "BoardStudioTeaching/1.0 (https://teaching-studios.vercel.app)" },
      });
      if (res.status === 429) {
        last = "HTTP 429";
        await new Promise((r) => setTimeout(r, 500 * (i + 1)));
        continue;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (error) {
      last = error instanceof Error ? error.message : "failed";
      if (i < 2) await new Promise((r) => setTimeout(r, 400));
    }
  }
  throw new Error(last);
}

export const Route = createFileRoute("/api/pubmed")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const q = (new URL(request.url).searchParams.get("q") || "").replace(/\s+/g, " ").trim().slice(0, 180);
        if (q.length < 3) {
          return Response.json({ ok: false, error: "Query too short", count: "0", papers: [], query: q });
        }
        try {
          const search = (await ncbi(
            "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=8&sort=relevance&" +
              TOOL +
              "&term=" +
              encodeURIComponent(q),
          )) as { esearchresult?: { idlist?: string[]; count?: string } };
          const ids = search.esearchresult?.idlist || [];
          const count = String(search.esearchresult?.count || "0");
          if (!ids.length) return Response.json({ ok: true, count, papers: [], query: q });
          const summary = (await ncbi(
            "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&" + TOOL + "&id=" + ids.join(","),
          )) as { result?: Record<string, { title?: string; source?: string; pubdate?: string; elocationid?: string }> };
          const result = summary.result || {};
          const papers: Paper[] = ids.map((id) => {
            const row = result[id] || {};
            return {
              pmid: id,
              title: row.title || "Untitled",
              journal: row.source || "",
              date: row.pubdate || "",
              doi: row.elocationid || "",
            };
          });
          return Response.json({ ok: true, count, papers, query: q });
        } catch (error) {
          const message = error instanceof Error ? error.message : "failed";
          return Response.json({ ok: false, error: message, count: "0", papers: [], query: q });
        }
      },
    },
  },
});
