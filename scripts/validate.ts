import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { pages } from "../lib/content/index";
import { allowedExternalHosts, officialSources } from "../lib/official";
import { pathFor, assertFlatPublicPath } from "../lib/paths";
import { SITEMAP_URL_LIMIT, sitemapChunks, sitemapEntries } from "../lib/sitemap-data";

const required = [
  "omkareshwar-jyotirlinga",
  "omkareshwar-temple",
  "omkareshwar-darshan",
  "omkareshwar-temple-timings",
  "omkareshwar-vip-darshan",
  "where-is-omkareshwar",
  "how-to-reach-omkareshwar",
  "omkareshwar-from-indore",
  "omkareshwar-from-ujjain",
  "omkareshwar-from-bhopal",
  "omkareshwar-from-khandwa",
  "omkareshwar-from-mumbai",
  "omkareshwar-from-delhi",
  "hotels-in-omkareshwar",
  "hotels-near-omkareshwar-temple",
  "omkareshwar-dharamshala",
  "budget-hotels-omkareshwar",
  "family-hotels-omkareshwar",
  "places-to-visit-in-omkareshwar",
  "mamleshwar-temple",
  "omkareshwar-parikrama",
  "narmada-ghat-omkareshwar",
  "siddhanath-temple-omkareshwar",
  "gauri-somnath-temple",
  "omkareshwar-history",
  "omkareshwar-jyotirlinga-story",
  "omkareshwar-shivling",
  "omkareshwar-festivals",
  "omkareshwar-mahashivratri",
  "omkareshwar-trip",
  "omkareshwar-one-day-trip",
  "omkareshwar-two-day-trip",
  "omkareshwar-distance",
  "omkareshwar-faq",
  "latest-omkareshwar-news",
  "about",
  "editorial-policy",
  "sources",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
];

const errors: string[] = [];
const fail = (message: string) => errors.push(message);
const slugs = new Set(pages.map((page) => page.slug));

for (const slug of required) {
  if (!slugs.has(slug)) fail(`Missing page: ${slug}`);
}
if (new Set(pages.map((page) => page.slug)).size !== pages.length) fail("Duplicate slugs");

for (const lang of ["en", "hi"] as const) {
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  const h1s = new Map<string, string>();
  for (const page of pages) {
    const copy = page[lang];
    for (const [map, value, label] of [
      [titles, copy.title, "title"],
      [descriptions, copy.description, "description"],
      [h1s, copy.h1, "h1"],
    ] as const) {
      const previous = map.get(value);
      if (previous) fail(`${lang} duplicate ${label}: "${value}" on ${previous} and ${page.slug}`);
      map.set(value, page.slug);
    }
    if (copy.title.length < 15 || copy.title.length > 90) {
      fail(`${lang} title length ${copy.title.length} on ${page.slug}: ${copy.title}`);
    }
    if (copy.description.length < 70 || copy.description.length > 220) {
      fail(`${lang} description length ${copy.description.length} on ${page.slug}: ${copy.description}`);
    }
    if (!copy.answer || copy.faqs.length < 2) fail(`${lang} thin answer/faq on ${page.slug}`);
    if (lang === "hi" && !/[\u0900-\u097F]/.test(copy.h1 + copy.answer)) {
      fail(`Hindi page lacks Devanagari: ${page.slug}`);
    }
    const blob = JSON.stringify(copy);
    const link = /\[\[([^|\]]+)\|/g;
    let match: RegExpExecArray | null;
    while ((match = link.exec(blob))) {
      if (!slugs.has(match[1])) fail(`Broken internal link [[${match[1]}]] on ${page.slug}`);
    }
    const ext = /\{\{([a-zA-Z0-9]+)\|/g;
    while ((match = ext.exec(blob))) {
      if (!(match[1] in officialSources)) fail(`Unknown official key ${match[1]} on ${page.slug}`);
    }
    assertFlatPublicPath(pathFor(lang, page.slug));
    for (const related of page.related) {
      if (!slugs.has(related)) fail(`Missing related ${related} on ${page.slug}`);
    }
  }
  assertFlatPublicPath(pathFor(lang, ""));
}

for (const url of Object.values(officialSources)) {
  const host = new URL(url).host;
  if (!allowedExternalHosts.includes(host)) fail(`Official URL host not allowed: ${url}`);
}

const banned = [/book now/i, /20\+?\s*years/i, /omkareshwarhotel/i, /booking\.com/i, /makemytrip/i, /goibibo/i];
const text = JSON.stringify(pages);
for (const pattern of banned) {
  if (pattern.test(text)) fail(`Banned phrase matched ${pattern}`);
}

for (const chunk of sitemapChunks()) {
  if (chunk.length > SITEMAP_URL_LIMIT) fail(`Sitemap chunk has ${chunk.length} URLs`);
}
const locs = sitemapEntries().map((entry) => entry.loc);
if (new Set(locs).size !== locs.length) fail("Duplicate sitemap URLs");
for (const loc of locs) {
  const path = new URL(loc).pathname;
  assertFlatPublicPath(path);
  if (path.includes("?")) fail(`Tracking parameter in sitemap: ${loc}`);
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (name === "node_modules" || name === ".next") return [];
    return statSync(full).isDirectory() ? walk(full) : full.endsWith(".tsx") ? [full] : [];
  });
}

for (const file of walk(join(import.meta.dirname, ".."))) {
  if (file.endsWith("components/RichText.tsx")) continue;
  const source = readFileSync(file, "utf8");
  if (/href\s*=\s*["']https?:/.test(source)) fail(`Raw external anchor in ${file}`);
  if (/rel=/.test(source) && /target="_blank"/.test(source) && !source.includes("nofollow")) {
    fail(`Blank target without nofollow in ${file}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${pages.length} pages, ${locs.length} sitemap URLs, ${sitemapChunks().length} sitemap file(s).`);
