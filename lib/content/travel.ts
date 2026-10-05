import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const travelPages: PageDef[] = [
  {
    slug: "where-is-omkareshwar",
    cluster: "travel",
    kind: "place",
    updated,
    verified: updated,
    image: "aerial",
    sources: ["templeWebsite", "howToReach", "mpTourism", "faq"],
    related: ["how-to-reach-omkareshwar", "omkareshwar-from-indore", "omkareshwar-distance", "omkareshwar-jyotirlinga"],
    en: {
      title: "Where Is Omkareshwar? Location, Map & Distance",
      description:
        "Omkareshwar is on Mandhata island in the Narmada, Khandwa district, Madhya Pradesh. Distances the temple trust and state tourism actually publish.",
      h1: "Where is Omkareshwar?",
      kicker: "Location",
      answer:
        "Omkareshwar is a temple town on Mandhata island in the Narmada, in Khandwa district of Madhya Pradesh, PIN 450554. The Shri Omkareshwar Mandir Trust places the Jyotirlinga on the river’s northern bank, about 77 km from Indore. The island is also called Omkar Parvat.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "State", value: "Madhya Pradesh" },
            { label: "District", value: "Khandwa" },
            { label: "River", value: "Narmada. A local stream called Kaveri meets it here. This is not the Kaveri of Karnataka." },
            { label: "Island", value: "Mandhata, also called Omkar Parvat" },
            { label: "PIN printed by the trust", value: "450554" },
            { label: "From Indore", value: "About 77 km on the trust’s pages. Madhya Pradesh Tourism says about 80 km." },
            { label: "Nearest station the trust names", value: "Sanawad, 12 km" },
            { label: "Larger railhead", value: "Khandwa Junction, 72 km on the trust’s how-to-reach page" },
            { label: "Airport", value: "Devi Ahilyabai Holkar Airport, Indore. Trust: 77 km. State tourism: nearly 87 km." },
          ],
        },
        { type: "h2", text: "The island, not a neighbourhood of Indore" },
        {
          type: "p",
          text: "Mandhata sits in the Narmada so that the town is both a riverbank and an island. The Jyotirlinga is on the island. Mamleshwar is on the south bank, in the area also called Godarpura. People who sleep on the highway and plan to “walk to the temple” are often describing a different distance from the one a map of the sanctum implies. Ask which bank the room is on.",
        },
        {
          type: "p",
          text: "The map marker on this page uses the camera position recorded on a photograph taken at the temple on 26 October 2021: 22° 14′ 36.55″ N, 76° 09′ 03.21″ E. It locates the temple area. It is not a surveyed boundary of the trust’s land.",
        },
        { type: "h2", text: "Towns people measure it from" },
        {
          type: "p",
          text: "Indore is the usual gateway. Ujjain is 140 km away on both the trust’s FAQ and the state tourism page, which matters because pilgrims pair Mahakaleshwar with this Jyotirlinga. Maheshwar is about 70 km in the state tourism account. Khandwa is the district headquarters and the big station. Sanawad is the small station the trust puts 12 km off. Those two stations are the difference between a short last hop and an hour on the road.",
        },
        {
          type: "note",
          text: "Open the map only for orientation. Roadworks and festival traffic are not in a static marker. The trust’s {{howToReach|how-to-reach page}} is the transport list to recheck.",
        },
      ],
      faqs: [
        {
          q: "Which state is Omkareshwar in?",
          a: "Madhya Pradesh, in Khandwa district. The trust’s address uses PIN 450554.",
        },
        {
          q: "Which river is Omkareshwar on?",
          a: "The Narmada. The Jyotirlinga is on Mandhata island. Madhya Pradesh Tourism also describes a confluence with the local Kaveri.",
        },
        {
          q: "How far is Omkareshwar from Indore?",
          a: "The temple trust says about 77 km. Madhya Pradesh Tourism says about 80 km for the town. Use 77–80 km as the published range, not a single metre-exact figure.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर कहाँ है? स्थान, नक्शा और दूरी",
      description:
        "ओंकारेश्वर नर्मदा के मांधाता द्वीप पर है, जिला खंडवा, मध्य प्रदेश। मंदिर ट्रस्ट और राज्य पर्यटन जो दूरियाँ छापते हैं, वही यहाँ हैं।",
      h1: "ओंकारेश्वर कहाँ है?",
      kicker: "स्थान",
      answer:
        "ओंकारेश्वर मध्य प्रदेश के खंडवा जिले में नर्मदा के मांधाता द्वीप पर बसा मंदिर नगर है, पिन 450554। श्री ओंकारेश्वर मंदिर ट्रस्ट ज्योतिर्लिंग को नदी के उत्तरी तट पर बताता है, इंदौर से लगभग 77 किलोमीटर। द्वीप को ओंकार पर्वत भी कहते हैं।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "राज्य", value: "मध्य प्रदेश" },
            { label: "जिला", value: "खंडवा" },
            { label: "नदी", value: "नर्मदा। यहीं एक स्थानीय कावेरी मिलती है। यह कर्नाटक की कावेरी नहीं है।" },
            { label: "द्वीप", value: "मांधाता, जिसे ओंकार पर्वत भी कहते हैं" },
            { label: "ट्रस्ट का पिन", value: "450554" },
            { label: "इंदौर से", value: "ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर। मध्य प्रदेश पर्यटन लगभग 80 किलोमीटर कहता है।" },
            { label: "ट्रस्ट का निकट स्टेशन", value: "सनावद, 12 किलोमीटर" },
            { label: "बड़ा रेलवे स्टेशन", value: "खंडवा जंक्शन, ट्रस्ट के कैसे-पहुँचें पृष्ठ पर 72 किलोमीटर" },
            { label: "हवाई अड्डा", value: "देवी अहिल्याबाई होल्कर विमानक्षेत्र, इंदौर। ट्रस्ट: 77 किलोमीटर। राज्य पर्यटन: लगभग 87 किलोमीटर।" },
          ],
        },
        { type: "h2", text: "द्वीप है, इंदौर की बस्ती नहीं" },
        {
          type: "p",
          text: "मांधाता नर्मदा में ऐसा बैठा है कि नगर किनारा भी है और द्वीप भी। ज्योतिर्लिंग द्वीप पर है। ममलेश्वर दक्षिणी तट पर है, जिसे गोदरपुरा भी कहते हैं। जो लोग राजमार्ग पर रुककर “मंदिर तक पैदल” सोचते हैं, वे अक्सर गर्भगृह वाली दूरी नहीं नाप रहे होते। पूछें कि कमरा किस तट पर है।",
        },
        {
          type: "p",
          text: "इस पृष्ठ का नक्शा-चिह्न 26 अक्टूबर 2021 को मंदिर पर ली गई तस्वीर के कैमरा स्थान से है: 22° 14′ 36.55″ उत्तर, 76° 09′ 03.21″ पूर्व। यह मंदिर क्षेत्र दिखाता है। ट्रस्ट की भूमि की नापी हुई सीमा नहीं है।",
        },
        { type: "h2", text: "जिन शहरों से लोग दूरी नापते हैं" },
        {
          type: "p",
          text: "इंदौर सामान्य प्रवेशद्वार है। उज्जैन ट्रस्ट के प्रश्नोत्तर और राज्य पर्यटन दोनों पर 140 किलोमीटर है, क्योंकि यात्री महाकालेश्वर को इस ज्योतिर्लिंग के साथ जोड़ते हैं। महेश्वर राज्य पर्यटन के खाते में लगभग 70 किलोमीटर है। खंडवा जिला मुख्यालय और बड़ा स्टेशन है। सनावद छोटा स्टेशन है, जिसे ट्रस्ट 12 किलोमीटर रखता है। इन्हीं दो स्टेशनों में आखिरी छोटी दूरी और सड़क का एक घंटा बँटा है।",
        },
        {
          type: "note",
          text: "नक्शा केवल दिशा के लिए खोलें। सड़क का काम और पर्व की भीड़ स्थिर चिह्न में नहीं है। यातायात की सूची ट्रस्ट का {{howToReach|कैसे पहुँचें पृष्ठ}} है।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर किस राज्य में है?",
          a: "मध्य प्रदेश, जिला खंडवा। ट्रस्ट के पते पर पिन 450554 है।",
        },
        {
          q: "ओंकारेश्वर किस नदी पर है?",
          a: "नर्मदा पर। ज्योतिर्लिंग मांधाता द्वीप पर है। मध्य प्रदेश पर्यटन स्थानीय कावेरी के संगम का भी वर्णन करता है।",
        },
        {
          q: "इंदौर से ओंकारेश्वर कितनी दूर है?",
          a: "मंदिर ट्रस्ट लगभग 77 किलोमीटर कहता है। मध्य प्रदेश पर्यटन नगर के लिए लगभग 80 किलोमीटर कहता है। 77 से 80 किलोमीटर प्रकाशित सीमा मानें, मीटर-सटीक एक अंक नहीं।",
        },
      ],
    },
  },
  {
    slug: "how-to-reach-omkareshwar",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "mpTourism", "faq", "timetable"],
    related: ["where-is-omkareshwar", "omkareshwar-from-indore", "omkareshwar-from-khandwa", "omkareshwar-distance"],
    en: {
      title: "How to Reach Omkareshwar by Road, Rail & Air",
      description:
        "How to reach Omkareshwar using the temple trust’s own distances: Indore airport, Sanawad, Khandwa Junction and the Mortakka bus stand.",
      h1: "How to reach Omkareshwar",
      kicker: "Road, rail, air",
      answer:
        "The temple trust’s how-to-reach page names four arrivals: Devi Ahilyabai Holkar Airport at Indore, 77 km; Sanawad railway station, 12 km; Khandwa Junction, 72 km; and Mortakka bus stand, 12 km. Most pilgrims finish the journey by taxi or bus from Indore, Sanawad or Khandwa.",
      blocks: [
        {
          type: "table",
          caption: "Figures printed on the trust’s how-to-reach page",
          headers: ["Arrival", "Distance on that page", "What it is good for"],
          rows: [
            ["Indore airport", "77 km", "Flights, then a road transfer"],
            ["Sanawad station", "12 km", "The nearer rail stop the trust names"],
            ["Khandwa Junction", "72 km", "Long-distance trains"],
            ["Mortakka bus stand", "12 km", "Buses toward Indore, Ujjain, Khargone and Khandwa"],
          ],
        },
        { type: "h2", text: "Read the state page beside the trust page" },
        {
          type: "p",
          text: "Madhya Pradesh Tourism does not copy those four lines exactly. It puts the airport at nearly 87 km, Khandwa station at 77 km, and Indore junction at 78 km. The town itself is “about 80 km” from Indore on that page and “77 km” on the trust’s pages. The spread is real. Quote a range when you tell a family the distance, and look at a map on the morning you leave. This guide will not pretend the two public bodies measured the same gate.",
        },
        { type: "h2", text: "The station mix-up" },
        {
          type: "p",
          text: "Pages on the wider web sometimes say Khandwa is a few minutes from the temple. That figure belongs, if it belongs anywhere, to the nearer stop. The trust separates Sanawad at 12 km from Khandwa Junction at 72 km. Getting off at the wrong one is the expensive mistake, not the highway.",
        },
        { type: "h2", text: "After you arrive" },
        {
          type: "p",
          text: "The last kilometre is the bridge and the shoe stand, not the district border. Build the [[omkareshwar-temple-timings|darshan clock]] into the arrival. A noon landing from Indore can walk straight into the midday bhog closure at 12:20 PM. The trust’s FAQ says buses from Ujjain via Indore run until 7 PM or later. That is a published hint about evening buses, not a timetable of a named depot.",
        },
      ],
      faqs: [
        {
          q: "What is the nearest railway station to Omkareshwar?",
          a: "The trust names Sanawad at 12 km. Khandwa Junction, at 72 km on the same page, is the larger station for long-distance trains.",
        },
        {
          q: "Which airport is nearest?",
          a: "Devi Ahilyabai Holkar Airport in Indore. The trust prints 77 km. Madhya Pradesh Tourism prints nearly 87 km.",
        },
        {
          q: "Is there a bus into the town?",
          a: "The trust names Mortakka bus stand at 12 km, with buses for Indore, Ujjain, Khargone and Khandwa. Confirm the day’s departure locally.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर कैसे पहुँचें – सड़क, रेल और हवाई मार्ग",
      description:
        "मंदिर ट्रस्ट की दूरियों से ओंकारेश्वर कैसे पहुँचें: इंदौर हवाई अड्डा, सनावद, खंडवा जंक्शन और मोरटक्का बस स्टैंड।",
      h1: "ओंकारेश्वर कैसे पहुँचें",
      kicker: "सड़क, रेल, वायुयान",
      answer:
        "मंदिर ट्रस्ट का कैसे-पहुँचें पृष्ठ चार आगमन लिखता है: इंदौर का देवी अहिल्याबाई होल्कर हवाई अड्डा, 77 किलोमीटर; सनावद रेलवे स्टेशन, 12 किलोमीटर; खंडवा जंक्शन, 72 किलोमीटर; और मोरटक्का बस स्टैंड, 12 किलोमीटर। अधिकतर यात्री आखिरी सड़क इंदौर, सनावद या खंडवा से पूरी करते हैं।",
      blocks: [
        {
          type: "table",
          caption: "ट्रस्ट के कैसे-पहुँचें पृष्ठ पर छपे अंक",
          headers: ["आगमन", "उस पृष्ठ की दूरी", "किस काम आता है"],
          rows: [
            ["इंदौर हवाई अड्डा", "77 किमी", "उड़ान, फिर सड़क"],
            ["सनावद स्टेशन", "12 किमी", "ट्रस्ट का निकट रेल पड़ाव"],
            ["खंडवा जंक्शन", "72 किमी", "लंबी दूरी की रेल"],
            ["मोरटक्का बस स्टैंड", "12 किमी", "इंदौर, उज्जैन, खरगोन और खंडवा की बसें"],
          ],
        },
        { type: "h2", text: "राज्य का पृष्ठ ट्रस्ट के पृष्ठ के बगल में पढ़ें" },
        {
          type: "p",
          text: "मध्य प्रदेश पर्यटन ये चार पंक्तियाँ ज्यों की त्यों नहीं छापता। वह हवाई अड्डा लगभग 87 किलोमीटर, खंडवा स्टेशन 77 किलोमीटर, और इंदौर जंक्शन 78 किलोमीटर रखता है। नगर स्वयं उस पृष्ठ पर इंदौर से “लगभग 80 किलोमीटर” है और ट्रस्ट के पृष्ठों पर “77 किलोमीटर”। फर्क सच है। परिवार को दूरी बताते समय सीमा बोलें, और निकलने की सुबह नक्शा देखें। यह गाइड नहीं मानेगी कि दोनों सार्वजनिक संस्थाओं ने एक ही फाटक नापा।",
        },
        { type: "h2", text: "स्टेशन की गड़बड़ी" },
        {
          type: "p",
          text: "वेब पर कहीं खंडवा को मंदिर से कुछ मिनट बताया जाता है। वह अंक, यदि कहीं का है, निकट पड़ाव का है। ट्रस्ट सनावद को 12 किलोमीटर और खंडवा जंक्शन को 72 किलोमीटर अलग रखता है। गलत स्टेशन पर उतरना महँगी भूल है, राजमार्ग नहीं।",
        },
        { type: "h2", text: "पहुँचने के बाद" },
        {
          type: "p",
          text: "आखिरी किलोमीटर पुल और जूता-घर है, जिले की सीमा नहीं। आगमन में [[omkareshwar-temple-timings|दर्शन की घड़ी]] जोड़ें। इंदौर से दोपहर की सवारी सीधे 12:20 के मध्याह्न भोग में चल सकती है। ट्रस्ट का प्रश्नोत्तर कहता है कि उज्जैन से इंदौर होकर बसें शाम 7 बजे या उसके बाद तक मिलती हैं। यह शाम की बसों का संकेत है, किसी डिपो की समय-सारिणी नहीं।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर का सबसे नजदीकी रेलवे स्टेशन कौन सा है?",
          a: "ट्रस्ट सनावद को 12 किलोमीटर बताता है। खंडवा जंक्शन उसी पृष्ठ पर 72 किलोमीटर है और लंबी दूरी की रेल के लिए बड़ा स्टेशन है।",
        },
        {
          q: "सबसे नजदीकी हवाई अड्डा कौन सा है?",
          a: "इंदौर का देवी अहिल्याबाई होल्कर हवाई अड्डा। ट्रस्ट 77 किलोमीटर छापता है। मध्य प्रदेश पर्यटन लगभग 87 किलोमीटर।",
        },
        {
          q: "क्या नगर तक बस है?",
          a: "ट्रस्ट मोरटक्का बस स्टैंड 12 किलोमीटर बताता है, इंदौर, उज्जैन, खरगोन और खंडवा की बसों के साथ। उस दिन की छूट स्थानीय पूछें।",
        },
      ],
    },
  },
];
