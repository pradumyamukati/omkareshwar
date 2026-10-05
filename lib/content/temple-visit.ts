import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const templeVisitPages: PageDef[] = [
  {
    slug: "omkareshwar-darshan",
    cluster: "temple",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["faq", "timetable", "darshanBooking", "liveDarshan", "shighraInfo"],
    related: ["omkareshwar-temple-timings", "omkareshwar-vip-darshan", "omkareshwar-temple", "how-to-reach-omkareshwar"],
    en: {
      title: "Omkareshwar Darshan – Free Queue, Aarti & Shighra",
      description:
        "Omkareshwar darshan is free in the open hours. Shighra is optional. How the day is divided, what to carry, and where the live camera actually is.",
      h1: "Omkareshwar darshan",
      kicker: "Visiting the sanctum",
      answer:
        "Darshan at Omkareshwar means joining the queue in an open hour on the trust’s clock. Normal darshan is free and needs no ticket. Shighra Darshan is a separate, optional, paid slot sold only by the temple trust. The gates close for bhog, shringar and aarti even if you have travelled a long way to arrive in that minute.",
      blocks: [
        { type: "h2", text: "Two ways in, one sanctum" },
        {
          type: "p",
          text: "The trust’s FAQ is plain: booking is not required for normal darshan, and Shighra tickets are optional. The second queue exists so that a festival crowd can be shortened for people who pay. It does not replace the free queue, and it does not open the sanctum while aarti or shringar is on. The Shighra page says a ticket works once, only in the booked slot, and not during a service break.",
        },
        {
          type: "p",
          text: "If you are watching from home, that is a different door. The {{liveDarshan|official live darshan page}} publishes camera sessions. Those sessions are not the same list as the temple’s open hours. Morning camera time on the page we checked began at 5:30 AM, while mangal darshan on the daily timetable begins at 5:00 AM. Use the camera page for a screen. Use the [[omkareshwar-temple-timings|timetable]] for your feet.",
        },
        { type: "h2", text: "A workable order for the morning" },
        {
          type: "ol",
          items: [
            "Recheck {{timetable|the daily darshan page}} the evening before. Festival days move the clock.",
            "Cross to Mandhata with enough time to find the shoe stand before the hour you chose.",
            "If you bought Shighra, carry the printout and photo identity. The trust asks for both. The booking page says every visitor must be present, and tells you not to buy a ticket for a child under 12.",
            "Stand where the volunteer points. The booking page says wristbands are issued at the entry, usually Jhula Pul (Mamleshwar Setu), and on a heavy day the entry may shift to Bad Chowk.",
            "After darshan, Mamleshwar is across the river if the day still has light and patience. It is not a second payment to the same counter.",
          ],
        },
        { type: "h2", text: "Monday and Shravan" },
        {
          type: "p",
          text: "The trust’s FAQ describes a Somvar sawari, a Monday procession that starts from Koti Tirth Ghat, with a royal form in Shravan. Monday is already Shiva’s day in the queue. Shravan stacks that Monday on a month of vows. Neither fact changes the free-entry rule. Both change how early you should be on the bridge.",
        },
        {
          type: "note",
          text: "This page does not sell darshan. The only booking button that counts is the one on shriomkareshwar.org.",
        },
      ],
      faqs: [
        {
          q: "Do I need a ticket for Omkareshwar darshan?",
          a: "No for the ordinary queue. The trust says normal darshan is free. Buy a ticket only if you want Shighra Darshan, and buy it on the official website.",
        },
        {
          q: "Can I watch Omkareshwar live darshan here?",
          a: "The homepage plays the YouTube live stream the temple trust embeds on its own live page. The camera is still the trust’s. This site does not show whether the camera is on this minute.",
        },
        {
          q: "What should I carry?",
          a: "For the free queue, modest clothes and a way to keep the shoe token. For Shighra, the trust asks for a printed ticket and photo identity such as Aadhaar, and says the ticket is valid only in that slot.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर दर्शन – मुफ्त कतार, आरती और शीघ्र",
      description:
        "ओंकारेश्वर का सामान्य दर्शन खुले समय में मुफ्त है। शीघ्र दर्शन वैकल्पिक है। दिन कैसे बँटता है, क्या साथ रखें, और लाइव कैमरा कहाँ है।",
      h1: "ओंकारेश्वर दर्शन",
      kicker: "गर्भगृह तक",
      answer:
        "ओंकारेश्वर दर्शन का अर्थ है ट्रस्ट की घड़ी के खुले घंटे में कतार में लगना। सामान्य दर्शन मुफ्त है, टिकट नहीं माँगता। शीघ्र दर्शन अलग, वैकल्पिक, सशुल्क स्लॉट है और केवल मंदिर ट्रस्ट बेचता है। भोग, श्रृंगार और आरती में द्वार बंद रहता है, चाहे आप उसी मिनट पहुँचे हों।",
      blocks: [
        { type: "h2", text: "एक गर्भगृह, दो रास्ते" },
        {
          type: "p",
          text: "ट्रस्ट का प्रश्नोत्तर साफ है: सामान्य दर्शन के लिए बुकिंग जरूरी नहीं, शीघ्र टिकट वैकल्पिक है। दूसरी कतार इसलिए है कि भीड़ में कुछ लोग भुगतान कर समय घटा सकें। वह मुफ्त कतार की जगह नहीं लेती, और आरती या श्रृंगार के दौरान गर्भगृह नहीं खोलती। शीघ्र पृष्ठ कहता है कि टिकट एक बार, केवल बुक किए स्लॉट में, और सेवा-विराम में नहीं चलता।",
        },
        {
          type: "p",
          text: "घर से देखना दूसरी बात है। {{liveDarshan|आधिकारिक लाइव दर्शन पृष्ठ}} कैमरा सत्र छापता है। वे सत्र मंदिर के खुले घंटों की सूची नहीं हैं। जिस पृष्ठ को हमने जाँचा, उस पर सुबह का कैमरा 5:30 बजे शुरू दिखा, जबकि दैनिक सारिणी पर मंगल दर्शन 5:00 बजे शुरू होता है। स्क्रीन के लिए कैमरा पृष्ठ खोलें। पाँव के लिए [[omkareshwar-temple-timings|समय सारिणी]] देखें।",
        },
        { type: "h2", text: "सुबह का व्यावहारिक क्रम" },
        {
          type: "ol",
          items: [
            "एक शाम पहले {{timetable|दैनिक दर्शन पृष्ठ}} फिर से खोलें। पर्व पर घड़ी हिलती है।",
            "जूता घर खोजने का समय रखकर मांधाता पहुँचें।",
            "शीघ्र लिया हो तो प्रिंट और फोटो पहचान साथ रखें। ट्रस्ट दोनों माँगता है। बुकिंग पृष्ठ कहता है कि हर व्यक्ति स्वयं मौजूद रहे, और 12 वर्ष से छोटे बच्चे का टिकट न खरीदें।",
            "स्वयंसेवक जहाँ खड़ा करे वहीं रहें। बुकिंग पृष्ठ के अनुसार रिस्टबैंड प्रवेश पर मिलता है, सामान्यतः झूला पुल (ममलेश्वर सेतु) पर, और भारी भीड़ में प्रवेश बड़ चौक पर खिसक सकता है।",
            "दर्शन के बाद दिन और धीरज बचा हो तो ममलेश्वर नदी के पार है। वह उसी काउंटर का दूसरा भुगतान नहीं है।",
          ],
        },
        { type: "h2", text: "सोमवार और सावन" },
        {
          type: "p",
          text: "ट्रस्ट का प्रश्नोत्तर सोमवार की सवारी बताता है, जो कोटी तीर्थ घाट से निकलती है। सावन में राजसी रूप होता है। सोमवार वैसे ही शिव का दिन है। सावन उस सोमवार पर व्रत का महीना रख देता है। मुफ्त प्रवेश का नियम नहीं बदलता। पुल पर पहुँचने का समय बदल जाता है।",
        },
        {
          type: "note",
          text: "यह पृष्ठ दर्शन नहीं बेचता। जो बुकिंग मायने रखती है वह shriomkareshwar.org पर है।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर दर्शन के लिए टिकट चाहिए?",
          a: "सामान्य कतार के लिए नहीं। ट्रस्ट कहता है सामान्य दर्शन मुफ्त है। टिकट तभी लें जब शीघ्र दर्शन चाहिए, और केवल आधिकारिक वेबसाइट से।",
        },
        {
          q: "क्या लाइव दर्शन यहीं देख सकते हैं?",
          a: "मुखपृष्ठ पर वही यूट्यूब लाइव धारा चलती है जिसे मंदिर ट्रस्ट अपने लाइव पृष्ठ पर जोड़ता है। कैमरा फिर भी ट्रस्ट का है। यह साइट यह नहीं बताती कि कैमरा इसी मिनट चालू है।",
        },
        {
          q: "क्या साथ रखें?",
          a: "मुफ्त कतार के लिए शालीन वस्त्र और जूते की टोकन। शीघ्र के लिए ट्रस्ट छपा टिकट और आधार जैसा फोटो पहचान माँगता है, और कहता है कि टिकट केवल उसी स्लॉट में मान्य है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-temple-timings",
    cluster: "temple",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["timetable", "schedules", "liveDarshan", "faq", "darshanBooking"],
    related: ["omkareshwar-darshan", "omkareshwar-vip-darshan", "omkareshwar-mahashivratri", "omkareshwar-festivals"],
    en: {
      title: "Omkareshwar Temple Timings – Darshan, Aarti & Puja",
      description:
        "Omkareshwar temple timings from the trust’s daily darshan page, including the midday closure, and the places where the trust’s own pages disagree.",
      h1: "Omkareshwar temple timings",
      kicker: "The clock",
      answer:
        "On the trust’s daily darshan page, mangal aarti is 4:30–5:00 AM, darshan opens at 5:00 AM, the sanctum closes for midday bhog at 12:20 PM, and the last shayan darshan is listed at 10:00–10:30 PM. Darshan is also closed during aarti and shringar. The live-stream page prints a shorter evening, so check both on the day you go.",
      blocks: [
        {
          type: "table",
          caption: "Daily darshan page, checked 5 October 2026",
          headers: ["Time", "What the trust calls it"],
          rows: [
            ["4:30–5:00 AM", "Mangal aarti and bhog"],
            ["5:00 AM–12:20 PM", "Mangal darshan"],
            ["12:20–1:15 PM", "Madhyanha bhog, darshan closed"],
            ["1:15–4:00 PM", "Madhyanha darshan"],
            ["4:00–4:30 PM", "Sayamkalin shringar"],
            ["4:30–9:30 PM", "Shringar darshan"],
            ["9:30–10:00 PM", "Shayan aarti"],
            ["10:00–10:30 PM", "Shayan darshan"],
          ],
        },
        {
          type: "p",
          text: "The same page says darshan stays closed before 5:00 AM, after 10:30 PM, and during aarti and shringar. It also says the hours can change on special occasions. That last sentence is the one to remember in Shravan and on Mahashivratri.",
        },
        { type: "h2", text: "Why two official clocks exist" },
        {
          type: "p",
          text: "The daily darshan page, the schedules page, the rules page, the how-to-reach page, the parikrama page, the Vishramalaya page and the Abhishek page carried this longer evening when we read them on 5 October 2026: shringar darshan until 9:30 PM, shayan aarti until 10:00, shayan darshan until 10:30. The live darshan page and the ticket-booking page carried a shorter evening, with shringar darshan ending 8:30 PM and shayan darshan ending 9:30 PM. The schedules page has a further small split: its paragraph starts evening shringar at 4:15, while the table on that same page starts it at 4:30.",
        },
        {
          type: "p",
          text: "Use the {{timetable|daily darshan page}} to plan a visit. If you are only watching, use the {{liveDarshan|live page}}, which listed camera sessions at 5:30 AM–12:20 PM, 1:15–4:00 PM and 4:45–8:30 PM. Do not treat a camera window as a promise that the garbhagriha is open.",
        },
        { type: "h2", text: "An old sentence on the FAQ" },
        {
          type: "p",
          text: "The FAQ still says shayan shringar darshan runs 8:30–9:35 PM and is “currently closed due to COVID-19”. The timetable printed lower on that same FAQ runs shayan darshan to 10:30 PM and does not repeat the closure. The COVID sentence looks unrevised. Do not cancel an evening visit because of it. Open the daily page that morning.",
        },
        { type: "h2", text: "Puja hours are narrower than darshan" },
        {
          type: "p",
          text: "Abhishek is not offered across the whole darshan day. The trust says the suitable time is 6:00 AM to 4:00 PM, in the sabhamandap, and that it is not done after sunset. A family that arrives at 6 PM can still have shringar darshan if that block is open. They cannot assume an Abhishek.",
        },
      ],
      faqs: [
        {
          q: "What time does Omkareshwar temple open?",
          a: "The daily darshan page puts mangal aarti at 4:30 AM and mangal darshan from 5:00 AM. Recheck that page on the day, especially during festivals.",
        },
        {
          q: "When is darshan closed in the afternoon?",
          a: "Midday bhog is listed as 12:20–1:15 PM. Evening shringar is listed as 4:00–4:30 PM on the daily table. Darshan pauses in both.",
        },
        {
          q: "What time is the last darshan?",
          a: "The daily darshan page lists shayan darshan at 10:00–10:30 PM and says the temple is closed after 10:30. The live and booking pages have shown an earlier end. Read the daily page on the day you travel.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर मंदिर का समय – दर्शन, आरती और पूजा",
      description:
        "ट्रस्ट के दैनिक दर्शन पृष्ठ से ओंकारेश्वर मंदिर का समय, दोपहर का बंद घंटा, और वे जगहें जहाँ ट्रस्ट के अपने पृष्ठ आपस में नहीं मिलते।",
      h1: "ओंकारेश्वर मंदिर का समय",
      kicker: "घड़ी",
      answer:
        "ट्रस्ट के दैनिक दर्शन पृष्ठ पर मंगला आरती 4:30 से 5:00 सुबह है, दर्शन 5:00 बजे खुलता है, मध्याह्न भोग में 12:20 बजे गर्भगृह बंद होता है, और अंतिम शयन दर्शन 10:00 से 10:30 रात लिखा है। आरती और श्रृंगार में भी दर्शन बंद रहता है। लाइव पृष्ठ पर शाम छोटी छपी है, इसलिए जाने वाले दिन दोनों देखें।",
      blocks: [
        {
          type: "table",
          caption: "दैनिक दर्शन पृष्ठ, जाँच 5 अक्टूबर 2026",
          headers: ["समय", "ट्रस्ट का नाम"],
          rows: [
            ["सुबह 4:30–5:00", "मंगला आरती और भोग"],
            ["सुबह 5:00–दोपहर 12:20", "मंगल दर्शन"],
            ["दोपहर 12:20–1:15", "मध्याह्न भोग, दर्शन बंद"],
            ["दोपहर 1:15–शाम 4:00", "मध्याह्न दर्शन"],
            ["शाम 4:00–4:30", "सायंकालीन श्रृंगार"],
            ["शाम 4:30–रात 9:30", "श्रृंगार दर्शन"],
            ["रात 9:30–10:00", "शयन आरती"],
            ["रात 10:00–10:30", "शयन दर्शन"],
          ],
        },
        {
          type: "p",
          text: "वही पृष्ठ कहता है कि दर्शन सुबह 5:00 से पहले, रात 10:30 के बाद, और आरती तथा श्रृंगार के दौरान बंद रहता है। विशेष अवसर पर समय बदल सकता है। सावन और महाशिवरात्रि में यही वाक्य याद रखना है।",
        },
        { type: "h2", text: "आधिकारिक घड़ियाँ दो क्यों हैं" },
        {
          type: "p",
          text: "5 अक्टूबर 2026 को दैनिक दर्शन, दिनचर्या, नियम, कैसे पहुँचें, परिक्रमा, विश्रामालय और अभिषेक पृष्ठों पर लंबी शाम थी: श्रृंगार दर्शन रात 9:30 तक, शयन आरती 10:00 तक, शयन दर्शन 10:30 तक। लाइव दर्शन और टिकट बुकिंग पृष्ठों पर शाम छोटी थी, श्रृंगार दर्शन रात 8:30 तक और शयन दर्शन 9:30 तक। दिनचर्या पृष्ठ पर एक और छोटा फर्क है: अनुच्छेद सायंकालीन श्रृंगार 4:15 से शुरू करता है, उसी पृष्ठ की तालिका 4:30 से।",
        },
        {
          type: "p",
          text: "दर्शन की योजना {{timetable|दैनिक दर्शन पृष्ठ}} से बनाएँ। केवल देखना हो तो {{liveDarshan|लाइव पृष्ठ}} खोलें। उस पर कैमरा सत्र सुबह 5:30–दोपहर 12:20, दोपहर 1:15–शाम 4:00 और शाम 4:45–रात 8:30 लिखे थे। कैमरा खुला है, इसका अर्थ गर्भगृह खुला है नहीं।",
        },
        { type: "h2", text: "प्रश्नोत्तर पर एक पुराना वाक्य" },
        {
          type: "p",
          text: "प्रश्नोत्तर अभी भी कहता है कि शयन श्रृंगार दर्शन रात 8:30 से 9:35 है और “कोविड-19 के कारण अभी बंद” है। उसी पृष्ठ के नीचे की सारिणी शयन दर्शन रात 10:30 तक ले जाती है और यह बंद नहीं दोहराती। कोविड वाला वाक्य बिना संशोधन बचा लगता है। उसी के भरोसे शाम की यात्रा रद्द न करें। उस सुबह दैनिक पृष्ठ खोलें।",
        },
        { type: "h2", text: "पूजा के घंटे दर्शन से संकरे हैं" },
        {
          type: "p",
          text: "अभिषेक पूरे दर्शन-दिन नहीं होता। ट्रस्ट उपयुक्त समय सुबह 6 से शाम 4 बताता है, सभामंडप में, और सूर्यास्त के बाद नहीं। शाम 6 बजे पहुँचा परिवार श्रृंगार दर्शन कर सकता है यदि वह खंड खुला हो। अभिषेक मानकर न चले।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर मंदिर कितने बजे खुलता है?",
          a: "दैनिक दर्शन पृष्ठ मंगला आरती सुबह 4:30 और मंगल दर्शन सुबह 5:00 से रखता है। पर्व में उसी दिन पृष्ठ फिर देखें।",
        },
        {
          q: "दोपहर में दर्शन कब बंद होता है?",
          a: "मध्याह्न भोग दोपहर 12:20 से 1:15 लिखा है। सायंकालीन श्रृंगार दैनिक तालिका में शाम 4:00 से 4:30 है। दोनों में दर्शन रुकता है।",
        },
        {
          q: "अंतिम दर्शन किस समय है?",
          a: "दैनिक पृष्ठ शयन दर्शन रात 10:00 से 10:30 लिखता है और 10:30 के बाद बंद कहता है। लाइव और बुकिंग पृष्ठों पर समापन पहले दिखा है। यात्रा वाले दिन दैनिक पृष्ठ पढ़ें।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-vip-darshan",
    cluster: "temple",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["shighraInfo", "darshanBooking", "faq", "timetable"],
    related: ["omkareshwar-darshan", "omkareshwar-temple-timings", "omkareshwar-temple", "omkareshwar-from-indore"],
    en: {
      title: "Omkareshwar VIP Darshan – Official Shighra Ticket",
      description:
        "Omkareshwar VIP darshan is the trust’s Shighra ticket, shown at ₹300 a person. Normal darshan stays free. Book only on shriomkareshwar.org.",
      h1: "Omkareshwar VIP darshan",
      kicker: "Shighra, not a private pass",
      answer:
        "What travel agents call Omkareshwar VIP darshan is Shighra Darshan on the temple trust’s website. The trust’s Shighra page showed ₹300 a person when checked on 5 October 2026. Ordinary darshan does not need this ticket. This website does not sell it.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Official name", value: "Shighra Darshan" },
            { label: "Fee printed on the Shighra page", value: "₹300 a person, including each extra person" },
            { label: "Where to pay", value: "{{darshanBooking|Official booking page}} or {{shighraInfo|the Shighra information page}}" },
            { label: "Children", value: "The booking page says not to buy tickets for children below 12" },
            { label: "Refund", value: "The FAQ says tickets are non-refundable, with one reschedule before the booked date through the helpline" },
          ],
        },
        { type: "h2", text: "What the money is for" },
        {
          type: "p",
          text: "The trust describes Shighra as a direct-darshan facility for a fixed slot, because festivals and holidays make the free queue long. The note on the page said booking was open for all slots from Monday to Sunday. Slots shown on the booking form included 7–9 AM, 10 AM–12 PM, 2–4 PM and 6–8 PM. The form is the list that counts. A slot that falls inside bhog or shringar still cannot be used. The FAQ says the ticket is not valid during temple service breaks.",
        },
        { type: "h2", text: "How not to pay the wrong person" },
        {
          type: "ul",
          items: [
            "The address bar should be shriomkareshwar.org. A similar page, a UPI request, or a hotel “VIP package” is a different transaction.",
            "The trust asks you to avoid special characters, fill every required field, and not refresh during payment.",
            "If money leaves and no ticket arrives, the FAQ says to reprint with your mobile number and order ID, then call +91 8989998686 between 8 AM and 8 PM.",
            "Wristbands are issued at the entry and are compulsory. The usual entry named on the form is Jhula Pul. On a heavy day it may move to Bad Chowk.",
            "Carry a printed ticket and photo identity. The FAQ names Aadhaar or a similar ID.",
          ],
        },
        {
          type: "p",
          text: "Abhishek is a different booking. The Abhishek page says the ritual includes puja material, prasad, and Shighra darshan for two persons. Buying Shighra alone does not include Abhishek. Buying Abhishek is not required for darshan.",
        },
        {
          type: "note",
          text: "There is no VIP counter on Omkareshwar.co. Official booking means the trust’s page, not a button on this guide.",
        },
      ],
      faqs: [
        {
          q: "How much is Omkareshwar VIP darshan?",
          a: "The trust’s Shighra page showed ₹300 a person on 5 October 2026. Confirm the figure on that page before you pay. This guide does not take the payment.",
        },
        {
          q: "Can I book Shighra for a child?",
          a: "The official booking page says not to book tickets for children below 12.",
        },
        {
          q: "Can the ticket be refunded?",
          a: "The trust’s FAQ says darshan and puja bookings are non-refundable. One reschedule is allowed before the booked date, through the helpline.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर वीआईपी दर्शन – आधिकारिक शीघ्र टिकट",
      description:
        "ओंकारेश्वर वीआईपी दर्शन ट्रस्ट का शीघ्र टिकट है, पृष्ठ पर ₹300 प्रति व्यक्ति दिखा। सामान्य दर्शन मुफ्त रहता है। बुकिंग केवल shriomkareshwar.org पर करें।",
      h1: "ओंकारेश्वर वीआईपी दर्शन",
      kicker: "शीघ्र, निजी पास नहीं",
      answer:
        "जिसे एजेंट ओंकारेश्वर वीआईपी दर्शन कहते हैं, वह मंदिर ट्रस्ट की वेबसाइट पर शीघ्र दर्शन है। 5 अक्टूबर 2026 को शीघ्र पृष्ठ पर ₹300 प्रति व्यक्ति दिखा। सामान्य दर्शन के लिए यह टिकट जरूरी नहीं। यह वेबसाइट इसे नहीं बेचती।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "आधिकारिक नाम", value: "शीघ्र दर्शन" },
            { label: "शीघ्र पृष्ठ पर छपा शुल्क", value: "₹300 प्रति व्यक्ति, हर अतिरिक्त व्यक्ति सहित" },
            { label: "भुगतान कहाँ", value: "{{darshanBooking|आधिकारिक बुकिंग पृष्ठ}} या {{shighraInfo|शीघ्र जानकारी पृष्ठ}}" },
            { label: "बच्चे", value: "बुकिंग पृष्ठ कहता है कि 12 वर्ष से छोटे बच्चों का टिकट न खरीदें" },
            { label: "वापसी", value: "प्रश्नोत्तर कहता है टिकट अप्रतिदेय हैं; हेल्पलाइन से तय तारीख से पहले एक बार समय बदला जा सकता है" },
          ],
        },
        { type: "h2", text: "पैसे किस काम के हैं" },
        {
          type: "p",
          text: "ट्रस्ट शीघ्र को तय स्लॉट की सीधी दर्शन सुविधा बताता है, क्योंकि पर्व और छुट्टी पर मुफ्त कतार लंबी होती है। पृष्ठ पर लिखा था कि सोमवार से रविवार तक सभी स्लॉट के लिए बुकिंग खुली है। फॉर्म पर स्लॉट सुबह 7–9, सुबह 10–दोपहर 12, दोपहर 2–4 और शाम 6–8 दिखे। जो सूची मायने रखती है वह फॉर्म है। भोग या श्रृंगार के भीतर पड़ा स्लॉट फिर भी नहीं चलता। प्रश्नोत्तर कहता है कि मंदिर की सेवा के विराम में टिकट मान्य नहीं।",
        },
        { type: "h2", text: "गलत व्यक्ति को कैसे न दें" },
        {
          type: "ul",
          items: [
            "पते की पट्टी shriomkareshwar.org होनी चाहिए। मिलता-जुलता पृष्ठ, यूपीआई माँग, या होटल का “वीआईपी पैकेज” दूसरा लेनदेन है।",
            "ट्रस्ट विशेष चिह्न टालने, हर जरूरी खाना भरने, और भुगतान के दौरान पृष्ठ न रिफ्रेश करने को कहता है।",
            "पैसे कट जाएँ और टिकट न आए तो प्रश्नोत्तर मोबाइल नंबर और ऑर्डर आईडी से दोबारा प्रिंट कहता है, फिर सुबह 8 से रात 8 के बीच +91 8989998686 पर कॉल।",
            "रिस्टबैंड प्रवेश पर मिलता है और अनिवार्य है। फॉर्म सामान्य प्रवेश झूला पुल बताता है। भारी दिन पर वह बड़ चौक हो सकता है।",
            "छपा टिकट और फोटो पहचान रखें। प्रश्नोत्तर आधार या मिलता पहचान पत्र लिखता है।",
          ],
        },
        {
          type: "p",
          text: "अभिषेक दूसरी बुकिंग है। अभिषेक पृष्ठ कहता है कि उसमें पूजन सामग्री, प्रसाद, और दो व्यक्तियों का शीघ्र दर्शन शामिल है। अकेला शीघ्र अभिषेक नहीं है। दर्शन के लिए अभिषेक खरीदना जरूरी नहीं।",
        },
        {
          type: "note",
          text: "Omkareshwar.co पर कोई वीआईपी काउंटर नहीं है। आधिकारिक बुकिंग ट्रस्ट का पृष्ठ है, इस गाइड का बटन नहीं।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर वीआईपी दर्शन की कीमत क्या है?",
          a: "ट्रस्ट के शीघ्र पृष्ठ पर 5 अक्टूबर 2026 को ₹300 प्रति व्यक्ति दिखा। भुगतान से पहले उसी पृष्ठ पर अंक देखें। यह गाइड भुगतान नहीं लेती।",
        },
        {
          q: "क्या बच्चे का शीघ्र टिकट बनता है?",
          a: "आधिकारिक बुकिंग पृष्ठ कहता है कि 12 वर्ष से छोटे बच्चों के लिए टिकट न बुक करें।",
        },
        {
          q: "क्या टिकट वापस होता है?",
          a: "ट्रस्ट का प्रश्नोत्तर कहता है कि दर्शन और पूजा की बुकिंग अप्रतिदेय है। हेल्पलाइन से तय तारीख से पहले एक बार पुनर्निर्धारण हो सकता है।",
        },
      ],
    },
  },
];
