import { sitemapChunks, sitemapXml } from "@/lib/sitemap-data";

export function generateStaticParams() {
  return sitemapChunks().map((_, index) => ({ id: String(index + 1) }));
}

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const xml = sitemapXml(Number(id) - 1);
  if (!xml) return new Response("Not found", { status: 404 });
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
