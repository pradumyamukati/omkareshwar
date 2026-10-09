import Link from "next/link";
import { getPage } from "@/lib/content";
import { liveSessions, place, schedule } from "@/lib/facts";
import { officialSources, templeSiteText } from "@/lib/official";
import { pathFor } from "@/lib/paths";
import { homeJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/types";
import { Blocks } from "./Article";
import { HomeCarousel } from "./HomeCarousel";
import { ExternalLink, RichText } from "./RichText";
import { JsonLd } from "./JsonLd";

const faqs = {
  en: [
    ["Where is Omkareshwar?", "On Mandhata island in the Narmada, Khandwa district, Madhya Pradesh, PIN 450554."],
    ["How far is Omkareshwar from Indore?", "About 77 km on the temple trust’s pages, and about 80 km on the Madhya Pradesh Tourism page."],
    ["What are Omkareshwar Temple timings?", "The daily darshan page lists aarti at 4:30 AM, darshan from 5:00 AM, a bhog closure at 12:20 PM, and shayan darshan at 10:00–10:30 PM. Recheck that page; the live page prints a shorter evening."],
    ["How can I watch Omkareshwar Live Darshan?", "The homepage plays the temple trust’s YouTube live stream, the same channel their official live page embeds. This site does not run the camera and does not show a live or offline badge."],
    ["What is the story of Omkareshwar Jyotirlinga?", "The trust calls it the fourth Jyotirlinga and names the Skanda, Shiva and Vayu Puranas. The island is traditionally compared with the syllable Om. That is religious tradition."],
  ],
  hi: [
    ["ओंकारेश्वर कहाँ है?", "नर्मदा के मांधाता द्वीप पर, जिला खंडवा, मध्य प्रदेश, पिन 450554।"],
    ["इंदौर से ओंकारेश्वर कितनी दूर है?", "मंदिर ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर, मध्य प्रदेश पर्यटन पर लगभग 80 किलोमीटर।"],
    ["ओंकारेश्वर मंदिर का समय क्या है?", "दैनिक दर्शन पृष्ठ आरती सुबह 4:30, दर्शन सुबह 5:00 से, भोग-बंद दोपहर 12:20, और शयन दर्शन रात 10:00–10:30 लिखता है। उस पृष्ठ को फिर देखें; लाइव पृष्ठ पर शाम छोटी है।"],
    ["ओंकारेश्वर लाइव दर्शन कैसे देखें?", "मुखपृष्ठ पर मंदिर ट्रस्ट की यूट्यूब लाइव धारा चलती है, वही चैनल जिसे उनकी आधिकारिक लाइव पृष्ठ जोड़ता है। यह साइट कैमरा नहीं चलाती और लाइव या बंद का चिह्न नहीं दिखाती।"],
    ["ओंकारेश्वर ज्योतिर्लिंग की कथा क्या है?", "ट्रस्ट इसे चौथा ज्योतिर्लिंग कहता है और स्कंद, शिव तथा वायु पुराण का नाम लेता है। द्वीप परंपरा से ॐ जैसा है। यह धार्मिक परंपरा है।"],
  ],
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const hi = lang === "hi";
  const t = (en: string, hindi: string) => (hi ? hindi : en);
  const guide = getPage("omkareshwar-complete-guide")?.[lang];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs[lang].map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div id="content">
      <JsonLd data={homeJsonLd(lang)} />
      <JsonLd data={faqLd} />

      <HomeCarousel lang={lang} />

      <section className="hero hero-text">
        <div className="hero-copy">
          <p className="hero-kicker">{t("Fourth Jyotirlinga · Narmada", "चौथा ज्योतिर्लिंग · नर्मदा")}</p>
          <p className="hero-om">ॐ {hi ? "ओंकारेश्वर" : "OMKARESHWAR"}</p>
          <h1>{t("Shri Omkareshwar Jyotirlinga", "श्री ओंकारेश्वर ज्योतिर्लिंग")}</h1>
          <p className="hero-line">{t("Temple, Darshan and Narmada Guide", "मंदिर, दर्शन और नर्मदा गाइड")}</p>
          <p>
            {t(
              "A research-backed guide to the Jyotirlinga on Mandhata island in the Narmada. Temple hours, live darshan, and the road from Indore.",
              "नर्मदा के मांधाता द्वीप पर ज्योतिर्लिंग की शोध पर आधारित गाइड। मंदिर के घंटे, लाइव दर्शन, और इंदौर की सड़क।",
            )}
          </p>
          <p className="tagline">{site.tagline[lang]}</p>
          <div className="hero-actions">
            <a className="button primary" href="#live-darshan">
              {t("Live Darshan", "लाइव दर्शन")}
            </a>
          </div>
        </div>
      </section>

      <section id="live-darshan" className="split-section">
        <div className="split split-live">
          <div className="split-main">
            <p className="kicker">
              <span className="live-dot" aria-hidden="true" /> {t("Live Darshan", "लाइव दर्शन")}
            </p>
            <h2>{t("Live Darshan — Shri Omkareshwar Jyotirlinga", "लाइव दर्शन — श्री ओंकारेश्वर ज्योतिर्लिंग")}</h2>
            <p>
              {t(
                "The player is the YouTube live stream the Shri Omkareshwar Mandir Trust embeds on its own live darshan page. This site does not run the camera.",
                "यह प्लेयर वही यूट्यूब लाइव धारा है जिसे श्री ओंकारेश्वर मंदिर ट्रस्ट अपने लाइव दर्शन पृष्ठ पर जोड़ता है। यह साइट कैमरा नहीं चलाती।",
              )}
            </p>
            <div className="video-frame">
              <iframe
                src={officialSources.youtubeLive}
                title={t(
                  "Shri Omkareshwar official YouTube live darshan",
                  "श्री ओंकारेश्वर का आधिकारिक यूट्यूब लाइव दर्शन",
                )}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <aside className="split-card">
            <p className="verified">{t("Last verified", "अंतिम जाँच")}: {t("5 October 2026", "5 अक्टूबर 2026")}</p>
            <div className="table-wrap darshan-table session-table">
              <table>
                <caption>{t("Camera sessions printed on the official live page", "आधिकारिक लाइव पृष्ठ पर छपे कैमरा सत्र")}</caption>
                <thead>
                  <tr>
                    <th>{t("Session", "सत्र")}</th>
                    <th>{t("Time", "समय")}</th>
                  </tr>
                </thead>
                <tbody>
                  {liveSessions.map(([en, hindi, time]) => (
                    <tr key={en}>
                      <td>{hi ? hindi : en}</td>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              {t(
                "These are camera windows, not the full temple clock. Mangal darshan on the daily page starts at 5:00 AM.",
                "ये कैमरा खिड़कियाँ हैं, मंदिर की पूरी घड़ी नहीं। दैनिक पृष्ठ पर मंगल दर्शन सुबह 5:00 बजे शुरू होता है।",
              )}
            </p>
            <p className="site-url">{templeSiteText}</p>
            <div className="hero-actions">
              <ExternalLink className="button" href={officialSources.youtubeChannel}>
                {t("Official YouTube channel", "आधिकारिक यूट्यूब चैनल")}
              </ExternalLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="split-section">
        <div className="split split-place">
          <div className="split-main map-pane">
            <div className="map-frame">
              <iframe
                title={t("Map of Omkareshwar on Mandhata island", "मांधाता द्वीप पर ओंकारेश्वर का नक्शा")}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=76.135%2C22.230%2C76.167%2C22.257&layer=mapnik&marker=${place.latitude}%2C${place.longitude}`}
              />
            </div>
          </div>
          <div className="split-card">
            <h2>{t("Where is Omkareshwar?", "ओंकारेश्वर कहाँ है?")}</h2>
            <p className="answer">
              {t(
                "Omkareshwar is on Mandhata island in the Narmada, in Khandwa district of Madhya Pradesh, PIN 450554. The temple trust places the Jyotirlinga about 77 km from Indore. The island is also called Omkar Parvat.",
                "ओंकारेश्वर मध्य प्रदेश के खंडवा जिले में नर्मदा के मांधाता द्वीप पर है, पिन 450554। मंदिर ट्रस्ट ज्योतिर्लिंग को इंदौर से लगभग 77 किलोमीटर रखता है। द्वीप को ओंकार पर्वत भी कहते हैं।",
              )}
            </p>
            <dl className="facts">
              <div><dt>{t("State", "राज्य")}</dt><dd>{place.state[lang]}</dd></div>
              <div><dt>{t("District", "जिला")}</dt><dd>{place.district[lang]}</dd></div>
              <div><dt>{t("River", "नदी")}</dt><dd>{place.river[lang]}</dd></div>
              <div><dt>{t("Island", "द्वीप")}</dt><dd>{place.island[lang]}</dd></div>
              <div><dt>{t("From Indore", "इंदौर से")}</dt><dd>{t("About 77–80 km", "लगभग 77–80 किलोमीटर")}</dd></div>
              <div><dt>{t("Nearer station", "निकट स्टेशन")}</dt><dd>{t("Sanawad, 12 km", "सनावद, 12 किलोमीटर")}</dd></div>
              <div><dt>{t("Airport", "हवाई अड्डा")}</dt><dd>{t("Indore, 77 km on the trust’s table", "इंदौर, ट्रस्ट की तालिका पर 77 किलोमीटर")}</dd></div>
            </dl>
            <p>
              {hi ? (
                <>
                  <Link href={pathFor(lang, "where-is-omkareshwar")}>ओंकारेश्वर कहाँ है</Link>
                  {", "}
                  <Link href={pathFor(lang, "omkareshwar-from-indore")}>इंदौर से रास्ता</Link>
                  {", और "}
                  <Link href={pathFor(lang, "how-to-reach-omkareshwar")}>ओंकारेश्वर कैसे पहुँचें</Link>
                  {" — इन पृष्ठों पर पूरा स्थान है।"}
                </>
              ) : (
                <>
                  See <Link href={pathFor(lang, "where-is-omkareshwar")}>where Omkareshwar is</Link>
                  {", the "}
                  <Link href={pathFor(lang, "omkareshwar-from-indore")}>road from Indore</Link>
                  {", and "}
                  <Link href={pathFor(lang, "how-to-reach-omkareshwar")}>how to reach Omkareshwar</Link>.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>{t("Temple and darshan", "मंदिर और दर्शन")}</h2>
        <p className="answer">
          {t(
            "Normal darshan is free. Shighra Darshan is optional and official only on the trust’s website. On 5 October 2026 the Shighra page showed ₹300 a person.",
            "सामान्य दर्शन मुफ्त है। शीघ्र दर्शन वैकल्पिक है और केवल ट्रस्ट की वेबसाइट पर आधिकारिक है। 5 अक्टूबर 2026 को शीघ्र पृष्ठ पर ₹300 प्रति व्यक्ति दिखा।",
          )}
        </p>
        <div className="table-wrap darshan-table">
          <table>
            <caption>{t("Temple and darshan", "मंदिर और दर्शन")}</caption>
            <thead>
              <tr>
                <th>{t("Time", "समय")}</th>
                <th>{t("Darshan", "दर्शन")}</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(([time, en, hindi]) => (
                <tr key={time} className={time.startsWith("12:20") ? "is-closed" : undefined}>
                  <td>{time}</td>
                  <td>{hi ? hindi : en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          {hi ? (
            <>
              यात्रा से पहले{" "}
              <Link href={pathFor(lang, "omkareshwar-temple")}>ओंकारेश्वर मंदिर</Link>
              {", "}
              <Link href={pathFor(lang, "omkareshwar-darshan")}>दर्शन</Link>
              {" और "}
              <Link href={pathFor(lang, "omkareshwar-temple-timings")}>मंदिर का समय</Link>
              {" पढ़ें। "}
              <Link href={pathFor(lang, "mamleshwar-temple")}>ममलेश्वर</Link>
              {" दक्षिणी तट का मंदिर है, और "}
              <Link href={pathFor(lang, "omkareshwar-parikrama")}>ओंकारेश्वर परिक्रमा</Link>
              {" द्वीप को नर्मदा के साथ नापती है।"}
            </>
          ) : (
            <>
              Read the <Link href={pathFor(lang, "omkareshwar-temple")}>Omkareshwar temple</Link>
              {" page, the "}
              <Link href={pathFor(lang, "omkareshwar-darshan")}>darshan</Link>
              {" page, and the "}
              <Link href={pathFor(lang, "omkareshwar-temple-timings")}>temple timings</Link>
              {" before you travel. "}
              <Link href={pathFor(lang, "mamleshwar-temple")}>Mamleshwar</Link>
              {" is the south-bank shrine, and the "}
              <Link href={pathFor(lang, "omkareshwar-parikrama")}>Omkareshwar parikrama</Link>
              {" walks the island with the Narmada."}
            </>
          )}
        </p>
      </section>

      {guide ? (
        <section>
          <p className="kicker">{guide.kicker}</p>
          <h2>{guide.h1}</h2>
          <p className="answer">
            <RichText text={guide.answer} lang={lang} />
          </p>
          <Blocks blocks={guide.blocks} lang={lang} />
        </section>
      ) : null}

      <section className="faq">
        <h2>{t("Questions", "प्रश्न")}</h2>
        {faqs[lang].map(([q, a]) => (
          <div key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
        <p>
          <Link href={pathFor(lang, "omkareshwar-faq")}>{t("All questions", "सभी प्रश्न")}</Link>
        </p>
      </section>
    </div>
  );
}
