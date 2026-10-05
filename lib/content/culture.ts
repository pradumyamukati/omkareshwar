import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const culturePages: PageDef[] = [
  {
    slug: "omkareshwar-history",
    cluster: "yatra",
    kind: "guide",
    updated,
    sources: ["mpTourism", "templeWebsite"],
    related: ["omkareshwar-jyotirlinga-story", "gauri-somnath-temple", "siddhanath-temple-omkareshwar", "omkareshwar-shivling"],
    en: {
      title: "Omkareshwar History – Island, Temples & What Is Known",
      description:
        "What can be said carefully about Omkareshwar’s past: an old pilgrimage on the Narmada, temples state tourism dates to the 11th and 13th centuries, and a living shrine.",
      h1: "History of Omkareshwar",
      kicker: "Record and tradition",
      answer:
        "Omkareshwar is an old Shaiva pilgrimage on Mandhata island in the Narmada. Madhya Pradesh Tourism dates Gauri Somnath to the 11th century and the Siddhanath ruin to the 13th, and describes later Maratha rebuilding. The religious story of the Jyotirlinga is tradition, told with the Purana names the temple trust itself prints. This page does not turn that tradition into a scientific chronology.",
      blocks: [
        { type: "h2", text: "What state tourism will date" },
        {
          type: "p",
          text: "Gauri Somnath is described as a Paramara temple in the Bhumija style, three storeys, later touched by the Marathas, and protected by the state archaeology department. Siddhanath is described as a 13th-century ruin with an elephant frieze. Kedareshwar is described as an 11th-century temple about 4 km from the Jyotirlinga, at the meeting of the Narmada and the local Kaveri. Those sentences are the tourism department’s. They are the firmest dates this guide will repeat.",
        },
        { type: "h2", text: "The living temple is not a ruin" },
        {
          type: "p",
          text: "The Jyotirlinga you queue for is a working temple. Its shikhara and its crowd are of the present. Pieces of older building sit inside a complex that state tourism describes as five storeys, with a pillared hall. Calling the whole complex “an 11th-century building” because a hill shrine nearby is 11th-century would be a blur. Keep the dates on the buildings they were written for.",
        },
        { type: "h2", text: "Shankaracharya’s association" },
        {
          type: "p",
          text: "State tourism says Adi Shankaracharya’s study under Govinda Bhagavatpada is remembered in a cave here, and that Ekatma Dham, with the Statue of Oneness installed in September 2023, honours that memory. The trust’s homepage points walkers on the parikrama toward the statue. The statue is new. The memory it points at is old. They are not the same object.",
        },
        {
          type: "note",
          text: "A useful scholarly trail, for readers who want more than a tourism page, is Jürgen Neuss, “Omkaresvar Mandhata, Tracing the Forgotten History of a Popular Place,” Berlin Indological Studies, 2013. This guide has not re-edited that paper. It is named so the trail is visible.",
        },
      ],
      faqs: [
        {
          q: "How old is Omkareshwar?",
          a: "The pilgrimage is older than the buildings that can be dated from a tourism page. State tourism dates particular temples to the 11th and 13th centuries. The Jyotirlinga tradition is religious history, not a single foundation year.",
        },
        {
          q: "Who built the Jyotirlinga temple?",
          a: "We will not name a single founder. State tourism speaks of Paramara and later Maratha work for Gauri Somnath, not a one-line founder for the living sanctum.",
        },
        {
          q: "Is the Statue of Oneness ancient?",
          a: "No. Madhya Pradesh Tourism says it was installed in September 2023. It commemorates Adi Shankaracharya.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर का इतिहास – द्वीप, मंदिर और जो जाना जा सकता है",
      description:
        "ओंकारेश्वर के अतीत के बारे में सावधानी से क्या कहा जा सकता है: नर्मदा पर पुराना तीर्थ, 11वीं और 13वीं सदी के मंदिर, और एक जीवित तीर्थ।",
      h1: "ओंकारेश्वर का इतिहास",
      kicker: "अभिलेख और परंपरा",
      answer:
        "ओंकारेश्वर नर्मदा के मांधाता द्वीप पर शैव तीर्थ है। मध्य प्रदेश पर्यटन गौरी सोमनाथ को 11वीं सदी और सिद्धनाथ के अवशेष को 13वीं सदी का बताता है, और बाद के मराठा पुनर्निर्माण का वर्णन करता है। ज्योतिर्लिंग की कथा परंपरा है, उन पुराण-नामों के साथ जो मंदिर ट्रस्ट स्वयं छापता है। यह पृष्ठ उस परंपरा को वैज्ञानिक कालक्रम नहीं बनाता।",
      blocks: [
        { type: "h2", text: "राज्य पर्यटन किसकी तिथि देता है" },
        {
          type: "p",
          text: "गौरी सोमनाथ को परमारों का भूमिज मंदिर बताया गया है, तीन मंजिल, बाद में मराठों का स्पर्श, और राज्य पुरातत्व का संरक्षण। सिद्धनाथ को 13वीं सदी का अवशेष, हाथियों की पट्टी के साथ। केदारेश्वर को 11वीं सदी का मंदिर, ज्योतिर्लिंग से लगभग 4 किलोमीटर, नर्मदा और स्थानीय कावेरी के मिलन पर। ये पर्यटन विभाग के वाक्य हैं। यही सबसे ठोस तिथियाँ हैं जिन्हें यह गाइड दोहराएगी।",
        },
        { type: "h2", text: "जीवित मंदिर अवशेष नहीं है" },
        {
          type: "p",
          text: "जिस ज्योतिर्लिंग की कतार में आप खड़े हैं वह चालू मंदिर है। उसका शिखर और उसकी भीड़ वर्तमान की है। पुरानी रचना के अंश उस परिसर में हैं जिसे राज्य पर्यटन पाँच मंजिल और स्तंभों वाला हॉल बताता है। पास के पहाड़ी मंदिर के 11वीं सदी होने से पूरे परिसर को “11वीं सदी की इमारत” कहना धुँध है। तिथि उसी भवन पर रखें जिसके लिए लिखी गई।",
        },
        { type: "h2", text: "शंकराचार्य का संबंध" },
        {
          type: "p",
          text: "राज्य पर्यटन कहता है कि आदि शंकराचार्य की गोविंद भगवत्पाद के पास पढ़ाई यहाँ एक गुफा में याद की जाती है, और एकात्म धाम, जिसकी स्टैच्यू ऑफ ओननेस सितंबर 2023 में लगी, उसी स्मृति का सम्मान है। ट्रस्ट का मुखपृष्ठ परिक्रमा वालों को प्रतिमा की ओर दिखाता है। प्रतिमा नई है। जिस स्मृति की ओर वह इशारा करती है वह पुरानी है। दोनों एक वस्तु नहीं।",
        },
        {
          type: "note",
          text: "जो पाठक पर्यटन पृष्ठ से आगे जाना चाहें, उनके लिए एक विद्वत् पथ है: यूर्गेन नोइस, “Omkaresvar Mandhata, Tracing the Forgotten History of a Popular Place,” Berlin Indological Studies, 2013। इस गाइड ने उस शोधपत्र का पुनर्संपादन नहीं किया। नाम इसलिए है कि पथ दिखे।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर कितना पुराना है?",
          a: "तीर्थ उन भवनों से पुराना है जिनकी तिथि पर्यटन पृष्ठ से दी जा सकती है। राज्य पर्यटन कुछ मंदिरों को 11वीं और 13वीं सदी का बताता है। ज्योतिर्लिंग परंपरा धार्मिक इतिहास है, एक स्थापना-वर्ष नहीं।",
        },
        {
          q: "ज्योतिर्लिंग मंदिर किसने बनवाया?",
          a: "हम एक संस्थापक का नाम नहीं लिखेंगे। राज्य पर्यटन गौरी सोमनाथ के लिए परमार और बाद के मराठा काम की बात करता है, जीवित गर्भगृह के लिए एक पंक्ति का संस्थापक नहीं।",
        },
        {
          q: "क्या स्टैच्यू ऑफ ओननेस प्राचीन है?",
          a: "नहीं। मध्य प्रदेश पर्यटन कहता है कि यह सितंबर 2023 में स्थापित हुई। यह आदि शंकराचार्य की स्मृति है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-jyotirlinga-story",
    cluster: "temple",
    kind: "guide",
    updated,
    sources: ["templeWebsite", "mpTourism"],
    related: ["omkareshwar-jyotirlinga", "omkareshwar-shivling", "mamleshwar-temple", "omkareshwar-history"],
    en: {
      title: "Story of Omkareshwar Jyotirlinga – Tradition, Not a Chronicle",
      description:
        "The religious story of Omkareshwar, in the careful language of tradition: the Om-shaped island, the Purana names the trust prints, and Shiva’s shayan.",
      h1: "The story of Omkareshwar Jyotirlinga",
      kicker: "According to tradition",
      answer:
        "According to the temple trust, Omkareshwar is the fourth of the twelve Jyotirlingas, and its glory is told in the Skanda Purana, the Shiva Purana and the Vayu Purana. According to Madhya Pradesh Tourism, the island is shaped like Om and legend treats Mamleshwar and Omkareshwar as one presence. The trust also says it is believed Shiva rests here after the three worlds, which is why shayan darshan exists. These are religious accounts.",
      blocks: [
        { type: "h2", text: "The shape of the island" },
        {
          type: "p",
          text: "Traditional accounts describe Mandhata as an island the Narmada holds in the form of the syllable Om. The town takes its name from that comparison: Omkareshwar, lord of the Om. You can see the river split around the hill without needing the story. The story is what devotees add when they say the shape is not an accident.",
        },
        { type: "h2", text: "Two shrines, one telling" },
        {
          type: "p",
          text: "It is believed, in the account state tourism repeats, that Mamleshwar on the south bank and Omkareshwar on the island are manifestations of the same sacred presence. That is why a complete traditional visit crosses the river. Some retellings outside this town collapse the two doors into one sentence and then send pilgrims to the wrong city. Keep both doors, and keep them in Khandwa.",
        },
        { type: "h2", text: "Why the day ends in shayan" },
        {
          type: "p",
          text: "The trust writes that after traversing the three worlds each day, Shiva is believed to rest here, and that the temple therefore keeps a sleeping rite and shayan darshan. Traditional language is doing the work in that sentence. It explains a ritual. It is not a claim that a historian can date from an inscription on this page. The hour of the rite is on the [[omkareshwar-temple-timings|timings page]], and it has moved between the trust’s own documents.",
        },
        { type: "h2", text: "What this page will not embroider" },
        {
          type: "p",
          text: "Longer tellings connect the hill with King Mandhata, with Vindhya’s penance, and with particular chapters of the Puranas. Those tellings differ in detail. Until a cited chapter is in front of the reader, this guide stops at what the trust and the state tourism page actually say. Invention would make the story smoother and less true.",
        },
      ],
      faqs: [
        {
          q: "Which scriptures mention Omkareshwar?",
          a: "The temple trust names the Skanda Purana, the Shiva Purana and the Vayu Purana. This guide does not pretend to quote a chapter it has not set beside the Sanskrit.",
        },
        {
          q: "Why is the island called Om?",
          a: "Because its shape is traditionally compared with the syllable Om. Madhya Pradesh Tourism says the same.",
        },
        {
          q: "Is the story proved history?",
          a: "No. It is Hindu tradition. Architectural dates from the tourism department are a different kind of statement and are kept on the history page.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर ज्योतिर्लिंग की कथा – परंपरा, इतिहास-ग्रंथ नहीं",
      description:
        "ओंकारेश्वर की धार्मिक कथा, परंपरा की सावधान भाषा में: ॐ के आकार का द्वीप, ट्रस्ट के पुराण-नाम, और शिव का शयन।",
      h1: "ओंकारेश्वर ज्योतिर्लिंग की कथा",
      kicker: "परंपरा के अनुसार",
      answer:
        "मंदिर ट्रस्ट के अनुसार ओंकारेश्वर बारह ज्योतिर्लिंगों में चौथा है, और उसकी महिमा स्कंद पुराण, शिव पुराण और वायु पुराण में कही गई है। मध्य प्रदेश पर्यटन के अनुसार द्वीप ॐ के आकार का है और मान्यता ममलेश्वर तथा ओंकारेश्वर को एक उपस्थिति मानती है। ट्रस्ट यह भी कहता है कि मान्यता है, तीनों लोकों के बाद शिव यहाँ विश्राम करते हैं, इसलिए शयन दर्शन है। ये धार्मिक कथन हैं।",
      blocks: [
        { type: "h2", text: "द्वीप की आकृति" },
        {
          type: "p",
          text: "पारंपरिक वर्णन मांधाता को ऐसा द्वीप बताते हैं जिसे नर्मदा ॐ के रूप में थामे है। नगर का नाम उसी तुलना से है: ओंकारेश्वर, ॐ के ईश्वर। कथा के बिना भी देखा जा सकता है कि नदी पहाड़ी के दो ओर बँटती है। कथा वह है जो श्रद्धालु जोड़ते हैं जब कहते हैं कि आकृति संयोग नहीं।",
        },
        { type: "h2", text: "दो मंदिर, एक कथन" },
        {
          type: "p",
          text: "राज्य पर्यटन जिस कथन को दोहराता है, उसके अनुसार माना जाता है कि दक्षिणी तट का ममलेश्वर और द्वीप का ओंकारेश्वर एक ही पवित्र उपस्थिति के दो रूप हैं। इसलिए पूरी पारंपरिक यात्रा नदी पार करती है। इस नगर के बाहर कुछ कथन दोनों द्वारों को एक वाक्य में समेटकर यात्री को गलत शहर भेज देते हैं। दोनों द्वार रखें, और उन्हें खंडवा में रखें।",
        },
        { type: "h2", text: "दिन शयन पर क्यों खत्म होता है" },
        {
          type: "p",
          text: "ट्रस्ट लिखता है कि प्रतिदिन तीनों लोकों की यात्रा के बाद शिव के यहाँ विश्राम करने की मान्यता है, इसलिए मंदिर शयन की विधि और शयन दर्शन रखता है। उस वाक्य में पारंपरिक भाषा काम कर रही है। वह एक विधि समझाती है। यह दावा नहीं कि इतिहासकार इस पृष्ठ की किसी शिलालेख-तिथि से उसे सिद्ध कर दे। विधि का घंटा [[omkareshwar-temple-timings|समय पृष्ठ]] पर है, और ट्रस्ट के अपने दस्तावेजों में वह हिला है।",
        },
        { type: "h2", text: "यह पृष्ठ क्या कढ़ाई नहीं करेगा" },
        {
          type: "p",
          text: "लंबी कथाएँ पहाड़ी को राजा मांधाता से, विंध्य की तपस्या से, और पुराणों के विशेष अध्यायों से जोड़ती हैं। विस्तार में वे कथाएँ अलग हैं। जब तक उद्धृत अध्याय पाठक के सामने न हो, यह गाइड वहीं रुकती है जहाँ ट्रस्ट और राज्य पर्यटन सच में बोलते हैं। गढ़ंत कथा को चिकना और कम सच बनाती।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर का उल्लेख किन ग्रंथों में है?",
          a: "मंदिर ट्रस्ट स्कंद पुराण, शिव पुराण और वायु पुराण का नाम लेता है। यह गाइड उस अध्याय का उद्धरण नहीं बनाएगी जिसे संस्कृत के बगल में नहीं रखा।",
        },
        {
          q: "द्वीप को ॐ क्यों कहते हैं?",
          a: "क्योंकि उसकी आकृति परंपरा से ॐ अक्षर से मिलाई जाती है। मध्य प्रदेश पर्यटन भी यही कहता है।",
        },
        {
          q: "क्या यह कथा सिद्ध इतिहास है?",
          a: "नहीं। यह हिंदू परंपरा है। पर्यटन विभाग की वास्तुकला-तिथियाँ दूसरी तरह का कथन हैं और इतिहास पृष्ठ पर रखी गई हैं।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-shivling",
    cluster: "temple",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["abhishekBooking", "faq", "templeWebsite", "shighraInfo"],
    related: ["omkareshwar-jyotirlinga", "omkareshwar-darshan", "omkareshwar-vip-darshan", "omkareshwar-jyotirlinga-story"],
    en: {
      title: "Omkareshwar Shivling – Darshan Rules & Abhishek",
      description:
        "The Omkareshwar shivling is worshipped by priests. The trust forbids touching the main linga. Abhishek is booked officially, between 6 AM and 4 PM.",
      h1: "The Omkareshwar shivling",
      kicker: "How worship is done",
      answer:
        "The shivling at Omkareshwar is the Jyotirlinga in the sanctum on Mandhata. Devotees take darshan. They do not handle the linga. The trust’s Abhishek page says touching the main shivling is not permitted, and that the ritual is performed by priests in the sabhamandap between 6:00 AM and 4:00 PM, not after sunset.",
      blocks: [
        { type: "h2", text: "Darshan is looking, not holding" },
        {
          type: "p",
          text: "People arrive with the habit of another Shiva temple, where a priest placed their hand or let them pour water. This railing does not continue that habit. The trust is explicit about the main linga. Offerings such as bilva, flowers and coconut may also be stopped before the garbhagriha. The schedules page says so. A coconut broken in the wrong place slows the line and does not improve the worship.",
        },
        { type: "h2", text: "Abhishek, if you want the rite" },
        {
          type: "p",
          text: "Book it on {{abhishekBooking|the official Abhishek page}}. The trust says the booking includes puja material, prasad, and Shighra darshan for two persons. Maha Rudrabhishek is named there as a form of the rite. The payment is the trust’s. This website does not add a charge and does not store your intention. If you only wanted to see the linga, you do not need Abhishek. The free queue is the darshan.",
        },
        {
          type: "p",
          text: "There is a separate black-stone linga, about six feet, at [[gauri-somnath-temple|Gauri Somnath]], in the state tourism description. That is another temple on the parikrama. Do not merge it with the Jyotirlinga when you tell the family what you saw.",
        },
      ],
      faqs: [
        {
          q: "Can devotees touch the Omkareshwar shivling?",
          a: "No. The trust’s Abhishek page says touching the main shivling is not permitted.",
        },
        {
          q: "What time is Abhishek?",
          a: "The trust says the best time is 6:00 AM to 4:00 PM, in the sabhamandap, and that it cannot be done after sunset.",
        },
        {
          q: "Does Abhishek include darshan?",
          a: "The Abhishek page says the booking includes Shighra darshan for two persons, plus materials and prasad. Ordinary darshan does not require this booking.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर शिवलिंग – दर्शन के नियम और अभिषेक",
      description:
        "ओंकारेश्वर शिवलिंग की पूजा पुजारी करते हैं। ट्रस्ट मुख्य लिंग छूने से मना करता है। अभिषेक आधिकारिक रूप से सुबह 6 से शाम 4 के बीच बुक होता है।",
      h1: "ओंकारेश्वर शिवलिंग",
      kicker: "पूजा कैसे होती है",
      answer:
        "ओंकारेश्वर का शिवलिंग मांधाता के गर्भगृह का ज्योतिर्लिंग है। श्रद्धालु दर्शन करते हैं। लिंग नहीं सँभालते। ट्रस्ट का अभिषेक पृष्ठ कहता है कि मुख्य शिवलिंग छूना मना है, और विधि पुजारी सभामंडप में सुबह 6 से शाम 4 बजे के बीच करते हैं, सूर्यास्त के बाद नहीं।",
      blocks: [
        { type: "h2", text: "दर्शन देखना है, पकड़ना नहीं" },
        {
          type: "p",
          text: "लोग दूसरे शिव मंदिर की आदत लेकर आते हैं, जहाँ पुजारी ने हाथ रखवाया या जल डलवाया। यह रेलिंग वह आदत जारी नहीं रखती। मुख्य लिंग के बारे में ट्रस्ट स्पष्ट है। बिल्वपत्र, फूल और नारियल भी गर्भगृह से पहले रोके जा सकते हैं। दिनचर्या पृष्ठ यही कहता है। गलत जगह फूटा नारियल पंक्ति धीमी करता है और पूजा बेहतर नहीं करता।",
        },
        { type: "h2", text: "अभिषेक, यदि विधि चाहिए" },
        {
          type: "p",
          text: "उसे {{abhishekBooking|आधिकारिक अभिषेक पृष्ठ}} पर बुक करें। ट्रस्ट कहता है कि बुकिंग में पूजन सामग्री, प्रसाद, और दो व्यक्तियों का शीघ्र दर्शन शामिल है। वहाँ महारुद्राभिषेक विधि के एक रूप के नाम से है। भुगतान ट्रस्ट का है। यह वेबसाइट शुल्क नहीं जोड़ती और आपकी मनोकामना संग्रहीत नहीं करती। यदि केवल लिंग देखना था तो अभिषेक जरूरी नहीं। मुफ्त कतार ही दर्शन है।",
        },
        {
          type: "p",
          text: "राज्य पर्यटन के वर्णन में [[gauri-somnath-temple|गौरी सोमनाथ]] पर अलग काला शिवलिंग है, लगभग छह फुट। वह परिक्रमा का दूसरा मंदिर है। परिवार को जो देखा उसका हाल बताते समय उसे ज्योतिर्लिंग में न मिलाएँ।",
        },
      ],
      faqs: [
        {
          q: "क्या श्रद्धालु ओंकारेश्वर शिवलिंग छू सकते हैं?",
          a: "नहीं। ट्रस्ट का अभिषेक पृष्ठ कहता है कि मुख्य शिवलिंग छूना मना है।",
        },
        {
          q: "अभिषेक किस समय है?",
          a: "ट्रस्ट कहता है कि उपयुक्त समय सुबह 6 से शाम 4 है, सभामंडप में, और सूर्यास्त के बाद नहीं हो सकता।",
        },
        {
          q: "क्या अभिषेक में दर्शन शामिल है?",
          a: "अभिषेक पृष्ठ कहता है कि बुकिंग में दो व्यक्तियों का शीघ्र दर्शन, सामग्री और प्रसाद शामिल हैं। सामान्य दर्शन के लिए यह बुकिंग जरूरी नहीं।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-festivals",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["faq", "timetable", "mpTourism", "news"],
    related: ["omkareshwar-mahashivratri", "omkareshwar-temple-timings", "narmada-ghat-omkareshwar", "omkareshwar-darshan"],
    en: {
      title: "Omkareshwar Festivals – Shravan, Mondays & the Crowd",
      description:
        "Omkareshwar’s heavy days are Shravan, Mondays, and Mahashivratri. The trust says hours change on special occasions. This page does not invent this year’s dates.",
      h1: "Festivals at Omkareshwar",
      kicker: "When the town fills",
      answer:
        "The days that change Omkareshwar are Shravan, ordinary Mondays, and Mahashivratri. Madhya Pradesh Tourism says Shravan brings the highest crowds and a bath in the Narmada. The trust’s FAQ describes a Monday procession from Koti Tirth Ghat, grander in Shravan. The daily page warns that darshan hours may change on special occasions. This guide does not print a festival calendar it has not copied from a dated panchang.",
      blocks: [
        { type: "h2", text: "What actually changes" },
        {
          type: "ul",
          items: [
            "The queue starts earlier and lasts longer. The free queue still exists.",
            "Shighra slots, if the trust has opened them, disappear faster. The booking page has said slots are open Monday to Sunday. Recheck.",
            "A room that was easy on a Wednesday is a different market on a Shravan Monday.",
            "The bridge and the ghats are part of the festival, not a bypass around it.",
            "The sanctum can close for a longer shringar. The timetable’s own warning is the rule.",
          ],
        },
        { type: "h2", text: "Mondays outside Shravan" },
        {
          type: "p",
          text: "Shiva’s weekday is already enough to fill the lane. The Somvar sawari starts at Koti Tirth Ghat every Monday, according to the FAQ, and the royal form belongs to Shravan. You do not need a fairground to have a hard morning. You need a bed you can leave in the dark, or a willingness to take the afternoon block.",
        },
        {
          type: "p",
          text: "Kartik and other lunar observances draw people too. Because those dates move, the only honest instruction is to open the trust’s site for the week you mean, and to read [[latest-omkareshwar-news|what this guide has actually verified]]. Undated headlines on the trust’s news page are not a festival list.",
        },
      ],
      faqs: [
        {
          q: "When is the busiest time in Omkareshwar?",
          a: "Madhya Pradesh Tourism names Shravan, around July or August, as the highest crowd, and also points to Mondays in the religious week. Mahashivratri is the other peak.",
        },
        {
          q: "Do temple timings change in festivals?",
          a: "The trust says they may. Read the daily darshan page for that date instead of this article.",
        },
        {
          q: "Where can I see this year’s dates?",
          a: "On the temple trust’s website and a panchang you trust. This page will not invent a Gregorian date.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर के पर्व – सावन, सोमवार और भीड़",
      description:
        "ओंकारेश्वर के भारी दिन सावन, सोमवार और महाशिवरात्रि हैं। ट्रस्ट कहता है विशेष अवसर पर समय बदल सकता है। यह पृष्ठ इस वर्ष की तिथियाँ नहीं गढ़ता।",
      h1: "ओंकारेश्वर के पर्व",
      kicker: "जब नगर भरता है",
      answer:
        "ओंकारेश्वर को बदलने वाले दिन सावन, सामान्य सोमवार, और महाशिवरात्रि हैं। मध्य प्रदेश पर्यटन कहता है कि सावन में सबसे अधिक भीड़ और नर्मदा स्नान होता है। ट्रस्ट का प्रश्नोत्तर कोटी तीर्थ घाट से सोमवार की सवारी बताता है, सावन में अधिक राजसी। दैनिक पृष्ठ चेताता है कि विशेष अवसर पर दर्शन का समय बदल सकता है। यह गाइड ऐसा पर्व-कैलेंडर नहीं छापती जिसे दिनांकित पंचांग से न लिया गया हो।",
      blocks: [
        { type: "h2", text: "सच में क्या बदलता है" },
        {
          type: "ul",
          items: [
            "कतार जल्दी शुरू होती है और देर तक रहती है। मुफ्त कतार फिर भी रहती है।",
            "शीघ्र स्लॉट, यदि ट्रस्ट ने खोले हों, जल्दी खत्म होते हैं। बुकिंग पृष्ठ कह चुका है कि सोमवार से रविवार स्लॉट खुले हैं। फिर देखें।",
            "जो कमरा बुधवार को आसान था, सावन के सोमवार को दूसरा बाजार है।",
            "पुल और घाट पर्व का हिस्सा हैं, पर्व का बचाव मार्ग नहीं।",
            "गर्भगृह लंबे श्रृंगार के लिए बंद हो सकता है। समय-सारिणी की अपनी चेतावनी ही नियम है।",
          ],
        },
        { type: "h2", text: "सावन के बाहर के सोमवार" },
        {
          type: "p",
          text: "शिव का वार अपने आप गली भरने को काफी है। प्रश्नोत्तर के अनुसार सोमवार सवारी हर सोमवार कोटी तीर्थ घाट से शुरू होती है, और राजसी रूप सावन का है। कठिन सुबह के लिए मेले की जरूरत नहीं। जरूरत उस बिस्तर की है जिसे अँधेरे में छोड़ सकें, या दोपहर का खंड लेने की तैयारी।",
        },
        {
          type: "p",
          text: "कार्तिक और अन्य चांद्र दिन भी लोगों को लाते हैं। तिथियाँ हिलती हैं, इसलिए ईमानदार निर्देश यही है कि जिस सप्ताह का मतलब हो उस सप्ताह ट्रस्ट की साइट खोलें, और [[latest-omkareshwar-news|जो यह गाइड सच में जाँच चुकी है]] उसे पढ़ें। ट्रस्ट के समाचार पृष्ठ की बिना तिथि की सुर्खियाँ पर्व-सूची नहीं हैं।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर में सबसे भीड़ कब होती है?",
          a: "मध्य प्रदेश पर्यटन सावन को, जुलाई या अगस्त के आसपास, सबसे बड़ी भीड़ कहता है। महाशिवरात्रि दूसरा शिखर है। सोमवार वैसे भी भारी होते हैं।",
        },
        {
          q: "क्या पर्व में मंदिर का समय बदलता है?",
          a: "ट्रस्ट कहता है बदल सकता है। उस तिथि का दैनिक दर्शन पृष्ठ पढ़ें, यह लेख नहीं।",
        },
        {
          q: "इस वर्ष की तिथियाँ कहाँ देखें?",
          a: "मंदिर ट्रस्ट की वेबसाइट पर और जिस पंचांग पर आप भरोसा करें। यह पृष्ठ अंग्रेजी कैलेंडर की तिथि नहीं गढ़ेगा।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-mahashivratri",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["timetable", "faq", "shighraInfo", "mpTourism"],
    related: ["omkareshwar-festivals", "omkareshwar-temple-timings", "omkareshwar-vip-darshan", "hotels-near-omkareshwar-temple"],
    en: {
      title: "Omkareshwar Mahashivratri – Night, Queue & a Room",
      description:
        "Mahashivratri at Omkareshwar is the night the ordinary clock bends. Book the room first, recheck the trust’s hours, and ignore unofficial night passes.",
      h1: "Mahashivratri at Omkareshwar",
      kicker: "The night of Shiva",
      answer:
        "Mahashivratri is the night Omkareshwar does not behave like an ordinary Monday. The trust says darshan hours may change on special occasions, so the daily page for that date outranks any article, including this one. Come with a room already held on the bank you can reach, and with the official site open for Shighra if you want the shorter line. There is no night pass sold by this guide.",
      blocks: [
        { type: "h2", text: "The plan that survives the night" },
        {
          type: "ol",
          items: [
            "Hold the room before you hold the train. A Mahashivratri search on the day is how families sleep in a highway dhaba.",
            "Read {{timetable|the daily darshan page}} that afternoon. If shayan or a special vigil has moved, the page will know before this article does.",
            "If you want Shighra, pay on {{darshanBooking|the official form}} and carry the print and identity. Agents invent “Mahashivratri VIP” because the night is emotional.",
            "Eat before the long block. Prasadalaya’s printed hours, 10 to 3 and 5 to 9, may be under the same festival pressure. Do not assume them.",
            "Cross Mamleshwar in daylight if you can. The south bank at midnight is a different walk from the south bank at 4 PM.",
          ],
        },
        {
          type: "p",
          text: "The religious meaning is Shiva’s night, kept in the tradition that also tells the [[omkareshwar-jyotirlinga-story|story of the linga]]. The practical meaning is a town with more people than beds. Both are true. Only the second one will strand you.",
        },
      ],
      faqs: [
        {
          q: "What are Mahashivratri timings at Omkareshwar?",
          a: "The trust says special occasions can change the clock. Use the official daily page for that date. This article will not guess the night’s hours.",
        },
        {
          q: "Is a special ticket required?",
          a: "Normal darshan stays the free queue unless the trust announces otherwise. Shighra remains the optional official ticket. Buy it only on the trust’s site.",
        },
        {
          q: "When is Mahashivratri this year?",
          a: "It follows the lunar calendar and shifts. Check a panchang or the temple website. We do not print an unverified Gregorian date.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर महाशिवरात्रि – रात, कतार और कमरा",
      description:
        "ओंकारेश्वर की महाशिवरात्रि वह रात है जब सामान्य घड़ी झुकती है। पहले कमरा रखें, ट्रस्ट का समय फिर देखें, और अनौपचारिक रात्रि-पास छोड़ें।",
      h1: "ओंकारेश्वर में महाशिवरात्रि",
      kicker: "शिव की रात",
      answer:
        "महाशिवरात्रि वह रात है जब ओंकारेश्वर सामान्य सोमवार जैसा नहीं रहता। ट्रस्ट कहता है कि विशेष अवसर पर दर्शन का समय बदल सकता है, इसलिए उस तिथि का दैनिक पृष्ठ इस लेख सहित हर लेख से ऊपर है। जिस तट पर पहुँच सकें वहाँ कमरा पहले से हो, और छोटी पंक्ति चाहिए तो आधिकारिक साइट खुली हो। इस गाइड का कोई रात्रि-पास नहीं बिकता।",
      blocks: [
        { type: "h2", text: "वह योजना जो रात में टिके" },
        {
          type: "ol",
          items: [
            "रेल से पहले कमरा रखें। महाशिवरात्रि की उसी दिन की खोज से परिवार राजमार्ग के ढाबे में सोता है।",
            "उस दोपहर {{timetable|दैनिक दर्शन पृष्ठ}} पढ़ें। शयन या विशेष जागरण हिला हो तो पृष्ठ इस लेख से पहले जानेगा।",
            "शीघ्र चाहिए तो {{darshanBooking|आधिकारिक फॉर्म}} पर भुगतान करें और प्रिंट तथा पहचान रखें। एजेंट “महाशिवरात्रि वीआईपी” इसलिए गढ़ते हैं कि रात भावुक होती है।",
            "लंबे खंड से पहले खा लें। प्रसादालय के छपे घंटे, 10 से 3 और 5 से 9, उसी पर्व के दबाव में हो सकते हैं। उन्हें मानकर न चलें।",
            "ममलेश्वर उजाले में पार कर सकें तो कर लें। आधी रात का दक्षिणी तट शाम 4 बजे के दक्षिणी तट से दूसरी चाल है।",
          ],
        },
        {
          type: "p",
          text: "धार्मिक अर्थ शिव की रात है, उसी परंपरा में जो [[omkareshwar-jyotirlinga-story|लिंग की कथा]] कहती है। व्यावहारिक अर्थ एक ऐसा नगर है जिसमें बिस्तरों से अधिक लोग हैं। दोनों सच हैं। फँसाएगा दूसरा।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर में महाशिवरात्रि का समय क्या है?",
          a: "ट्रस्ट कहता है विशेष अवसर घड़ी बदल सकते हैं। उस तिथि का आधिकारिक दैनिक पृष्ठ देखें। यह लेख रात के घंटे अनुमान नहीं लगाएगा।",
        },
        {
          q: "क्या विशेष टिकट जरूरी है?",
          a: "सामान्य दर्शन मुफ्त कतार रहता है, जब तक ट्रस्ट कुछ और न घोषित करे। शीघ्र वैकल्पिक आधिकारिक टिकट रहता है। केवल ट्रस्ट की साइट पर खरीदें।",
        },
        {
          q: "इस वर्ष महाशिवरात्रि कब है?",
          a: "वह चांद्र कैलेंडर पर है और हिलती है। पंचांग या मंदिर की वेबसाइट देखें। हम बिना जाँच की अंग्रेजी तिथि नहीं छापते।",
        },
      ],
    },
  },
];
