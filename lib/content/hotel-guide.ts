import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const hotelGuidePages: PageDef[] = [
  {
    slug: "omkareshwar-hotel",
    cluster: "stay",
    kind: "guide",
    updated,
    sources: [],
    related: ["hotels-in-omkareshwar", "omkareshwar-dharamshala", "omkareshwar-vip-darshan", "where-is-omkareshwar"],
    en: {
      title: "Omkareshwar Hotel Guide – Stay by the Narmada",
      description:
        "Where to stay in Omkareshwar for the ghats and evening aarti: island rooms near the temple, and mainland hotels by Mamleshwar and the bridge.",
      h1: "Omkareshwar Hotel Guide",
      kicker: "A room by the river",
      answer:
        "Omkareshwar is a holy town in the Khandwa district of Madhya Pradesh, on Mandhata island in the Narmada, named for the island’s shape resembling the sacred syllable Om. For pilgrims visiting the Jyotirlinga, the right room is the one that lets you join the morning ghat bath, the evening aarti, and the quiet after the crowd. The stays below open on their own detail pages.",
      blocks: [
        { type: "stays" },
        { type: "h2", text: "Finding a peaceful stay by the sacred river" },
        {
          type: "p",
          text: "Accommodation in Omkareshwar runs from pilgrim dormitories at a few dozen rupees a night to mid-range hotels with a balcony toward the river. Travelers on different budgets can find a bed. The market is also like the river: under a calm surface the current changes. The gap between a glowing review and a harsh one is often wider than the change in the Narmada’s depth.",
        },
        { type: "h2", text: "Location determines the experience" },
        {
          type: "p",
          text: "The first choice is the island of Mandhata or the mainland. Vehicles park on the mainland. A room on the island means carrying luggage up narrow steps or across the suspension bridge. With elderly family or large bags, a mainland hotel near Mamleshwar Temple and the bridge is the practical bed: the vehicle can reach the door.",
        },
        {
          type: "p",
          text: "If the point of the stay is the rite — walking to the ghats at first light, the Narmada aarti, the town after the crowd leaves — then the island, near the temple and the ghats, saves the walk. Ghat-side rooms can feel like opening the door onto the Narmada. The water line moves with the season. A river-view room on a map can be a distant view once the level drops.",
        },
        { type: "h2", text: "Mid-range hotels" },
        {
          type: "p",
          text: "The rooms people compare most are mid-range hotels with air conditioning. They are often a walk from the temple and the ghats, and some balconies look toward the spire and the river.",
        },
        {
          type: "p",
          text: "MPT Temple View, of the Madhya Pradesh Tourism Development Corporation, sits on a small hill with a wide view of the Narmada, the Omkareshwar Temple, the dam and two bridges. Guests mention the balcony and name front-desk staff Anand Mohor and Rohit. Breakfast is simple — puri, poha, idli, vada — and the restaurant is often described as slow because the floor is short of staff. Air-conditioned rooms are spoken of around ₹2,800 to ₹4,500 a night, the upper part of the mid range.",
        },
        {
          type: "p",
          text: "The Shrine is a smaller hotel, opened in 2022 and renovated in 2025, about a 15-minute walk from the Omkareshwar Temple. Reviews repeat clean, quiet and a convenient location, and they call the staff friendly. It does not serve breakfast, and with about six rooms it fills in peak season. Prices are spoken of around ₹1,500 to ₹2,500.",
        },
        {
          type: "p",
          text: "Hotel Gurukripa Inn is within a walk of both Omkareshwar and Mamleshwar. Reviews split. Some praise the location, the view and the staff. Others complain of cleanliness, no breakfast, difficult parking and no power backup. It is a backup when location comes first, and a cautious choice when hygiene and steady service matter more.",
        },
        {
          type: "p",
          text: "Namami Retreat is also a walk from the temple, and guests say the staff will help with temple tickets. A large share of the comments found are unhappy: food described as undercooked or harshly spiced, a late check-out charged at ₹500 an hour, and service that cools when a problem appears. One guest said they would not recommend it until the basic issues are fixed. A good pin is not the same thing as a good night.",
        },
        { type: "h2", text: "Budget rooms and dharamshalas" },
        {
          type: "p",
          text: "For a smaller budget there are lodges and guesthouses spoken of around ₹800 to ₹1,500, and dharamshalas around ₹400 to ₹1,000. Many sit near the bus station and the old bridge road. The facilities are basic and enough for one night. Vrindavan Dham Dodia Dharamshala is about 3 kilometres from Mamleshwar and Omkareshwar, for someone who does not mind the walk.",
        },
        {
          type: "p",
          text: "Expect less: hot water may run only at set hours, Wi-Fi may drop, and the room may have no air conditioning. What these places still have is a plain pilgrimage atmosphere, and the chance to share a corridor and a cup of tea with other pilgrims.",
        },
        { type: "h2", text: "Practical advice" },
        {
          type: "ul",
          items: [
            "Book early for Maha Shivratri, the Mondays of Shravan, and Kartik Purnima. Rooms fill and prices rise. Weeks ahead is the safer plan.",
            "Treat a river-view photograph carefully. It may have been taken when the water was high. Ask the hotel what the bank looks like now, or read photographs guests uploaded recently.",
            "Food is mostly vegetarian. If the meal matters, MPT Temple View’s restaurant is the steadier of the comments, with slower service.",
            "Read recent reviews. The same hotel can feel different a few months later. The last three months are more useful than praise from a year ago.",
          ],
        },
        { type: "h2", text: "Unofficial VIP darshan offers" },
        {
          type: "p",
          text: "Some hotels offer to arrange VIP darshan or a quicker line. Be careful. A 2025 Dainik Bhaskar report described a paid shortcut at the temple; two employees were removed and a priest was booked. The trust’s position is plain: ordinary darshan is free and needs no booking. Optional [[omkareshwar-vip-darshan|Shighra Darshan]] is ₹300 a person and is sold on https://shriomkareshwar.org/ or at the temple counter. A VIP arrangement promised by a hotel is not that ticket.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "In Omkareshwar a hotel is not only a place to sleep. It is where you put the bags down and walk toward the ghats, where the window at dawn shows the spire, and where the evening is quiet after the rites. The right room is the one that lets a short visit follow the rhythm of this Om-shaped island. Whichever door you use, the Narmada is there, and the temple bells carry.",
        },
      ],
      faqs: [
        {
          q: "Does this page reserve the room?",
          a: "No. Each hotel name opens that stay’s own detail page. This guide does not take a room payment.",
        },
        {
          q: "Island or mainland?",
          a: "The island is the shorter walk to the ghats and the morning rite, and luggage has to be carried. The mainland near Mamleshwar and the bridge is easier when a car must reach the door.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर होटल गाइड – नर्मदा किनारे ठहराव",
      description:
        "ओंकारेश्वर में घाट और संध्या आरती के लिए ठहराव: मंदिर के पास द्वीप के कमरे, और ममलेश्वर तथा पुल के पास मुख्य भूमि के होटल।",
      h1: "ओंकारेश्वर होटल गाइड",
      kicker: "नदी किनारे एक कमरा",
      answer:
        "ओंकारेश्वर मध्य प्रदेश के खंडवा जिले का पवित्र नगर है, नर्मदा में मांधाता द्वीप पर, जिसका आकार ॐ से जोड़ा जाता है। ज्योतिर्लिंग आने वाले यात्री के लिए सही कमरा वह है जहाँ से सुबह घाट स्नान, संध्या आरती और भीड़ छँटने के बाद का शांत समय जुड़ सके। नीचे दिए ठहराव अपने डिटेल पृष्ठ पर खुलते हैं।",
      blocks: [
        { type: "stays" },
        { type: "h2", text: "पवित्र नदी के किनारे शांत ठहराव" },
        {
          type: "p",
          text: "ओंकारेश्वर में ठहराव कुछ दर्जन रुपये की धर्मशाला से लेकर नदी की ओर बालकनी वाले मध्यम होटलों तक है। अलग बजट का यात्री बिस्तर पा सकता है। यह बाज़ार नदी जैसा है: शांत सतह के नीचे धार बदलती है। एक चमकती समीक्षा और एक कड़ी शिकायत के बीच का फासला अक्सर नर्मदा की गहराई के बदलाव से बड़ा होता है।",
        },
        { type: "h2", text: "अनुभव जगह तय करती है" },
        {
          type: "p",
          text: "पहला फैसला द्वीप है या मुख्य भूमि। गाड़ियाँ मुख्य भूमि पर रुकती हैं। द्वीप के कमरे का मतलब संकरा रास्ता या झूला पुल पार कर सामान उठाना है। बुजुर्ग या भारी सामान हो तो ममलेश्वर मंदिर और पुल के पास मुख्य भूमि का होटल व्यावहारिक है, क्योंकि गाड़ी दरवाज़े तक पहुँच सकती है।",
        },
        {
          type: "p",
          text: "यदि ठहराव का मतलब विधि है — भोर में घाट तक चलना, नर्मदा आरती, भीड़ के बाद का नगर — तो मंदिर और घाट के पास द्वीप चलना बचाता है। घाट किनारे का कमरा ऐसा लग सकता है जैसे दरवाज़ा खोलते ही नर्मदा हो। जल-स्तर मौसम के साथ बदलता है। नक्शे पर नदी-दृश्य का कमरा जल घटने पर दूर का दृश्य रह सकता है।",
        },
        { type: "h2", text: "मध्यम होटल" },
        {
          type: "p",
          text: "जिन कमरों की तुलना सबसे अधिक होती है वे एयर-कंडीशन वाले मध्यम होटल हैं। अक्सर मंदिर और घाट पैदल दूरी पर होते हैं, और कुछ बालकनियों से शिखर और नदी दिखती है।",
        },
        {
          type: "p",
          text: "MPT Temple View मध्य प्रदेश पर्यटन विकास निगम का है, एक छोटी पहाड़ी पर, जहाँ से नर्मदा, ओंकारेश्वर मंदिर, बाँध और दो पुल दिखते हैं। मेहमान बालकनी का ज़िक्र करते हैं और फ्रंट डेस्क पर आनंद मोहोर तथा रोहित का नाम लेते हैं। नाश्ता सादा है — पूरी, पोहा, इडली, वड़ा — और रेस्तराँ को अक्सर धीमा कहा जाता है क्योंकि कर्मचारी कम होते हैं। एयर-कंडीशन कमरे लगभग ₹2,800 से ₹4,500 प्रति रात बताए जाते हैं।",
        },
        {
          type: "p",
          text: "The Shrine छोटा होटल है, 2022 में खुला और 2025 में नवीनीकृत, ओंकारेश्वर मंदिर से लगभग 15 मिनट की पैदल दूरी पर। समीक्षाओं में साफ, शांत और सुविधाजनक जगह बार-बार आती है, और स्टाफ को सहयोगी कहा जाता है। यहाँ नाश्ता नहीं मिलता, और लगभग छह कमरे होने से मौसम में जल्दी भर जाता है। कीमत लगभग ₹1,500 से ₹2,500 बताई जाती है।",
        },
        {
          type: "p",
          text: "Hotel Gurukripa Inn ओंकारेश्वर और ममलेश्वर दोनों से पैदल दूरी पर है। समीक्षाएँ बँटी हैं। कुछ जगह, दृश्य और स्टाफ की तारीफ करते हैं। कुछ सफाई, नाश्ते का न होना, पार्किंग और बिजली बैकअप की शिकायत करते हैं। जगह पहले हो तो यह विकल्प है। सफाई और स्थिर सेवा पहले हो तो सावधानी रखें।",
        },
        {
          type: "p",
          text: "Namami Retreat भी मंदिर से पैदल है, और मेहमान कहते हैं कि स्टाफ मंदिर के टिकट में मदद करता है। मिली टिप्पणियों का बड़ा हिस्सा नाखुश है: खाना कच्चा या बहुत तीखा, देर से चेक-आउट पर ₹500 प्रति घंटा, और समस्या पर ठंडी सेवा। एक मेहमान ने कहा कि बुनियादी बातें सुधरें तब तक वे सुझाव नहीं देंगे। अच्छा पता अच्छी रात नहीं होता।",
        },
        { type: "h2", text: "कम बजट और धर्मशाला" },
        {
          type: "p",
          text: "छोटे बजट पर लॉज और गेस्टहाउस लगभग ₹800 से ₹1,500, और धर्मशालाएँ लगभग ₹400 से ₹1,000 बताई जाती हैं। कई बस स्टैंड और पुराने पुल की सड़क के पास हैं। सुविधा सादी है और एक रात के लिए काफी। वृंदावन धाम डोडिया धर्मशाला ममलेश्वर और ओंकारेश्वर से लगभग 3 किलोमीटर है, जो चलने से न घबराए उसके लिए।",
        },
        {
          type: "p",
          text: "उम्मीद कम रखें: गर्म पानी तय घंटों में हो सकता है, वाई-फाई टूट सकता है, और कमरे में एयर-कंडीशन न हो। इन जगहों में जो अभी भी है वह सीधा तीर्थ का माहौल है, और दूसरे यात्रियों के साथ गलियारा तथा चाय बाँटने का मौका।",
        },
        { type: "h2", text: "यात्रियों के लिए व्यावहारिक बातें" },
        {
          type: "ul",
          items: [
            "महाशिवरात्रि, सावन के सोमवार और कार्तिक पूर्णिमा के लिए जल्दी तय करें। कमरे भरते हैं और कीमत बढ़ती है। हफ्तों पहले का इंतज़ाम सुरक्षित है।",
            "नदी-दृश्य की तस्वीर सावधानी से देखें। वह ऊँचे जल पर ली गई हो सकती है। होटल से आज का किनारा पूछें, या हाल में मेहमानों की तस्वीरें देखें।",
            "खाना अधिकतर शाकाहारी है। भोजन मायने रखे तो MPT Temple View के रेस्तराँ पर टिप्पणियाँ अपेक्षाकृत स्थिर हैं, सेवा धीमी रहती है।",
            "हाल की समीक्षा पढ़ें। वही होटल कुछ महीनों बाद अलग लग सकता है। पिछले तीन महीने एक साल पुरानी तारीफ से अधिक काम के हैं।",
          ],
        },
        { type: "h2", text: "अनाधिकारिक वीआईपी दर्शन के ऑफर" },
        {
          type: "p",
          text: "कुछ होटल वीआईपी दर्शन या छोटी कतार का इंतज़ाम देने को कहते हैं। सावधानी रखें। 2025 में दैनिक भास्कर की एक रिपोर्ट ने मंदिर पर पैसे लेकर जल्दी दर्शन कराने का जाल बताया; दो कर्मचारी हटाए गए और एक पुजारी पर कार्रवाई हुई। ट्रस्ट की स्थिति साफ है: सामान्य दर्शन मुफ्त है और उसके लिए बुकिंग नहीं चाहिए। वैकल्पिक [[omkareshwar-vip-darshan|शीघ्र दर्शन]] ₹300 प्रति व्यक्ति है और https://shriomkareshwar.org/ पर या मंदिर के काउंटर पर बिकता है। होटल का वीआईपी इंतज़ाम वह टिकट नहीं है।",
        },
        { type: "h2", text: "निष्कर्ष" },
        {
          type: "p",
          text: "ओंकारेश्वर में होटल केवल सोने की जगह नहीं। वहीं से बैग रखकर घाट की ओर चलते हैं, भोर की खिड़की से शिखर दिखता है, और विधि के बाद शाम शांत होती है। सही कमरा वह है जो छोटे समय में इस ॐ-आकार के द्वीप की लय में रहने दे। जो भी दरवाज़ा हो, नर्मदा वहीं है, और मंदिर की घंटियाँ वहीं पहुँचती हैं।",
        },
      ],
      faqs: [
        {
          q: "क्या यह पृष्ठ कमरा आरक्षित करता है?",
          a: "नहीं। हर होटल का नाम उस ठहराव के अपने डिटेल पृष्ठ पर खुलता है। यह गाइड कमरे का भुगतान नहीं लेती।",
        },
        {
          q: "द्वीप या मुख्य भूमि?",
          a: "द्वीप घाट और सुबह की विधि के अधिक पास है, और सामान उठाना पड़ता है। ममलेश्वर और पुल के पास मुख्य भूमि तब आसान है जब गाड़ी दरवाज़े तक पहुँचे।",
        },
      ],
    },
  },
];
