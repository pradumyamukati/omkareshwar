import { pages } from "./content";
import { media, type MediaKey } from "./media";
import { absoluteUrl, pathFor } from "./paths";
import { site } from "./site";
import type { Lang } from "./types";

export const SITEMAP_URL_LIMIT = 200;

export type SitemapEntry = {
  loc: string;
  lastmod?: string;
  images: { loc: string; caption: string; title: string }[];
};

function imagesFor(lang: Lang, key?: MediaKey | null) {
  if (!key) return [];
  const item = media[key];
  return [
    {
      loc: absoluteUrl(item.src),
      caption: item.caption[lang],
      title: item.alt[lang],
    },
  ];
}

export function sitemapEntries(): SitemapEntry[] {
  const homeImages = (["temple", "aerial", "mamleshwar"] as MediaKey[]).flatMap((key) =>
    imagesFor("en", key),
  );
  const entries: SitemapEntry[] = [
    {
      loc: absoluteUrl("/"),
      lastmod: "2026-10-05",
      images: homeImages,
    },
    {
      loc: absoluteUrl("/hi"),
      lastmod: "2026-10-05",
      images: (["temple", "aerial", "mamleshwar"] as MediaKey[]).flatMap((key) => imagesFor("hi", key)),
    },
  ];
  for (const page of pages) {
    for (const lang of ["en", "hi"] as Lang[]) {
      entries.push({
        loc: absoluteUrl(pathFor(lang, page.slug)),
        lastmod: page.updated,
        images: imagesFor(lang, page.image),
      });
    }
  }
  return entries;
}

export function sitemapChunks() {
  const entries = sitemapEntries();
  const chunks: SitemapEntry[][] = [];
  for (let index = 0; index < entries.length; index += SITEMAP_URL_LIMIT) {
    chunks.push(entries.slice(index, index + SITEMAP_URL_LIMIT));
  }
  return chunks;
}

export function sitemapIndexXml() {
  const body = sitemapChunks()
    .map(
      (_, index) =>
        `  <sitemap><loc>${site.url}/sitemap-${index + 1}.xml</loc></sitemap>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function sitemapXml(chunkIndex: number) {
  const chunk = sitemapChunks()[chunkIndex];
  if (!chunk) return null;
  const urls = chunk
    .map((entry) => {
      const images = entry.images
        .map(
          (image) =>
            `    <image:image><image:loc>${escapeXml(image.loc)}</image:loc><image:title>${escapeXml(image.title)}</image:title><image:caption>${escapeXml(image.caption)}</image:caption></image:image>`,
        )
        .join("\n");
      return `  <url><loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}\n${images}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
}
