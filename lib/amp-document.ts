import { getPage } from "./content";
import { hotelDetailUrl, hotelPicks } from "./hotel-picks";
import { liveSessions } from "./facts";
import { media, type MediaKey } from "./media";
import { footerGroups, nav } from "./nav";
import { isTempleSiteUrl, officialSources, sourceCatalog, templeSiteText, type OfficialKey } from "./official";
import { absoluteUrl, pathFor } from "./paths";
import { independenceNotice, site } from "./site";
import type { Block, Lang } from "./types";

const boilerplate =
  "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

const ampCss = `
body{margin:0;background:#fff;color:#1c1712;font-family:"Source Sans 3","Noto Sans Devanagari",sans-serif;font-size:1.05rem;line-height:1.6}
h1,h2,h3,header a.brand{font-family:Poppins,"Noto Sans Devanagari",sans-serif;line-height:1.2}
h1{font-size:2rem;font-weight:700;margin:0 0 .4rem}
h2{font-size:1.35rem;margin:1.4rem 0 .5rem}
h3{font-size:1.05rem;margin:0 0 .3rem}
p{margin:0 0 .8rem}
a{color:#1d4c59}
header{background:#fff;border-bottom:2px solid #a68456;padding:.75rem 1rem}
header .row{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap}
header .brand{color:#6e2433;font-weight:700;text-decoration:none;font-size:1.15rem}
header .tools{margin-left:auto;display:flex;gap:.4rem;flex-wrap:wrap}
header .tools a,summary.menu{min-height:44px;display:inline-flex;align-items:center;padding:0 .8rem;border-radius:999px;text-decoration:none;border:1px solid #e2d5c3;color:#1c1712;background:#fff}
header .tools a.live{background:#6e2433;color:#fff;border-color:#6e2433}
details nav{display:grid;padding:.2rem 0 .4rem}
details nav a{padding:.75rem .2rem;text-decoration:none;color:#1c1712;border-bottom:1px solid #e2d5c3}
main{padding:1rem;max-width:40rem;margin:0 auto}
.kicker{color:#8d6b32;letter-spacing:.06em;text-transform:uppercase;font-size:.78rem}
.line{color:#6e2433;font-size:1.15rem}
table{width:100%;border-collapse:collapse}
th,td{text-align:left;padding:.55rem;border-bottom:1px solid #e2d5c3;vertical-align:top}
.note{background:#fff4e8;border:1px solid #efd3b8;border-radius:12px;padding:.8rem 1rem}
footer{background:#241910;color:#f6efe6;padding:1.4rem 1rem 2rem}
footer a{color:#f3d7b0}
footer .wrap{max-width:40rem;margin:0 auto}
footer h2{font-size:1rem;color:#fff}
`.replace(/\n/g, "");

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ampHref(pathname: string) {
  return `${absoluteUrl(pathname)}?amp=1`;
}

function inline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return `<strong>${esc(part.slice(2, -2))}</strong>`;
      }
      return esc(part);
    })
    .join("");
}

function rich(text: string, lang: Lang) {
  const pattern = /\[\[([^|\]]+)\|([^\]]+)\]\]|\{\{([a-zA-Z0-9]+)\|([^}]+)\}\}/g;
  let html = "";
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    html += inline(text.slice(last, match.index));
    if (match[1] && match[2]) {
      html += `<a href="${esc(ampHref(pathFor(lang, match[1])))}">${inline(match[2])}</a>`;
    } else if (match[3] && match[4]) {
      const href = officialSources[match[3] as OfficialKey];
      html += href && isTempleSiteUrl(href) ? esc(templeSiteText) : href
        ? `<a href="${esc(href)}" target="_blank" rel="nofollow noopener noreferrer">${inline(match[4])}</a>`
        : inline(match[4]);
    }
    last = match.index + match[0].length;
  }
  return html + inline(text.slice(last));
}

function parsePath(pathname: string): { lang: Lang; slug: string } | null {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/") return { lang: "en", slug: "" };
  if (path === "/hi") return { lang: "hi", slug: "" };
  if (path.startsWith("/hi/")) {
    const slug = path.slice(4);
    if (!slug || slug.includes("/")) return null;
    return { lang: "hi", slug };
  }
  const slug = path.slice(1);
  if (!slug || slug.includes("/")) return null;
  return { lang: "en", slug };
}

function photo(id: MediaKey, lang: Lang) {
  const item = media[id];
  return `<figure>
    <amp-img src="${esc(item.src)}" width="${item.width}" height="${item.height}" layout="responsive" alt="${esc(item.alt[lang])}"></amp-img>
    <figcaption>${esc(item.caption[lang])}</figcaption>
  </figure>`;
}

function blocks(items: Block[], lang: Lang) {
  return items
    .map((block) => {
      if (block.type === "p") return `<p>${rich(block.text, lang)}</p>`;
      if (block.type === "h2") return `<h2>${esc(block.text)}</h2>`;
      if (block.type === "h3") return `<h3>${esc(block.text)}</h3>`;
      if (block.type === "ul" || block.type === "ol") {
        const tag = block.type;
        return `<${tag}>${block.items.map((item) => `<li>${rich(item, lang)}</li>`).join("")}</${tag}>`;
      }
      if (block.type === "facts") {
        return `<dl>${block.items.map((item) => `<dt>${esc(item.label)}</dt><dd>${rich(item.value, lang)}</dd>`).join("")}</dl>`;
      }
      if (block.type === "note") return `<p class="note">${rich(block.text, lang)}</p>`;
      if (block.type === "ride") {
        const slug = block.direction === "to-omkareshwar" ? "mortakka-to-omkareshwar" : "omkareshwar-to-mortakka";
        return `<p><a href="${esc(absoluteUrl(pathFor(lang, slug)))}">${lang === "en" ? "Open the booking form" : "बुकिंग फॉर्म खोलें"}</a></p>`;
      }
      if (block.type === "stays") {
        return `<ul>${hotelPicks
          .map(
            (stay) =>
              `<li><a href="${esc(hotelDetailUrl(stay.id))}" target="_blank" rel="nofollow noopener noreferrer">${esc(stay.name)}</a></li>`,
          )
          .join("")}</ul>`;
      }
      const head = block.headers.map((cell) => `<th>${rich(cell, lang)}</th>`).join("");
      const rows = block.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${rich(cell, lang)}</td>`).join("")}</tr>`)
        .join("");
      return `<table>${block.caption ? `<caption>${esc(block.caption)}</caption>` : ""}<thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    .join("");
}

function chrome(lang: Lang, slug: string) {
  const home = pathFor(lang, "");
  const links = nav
    .map((item) => `<a href="${esc(ampHref(pathFor(lang, item.href)))}">${esc(item[lang])}</a>`)
    .join("");
  return `<header>
    <div class="row">
      <a class="brand" href="${esc(ampHref(home))}">ॐ ${lang === "en" ? "Omkareshwar" : "ओंकारेश्वर"}</a>
      <div class="tools">
        <a href="${esc(ampHref(pathFor("en", slug)))}">English</a>
        <a href="${esc(ampHref(pathFor("hi", slug)))}">हिन्दी</a>
        <span>${esc(templeSiteText)}</span>
      </div>
    </div>
    <details>
      <summary class="menu">${lang === "en" ? "Menu" : "मेनू"}</summary>
      <nav>${links}</nav>
    </details>
  </header>`;
}

function footer(lang: Lang) {
  const groups = footerGroups
    .map(
      (group) =>
        `<div><h2>${esc(group[lang])}</h2><ul>${group.links
          .map(([slug, en, hi]) => `<li><a href="${esc(ampHref(pathFor(lang, slug)))}">${esc(lang === "en" ? en : hi)}</a></li>`)
          .join("")}</ul></div>`,
    )
    .join("");
  return `<footer><div class="wrap">
    <p>${lang === "en" ? "This is not the official Omkareshwar temple website. " : "यह ओंकारेश्वर की आधिकारिक वेबसाइट नहीं है। "}${esc(templeSiteText)}</p>
    <p>${esc(independenceNotice[lang])}</p>
    ${groups}
  </div></footer>`;
}

function documentShell(options: {
  lang: Lang;
  title: string;
  description: string;
  canonicalPath: string;
  slug: string;
  body: string;
  iframe: boolean;
}) {
  const canonical = absoluteUrl(options.canonicalPath);
  return `<!doctype html>
<html amp lang="${options.lang}">
<head>
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js"></script>
${options.iframe ? `<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>` : ""}
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<title>${esc(options.title)}</title>
<link rel="canonical" href="${esc(canonical)}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${esc(options.description)}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&amp;family=Source+Sans+3:wght@400;600&amp;family=Noto+Sans+Devanagari:wght@400;600;700&amp;display=swap">
<style amp-boilerplate>${boilerplate}</style>
<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
<style amp-custom>${ampCss}</style>
</head>
<body>
${chrome(options.lang, options.slug)}
<main>${options.body}</main>
${footer(options.lang)}
<amp-analytics type="gtag" data-credentials="include">
<script type="application/json">{"vars":{"gtag_id":"G-JZTKS2G7PS","config":{"G-JZTKS2G7PS":{"groups":"default"}}}}</script>
</amp-analytics>
</body>
</html>`;
}

function homeBody(lang: Lang) {
  const hi = lang === "hi";
  const title = hi ? "श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर मांधाता मध्य प्रदेश" : "Shri Omkareshwar Jyotirlinga Temple Mandhata Madhya Pradesh";
  const h1 = hi ? "श्री ओंकारेश्वर ज्योतिर्लिंग" : "Shri Omkareshwar Jyotirlinga";
  const line = hi ? "मंदिर, दर्शन और नर्मदा गाइड" : "Temple, Darshan and Narmada Guide";
  const lead = hi
    ? "नर्मदा के मांधाता द्वीप पर ज्योतिर्लिंग की शोध पर आधारित गाइड। मंदिर के घंटे, लाइव दर्शन, इंदौर की सड़क, और ट्रस्ट की सेवा तथा निजी होटल के कमरे का फर्क।"
    : "A research-backed guide to the Jyotirlinga on Mandhata island in the Narmada. Temple hours, live darshan, the road from Indore, and the difference between the trust’s services and a private hotel room.";
  const rows = liveSessions
    .map(([en, hindi, time]) => `<tr><td>${esc(hi ? hindi : en)}</td><td>${esc(time)}</td></tr>`)
    .join("");
  const body = `
    <p class="kicker">${hi ? "चौथा ज्योतिर्लिंग · नर्मदा" : "Fourth Jyotirlinga · Narmada"}</p>
    <h1>${esc(h1)}</h1>
    <p class="line">${esc(line)}</p>
    <p>${esc(lead)}</p>
    ${photo("temple", lang)}
    <h2>${hi ? "लाइव दर्शन" : "Live Darshan"}</h2>
    <p>${hi ? "यह प्लेयर मंदिर ट्रस्ट की यूट्यूब लाइव धारा है। यह साइट कैमरा नहीं चलाती।" : "This player is the temple trust’s YouTube live stream. This site does not run the camera."}</p>
    <amp-iframe width="640" height="360" layout="responsive" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" allowfullscreen frameborder="0" src="${esc(officialSources.youtubeLive)}">
      <amp-img layout="fill" src="${esc(media.temple.src)}" placeholder alt=""></amp-img>
    </amp-iframe>
    <table><caption>${hi ? "आधिकारिक लाइव पृष्ठ के कैमरा सत्र" : "Camera sessions on the official live page"}</caption><tbody>${rows}</tbody></table>
    <p><a href="${esc(absoluteUrl(pathFor(lang, "")))}">${hi ? "पूरा पृष्ठ" : "Full page"}</a></p>`;
  return documentShell({
    lang,
    title,
    description: site.description[lang],
    canonicalPath: pathFor(lang, ""),
    slug: "",
    body,
    iframe: true,
  });
}

function pageBody(lang: Lang, slug: string) {
  const page = getPage(slug);
  if (!page) return null;
  const copy = page[lang];
  const related = page.related
    .map((item) => getPage(item))
    .flatMap((item) =>
      item
        ? [`<li><a href="${esc(ampHref(pathFor(lang, item.slug)))}">${esc(item[lang].h1)}</a></li>`]
        : [],
    )
    .join("");
  const listedSources = page.sources.filter((key) => key !== "mpTourism");
  const templeListed = listedSources.some((key) => isTempleSiteUrl(officialSources[key]));
  const sources = [
    templeListed ? `<li>${esc(templeSiteText)}</li>` : "",
    ...listedSources
      .filter((key) => !isTempleSiteUrl(officialSources[key]))
      .map(
        (key) =>
          `<li><a href="${esc(officialSources[key])}" target="_blank" rel="nofollow noopener noreferrer">${esc(sourceCatalog[key][lang])}</a></li>`,
      ),
  ].join("");
  const faqs = copy.faqs
    .map((item) => `<h3>${esc(item.q)}</h3><p>${rich(item.a, lang)}</p>`)
    .join("");
  const body = `
    <p class="kicker">${esc(copy.kicker)}</p>
    <h1>${esc(copy.h1)}</h1>
    <p>${rich(copy.answer, lang)}</p>
    ${page.image ? photo(page.image, lang) : ""}
    ${blocks(copy.blocks, lang)}
    ${sources ? `<h2>${lang === "en" ? "Sources" : "स्रोत"}</h2><ul>${sources}</ul>` : ""}
    ${faqs ? `<h2>${lang === "en" ? "Questions" : "प्रश्न"}</h2>${faqs}` : ""}
    ${related ? `<h2>${lang === "en" ? "Related pages" : "संबंधित पृष्ठ"}</h2><ul>${related}</ul>` : ""}
    <p><a href="${esc(absoluteUrl(pathFor(lang, slug)))}">${lang === "en" ? "Full page" : "पूरा पृष्ठ"}</a></p>`;
  return documentShell({
    lang,
    title: copy.title,
    description: copy.description,
    canonicalPath: pathFor(lang, slug),
    slug,
    body,
    iframe: false,
  });
}

export function ampDocument(pathname: string) {
  const parsed = parsePath(pathname);
  if (!parsed) return null;
  if (!parsed.slug) return homeBody(parsed.lang);
  return pageBody(parsed.lang, parsed.slug);
}
