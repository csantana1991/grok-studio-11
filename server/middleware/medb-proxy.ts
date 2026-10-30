/**
 * Same-origin stand-in for the Med-b catalogue. Their app fetches /api/trpc
 * and chapter files with fetch(), which ignores <base href>, and their host
 * does not send CORS headers. Media and script tags still follow the base.
 */
const HOST = "https://noardstudiomannus.vercel.app";

const PREFIXES = [
  "/api/trpc",
  "/api/content",
  "/api/platform",
  "/api/oembed",
  "/api/oauth",
  "/medical-source",
  "/manus-storage",
];

interface MedbEvent {
  url: URL;
  req: Request;
}

export default async function medbProxy(event: MedbEvent, next: () => unknown): Promise<unknown> {
  const path = event.url.pathname;
  if (!PREFIXES.some((prefix) => path === prefix || path.startsWith(prefix + "/"))) return next();
  const method = (event.req.method || "GET").toUpperCase();
  const headers = new Headers();
  for (const name of ["accept", "content-type", "authorization", "accept-language", "range"]) {
    const value = event.req.headers.get(name);
    if (value) headers.set(name, value);
  }
  headers.set("user-agent", "BoardStudio/1.0 (teaching)");
  const hasBody = method !== "GET" && method !== "HEAD";
  const upstream = await fetch(HOST + path + event.url.search, {
    method,
    headers,
    body: hasBody ? event.req.body : undefined,
    redirect: "follow",
    ...(hasBody ? { duplex: "half" as const } : {}),
  });
  const out = new Headers(upstream.headers);
  out.delete("content-encoding");
  out.delete("content-length");
  out.delete("set-cookie");
  out.set("cache-control", "private, no-store");
  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: out,
  });
}
