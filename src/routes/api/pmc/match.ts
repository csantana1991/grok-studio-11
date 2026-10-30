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

function petParts(text: string) {
  const t = text.replace(/<[^>]+>/g, " ");
  let tracer = "PET";
  if (/PSMA/i.test(t)) tracer = "PSMA";
  else if (/DOTATATE|DOTATOC|DOTANOC/i.test(t)) tracer = "DOTATATE";
  else if (!/non[- ]?fluorodeoxyglucose|non[- ]?FDG/i.test(t) && /FDG|fluorodeoxyglucose/i.test(t)) tracer = "FDG";
  else if (/FAPI/i.test(t)) tracer = "FAPI";
  else if (/\bNaF\b|sodium fluoride/i.test(t)) tracer = "NaF";
  else if (/amyloid|florbetapir|flutemetamol|florbetaben/i.test(t)) tracer = "Amyloid";
  else if (/choline/i.test(t)) tracer = "Choline";
  else if (/\bFLT\b/i.test(t)) tracer = "FLT";
  else if (/Ga-?68|68Ga/i.test(t)) tracer = "Ga-68";
  else if (/Cu-?64|64Cu/i.test(t)) tracer = "Cu-64";
  else if (/Rb-?82/i.test(t)) tracer = "Rb-82";
  else if (/C-?11|11C/i.test(t)) tracer = "C-11";
  else if (/F-?18|18F/i.test(t)) tracer = "F-18";
  const hybrid = /PET\s*[/-]\s*MR/i.test(t) ? "PET/MRI" : /PET\s*[/-]\s*CT/i.test(t) ? "PET/CT" : "PET";
  const planes: string[] = [];
  if (/\bMIP\b|maximum intensity/i.test(t)) planes.push("MIP");
  if (/axial/i.test(t)) planes.push("axial");
  if (/coronal/i.test(t)) planes.push("coronal");
  if (/sagittal/i.test(t)) planes.push("sagittal");
  if (/whole[- ]body/i.test(t)) planes.push("whole body");
  const head = tracer === "PET" ? hybrid : tracer + " " + hybrid;
  const plane = planes.slice(0, 2).join(", ");
  return { tracer, hybrid, plane, label: plane ? head + ", " + plane : head };
}

export const Route = createFileRoute("/api/pmc/match")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const q = (url.searchParams.get("q") || "").slice(0, 300);
        if (url.searchParams.get("source") === "captions") {
          const id = url.searchParams.get("v") || "";
          if (!/^[A-Za-z0-9_-]{6,15}$/.test(id)) return Response.json({ lines: [] });
          try {
            const res = await fetch("https://www.youtube.com/api/timedtext?v=" + id + "&lang=en&fmt=json3", {
              signal: AbortSignal.timeout(12000),
              headers: { "User-Agent": "BoardStudio/1.0 (teaching)" },
            });
            const data = (await res.json()) as { events?: { tStartMs?: number; segs?: { utf8?: string }[] }[] };
            const lines = (data.events || []).map((ev) => ({
              t: (ev.tStartMs || 0) / 1000,
              text: (ev.segs || []).map((seg) => seg.utf8 || "").join("").replace(/\s+/g, " ").trim(),
            })).filter((line) => line.text && line.text !== "\n");
            return Response.json({ lines });
          } catch {
            return Response.json({ lines: [] });
          }
        }
        if (url.searchParams.get("source") === "film") {
          const modality = url.searchParams.get("modality") || "ct";
          const asJson = url.searchParams.get("format") === "json";
          const caps: Record<string, number> = {
            ct: 347302, mri: 316774, pet: 220264, xray: 112120,
            muga: 6918, pyp: 2938, bone: 190870, thyroid: 32841,
            vq: 16410, hida: 3087, renal: 75583, mpi: 9660,
            us: 82831, mammo: 4637, psma: 27133, dota: 1254,
            xr: 15658, para: 7453, echo: 63562,
          };
          const queries: Record<string, string> = {
            ct: "computed tomography",
            mri: "magnetic resonance imaging",
            pet: '"positron emission tomography"',
            muga: '"MUGA scan"',
            pyp: '"pyrophosphate scintigraphy"',
            bone: '"bone scintigraphy"',
            thyroid: '"thyroid scintigraphy"',
            vq: '"ventilation-perfusion scintigraphy"',
            hida: '"hepatobiliary scintigraphy"',
            renal: '"renal scintigraphy"',
            mpi: '"sestamibi" SPECT',
            us: "ultrasonography",
            mammo: "mammography",
            psma: '"PSMA PET"',
            dota: "DOTATATE",
            xr: "radiograph",
            para: '"parathyroid scintigraphy"',
            echo: "echocardiography",
          };
          const cap = caps[modality] || 347302;
          const m = (Math.max(0, Number(url.searchParams.get("m") || 1) || 1) - 1) % cap + 1;
          const send = (image: string, caption: string) => {
            if (!image) return Response.json({ image: "", caption }, { status: 404 });
            if (asJson) return Response.json({ image, caption, m, modality });
            return Response.redirect(image, 302);
          };
          try {
            if (modality === "xray") {
              const train = 86524;
              const split = m <= train ? "train" : "test";
              const offset = split === "train" ? m - 1 : m - train - 1;
              const rowUrl =
                "https://datasets-server.huggingface.co/rows?dataset=timm/nih-chest-xray-14&config=default&split=" +
                split +
                "&offset=" +
                offset +
                "&length=1";
              const res = await fetch(rowUrl, { signal: AbortSignal.timeout(20000), headers: { "User-Agent": "BoardStudio/1.0 (teaching)" } });
              if (!res.ok) return send("", "NIH chest radiograph");
              const data = (await res.json()) as { rows?: { row?: { image?: { src?: string }; label_names?: string[] | string } }[] };
              const row = data.rows?.[0]?.row;
              const names = Array.isArray(row?.label_names) ? row.label_names : row?.label_names ? [row.label_names] : [];
              const caption = (names.filter(Boolean).join(", ") || "No finding") + ". NIH ChestX-ray14, CC0.";
              return send(row?.image?.src || "", caption);
            }
            const specQ = queries[modality] || queries.ct;
            const pull = async (start: number) => {
              const search = "https://openi.nlm.nih.gov/api/search?coll=pmc&query=" + encodeURIComponent(specQ) + "&m=" + start + "&n=1";
              const res = await fetch(search, { signal: AbortSignal.timeout(20000), headers: { "User-Agent": "BoardStudio/1.0 (teaching)" } });
              if (!res.ok) return null;
              const data = (await res.json()) as { list?: { title?: string; imgLarge?: string; image?: { caption?: string } }[] };
              return (data.list || []).find((item) => item.imgLarge) || null;
            };
            let row = await pull(m);
            if (!row) row = await pull(((m + 17 - 1) % cap) + 1);
            const raw = (row?.image?.caption || row?.title || specQ).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 220);
            const pet = modality === "pet" || modality === "psma" || modality === "dota" ? petParts(raw) : null;
            const caption = pet?.label ? pet.label + ". " + raw : raw;
            return send(row?.imgLarge ? "https://openi.nlm.nih.gov" + row.imgLarge : "", caption);
          } catch {
            return send("", "Library figure");
          }
        }
        if (url.searchParams.get("source") === "openi-page") {
          const modality = url.searchParams.get("modality") || "ct";
          const spec =
            modality === "mri"
              ? { q: "magnetic resonance imaging", cap: 316774 }
              : modality === "pet"
                ? { q: '"positron emission tomography"', cap: 220264 }
                : { q: "computed tomography", cap: 347302 };
          const it = (url.searchParams.get("it") || "").replace(/\s+/g, " ").trim().slice(0, 120);
          const specQ = it || spec.q;
          const n = Math.min(36, Math.max(1, Number(url.searchParams.get("n") || 36) || 36));
          let m = Math.max(1, Number(url.searchParams.get("m") || 1) || 1);
          if (m > spec.cap) m = ((m - 1) % spec.cap) + 1;
          const take = Math.min(n, spec.cap - m + 1);
          const paint = (data: {
            total?: number;
            list?: {
              title?: string;
              imgLarge?: string;
              pmcid?: string;
              image?: { caption?: string };
            }[];
          }) => {
            const seen = new Set<string>();
            return (data.list || [])
              .filter((row) => row.imgLarge)
              .filter((row) => {
                if (modality !== "pet") return true;
                const text = ((row.image?.caption || "") + " " + (row.title || "")).replace(/<[^>]+>/g, " ");
                if (/polyethylene|terephthalate/i.test(text) && !/positron|fluorodeoxyglucose|\bFDG\b|PET\s*\/\s*CT/i.test(text)) return false;
                return true;
              })
              .map((row) => {
                const raw = row.image?.caption || row.title || spec.q;
                const caption = raw
                  .replace(/<[^>]+>/g, " ")
                  .replace(/&[a-z#0-9]+;/gi, " ")
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 220);
                const pet = modality === "pet" ? petParts(caption + " " + (row.title || "")) : null;
                return {
                  url: "https://openi.nlm.nih.gov" + row.imgLarge,
                  caption: caption || spec.q,
                  label: pet?.label || "",
                  tracer: pet?.tracer || "",
                  hybrid: pet?.hybrid || "",
                  plane: pet?.plane || "",
                  pmcid: row.pmcid || "",
                  title: (row.title || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 180),
                };
              })
              .filter((row) => {
                if (seen.has(row.url)) return false;
                seen.add(row.url);
                return true;
              });
          };
          try {
            const pull = async (start: number) => {
              const search =
                "https://openi.nlm.nih.gov/api/search?coll=pmc&query=" +
                encodeURIComponent(specQ) +
                "&m=" +
                start +
                "&n=" +
                take;
              const res = await fetch(search, {
                signal: AbortSignal.timeout(20000),
                headers: { "User-Agent": "BoardStudio/1.0 (teaching)" },
              });
              if (!res.ok) return null;
              return (await res.json()) as {
                total?: number;
                list?: {
                  title?: string;
                  imgLarge?: string;
                  pmcid?: string;
                  image?: { caption?: string };
                }[];
              };
            };
            let data = await pull(m);
            let list = data ? paint(data) : [];
            if (!list.length) {
              data = await pull(Math.min(spec.cap, m + take));
              list = data ? paint(data) : [];
            }
            list = list.slice(0, take);
            const total = Math.min(spec.cap, data?.total || spec.cap);
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
              const res = await fetch(search, { signal: AbortSignal.timeout(18000) });
              if (!res.ok) continue;
              const data = (await res.json()) as {
                list?: { title?: string; imgLarge?: string; journal?: string; image?: { caption?: string } }[];
              };
              const results = (data.list || [])
                .filter((row) => row.imgLarge && !JUNK.test(row.title || "") && !/e-poster|poster session/i.test(row.title || ""))
                .slice(0, take)
                .map((row) => {
                  const clean = (value: string) =>
                    value.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
                  const title = clean(row.title || q).slice(0, 180);
                  const caption = clean((row.title || "") + " " + (row.image?.caption || "")).slice(0, 240) || title;
                  return {
                    url: "https://openi.nlm.nih.gov" + row.imgLarge,
                    caption,
                    relevance: 2,
                    pmcid: "",
                    title,
                    authors: "Open-i",
                    journal: row.journal || "Open-i",
                    year: "",
                    doi: "",
                    license: "CC BY",
                  };
                });
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
