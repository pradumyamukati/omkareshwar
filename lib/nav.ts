import type { Lang } from "./types";
import { pathFor } from "./paths";

export const nav = [
  { href: "omkareshwar-temple", en: "Temple", hi: "मंदिर" },
  { href: "omkareshwar-darshan", en: "Darshan", hi: "दर्शन" },
  { href: "places-to-visit-in-omkareshwar", en: "Places", hi: "स्थान" },
  { href: "how-to-reach-omkareshwar", en: "Travel", hi: "यात्रा" },
  { href: "hotels-in-omkareshwar", en: "Hotels", hi: "होटल" },
  { href: "omkareshwar-trip", en: "Yatra", hi: "यात्रा योजना" },
] as const;

export function hrefFor(lang: Lang, slug: string) {
  return pathFor(lang, slug);
}

export const footerGroups = [
  {
    en: "Temple",
    hi: "मंदिर",
    links: [
      ["omkareshwar-jyotirlinga", "Omkareshwar Jyotirlinga", "ओंकारेश्वर ज्योतिर्लिंग"],
      ["omkareshwar-temple", "Omkareshwar Temple", "ओंकारेश्वर मंदिर"],
      ["omkareshwar-darshan", "Darshan", "दर्शन"],
      ["omkareshwar-temple-timings", "Temple timings", "मंदिर का समय"],
      ["omkareshwar-vip-darshan", "Shighra / VIP darshan", "शीघ्र दर्शन"],
      ["omkareshwar-jyotirlinga-story", "Religious story", "कथा"],
    ],
  },
  {
    en: "Travel",
    hi: "यात्रा",
    links: [
      ["where-is-omkareshwar", "Where is Omkareshwar", "ओंकारेश्वर कहाँ है"],
      ["how-to-reach-omkareshwar", "How to reach", "कैसे पहुँचें"],
      ["omkareshwar-from-indore", "From Indore", "इंदौर से"],
      ["omkareshwar-from-ujjain", "From Ujjain", "उज्जैन से"],
      ["omkareshwar-distance", "Distances", "दूरी"],
      ["omkareshwar-complete-guide", "Complete guide", "पूरी गाइड"],
      ["omkareshwar-trip", "Trip planner", "यात्रा योजना"],
    ],
  },
  {
    en: "Places",
    hi: "स्थान",
    links: [
      ["places-to-visit-in-omkareshwar", "Places to visit", "दर्शनीय स्थान"],
      ["mamleshwar-temple", "Mamleshwar", "ममलेश्वर"],
      ["omkareshwar-parikrama", "Parikrama", "परिक्रमा"],
      ["narmada-ghat-omkareshwar", "Narmada ghat", "नर्मदा घाट"],
      ["siddhanath-temple-omkareshwar", "Siddhanath", "सिद्धनाथ"],
      ["gauri-somnath-temple", "Gauri Somnath", "गौरी सोमनाथ"],
    ],
  },
  {
    en: "Stay and trust",
    hi: "ठहरना और नीति",
    links: [
      ["hotels-in-omkareshwar", "Hotels", "होटल"],
      ["omkareshwar-dharamshala", "Dharamshala", "धर्मशाला"],
      ["latest-omkareshwar-news", "Latest updates", "ताज़ा अपडेट"],
      ["about", "About", "परिचय"],
      ["editorial-policy", "Editorial policy", "संपादकीय नीति"],
      ["sources", "Sources", "स्रोत"],
      ["contact", "Contact", "संपर्क"],
      ["privacy", "Privacy", "गोपनीयता"],
      ["terms", "Terms", "नियम"],
      ["disclaimer", "Disclaimer", "अस्वीकरण"],
    ],
  },
] as const;
