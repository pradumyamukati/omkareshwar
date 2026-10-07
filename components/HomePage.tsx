import Link from "next/link";
import { liveSessions, place, schedule } from "@/lib/facts";
import { officialSources } from "@/lib/official";
import { pathFor } from "@/lib/paths";
import { homeJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/types";
import { ExternalLink } from "./RichText";
import { JsonLd } from "./JsonLd";
import { Photo } from "./Photo";
import { TripPlanner } from "./TripPlanner";

const faqs = {
  en: [
    ["Where is Omkareshwar?", "On Mandhata island in the Narmada, Khandwa district, Madhya Pradesh, PIN 450554."],
    ["How far is Omkareshwar from Indore?", "About 77 km on the temple trust’s pages, and about 80 km on the Madhya Pradesh Tourism page."],
    ["What are Omkareshwar Temple timings?", "The daily darshan page lists aarti at 4:30 AM, darshan from 5:00 AM, a bhog closure at 12:20 PM, and shayan darshan at 10:00–10:30 PM. Recheck that page; the live page prints a shorter evening."],
    ["How can I watch Omkareshwar Live Darshan?", "The homepage plays the temple trust’s YouTube live stream, the same channel their official live page embeds. This site does not run the camera and does not show a live or offline badge."],
    ["What is the story of Omkareshwar Jyotirlinga?", "The trust calls it the fourth Jyotirlinga and names the Skanda, Shiva and Vayu Puranas. The island is traditionally compared with the syllable Om. That is religious tradition."],
    ["How to reach Omkareshwar by train?", "The trust names Sanawad at 12 km and Khandwa Junction at 72 km. They are different stations."],
    ["What are the places to visit?", "The Jyotirlinga, Mamleshwar, the sangam and the parikrama. State tourism also names Siddhanath, Gauri Somnath and Ekatma Dham."],
    ["What is Omkareshwar Parikrama?", "A walk of about 7 km around Mandhata, with Narmada water, as the trust describes it."],
    ["Where can I stay in Omkareshwar?", "The trust’s own stay is Shri Ji Vishramalaya. Private hotels are separate. This site books neither."],
  ],
  hi: [
    ["ओंकारेश्वर कहाँ है?", "नर्मदा के मांधाता द्वीप पर, जिला खंडवा, मध्य प्रदेश, पिन 450554।"],
    ["इंदौर से ओंकारेश्वर कितनी दूर है?", "मंदिर ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर, मध्य प्रदेश पर्यटन पर लगभग 80 किलोमीटर।"],
    ["ओंकारेश्वर मंदिर का समय क्या है?", "दैनिक दर्शन पृष्ठ आरती सुबह 4:30, दर्शन सुबह 5:00 से, भोग-बंद दोपहर 12:20, और शयन दर्शन रात 10:00–10:30 लिखता है। उस पृष्ठ को फिर देखें; लाइव पृष्ठ पर शाम छोटी है।"],
    ["ओंकारेश्वर लाइव दर्शन कैसे देखें?", "मुखपृष्ठ पर मंदिर ट्रस्ट की यूट्यूब लाइव धारा चलती है, वही चैनल जिसे उनकी आधिकारिक लाइव पृष्ठ जोड़ता है। यह साइट कैमरा नहीं चलाती और लाइव या बंद का चिह्न नहीं दिखाती।"],
    ["ओंकारेश्वर ज्योतिर्लिंग की कथा क्या है?", "ट्रस्ट इसे चौथा ज्योतिर्लिंग कहता है और स्कंद, शिव तथा वायु पुराण का नाम लेता है। द्वीप परंपरा से ॐ जैसा है। यह धार्मिक परंपरा है।"],
    ["रेल से ओंकारेश्वर कैसे पहुँचें?", "ट्रस्ट सनावद 12 किलोमीटर और खंडवा जंक्शन 72 किलोमीटर बताता है। दोनों अलग स्टेशन हैं।"],
    ["घूमने के स्थान कौन से हैं?", "ज्योतिर्लिंग, ममलेश्वर, संगम और परिक्रमा। राज्य पर्यटन सिद्धनाथ, गौरी सोमनाथ और एकात्म धाम भी लिखता है।"],
    ["ओंकारेश्वर परिक्रमा क्या है?", "मांधाता के चारों ओर लगभग 7 किलोमीटर की चाल, नर्मदा जल के साथ, जैसा ट्रस्ट बताता है।"],
    ["ओंकारेश्वर में ठहरें कहाँ?", "ट्रस्ट का अपना ठहरना श्री जी विश्रामालय है। निजी होटल अलग हैं। यह साइट दोनों नहीं बुक करती।"],
  ],
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const hi = lang === "hi";
  const t = (en: string, hindi: string) => (hi ? hindi : en);
  const plans = hi
    ? [
        { city: "indore", days: "1", party: "general", title: "इंदौर से एक दिन", text: "77–80 किलोमीटर की सड़क। एक खुला दर्शन-खंड लें। दोपहर 12:20 का भोग बचें। परिक्रमा न जोड़ें। सुबह 4:30 की आरती के लिए यहीं सोना होगा।" },
        { city: "indore", days: "1", party: "family", title: "इंदौर से एक दिन, परिवार", text: "एक कतार और एक कार। बुजुर्गों को पहाड़ी की पूरी चाल न दें। 12 वर्ष से छोटे बच्चे का शीघ्र टिकट ट्रस्ट मना करता है।" },
        { city: "indore", days: "2", party: "general", title: "इंदौर से दो दिन", text: "पहले दिन खुला दर्शन, रात जूता-घर की पहुँच में, दूसरे दिन मंगला आरती या सुबह 5 बजे की कतार, फिर ममलेश्वर या परिक्रमा का अंश।" },
        { city: "ujjain", days: "2", party: "general", title: "उज्जैन से दो सुबह", text: "उज्जैन 140 किलोमीटर है और महाकालेश्वर अलग ज्योतिर्लिंग है। दोनों को एक सुबह में न समेटें।" },
        { city: "khandwa", days: "1", party: "general", title: "खंडवा जंक्शन से", text: "जंक्शन 72 या 77 किलोमीटर है। सनावद 12 किलोमीटर है। गलत स्टेशन आखिरी दूरी बदल देता है।" },
        { city: "bhopal", days: "2", party: "family", title: "भोपाल से रात के साथ", text: "ट्रस्ट भोपाल का किलोमीटर नहीं छापता। लंबी सड़क मानें, उजाले में पहुँचें, और सुबह बचाकर रखें।" },
      ]
    : [
        { city: "indore", days: "1", party: "general", title: "One day from Indore", text: "The road is about 77–80 km. Take one open darshan block. Avoid arriving into the 12:20 PM bhog closure. Do not add the parikrama. The 4:30 AM aarti needs a night here." },
        { city: "indore", days: "1", party: "family", title: "One day from Indore, with family", text: "One queue and a car. Do not give elders the whole hill. The trust says not to buy a Shighra ticket for a child under 12." },
        { city: "indore", days: "2", party: "general", title: "Two days from Indore", text: "An open block on the first day, a night within reach of the shoe stand, then mangal aarti or the 5:00 AM queue, and Mamleshwar or part of the parikrama." },
        { city: "ujjain", days: "2", party: "general", title: "Two mornings from Ujjain", text: "Ujjain is 140 km, and Mahakaleshwar is a different Jyotirlinga. Do not fold both into one morning." },
        { city: "khandwa", days: "1", party: "general", title: "From Khandwa Junction", text: "The junction is 72 or 77 km. Sanawad is 12 km. The wrong station changes the last road." },
        { city: "bhopal", days: "2", party: "family", title: "From Bhopal, with a night", text: "The trust does not print a Bhopal kilometre. Treat it as a long road, arrive in daylight, and keep a morning." },
      ];

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

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">{t("Fourth Jyotirlinga · Narmada", "चौथा ज्योतिर्लिंग · नर्मदा")}</p>
          <p className="hero-om">ॐ {hi ? "ओंकारेश्वर" : "OMKARESHWAR"}</p>
          <h1>{t("Shri Omkareshwar Jyotirlinga", "श्री ओंकारेश्वर ज्योतिर्लिंग")}</h1>
          <p className="hero-line">{t("Temple, Darshan and Narmada Guide", "मंदिर, दर्शन और नर्मदा गाइड")}</p>
          <p>
            {t(
              "A research-backed guide to the Jyotirlinga on Mandhata island in the Narmada. Temple hours, live darshan, the road from Indore, and the difference between the trust’s services and a private hotel room.",
              "नर्मदा के मांधाता द्वीप पर ज्योतिर्लिंग की शोध पर आधारित गाइड। मंदिर के घंटे, लाइव दर्शन, इंदौर की सड़क, और ट्रस्ट की सेवा तथा निजी होटल के कमरे का फर्क।",
            )}
          </p>
          <p className="tagline">{site.tagline[lang]}</p>
          <div className="hero-actions">
            <a className="button primary" href="#live-darshan">
              {t("Live Darshan", "लाइव दर्शन")}
            </a>
            <Link className="button" href={pathFor(lang, "omkareshwar-temple")}>
              {t("Temple Guide", "मंदिर गाइड")}
            </Link>
            <Link className="button" href={pathFor(lang, "how-to-reach-omkareshwar")}>
              {t("How to Reach", "कैसे पहुँचें")}
            </Link>
          </div>
        </div>
        <Photo id="temple" lang={lang} priority cover sizes="(max-width: 900px) 100vw, 46vw" />
      </section>

      <section id="live-darshan" className="band">
        <p className="kicker">
          <span className="live-dot" aria-hidden="true" /> {t("Live Darshan", "लाइव दर्शन")}
        </p>
        <h2>{t("Live Darshan — Shri Omkareshwar Jyotirlinga", "लाइव दर्शन — श्री ओंकारेश्वर ज्योतिर्लिंग")}</h2>
        <p className="answer">
          {t(
            "The player below is the YouTube live stream the Shri Omkareshwar Mandir Trust embeds on its own live darshan page. This site does not run the camera and does not show a live or offline badge, because a badge we could not verify minute by minute would be false.",
            "नीचे वाला प्लेयर वही यूट्यूब लाइव धारा है जिसे श्री ओंकारेश्वर मंदिर ट्रस्ट अपने लाइव दर्शन पृष्ठ पर जोड़ता है। यह साइट कैमरा नहीं चलाती और लाइव या बंद का चिह्न नहीं दिखाती, क्योंकि जिसे हम मिनट-मिनट जाँच न सकें वह चिह्न झूठ होगा।",
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
        <p className="verified">{t("Last verified", "अंतिम जाँच")}: {t("5 October 2026", "5 अक्टूबर 2026")}</p>
        <div className="table-wrap">
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
        <div className="hero-actions">
          <ExternalLink className="button primary" href={officialSources.liveDarshan}>
            {t("Official Live Darshan — Watch on Official Website", "आधिकारिक लाइव दर्शन — आधिकारिक वेबसाइट पर देखें")}
          </ExternalLink>
          <ExternalLink className="button" href={officialSources.youtubeChannel}>
            {t("Official YouTube channel", "आधिकारिक यूट्यूब चैनल")}
          </ExternalLink>
        </div>
      </section>

      <section>
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
        <div className="map-frame">
          <iframe
            title={t("Map of Omkareshwar on Mandhata island", "मांधाता द्वीप पर ओंकारेश्वर का नक्शा")}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=76.135%2C22.230%2C76.167%2C22.257&layer=mapnik&marker=${place.latitude}%2C${place.longitude}`}
          />
        </div>
        <p className="fine">
          {t(
            "The marker is the camera position of a photograph taken at the temple on 26 October 2021. It orients you. It is not a surveyed boundary.",
            "चिह्न 26 अक्टूबर 2021 को मंदिर पर ली गई तस्वीर का कैमरा स्थान है। यह दिशा देता है। नापी हुई सीमा नहीं है।",
          )}
        </p>
        <p>
          <Link href={pathFor(lang, "where-is-omkareshwar")}>{t("Full location page", "पूरा स्थान पृष्ठ")}</Link>
        </p>
      </section>

      <section>
        <h2>{t("The story of Omkareshwar", "ओंकारेश्वर की कथा")}</h2>
        <p>
          {t(
            "According to the temple trust, this is the fourth of the twelve Jyotirlingas, and its glory is told in the Skanda Purana, the Shiva Purana and the Vayu Purana. According to tradition, Mandhata’s outline is the syllable Om, and Mamleshwar on the south bank belongs to the same sacred presence. The trust says it is believed Shiva rests here after the three worlds, which is why the day ends in shayan darshan. That is religion, told as religion.",
            "मंदिर ट्रस्ट के अनुसार यह बारह ज्योतिर्लिंगों में चौथा है, और इसकी महिमा स्कंद पुराण, शिव पुराण और वायु पुराण में है। परंपरा के अनुसार मांधाता की आकृति ॐ है, और दक्षिणी तट का ममलेश्वर उसी पवित्र उपस्थिति का है। ट्रस्ट कहता है कि मान्यता है, तीनों लोकों के बाद शिव यहाँ विश्राम करते हैं, इसलिए दिन शयन दर्शन पर खत्म होता है। यह धर्म है, धर्म की तरह कहा गया।",
          )}
        </p>
        <p>
          <Link href={pathFor(lang, "omkareshwar-jyotirlinga-story")}>{t("Read the story carefully", "कथा सावधानी से पढ़ें")}</Link>
        </p>
      </section>

      <section>
        <h2>{t("Why Omkareshwar is sacred", "ओंकारेश्वर पवित्र क्यों है")}</h2>
        <ul className="sacred">
          <li>{t("A Jyotirlinga of Shiva on an island the river holds.", "शिव का ज्योतिर्लिंग, उस द्वीप पर जिसे नदी थामे है।")}</li>
          <li>{t("One yatra with two doors: the island shrine and Mamleshwar.", "एक यात्रा, दो द्वार: द्वीप का मंदिर और ममलेश्वर।")}</li>
          <li>{t("A parikrama of about 7 km walked with Narmada water.", "नर्मदा जल के साथ लगभग 7 किलोमीटर की परिक्रमा।")}</li>
          <li>{t("A shayan rite the trust ties to Shiva’s rest.", "शयन की विधि, जिसे ट्रस्ट शिव के विश्राम से जोड़ता है।")}</li>
        </ul>
        <p>
          <Link href={pathFor(lang, "omkareshwar-jyotirlinga")}>{t("The Jyotirlinga, stated plainly", "ज्योतिर्लिंग, सीधे शब्दों में")}</Link>
        </p>
      </section>

      <section>
        <h2>{t("Omkareshwar photographs", "ओंकारेश्वर की तस्वीरें")}</h2>
        <p>
          {t(
            "A picture is called latest only when its date is known and recent. These are credited photographs from 2021, or a Commons file with no clear capture date. They are not today’s queue and not official temple media.",
            "तस्वीर को तभी ताज़ा कहा जाता है जब तिथि पता हो और हाल की हो। ये 2021 की श्रेय वाली तस्वीरें हैं, या एक ऐसी कॉमन्स फ़ाइल जिसकी स्पष्ट तस्वीर-तिथि नहीं। ये आज की कतार नहीं और मंदिर का आधिकारिक मीडिया नहीं।",
          )}
        </p>
        <div className="gallery">
          <Photo id="temple" lang={lang} />
          <Photo id="aerial" lang={lang} />
          <Photo id="mamleshwar" lang={lang} />
        </div>
      </section>

      <section>
        <h2>{t("Experience Omkareshwar", "ओंकारेश्वर का अनुभव")}</h2>
        <p>
          {t(
            "The live picture is the temple trust’s own YouTube channel, in the section above. An unrelated clip is not called darshan here. Read the state tourism account, then walk the pages that name a place.",
            "लाइव तस्वीर ऊपर वाले खंड में मंदिर ट्रस्ट का अपना यूट्यूब चैनल है। असंबंधित क्लिप को यहाँ दर्शन नहीं कहा जाता। राज्य पर्यटन का विवरण पढ़ें, फिर उस पृष्ठ पर जाएँ जो स्थान का नाम लेता है।",
          )}
        </p>
        <div className="hero-actions">
          <ExternalLink className="button" href={officialSources.liveDarshan}>
            {t("Official live darshan", "आधिकारिक लाइव दर्शन")}
          </ExternalLink>
          <ExternalLink className="button" href={officialSources.mpTourism}>
            {t("Madhya Pradesh Tourism", "मध्य प्रदेश पर्यटन")}
          </ExternalLink>
          <Link className="button" href={pathFor(lang, "omkareshwar-parikrama")}>
            {t("Parikrama", "परिक्रमा")}
          </Link>
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
        <div className="table-wrap">
          <table>
            <caption>{t("Daily darshan page", "दैनिक दर्शन पृष्ठ")}</caption>
            <tbody>
              {schedule.map(([time, en, hindi]) => (
                <tr key={time}>
                  <td>{time}</td>
                  <td>{hi ? hindi : en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="verified">{t("Last verified", "अंतिम जाँच")}: {t("5 October 2026", "5 अक्टूबर 2026")}</p>
        <div className="card-row">
          <Link href={pathFor(lang, "omkareshwar-temple")}>{t("Temple", "मंदिर")}</Link>
          <Link href={pathFor(lang, "omkareshwar-darshan")}>{t("Darshan", "दर्शन")}</Link>
          <Link href={pathFor(lang, "omkareshwar-temple-timings")}>{t("Timings", "समय")}</Link>
          <Link href={pathFor(lang, "omkareshwar-vip-darshan")}>{t("Shighra / VIP", "शीघ्र / वीआईपी")}</Link>
        </div>
        <div className="hero-actions">
          <ExternalLink className="button primary" href={officialSources.darshanBooking}>
            {t("Official Booking", "आधिकारिक बुकिंग")}
          </ExternalLink>
          <ExternalLink className="button" href={officialSources.timetable}>
            {t("Official Information", "आधिकारिक जानकारी")}
          </ExternalLink>
        </div>
      </section>

      <section>
        <h2>{t("Places to visit", "घूमने के स्थान")}</h2>
        <div className="card-row">
          <Link href={pathFor(lang, "places-to-visit-in-omkareshwar")}>{t("All places", "सभी स्थान")}</Link>
          <Link href={pathFor(lang, "mamleshwar-temple")}>{t("Mamleshwar", "ममलेश्वर")}</Link>
          <Link href={pathFor(lang, "omkareshwar-parikrama")}>{t("Parikrama", "परिक्रमा")}</Link>
          <Link href={pathFor(lang, "narmada-ghat-omkareshwar")}>{t("Narmada ghat", "नर्मदा घाट")}</Link>
          <Link href={pathFor(lang, "siddhanath-temple-omkareshwar")}>{t("Siddhanath", "सिद्धनाथ")}</Link>
          <Link href={pathFor(lang, "gauri-somnath-temple")}>{t("Gauri Somnath", "गौरी सोमनाथ")}</Link>
        </div>
      </section>

      <section>
        <h2>{t("How to reach", "कैसे पहुँचें")}</h2>
        <p>
          {t(
            "The trust names Indore airport at 77 km, Sanawad at 12 km, Khandwa Junction at 72 km and Mortakka bus stand at 12 km. State tourism’s airport and Khandwa figures are a little different. Both are printed on the route pages.",
            "ट्रस्ट इंदौर हवाई अड्डा 77 किलोमीटर, सनावद 12, खंडवा जंक्शन 72 और मोरटक्का बस स्टैंड 12 किलोमीटर बताता है। राज्य पर्यटन के हवाई अड्डे और खंडवा के अंक थोड़े अलग हैं। दोनों मार्ग पृष्ठों पर छपे हैं।",
          )}
        </p>
        <div className="card-row">
          <Link href={pathFor(lang, "how-to-reach-omkareshwar")}>{t("All routes", "सभी मार्ग")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-indore")}>{t("Indore", "इंदौर")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-ujjain")}>{t("Ujjain", "उज्जैन")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-khandwa")}>{t("Khandwa", "खंडवा")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-bhopal")}>{t("Bhopal", "भोपाल")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-mumbai")}>{t("Mumbai", "मुंबई")}</Link>
          <Link href={pathFor(lang, "omkareshwar-from-delhi")}>{t("Delhi", "दिल्ली")}</Link>
        </div>
      </section>

      <section>
        <h2>{t("Hotels and dharamshala", "होटल और धर्मशाला")}</h2>
        <p className="answer">
          {t(
            "Private hotels are not temple services. The trust’s own lodging is Shri Ji Vishramalaya, about 1 km from the temple, booked on the official website. This guide does not take a room booking.",
            "निजी होटल मंदिर की सेवा नहीं हैं। ट्रस्ट का अपना ठहरना श्री जी विश्रामालय है, मंदिर से लगभग 1 किलोमीटर, आधिकारिक वेबसाइट पर बुक। यह गाइड कमरे की बुकिंग नहीं लेती।",
          )}
        </p>
        <div className="card-row">
          <Link href={pathFor(lang, "hotels-in-omkareshwar")}>{t("Hotels", "होटल")}</Link>
          <Link href={pathFor(lang, "hotels-near-omkareshwar-temple")}>{t("Near the temple", "मंदिर के पास")}</Link>
          <Link href={pathFor(lang, "omkareshwar-dharamshala")}>{t("Dharamshala", "धर्मशाला")}</Link>
          <Link href={pathFor(lang, "budget-hotels-omkareshwar")}>{t("Budget stays", "किफायती ठहरना")}</Link>
          <Link href={pathFor(lang, "family-hotels-omkareshwar")}>{t("Families", "परिवार")}</Link>
        </div>
        <p>
          <ExternalLink href={officialSources.vishramalaya}>{t("Official Vishramalaya information", "आधिकारिक विश्रामालय जानकारी")}</ExternalLink>
        </p>
      </section>

      <section>
        <h2>{t("Trip planner", "यात्रा योजना")}</h2>
        <p>
          {t(
            "Choose a starting city, a length and who is travelling. The notes stay practical. Nothing here is reserved.",
            "प्रस्थान शहर, अवधि और साथ का चयन करें। नोट व्यावहारिक रहते हैं। यहाँ कुछ आरक्षित नहीं होता।",
          )}
        </p>
        <TripPlanner lang={lang} plans={plans} />
        <p>
          <Link href={pathFor(lang, "omkareshwar-complete-guide")}>{t("Complete travel guide", "पूरी यात्रा गाइड")}</Link>
          {" · "}
          <Link href={pathFor(lang, "omkareshwar-trip")}>{t("Read the full trip pages", "पूरे यात्रा पृष्ठ पढ़ें")}</Link>
        </p>
      </section>

      <section>
        <h2>{t("Distance calculator", "दूरी")}</h2>
        <p>
          {t(
            "These are the figures public bodies have printed. They are approximate. Minutes are not invented.",
            "ये वे अंक हैं जो सार्वजनिक संस्थाओं ने छापे हैं। ये अनुमान हैं। मिनट नहीं गढ़े गए।",
          )}
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t("Place", "स्थान")}</th>
                <th>{t("Published distance", "प्रकाशित दूरी")}</th>
                <th>{t("Source", "स्रोत")}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{t("Indore", "इंदौर")}</td><td>{t("About 77–80 km", "लगभग 77–80 किमी")}</td><td>{t("Trust / state tourism", "ट्रस्ट / राज्य पर्यटन")}</td></tr>
              <tr><td>{t("Indore airport", "इंदौर हवाई अड्डा")}</td><td>{t("77 km or nearly 87 km", "77 किमी या लगभग 87 किमी")}</td><td>{t("Trust / state tourism", "ट्रस्ट / राज्य पर्यटन")}</td></tr>
              <tr><td>{t("Sanawad", "सनावद")}</td><td>12 km</td><td>{t("Temple trust", "मंदिर ट्रस्ट")}</td></tr>
              <tr><td>{t("Khandwa", "खंडवा")}</td><td>{t("72–77 km", "72–77 किमी")}</td><td>{t("Trust / state tourism", "ट्रस्ट / राज्य पर्यटन")}</td></tr>
              <tr><td>{t("Ujjain", "उज्जैन")}</td><td>140 km</td><td>{t("Trust FAQ and state tourism", "ट्रस्ट प्रश्नोत्तर और राज्य पर्यटन")}</td></tr>
              <tr><td>{t("Maheshwar", "महेश्वर")}</td><td>{t("About 70 km", "लगभग 70 किमी")}</td><td>{t("State tourism", "राज्य पर्यटन")}</td></tr>
              <tr><td>{t("Mortakka bus stand", "मोरटक्का बस स्टैंड")}</td><td>12 km</td><td>{t("Temple trust", "मंदिर ट्रस्ट")}</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link href={pathFor(lang, "omkareshwar-distance")}>{t("Distance notes and the cities without a printed figure", "दूरी के नोट और वे शहर जिनका अंक नहीं छपा")}</Link>
        </p>
      </section>

      <section>
        <h2>{t("Latest updates", "ताज़ा अपडेट")}</h2>
        <p>
          {t(
            "On 5 October 2026 the trust’s daily page, live page and Shighra page were read again. The evening clocks on those pages do not match. The note is dated. It is not a rumour.",
            "5 अक्टूबर 2026 को ट्रस्ट का दैनिक पृष्ठ, लाइव पृष्ठ और शीघ्र पृष्ठ फिर पढ़े गए। उन पृष्ठों की शाम की घड़ियाँ नहीं मिलतीं। नोट दिनांकित है। अफवाह नहीं।",
          )}
        </p>
        <p>
          <Link href={pathFor(lang, "latest-omkareshwar-news")}>{t("Verified notes", "जाँचे गए नोट")}</Link>
        </p>
      </section>

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
