import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const guidePages: PageDef[] = [
  {
    slug: "omkareshwar-complete-guide",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    image: "aerial",
    sources: ["templeWebsite", "timetable", "liveDarshan", "parikrama", "howToReach", "faq", "mpTourism"],
    related: [
      "omkareshwar-trip",
      "omkareshwar-darshan",
      "omkareshwar-temple-timings",
      "mamleshwar-temple",
      "omkareshwar-parikrama",
      "how-to-reach-omkareshwar",
    ],
    en: {
      title: "Omkareshwar Jyotirlinga – Complete Travel Guide & Darshan Tips",
      description:
        "A complete Omkareshwar travel guide: the Jyotirlinga and Mamleshwar, darshan hours, evening aarti, the 7 km parikrama, the Narmada, and how to order the day.",
      h1: "Omkareshwar travel guide",
      kicker: "Places, timings and the order of the day",
      answer:
        "Planning a trip to Omkareshwar is straightforward once the places, the hours and the ritual order are clear. Omkareshwar is one of the twelve Jyotirlingas of Shiva, on Mandhata island in the Narmada. This guide is the practical reading: what to see, when the doors open, what people chant, and how a day actually fits.",
      blocks: [
        { type: "h2", text: "What Omkareshwar is" },
        {
          type: "p",
          text: "Omkareshwar is a temple town on Mandhata island in the Narmada, in Khandwa district of Madhya Pradesh, PIN 450554. The Shri Omkareshwar Mandir Trust calls the shrine the fourth of the twelve Jyotirlingas. The name means lord of Om. Madhya Pradesh Tourism says the island’s outline is compared with the syllable ॐ, which is why the town, the hill and the linga share one name. People come for a family darshan, a solo yatra, a weekend from Indore, or a quieter retreat. The island gives you the sanctum, the river and the walk. It does not give you a second city.",
        },
        { type: "h2", text: "Two darshan, one yatra" },
        {
          type: "p",
          text: "Not every pilgrimage puts two doors this close. Devotees see both on the same visit. They are not two of the twelve, and they are not both on the island.",
        },
        {
          type: "ul",
          items: [
            "[[omkareshwar-temple|Omkareshwar Temple]] — the Jyotirlinga on Mandhata, the shrine the trust calls the fourth.",
            "[[mamleshwar-temple|Mamleshwar Temple]], also called Amareshwar — the same south-bank shrine, not a third temple. State tourism says legend treats it and Omkareshwar as one sacred presence. It is a short crossing, not a second island.",
            "[[siddhanath-temple-omkareshwar|Siddhanath]] — the old ruin state tourism places near the end of the parikrama, known for its elephant-carved plinth.",
            "[[gauri-somnath-temple|Gauri Somnath]] — the historic temple on that walk, with a large black-stone linga. State tourism dates the building to the Paramara period.",
          ],
        },
        {
          type: "p",
          text: "The trust’s own short list of places is the Jyotirlinga, Mamleshwar, the sangam and the parikrama. Start there. A driver who adds a shrine the trust does not name is selling a stop, not completing the yatra.",
        },
        { type: "h2", text: "Parikrama of Mandhata" },
        {
          type: "p",
          text: "The [[omkareshwar-parikrama|parikrama]] is about 7 km, on the trust’s page. Walking it is the act: you carry Narmada water, pass older temples, and keep the river in view. It is a morning of its own. Do not bolt it onto a same-day return to Indore if you also want the 4:30 AM aarti.",
        },
        { type: "h2", text: "The Narmada, from the water" },
        {
          type: "p",
          text: "A boat around the island is a common way to see the Om-shaped outline from the water. This guide has not verified an official boat timetable or fare, so it will not invent one. A private boat is a private boat. It becomes a temple service only if it is written on {{templeWebsite|shriomkareshwar.org}}. The [[narmada-ghat-omkareshwar|ghats]] and the 270-foot Mamleshwar bridge are the river experiences the tourism page actually names.",
        },
        { type: "h2", text: "Evening aarti" },
        {
          type: "p",
          text: "The evening at the Jyotirlinga is the part people remember after the queue. On the trust’s daily darshan page, checked 5 October 2026, shringar runs about 4:00–4:30 PM, shringar darshan until 9:30 PM, shayan aarti about 9:30–10:00 PM, and shayan darshan until 10:30 PM. Bells, lamps and the mantra belong to that hour. Recheck {{timetable|the daily page}} on the morning you travel. The trust’s live page prints a shorter evening, and the gate wins if the two disagree.",
        },
        { type: "h2", text: "Darshan, in the temple and on the stream" },
        {
          type: "p",
          text: "Inside, you are in a queue, not on a tour. Ordinary [[omkareshwar-darshan|darshan]] is free. The trust’s rule is not to touch the shivling. If you are not in Omkareshwar, the homepage plays the trust’s own live stream, the same channel as {{liveDarshan|the official live page}}. Camera windows that day were morning 5:30 AM–12:20 PM, afternoon 1:15–4:00 PM and evening 4:45–8:30 PM. A dark screen during aarti is the ritual, not a broken link. Watching does not hold a place in the queue.",
        },
        { type: "h2", text: "Mantras people chant here" },
        {
          type: "p",
          text: "The temple does not issue a script through this website. These are the lines devotees already use. The Mahamrityunjaya verse is longer than its first words. The opening is what people often start aloud.",
        },
        {
          type: "ul",
          items: [
            "Om Namah Shivaya.",
            "Mahamrityunjaya, from the opening: Om Tryambakam Yajamahe Sugandhim Pushtivardhanam.",
            "Omkareshwaraya Namah.",
            "Har Har Mahadev.",
            "Jai Omkareshwar.",
          ],
        },
        { type: "h2", text: "Plan the trip in three steps" },
        {
          type: "ol",
          items: [
            "Fix the day and the darshan. Read the [[omkareshwar-temple-timings|hours]], avoid arriving into the 12:20 PM bhog closure, and use Shighra only on the trust’s own page if you want the paid shorter line.",
            "Choose the bed before the view. A walkable room matters for the 4:30 AM aarti. The trust’s lodging is Shri Ji Vishramalaya. Private hotels and dharamshalas are separate, and this site does not reserve either. A guide, if you want one for the walk, is the trust’s own parikrama service.",
            "Choose the road, the train or the Indore flight, then read the [[how-to-reach-omkareshwar|route]]. The homepage map shows Mandhata. It does not book the seat.",
          ],
        },
        {
          type: "p",
          text: "The [[omkareshwar-trip|trip planner]] asks for a starting city, a length and who is travelling. It takes a few minutes. It reserves nothing, which is why a last-minute yatra can still be read clearly the night before.",
        },
        { type: "h2", text: "Why the yatra is worth planning this way" },
        {
          type: "ul",
          items: [
            "Darshan is free unless you choose Shighra on the official site. This guide takes no darshan money and sells no guide.",
            "There is no app. The pages are the website.",
            "The useful order — door, hour, bed, road — is short enough to settle before you leave.",
            "The distinct acts are the two doors, the parikrama, the ghat, the evening aarti, and the trust’s live stream if you are elsewhere.",
            "The same facts exist in English and Hindi, so one link is enough to share.",
          ],
        },
        { type: "h2", text: "The shape of a visit people remember" },
        {
          type: "p",
          text: "Omkareshwar stays personal when the plan is plain: an easy order, more than one sacred act, the aarti you actually attend, and the Narmada beside the island. Skip collecting only a photograph at the gate. See the Jyotirlinga, cross to Mamleshwar, and leave with the hour you stood there.",
        },
        {
          type: "note",
          text: "Omkareshwar.co explains the yatra. It is not the temple, and it does not book darshan, a boat, a guide or a room.",
        },
      ],
      faqs: [
        {
          q: "How many days does Omkareshwar need?",
          a: "One open darshan block fits in a day from Indore. The 4:30 AM aarti, Mamleshwar and any of the 7 km parikrama need a night in town.",
        },
        {
          q: "Are Omkareshwar and Amareshwar two Jyotirlingas?",
          a: "They are two doors of one yatra. Omkareshwar is the Jyotirlinga on the island. Amareshwar is another name for Mamleshwar, on the south bank. This guide does not count them as two of the twelve.",
        },
        {
          q: "Can I book the hotel or a guide on this page?",
          a: "No. Sleep at the trust’s Vishramalaya or a private hotel you book yourself. A parikrama guide, if you want the official one, is arranged on the trust’s parikrama page.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर ज्योतिर्लिंग – पूरी यात्रा गाइड और दर्शन",
      description:
        "ओंकारेश्वर की पूरी यात्रा गाइड: ज्योतिर्लिंग और ममलेश्वर, दर्शन का समय, संध्या आरती, 7 किलोमीटर परिक्रमा, नर्मदा, और दिन का क्रम।",
      h1: "ओंकारेश्वर यात्रा गाइड",
      kicker: "स्थान, समय और दिन का क्रम",
      answer:
        "ओंकारेश्वर की यात्रा तब सीधी है जब स्थान, घंटे और विधि का क्रम साफ हो। ओंकारेश्वर शिव के बारह ज्योतिर्लिंगों में से एक है, नर्मदा के मांधाता द्वीप पर। यह गाइड व्यावहारिक पाठ है: क्या देखें, द्वार कब खुलें, लोग क्या जपें, और एक दिन सच में कैसे बैठे।",
      blocks: [
        { type: "h2", text: "ओंकारेश्वर क्या है" },
        {
          type: "p",
          text: "ओंकारेश्वर नर्मदा के मांधाता द्वीप पर मंदिर-नगर है, मध्य प्रदेश का खंडवा जिला, पिन 450554। श्री ओंकारेश्वर मंदिर ट्रस्ट इसे बारह ज्योतिर्लिंगों में चौथा कहता है। नाम का अर्थ ॐ के स्वामी से है। मध्य प्रदेश पर्यटन कहता है कि द्वीप की आकृति ॐ से मिलती है, इसलिए नगर, पहाड़ी और लिंग एक नाम रखते हैं। लोग परिवार के दर्शन, अकेले तीर्थ, इंदौर से सप्ताहांत, या शांत प्रवास के लिए आते हैं। द्वीप गर्भगृह, नदी और चाल देता है। दूसरा शहर नहीं देता।",
        },
        { type: "h2", text: "दो दर्शन, एक यात्रा" },
        {
          type: "p",
          text: "हर तीर्थ दो द्वार इतने पास नहीं रखता। श्रद्धालु एक ही यात्रा में दोनों देखते हैं। ये बारह में से दो नहीं हैं, और दोनों द्वीप पर नहीं हैं।",
        },
        {
          type: "ul",
          items: [
            "[[omkareshwar-temple|ओंकारेश्वर मंदिर]] — मांधाता का ज्योतिर्लिंग, जिसे ट्रस्ट चौथा कहता है।",
            "[[mamleshwar-temple|ममलेश्वर मंदिर]], जिसे अमरेश्वर भी कहते हैं — वही दक्षिणी तट का मंदिर, कोई तीसरा मंदिर नहीं। राज्य पर्यटन कहता है कि मान्यता इसे और ओंकारेश्वर को एक ही पवित्र उपस्थिति मानती है। यह छोटा पार जाना है, दूसरा द्वीप नहीं।",
            "[[siddhanath-temple-omkareshwar|सिद्धनाथ]] — पुराना अवशेष, जिसे राज्य पर्यटन परिक्रमा के अंत के पास रखता है, हाथियों वाली पीठ के लिए जाना जाता है।",
            "[[gauri-somnath-temple|गौरी सोमनाथ]] — उसी चाल पर ऐतिहासिक मंदिर, बड़ा काला शिवलिंग। राज्य पर्यटन भवन को परमार काल का बताता है।",
          ],
        },
        {
          type: "p",
          text: "ट्रस्ट की अपनी छोटी सूची ज्योतिर्लिंग, ममलेश्वर, संगम और परिक्रमा है। वहीं से शुरू करें। जो चालक ट्रस्ट के न लिखे मंदिर को जोड़ दे, वह पड़ाव बेच रहा है, यात्रा पूरी नहीं कर रहा।",
        },
        { type: "h2", text: "मांधाता की परिक्रमा" },
        {
          type: "p",
          text: "[[omkareshwar-parikrama|परिक्रमा]] ट्रस्ट के पृष्ठ पर लगभग 7 किलोमीटर है। चलना ही कार्य है: नर्मदा जल साथ रहता है, पुराने मंदिर मिलते हैं, नदी दृष्टि में रहती है। यह अपने आप में एक सुबह है। सुबह 4:30 की आरती भी चाहिए और उसी दिन इंदौर लौटना भी हो, तो इसे उसी दिन न जोड़ें।",
        },
        { type: "h2", text: "नर्मदा, जल से" },
        {
          type: "p",
          text: "द्वीप के चारों ओर नाव से ॐ जैसी आकृति जल से दिखती है। इस गाइड ने आधिकारिक नाव-सारिणी या भाड़ा जाँचा नहीं, इसलिए अंक नहीं गढ़ेगी। निजी नाव निजी सवारी है। वह मंदिर-सेवा तभी है जब {{templeWebsite|shriomkareshwar.org}} पर लिखी हो। [[narmada-ghat-omkareshwar|घाट]] और 270 फुट का ममलेश्वर पुल वे नदी-अनुभव हैं जिन्हें पर्यटन पृष्ठ सच में नाम देता है।",
        },
        { type: "h2", text: "संध्या आरती" },
        {
          type: "p",
          text: "ज्योतिर्लिंग की संध्या वह अंश है जो कतार के बाद याद रहता है। ट्रस्ट के दैनिक दर्शन पृष्ठ पर, 5 अक्टूबर 2026 को जाँचा गया, श्रृंगार लगभग शाम 4:00–4:30, श्रृंगार दर्शन रात 9:30 तक, शयन आरती लगभग 9:30–10:00, और शयन दर्शन 10:30 तक है। घंटी, दीप और मंत्र उसी घंटे के हैं। यात्रा वाली सुबह {{timetable|दैनिक पृष्ठ}} फिर देखें। ट्रस्ट का लाइव पृष्ठ शाम छोटी छापता है। दोनों अलग हों तो फाटक मानें।",
        },
        { type: "h2", text: "दर्शन, मंदिर में और धारा पर" },
        {
          type: "p",
          text: "अंदर आप कतार में हैं, भ्रमण पर नहीं। सामान्य [[omkareshwar-darshan|दर्शन]] मुफ्त है। ट्रस्ट का नियम है शिवलिंग न छुएँ। यदि आप ओंकारेश्वर में नहीं हैं, मुखपृष्ठ ट्रस्ट की अपनी लाइव धारा चलाता है, वही चैनल जो {{liveDarshan|आधिकारिक लाइव पृष्ठ}} पर है। उस दिन कैमरा खिड़कियाँ सुबह 5:30 से 12:20, दोपहर 1:15 से 4:00, और शाम 4:45 से 8:30 थीं। आरती में काली स्क्रीन विधि है, टूटी कड़ी नहीं। देखने से कतार में जगह नहीं रुकती।",
        },
        { type: "h2", text: "जो मंत्र यहाँ जपे जाते हैं" },
        {
          type: "p",
          text: "मंदिर इस वेबसाइट के जरिए कोई पटकथा नहीं देता। ये वे पंक्तियाँ हैं जो श्रद्धालु पहले से जपते हैं। महामृत्युंजय मंत्र पहले शब्दों से लंबा है। आरंभ वही है जिसे लोग अक्सर ज़ोर से शुरू करते हैं।",
        },
        {
          type: "ul",
          items: [
            "ॐ नमः शिवाय।",
            "महामृत्युंजय, आरंभ से: ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।",
            "ओंकारेश्वराय नमः।",
            "हर हर महादेव।",
            "जय ओंकारेश्वर।",
          ],
        },
        { type: "h2", text: "यात्रा तीन कदम में" },
        {
          type: "ol",
          items: [
            "दिन और दर्शन तय करें। [[omkareshwar-temple-timings|घंटे]] पढ़ें, दोपहर 12:20 के भोग-बंद में पहुँचने से बचें, और छोटी सशुल्क पंक्ति चाहिए तो शीघ्र केवल ट्रस्ट के अपने पृष्ठ पर लें।",
            "दृश्य से पहले बिस्तर चुनें। सुबह 4:30 की आरती के लिए चलने लायक कमरा मायने रखता है। ट्रस्ट का ठहरना श्री जी विश्रामालय है। निजी होटल और धर्मशाला अलग हैं, और यह साइट दोनों आरक्षित नहीं करती। चाल के लिए मार्गदर्शक चाहिए तो ट्रस्ट की अपनी परिक्रमा सेवा लें।",
            "सड़क, रेल या इंदौर की उड़ान चुनें, फिर [[how-to-reach-omkareshwar|मार्ग]] पढ़ें। मुखपृष्ठ का नक्शा मांधाता दिखाता है। सीट नहीं बुक करता।",
          ],
        },
        {
          type: "p",
          text: "[[omkareshwar-trip|यात्रा योजना]] प्रस्थान शहर, अवधि और साथ कौन है, यही पूछता है। कुछ मिनट लगते हैं। कुछ आरक्षित नहीं होता, इसलिए आखिरी क्षण की यात्रा भी पिछली रात साफ पढ़ी जा सकती है।",
        },
        { type: "h2", text: "योजना इस तरह बनाने का कारण" },
        {
          type: "ul",
          items: [
            "दर्शन मुफ्त है, जब तक आप आधिकारिक साइट पर शीघ्र न चुनें। यह गाइड दर्शन का पैसा नहीं लेती और मार्गदर्शक नहीं बेचती।",
            "कोई ऐप नहीं है। पृष्ठ ही वेबसाइट हैं।",
            "काम का क्रम — द्वार, घंटा, बिस्तर, सड़क — निकलने से पहले तय हो जाता है।",
            "अलग कार्य हैं: दो द्वार, परिक्रमा, घाट, संध्या आरती, और यदि आप कहीं और हों तो ट्रस्ट की लाइव धारा।",
            "वही तथ्य अंग्रेजी और हिन्दी में हैं, इसलिए एक कड़ी काफी है।",
          ],
        },
        { type: "h2", text: "जो यात्रा याद रहती है" },
        {
          type: "p",
          text: "ओंकारेश्वर तब व्यक्तिगत रहता है जब योजना सादी हो: आसान क्रम, एक से अधिक पवित्र कार्य, वह आरती जिसमें आप सच में खड़े हों, और द्वीप के पास नर्मदा। केवल फाटक की तस्वीर लेकर न लौटें। ज्योतिर्लिंग देखें, ममलेश्वर पार जाएँ, और वह घंटा साथ ले जाएँ जिसमें आप वहाँ खड़े थे।",
        },
        {
          type: "note",
          text: "Omkareshwar.co यात्रा समझाती है। यह मंदिर नहीं है, और दर्शन, नाव, मार्गदर्शक या कमरा बुक नहीं करती।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर के लिए कितने दिन चाहिए?",
          a: "इंदौर से एक खुला दर्शन-खंड एक दिन में समाता है। सुबह 4:30 की आरती, ममलेश्वर और 7 किलोमीटर परिक्रमा का कोई अंश हो तो नगर में रात चाहिए।",
        },
        {
          q: "क्या ओंकारेश्वर और अमरेश्वर दो ज्योतिर्लिंग हैं?",
          a: "ये एक यात्रा के दो द्वार हैं। ओंकारेश्वर द्वीप का ज्योतिर्लिंग है। अमरेश्वर ममलेश्वर का दूसरा नाम है, दक्षिणी तट पर। यह गाइड इन्हें बारह में से दो नहीं गिनती।",
        },
        {
          q: "क्या इस पृष्ठ पर होटल या मार्गदर्शक बुक हो सकता है?",
          a: "नहीं। ट्रस्ट के विश्रामालय में सोएँ, या निजी होटल स्वयं बुक करें। परिक्रमा का आधिकारिक मार्गदर्शक चाहिए तो ट्रस्ट के परिक्रमा पृष्ठ पर तय करें।",
        },
      ],
    },
  },
];
