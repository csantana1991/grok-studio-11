import { createFileRoute } from "@tanstack/react-router";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Teaching read of the picture currently on the RAD REVIEW Ultimate viewer.
 * User-initiated only. The key stays on the server.
 */

const MAX_IMAGE_BYTES = 4_500_000;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

type Agreement = "match" | "partial" | "mismatch";
type Confidence = "low" | "medium" | "high";

type Analysis = {
  modalitySeen: string;
  regionSeen: string;
  description: string;
  agreement: Agreement;
  why: string;
  teachingPoint: string;
  confidence: Confidence;
};

const cache = new Map<string, Analysis>();
const hits: number[] = [];

function allow(): boolean {
  const now = Date.now();
  while (hits.length && now - hits[0]! > WINDOW_MS) hits.shift();
  if (hits.length >= MAX_PER_WINDOW) return false;
  hits.push(now);
  return true;
}

function clip(value: unknown, max: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function asAgreement(value: unknown): Agreement {
  const v = String(value ?? "").toLowerCase();
  if (v === "match" || v === "mismatch" || v === "partial") return v;
  return "partial";
}

function asConfidence(value: unknown): Confidence {
  const v = String(value ?? "").toLowerCase();
  if (v === "low" || v === "medium" || v === "high") return v;
  return "medium";
}

function parseAnalysis(text: string): Analysis | null {
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const raw = JSON.parse(cleaned.slice(start, end + 1)) as Record<string, unknown>;
    const description = clip(raw.description, 900);
    if (!description) return null;
    return {
      modalitySeen: clip(raw.modalitySeen, 80) || "Not stated",
      regionSeen: clip(raw.regionSeen, 80) || "Not stated",
      description,
      agreement: asAgreement(raw.agreement),
      why: clip(raw.why, 320) || "Compared with the case stem only.",
      teachingPoint: clip(raw.teachingPoint, 320) || "Confirm the finding on the primary images.",
      confidence: asConfidence(raw.confidence),
    };
  } catch {
    return null;
  }
}

function textFrom(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const rec = body as Record<string, unknown>;
  if (typeof rec.output_text === "string") return rec.output_text;
  if (Array.isArray(rec.output)) {
    const bits: string[] = [];
    for (const item of rec.output) {
      if (!item || typeof item !== "object") continue;
      const content = (item as { content?: unknown }).content;
      if (typeof content === "string") bits.push(content);
      if (Array.isArray(content)) {
        for (const part of content) {
          if (part && typeof part === "object" && typeof (part as { text?: unknown }).text === "string") {
            bits.push((part as { text: string }).text);
          }
        }
      }
    }
    if (bits.length) return bits.join("\n");
  }
  const choices = rec.choices;
  if (Array.isArray(choices) && choices[0] && typeof choices[0] === "object") {
    const message = (choices[0] as { message?: { content?: unknown } }).message;
    if (typeof message?.content === "string") return message.content;
  }
  return "";
}

async function loadBytes(
  request: Request,
  imageUrl: string,
): Promise<{ mime: string; b64: string } | { error: string }> {
  if (imageUrl.startsWith("data:image/")) {
    const match = /^data:(image\/(?:jpeg|jpg|png|webp));base64,([a-z0-9+/=\s]+)$/i.exec(imageUrl);
    if (!match) return { error: "That image format cannot be read." };
    const b64 = match[2]!.replace(/\s/g, "");
    if (b64.length > MAX_IMAGE_BYTES * 1.4) return { error: "Image is too large to analyze." };
    const mime = match[1]!.toLowerCase() === "image/jpg" ? "image/jpeg" : match[1]!.toLowerCase();
    return { mime, b64 };
  }

  const pathOnly = imageUrl.split("?")[0] ?? "";
  if (pathOnly.startsWith("/") && !pathOnly.includes("..")) {
    const file = path.join(process.cwd(), "public", pathOnly);
    const root = path.join(process.cwd(), "public");
    if (file.startsWith(root)) {
      try {
        const buf = await readFile(file);
        if (buf.byteLength > MAX_IMAGE_BYTES) return { error: "Image is too large to analyze." };
        const lower = pathOnly.toLowerCase();
        const mime = lower.endsWith(".png")
          ? "image/png"
          : lower.endsWith(".webp")
            ? "image/webp"
            : "image/jpeg";
        return { mime, b64: buf.toString("base64") };
      } catch {
        /* fall through to HTTP */
      }
    }
  }

  let abs = imageUrl;
  if (imageUrl.startsWith("/")) {
    abs = new URL(imageUrl, new URL(request.url).origin).href;
  }
  if (!/^https?:\/\//i.test(abs)) return { error: "Unsupported image address." };

  const res = await fetch(abs, { signal: AbortSignal.timeout(12_000) });
  if (!res.ok) return { error: `Could not load the image (${res.status}).` };
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength > MAX_IMAGE_BYTES) return { error: "Image is too large to analyze." };
  const ct = (res.headers.get("content-type") || "").toLowerCase();
  const mime = ct.includes("png") ? "image/png" : ct.includes("webp") ? "image/webp" : "image/jpeg";
  return { mime, b64: buf.toString("base64") };
}

function postJson(body: string, apiKey: string): Promise<{ status: number; text: string }> {
  // A fresh Node process. The dev server's own https stack does not complete
  // outbound calls, and the key stays in the environment, never on the command line.
  const script = `
    const chunks = [];
    for await (const chunk of process.stdin) chunks.push(chunk);
    const body = Buffer.concat(chunks).toString("utf8");
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.XAI_API_KEY,
      },
      body,
    });
    const text = await res.text();
    process.stdout.write(JSON.stringify({ status: res.status, text }));
  `;
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", script], {
      env: { ...process.env, XAI_API_KEY: apiKey },
    });
    const out: Buffer[] = [];
    const err: Buffer[] = [];
    child.stdout.on("data", (chunk) => out.push(chunk as Buffer));
    child.stderr.on("data", (chunk) => err.push(chunk as Buffer));
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error("timeout"));
    }, 55_000);
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", () => {
      clearTimeout(timer);
      const raw = Buffer.concat(out).toString("utf8");
      try {
        resolve(JSON.parse(raw) as { status: number; text: string });
      } catch {
        reject(new Error(Buffer.concat(err).toString("utf8").slice(0, 180) || "empty analysis"));
      }
    });
    child.stdin.end(body);
  });
}

async function askVision(prompt: string, dataUrl: string, apiKey: string): Promise<string> {
  const { status, text } = await postJson(
    JSON.stringify({
      model: "grok-4.5",
      max_tokens: 450,
      reasoning_effort: "low",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: dataUrl } },
          ],
        },
      ],
    }),
    apiKey,
  );
  if (status < 200 || status >= 300) return "";
  return textFrom(JSON.parse(text));
}

export const Route = createFileRoute("/api/rru-analyze")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json({ ok: false, error: "Send a case and an image." }, { status: 400 });
        }

        const finding = clip(body.finding, 240);
        const station = clip(body.station, 80);
        const modality = clip(body.modality, 80);
        const accession = clip(body.accession, 40);
        const imageData = typeof body.imageData === "string" ? body.imageData.slice(0, 6_500_000) : "";
        const imageUrl = typeof body.imageUrl === "string" ? body.imageUrl.slice(0, 800) : "";
        if (!finding || (!imageData && !imageUrl)) {
          return Response.json({ ok: false, error: "Choose a case with an image first." }, { status: 400 });
        }

        const apiKey = process.env.XAI_API_KEY;
        if (!apiKey) {
          return Response.json({ ok: false, error: "AI image analysis is not available right now." });
        }

        const loaded = await loadBytes(request, imageData || imageUrl);
        if ("error" in loaded) {
          return Response.json({ ok: false, error: loaded.error }, { status: 422 });
        }

        const cacheKey = `${finding}|${station}|${loaded.b64.length}|${loaded.b64.slice(0, 48)}|${loaded.b64.slice(-24)}`;
        const cached = cache.get(cacheKey);
        if (cached) return Response.json({ ok: true, cached: true, ...cached });

        if (!allow()) {
          return Response.json(
            { ok: false, error: "Too many analyses in a short time. Wait a minute and try this case again." },
            { status: 429 },
          );
        }

        const prompt = [
          "Teaching assistant. Look only at the image. It is a teaching analogue, not this patient's scan.",
          `Stem: ${finding}. Modality: ${modality || "unspecified"}. Station: ${station || "unspecified"}. Accession: ${accession || "none"}.`,
          "Do not invent measurements or history.",
          "Return only JSON keys modalitySeen, regionSeen, description, agreement, why, teachingPoint, confidence.",
          'agreement is "match", "partial", or "mismatch". confidence is "low", "medium", or "high".',
          "description is two sentences about what is visible.",
        ].join(" ");

        const dataUrl = `data:${loaded.mime};base64,${loaded.b64}`;
        let text = "";
        try {
          text = await askVision(prompt, dataUrl, apiKey);
        } catch {
          return Response.json({ ok: false, error: "The image analysis did not respond. Try again." }, { status: 502 });
        }

        const analysis = parseAnalysis(text);
        if (!analysis) {
          return Response.json(
            { ok: false, error: "The read came back unreadable. Try this image again." },
            { status: 502 },
          );
        }
        cache.set(cacheKey, analysis);
        return Response.json({ ok: true, cached: false, ...analysis });
      },
    },
  },
});
