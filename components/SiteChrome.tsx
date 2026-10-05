import Link from "next/link";
import { headers } from "next/headers";
import { footerGroups, nav } from "@/lib/nav";
import { pathFor } from "@/lib/paths";
import { officialSources } from "@/lib/official";
import { independenceNotice } from "@/lib/site";
import type { Lang } from "@/lib/types";
import { ExternalLink } from "./RichText";

async function requestLang(): Promise<{ lang: Lang; slug: string }> {
  const headerList = await headers();
  const path = headerList.get("x-pathname") || "/";
  const isHi = path === "/hi" || path.startsWith("/hi/");
  const slug = isHi ? path.replace(/^\/hi\/?/, "") : path.replace(/^\//, "");
  return { lang: isHi ? "hi" : "en", slug };
}

export async function Header() {
  const { lang, slug } = await requestLang();
  const other = lang === "en" ? "hi" : "en";
  const home = pathFor(lang, "");
  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {lang === "en" ? "Skip to content" : "सामग्री पर जाएँ"}
      </a>
      <div className="header-bar">
        <Link className="brand" href={home}>
          <span className="brand-om" aria-hidden="true">
            ॐ
          </span>
          <span>{lang === "en" ? "Omkareshwar" : "ओंकारेश्वर"}</span>
        </Link>
        <nav className="desktop-nav" aria-label={lang === "en" ? "Primary" : "मुख्य"}>
          {nav.map((item) => (
            <Link key={item.href} href={pathFor(lang, item.href)}>
              {item[lang]}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <Link className="lang-switch" href={pathFor(other, slug)} hrefLang={other} lang={other}>
            {lang === "en" ? "हिन्दी" : "EN"}
          </Link>
          <Link className="live-link" href={`${home}#live-darshan`}>
            <span className="live-dot" aria-hidden="true" />
            {lang === "en" ? "Live Darshan" : "लाइव दर्शन"}
          </Link>
          <details className="mobile-menu">
            <summary>{lang === "en" ? "Menu" : "मेनू"}</summary>
            <nav aria-label={lang === "en" ? "Mobile" : "मोबाइल"}>
              {nav.map((item) => (
                <Link key={item.href} href={pathFor(lang, item.href)}>
                  {item[lang]}
                </Link>
              ))}
              <Link href={pathFor(lang, "latest-omkareshwar-news")}>
                {lang === "en" ? "Latest updates" : "ताज़ा अपडेट"}
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export async function Footer() {
  const { lang } = await requestLang();
  return (
    <footer className="site-footer">
      <p className="footer-line">
        {lang === "en"
          ? "This is not the official Omkareshwar temple website. "
          : "यह ओंकारेश्वर की आधिकारिक वेबसाइट नहीं है। "}
        <ExternalLink href={officialSources.templeWebsite}>
          {lang === "en" ? "Official site" : "आधिकारिक साइट"}
        </ExternalLink>
      </p>
      <div className="footer-notice">
        <p>{independenceNotice[lang]}</p>
        <p>
          <ExternalLink href={officialSources.templeWebsite}>
            {lang === "en" ? "Official temple website" : "आधिकारिक मंदिर वेबसाइट"}
          </ExternalLink>
        </p>
      </div>
      <div className="footer-grid">
        {footerGroups.map((group) => (
          <div key={group.en}>
            <h2>{group[lang]}</h2>
            <ul>
              {group.links.map(([slug, en, hi]) => (
                <li key={slug}>
                  <Link href={pathFor(lang, slug)}>{lang === "en" ? en : hi}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="footer-end">
        © {new Date().getFullYear()} Omkareshwar.co.{" "}
        {lang === "en"
          ? "An independent guide. Not a temple, government, or hotel booking site."
          : "एक स्वतंत्र गाइड। यह मंदिर, सरकारी या होटल बुकिंग साइट नहीं है।"}
      </p>
    </footer>
  );
}
