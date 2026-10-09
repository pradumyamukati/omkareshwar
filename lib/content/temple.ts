import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const templePages: PageDef[] = [
  {
    slug: "omkareshwar-jyotirlinga",
    cluster: "temple",
    kind: "place",
    updated,
    verified: updated,
    image: "temple",
    sources: ["templeWebsite", "faq"],
    related: ["omkareshwar-temple", "mamleshwar-temple", "omkareshwar-jyotirlinga-story", "omkareshwar-darshan"],
    en: {
      title: "Omkareshwar Jyotirlinga – Temple, Darshan & Guide",
      description:
        "Omkareshwar Jyotirlinga is on Mandhata island in the Narmada, Khandwa, Madhya Pradesh. What the shrine is, how Mamleshwar fits, and where the trust publishes darshan.",
      h1: "Omkareshwar Jyotirlinga",
      kicker: "The shrine",
      answer:
        "Omkareshwar Jyotirlinga is the Shiva shrine on Mandhata island in the Narmada, in Khandwa district of Madhya Pradesh. The Shri Omkareshwar Mandir Trust calls it the fourth of the twelve Jyotirlingas and places it about 77 km from Indore. Mamleshwar, on the south bank, is worshipped with it.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Deity", value: "Shiva, worshipped here as Omkareshwar" },
            { label: "Place", value: "Mandhata island, Narmada river, Khandwa, Madhya Pradesh, PIN 450554" },
            { label: "Named by the trust", value: "Fourth among the twelve Jyotirlingas" },
            { label: "Paired shrine", value: "[[mamleshwar-temple|Mamleshwar]], also called Amareshwar, on the south bank" },
            { label: "Texts named by the trust", value: "Skanda Purana, Shiva Purana and Vayu Purana" },
          ],
        },
        { type: "h2", text: "What “Jyotirlinga” means on this island" },
        {
          type: "p",
          text: "A Jyotirlinga is a shrine where Shiva is worshipped as a self-manifest column of light. India has a received list of twelve. The trust’s own homepage says Omkareshwar is the fourth, on the northern bank of the Narmada, and the only one of the twelve along that northern shore. This website repeats that claim as the trust’s statement. It is a religious identification, not a surveyor’s measurement.",
        },
        {
          type: "p",
          text: "The island is Mandhata. Madhya Pradesh Tourism also calls it Omkar Parvat, and says the island’s outline is compared with the syllable Om. That shape is why the town, the hill and the linga share one name. People sometimes shorten it to Omkar Mandhata temple. They are talking about this shrine, not a second Jyotirlinga a street away.",
        },
        { type: "h2", text: "Omkareshwar and Mamleshwar are one yatra" },
        {
          type: "p",
          text: "Madhya Pradesh Tourism says Mamleshwar, or Amreshwar, stands on the mainland south of the Narmada, and that legend treats Mamleshwar and Omkareshwar as manifestations of the same presence. Devotees cross between them. The trust’s FAQ lists the Jyotirlinga, Mamleshwar, the sangam and the parikrama as the places to see. If a plan visits only one door, it is still this yatra, but it is the shorter version.",
        },
        { type: "h2", text: "Same name, different cities" },
        {
          type: "p",
          text: "Pune has a Shiva temple called Omkareshwar. So do other towns. None of those is this island. The Jyotirlinga in this guide is the one whose trust address is Omkareshwar, District Khandwa, PIN 450554, and whose site is {{templeWebsite|shriomkareshwar.org}}. Ujjain’s Mahakaleshwar is a different Jyotirlinga. The trust’s FAQ puts Ujjain 140 km away.",
        },
        { type: "h2", text: "What the trust says Shiva does here" },
        {
          type: "p",
          text: "The trust writes that it is believed Shiva rests here after moving through the three worlds, and that this is why the temple keeps a shayan, a ritual of rest, with shayan darshan. Read that as the temple’s theology. The hour of that darshan is a timetable question, answered on the [[omkareshwar-temple-timings|timings page]], because the trust’s own pages do not all print the same evening clock.",
        },
        {
          type: "note",
          text: "Omkareshwar.co does not perform puja, take donations, or sell darshan. Ritual booking stays on the trust’s site.",
        },
      ],
      faqs: [
        {
          q: "Which Jyotirlinga is Omkareshwar?",
          a: "The trust describes Shri Omkareshwar as the fourth of the twelve Jyotirlingas, on Mandhata island in the Narmada.",
        },
        {
          q: "Are Omkareshwar and Mamleshwar the same?",
          a: "They are two shrines of one pilgrimage. Omkareshwar is on the island. Mamleshwar is on the south bank. Madhya Pradesh Tourism says legend treats them as one sacred presence.",
        },
        {
          q: "Is the Omkareshwar in Pune this temple?",
          a: "No. This Jyotirlinga is in Khandwa district, Madhya Pradesh, PIN 450554.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर ज्योतिर्लिंग – मंदिर, दर्शन और मार्गदर्शन",
      description:
        "ओंकारेश्वर ज्योतिर्लिंग नर्मदा के मांधाता द्वीप पर है, जिला खंडवा, मध्य प्रदेश। मंदिर क्या है, ममलेश्वर का साथ, और दर्शन की आधिकारिक जानकारी।",
      h1: "ओंकारेश्वर ज्योतिर्लिंग",
      kicker: "मंदिर",
      answer:
        "ओंकारेश्वर ज्योतिर्लिंग मध्य प्रदेश के खंडवा जिले में नर्मदा नदी के मांधाता द्वीप पर शिव का मंदिर है। श्री ओंकारेश्वर मंदिर ट्रस्ट इसे बारह ज्योतिर्लिंगों में चौथा बताता है और इंदौर से लगभग 77 किलोमीटर रखता है। दक्षिणी तट का ममलेश्वर इसी यात्रा का दूसरा द्वार है।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "देवता", value: "शिव, यहाँ ओंकारेश्वर के रूप में" },
            { label: "स्थान", value: "मांधाता द्वीप, नर्मदा, खंडवा, मध्य प्रदेश, पिन 450554" },
            { label: "ट्रस्ट का कथन", value: "बारह ज्योतिर्लिंगों में चौथा" },
            { label: "दूसरा मंदिर", value: "दक्षिणी तट पर [[mamleshwar-temple|ममलेश्वर]], जिसे अमरेश्वर भी कहते हैं" },
            { label: "ट्रस्ट द्वारा नामित ग्रंथ", value: "स्कंद पुराण, शिव पुराण और वायु पुराण" },
          ],
        },
        { type: "h2", text: "इस द्वीप पर ज्योतिर्लिंग का अर्थ" },
        {
          type: "p",
          text: "ज्योतिर्लिंग वह स्थान है जहाँ शिव को स्वयंप्रकट ज्योति के रूप में पूजा जाता है। बारह नामों की परंपरा प्रचलित है। ट्रस्ट के मुखपृष्ठ पर ओंकारेश्वर को चौथा कहा गया है, नर्मदा के उत्तरी तट पर, और कहा गया है कि बारहों में यही एकमात्र ज्योतिर्लिंग उस उत्तरी तट पर है। यह धार्मिक पहचान है। इसे नाप-तौल का दावा न समझें।",
        },
        {
          type: "p",
          text: "द्वीप का नाम मांधाता है। मध्य प्रदेश पर्यटन इसे ओंकार पर्वत भी कहता है और बताता है कि द्वीप की आकृति ॐ से मिलती है। इसीलिए नगर, पहाड़ी और लिंग एक नाम रखते हैं। ओंकार मांधाता मंदिर कोई दूसरा ज्योतिर्लिंग नहीं है। वही द्वार है।",
        },
        { type: "h2", text: "ओंकारेश्वर और ममलेश्वर एक यात्रा हैं" },
        {
          type: "p",
          text: "मध्य प्रदेश पर्यटन के अनुसार ममलेश्वर, या अमरेश्वर, नर्मदा के दक्षिण में मुख्य भूमि पर है, और मान्यता दोनों को एक ही उपस्थिति मानती है। ट्रस्ट का प्रश्नोत्तर ज्योतिर्लिंग, ममलेश्वर, संगम और परिक्रमा को देखने योग्य स्थान बताता है। एक ही द्वार देखकर लौटना भी इसी यात्रा का छोटा रूप है।",
        },
        { type: "h2", text: "नाम एक, शहर दूसरे" },
        {
          type: "p",
          text: "पुणे में भी ओंकारेश्वर नाम का शिव मंदिर है। वह यह द्वीप नहीं है। इस गाइड का ज्योतिर्लिंग वही है जिसका पता ओंकारेश्वर, जिला खंडवा, पिन 450554 है और जिसकी साइट {{templeWebsite|shriomkareshwar.org}} है। उज्जैन का महाकालेश्वर अलग ज्योतिर्लिंग है। ट्रस्ट का प्रश्नोत्तर उज्जैन को 140 किलोमीटर दूर बताता है।",
        },
        { type: "h2", text: "ट्रस्ट शयन के बारे में क्या कहता है" },
        {
          type: "p",
          text: "ट्रस्ट लिखता है कि मान्यता है, तीनों लोकों की यात्रा के बाद शिव यहाँ विश्राम करते हैं, इसलिए शयन और शयन दर्शन की व्यवस्था है। इसे मंदिर का धार्मिक कथन मानें। उस दर्शन का घंटा [[omkareshwar-temple-timings|समय पृष्ठ]] पर है, क्योंकि ट्रस्ट के अपने पृष्ठ शाम का एक ही घंटा नहीं छापते।",
        },
        {
          type: "note",
          text: "Omkareshwar.co पूजा नहीं करवाता, दान नहीं लेता और दर्शन नहीं बेचता। विधि की बुकिंग ट्रस्ट की साइट पर रहती है।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर कौन सा ज्योतिर्लिंग है?",
          a: "ट्रस्ट श्री ओंकारेश्वर को बारह ज्योतिर्लिंगों में चौथा बताता है, नर्मदा के मांधाता द्वीप पर।",
        },
        {
          q: "ओंकारेश्वर और ममलेश्वर एक ही हैं?",
          a: "दो मंदिर हैं, एक यात्रा। ओंकारेश्वर द्वीप पर है, ममलेश्वर दक्षिणी तट पर। मध्य प्रदेश पर्यटन कहता है कि मान्यता दोनों को एक ही पवित्र उपस्थिति मानती है।",
        },
        {
          q: "पुणे का ओंकारेश्वर यही मंदिर है?",
          a: "नहीं। यह ज्योतिर्लिंग मध्य प्रदेश के खंडवा जिले में है, पिन 450554।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-temple",
    cluster: "temple",
    kind: "place",
    updated,
    verified: updated,
    image: "temple",
    sources: ["templeWebsite", "rules", "faq", "abhishekBooking"],
    related: ["omkareshwar-darshan", "omkareshwar-temple-timings", "omkareshwar-vip-darshan", "narmada-ghat-omkareshwar"],
    en: {
      title: "Omkareshwar Temple – Mandhata Shrine & Visit",
      description:
        "How the Omkareshwar temple sits on Mandhata, what Madhya Pradesh Tourism says about the halls, and the practical rules before you join the queue.",
      h1: "Omkareshwar Temple",
      kicker: "The building and the visit",
      answer:
        "The Omkareshwar temple is the Jyotirlinga shrine on Mandhata island. You reach the island across the Narmada, leave footwear outside, and take darshan only in the hours the trust has open. The building is a working temple, not a monument with fixed tourist entry tickets.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "On the island", value: "Shri Omkareshwar Jyotirlinga" },
            { label: "Across the river", value: "[[mamleshwar-temple|Mamleshwar Temple]]" },
            { label: "Bridge", value: "Madhya Pradesh Tourism describes the Mamleshwar Setu as a 270-foot hanging bridge" },
            { label: "Helpline", value: "+91 8989998686, 8 AM to 8 PM, as printed by the trust" },
            { label: "Email printed by the trust", value: "shriomkareshwar@gmail.com" },
          ],
        },
        { type: "h2", text: "What you are walking into" },
        {
          type: "p",
          text: "Madhya Pradesh Tourism describes the main shrine as a north-Indian temple with a stone shikhara, a sanctum in an older manner of building, and an assembly hall it puts at 14 feet high on 60 pillars, within a five-storey complex. Deities it names inside that complex include Omkareshwar, Mahakaleshwar, Siddhanath and Gupteshwar. Treat the storey count and the pillar count as the tourism department’s description of the complex. The crowd in the lane will not feel like an architecture tour.",
        },
        {
          type: "p",
          text: "The photograph on this page was taken on 26 October 2021. It shows the temple as it stood that morning. It is not a promise about scaffolding, queues or festival cloth today.",
        },
        { type: "h2", text: "Before the railing" },
        {
          type: "p",
          text: "Ordinary darshan is free and needs no booking. That is the trust’s FAQ, not a slogan. The optional shorter queue is [[omkareshwar-vip-darshan|Shighra Darshan]], sold only on the trust’s site. A wristband from a hotel desk is not that ticket unless the payment actually ended on {{darshanBooking|the official booking page}}.",
        },
        {
          type: "ul",
          items: [
            "The trust’s FAQ says there is no official dress code. It recommends ordinary modest clothes.",
            "The Abhishek page says touching the main shivling is not permitted.",
            "The schedule page says offerings such as bilva, flowers or coconut may sometimes be stopped at the garbhagriha. Ask the volunteer at the railing rather than arguing from another temple’s habit.",
            "Carry the shoe token yourself. Families split in the crush.",
            "Prasad counters and the sanctum do not share one clock. The trust’s FAQ gives Omkar Prasadalaya meals from 10 AM to 3 PM and khichdi from 5 PM to 9 PM.",
          ],
        },
        { type: "h2", text: "Money" },
        {
          type: "p",
          text: "The trust says donations can be made at the temple counter, online, or in the official app, and that they are eligible for 80G. This website does not collect that money. If someone in the lane asks for a “temple fee” in cash, ask whether it is the official counter. The free darshan queue does not require a payment to a stranger.",
        },
      ],
      faqs: [
        {
          q: "Is Omkareshwar temple entry free?",
          a: "The trust says normal darshan is free and does not need a booking. Shighra Darshan is an optional paid ticket on the official website.",
        },
        {
          q: "Can I touch the shivling?",
          a: "The trust’s Abhishek page says touching the main shivling is not permitted. Priests perform the ritual.",
        },
        {
          q: "Which bridge is the temple bridge?",
          a: "Madhya Pradesh Tourism describes Mamleshwar Setu, a 270-foot hanging bridge over the Narmada, as the crossing associated with the town.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर मंदिर – मांधाता, दर्शन और जाने से पहले",
      description:
        "ओंकारेश्वर मंदिर मांधाता द्वीप पर कैसे स्थित है, परिसर के बारे में मध्य प्रदेश पर्यटन क्या कहता है, और कतार से पहले के व्यावहारिक नियम।",
      h1: "ओंकारेश्वर मंदिर",
      kicker: "भवन और दर्शन",
      answer:
        "ओंकारेश्वर मंदिर मांधाता द्वीप पर ज्योतिर्लिंग है। नर्मदा पार कर द्वीप पर पहुँचें, जूते बाहर उतारें, और दर्शन केवल उन्हीं घंटों में करें जिन्हें ट्रस्ट ने खुला रखा है। यह चालू मंदिर है, टिकट वाला स्मारक नहीं।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "द्वीप पर", value: "श्री ओंकारेश्वर ज्योतिर्लिंग" },
            { label: "नदी के पार", value: "[[mamleshwar-temple|ममलेश्वर मंदिर]]" },
            { label: "पुल", value: "मध्य प्रदेश पर्यटन ममलेश्वर सेतु को 270 फुट का झूला पुल बताता है" },
            { label: "हेल्पलाइन", value: "+91 8989998686, सुबह 8 से रात 8, जैसा ट्रस्ट ने छपा है" },
            { label: "ट्रस्ट का ईमेल", value: "shriomkareshwar@gmail.com" },
          ],
        },
        { type: "h2", text: "अंदर क्या है" },
        {
          type: "p",
          text: "मध्य प्रदेश पर्यटन मुख्य मंदिर को उत्तर भारतीय शिखर वाला बताता है, गर्भगृह को पुरानी निर्माण-शैली का, और सभा मंडप को 60 स्तंभों पर 14 फुट ऊँचा, पाँच मंजिला परिसर के भीतर। परिसर में ओंकारेश्वर, महाकालेश्वर, सिद्धनाथ और गुप्तेश्वर का नाम है। मंजिल और स्तंभ की गिनती पर्यटन विभाग का विवरण है। गली की भीड़ वास्तु-भ्रमण जैसी नहीं लगेगी।",
        },
        {
          type: "p",
          text: "इस पृष्ठ की तस्वीर 26 अक्टूबर 2021 की है। वह उस सुबह का मंदिर दिखाती है। आज की भीड़, मचान या पर्व की सजावट का वादा नहीं है।",
        },
        { type: "h2", text: "रेलिंग से पहले" },
        {
          type: "p",
          text: "सामान्य दर्शन मुफ्त है और बुकिंग नहीं माँगता। यह ट्रस्ट के प्रश्नोत्तर का वाक्य है। छोटी कतार [[omkareshwar-vip-darshan|शीघ्र दर्शन]] है, जो केवल ट्रस्ट की साइट पर बिकती है। होटल का रिस्टबैंड वही टिकट नहीं है, जब तक भुगतान {{darshanBooking|आधिकारिक बुकिंग पृष्ठ}} पर पूरा न हुआ हो।",
        },
        {
          type: "ul",
          items: [
            "ट्रस्ट का प्रश्नोत्तर कहता है कि कोई आधिकारिक ड्रेस कोड नहीं है। सामान्य शालीन वस्त्र काफी हैं।",
            "अभिषेक पृष्ठ कहता है कि मुख्य शिवलिंग को छूना मना है।",
            "समय पृष्ठ कहता है कि बिल्वपत्र, फूल या नारियल कभी गर्भगृह में रोके जा सकते हैं। दूसरी मंदिर की आदत से बहस करने के बजाय स्वयंसेवक से पूछें।",
            "जूते की टोकन अपने पास रखें। भीड़ में परिवार बिछड़ जाते हैं।",
            "प्रसाद की दुकान और गर्भगृह की घड़ी एक नहीं है। ट्रस्ट के प्रश्नोत्तर में ओंकार प्रसादालय का भोजन सुबह 10 से दोपहर 3 और खिचड़ी शाम 5 से रात 9 बजे तक है।",
          ],
        },
        { type: "h2", text: "पैसे" },
        {
          type: "p",
          text: "ट्रस्ट कहता है कि दान काउंटर पर, ऑनलाइन, या आधिकारिक ऐप में दिया जा सकता है, और वह 80G के योग्य है। यह वेबसाइट वह पैसा नहीं लेती। गली में कोई नकद “मंदिर शुल्क” माँगे तो पूछें कि काउंटर आधिकारिक है या नहीं। मुफ्त दर्शन की कतार किसी अजनबी को भुगतान नहीं माँगती।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर मंदिर में प्रवेश मुफ्त है?",
          a: "ट्रस्ट कहता है कि सामान्य दर्शन मुफ्त है और बुकिंग जरूरी नहीं। शीघ्र दर्शन आधिकारिक वेबसाइट पर वैकल्पिक सशुल्क टिकट है।",
        },
        {
          q: "क्या शिवलिंग छू सकते हैं?",
          a: "ट्रस्ट के अभिषेक पृष्ठ पर मुख्य शिवलिंग छूना मना लिखा है। विधि पुजारी करते हैं।",
        },
        {
          q: "मंदिर वाला पुल कौन सा है?",
          a: "मध्य प्रदेश पर्यटन नर्मदा पर ममलेश्वर सेतु को 270 फुट का झूला पुल बताता है।",
        },
      ],
    },
  },
];
