import { ampDocument } from "@/lib/amp-document";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const source = request.headers.get("x-amp-source");
  if (!source) return new Response("Not found", { status: 404 });
  const html = ampDocument(source);
  if (!html) return new Response("Not found", { status: 404 });
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
