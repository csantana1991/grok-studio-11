import { createFileRoute } from "@tanstack/react-router";
import { medbDocument } from "@/server/medb-shell";

export const Route = createFileRoute("/program/$programId")({
  server: { handlers: { GET: () => medbDocument() } },
});
