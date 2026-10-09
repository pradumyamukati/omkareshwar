import type { Metadata } from "next";
import { place } from "./facts";
import { media } from "./media";
import { absoluteUrl, pathFor } from "./paths";
import { editorialDesk, site } from "./site";
import type { Lang, PageDef } from "./types";

export function stripTokens(text: string) {
  return text
    .replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\{\{[^|]+\|([^}]+)\}\}/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}

export function pageMetadata(page: PageDef, lang: Lang): Metadata {
  const copy = page[lang];
  const canonical = pathFor(lang, page.slug);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        en: pathFor("en", page.slug),
        hi: pathFor("hi", page.slug),
        "x-default": pathFor("en", page.slug),
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: absoluteUrl(canonical),
      siteName: site.name,
      locale: lang === "hi" ? "hi_IN" : "en_IN",
      alternateLocale: lang === "hi" ? ["en_IN"] : ["hi_IN"],
      type: "article",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "Omkareshwar.co, an independent guide to Omkareshwar Jyotirlinga",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/og.jpg"],
    },
  };
}

export function homeMetadata(lang: Lang): Metadata {
  const title =
    lang === "en"
      ? "Shri Omkareshwar Jyotirlinga Temple Mandhata Madhya Pradesh"
      : "श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर मांधाता मध्य प्रदेश";
  const description = site.description[lang];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pathFor(lang, ""),
      languages: { en: "/", hi: "/hi", "x-default": "/" },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathFor(lang, "")),
      siteName: site.name,
      locale: lang === "hi" ? "hi_IN" : "en_IN",
      alternateLocale: lang === "hi" ? ["en_IN"] : ["hi_IN"],
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Omkareshwar Jyotirlinga guide" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}

const attractionSlugs = new Set([
  "omkareshwar-jyotirlinga",
  "omkareshwar-temple",
  "where-is-omkareshwar",
  "mamleshwar-temple",
  "omkareshwar-parikrama",
  "narmada-ghat-omkareshwar",
  "siddhanath-temple-omkareshwar",
  "gauri-somnath-temple",
  "places-to-visit-in-omkareshwar",
]);

export function pageJsonLd(page: PageDef, lang: Lang) {
  const copy = page[lang];
  const url = absoluteUrl(pathFor(lang, page.slug));
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: copy.h1,
      description: copy.description,
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      isPartOf: { "@id": `${site.url}/#website` },
      dateModified: page.updated,
      about: { "@type": "Place", name: "Omkareshwar" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "मुखपृष्ठ",
          item: absoluteUrl(pathFor(lang, "")),
        },
        { "@type": "ListItem", position: 2, name: copy.h1, item: url },
      ],
    },
  ];

  if (copy.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: copy.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: stripTokens(item.a) },
      })),
    });
  }

  if (page.kind !== "policy") {
    const image = page.image ? absoluteUrl(media[page.image].src) : absoluteUrl("/og.jpg");
    graph.push({
      "@type": "Article",
      headline: copy.h1,
      description: copy.description,
      datePublished: page.updated,
      dateModified: page.updated,
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      image,
      author: { "@type": "Organization", name: editorialDesk.name, url: absoluteUrl("/about") },
      publisher: { "@id": `${site.url}/#organization` },
      mainEntityOfPage: url,
    });
  }

  if (attractionSlugs.has(page.slug)) {
    graph.push({
      "@type": ["TouristAttraction", "Place"],
      name: lang === "en" ? "Omkareshwar" : "ओंकारेश्वर",
      description: stripTokens(copy.answer),
      url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Omkareshwar",
        addressRegion: "Madhya Pradesh",
        postalCode: place.pin,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: place.latitude,
        longitude: place.longitude,
      },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description.en,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description:
          "Independent informational website about Omkareshwar. Not the official Shri Omkareshwar Jyotirlinga Temple.",
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/android-chrome-512x512.png"),
        },
      },
    ],
  };
}

export function homeJsonLd(lang: Lang) {
  const url = absoluteUrl(pathFor(lang, ""));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name:
          lang === "en"
            ? "Shri Omkareshwar Jyotirlinga Temple Mandhata Madhya Pradesh"
            : "श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर मांधाता मध्य प्रदेश",
        description: site.description[lang],
        inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
        isPartOf: { "@id": `${site.url}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: absoluteUrl(media.temple.src),
          creditText: media.temple.author,
          copyrightNotice: "CC0 1.0",
          caption: media.temple.caption[lang],
        },
      },
      {
        "@type": ["Place", "TouristAttraction"],
        name: "Omkareshwar",
        alternateName: ["Omkar Mandhata", "Mandhata", "ओंकारेश्वर"],
        description: site.description[lang],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Omkareshwar",
          addressRegion: "Madhya Pradesh",
          postalCode: place.pin,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: place.latitude,
          longitude: place.longitude,
        },
        containedInPlace: { "@type": "AdministrativeArea", name: "Khandwa district, Madhya Pradesh" },
      },
    ],
  };
}
