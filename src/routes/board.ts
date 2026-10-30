import { createFileRoute } from "@tanstack/react-router";
import { medbDocument } from "@/server/medb-shell";

export const Route = createFileRoute("/board")({
  server: { handlers: { GET: () => medbDocument() } },
});
