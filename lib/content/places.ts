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
    sources: ["mpTourism", "faq", "parikrama", "templeWebsite"],
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
    sources: ["mpTourism", "faq", "templeWebsite"],
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
    sources: ["parikrama", "templeWebsite", "mpTourism"],
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
    sources: ["mpTourism", "faq", "templeWebsite"],
    related: ["omkareshwar-parikrama", "mamleshwar-temple", "omkareshwar-festivals", "where-is-omkareshwar"],
    en: {
      title: "Narmada Ghat at Omkareshwar – Banks, Bridge & Aarti",
      description:
        "The Narmada at Omkareshwar is the river around Mandhata. Ghats, the 270-foot bridge, Kotitirtha’s river aarti, and the Monday procession.",
      h1: "Narmada ghat at Omkareshwar",
      kicker: "The river",
      answer:
        "The Narmada flows around Mandhata and makes Omkareshwar an island. Ghats are the steps where people bathe, offer water and watch the river. Madhya Pradesh Tourism names Fanase Ghat and Peshawar Ghat, a daily Shayan Aarti of the river at Kotitirtha Ghat, and the 270-foot Mamleshwar Setu. The trust’s FAQ adds a Monday procession from Koti Tirth Ghat.",
      blocks: [
        { type: "h2", text: "The river is part of the worship" },
        {
          type: "p",
          text: "Parikrama water is Narmada water. The trust says people carry it around the hill. Bathing, where a ghat allows it, is a separate act from pushing toward the sanctum with wet clothes and a vow that the railing was not built for. Ask before you treat a bathing ghat as the queue. State tourism’s best-time note is practical here: Shravan brings the largest crowds and a holy bath; October to March is the easier climate.",
        },
        { type: "h2", text: "Names you will hear" },
        {
          type: "ul",
          items: [
            "Koti Tirth or Kotitirtha: the trust’s Monday sawari starts here, and state tourism places a daily river aarti here.",
            "Mamleshwar Setu: the hanging bridge, 270 feet in the tourism description, between the island and the south bank.",
            "Sangam: the meeting of the Narmada and the local Kaveri. Not the southern Indian river of the same name.",
            "Godarpura: the south-bank side, where Mamleshwar stands.",
          ],
        },
        {
          type: "p",
          text: "Boats exist on this river in the way boats exist at many Narmada towns. This guide has not verified an official boat timetable, so it will not print fares or “sunrise cruise” claims. If someone sells you a boat as a temple service, it is a private ride unless it is written on shriomkareshwar.org.",
        },
      ],
      faqs: [
        {
          q: "Which ghat is used for the Monday procession?",
          a: "The trust’s FAQ says the Somvar sawari starts from Koti Tirth Ghat. A royal form is held in Shravan.",
        },
        {
          q: "Is there an aarti of the river?",
          a: "Madhya Pradesh Tourism says a Shayan Aarti of Maa Narmada is performed daily at Kotitirtha Ghat. Confirm the hour locally. It is not the same list as the temple’s sanctum timetable.",
        },
        {
          q: "Can I swim from any step?",
          a: "Use a ghat where bathing is actually done, and follow the people who know the current. This guide does not declare a step safe.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर का नर्मदा घाट – किनारा, पुल और आरती",
      description:
        "ओंकारेश्वर की नर्मदा मांधाता को घेरने वाली नदी है। घाट, 270 फुट का पुल, कोटीतीर्थ की नदी-आरती, और सोमवार की सवारी।",
      h1: "ओंकारेश्वर का नर्मदा घाट",
      kicker: "नदी",
      answer:
        "नर्मदा मांधाता के चारों ओर बहकर ओंकारेश्वर को द्वीप बनाती है। घाट वे सीढ़ियाँ हैं जहाँ लोग स्नान करते हैं, जल चढ़ाते हैं और नदी देखते हैं। मध्य प्रदेश पर्यटन फणसे घाट और पेशवा घाट, कोटीतीर्थ घाट पर नदी की दैनिक शयन आरती, और 270 फुट का ममलेश्वर सेतु लिखता है। ट्रस्ट का प्रश्नोत्तर कोटी तीर्थ घाट से सोमवार की सवारी जोड़ता है।",
      blocks: [
        { type: "h2", text: "नदी पूजा का हिस्सा है" },
        {
          type: "p",
          text: "परिक्रमा का जल नर्मदा जल है। ट्रस्ट कहता है कि लोग उसे पहाड़ी के साथ लेकर चलते हैं। जहाँ घाट स्नान दे, वह अलग काम है। भीगे वस्त्र और ऐसी मनौती के साथ रेलिंग की ओर धकेलना अलग है जिसके लिए रेलिंग नहीं बनी। स्नान-घाट को कतार न मानें, पहले पूछें। राज्य पर्यटन का मौसम-वाक्य यहाँ काम का है: सावन में सबसे बड़ी भीड़ और पवित्र स्नान; अक्टूबर से मार्च आसान जलवायु।",
        },
        { type: "h2", text: "जो नाम सुनेंगे" },
        {
          type: "ul",
          items: [
            "कोटी तीर्थ या कोटीतीर्थ: ट्रस्ट की सोमवार सवारी यहीं से शुरू होती है, और राज्य पर्यटन दैनिक नदी-आरती यहीं रखता है।",
            "ममलेश्वर सेतु: झूला पुल, पर्यटन-विवरण में 270 फुट, द्वीप और दक्षिणी तट के बीच।",
            "संगम: नर्मदा और स्थानीय कावेरी का मिलन। दक्षिण भारत की उसी नाम की नदी नहीं।",
            "गोदरपुरा: दक्षिणी तट, जहाँ ममलेश्वर है।",
          ],
        },
        {
          type: "p",
          text: "इस नदी पर नाव वैसे ही है जैसे नर्मदा के कई नगरों में। इस गाइड ने आधिकारिक नाव-सारिणी जाँची नहीं, इसलिए भाड़ा या “सूर्योदय क्रूज” नहीं छापेगी। कोई नाव को मंदिर-सेवा बताकर बेचे तो वह निजी सवारी है, जब तक shriomkareshwar.org पर लिखी न हो।",
        },
      ],
      faqs: [
        {
          q: "सोमवार की सवारी किस घाट से निकलती है?",
          a: "ट्रस्ट का प्रश्नोत्तर कहता है कि सोमवार सवारी कोटी तीर्थ घाट से शुरू होती है। सावन में राजसी रूप होता है।",
        },
        {
          q: "क्या नदी की आरती होती है?",
          a: "मध्य प्रदेश पर्यटन कहता है कि कोटीतीर्थ घाट पर माँ नर्मदा की शयन आरती प्रतिदिन होती है। घंटा स्थानीय पूछें। वह गर्भगृह की समय-सारिणी नहीं है।",
        },
        {
          q: "क्या किसी भी सीढ़ी से स्नान कर सकते हैं?",
          a: "वही घाट लें जहाँ स्नान सच में होता है, और धारा जानने वालों का साथ लें। यह गाइड किसी सीढ़ी को सुरक्षित घोषित नहीं करती।",
        },
      ],
    },
  },
  {
    slug: "siddhanath-temple-omkareshwar",
    cluster: "places",
    kind: "place",
    updated,
    sources: ["mpTourism", "parikrama", "templeWebsite"],
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
    sources: ["mpTourism", "templeWebsite", "parikrama"],
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
