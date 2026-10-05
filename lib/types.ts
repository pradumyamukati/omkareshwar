import type { OfficialKey } from "./official";

export type Lang = "en" | "hi";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "facts"; items: { label: string; value: string }[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type Copy = {
  title: string;
  description: string;
  h1: string;
  kicker: string;
  answer: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
};

export type Cluster = "temple" | "travel" | "places" | "stay" | "yatra" | "trust";

export type PageKind = "guide" | "place" | "faq" | "news" | "policy";

export type PageDef = {
  slug: string;
  cluster: Cluster;
  kind: PageKind;
  /** Editorial revision date. Not a fake daily timestamp. */
  updated: string;
  /** Shown only when a time-sensitive fact was checked against a source. */
  verified?: string;
  sources: OfficialKey[];
  related: string[];
  image?: "temple" | "aerial" | "mamleshwar";
  en: Copy;
  hi: Copy;
};

export const verifiedOn = "2026-10-05";

export const verifiedLabel: Record<Lang, string> = {
  en: "5 October 2026",
  hi: "5 अक्टूबर 2026",
};
