import { createFileRoute } from "@tanstack/react-router";

/** Same-origin copy of one teaching figure so the phone can paint it. */

async function streamImage(src: string) {
  if (!/^https:\/\/(upload|thumb)\.wikimedia\.org\//.test(src) && !/^https:\/\/europepmc\.org\/articles\/PMC\d+\/bin\//.test(src)) {
    return new Response("Bad host", { status: 400 });
  }
  const res = await fetch(src, {
    signal: AbortSignal.timeout(8000),
    headers: { "User-Agent": "BoardStudio/1.0 (teaching)" },
  });
  if (!res.ok) return new Response("Missing figure", { status: 404 });
  const type = res.headers.get("content-type") || "";
  if (!type.startsWith("image/")) return new Response("Not an image", { status: 415 });
  const buf = await res.arrayBuffer();
  if (buf.byteLength > 8_000_000) return new Response("Too large", { status: 413 });
  return new Response(buf, {
    headers: { "Content-Type": type, "Cache-Control": "public, max-age=86400" },
  });
}

export const Route = createFileRoute("/api/pmc/img")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const title = url.searchParams.get("title") || "";
        try {
          if (title) {
            if (!/^[\w .,'():+\-]{2,140}$/.test(title)) return new Response("Bad title", { status: 400 });
            const api =
              "https://en.wikipedia.org/w/api.php?action=query&titles=" +
              encodeURIComponent(title) +
              "&prop=pageimages&pithumbsize=800&format=json";
            const data = (await fetch(api, { signal: AbortSignal.timeout(8000) }).then((r) => r.json())) as {
              query?: { pages?: Record<string, { thumbnail?: { source?: string } }> };
            };
            const page = Object.values(data.query?.pages || {})[0];
            const src = page?.thumbnail?.source || "";
            if (!src) return new Response("No figure", { status: 404 });
            return streamImage(src);
          }
          const pmcid = url.searchParams.get("pmcid") || "";
          const file = url.searchParams.get("file") || "";
          if (!/^PMC\d+$/.test(pmcid) || !/^[\w.-]+$/.test(file)) return new Response("Bad figure", { status: 400 });
          return streamImage("https://europepmc.org/articles/" + pmcid + "/bin/" + file);
        } catch {
          return new Response("Figure unavailable", { status: 502 });
        }
      },
    },
  },
});
