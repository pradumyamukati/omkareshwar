"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { footerGroups, nav } from "@/lib/nav";
import { pathFor } from "@/lib/paths";
import { officialSources, templeSiteText } from "@/lib/official";
import { independenceNotice } from "@/lib/site";
import type { Lang } from "@/lib/types";
import { ExternalLink } from "./RichText";

function usePageLang() {
  const path = usePathname() || "/";
  const isHi = path === "/hi" || path.startsWith("/hi/");
  const slug = isHi ? path.replace(/^\/hi\/?/, "") : path.replace(/^\//, "");
  const lang: Lang = isHi ? "hi" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return { lang, slug };
}

export function Header() {
  const { lang, slug } = usePageLang();
  const home = pathFor(lang, "");
  const menu = [
    { href: "", en: "Home", hi: "मुखपृष्ठ" },
    ...nav,
    { href: "#live-darshan", en: "Live Darshan", hi: "लाइव दर्शन" },
  ];
  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {lang === "en" ? "Skip to content" : "सामग्री पर जाएँ"}
      </a>
      <div className="header-top">
        <div className="header-social">
          <details className="mobile-menu">
            <summary aria-label={lang === "en" ? "Menu" : "मेनू"}>
              <span className="hamburger" />
            </summary>
            <nav aria-label={lang === "en" ? "Mobile" : "मोबाइल"}>
              {menu.map((item) => (
                <Link key={item.en} href={item.href === "#live-darshan" ? `${home}#live-darshan` : pathFor(lang, item.href)}>
                  {item[lang]}
                </Link>
              ))}
              <Link href={pathFor(lang, "latest-omkareshwar-news")}>
                {lang === "en" ? "Latest updates" : "ताज़ा अपडेट"}
              </Link>
            </nav>
          </details>
          <ExternalLink className="social-link" href={officialSources.youtubeChannel}>
            <span className="sr-only">{lang === "en" ? "Official YouTube channel" : "आधिकारिक यूट्यूब चैनल"}</span>
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path
                fill="currentColor"
                d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z"
              />
            </svg>
          </ExternalLink>
        </div>
        <Link className="brand" href={home}>
          <span className="brand-mark">॥ ॐ ॥</span>
          <span className={lang === "en" ? "brand-name" : "brand-name brand-name-hi"}>
            {lang === "en" ? "Omkareshwar" : "ओंकारेश्वर"}
          </span>
        </Link>
        <div className="header-end">
          <nav className="lang-tabs" aria-label={lang === "en" ? "Language" : "भाषा"}>
            <Link
              href={pathFor("en", slug)}
              hrefLang="en"
              lang="en"
              className={lang === "en" ? "is-current" : undefined}
              aria-current={lang === "en" ? "page" : undefined}
            >
              English
            </Link>
            <Link
              href={pathFor("hi", slug)}
              hrefLang="hi"
              lang="hi"
              className={lang === "hi" ? "is-current" : undefined}
              aria-current={lang === "hi" ? "page" : undefined}
            >
              हिन्दी
            </Link>
          </nav>
        </div>
      </div>
      <nav className="header-nav desktop-nav" aria-label={lang === "en" ? "Primary" : "मुख्य"}>
        {menu.map((item) => {
          const current = item.href === "#live-darshan" ? false : slug === item.href;
          return (
            <Link
              key={item.en}
              href={item.href === "#live-darshan" ? `${home}#live-darshan` : pathFor(lang, item.href)}
              className={current ? "is-current" : undefined}
              aria-current={current ? "page" : undefined}
            >
              {item[lang]}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export function Footer() {
  const { lang } = usePageLang();
  return (
    <footer className="site-footer">
      <p className="footer-line">
        {lang === "en"
          ? "This is not the official Omkareshwar temple website. "
          : "यह ओंकारेश्वर की आधिकारिक वेबसाइट नहीं है। "}
        {templeSiteText}
      </p>
      <div className="footer-notice">
        <p>{independenceNotice[lang]}</p>
        <p>
          {templeSiteText}
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
