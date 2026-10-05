import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const policyPages: PageDef[] = [
  {
    slug: "about",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite"],
    related: ["editorial-policy", "sources", "contact", "disclaimer"],
    en: {
      title: "About Omkareshwar.co – An Independent Guide",
      description:
        "Omkareshwar.co is an independent pilgrimage and travel guide. It is not the temple, not a government site, and not a hotel booking service.",
      h1: "About this guide",
      kicker: "Who maintains the site",
      answer:
        "Omkareshwar.co is an independent informational website about the Omkareshwar pilgrimage and the practical journey around it. It is not the official website of Shri Omkareshwar Jyotirlinga Temple, not a government website, and not a hotel company. The editorial desk publishes researched pages. It does not claim a personal tally of years beside the river.",
      blocks: [
        { type: "h2", text: "What the desk is for" },
        {
          type: "p",
          text: "The work is to read the temple trust’s public pages and Madhya Pradesh Tourism, keep the facts that survive that reading, and say so when two official pages disagree. Pages name sources. Time-sensitive lines carry a last-verified date only after a check. An author biography with verified credentials can be added later on this page. Until then, the byline is the Omkareshwar.co Editorial Desk, without invented titles.",
        },
        { type: "h2", text: "What the desk will not pretend" },
        {
          type: "ul",
          items: [
            "It does not take darshan money, puja money or donations.",
            "It does not sell hotel rooms or wear the name of a hotel brand.",
            "It does not call itself the official temple website.",
            "It does not invent a tally of years spent beside the river.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is Omkareshwar.co the temple’s website?",
          a: "No. The temple trust’s website is shriomkareshwar.org. The link is in the footer and on the sources page.",
        },
        {
          q: "Who writes the pages?",
          a: "The Omkareshwar.co Editorial Desk. Named credentials will be published only when they can be verified.",
        },
      ],
    },
    hi: {
      title: "Omkareshwar.co के बारे में – एक स्वतंत्र गाइड",
      description:
        "Omkareshwar.co स्वतंत्र तीर्थ और यात्रा गाइड है। यह मंदिर नहीं, सरकारी साइट नहीं, और होटल बुकिंग सेवा नहीं।",
      h1: "इस गाइड के बारे में",
      kicker: "साइट कौन संभालता है",
      answer:
        "Omkareshwar.co ओंकारेश्वर तीर्थ और उसके आसपास की व्यावहारिक यात्रा के बारे में एक स्वतंत्र जानकारी वेबसाइट है। यह श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर की आधिकारिक वेबसाइट नहीं, सरकारी वेबसाइट नहीं, और होटल कंपनी नहीं। संपादकीय डेस्क शोध वाले पृष्ठ प्रकाशित करता है। नदी के किनारे वर्षों की व्यक्तिगत गिनती का दावा नहीं करता।",
      blocks: [
        { type: "h2", text: "डेस्क किस काम का है" },
        {
          type: "p",
          text: "काम मंदिर ट्रस्ट के सार्वजनिक पृष्ठ और मध्य प्रदेश पर्यटन पढ़ना है, जो तथ्य उस पढ़ाई में टिके उन्हें रखना है, और जब दो आधिकारिक पृष्ठ अलग हों तो कह देना है। पृष्ठ स्रोत लिखते हैं। समय पर निर्भर पंक्ति पर अंतिम-जाँच की तिथि केवल जाँच के बाद आती है। सत्यापित योग्यता वाली लेखक-जीवनी बाद में इस पृष्ठ पर जोड़ी जा सकती है। तब तक पंक्ति Omkareshwar.co संपादकीय डेस्क है, गढ़े हुए पदों के बिना।",
        },
        { type: "h2", text: "डेस्क क्या ढोंग नहीं करेगा" },
        {
          type: "ul",
          items: [
            "दर्शन, पूजा या दान का पैसा नहीं लेता।",
            "होटल के कमरे नहीं बेचता और किसी होटल ब्रांड का नाम नहीं पहनता।",
            "खुद को आधिकारिक मंदिर वेबसाइट नहीं कहता।",
            "“20 वर्षों का अनुभव” वाली पंक्ति नहीं गढ़ता।",
          ],
        },
      ],
      faqs: [
        {
          q: "क्या Omkareshwar.co मंदिर की वेबसाइट है?",
          a: "नहीं। मंदिर ट्रस्ट की वेबसाइट shriomkareshwar.org है। कड़ी पादलेख और स्रोत पृष्ठ पर है।",
        },
        {
          q: "पृष्ठ कौन लिखता है?",
          a: "Omkareshwar.co संपादकीय डेस्क। नाम और योग्यता तभी छपेंगे जब जाँचे जा सकें।",
        },
      ],
    },
  },
  {
    slug: "editorial-policy",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite", "timetable", "mpTourism"],
    related: ["about", "sources", "latest-omkareshwar-news", "disclaimer"],
    en: {
      title: "Editorial Policy – How Omkareshwar.co Checks Facts",
      description:
        "How this guide verifies temple timings, bookings and distances, how corrections work, and why official pages win when they disagree with us.",
      h1: "Editorial policy",
      kicker: "How a sentence earns its place",
      answer:
        "A fact about timings, money, distance or a booking link is published only after it has been read on the temple trust’s website or on Madhya Pradesh Tourism. The page then says so, and time-sensitive pages show the date of that reading. When those sources disagree with each other, the guide shows the disagreement instead of averaging it into a false precision.",
      blocks: [
        { type: "h2", text: "Timings and bookings" },
        {
          type: "p",
          text: "Temple hours are taken from the trust’s daily darshan page and compared with the live, booking and FAQ pages. If they diverge, all of the divergence that we actually saw is described. Shighra prices are copied only from the Shighra page and dated. We do not keep a private tariff.",
        },
        { type: "h2", text: "Distances" },
        {
          type: "p",
          text: "Kilometres are quoted from the trust’s how-to-reach page or from Madhya Pradesh Tourism. Where neither prints a figure, the route page says so. Driving minutes are not invented.",
        },
        { type: "h2", text: "Language and drafting" },
        {
          type: "p",
          text: "English and Hindi are written as two readings of the same facts, not as a word-for-word machine pass. Software may assist a draft. A draft is not published until the facts have been checked against the sources and the prose has been edited for this site. We do not publish hundreds of unreviewed location pages.",
        },
        { type: "h2", text: "Corrections" },
        {
          type: "p",
          text: "If a trust page changes, the trust page is right as of that morning and our sentence is late until we recheck it. A public editorial inbox is not open yet. Until it is, do not send identity documents anywhere on the strength of this site. Temple questions go to the trust helpline printed on the official website.",
        },
      ],
      faqs: [
        {
          q: "What if your timing and the temple gate disagree?",
          a: "Believe the gate and the trust’s page from that morning. Then treat our sentence as needing a correction.",
        },
        {
          q: "Do you use AI to write?",
          a: "Drafting assistance is allowed. Publishing without a source check is not. The byline stays the editorial desk.",
        },
      ],
    },
    hi: {
      title: "संपादकीय नीति – Omkareshwar.co तथ्य कैसे जाँचता है",
      description:
        "यह गाइड मंदिर का समय, बुकिंग और दूरी कैसे जाँचती है, सुधार कैसे होते हैं, और आधिकारिक पृष्ठ हमसे अलग हों तो वे क्यों जीतते हैं।",
      h1: "संपादकीय नीति",
      kicker: "एक वाक्य अपनी जगह कैसे कमाता है",
      answer:
        "समय, पैसे, दूरी या बुकिंग-कड़ी का तथ्य तभी छपता है जब वह मंदिर ट्रस्ट की वेबसाइट या मध्य प्रदेश पर्यटन पर पढ़ा गया हो। पृष्ठ यह कहता है, और समय पर निर्भर पृष्ठ उस पढ़ाई की तिथि दिखाते हैं। जब स्रोत आपस में अलग हों, गाइड फर्क दिखाती है, उसे काटकर झूठी सटीकता नहीं बनाती।",
      blocks: [
        { type: "h2", text: "समय और बुकिंग" },
        {
          type: "p",
          text: "मंदिर के घंटे ट्रस्ट के दैनिक दर्शन पृष्ठ से लिए जाते हैं और लाइव, बुकिंग तथा प्रश्नोत्तर पृष्ठों से मिलाए जाते हैं। यदि वे अलग हों, जो फर्क हमने सच में देखा वह लिखा जाता है। शीघ्र का दाम केवल शीघ्र पृष्ठ से, तिथि के साथ, लिया जाता है। हमारी निजी दर-सूची नहीं है।",
        },
        { type: "h2", text: "दूरी" },
        {
          type: "p",
          text: "किलोमीटर ट्रस्ट के कैसे-पहुँचें पृष्ठ या मध्य प्रदेश पर्यटन से उद्धृत होते हैं। जहाँ दोनों अंक नहीं छापते, मार्ग-पृष्ठ यही कहता है। वाहन के मिनट नहीं गढ़े जाते।",
        },
        { type: "h2", text: "भाषा और मसौदा" },
        {
          type: "p",
          text: "अंग्रेजी और हिन्दी एक ही तथ्यों के दो पाठ हैं, शब्द-दर-शब्द मशीन की लकीर नहीं। सॉफ्टवेयर मसौदे में सहायता कर सकता है। मसौदा तब तक नहीं छपता जब तक तथ्य स्रोतों से जाँच न लिए जाएँ और गद्य इस साइट के लिए संपादित न हो। हम बिना समीक्षा के सैकड़ों स्थान-पृष्ठ नहीं छापते।",
        },
        { type: "h2", text: "सुधार" },
        {
          type: "p",
          text: "यदि ट्रस्ट का पृष्ठ बदले, उस सुबह ट्रस्ट का पृष्ठ सही है और हमारा वाक्य देर से है, जब तक हम फिर न जाँचें। सार्वजनिक संपादकीय डाक-पेटी अभी खुली नहीं। तब तक इस साइट के भरोसे पहचान पत्र कहीं न भेजें। मंदिर के प्रश्न आधिकारिक वेबसाइट पर छपी हेल्पलाइन पर जाएँ।",
        },
      ],
      faqs: [
        {
          q: "यदि आपका समय और मंदिर का फाटक अलग हों?",
          a: "फाटक और उस सुबह का ट्रस्ट-पृष्ठ मानें। फिर हमारे वाक्य को सुधार के योग्य मानें।",
        },
        {
          q: "क्या आप लिखने में एआई का उपयोग करते हैं?",
          a: "मसौदे में सहायता की अनुमति है। स्रोत-जाँच के बिना प्रकाशन की नहीं। पंक्ति संपादकीय डेस्क की रहती है।",
        },
      ],
    },
  },
  {
    slug: "sources",
    cluster: "trust",
    kind: "policy",
    updated,
    verified: updated,
    sources: [
      "templeWebsite",
      "liveDarshan",
      "darshanBooking",
      "abhishekBooking",
      "timetable",
      "howToReach",
      "parikrama",
      "vishramalaya",
      "faq",
      "rules",
      "schedules",
      "shighraInfo",
      "news",
      "mpTourism",
    ],
    related: ["editorial-policy", "about", "latest-omkareshwar-news", "disclaimer"],
    en: {
      title: "Sources – Official Temple and Government Pages",
      description:
        "The official Shri Omkareshwar Mandir Trust pages and the Madhya Pradesh Tourism page this guide actually uses. Every link leaves this site.",
      h1: "Sources",
      kicker: "Where the facts come from",
      answer:
        "Omkareshwar.co relies on the Shri Omkareshwar Mandir Trust website and the Madhya Pradesh Tourism page for Omkareshwar. Photographs are credited to their authors. Links below are external. They are not endorsements of every line on those sites, and they are not operated by us.",
      blocks: [
        {
          type: "p",
          text: "The list under this paragraph is the working set, checked on 5 October 2026. A new URL is added only after it loads and its owner is clear. We do not guess an official address.",
        },
        {
          type: "ul",
          items: [
            "{{templeWebsite|Temple trust homepage}}",
            "{{timetable|Daily darshan timings}}",
            "{{schedules|Day schedule}}",
            "{{liveDarshan|Live darshan}}",
            "{{darshanBooking|Shighra booking}}",
            "{{shighraInfo|Shighra information}}",
            "{{abhishekBooking|Abhishek}}",
            "{{howToReach|How to reach}}",
            "{{parikrama|Parikrama}}",
            "{{vishramalaya|Shri Ji Vishramalaya}}",
            "{{faq|Trust FAQ}}",
            "{{rules|Rules}}",
            "{{news|Trust news}}",
            "{{mpTourism|Madhya Pradesh Tourism — Omkareshwar}}",
          ],
        },
      ],
      faqs: [
        {
          q: "Why not more websites?",
          a: "Travel blogs often repeat one another and contradict the trust on stations and kilometres. They are not in this list.",
        },
        {
          q: "Are these links followed by search engines?",
          a: "No. Outbound links from this guide use nofollow. The official site does not need our endorsement to be official.",
        },
      ],
    },
    hi: {
      title: "स्रोत – आधिकारिक मंदिर और सरकारी पृष्ठ",
      description:
        "श्री ओंकारेश्वर मंदिर ट्रस्ट के वे पृष्ठ और मध्य प्रदेश पर्यटन का पृष्ठ जिनका यह गाइड सच में उपयोग करती है। हर कड़ी इस साइट से बाहर जाती है।",
      h1: "स्रोत",
      kicker: "तथ्य कहाँ से आते हैं",
      answer:
        "Omkareshwar.co श्री ओंकारेश्वर मंदिर ट्रस्ट की वेबसाइट और मध्य प्रदेश पर्यटन के ओंकारेश्वर पृष्ठ पर निर्भर है। तस्वीरों का श्रेय उनके लेखकों को है। नीचे की कड़ियाँ बाहरी हैं। वे उन साइटों की हर पंक्ति का समर्थन नहीं, और हमारे द्वारा चलाई नहीं जातीं।",
      blocks: [
        {
          type: "p",
          text: "इस अनुच्छेद के नीचे की सूची कार्यरत सेट है, 5 अक्टूबर 2026 को जाँची गई। नई यूआरएल तभी जुड़ती है जब वह खुले और स्वामी साफ हो। हम आधिकारिक पता अनुमान नहीं लगाते।",
        },
        {
          type: "ul",
          items: [
            "{{templeWebsite|मंदिर ट्रस्ट का मुखपृष्ठ}}",
            "{{timetable|दैनिक दर्शन का समय}}",
            "{{schedules|दिनचर्या}}",
            "{{liveDarshan|लाइव दर्शन}}",
            "{{darshanBooking|शीघ्र बुकिंग}}",
            "{{shighraInfo|शीघ्र जानकारी}}",
            "{{abhishekBooking|अभिषेक}}",
            "{{howToReach|कैसे पहुँचें}}",
            "{{parikrama|परिक्रमा}}",
            "{{vishramalaya|श्री जी विश्रामालय}}",
            "{{faq|ट्रस्ट का प्रश्नोत्तर}}",
            "{{rules|नियम}}",
            "{{news|ट्रस्ट के समाचार}}",
            "{{mpTourism|मध्य प्रदेश पर्यटन — ओंकारेश्वर}}",
          ],
        },
      ],
      faqs: [
        {
          q: "और वेबसाइटें क्यों नहीं?",
          a: "यात्रा ब्लॉग अक्सर एक-दूसरे को दोहराते हैं और स्टेशन तथा किलोमीटर पर ट्रस्ट से अलग हो जाते हैं। वे इस सूची में नहीं हैं।",
        },
        {
          q: "क्या खोज इंजन इन कड़ियों को फॉलो करते हैं?",
          a: "नहीं। इस गाइड की बाहर जाने वाली कड़ियाँ nofollow हैं। आधिकारिक साइट को आधिकारिक होने के लिए हमारे समर्थन की जरूरत नहीं।",
        },
      ],
    },
  },
  {
    slug: "contact",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite", "faq"],
    related: ["about", "editorial-policy", "disclaimer", "omkareshwar-vip-darshan"],
    en: {
      title: "Contact – Temple Helpline and This Guide",
      description:
        "Temple help is the trust helpline +91 8989998686. Omkareshwar.co does not yet publish its own staffed inbox and does not take bookings.",
      h1: "Contact",
      kicker: "Two different doors",
      answer:
        "For darshan, puja, Vishramalaya or a failed temple payment, use the Shri Omkareshwar Mandir Trust. The trust prints +91 8989998686 from 8 AM to 8 PM, and shriomkareshwar@gmail.com. Omkareshwar.co is not that office. This guide does not yet publish a staffed editorial inbox, so there is no form here pretending to be one.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Temple helpline", value: "+91 8989998686, 8 AM–8 PM" },
            { label: "Temple email printed by the trust", value: "shriomkareshwar@gmail.com" },
            { label: "Temple website", value: "{{templeWebsite|shriomkareshwar.org}}" },
            { label: "This website", value: "Independent guide. No booking desk." },
          ],
        },
        {
          type: "p",
          text: "Do not send Aadhaar photographs to a WhatsApp number that reached you from a hotel, a comment, or an unofficial page. The trust’s own FAQ tells you to reprint a missing ticket with your mobile number and order ID, then use the helpline. State tourism’s public line, printed on its Omkareshwar page, is 1800-233-7777 for tourism information, not for sanctum tickets.",
        },
      ],
      faqs: [
        {
          q: "Can I book darshan by contacting Omkareshwar.co?",
          a: "No. Book Shighra or Abhishek on the temple trust’s website, or join the free queue.",
        },
        {
          q: "How do I correct a page?",
          a: "A public inbox is not open yet. The correction policy is on the editorial policy page. The trust’s page remains the authority for temple facts.",
        },
      ],
    },
    hi: {
      title: "संपर्क – मंदिर हेल्पलाइन और यह गाइड",
      description:
        "मंदिर की सहायता ट्रस्ट हेल्पलाइन +91 8989998686 है। Omkareshwar.co अभी अपनी स्टाफ वाली डाक-पेटी नहीं छापती और बुकिंग नहीं लेती।",
      h1: "संपर्क",
      kicker: "दो अलग द्वार",
      answer:
        "दर्शन, पूजा, विश्रामालय या मंदिर के असफल भुगतान के लिए श्री ओंकारेश्वर मंदिर ट्रस्ट का उपयोग करें। ट्रस्ट +91 8989998686 सुबह 8 से रात 8, और shriomkareshwar@gmail.com छापता है। Omkareshwar.co वह कार्यालय नहीं है। यह गाइड अभी स्टाफ वाली संपादकीय डाक-पेटी नहीं छापती, इसलिए यहाँ ऐसा फॉर्म नहीं है जो होने का ढोंग करे।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "मंदिर हेल्पलाइन", value: "+91 8989998686, सुबह 8 से रात 8" },
            { label: "ट्रस्ट का छपा ईमेल", value: "shriomkareshwar@gmail.com" },
            { label: "मंदिर की वेबसाइट", value: "{{templeWebsite|shriomkareshwar.org}}" },
            { label: "यह वेबसाइट", value: "स्वतंत्र गाइड। कोई बुकिंग डेस्क नहीं।" },
          ],
        },
        {
          type: "p",
          text: "आधार की तस्वीर उस व्हाट्सऐप नंबर पर न भेजें जो होटल, टिप्पणी या अनौपचारिक पृष्ठ से मिला हो। ट्रस्ट का अपना प्रश्नोत्तर खोए टिकट को मोबाइल नंबर और ऑर्डर आईडी से दोबारा छापने को कहता है, फिर हेल्पलाइन। राज्य पर्यटन की सार्वजनिक लाइन, उसके ओंकारेश्वर पृष्ठ पर, 1800-233-7777 है, पर्यटन जानकारी के लिए, गर्भगृह के टिकट के लिए नहीं।",
        },
      ],
      faqs: [
        {
          q: "क्या Omkareshwar.co से संपर्क कर दर्शन बुक कर सकते हैं?",
          a: "नहीं। शीघ्र या अभिषेक मंदिर ट्रस्ट की वेबसाइट पर बुक करें, या मुफ्त कतार में लगें।",
        },
        {
          q: "पृष्ठ कैसे सुधारें?",
          a: "सार्वजनिक डाक-पेटी अभी खुली नहीं। सुधार की नीति संपादकीय नीति पृष्ठ पर है। मंदिर के तथ्यों के लिए ट्रस्ट का पृष्ठ प्रमाण रहता है।",
        },
      ],
    },
  },
  {
    slug: "privacy",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite"],
    related: ["terms", "disclaimer", "contact", "about"],
    en: {
      title: "Privacy – Omkareshwar.co",
      description:
        "Omkareshwar.co does not run a booking form and does not ask for Aadhaar. Optional analytics load only if you configure them.",
      h1: "Privacy",
      kicker: "What this site collects",
      answer:
        "This guide does not ask for your name, phone number or identity document. There is no booking form and no donation form. Pages are public. If an analytics measurement ID is later added in the site configuration, that tool will load. Until then, the site does not embed Google Analytics.",
      blocks: [
        { type: "h2", text: "Outbound visits" },
        {
          type: "p",
          text: "A link to the temple trust, YouTube, or Madhya Pradesh Tourism leaves this site. Those organisations have their own privacy notices. The homepage loads the trust’s YouTube live player in your browser. The map is an OpenStreetMap embed loaded the same way. We do not receive your location, and we do not ask the browser for GPS.",
        },
        { type: "h2", text: "Photographs" },
        {
          type: "p",
          text: "Temple photographs are files by Ms Sarah Welch, published under CC0. They are not pictures of you. Do not send us photographs of identity cards.",
        },
      ],
      faqs: [
        {
          q: "Do you store Aadhaar numbers?",
          a: "No. The temple trust asks for identity on its own booking page. That page is not this website.",
        },
        {
          q: "Do you sell data?",
          a: "No. There is no reader account and no booking list to sell.",
        },
      ],
    },
    hi: {
      title: "गोपनीयता – Omkareshwar.co",
      description:
        "Omkareshwar.co बुकिंग फॉर्म नहीं चलाती और आधार नहीं माँगती। वैकल्पिक एनालिटिक्स तभी लोड होते हैं जब आप उन्हें कॉन्फ़िगर करें।",
      h1: "गोपनीयता",
      kicker: "यह साइट क्या रखती है",
      answer:
        "यह गाइड आपका नाम, फोन नंबर या पहचान पत्र नहीं माँगती। कोई बुकिंग फॉर्म नहीं और कोई दान फॉर्म नहीं। पृष्ठ सार्वजनिक हैं। यदि बाद में साइट कॉन्फ़िगरेशन में एनालिटिक्स माप-आईडी जोड़ी जाए, वह उपकरण लोड होगा। तब तक साइट गूगल एनालिटिक्स नहीं जोड़ती।",
      blocks: [
        { type: "h2", text: "बाहर की यात्रा" },
        {
          type: "p",
          text: "मंदिर ट्रस्ट, यूट्यूब या मध्य प्रदेश पर्यटन की कड़ी इस साइट से बाहर जाती है। उन संस्थाओं की अपनी गोपनीयता सूचनाएँ हैं। मुखपृष्ठ आपके ब्राउज़र में ट्रस्ट का यूट्यूब लाइव प्लेयर लोड करता है। नक्शा ओपनस्ट्रीटमैप का एम्बेड है, जो उसी तरह लोड होता है। हमें आपका स्थान नहीं मिलता, और हम ब्राउज़र से जीपीएस नहीं माँगते।",
        },
        { type: "h2", text: "तस्वीरें" },
        {
          type: "p",
          text: "मंदिर की तस्वीरें सुश्री सारा वेल्च की फ़ाइलें हैं, CC0 के अंतर्गत। वे आपकी तस्वीरें नहीं। पहचान पत्र की तस्वीर हमें न भेजें।",
        },
      ],
      faqs: [
        {
          q: "क्या आप आधार संख्या रखते हैं?",
          a: "नहीं। मंदिर ट्रस्ट अपनी बुकिंग पृष्ठ पर पहचान माँगता है। वह पृष्ठ यह वेबसाइट नहीं है।",
        },
        {
          q: "क्या आप डेटा बेचते हैं?",
          a: "नहीं। कोई पाठक खाता नहीं और बेचने योग्य बुकिंग-सूची नहीं।",
        },
      ],
    },
  },
  {
    slug: "terms",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite"],
    related: ["privacy", "disclaimer", "editorial-policy", "about"],
    en: {
      title: "Terms of Use – Omkareshwar.co",
      description:
        "You may read Omkareshwar.co for information. You may not treat it as the temple, as a booking agent, or as a guarantee of hours or fares.",
      h1: "Terms of use",
      kicker: "What the pages are",
      answer:
        "These pages are information. They are not a contract with the temple trust, not a ticket, and not an offer of a hotel room. You are responsible for rechecking timings, prices and road conditions on the day you travel. Official temple services exist only on the trust’s own website.",
      blocks: [
        { type: "h2", text: "No agency" },
        {
          type: "p",
          text: "Nothing on Omkareshwar.co appoints us as an agent of Shri Omkareshwar Mandir Trust, the Government of Madhya Pradesh, or any hotel. Outbound links are labelled and marked nofollow. A similarity of names is not a partnership.",
        },
        { type: "h2", text: "Reuse" },
        {
          type: "p",
          text: "Do not copy the pages and present them as the temple’s notice. Photographs keep the credit of Ms Sarah Welch and the CC0 deed. Our text may be quoted with a link and without calling the quotation official.",
        },
      ],
      faqs: [
        {
          q: "Can I rely on a price printed here?",
          a: "Only as a dated reading of the trust’s page. Pay on the trust’s page, which can change the figure.",
        },
        {
          q: "Are you liable for a missed darshan?",
          a: "The hours can change. The guide says so. The duty to recheck the official page is yours.",
        },
      ],
    },
    hi: {
      title: "उपयोग की शर्तें – Omkareshwar.co",
      description:
        "Omkareshwar.co जानकारी के लिए पढ़ सकते हैं। इसे मंदिर, बुकिंग एजेंट, या घंटों और भाड़े की गारंटी न मानें।",
      h1: "उपयोग की शर्तें",
      kicker: "पृष्ठ क्या हैं",
      answer:
        "ये पृष्ठ जानकारी हैं। वे मंदिर ट्रस्ट के साथ अनुबंध नहीं, टिकट नहीं, और होटल कमरे का प्रस्ताव नहीं। यात्रा वाले दिन समय, दाम और सड़क की स्थिति फिर जाँचना आपकी जिम्मेदारी है। आधिकारिक मंदिर सेवा केवल ट्रस्ट की अपनी वेबसाइट पर है।",
      blocks: [
        { type: "h2", text: "कोई एजेंसी नहीं" },
        {
          type: "p",
          text: "Omkareshwar.co पर कुछ भी हमें श्री ओंकारेश्वर मंदिर ट्रस्ट, मध्य प्रदेश सरकार, या किसी होटल का एजेंट नहीं बनाता। बाहर की कड़ियाँ लिखी हुई हैं और nofollow हैं। नाम का मिलना साझेदारी नहीं।",
        },
        { type: "h2", text: "पुनः उपयोग" },
        {
          type: "p",
          text: "पृष्ठों की नकल कर उन्हें मंदिर की सूचना न बनाएँ। तस्वीरों पर सुश्री सारा वेल्च का श्रेय और CC0 विलेख रहता है। हमारे पाठ को कड़ी के साथ उद्धृत किया जा सकता है, उद्धरण को आधिकारिक कहे बिना।",
        },
      ],
      faqs: [
        {
          q: "क्या यहाँ छपे दाम पर भरोसा करें?",
          a: "केवल ट्रस्ट के पृष्ठ के दिनांकित पठन के रूप में। भुगतान ट्रस्ट के पृष्ठ पर करें, जो अंक बदल सकता है।",
        },
        {
          q: "क्या छूटे दर्शन के लिए आप उत्तरदायी हैं?",
          a: "घंटे बदल सकते हैं। गाइड यही कहती है। आधिकारिक पृष्ठ फिर जाँचने का दायित्व आपका है।",
        },
      ],
    },
  },
  {
    slug: "disclaimer",
    cluster: "trust",
    kind: "policy",
    updated,
    sources: ["templeWebsite", "mpTourism"],
    related: ["about", "editorial-policy", "terms", "sources"],
    en: {
      title: "Disclaimer – Not the Official Omkareshwar Temple",
      description:
        "Omkareshwar.co is not the official Shri Omkareshwar Jyotirlinga website, not a government site, and not a hotel or darshan booking service.",
      h1: "Disclaimer",
      kicker: "Read this before you pay anyone",
      answer:
        "Omkareshwar.co is an independent informational and travel website. It is not the official website of Shri Omkareshwar Jyotirlinga Temple. It is not a government website. It does not sell darshan, puja, donations or hotel rooms. For official temple services, use shriomkareshwar.org and the helpline printed there.",
      blocks: [
        { type: "h2", text: "Religion and measurement" },
        {
          type: "p",
          text: "Stories from the Puranas are presented as tradition. Architectural dates are presented as Madhya Pradesh Tourism’s account. Distances are presented as the figures those bodies print, which sometimes differ. None of this is a guarantee of the queue you will meet, the fare a driver will ask, or the health of the river.",
        },
        { type: "h2", text: "Names that cause mistakes" },
        {
          type: "p",
          text: "Other towns have temples called Omkareshwar. This guide is about Mandhata in Khandwa. A hotel, a lodge or a travel agency that uses Omkareshwar in its name is not made official by the word, and is not made a partner of this website by the word either.",
        },
      ],
      faqs: [
        {
          q: "Where is the official website?",
          a: "https://shriomkareshwar.org/ — linked in the footer. The link is nofollow because it leaves this site.",
        },
        {
          q: "Can I pay Omkareshwar.co for VIP darshan?",
          a: "No. Pay the temple trust on its own booking page, or use the free queue.",
        },
      ],
    },
    hi: {
      title: "अस्वीकरण – यह आधिकारिक ओंकारेश्वर मंदिर नहीं",
      description:
        "Omkareshwar.co श्री ओंकारेश्वर ज्योतिर्लिंग की आधिकारिक वेबसाइट नहीं, सरकारी साइट नहीं, और होटल या दर्शन बुकिंग सेवा नहीं।",
      h1: "अस्वीकरण",
      kicker: "किसी को भुगतान करने से पहले पढ़ें",
      answer:
        "Omkareshwar.co एक स्वतंत्र जानकारी और यात्रा वेबसाइट है। यह श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर की आधिकारिक वेबसाइट नहीं है। यह सरकारी वेबसाइट नहीं है। यह दर्शन, पूजा, दान या होटल के कमरे नहीं बेचती। आधिकारिक मंदिर सेवा के लिए shriomkareshwar.org और वहाँ छपी हेल्पलाइन का उपयोग करें।",
      blocks: [
        { type: "h2", text: "धर्म और नाप" },
        {
          type: "p",
          text: "पुराणों की कथाएँ परंपरा के रूप में हैं। वास्तुकला की तिथियाँ मध्य प्रदेश पर्यटन के कथन के रूप में हैं। दूरियाँ उन संस्थाओं के छपे अंक के रूप में हैं, जो कभी-कभी अलग होते हैं। इनमें से कुछ भी उस कतार की गारंटी नहीं जिसे आप पाएँगे, उस भाड़े की नहीं जो चालक माँगेगा, या नदी की सेहत की नहीं।",
        },
        { type: "h2", text: "जो नाम भूल कराते हैं" },
        {
          type: "p",
          text: "अन्य नगरों में ओंकारेश्वर नाम के मंदिर हैं। यह गाइड खंडवा के मांधाता के बारे में है। जो होटल, लॉज या ट्रैवल एजेंसी नाम में ओंकारेश्वर लगाए, शब्द उसे आधिकारिक नहीं बनाता, और इस वेबसाइट का साझेदार भी नहीं बनाता।",
        },
      ],
      faqs: [
        {
          q: "आधिकारिक वेबसाइट कहाँ है?",
          a: "https://shriomkareshwar.org/ — पादलेख में कड़ी है। कड़ी nofollow है क्योंकि वह इस साइट से बाहर जाती है।",
        },
        {
          q: "क्या वीआईपी दर्शन के लिए Omkareshwar.co को भुगतान कर सकते हैं?",
          a: "नहीं। मंदिर ट्रस्ट को उसके अपने बुकिंग पृष्ठ पर भुगतान करें, या मुफ्त कतार का उपयोग करें।",
        },
      ],
    },
  },
];
