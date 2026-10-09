import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const routePages: PageDef[] = [
  {
    slug: "omkareshwar-from-indore",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "templeWebsite", "timetable"],
    related: ["how-to-reach-omkareshwar", "omkareshwar-one-day-trip", "omkareshwar-temple-timings", "hotels-in-omkareshwar"],
    en: {
      title: "Omkareshwar from Indore – Distance, Road & Darshan",
      description:
        "Indore to Omkareshwar is about 77 km on the temple trust’s pages and about 80 km on the state tourism page. How to land the road trip inside open darshan hours.",
      h1: "Omkareshwar from Indore",
      kicker: "The usual road",
      answer:
        "Indore is the ordinary start for Omkareshwar. The temple trust says the Jyotirlinga is about 77 km from Indore, and its how-to-reach table puts Devi Ahilyabai Holkar Airport at the same 77 km. Madhya Pradesh Tourism says the town is about 80 km southeast of Indore and the airport nearly 87 km. A same-day return is possible. The midday closure is what spoils it.",
      blocks: [
        { type: "h2", text: "Leave against the temple clock, not against breakfast" },
        {
          type: "p",
          text: "Mangal darshan runs from 5:00 AM. A family that wants that hour sleeps in Omkareshwar, not in Indore. A family that leaves Indore after a late breakfast can still make madhyanha darshan, which the daily page lists from 1:15 PM, provided they are not still on the bridge at 12:20 when bhog closes the sanctum. The road is the easy half. The queue is the half that does not shrink because Indore is close.",
        },
        {
          type: "p",
          text: "Neither the trust nor Madhya Pradesh Tourism publishes a driving-time table. Do not treat “two hours” from an old blog as a promise. Festival Mondays and Shravan fill the last stretch. If the map says the town and the temple gate still disagree, trust the gate.",
        },
        { type: "h2", text: "If you landed at the airport" },
        {
          type: "p",
          text: "You still have the same road the trust measured toward the town. State tourism’s airport figure is a little longer than the trust’s. Budget the larger number if you are booking a cab at arrivals, then check the fare against the day’s traffic rather than against this paragraph. There is no official temple taxi on this website.",
        },
        {
          type: "p",
          text: "A one-day pattern that respects the clock is in the [[omkareshwar-one-day-trip|one-day trip]]. Staying the night only pays if the morning aarti is actually the point.",
        },
      ],
      faqs: [
        {
          q: "How far is Omkareshwar from Indore?",
          a: "About 77 km according to the temple trust, and about 80 km according to Madhya Pradesh Tourism. The airport is 77 km on the trust’s table and nearly 87 km on the tourism page.",
        },
        {
          q: "Can I do Omkareshwar and return to Indore the same day?",
          a: "Yes, if you accept the queue and avoid arriving inside the 12:20–1:15 bhog closure. For the 4:30 AM aarti, sleep in Omkareshwar.",
        },
        {
          q: "Which station should an Indore traveller use?",
          a: "Most people come by road. If you use the train, the trust’s nearer station is Sanawad at 12 km, not Khandwa Junction.",
        },
      ],
    },
    hi: {
      title: "इंदौर से ओंकारेश्वर – दूरी, सड़क और दर्शन",
      description:
        "इंदौर से ओंकारेश्वर ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर और राज्य पर्यटन पर लगभग 80 किलोमीटर है। सफर को खुले दर्शन के घंटे में कैसे उतारें।",
      h1: "इंदौर से ओंकारेश्वर",
      kicker: "आम सड़क",
      answer:
        "ओंकारेश्वर की सामान्य शुरुआत इंदौर है। मंदिर ट्रस्ट ज्योतिर्लिंग को इंदौर से लगभग 77 किलोमीटर बताता है, और कैसे-पहुँचें तालिका हवाई अड्डे को भी 77 किलोमीटर रखती है। मध्य प्रदेश पर्यटन नगर को इंदौर से लगभग 80 किलोमीटर दक्षिण-पूर्व और हवाई अड्डे को लगभग 87 किलोमीटर कहता है। उसी दिन लौटना संभव है। उसे दोपहर का बंद घंटा बिगाड़ता है।",
      blocks: [
        { type: "h2", text: "नाश्ते से नहीं, मंदिर की घड़ी से निकलें" },
        {
          type: "p",
          text: "मंगल दर्शन सुबह 5:00 बजे से है। जिसे वह घंटा चाहिए वह इंदौर में नहीं, ओंकारेश्वर में सोए। जो इंदौर से देर नाश्ते के बाद निकले, वह मध्याह्न दर्शन पा सकता है, जो दैनिक पृष्ठ पर दोपहर 1:15 से है, बशर्ते 12:20 के भोग में पुल पर ही न खड़ा हो। सड़क आसान आधा है। कतार उस पास से नहीं घटती कि इंदौर करीब है।",
        },
        {
          type: "p",
          text: "न ट्रस्ट और न मध्य प्रदेश पर्यटन वाहन-समय की तालिका छापता है। पुराने ब्लॉग का “दो घंटा” वायदा न मानें। पर्व के सोमवार और सावन आखिरी दूरी भर देते हैं। नक्शा नगर दिखाए और फाटक अलग हो, तो फाटक मानें।",
        },
        { type: "h2", text: "यदि हवाई अड्डे पर उतरे हों" },
        {
          type: "p",
          text: "आगे वही सड़क है जिसे ट्रस्ट ने नगर की ओर नापा। राज्य पर्यटन का हवाई-अड्डा अंक ट्रस्ट से थोड़ा लंबा है। आगमन पर टैक्सी लेते समय बड़ा अंक रखकर चलें, फिर उस दिन की भीड़ से भाड़ा मिलाएँ, इस अनुच्छेद से नहीं। इस वेबसाइट पर कोई आधिकारिक मंदिर-टैक्सी नहीं है।",
        },
        {
          type: "p",
          text: "घड़ी का सम्मान करने वाला एक-दिवसीय ढंग [[omkareshwar-one-day-trip|एक दिन की यात्रा]] में है। रात रुकना तभी सार्थक है जब सुबह की आरती सच में लक्ष्य हो।",
        },
      ],
      faqs: [
        {
          q: "इंदौर से ओंकारेश्वर कितनी दूर है?",
          a: "मंदिर ट्रस्ट के अनुसार लगभग 77 किलोमीटर, मध्य प्रदेश पर्यटन के अनुसार लगभग 80। हवाई अड्डा ट्रस्ट की तालिका में 77 और पर्यटन पृष्ठ पर लगभग 87 किलोमीटर है।",
        },
        {
          q: "क्या उसी दिन इंदौर लौट सकते हैं?",
          a: "हाँ, यदि कतार मंजूर हो और दोपहर 12:20 से 1:15 के भोग में न पहुँचें। सुबह 4:30 की आरती के लिए ओंकारेश्वर में सोएँ।",
        },
        {
          q: "इंदौर वाला यात्री कौन सा स्टेशन ले?",
          a: "अधिकतर लोग सड़क से आते हैं। रेल लें तो ट्रस्ट का निकट स्टेशन सनावद है, 12 किलोमीटर, खंडवा जंक्शन नहीं।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-from-ujjain",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["faq", "timetable", "howToReach"],
    related: ["omkareshwar-two-day-trip", "omkareshwar-jyotirlinga", "how-to-reach-omkareshwar", "omkareshwar-from-indore"],
    en: {
      title: "Omkareshwar from Ujjain – 140 km & Two Jyotirlingas",
      description:
        "Ujjain to Omkareshwar is 140 km on the temple FAQ and on Madhya Pradesh Tourism. Mahakaleshwar and Omkareshwar are different shrines and different mornings.",
      h1: "Omkareshwar from Ujjain",
      kicker: "Two Jyotirlingas",
      answer:
        "Ujjain is 140 km from Omkareshwar. Both the temple trust’s FAQ and Madhya Pradesh Tourism print that figure. Mahakaleshwar stands in Ujjain and faces south. Omkareshwar stands on Mandhata in the Narmada. The road connects them. The rituals do not transfer.",
      blocks: [
        { type: "h2", text: "Do not fold the two mornings together" },
        {
          type: "p",
          text: "Ujjain’s bhasma aarti is Ujjain’s rite. Omkareshwar’s mangal aarti is 4:30 AM on the daily page here, followed by darshan from 5:00. A plan that “covers both Jyotirlingas before lunch” is a plan that misses one of them. The trust’s FAQ says you can travel between the towns by car or bus, and that buses via Indore run until 7 PM or later. It does not publish a minute-by-minute coach chart.",
        },
        {
          type: "p",
          text: "State tourism describes Ujjain as the right companion city, and names Mahakaleshwar, Harsiddhi, Kaal Bhairav, Sandipani Ashram and Mahakal Lok among its reasons. None of those is a substitute for the queue on Mandhata. If the family has one full day, pick one linga. If it has two nights, the [[omkareshwar-two-day-trip|two-day shape]] is the honest one.",
        },
        { type: "h2", text: "What not to copy from Ujjain" },
        {
          type: "ul",
          items: [
            "Ujjain’s booking habits are not Omkareshwar’s. Here the free queue still exists.",
            "A south-facing sanctum is Mahakaleshwar’s description, not this island’s.",
            "The 140 km figure is the published distance. Neither source printed a driving time, so this guide will not invent one.",
          ],
        },
      ],
      faqs: [
        {
          q: "How far is Omkareshwar from Ujjain?",
          a: "140 km, on the temple trust’s FAQ and on the Madhya Pradesh Tourism page.",
        },
        {
          q: "Can I see Mahakaleshwar and Omkareshwar the same morning?",
          a: "Not honestly. They are different temples, 140 km apart, with their own early rites. Give them separate mornings.",
        },
        {
          q: "Is there a bus?",
          a: "The trust’s FAQ says travel is by car or bus, and that buses via Indore continue until 7 PM or later. Ask locally for the day’s departure.",
        },
      ],
    },
    hi: {
      title: "उज्जैन से ओंकारेश्वर – 140 किलोमीटर, दो ज्योतिर्लिंग",
      description:
        "उज्जैन से ओंकारेश्वर मंदिर के प्रश्नोत्तर और मध्य प्रदेश पर्यटन दोनों पर 140 किलोमीटर है। महाकालेश्वर और ओंकारेश्वर अलग मंदिर और अलग सुबह हैं।",
      h1: "उज्जैन से ओंकारेश्वर",
      kicker: "दो ज्योतिर्लिंग",
      answer:
        "उज्जैन ओंकारेश्वर से 140 किलोमीटर है। मंदिर ट्रस्ट का प्रश्नोत्तर और मध्य प्रदेश पर्यटन दोनों यह अंक छापते हैं। महाकालेश्वर उज्जैन में है और दक्षिणमुखी है। ओंकारेश्वर नर्मदा के मांधाता पर है। सड़क उन्हें जोड़ती है। विधि नहीं बदलती।",
      blocks: [
        { type: "h2", text: "दोनों सुबह एक में न समेटें" },
        {
          type: "p",
          text: "उज्जैन की भस्म आरती उज्जैन की विधि है। यहाँ की मंगला आरती दैनिक पृष्ठ पर सुबह 4:30 है, दर्शन 5:00 से। “दोपहर के भोजन से पहले दोनों ज्योतिर्लिंग” वाली योजना एक को छोड़ देती है। ट्रस्ट का प्रश्नोत्तर कार या बस से यात्रा कहता है, और इंदौर होकर बसें शाम 7 या उसके बाद तक। मिनट-मिनट का कोच चार्ट नहीं छापता।",
        },
        {
          type: "p",
          text: "राज्य पर्यटन उज्जैन को साथ का शहर बताता है, और महाकालेश्वर, हरसिद्धि, काल भैरव, संदीपनि आश्रम तथा महाकाल लोक गिनाता है। इनमें से कोई मांधाता की कतार का विकल्प नहीं। परिवार के पास एक पूरा दिन हो तो एक लिंग चुनें। दो रात हों तो [[omkareshwar-two-day-trip|दो दिन का रूप]] ईमानदार है।",
        },
        { type: "h2", text: "उज्जैन से क्या नकल न करें" },
        {
          type: "ul",
          items: [
            "उज्जैन की बुकिंग की आदत यहाँ की आदत नहीं। यहाँ मुफ्त कतार अब भी है।",
            "दक्षिणमुखी गर्भगृह महाकालेश्वर का वर्णन है, इस द्वीप का नहीं।",
            "140 किलोमीटर प्रकाशित दूरी है। किसी स्रोत ने वाहन-समय नहीं छापा, इसलिए यह गाइड समय गढ़ेगी नहीं।",
          ],
        },
      ],
      faqs: [
        {
          q: "उज्जैन से ओंकारेश्वर कितनी दूर है?",
          a: "140 किलोमीटर, मंदिर ट्रस्ट के प्रश्नोत्तर पर और मध्य प्रदेश पर्यटन के पृष्ठ पर।",
        },
        {
          q: "क्या एक ही सुबह महाकालेश्वर और ओंकारेश्वर हो सकते हैं?",
          a: "ईमानदारी से नहीं। दोनों अलग मंदिर हैं, 140 किलोमीटर दूर, अपनी-अपनी प्रातः विधि के साथ। अलग सुबह दें।",
        },
        {
          q: "क्या बस मिलती है?",
          a: "ट्रस्ट का प्रश्नोत्तर कार या बस कहता है, और इंदौर होकर बसें शाम 7 बजे या बाद तक। उस दिन की छूट स्थानीय पूछें।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-from-bhopal",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "timetable"],
    related: ["how-to-reach-omkareshwar", "omkareshwar-from-khandwa", "omkareshwar-two-day-trip", "omkareshwar-distance"],
    en: {
      title: "Omkareshwar from Bhopal – How to Plan the Road",
      description:
        "Bhopal to Omkareshwar has no single kilometre figure on the temple trust’s pages. Plan via Indore or Khandwa, then match the darshan clock.",
      h1: "Omkareshwar from Bhopal",
      kicker: "From the state capital",
      answer:
        "Bhopal is the capital of Madhya Pradesh, and Omkareshwar is in Khandwa district on the Narmada. The temple trust does not print a Bhopal kilometre on the pages we checked. Treat the journey as a long road or a train toward Khandwa or Indore, then use the trust’s last-mile figures. Do not copy a precise kilometre from an uncited blog.",
      blocks: [
        { type: "h2", text: "Two honest ways to finish" },
        {
          type: "p",
          text: "One way is the road all the way, checked on a map the day you leave. The other is a train to Khandwa Junction, which the trust places 72 km from Omkareshwar, or to Sanawad, which it places 12 km away. Indore airport is the air gateway if you are comparing flights, at 77 km on the trust’s table. Raja Bhoj Airport in Bhopal does not remove that last road. It only changes where the road begins.",
        },
        {
          type: "p",
          text: "Because the capital-to-temple distance is not a trust figure, this page will not print one. A number that cannot be tied to the trust or to Madhya Pradesh Tourism would make the guide look more exact than it is. Open a map, note the range it gives that morning, and then protect the [[omkareshwar-temple-timings|5:00 AM opening]] and the 12:20 PM closure. A long arrival that lands in bhog feels like the temple is shut. It is the midday rite.",
        },
        { type: "h2", text: "What Bhopal travellers gain by staying the night" },
        {
          type: "p",
          text: "The drive is long enough that a same-day return eats both darshan and rest. The useful split is to reach in daylight, take the open afternoon or evening block, sleep near the bank you can actually walk from, and keep the morning for either mangal darshan or the [[omkareshwar-parikrama|parikrama]]. That is a plan. A slogan about “covering Omkareshwar from Bhopal in a day” is not.",
        },
      ],
      faqs: [
        {
          q: "How many kilometres is Bhopal to Omkareshwar?",
          a: "The temple trust’s how-to-reach page does not state one. Check a map on the day. This guide will not invent a precise figure.",
        },
        {
          q: "Is the train easier?",
          a: "Often, if you can get to Khandwa Junction or Sanawad. The trust puts those stations at 72 km and 12 km. The last road is still yours to arrange.",
        },
        {
          q: "Can it be a day trip from Bhopal?",
          a: "Only if you accept a very long day and a single darshan window. Staying the night is the plan that still has a morning.",
        },
      ],
    },
    hi: {
      title: "भोपाल से ओंकारेश्वर – सड़क की योजना",
      description:
        "भोपाल से ओंकारेश्वर का एक किलोमीटर-अंक ट्रस्ट के पृष्ठों पर नहीं है। इंदौर या खंडवा होकर योजना बनाएँ, फिर दर्शन की घड़ी मिलाएँ।",
      h1: "भोपाल से ओंकारेश्वर",
      kicker: "राज्य की राजधानी से",
      answer:
        "भोपाल मध्य प्रदेश की राजधानी है, और ओंकारेश्वर नर्मदा पर खंडवा जिले में है। जिन पृष्ठों को हमने जाँचा, उन पर मंदिर ट्रस्ट भोपाल का किलोमीटर नहीं छापता। यात्रा को लंबी सड़क मानें, या खंडवा अथवा इंदौर की ओर रेल, फिर ट्रस्ट के आखिरी अंक लगाएँ। बिना स्रोत के ब्लॉग से सटीक किलोमीटर न उठाएँ।",
      blocks: [
        { type: "h2", text: "पूरी करने के दो ईमानदार तरीके" },
        {
          type: "p",
          text: "एक तरीका पूरी सड़क है, निकलने वाले दिन नक्शे पर जाँची हुई। दूसरा खंडवा जंक्शन तक रेल है, जिसे ट्रस्ट 72 किलोमीटर रखता है, या सनावद तक, जिसे वह 12 किलोमीटर रखता है। उड़ानों की तुलना में हवाई द्वार इंदौर है, ट्रस्ट की तालिका पर 77 किलोमीटर। भोपाल का राजा भोज हवाई अड्डा वह आखिरी सड़क नहीं हटाता। केवल सड़क की शुरुआत बदलता है।",
        },
        {
          type: "p",
          text: "राजधानी से मंदिर की दूरी ट्रस्ट का अंक नहीं है, इसलिए यह पृष्ठ उसे नहीं छापेगा। जो संख्या ट्रस्ट या मध्य प्रदेश पर्यटन से न बँधे, वह गाइड को हकीकत से अधिक सटीक दिखाएगी। नक्शा खोलें, उस सुबह की सीमा नोट करें, और [[omkareshwar-temple-timings|सुबह 5:00 के खुलने]] तथा दोपहर 12:20 के बंद होने को बचाएँ। लंबा आगमन भोग में पड़े तो मंदिर बंद लगा। वह दोपहर की विधि है।",
        },
        { type: "h2", text: "रात रुकने से भोपाल वाले को क्या मिलता है" },
        {
          type: "p",
          text: "सफर इतना लंबा है कि उसी दिन वापसी दर्शन और आराम दोनों खा जाती है। उपयोगी बाँट यह है कि उजाले में पहुँचें, खुला दोपहर या शाम का खंड लें, जिस तट से सच में चल सकें उसके पास सोएँ, और सुबह मंगल दर्शन या [[omkareshwar-parikrama|परिक्रमा]] के लिए रखें। यही योजना है। “भोपाल से ओंकारेश्वर एक दिन में” वाला नारा योजना नहीं।",
        },
      ],
      faqs: [
        {
          q: "भोपाल से ओंकारेश्वर कितने किलोमीटर है?",
          a: "मंदिर ट्रस्ट का कैसे-पहुँचें पृष्ठ एक अंक नहीं देता। जाने वाले दिन नक्शा देखें। यह गाइड सटीक अंक नहीं गढ़ेगी।",
        },
        {
          q: "क्या रेल आसान है?",
          a: "अक्सर, यदि खंडवा जंक्शन या सनावद तक पहुँच बन जाए। ट्रस्ट इन्हें 72 और 12 किलोमीटर रखता है। आखिरी सड़क फिर भी आपको जुटानी है।",
        },
        {
          q: "क्या भोपाल से एक दिन की यात्रा हो सकती है?",
          a: "केवल तब, जब बहुत लंबा दिन और एक ही दर्शन-खंड मंजूर हो। रात रुकना वह योजना है जिसमें सुबह बचती है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-from-khandwa",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "timetable"],
    related: ["how-to-reach-omkareshwar", "where-is-omkareshwar", "omkareshwar-from-mumbai", "omkareshwar-darshan"],
    en: {
      title: "Omkareshwar from Khandwa – Junction, Sanawad & the Last Road",
      description:
        "Khandwa Junction is 72 km from Omkareshwar on the trust’s page. Sanawad is 12 km. The district town and the nearer station are not the same hop.",
      h1: "Omkareshwar from Khandwa",
      kicker: "District and station",
      answer:
        "Khandwa is the district that contains Omkareshwar, and Khandwa Junction is a mainline station. On the temple trust’s how-to-reach page the junction is 72 km away. Sanawad, not the junction, is the station the trust puts at 12 km. Madhya Pradesh Tourism instead prints Khandwa station at 77 km. Use the trust’s split, and expect a road at the end either way.",
      blocks: [
        { type: "h2", text: "Get off where you meant to get off" },
        {
          type: "p",
          text: "Long-distance trains use Khandwa Junction. The nearer stop the trust bothers to name is Sanawad, with a note that MEMU trains toward Khandwa run from there. If your ticket says Khandwa, you still have the 72 km the trust printed, or the 77 km state tourism printed. If your ticket says Sanawad, you have the short road. A shared jeep or a hired car finishes either version. This website does not dispatch either.",
        },
        {
          type: "p",
          text: "Mortakka bus stand, also 12 km on the trust’s table, is the bus point for Indore, Ujjain, Khargone and Khandwa. It is useful when the train time and the darshan time refuse to meet. It is not a second Sanawad.",
        },
        { type: "h2", text: "The hour you lose in town" },
        {
          type: "p",
          text: "Khandwa city has food and a station forecourt. It does not have the Jyotirlinga. Eating there and then discovering the 12:20 PM closure on Mandhata is a common way to miss madhyanha darshan. If the train arrives late morning, decide before lunch whether you are eating in Khandwa or on the island. The [[omkareshwar-temple-timings|timetable]] is short enough to read on the platform.",
        },
      ],
      faqs: [
        {
          q: "How far is Khandwa from Omkareshwar?",
          a: "The trust prints Khandwa Junction at 72 km. Madhya Pradesh Tourism prints Khandwa station at 77 km. Sanawad, the nearer station, is 12 km on the trust’s page.",
        },
        {
          q: "Is Omkareshwar inside Khandwa district?",
          a: "Yes. The trust’s address is Omkareshwar, District Khandwa, PIN 450554.",
        },
        {
          q: "Which train stop is closer?",
          a: "Sanawad, at 12 km on the official how-to-reach page. Khandwa Junction is the stop for more long-distance trains.",
        },
      ],
    },
    hi: {
      title: "खंडवा से ओंकारेश्वर – जंक्शन, सनावद और आखिरी सड़क",
      description:
        "खंडवा जंक्शन ट्रस्ट के पृष्ठ पर ओंकारेश्वर से 72 किलोमीटर है। सनावद 12 किलोमीटर है। जिला नगर और निकट स्टेशन एक ही छलांग नहीं हैं।",
      h1: "खंडवा से ओंकारेश्वर",
      kicker: "जिला और स्टेशन",
      answer:
        "खंडवा वह जिला है जिसमें ओंकारेश्वर है, और खंडवा जंक्शन बड़ा स्टेशन है। मंदिर ट्रस्ट के कैसे-पहुँचें पृष्ठ पर जंक्शन 72 किलोमीटर है। सनावद, जंक्शन नहीं, वह स्टेशन है जिसे ट्रस्ट 12 किलोमीटर रखता है। मध्य प्रदेश पर्यटन खंडवा स्टेशन 77 किलोमीटर छापता है। ट्रस्ट का बँटवारा मानें। दोनों तरह आखिर में सड़क बचती है।",
      blocks: [
        { type: "h2", text: "जहाँ उतरना था वहीं उतरें" },
        {
          type: "p",
          text: "लंबी दूरी की रेल खंडवा जंक्शन इस्तेमाल करती है। ट्रस्ट जिस निकट पड़ाव का नाम लेता है वह सनावद है, और लिखता है कि वहाँ से खंडवा की मेमू चलती है। टिकट पर खंडवा हो तो ट्रस्ट वाला 72 किलोमीटर या पर्यटन वाला 77 अभी बाकी है। टिकट पर सनावद हो तो छोटी सड़क है। साझा जीप या किराए की कार दोनों पूरी करती है। यह वेबसाइट किसी को नहीं भेजती।",
        },
        {
          type: "p",
          text: "मोरटक्का बस स्टैंड भी ट्रस्ट की तालिका में 12 किलोमीटर है। यह इंदौर, उज्जैन, खरगोन और खंडवा की बसों का पड़ाव है। जब रेल का समय और दर्शन का समय न मिलें तब काम आता है। यह दूसरा सनावद नहीं है।",
        },
        { type: "h2", text: "शहर में जो घंटा खोता है" },
        {
          type: "p",
          text: "खंडवा शहर में खाना है और स्टेशन का चौक है। ज्योतिर्लिंग नहीं है। वहीं खाकर मांधाता पर दोपहर 12:20 का बंद देखना मध्याह्न दर्शन चूकने का आम तरीका है। रेल देर सुबह पहुँचे तो भोजन से पहले तय करें कि खाना खंडवा में है या द्वीप पर। [[omkareshwar-temple-timings|समय सारिणी]] प्लेटफॉर्म पर पढ़ी जा सके उतनी छोटी है।",
        },
      ],
      faqs: [
        {
          q: "खंडवा से ओंकारेश्वर कितनी दूर है?",
          a: "ट्रस्ट खंडवा जंक्शन 72 किलोमीटर छापता है। मध्य प्रदेश पर्यटन खंडवा स्टेशन 77 किलोमीटर। निकट स्टेशन सनावद ट्रस्ट के पृष्ठ पर 12 किलोमीटर है।",
        },
        {
          q: "क्या ओंकारेश्वर खंडवा जिले में है?",
          a: "हाँ। ट्रस्ट का पता ओंकारेश्वर, जिला खंडवा, पिन 450554 है।",
        },
        {
          q: "कौन सा रेल पड़ाव पास है?",
          a: "सनावद, आधिकारिक कैसे-पहुँचें पृष्ठ पर 12 किलोमीटर। खंडवा जंक्शन अधिक लंबी रेलों का पड़ाव है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-from-mumbai",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "timetable", "faq"],
    related: ["omkareshwar-from-khandwa", "how-to-reach-omkareshwar", "omkareshwar-two-day-trip", "omkareshwar-darshan"],
    en: {
      title: "Omkareshwar from Mumbai – Flight, Train & the Last 77 km",
      description:
        "From Mumbai, reach Omkareshwar via Indore airport or Khandwa and Sanawad. The trust’s last figures are 77 km, 72 km and 12 km. No invented highway total.",
      h1: "Omkareshwar from Mumbai",
      kicker: "A longer pilgrimage",
      answer:
        "Mumbai travellers reach Omkareshwar by flight into Indore or by train toward Khandwa, then by road. The temple trust puts Indore airport at 77 km, Khandwa Junction at 72 km and Sanawad at 12 km. This guide does not print a Mumbai-to-temple highway total, because the trust and Madhya Pradesh Tourism do not print one on the pages we checked.",
      blocks: [
        { type: "h2", text: "The flight that still ends in a queue" },
        {
          type: "p",
          text: "Devi Ahilyabai Holkar Airport is the airport the trust names, with flights it describes as serving Delhi, Mumbai and other cities. Landing does not put you on Mandhata. You still have the airport transfer, and you still have the [[omkareshwar-temple-timings|bhog closure at 12:20 PM]]. An afternoon flight that is “only 77 km from the temple” can miss every open block if the road and the queue are treated as a formality.",
        },
        { type: "h2", text: "The train that needs the right station" },
        {
          type: "p",
          text: "Khandwa sits on routes people from Mumbai already understand. Confirm that your train stops there, then add the trust’s 72 km. If a slower train stops at Sanawad, that is the 12 km version and usually the kinder one at dawn. Overnight travel plus a free morning queue is a better shape than a same-day sprint. Sleep is part of the [[omkareshwar-two-day-trip|two-day plan]], not a luxury tacked on.",
        },
        {
          type: "note",
          text: "No agent on this page is the temple. Shighra, if you want it, is bought on the trust’s site after you know which slot you can physically reach.",
        },
      ],
      faqs: [
        {
          q: "What is the best way from Mumbai to Omkareshwar?",
          a: "Fly to Indore and take the road, or take a train to Khandwa Junction or Sanawad and finish by road. The trust’s distances for those three arrivals are 77 km, 72 km and 12 km.",
        },
        {
          q: "How many kilometres is the full road from Mumbai?",
          a: "We do not print one. It is not on the temple trust’s how-to-reach page or the state tourism page we checked. Use a map for the highway total.",
        },
        {
          q: "Can I return to Mumbai the same day?",
          a: "That depends on a flight or train you already hold. The temple day itself is easier if you keep one night.",
        },
      ],
    },
    hi: {
      title: "मुंबई से ओंकारेश्वर – उड़ान, रेल और आखिरी 77 किलोमीटर",
      description:
        "मुंबई से ओंकारेश्वर इंदौर हवाई अड्डे या खंडवा और सनावद होकर पहुँचें। ट्रस्ट के आखिरी अंक 77, 72 और 12 किलोमीटर हैं। राजमार्ग का कुल अंक गढ़ा नहीं गया।",
      h1: "मुंबई से ओंकारेश्वर",
      kicker: "लंबी तीर्थयात्रा",
      answer:
        "मुंबई के यात्री ओंकारेश्वर इंदौर की उड़ान से पहुँचते हैं या खंडवा की ओर रेल से, फिर सड़क से। मंदिर ट्रस्ट इंदौर हवाई अड्डा 77 किलोमीटर, खंडवा जंक्शन 72 किलोमीटर और सनावद 12 किलोमीटर रखता है। यह गाइड मुंबई से मंदिर का सड़क-योग नहीं छापती, क्योंकि जाँचे गए ट्रस्ट और पर्यटन पृष्ठों पर वह अंक नहीं है।",
      blocks: [
        { type: "h2", text: "वह उड़ान जो फिर भी कतार पर खत्म होती है" },
        {
          type: "p",
          text: "देवी अहिल्याबाई होल्कर हवाई अड्डा वही है जिसे ट्रस्ट नाम देता है, और लिखता है कि दिल्ली, मुंबई तथा अन्य शहरों की उड़ानें हैं। उतरना मांधाता पर खड़ा करना नहीं है। हवाई अड्डे से सड़क बाकी है, और [[omkareshwar-temple-timings|दोपहर 12:20 का भोग]] बाकी है। “मंदिर से केवल 77 किलोमीटर” वाली दोपहर की उड़ान हर खुला खंड चूक सकती है, यदि सड़क और कतार को औपचारिकता मान लिया जाए।",
        },
        { type: "h2", text: "वह रेल जिसे सही स्टेशन चाहिए" },
        {
          type: "p",
          text: "खंडवा उन मार्गों पर है जिन्हें मुंबई के लोग पहले से समझते हैं। देख लें कि आपकी रेल वहाँ रुकती है, फिर ट्रस्ट के 72 किलोमीटर जोड़ें। कोई धीमी रेल सनावद रुके तो वह 12 किलोमीटर वाला रूप है और भोर में अक्सर आसान। रात की यात्रा और सुबह की मुफ्त कतार उसी दिन की दौड़ से बेहतर रूप है। नींद [[omkareshwar-two-day-trip|दो दिन की योजना]] का हिस्सा है, ऊपर से चिपकी विलासिता नहीं।",
        },
        {
          type: "note",
          text: "इस पृष्ठ का कोई एजेंट मंदिर नहीं है। शीघ्र चाहिए तो ट्रस्ट की साइट पर तभी खरीदें जब पता हो कि उस स्लॉट पर शरीर से पहुँच सकते हैं।",
        },
      ],
      faqs: [
        {
          q: "मुंबई से ओंकारेश्वर का अच्छा रास्ता क्या है?",
          a: "इंदौर उड़ान भरें और सड़क लें, या खंडवा जंक्शन अथवा सनावद तक रेल लें और सड़क से पूरा करें। इन तीन आगमन की ट्रस्ट की दूरियाँ 77, 72 और 12 किलोमीटर हैं।",
        },
        {
          q: "मुंबई से पूरी सड़क कितने किलोमीटर है?",
          a: "हम अंक नहीं छापते। वह मंदिर ट्रस्ट के कैसे-पहुँचें पृष्ठ या जाँचे गए राज्य पर्यटन पृष्ठ पर नहीं है। राजमार्ग का योग नक्शे से लें।",
        },
        {
          q: "क्या उसी दिन मुंबई लौट सकते हैं?",
          a: "यह आपके पास पहले से मौजूद उड़ान या रेल पर निर्भर है। मंदिर का दिन आसान रहता है यदि एक रात रखी जाए।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-from-delhi",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "timetable", "vishramalaya"],
    related: ["omkareshwar-from-indore", "how-to-reach-omkareshwar", "omkareshwar-two-day-trip", "hotels-in-omkareshwar"],
    en: {
      title: "Omkareshwar from Delhi – Fly to Indore, Then the River",
      description:
        "From Delhi, the practical way to Omkareshwar is a flight or train toward Indore or Khandwa. The trust’s last mile is 77 km from Indore airport or 72 km from Khandwa.",
      h1: "Omkareshwar from Delhi",
      kicker: "Across the country",
      answer:
        "Delhi is not a day-trip city for Omkareshwar. The practical arrivals are a flight to Indore’s Devi Ahilyabai Holkar Airport, which the trust lists at 77 km, or a train to Khandwa Junction at 72 km or Sanawad at 12 km. The temple trust does not publish a Delhi kilometre, so this page does not invent one.",
      blocks: [
        { type: "h2", text: "Why the flight is usually the kind choice" },
        {
          type: "p",
          text: "The trust’s airport line says regular flights connect Indore with Delhi, Mumbai and other cities. That is the sentence that matters. After landing you are in the same position as an [[omkareshwar-from-indore|Indore traveller]], with one difference: your body has already spent the morning in the air. Do not book a Shighra slot that expires while you are still in the arrivals hall. Buy it, if you buy it, when the road time is real.",
        },
        { type: "h2", text: "The train is slower and sometimes kinder" },
        {
          type: "p",
          text: "A train that reaches Khandwa in the night lets you sleep once on the train and once, if you need the 4:30 AM aarti, near the river. The trust’s own stay, Shri Ji Vishramalaya, is a different booking from a private room and is described on the [[omkareshwar-dharamshala|dharamshala page]]. Neither booking is handled here.",
        },
        {
          type: "p",
          text: "Madhya Pradesh Tourism calls October to March the more comfortable season, and Shravan the crowded one. Delhi winters and a Narmada January are not the same cold, but they are a fairer match than May. The tourism page is a climate hint, not a promise about a particular week.",
        },
      ],
      faqs: [
        {
          q: "How should I travel from Delhi to Omkareshwar?",
          a: "Fly to Indore and continue by road, or take a train to Khandwa Junction or Sanawad. Use the trust’s last distances: 77 km, 72 km and 12 km.",
        },
        {
          q: "What is the road distance from Delhi?",
          a: "Not stated on the official pages we checked. A map can give the day’s highway figure. This guide will not publish an unsupported total.",
        },
        {
          q: "Is one day in Omkareshwar enough after a Delhi flight?",
          a: "You can take one darshan window. The 4:30 AM aarti needs a night beside the river, not a night in Delhi.",
        },
      ],
    },
    hi: {
      title: "दिल्ली से ओंकारेश्वर – इंदौर उड़ें, फिर नदी",
      description:
        "दिल्ली से ओंकारेश्वर का व्यावहारिक रास्ता इंदौर या खंडवा की ओर उड़ान या रेल है। ट्रस्ट की आखिरी दूरी इंदौर हवाई अड्डे से 77 या खंडवा से 72 किलोमीटर है।",
      h1: "दिल्ली से ओंकारेश्वर",
      kicker: "देश पार",
      answer:
        "दिल्ली ओंकारेश्वर का एक दिवसीय शहर नहीं है। व्यावहारिक आगमन इंदौर के देवी अहिल्याबाई होल्कर हवाई अड्डे की उड़ान है, जिसे ट्रस्ट 77 किलोमीटर रखता है, या खंडवा जंक्शन की रेल 72 किलोमीटर, अथवा सनावद 12 किलोमीटर। मंदिर ट्रस्ट दिल्ली का किलोमीटर नहीं छापता, इसलिए यह पृष्ठ नहीं गढ़ता।",
      blocks: [
        { type: "h2", text: "उड़ान अक्सर नरमी वाला चुनाव क्यों है" },
        {
          type: "p",
          text: "ट्रस्ट की हवाई-अड्डा पंक्ति कहती है कि इंदौर दिल्ली, मुंबई और अन्य शहरों से नियमित उड़ानों से जुड़ा है। मायने यही वाक्य रखता है। उतरने के बाद आप [[omkareshwar-from-indore|इंदौर के यात्री]] की स्थिति में हैं, एक फर्क के साथ: शरीर सुबह हवा में बिता चुका है। ऐसा शीघ्र स्लॉट न खरीदें जो आगमन हॉल में ही खत्म हो जाए। खरीदें तो तब, जब सड़क का समय सच हो।",
        },
        { type: "h2", text: "रेल धीमी है और कभी-कभी आसान" },
        {
          type: "p",
          text: "जो रेल रात में खंडवा पहुँचाए, वह ट्रेन में एक नींद देती है और, यदि सुबह 4:30 की आरती चाहिए, नदी के पास दूसरी। ट्रस्ट का अपना ठहरना श्री जी विश्रामालय है, निजी कमरे से अलग बुकिंग, जिसका वर्णन [[omkareshwar-dharamshala|धर्मशाला पृष्ठ]] पर है। दोनों बुकिंग यहाँ नहीं होतीं।",
        },
        {
          type: "p",
          text: "मध्य प्रदेश पर्यटन अक्टूबर से मार्च को अपेक्षाकृत सुगम मौसम कहता है, और सावन को भीड़ वाला। दिल्ली की सर्दी और नर्मदा का जनवरी एक ही ठंड नहीं, पर मई से बेहतर जोड़ी है। पर्यटन पृष्ठ मौसम का संकेत है, किसी सप्ताह का वायदा नहीं।",
        },
      ],
      faqs: [
        {
          q: "दिल्ली से ओंकारेश्वर कैसे जाएँ?",
          a: "इंदौर उड़ान भरें और सड़क पकड़ें, या खंडवा जंक्शन अथवा सनावद की रेल लें। ट्रस्ट की आखिरी दूरियाँ 77, 72 और 12 किलोमीटर हैं।",
        },
        {
          q: "दिल्ली से सड़क की दूरी क्या है?",
          a: "जाँचे गए आधिकारिक पृष्ठों पर नहीं है। नक्शा उस दिन का राजमार्ग अंक दे सकता है। यह गाइड बिना आधार का योग नहीं छापेगी।",
        },
        {
          q: "दिल्ली की उड़ान के बाद ओंकारेश्वर में एक दिन काफी है?",
          a: "एक दर्शन-खंड हो सकता है। सुबह 4:30 की आरती के लिए रात नदी के पास चाहिए, दिल्ली में नहीं।",
        },
      ],
    },
  },
];
