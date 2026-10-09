import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const placePages: PageDef[] = [
  {
    slug: "places-to-visit-in-omkareshwar",
    cluster: "places",
    kind: "place",
    updated,
    verified: updated,
    image: "aerial",
    sources: ["faq", "parikrama", "templeWebsite"],
    related: ["mamleshwar-temple", "omkareshwar-parikrama", "siddhanath-temple-omkareshwar", "gauri-somnath-temple", "narmada-ghat-omkareshwar"],
    en: {
      title: "Places to Visit in Omkareshwar – Temples, Ghats & Path",
      description:
        "The places that belong to an Omkareshwar visit: the Jyotirlinga, Mamleshwar, the parikrama shrines, Narmada ghats, and what state tourism adds.",
      h1: "Places to visit in Omkareshwar",
      kicker: "On the island and the banks",
      answer:
        "The visit that matches the name is the Jyotirlinga on Mandhata, Mamleshwar on the south bank, a Narmada ghat, and as much of the parikrama as the day allows. The trust’s FAQ lists those. Madhya Pradesh Tourism adds Siddhanath, Gauri Somnath, Kedareshwar, the Govinda Bhagavatpada caves and Ekatma Dham.",
      blocks: [
        { type: "h2", text: "Start with the two doors" },
        {
          type: "p",
          text: "If the family can do only two things, do [[omkareshwar-jyotirlinga|Omkareshwar]] and [[mamleshwar-temple|Mamleshwar]]. State tourism says legend treats them as one presence. Everything else is a widening of that yatra, not a replacement. The sangam, where the Narmada meets the local Kaveri, is the third name on the trust’s own short list.",
        },
        { type: "h2", text: "Along the walk and beyond it" },
        {
          type: "ul",
          items: [
            "[[omkareshwar-parikrama|Parikrama]] of about 7 km, as the trust describes it, passing shrines rather than a viewpoint.",
            "[[siddhanath-temple-omkareshwar|Siddhanath]], which state tourism calls a 13th-century ruin with an elephant frieze, near the end of the path.",
            "[[gauri-somnath-temple|Gauri Somnath]], described by state tourism as an 11th-century, three-storey Bhumija temple with a black-stone linga of about six feet, protected by the state archaeology department.",
            "Kedareshwar, which state tourism places about 4 km from the Jyotirlinga at the confluence, and compares in feeling with Kedarnath. It is still this river, not Uttarakhand.",
            "[[narmada-ghat-omkareshwar|The ghats]]. State tourism names Fanase Ghat and Peshawar Ghat, and a daily Shayan Aarti of the river at Kotitirtha Ghat.",
            "Ekatma Dham and the Statue of Oneness, which state tourism says was installed in September 2023: a 108-foot figure of Adi Shankaracharya on a 54-foot pedestal and a 27-foot lotus base. The trust’s homepage also points parikrama walkers toward the statue.",
          ],
        },
        {
          type: "p",
          text: "Govinda Bhagavatpada’s cave is tied, in the tourism account, to Adi Shankaracharya’s study. Kajal Rani Cave is mentioned at about 9 km. The tourism page mixes a heading there. This guide will not repeat a confused heading as a fact. If you go, confirm the turn locally.",
        },
        {
          type: "note",
          text: "Maheshwar, about 70 km, and Sailani Island, about 40 km, are state-tourism excursions. They are not inside the Omkareshwar darshan day.",
        },
      ],
      faqs: [
        {
          q: "What are the main places to visit in Omkareshwar?",
          a: "The Jyotirlinga, Mamleshwar, the sangam and the parikrama are the trust’s own short list. State tourism adds Siddhanath, Gauri Somnath, Kedareshwar and Ekatma Dham.",
        },
        {
          q: "How long is the parikrama?",
          a: "The temple trust says about 7 km.",
        },
        {
          q: "Is Maheshwar inside Omkareshwar?",
          a: "No. Madhya Pradesh Tourism places Maheshwar about 70 km away. It is a separate town on the Narmada.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर में घूमने की जगहें – मंदिर, घाट और पथ",
      description:
        "ओंकारेश्वर की यात्रा में जो स्थान बनते हैं: ज्योतिर्लिंग, ममलेश्वर, परिक्रमा के मंदिर, नर्मदा घाट, और राज्य पर्यटन जो जोड़ता है।",
      h1: "ओंकारेश्वर में घूमने के स्थान",
      kicker: "द्वीप और किनारे",
      answer:
        "नाम से मेल खाती यात्रा मांधाता का ज्योतिर्लिंग, दक्षिणी तट का ममलेश्वर, एक नर्मदा घाट, और जितनी परिक्रमा दिन दे उतनी है। ट्रस्ट का प्रश्नोत्तर यही गिनाता है। मध्य प्रदेश पर्यटन सिद्धनाथ, गौरी सोमनाथ, केदारेश्वर, गोविंद भगवत्पाद की गुफा और एकात्म धाम जोड़ता है।",
      blocks: [
        { type: "h2", text: "दो द्वारों से शुरू करें" },
        {
          type: "p",
          text: "परिवार केवल दो काम कर सके तो [[omkareshwar-jyotirlinga|ओंकारेश्वर]] और [[mamleshwar-temple|ममलेश्वर]] करे। राज्य पर्यटन कहता है कि मान्यता इन्हें एक उपस्थिति मानती है। बाकी सब इसी यात्रा का विस्तार है, विकल्प नहीं। संगम, जहाँ नर्मदा स्थानीय कावेरी से मिलती है, ट्रस्ट की छोटी सूची का तीसरा नाम है।",
        },
        { type: "h2", text: "रास्ते पर और उसके आगे" },
        {
          type: "ul",
          items: [
            "लगभग 7 किलोमीटर की [[omkareshwar-parikrama|परिक्रमा]], जैसा ट्रस्ट बताता है। यह दृश्य-बिंदु नहीं, मंदिरों का रास्ता है।",
            "[[siddhanath-temple-omkareshwar|सिद्धनाथ]], जिसे राज्य पर्यटन 13वीं सदी का अवशेष और हाथी-शिल्प वाला बताता है, पथ के अंत के पास।",
            "[[gauri-somnath-temple|गौरी सोमनाथ]], राज्य पर्यटन के अनुसार 11वीं सदी का तीन मंजिला भूमिज मंदिर, लगभग छह फुट का काला शिवलिंग, राज्य पुरातत्व विभाग के संरक्षण में।",
            "केदारेश्वर, जिसे राज्य पर्यटन ज्योतिर्लिंग से लगभग 4 किलोमीटर, संगम पर रखता है, और अनुभव में केदारनाथ से मिलाता है। नदी फिर भी यही है, उत्तराखंड नहीं।",
            "[[narmada-ghat-omkareshwar|घाट]]। राज्य पर्यटन फणसे घाट और पेशवा घाट लिखता है, और कोटीतीर्थ घाट पर नदी की दैनिक शयन आरती।",
            "एकात्म धाम और स्टैच्यू ऑफ ओननेस। राज्य पर्यटन कहता है कि सितंबर 2023 में आदि शंकराचार्य की 108 फुट की मूर्ति लगाई गई, 54 फुट के पीठ और 27 फुट के कमल-आधार पर। ट्रस्ट का मुखपृष्ठ भी परिक्रमा वालों को मूर्ति की ओर इशारा करता है।",
          ],
        },
        {
          type: "p",
          text: "गोविंद भगवत्पाद की गुफा पर्यटन-विवरण में आदि शंकराचार्य की पढ़ाई से जुड़ी है। काजल रानी गुफा लगभग 9 किलोमीटर कही गई है। पर्यटन पृष्ठ पर वहाँ शीर्षक गड़बड़ाया है। यह गाइड गड़बड़ाया शीर्षक तथ्य की तरह नहीं दोहराएगी। जाएँ तो मोड़ स्थानीय पूछें।",
        },
        {
          type: "note",
          text: "महेश्वर, लगभग 70 किलोमीटर, और सैलानी द्वीप, लगभग 40 किलोमीटर, राज्य पर्यटन के भ्रमण हैं। वे ओंकारेश्वर के दर्शन-दिन के अंदर नहीं हैं।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर में मुख्य स्थान कौन से हैं?",
          a: "ज्योतिर्लिंग, ममलेश्वर, संगम और परिक्रमा ट्रस्ट की अपनी छोटी सूची हैं। राज्य पर्यटन सिद्धनाथ, गौरी सोमनाथ, केदारेश्वर और एकात्म धाम जोड़ता है।",
        },
        {
          q: "परिक्रमा कितनी लंबी है?",
          a: "मंदिर ट्रस्ट लगभग 7 किलोमीटर कहता है।",
        },
        {
          q: "क्या महेश्वर ओंकारेश्वर के अंदर है?",
          a: "नहीं। मध्य प्रदेश पर्यटन महेश्वर को लगभग 70 किलोमीटर दूर रखता है। वह नर्मदा पर अलग नगर है।",
        },
      ],
    },
  },
  {
    slug: "mamleshwar-temple",
    cluster: "places",
    kind: "place",
    updated,
    verified: updated,
    image: "mamleshwar",
    sources: ["faq", "templeWebsite"],
    related: ["omkareshwar-jyotirlinga", "narmada-ghat-omkareshwar", "omkareshwar-parikrama", "places-to-visit-in-omkareshwar"],
    en: {
      title: "Mamleshwar Temple – South Bank of the Narmada",
      description:
        "Mamleshwar, also called Amareshwar, stands on the south bank at Omkareshwar. State tourism treats it as the same sacred presence as the island Jyotirlinga.",
      h1: "Mamleshwar Temple",
      kicker: "The south bank",
      answer:
        "Mamleshwar Temple, also called Amareshwar or Amreshwar, is on the south bank of the Narmada, opposite Mandhata. Madhya Pradesh Tourism says the name means lord of the immortals, and that legend treats Mamleshwar and Omkareshwar as one sacred presence in two shrines. The photograph here was taken on 26 October 2021.",
      blocks: [
        { type: "h2", text: "Why people cross" },
        {
          type: "p",
          text: "A visit that stops on the island and never looks south has done the famous half. The trust’s FAQ names Mamleshwar beside the Jyotirlinga, the sangam and the parikrama. The bridge state tourism describes, Mamleshwar Setu, is the 270-foot hanging bridge that makes the crossing obvious. Godarpura is the south-bank settlement you are standing in once you have crossed.",
        },
        {
          type: "p",
          text: "Do not let a driver rename this shrine as “the other Omkareshwar in another city”. The other door, for this yatra, is across the river. Ujjain is 140 km and a different Jyotirlinga. Pune’s Omkareshwar is a different temple again.",
        },
        { type: "h2", text: "What to expect inside" },
        {
          type: "p",
          text: "State tourism describes an older temple complex, rock walls and carving, around the linga. It does not publish a separate public timetable for Mamleshwar on the page we checked. This guide will not invent one. Ask at the gate, and do not assume the island’s bhog closure is printed on this door in the same minute. Give the crossing its own time, especially with elders.",
        },
        {
          type: "note",
          text: "The 26 October 2021 photograph is a record of that morning, by Ms Sarah Welch, released CC0. It is not an official temple image and not a live view.",
        },
      ],
      faqs: [
        {
          q: "Where is Mamleshwar Temple?",
          a: "On the south bank of the Narmada at Omkareshwar, opposite the Jyotirlinga on Mandhata.",
        },
        {
          q: "Is Mamleshwar a separate Jyotirlinga?",
          a: "Madhya Pradesh Tourism says legend treats Mamleshwar and Omkareshwar as manifestations of the same presence. Devotees visit both. This guide does not renumber the twelve.",
        },
        {
          q: "What else is Mamleshwar called?",
          a: "Amareshwar and Amreshwar. The trust and tourism pages use more than one spelling. They mean this south-bank shrine.",
        },
      ],
    },
    hi: {
      title: "ममलेश्वर मंदिर – नर्मदा का दक्षिणी तट",
      description:
        "ममलेश्वर, जिसे अमरेश्वर भी कहते हैं, ओंकारेश्वर के दक्षिणी तट पर है। राज्य पर्यटन इसे द्वीप के ज्योतिर्लिंग के साथ एक ही पवित्र उपस्थिति मानता है।",
      h1: "ममलेश्वर मंदिर",
      kicker: "दक्षिणी तट",
      answer:
        "ममलेश्वर मंदिर, जिसे अमरेश्वर या अम्रेश्वर भी कहते हैं, नर्मदा के दक्षिणी तट पर है, मांधाता के सामने। मध्य प्रदेश पर्यटन कहता है कि नाम का अर्थ अमरों के स्वामी से है, और मान्यता ममलेश्वर तथा ओंकारेश्वर को दो मंदिरों में एक ही उपस्थिति मानती है। यहाँ की तस्वीर 26 अक्टूबर 2021 की है।",
      blocks: [
        { type: "h2", text: "लोग पार क्यों जाते हैं" },
        {
          type: "p",
          text: "जो यात्रा द्वीप पर रुककर दक्षिण न देखे, उसने प्रसिद्ध आधा किया। ट्रस्ट का प्रश्नोत्तर ममलेश्वर को ज्योतिर्लिंग, संगम और परिक्रमा के साथ गिनाता है। राज्य पर्यटन जिस पुल का वर्णन करता है, ममलेश्वर सेतु, वही 270 फुट का झूला पुल है जिससे पार जाना साफ दिखता है। गोदरपुरा वह दक्षिणी बस्ती है जहाँ पार करने के बाद आप खड़े होते हैं।",
        },
        {
          type: "p",
          text: "किसी चालक को इस मंदिर का नाम “दूसरे शहर का दूसरा ओंकारेश्वर” न बदलने दें। इस यात्रा का दूसरा द्वार नदी के पार है। उज्जैन 140 किलोमीटर है और दूसरा ज्योतिर्लिंग। पुणे का ओंकारेश्वर फिर एक अलग मंदिर है।",
        },
        { type: "h2", text: "अंदर क्या अपेक्षा रखें" },
        {
          type: "p",
          text: "राज्य पर्यटन पुराना मंदिर-परिसर, शिला-दीवार और नक्काशी बताता है। जाँचे गए पृष्ठ पर ममलेश्वर की अलग सार्वजनिक समय-सारिणी नहीं है। यह गाइड सारिणी नहीं गढ़ेगी। फाटक पर पूछें, और यह न मानें कि द्वीप का भोग-बंद इसी द्वार पर उसी मिनट छपा है। पार जाने का अलग समय रखें, विशेषकर बुजुर्गों के साथ।",
        },
        {
          type: "note",
          text: "26 अक्टूबर 2021 की तस्वीर उस सुबह का रिकॉर्ड है, सुश्री सारा वेल्च, CC0। यह आधिकारिक मंदिर-चित्र नहीं और लाइव दृश्य नहीं।",
        },
      ],
      faqs: [
        {
          q: "ममलेश्वर मंदिर कहाँ है?",
          a: "ओंकारेश्वर में नर्मदा के दक्षिणी तट पर, मांधाता के ज्योतिर्लिंग के सामने।",
        },
        {
          q: "क्या ममलेश्वर अलग ज्योतिर्लिंग है?",
          a: "मध्य प्रदेश पर्यटन कहता है कि मान्यता ममलेश्वर और ओंकारेश्वर को एक ही उपस्थिति मानती है। श्रद्धालु दोनों जाते हैं। यह गाइड बारह की गिनती नहीं बदलती।",
        },
        {
          q: "ममलेश्वर को और क्या कहते हैं?",
          a: "अमरेश्वर और अम्रेश्वर। ट्रस्ट और पर्यटन पृष्ठ एक से अधिक वर्तनी लिखते हैं। मतलब यही दक्षिणी तट का मंदिर है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-parikrama",
    cluster: "places",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["parikrama", "templeWebsite"],
    related: ["siddhanath-temple-omkareshwar", "gauri-somnath-temple", "narmada-ghat-omkareshwar", "omkareshwar-two-day-trip"],
    en: {
      title: "Omkareshwar Parikrama – The 7 km Path",
      description:
        "Omkareshwar parikrama is the walk around Mandhata, about 7 km on the temple trust’s page, with Narmada water and shrines along the hill.",
      h1: "Omkareshwar parikrama",
      kicker: "The walk around the hill",
      answer:
        "The Omkareshwar parikrama is a walk of about 7 kilometres around Mandhata, as the temple trust describes it. Devotees carry Narmada water and pass temples and old monuments. The trust’s homepage names Siddhanath Baradari, Gauri Somnath and the Adi Shankaracharya statue at Ekatma Dham on that journey. It is a pilgrimage walk, not a shortcut to the sanctum.",
      blocks: [
        { type: "h2", text: "What the trust says you are doing" },
        {
          type: "p",
          text: "The parikrama page says people walk around Bhagwan Omkareshwar and Mandhata mountain with Narmada water, for a wish. The path is approximately 7 km. That is the figure to plan with. A “small evening stroll” is a different walk. Seven kilometres on a hill, in Shravan, with a vow, is a morning of its own. Do it in a day that is not also trying to catch both aartis and a train.",
        },
        { type: "h2", text: "What you can expect to pass" },
        {
          type: "p",
          text: "The homepage’s heritage note points to Siddhanath Baradari, [[gauri-somnath-temple|Gauri Somnath]] and the Shankaracharya statue. State tourism places Siddhanath near the end of the path and describes elephant carvings. It also describes a guided service in the trust’s own words on the homepage: the trust offers a guided parikrama. If you want that service, take it from {{parikrama|the official parikrama page}}, not from an unbadged person at the ghat.",
        },
        {
          type: "ul",
          items: [
            "Wear shoes you can walk in until the next shrine’s rule says otherwise.",
            "Carry water for yourself as well as the offering water. The Narmada water in the pot is not your drinking bottle.",
            "Leave the [[omkareshwar-temple-timings|darshan clock]] alone. The walk does not pause bhog for you.",
            "October to March is the season state tourism calls more comfortable. Shravan is the season it calls the most crowded.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long is Omkareshwar parikrama?",
          a: "About 7 km, on the temple trust’s parikrama page and homepage.",
        },
        {
          q: "What do people carry?",
          a: "The trust says devotees carry Narmada water and walk with a wish. Carry separate drinking water.",
        },
        {
          q: "Is there an official guide?",
          a: "The trust’s homepage describes a guided parikrama service. Arrange it through the official page.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर परिक्रमा – लगभग 7 किलोमीटर का पथ",
      description:
        "ओंकारेश्वर परिक्रमा मांधाता की परिक्रमा है, मंदिर ट्रस्ट के पृष्ठ पर लगभग 7 किलोमीटर, नर्मदा जल और पहाड़ी के मंदिरों के साथ।",
      h1: "ओंकारेश्वर परिक्रमा",
      kicker: "पहाड़ी की परिक्रमा",
      answer:
        "ओंकारेश्वर परिक्रमा मांधाता के चारों ओर लगभग 7 किलोमीटर की चाल है, जैसा मंदिर ट्रस्ट बताता है। श्रद्धालु नर्मदा जल लेकर चलते हैं और मंदिर तथा पुराने स्मारक मिलते हैं। ट्रस्ट का मुखपृष्ठ उस यात्रा पर सिद्धनाथ बारादरी, गौरी सोमनाथ और एकात्म धाम की आदि शंकराचार्य प्रतिमा गिनाता है। यह तीर्थ की चाल है, गर्भगृह का छोटा रास्ता नहीं।",
      blocks: [
        { type: "h2", text: "ट्रस्ट कहता है आप क्या कर रहे हैं" },
        {
          type: "p",
          text: "परिक्रमा पृष्ठ कहता है कि लोग भगवान ओंकारेश्वर और मांधाता पर्वत की परिक्रमा नर्मदा जल के साथ, मनौती लेकर करते हैं। पथ लगभग 7 किलोमीटर है। योजना इसी अंक से बनाएँ। “शाम की छोटी सैर” दूसरी चाल है। पहाड़ी पर सात किलोमीटर, सावन में, व्रत के साथ, अपने आप में एक सुबह है। उसे उस दिन न रखें जिसमें दोनों आरती और एक रेल भी पकड़नी हो।",
        },
        { type: "h2", text: "रास्ते में क्या मिल सकता है" },
        {
          type: "p",
          text: "मुखपृष्ठ की विरासत-टिप्पणी सिद्धनाथ बारादरी, [[gauri-somnath-temple|गौरी सोमनाथ]] और शंकराचार्य की प्रतिमा दिखाती है। राज्य पर्यटन सिद्धनाथ को पथ के अंत के पास रखता है और हाथियों की नक्काशी बताता है। मुखपृष्ठ ट्रस्ट के शब्दों में निर्देशित सेवा भी बताता है। वह सेवा चाहिए तो {{parikrama|आधिकारिक परिक्रमा पृष्ठ}} से लें, घाट पर बिना पहचान वाले व्यक्ति से नहीं।",
        },
        {
          type: "ul",
          items: [
            "ऐसे जूते पहनें जिनमें चला जाए, जब तक अगले मंदिर का नियम अलग न कहे।",
            "अर्पण के जल के साथ पीने का पानी अलग रखें। कलश का नर्मदा जल बोतल नहीं है।",
            "[[omkareshwar-temple-timings|दर्शन की घड़ी]] को अपनी चाल से न रोकें। परिक्रमा भोग नहीं टालती।",
            "अक्टूबर से मार्च को राज्य पर्यटन अपेक्षाकृत सुगम कहता है। सावन को सबसे भीड़ वाला।",
          ],
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर परिक्रमा कितनी लंबी है?",
          a: "लगभग 7 किलोमीटर, मंदिर ट्रस्ट के परिक्रमा पृष्ठ और मुखपृष्ठ पर।",
        },
        {
          q: "लोग क्या लेकर चलते हैं?",
          a: "ट्रस्ट कहता है कि श्रद्धालु नर्मदा जल लेकर मनौती के साथ चलते हैं। पीने का पानी अलग रखें।",
        },
        {
          q: "क्या आधिकारिक मार्गदर्शक है?",
          a: "ट्रस्ट का मुखपृष्ठ निर्देशित परिक्रमा सेवा बताता है। उसे आधिकारिक पृष्ठ से तय करें।",
        },
      ],
    },
  },
  {
    slug: "narmada-ghat-omkareshwar",
    cluster: "places",
    kind: "place",
    updated,
    verified: updated,
    image: "ghat",
    sources: [],
    related: ["omkareshwar-parikrama", "mamleshwar-temple", "omkareshwar-festivals", "where-is-omkareshwar"],
    en: {
      title: "Narmada Ghat Omkareshwar – Sacred Riverfront Steps",
      description:
        "The Narmada ghats at Omkareshwar are the sacred riverfront steps on Mandhata and the mainland, where pilgrims bathe before darshan of the Jyotirlinga.",
      h1: "Narmada Ghat Omkareshwar",
      kicker: "The river",
      answer:
        "The Narmada Ghats at Omkareshwar are the sacred riverfront steps that line the banks of the Narmada River, serving as the spiritual threshold where pilgrims transition from the material world to the divine presence of the Omkareshwar Jyotirlinga. These ghats, numbering approximately a dozen, are not merely architectural features but are integral to the pilgrimage experience, embodying centuries of devotion, ritual bathing, and spiritual purification. However, beneath their sacred veneer lies a complex reality of beauty, danger, and ongoing administrative challenges that shape the contemporary experience of this holy town.",
      blocks: [
        { type: "h2", text: "The Sacred Geography of the Ghats" },
        {
          type: "p",
          text: "Omkareshwar's Narmada Ghats are distributed across both the island of Mandhata and the mainland banks. The principal ghats include Abhay Ghat, Navin Ghat, Nagar Ghat, Gomukh Ghat, Kotitirth Ghat, Brahmapuri Ghat, Kevalram Ghat, Omkar Math Ghat, Bichhalia Ghat, Chakratirth Ghat, Barfani Ghat, and the Sangam Ghat at the confluence of the Narmada and Kaveri rivers. Each ghat carries its own mythological significance and serves distinct functions within the pilgrimage circuit.",
        },
        {
          type: "p",
          text: "Some of these ghats are ancient, their stone steps worn smooth by generations of devotees, while others were constructed in more recent times to accommodate the growing influx of pilgrims. Nagar Ghat, for instance, owes its development to the revered Malwa saint Shri Shri Nagarji, and is noted for its relative cleanliness and safety compared to other ghats.",
        },
        {
          type: "p",
          text: "The geographical setting of these ghats is nothing short of dramatic. The Narmada River, flowing between the Vindhya and Satpura mountain ranges, forms a deep, silent pool at Omkareshwar that once teemed with aquatic life so tame that fish would take grain from human hands. The island itself, shaped like the sacred syllable Om, rises from the river, creating a landscape where, as one historical account describes, the works of Nature complement those of man to provide a setting awe-inspiring in its magnificence.",
        },
        { type: "h2", text: "Spiritual Significance and Ritual Life" },
        {
          type: "p",
          text: "For devotees, the Narmada Ghats represent far more than physical infrastructure. Bathing in the Narmada at Omkareshwar is considered a powerful act of spiritual purification, a necessary preparation before darshan at the Jyotirlinga. The Narmada Aarti, held at Kotitirth Ghat, was revived in 2025 after a hiatus since the COVID-19 pandemic, restoring a daily evening ritual that evokes the famous Ganga Aarti of Haridwar and Rishikesh. Pilgrims gather at dusk to witness the lamps, chants, and offerings that transform the ghat into a stage of collective devotion.",
        },
        {
          type: "p",
          text: "The ghats also serve as the launching point for the Omkar Parvat Parikrama, the circumambulation of the sacred island by boat. This roughly six-to-seven-kilometer journey offers pilgrims a unique perspective on the island's Om-like shape and the surrounding temples and hills. The Brahmapuri Ghat holds particular importance, having hosted the Amritasya Maa Narmada Pad Parikrama program attended by Chief Minister Mohan Yadav, who offered prayers to Maa Narmada there.",
        },
        { type: "h2", text: "The Peril Beneath the Sacred Waters" },
        {
          type: "p",
          text: "Despite their spiritual allure, the Narmada Ghats at Omkareshwar have acquired a darker reputation as sites of recurring tragedy. In a single year, 24 devotees lost their lives in drowning incidents at these ghats, with over 62 deaths recorded in four years. The victims are predominantly pilgrims from Indore, Maharashtra, and Gujarat, often unaware of the river's hidden dangers.",
        },
        {
          type: "p",
          text: "The reasons for this peril are both natural and man-made. The Narmada's riverbed is extremely irregular, with sudden drop-offs plunging to depths of up to 200 feet in certain locations. Underwater rocks, trenches, and whirlpools create lethal hazards for bathers who venture beyond the shallow margins. The construction of the Omkareshwar Dam between 2001 and 2007 has exacerbated the problem by causing constant fluctuations in water levels. This fluctuation promotes the growth of algae on submerged rocks, making them dangerously slippery and concealing the sudden changes in depth.",
        },
        {
          type: "p",
          text: "The ghats themselves lack basic safety infrastructure. None of the ghats have railings, and resources for emergency rescue are limited. Boats crowd the ghats, leaving little space for safe bathing, and the number of illegal boats reportedly exceeds licensed ones. Even government boats stationed for security purposes often remain stationary during accidents, their boatmen occupied elsewhere.",
        },
        { type: "h2", text: "Administrative Responses and Future Plans" },
        {
          type: "p",
          text: "The persistent loss of life has prompted administrative action, particularly in preparation for the 2028 Simhastha festival in Ujjain, which is expected to draw massive crowds to Omkareshwar. The administration has announced the construction of eight new safe ghats equipped with railings, chains, and safety equipment. Additional resources and training are being provided to disaster management teams to handle emergencies during peak pilgrim periods.",
        },
        {
          type: "p",
          text: "Safety regulations have also been tightened. Boat operations for the full Omkar Parvat Parikrama are now restricted after 2 PM, with the restriction attributed to the risk of sudden weather changes and the difficulty of reaching rescue teams along the remote circumambulation route. The Nawik Sangh (Boatmen's Association) welcomed this decision, acknowledging that they themselves had long avoided sending boats on the parikrama after 4 PM due to safety concerns.",
        },
        {
          type: "p",
          text: "On the spiritual front, the government has committed to restoring the entire Narmada Parikrama Path to its original sacred form, with improved facilities including ghats at various Narmada banks and signboards for pilgrims. A grand Jyotirlinga temple is also planned for Omkareshwar, further elevating its status as a religious destination.",
        },
        { type: "h2", text: "The Ghats as Living Spaces" },
        {
          type: "p",
          text: "Beyond their ritual and administrative dimensions, the Narmada Ghats are vibrant living spaces. Early mornings see pilgrims descending for holy dips, priests offering prayers, and boatmen preparing for the day's Parikrama journeys. The Brahmapuri Ghat serves as a center for various human activities—bathing, washing, Narmada Poojan, and the disposal of ashes of the deceased. This concentration of activity, while spiritually meaningful, also creates environmental pressures, as sewage from the town discharges into the river at certain points.",
        },
        {
          type: "p",
          text: "The ghats offer moments of quiet contemplation as well. Visitors describe walking the riverfront at dawn, watching the light play on the water and the island temples, or taking an evening stroll to absorb the lived-in feel of the town—boatmen, bells, aarti movement, and views back toward the island. For those seeking a slower pace, Ahilya Ghat provides a more relaxed riverside experience, ideal for photography and reflection.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "The Narmada Ghats at Omkareshwar embody a profound paradox. They are simultaneously the holiest of thresholds and the most dangerous of places, sites of transcendent devotion and preventable tragedy. For the pilgrim, they offer the promise of purification and the proximity of the divine. For the administrator, they present an ongoing challenge of balancing spiritual tradition with modern safety imperatives. As Omkareshwar prepares for an unprecedented influx of devotees in the coming years, the transformation of these ghats—through new construction, stricter regulations, and heightened awareness—will determine whether the sacred waters of the Narmada continue to claim lives or finally become the safe refuge of faith they are meant to be.",
        },
      ],
      faqs: [
        {
          q: "Which are the main Narmada ghats at Omkareshwar?",
          a: "They include Abhay, Navin, Nagar, Gomukh, Kotitirth, Brahmapuri, Kevalram, Omkar Math, Bichhalia, Chakratirth, Barfani, and Sangam Ghat, where the Narmada meets the local Kaveri.",
        },
        {
          q: "Where is the Narmada aarti held?",
          a: "At Kotitirth Ghat. It was revived in 2025 as a daily evening ritual after a break that began during the COVID-19 pandemic.",
        },
        {
          q: "Is bathing at the ghats safe?",
          a: "The riverbed is irregular, with sudden deep drops, slippery rocks, and changing water levels. Stay in the shallow margin, and do not treat every step as a safe bathing place.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर का नर्मदा घाट – पवित्र नदी तट",
      description:
        "ओंकारेश्वर के नर्मदा घाट मांधाता और मुख्य भूमि पर पवित्र सीढ़ियाँ हैं, जहाँ श्रद्धालु ज्योतिर्लिंग के दर्शन से पहले स्नान करते हैं।",
      h1: "ओंकारेश्वर का नर्मदा घाट",
      kicker: "नदी",
      answer:
        "ओंकारेश्वर के नर्मदा घाट नदी के किनारे की वे पवित्र सीढ़ियाँ हैं, जहाँ से यात्री सांसारिक दुनिया से ओंकारेश्वर ज्योतिर्लिंग की दिव्य उपस्थिति की ओर बढ़ते हैं। ये घाट लगभग एक दर्जन हैं। ये केवल पत्थर की सीढ़ियाँ नहीं, तीर्थ का हिस्सा हैं। इनमें सदियों की श्रद्धा, स्नान और आत्मिक शुद्धि बसती है। इस पवित्र रूप के नीचे सौंदर्य, खतरा और प्रशासन की चुनौतियाँ भी हैं, जो इस नगर के आज के अनुभव को गढ़ती हैं।",
      blocks: [
        { type: "h2", text: "घाटों की पवित्र भूगोल" },
        {
          type: "p",
          text: "ओंकारेश्वर के नर्मदा घाट मांधाता द्वीप और मुख्य भूमि, दोनों तटों पर हैं। प्रमुख घाटों में अभय घाट, नवीन घाट, नगर घाट, गोमुख घाट, कोटीतीर्थ घाट, ब्रह्मपुरी घाट, केवलराम घाट, ओंकार मठ घाट, बिछलिया घाट, चक्रतीर्थ घाट, बर्फानी घाट, और नर्मदा-कावेरी संगम का संगम घाट शामिल हैं। हर घाट की अपनी कथा है और तीर्थ-मार्ग में उसका अपना काम है।",
        },
        {
          type: "p",
          text: "कुछ घाट प्राचीन हैं, जिनकी सीढ़ियाँ पीढ़ियों के पैरों से चिकनी हो गई हैं। कुछ नए बने हैं, बढ़ती भीड़ के लिए। नगर घाट का विकास मालवा के संत श्री श्री नगरजी से जुड़ा माना जाता है, और इसे अन्य घाटों की तुलना में अपेक्षाकृत स्वच्छ और सुरक्षित कहा जाता है।",
        },
        {
          type: "p",
          text: "इन घाटों का दृश्य नाटकीय है। नर्मदा विंध्य और सतपुड़ा के बीच बहती है और ओंकारेश्वर में एक गहरे, शांत जलाशय का रूप लेती है। कहा जाता है कि कभी यहाँ मछलियाँ इतनी सहज थीं कि हाथ से दाना ले लेती थीं। ॐ के आकार का द्वीप नदी से ऊपर उठता है। एक पुराने वर्णन के अनुसार यहाँ प्रकृति और मनुष्य का काम मिलकर एक विस्मयकारी दृश्य बनाता है।",
        },
        { type: "h2", text: "आध्यात्मिक महत्त्व और विधि" },
        {
          type: "p",
          text: "श्रद्धालुओं के लिए नर्मदा घाट केवल निर्माण नहीं हैं। ओंकारेश्वर में नर्मदा स्नान को ज्योतिर्लिंग के दर्शन से पहले की शुद्धि माना जाता है। कोटीतीर्थ घाट की नर्मदा आरती 2025 में फिर शुरू हुई, कोविड-19 के बाद के अंतराल के बाद। यह संध्या की दैनिक विधि हरिद्वार और ऋषिकेश की गंगा आरती की याद दिलाती है। संध्या को लोग दीप, मंत्र और अर्पण देखने इकट्ठा होते हैं।",
        },
        {
          type: "p",
          text: "ये घाट ओंकार पर्वत परिक्रमा की नाव का आरंभ भी हैं, जो पवित्र द्वीप की लगभग छह से सात किलोमीटर की परिक्रमा है। इससे द्वीप का ॐ जैसा आकार, मंदिर और पहाड़ियाँ जल से दिखती हैं। ब्रह्मपुरी घाट का अलग महत्त्व है। वहाँ अमृतस्य माँ नर्मदा पद परिक्रमा कार्यक्रम हुआ, जिसमें मुख्यमंत्री मोहन यादव ने माँ नर्मदा की प्रार्थना की।",
        },
        { type: "h2", text: "पवित्र जल के नीचे का खतरा" },
        {
          type: "p",
          text: "आध्यात्मिक आकर्षण के बावजूद ये घाट बार-बार होने वाली दुर्घटनाओं के लिए भी जाने लगे हैं। एक वर्ष में इन घाटों पर डूबने से 24 श्रद्धालुओं की जान गई, और चार वर्षों में 62 से अधिक मौतें दर्ज हुईं। अधिकतर पीड़ित इंदौर, महाराष्ट्र और गुजरात के यात्री थे, जो नदी के छिपे खतरे नहीं जानते थे।",
        },
        {
          type: "p",
          text: "खतरा प्राकृतिक भी है और मानव-निर्मित भी। नर्मदा का तल बहुत असमान है। कुछ जगह अचानक गहराई 200 फुट तक चली जाती है। पानी के नीचे चट्टानें, खाई और भँवर उन स्नानार्थियों के लिए घातक हैं जो उथले किनारे से आगे बढ़ जाते हैं। 2001 से 2007 के बीच बने ओंकारेश्वर बाँध ने जल-स्तर के उतार-चढ़ाव बढ़ा दिए। इससे डूबी चट्टानों पर काई जमती है, वे फिसलन भरी हो जाती हैं, और गहराई का बदलाव छिप जाता है।",
        },
        {
          type: "p",
          text: "घाटों पर बुनियादी सुरक्षा भी कम है। किसी घाट पर रेलिंग नहीं है, और आपात बचाव के साधन सीमित हैं। नावें घाट घेर लेती हैं, सुरक्षित स्नान की जगह घट जाती है, और बिना अनुमति की नावें लाइसेंस वाली नावों से अधिक बताई जाती हैं। सुरक्षा के लिए खड़ी सरकारी नावें दुर्घटना के समय अक्सर खड़ी रह जाती हैं, क्योंकि नाविक कहीं और व्यस्त होते हैं।",
        },
        { type: "h2", text: "प्रशासन की तैयारी" },
        {
          type: "p",
          text: "लगातार हो रही मौतों पर प्रशासन ने कदम उठाए हैं, खासकर 2028 के उज्जैन सिंहस्थ की तैयारी में, जब ओंकारेश्वर में भी बड़ी भीड़ आने की आशंका है। आठ नए सुरक्षित घाट बनाने की घोषणा हुई है, रेलिंग, जंजीर और सुरक्षा उपकरण के साथ। भीड़ के समय आपात टीमों के लिए अतिरिक्त साधन और प्रशिक्षण भी दिए जा रहे हैं।",
        },
        {
          type: "p",
          text: "नियम भी कड़े हुए हैं। पूरी ओंकार पर्वत परिक्रमा की नाव अब दोपहर 2 बजे के बाद नहीं चलती। कारण अचानक मौसम और दूर के मार्ग पर बचाव टीम के पहुँचने की कठिनाई बताया गया है। नाविक संघ ने यह निर्णय स्वीकार किया। वे स्वयं शाम 4 बजे के बाद परिक्रमा की नाव भेजने से लंबे समय से बचते थे।",
        },
        {
          type: "p",
          text: "आध्यात्मिक पक्ष पर सरकार ने पूरे नर्मदा परिक्रमा पथ को उसके मूल पवित्र रूप में लौटाने की बात कही है, किनारे घाट और यात्रियों के लिए संकेत-पट्ट सहित। ओंकारेश्वर में एक भव्य ज्योतिर्लिंग मंदिर की योजना भी है।",
        },
        { type: "h2", text: "जीवित स्थान के रूप में घाट" },
        {
          type: "p",
          text: "विधि और प्रशासन के अलावा ये घाट जीवित स्थान हैं। सुबह श्रद्धालु स्नान के लिए उतरते हैं, पुजारी प्रार्थना करते हैं, और नाविक परिक्रमा की तैयारी करते हैं। ब्रह्मपुरी घाट स्नान, धुलाई, नर्मदा पूजन और अस्थि-विसर्जन का केंद्र है। यह गतिविधि अर्थपूर्ण है, पर नगर का कुछ मल-जल कुछ स्थानों पर नदी में गिरता है, जिससे दबाव भी बनता है।",
        },
        {
          type: "p",
          text: "घाट शांत चिंतन का समय भी देते हैं। लोग भोर में किनारे चलते हैं, जल और द्वीप के मंदिरों पर प्रकाश देखते हैं, या शाम को नगर का जीवंत रूप देखते हैं: नाविक, घंटियाँ, आरती, और द्वीप की ओर का दृश्य। धीमी गति चाहने वालों के लिए अहिल्या घाट अधिक सुकून वाला नदी-किनारा है, फोटो और विचार के लिए।",
        },
        { type: "h2", text: "निष्कर्ष" },
        {
          type: "p",
          text: "ओंकारेश्वर के नर्मदा घाट एक गहरा विरोधाभास हैं। वे सबसे पवित्र द्वार भी हैं और सबसे खतरनाक स्थान भी, श्रद्धा के स्थल भी और रोकी जा सकने वाली त्रासदी के स्थल भी। यात्री के लिए वे शुद्धि और ईश्वर की निकटता का वचन हैं। प्रशासक के लिए वे परंपरा और आधुनिक सुरक्षा के बीच संतुलन की चुनौती हैं। आने वाले वर्षों में अभूतपूर्व भीड़ की तैयारी में इन घाटों का रूप—नया निर्माण, सख्त नियम और जागरूकता—तय करेगा कि नर्मदा का पवित्र जल जान लेता रहे या वह शरण बने जिसके लिए उसे माना जाता है।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर के प्रमुख नर्मदा घाट कौन से हैं?",
          a: "अभय, नवीन, नगर, गोमुख, कोटीतीर्थ, ब्रह्मपुरी, केवलराम, ओंकार मठ, बिछलिया, चक्रतीर्थ, बर्फानी, और संगम घाट, जहाँ नर्मदा स्थानीय कावेरी से मिलती है।",
        },
        {
          q: "नर्मदा आरती कहाँ होती है?",
          a: "कोटीतीर्थ घाट पर। यह 2025 में फिर शुरू हुई, कोविड-19 महामारी के बाद के अंतराल के बाद, संध्या की दैनिक विधि के रूप में।",
        },
        {
          q: "क्या घाट पर स्नान सुरक्षित है?",
          a: "नदी का तल असमान है। अचानक गहराई, फिसलन भरी चट्टानें और बदलता जल-स्तर है। उथले किनारे पर रहें। हर सीढ़ी को सुरक्षित स्नान-स्थान न मानें।",
        },
      ],
    },
  },
  {
    slug: "siddhanath-temple-omkareshwar",
    cluster: "places",
    kind: "place",
    updated,
    sources: ["parikrama", "templeWebsite"],
    related: ["omkareshwar-parikrama", "gauri-somnath-temple", "places-to-visit-in-omkareshwar", "omkareshwar-history"],
    en: {
      title: "Siddhanath Temple, Omkareshwar – On the Parikrama",
      description:
        "Siddhanath at Omkareshwar is the medieval ruin state tourism places near the end of the parikrama, with elephant carvings on the plinth.",
      h1: "Siddhanath Temple, Omkareshwar",
      kicker: "A ruin on the path",
      answer:
        "Siddhanath Temple at Omkareshwar is an old Shiva shrine on the parikrama, not a second entrance to the Jyotirlinga. Madhya Pradesh Tourism calls the ruin 13th-century, early medieval, and describes a plinth with elephants, including a carving about 1.5 metres high. The trust’s homepage mentions Siddhanath Baradari on the walk.",
      blocks: [
        { type: "h2", text: "See it as part of the walk" },
        {
          type: "p",
          text: "State tourism says Siddhanath stands nearly at the end of the Omkareshwar parikrama, on a plinth whose sides carry elephants in different postures. That is the reason to include it: the walk already passes it. A separate taxi “to a ruin” without the path misses the point the trust is making when it folds Siddhanath into the 7 km circuit.",
        },
        {
          type: "p",
          text: "The same tourism page also says the main temple complex contains a shrine of Siddhanath among other deities. There is a name inside the living temple and a ruin on the hill. Ask which one a driver means. The Jyotirlinga queue does not pass through the ruin, and the ruin does not keep the Jyotirlinga’s timetable.",
        },
        {
          type: "note",
          text: "We do not publish a photograph of Siddhanath here, because we do not have a dated, licensed frame ready to credit. The description follows Madhya Pradesh Tourism and the trust’s parikrama note.",
        },
      ],
      faqs: [
        {
          q: "Is Siddhanath the Omkareshwar Jyotirlinga?",
          a: "No. The Jyotirlinga is the living temple on Mandhata. Siddhanath is named by state tourism as a ruin near the end of the parikrama.",
        },
        {
          q: "How old is it?",
          a: "Madhya Pradesh Tourism calls it a 13th-century example of early medieval temple architecture. That is the tourism department’s dating.",
        },
        {
          q: "Do I need a separate ticket?",
          a: "Nothing we checked on the trust’s site sells a Siddhanath ticket. It sits on the parikrama. Follow whatever local instruction is posted at the ruin.",
        },
      ],
    },
    hi: {
      title: "सिद्धनाथ मंदिर, ओंकारेश्वर – परिक्रमा पर",
      description:
        "ओंकारेश्वर का सिद्धनाथ वह मध्यकालीन अवशेष है जिसे राज्य पर्यटन परिक्रमा के अंत के पास रखता है, पीठ पर हाथियों की नक्काशी के साथ।",
      h1: "ओंकारेश्वर का सिद्धनाथ मंदिर",
      kicker: "पथ पर एक अवशेष",
      answer:
        "ओंकारेश्वर का सिद्धनाथ मंदिर परिक्रमा पर पुराना शिव मंदिर है, ज्योतिर्लिंग का दूसरा प्रवेश नहीं। मध्य प्रदेश पर्यटन अवशेष को 13वीं सदी का, प्रारंभिक मध्यकालीन बताता है, और पीठ पर हाथियों का वर्णन करता है, जिनमें लगभग 1.5 मीटर ऊँची नक्काशी भी है। ट्रस्ट का मुखपृष्ठ चाल पर सिद्धनाथ बारादरी का नाम लेता है।",
      blocks: [
        { type: "h2", text: "इसे चाल का हिस्सा मानकर देखें" },
        {
          type: "p",
          text: "राज्य पर्यटन कहता है कि सिद्धनाथ ओंकारेश्वर परिक्रमा के लगभग अंत में है, उस पीठ पर जिसके किनारे अलग-अलग मुद्राओं में हाथी हैं। इसे शामिल करने का कारण यही है: चाल वैसे ही वहाँ से गुजरती है। पथ के बिना “अवशेष तक टैक्सी” ट्रस्ट के उस मतलब को छोड़ देती है जिसमें सिद्धनाथ 7 किलोमीटर के घेरे में है।",
        },
        {
          type: "p",
          text: "वही पर्यटन पृष्ठ कहता है कि मुख्य मंदिर परिसर में अन्य देवताओं के बीच सिद्धनाथ का स्थान भी है। जीवित मंदिर के अंदर एक नाम है और पहाड़ी पर एक अवशेष। चालक किसकी बात कर रहा है, पूछें। ज्योतिर्लिंग की कतार अवशेष से नहीं गुजरती, और अवशेष ज्योतिर्लिंग की घड़ी नहीं रखता।",
        },
        {
          type: "note",
          text: "यहाँ सिद्धनाथ की तस्वीर नहीं है, क्योंकि श्रेय के साथ दिनांकित, लाइसेंस वाली फ़ाइल हमारे पास तैयार नहीं। विवरण मध्य प्रदेश पर्यटन और ट्रस्ट की परिक्रमा-टिप्पणी पर है।",
        },
      ],
      faqs: [
        {
          q: "क्या सिद्धनाथ ही ओंकारेश्वर ज्योतिर्लिंग है?",
          a: "नहीं। ज्योतिर्लिंग मांधाता का जीवित मंदिर है। सिद्धनाथ को राज्य पर्यटन परिक्रमा के अंत के पास का अवशेष बताता है।",
        },
        {
          q: "यह कितना पुराना है?",
          a: "मध्य प्रदेश पर्यटन इसे 13वीं सदी की प्रारंभिक मध्यकालीन वास्तुकला का उदाहरण कहता है। यह पर्यटन विभाग की तिथि है।",
        },
        {
          q: "क्या अलग टिकट चाहिए?",
          a: "ट्रस्ट की साइट पर जो हमने देखा, उसमें सिद्धनाथ का टिकट नहीं बिकता। वह परिक्रमा पर है। अवशेष पर जो स्थानीय निर्देश लगा हो, उसका पालन करें।",
        },
      ],
    },
  },
  {
    slug: "gauri-somnath-temple",
    cluster: "places",
    kind: "place",
    updated,
    sources: ["templeWebsite", "parikrama"],
    related: ["omkareshwar-parikrama", "siddhanath-temple-omkareshwar", "omkareshwar-history", "places-to-visit-in-omkareshwar"],
    en: {
      title: "Gauri Somnath Temple, Omkareshwar",
      description:
        "Gauri Somnath at Omkareshwar is the three-storey temple state tourism dates to the 11th century, with a black-stone linga and a peahen-like plan.",
      h1: "Gauri Somnath Temple",
      kicker: "On the sacred walk",
      answer:
        "Gauri Somnath is a historic Shiva temple at Omkareshwar, dedicated also to Parvati, and named by the trust among the shrines on the Mandhata walk. Madhya Pradesh Tourism says it was built in the 11th century by the Paramaras in the Bhumija manner, in three storeys shaped like a peahen, with a black-stone linga about six feet high. The state archaeology department protects it.",
      blocks: [
        { type: "h2", text: "A different kind of silence" },
        {
          type: "p",
          text: "The Jyotirlinga is crowded because it is the living door of the yatra. Gauri Somnath is visited because the building itself is the record. State tourism compares the carving with Khajuraho and says the Marathas later rebuilt parts of it. Those are the tourism department’s sentences. They are enough to tell you this is not a stall on the bridge. They are not a licence to climb what a guard has closed.",
        },
        {
          type: "p",
          text: "The trust’s homepage places Gauri Somnath on the roughly 7 km parikrama, beside Siddhanath Baradari and the Shankaracharya statue. See it then, in walking shoes, with time. A five-minute stop from a running taxi is how people later say the temple was “nothing much”. The temple was the thing they did not enter.",
        },
        {
          type: "note",
          text: "No official darshan fee for Gauri Somnath appeared on the trust pages we checked. Do not pay a stranger who describes one as a temple ticket.",
        },
      ],
      faqs: [
        {
          q: "Who is worshipped at Gauri Somnath?",
          a: "Shiva and Parvati, according to Madhya Pradesh Tourism. The sanctum has a large black-stone linga.",
        },
        {
          q: "How old is the temple?",
          a: "State tourism says it is believed to have been built in the 11th century by the Paramaras, with later Maratha rebuilding, and that the archaeology department protects it.",
        },
        {
          q: "Is it inside the Jyotirlinga complex?",
          a: "No. The trust places it on the parikrama around Mandhata. The Jyotirlinga is the separate living temple on the island.",
        },
      ],
    },
    hi: {
      title: "गौरी सोमनाथ मंदिर, ओंकारेश्वर",
      description:
        "ओंकारेश्वर का गौरी सोमनाथ तीन मंजिला मंदिर है, जिसे राज्य पर्यटन 11वीं सदी का बताता है, काले शिवलिंग और मोरनी जैसी योजना के साथ।",
      h1: "गौरी सोमनाथ मंदिर",
      kicker: "पवित्र चाल पर",
      answer:
        "गौरी सोमनाथ ओंकारेश्वर का ऐतिहासिक शिव मंदिर है, पार्वती को भी समर्पित, और ट्रस्ट इसे मांधाता की चाल के मंदिरों में गिनाता है। मध्य प्रदेश पर्यटन कहता है कि इसे 11वीं सदी में परमारों ने भूमिज शैली में बनवाया, तीन मंजिल, मोरनी जैसी आकृति, और लगभग छह फुट ऊँचा काला शिवलिंग। राज्य पुरातत्व विभाग इसका संरक्षण करता है।",
      blocks: [
        { type: "h2", text: "दूसरी तरह की शांति" },
        {
          type: "p",
          text: "ज्योतिर्लिंग भीड़ वाला है क्योंकि वह यात्रा का जीवित द्वार है। गौरी सोमनाथ इसलिए देखा जाता है कि भवन स्वयं रिकॉर्ड है। राज्य पर्यटन नक्काशी की तुलना खजुराहो से करता है और कहता है कि मराठों ने बाद में अंश फिर बनाए। ये पर्यटन विभाग के वाक्य हैं। इनसे पता चलता है कि यह पुल की दुकान नहीं। इनसे यह अनुमति नहीं मिलती कि पहरेदार ने जो बंद किया हो उस पर चढ़ें।",
        },
        {
          type: "p",
          text: "ट्रस्ट का मुखपृष्ठ गौरी सोमनाथ को लगभग 7 किलोमीटर की परिक्रमा पर रखता है, सिद्धनाथ बारादरी और शंकराचार्य की प्रतिमा के साथ। उसे तब देखें, चलने वाले जूतों में, समय के साथ। दौड़ती टैक्सी से पाँच मिनट का पड़ाव वह तरीका है जिससे लोग बाद में कहते हैं मंदिर “कुछ खास नहीं” था। मंदिर वही था जिसमें वे घुसे नहीं।",
        },
        {
          type: "note",
          text: "जाँचे गए ट्रस्ट पृष्ठों पर गौरी सोमनाथ का कोई आधिकारिक दर्शन-शुल्क नहीं दिखा। जो अजनबी उसे मंदिर-टिकट बताए, उसे भुगतान न करें।",
        },
      ],
      faqs: [
        {
          q: "गौरी सोमनाथ में किसकी पूजा है?",
          a: "मध्य प्रदेश पर्यटन के अनुसार शिव और पार्वती की। गर्भगृह में बड़ा काला शिवलिंग है।",
        },
        {
          q: "मंदिर कितना पुराना है?",
          a: "राज्य पर्यटन कहता है कि माना जाता है इसे 11वीं सदी में परमारों ने बनवाया, बाद में मराठा पुनर्निर्माण हुआ, और पुरातत्व विभाग संरक्षण करता है।",
        },
        {
          q: "क्या यह ज्योतिर्लिंग परिसर के अंदर है?",
          a: "नहीं। ट्रस्ट इसे मांधाता की परिक्रमा पर रखता है। ज्योतिर्लिंग द्वीप का अलग जीवित मंदिर है।",
        },
      ],
    },
  },
];
