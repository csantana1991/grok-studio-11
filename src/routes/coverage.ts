import { createFileRoute } from "@tanstack/react-router";
import { medbDocument } from "@/server/medb-shell";

export const Route = createFileRoute("/coverage")({
  server: { handlers: { GET: () => medbDocument() } },
});
