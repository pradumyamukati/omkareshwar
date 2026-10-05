import type { Lang } from "./types";
import { site } from "./site";

export function pathFor(lang: Lang, slug: string) {
  if (lang === "en") return slug ? `/${slug}` : "/";
  return slug ? `/hi/${slug}` : "/hi";
}

export function absoluteUrl(pathname: string) {
  if (pathname === "/") return `${site.url}/`;
  return `${site.url}${pathname}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "hi" : "en";
}

export const bannedSegments = ["blog", "guide", "category", "travel", "temple", "places", "hotels", "pages"];

export function assertFlatPublicPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const body = parts[0] === "hi" ? parts.slice(1) : parts;
  if (body.length > 1) {
    throw new Error(`Nested public URL is not allowed: ${pathname}`);
  }
  for (const part of parts) {
    if (part !== "hi" && bannedSegments.includes(part)) {
      throw new Error(`Banned path segment in ${pathname}`);
    }
  }
}
