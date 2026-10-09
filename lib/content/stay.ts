import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const stayPages: PageDef[] = [
  {
    slug: "hotels-in-omkareshwar",
    cluster: "stay",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["vishramalaya", "faq", "timetable"],
    related: ["hotels-near-omkareshwar-temple", "omkareshwar-dharamshala", "budget-hotels-omkareshwar", "family-hotels-omkareshwar"],
    en: {
      title: "Hotels in Omkareshwar – How to Choose a Room",
      description:
        "Hotels in Omkareshwar are private stays, shown here by name. The trust’s own lodging is Shri Ji Vishramalaya. This guide does not book either.",
      h1: "Hotels in Omkareshwar",
      kicker: "A room, not a temple service",
      answer:
        "A hotel in Omkareshwar is a private business. It is not the temple, and this website does not sell its rooms. The only lodging the trust describes as its own is Shri Ji Vishramalaya, about 1 km from the temple, booked on the trust’s website. The stays below are separate doors. Each name opens that stay’s own page.",
      blocks: [
        { type: "h2", text: "Rooms people compare for the ghats" },
        {
          type: "p",
          text: "These are private hotels and resorts. A card opens that stay’s own page. This guide does not take a room payment, and a room here is not a temple ticket.",
        },
        { type: "stays" },
        {
          type: "p",
          text: "The Shankara View, Hotel Panchavati Palace, Hotel Gurukripa Inn, The Shrine Hotel, Hotel Shri Radhe Krishna and Hotel Royal Inn are the town rooms in that set. They fit a morning when the 4:30 AM aarti should be a walk, or a short crossing from the south bank. Ask which side of the bridge the door is on. A town name is not a ghat address.",
        },
        {
          type: "p",
          text: "Narmada Hills Resort, MPT Sailani Island Resort and The Grand Omkara Hotel & Resorts trade the lane for space. A garden and a place to leave the car can be the right night for a driver or a family. They are the wrong night for the free queue at opening unless a vehicle is already arranged before dawn. The word island in a resort name does not mean the bed is on Mandhata.",
        },
        { type: "h2", text: "Three places the bed can be" },
        {
          type: "ul",
          items: [
            "On Mandhata, or close enough that the 4:30 AM aarti is a walk. This is the bed for the morning rite.",
            "On the south bank, near Mamleshwar and the bridge. A fair bed if you will cross once in daylight and once before dawn.",
            "On the highway or toward Mortakka and Sanawad. A fair bed for a driver. A poor bed if the plan is the free queue at opening, unless a vehicle is already arranged for the dark.",
          ],
        },
        {
          type: "p",
          text: "The trust’s FAQ, asked about accommodation, names Shri Ji Vishramalaya for community halls and, for private rooms, Bhakt Niwas or Hotel Temple View. Those names are the trust’s examples, not a ranking by this guide, and not a booking link. Madhya Pradesh Tourism separately describes an MPT property, Temple View, as about a 15-minute walk from the temple, with the tourism helpline 1800-233-7777. That is a government tourism listing. It is still not a button on this page.",
        },
        { type: "h2", text: "What this page will not do" },
        {
          type: "p",
          text: "It will not invent nightly rates, star ratings or “best hotel” trophies. Prices move, and a price we have not checked would be fiction. It will not mix temple darshan into a room package. Shighra is bought on {{darshanBooking|the trust’s booking page}}. A room is bought from the place that owns the room. If a package uses the word official for both, read the two receipts. One of them should show shriomkareshwar.org. The other should show the lodge.",
        },
      ],
      faqs: [
        {
          q: "Does Omkareshwar.co book hotels?",
          a: "No. This is an independent guide. It does not take room payments or darshan payments.",
        },
        {
          q: "What is the temple’s own stay?",
          a: "Shri Ji Vishramalaya, described by the trust as about 1 km from the temple, inside the Omkar Prasadalaya premises. Book it on the official website.",
        },
        {
          q: "Where should I sleep for the morning aarti?",
          a: "Within a walk of the shoe stand, or with a vehicle already arranged. The aarti is 4:30 AM on the daily timetable.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर के होटल – कमरा कैसे चुनें",
      description:
        "ओंकारेश्वर के होटल निजी ठहरना हैं, और नाम यहाँ दिए हैं। ट्रस्ट का अपना ठहरना श्री जी विश्रामालय है। यह गाइड बुकिंग नहीं करती।",
      h1: "ओंकारेश्वर में होटल",
      kicker: "कमरा, मंदिर की सेवा नहीं",
      answer:
        "ओंकारेश्वर का होटल निजी व्यापार है। वह मंदिर नहीं है, और यह वेबसाइट उसके कमरे नहीं बेचती। ट्रस्ट जिस ठहरने को अपना बताता है वह श्री जी विश्रामालय है, मंदिर से लगभग 1 किलोमीटर, ट्रस्ट की वेबसाइट पर बुक। नीचे दिए ठहराव अलग दरवाज़े हैं। हर नाम अपने पृष्ठ पर खुलता है।",
      blocks: [
        { type: "h2", text: "घाट के लिए जिन कमरों की तुलना होती है" },
        {
          type: "p",
          text: "ये निजी होटल और रिसॉर्ट हैं। कार्ड उस ठहराव के अपने पृष्ठ पर खुलता है। यह गाइड कमरे का भुगतान नहीं लेती, और यहाँ का कमरा मंदिर का टिकट नहीं है।",
        },
        { type: "stays" },
        {
          type: "p",
          text: "The Shankara View, Hotel Panchavati Palace, Hotel Gurukripa Inn, The Shrine Hotel, Hotel Shri Radhe Krishna और Hotel Royal Inn इस सूची के नगर वाले कमरे हैं। ये उस सुबह के लिए हैं जब 4:30 की आरती पैदल हो, या दक्षिणी तट से छोटा पार। पूछें कि दरवाज़ा पुल के किस ओर है। नगर का नाम घाट का पता नहीं होता।",
        },
        {
          type: "p",
          text: "Narmada Hills Resort, MPT Sailani Island Resort और The Grand Omkara Hotel & Resorts गली के बदले जगह देते हैं। बगीचा और गाड़ी छोड़ने की जगह चालक या परिवार के लिए सही रात हो सकती है। खुलते ही मुफ्त कतार के लिए यह गलत रात है, जब तक भोर से पहले गाड़ी तय न हो। रिसॉर्ट के नाम में द्वीप का मतलब यह नहीं कि बिस्तर मांधाता पर है।",
        },
        { type: "h2", text: "बिस्तर तीन जगह हो सकता है" },
        {
          type: "ul",
          items: [
            "मांधाता पर, या इतना पास कि सुबह 4:30 की आरती पैदल हो। सुबह की विधि के लिए यही बिस्तर है।",
            "दक्षिणी तट पर, ममलेश्वर और पुल के पास। अच्छा बिस्तर यदि आप एक बार उजाले में और एक बार भोर से पहले पार करेंगे।",
            "राजमार्ग पर, या मोरटक्का और सनावद की ओर। चालक के लिए ठीक। खराब, यदि योजना खुलते ही मुफ्त कतार है और अँधेरे के लिए गाड़ी पहले से नहीं है।",
          ],
        },
        {
          type: "p",
          text: "ट्रस्ट का प्रश्नोत्तर, ठहरने के बारे में पूछे जाने पर, सामुदायिक हॉल के लिए श्री जी विश्रामालय का नाम लेता है और निजी कमरों के लिए भक्त निवास या होटल टेम्पल व्यू का। ये ट्रस्ट के उदाहरण हैं, इस गाइड की रैंकिंग नहीं, और बुकिंग कड़ी नहीं। मध्य प्रदेश पर्यटन अलग से एमपीटी की संपत्ति टेम्पल व्यू को मंदिर से लगभग 15 मिनट की चाल बताता है, पर्यटन हेल्पलाइन 1800-233-7777। वह सरकारी पर्यटन-सूची है। फिर भी इस पृष्ठ का बटन नहीं।",
        },
        { type: "h2", text: "यह पृष्ठ क्या नहीं करेगा" },
        {
          type: "p",
          text: "यह रात के भाड़े, स्टार रेटिंग या “सर्वश्रेष्ठ होटल” की ट्रॉफी नहीं गढ़ेगा। दाम बदलते हैं, और जो दाम हमने नहीं जाँचा वह कथा होगी। यह दर्शन को कमरे के पैकेज में नहीं मिलाएगा। शीघ्र {{darshanBooking|ट्रस्ट के बुकिंग पृष्ठ}} पर बिकता है। कमरा उस जगह से बिकता है जिसके पास कमरा है। यदि पैकेज दोनों के लिए आधिकारिक शब्द इस्तेमाल करे, दो रसीदें पढ़ें। एक पर shriomkareshwar.org होना चाहिए। दूसरी पर लॉज।",
        },
      ],
      faqs: [
        {
          q: "क्या Omkareshwar.co होटल बुक करता है?",
          a: "नहीं। यह स्वतंत्र गाइड है। न कमरे का भुगतान लेती है, न दर्शन का।",
        },
        {
          q: "मंदिर का अपना ठहरना क्या है?",
          a: "श्री जी विश्रामालय, जिसे ट्रस्ट मंदिर से लगभग 1 किलोमीटर, ओंकार प्रसादालय परिसर में बताता है। बुकिंग आधिकारिक वेबसाइट पर करें।",
        },
        {
          q: "सुबह की आरती के लिए कहाँ सोएँ?",
          a: "जूता-घर से पैदल दूरी पर, या पहले से तय गाड़ी के साथ। दैनिक सारिणी पर आरती सुबह 4:30 है।",
        },
      ],
    },
  },
  {
    slug: "hotels-near-omkareshwar-temple",
    cluster: "stay",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["vishramalaya", "faq", "timetable"],
    related: ["hotels-in-omkareshwar", "omkareshwar-dharamshala", "omkareshwar-darshan", "omkareshwar-one-day-trip"],
    en: {
      title: "Hotels near Omkareshwar Temple – Walk, Bridge or Road",
      description:
        "A hotel near Omkareshwar temple is only near if you can reach the shoe stand for the hour you chose. The island, the south bank and the highway are different distances.",
      h1: "Hotels near Omkareshwar Temple",
      kicker: "Near means a walk",
      answer:
        "“Near the temple” in Omkareshwar should mean you can reach the shoe stand without a negotiation in the dark. Rooms on Mandhata and some rooms on the south bank can be that. A room on the highway that uses the word temple in its name is using a word. Ask for the walking minutes, and ask which side of Mamleshwar Setu the door is on.",
      blocks: [
        { type: "h2", text: "Questions that matter more than a star" },
        {
          type: "ol",
          items: [
            "How many minutes on foot to the shoe stand at 4:40 AM?",
            "Is the bridge in that walk, and is the bridge the way you will return at night?",
            "Does the room price change on Monday and in Shravan, and is that change already written?",
            "Can you cancel before you travel, in a sentence you can read?",
            "Is food available at the hour you will leave, or will you depend on Omkar Prasadalaya, which the trust opens for meals at 10 AM?",
          ],
        },
        {
          type: "p",
          text: "Vishramalaya is about 1 km in the trust’s description, so even the temple’s own stay is not the shoe stand. “One kilometre” is a short ride and a real walk with luggage and elders. Put it in the plan as a walk, not as “at the temple”.",
        },
        {
          type: "note",
          text: "This guide does not list private hotels for sale and does not earn a commission on this page. Absence of a name is not an insult. It is the limit of what we have verified.",
        },
      ],
      faqs: [
        {
          q: "Which area is actually near the temple?",
          a: "Mandhata, for a walk to the Jyotirlinga, or the south bank if you accept the bridge. Ask for minutes on foot, not for the word near.",
        },
        {
          q: "Is Vishramalaya inside the temple?",
          a: "The trust says it is about 1 km away, within Omkar Prasadalaya. It is temple lodging. It is not the sanctum door.",
        },
        {
          q: "Should I book a room and a VIP ticket together?",
          a: "Only if the ticket part is paid on shriomkareshwar.org. A hotel may help you find the page. The hotel is not the page.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर मंदिर के पास होटल – चाल, पुल या सड़क",
      description:
        "ओंकारेश्वर मंदिर के पास होटल तभी पास है जब चुने घंटे पर जूता-घर पहुँच सकें। द्वीप, दक्षिणी तट और राजमार्ग अलग दूरियाँ हैं।",
      h1: "ओंकारेश्वर मंदिर के पास होटल",
      kicker: "पास का अर्थ पैदल है",
      answer:
        "ओंकारेश्वर में “मंदिर के पास” का अर्थ यह होना चाहिए कि अँधेरे में सौदेबाजी के बिना जूता-घर पहुँच जाएँ। मांधाता के कुछ कमरे और दक्षिणी तट के कुछ कमरे ऐसे हो सकते हैं। राजमार्ग का कमरा जो नाम में मंदिर लगाए, वह शब्द लगा रहा है। पैदल मिनट पूछें, और पूछें कि दरवाजा ममलेश्वर सेतु के किस ओर है।",
      blocks: [
        { type: "h2", text: "स्टार से अधिक जरूरी प्रश्न" },
        {
          type: "ol",
          items: [
            "सुबह 4:40 पर जूता-घर तक पैदल कितने मिनट?",
            "क्या उस चाल में पुल है, और रात को लौटना भी उसी पुल से है?",
            "सोमवार और सावन में दाम बदलता है क्या, और क्या वह बदलाव लिखा हुआ है?",
            "यात्रा से पहले रद्द कर सकते हैं क्या, ऐसे वाक्य में जिसे पढ़ सकें?",
            "जिस घंटे आप निकलेंगे उस घंटे खाना मिलेगा, या आप ओंकार प्रसादालय पर निर्भर होंगे, जिसे ट्रस्ट भोजन के लिए सुबह 10 बजे खोलता है?",
          ],
        },
        {
          type: "p",
          text: "विश्रामालय ट्रस्ट के वर्णन में लगभग 1 किलोमीटर है, इसलिए मंदिर का अपना ठहरना भी जूता-घर नहीं है। “एक किलोमीटर” सामान और बुजुर्गों के साथ छोटी सवारी भी है और असली चाल भी। योजना में उसे चाल मानें, “मंदिर पर” नहीं।",
        },
        {
          type: "note",
          text: "यह गाइड निजी होटल बेचने के लिए नहीं गिनाती और इस पृष्ठ पर कमीशन नहीं कमाती। नाम का न होना अपमान नहीं। यह हमारी जाँच की सीमा है।",
        },
      ],
      faqs: [
        {
          q: "कौन सा इलाका सच में मंदिर के पास है?",
          a: "मांधाता, ज्योतिर्लिंग तक पैदल के लिए, या दक्षिणी तट यदि पुल मंजूर हो। पास शब्द नहीं, पैदल मिनट पूछें।",
        },
        {
          q: "क्या विश्रामालय मंदिर के अंदर है?",
          a: "ट्रस्ट कहता है वह लगभग 1 किलोमीटर दूर, ओंकार प्रसादालय में है। वह मंदिर का ठहरना है। गर्भगृह का दरवाजा नहीं।",
        },
        {
          q: "क्या कमरा और वीआईपी टिकट एक साथ बुक करें?",
          a: "केवल तब, जब टिकट वाला हिस्सा shriomkareshwar.org पर भुगतान हो। होटल पृष्ठ ढूँढने में मदद कर सकता है। होटल वह पृष्ठ नहीं है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-dharamshala",
    cluster: "stay",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["vishramalaya", "faq", "templeWebsite"],
    related: ["hotels-in-omkareshwar", "budget-hotels-omkareshwar", "omkareshwar-vip-darshan", "family-hotels-omkareshwar"],
    en: {
      title: "Omkareshwar Dharamshala – Vishramalaya and Private Lodges",
      description:
        "The trust’s pilgrim stay is Shri Ji Vishramalaya. Other dharamshalas in Omkareshwar are private. The names are not interchangeable.",
      h1: "Omkareshwar dharamshala",
      kicker: "Pilgrim beds",
      answer:
        "In Omkareshwar the word dharamshala covers two different things. Shri Ji Vishramalaya is the Mandir Trust’s stay, about 1 km from the temple, with online booking on the trust’s site. Other buildings that use dharamshala, bhakt niwas or atithi griha in the name are private unless the trust’s page says they are not. A full Vishramalaya does not turn the lodge next door into the trust.",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "Trust lodging", value: "Shri Ji Vishramalaya" },
            { label: "Distance the trust prints", value: "About 1 km from the temple" },
            { label: "Where it sits", value: "Within Shri Omkar Prasadalaya" },
            { label: "Who it can hold", value: "The trust says up to 20 devotees a service, with priority for families, women, children and elders" },
            { label: "Fee", value: "The trust calls it nominal. The number is on the official page, not invented here." },
          ],
        },
        { type: "h2", text: "How to book the trust’s bed" },
        {
          type: "p",
          text: "Open {{vishramalaya|the Vishramalaya page}} on shriomkareshwar.org. If the form is closed or full, it is full. Call the helpline +91 8989998686 between 8 AM and 8 PM if the page and the payment disagree. Do not send identity documents to a number that is not that helpline.",
        },
        { type: "h2", text: "Food beside the bed" },
        {
          type: "p",
          text: "The trust’s FAQ says Omkar Prasadalaya serves meals from 10:00 AM to 3:00 PM and khichdi from 5:00 PM to 9:00 PM, at a nominal cost. That solves the middle of the day. It does not solve a 4:15 AM cup of tea. If you are leaving for mangal aarti, ask the night before where anything will be open.",
        },
      ],
      faqs: [
        {
          q: "Is there an official dharamshala in Omkareshwar?",
          a: "The trust’s lodging is Shri Ji Vishramalaya. Book it on the official website. Other dharamshalas need their own confirmation.",
        },
        {
          q: "How far is Vishramalaya from the temple?",
          a: "About 1 km, according to the trust, inside the Omkar Prasadalaya premises.",
        },
        {
          q: "What if it is full?",
          a: "It is full. A private lodge is a different booking. The trust’s FAQ points private-room enquiries toward Bhakt Niwas or Hotel Temple View, as examples, not as this website’s offers.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर धर्मशाला – विश्रामालय और निजी लॉज",
      description:
        "ट्रस्ट का तीर्थ-ठहरना श्री जी विश्रामालय है। ओंकारेश्वर की अन्य धर्मशालाएँ निजी हैं। नाम आपस में बदले नहीं जा सकते।",
      h1: "ओंकारेश्वर धर्मशाला",
      kicker: "तीर्थ के बिस्तर",
      answer:
        "ओंकारेश्वर में धर्मशाला शब्द दो अलग चीजों को ढँकता है। श्री जी विश्रामालय मंदिर ट्रस्ट का ठहरना है, मंदिर से लगभग 1 किलोमीटर, ट्रस्ट की साइट पर ऑनलाइन बुकिंग के साथ। अन्य भवन जो नाम में धर्मशाला, भक्त निवास या अतिथि गृह लगाएँ, निजी हैं, जब तक ट्रस्ट का पृष्ठ न कहे कि वे नहीं हैं। भरा विश्रामालय बगल के लॉज को ट्रस्ट नहीं बना देता।",
      blocks: [
        {
          type: "facts",
          items: [
            { label: "ट्रस्ट का ठहरना", value: "श्री जी विश्रामालय" },
            { label: "ट्रस्ट की दूरी", value: "मंदिर से लगभग 1 किलोमीटर" },
            { label: "कहाँ है", value: "श्री ओंकार प्रसादालय के भीतर" },
            { label: "कितने लोग", value: "ट्रस्ट कहता है एक सेवा में 20 तक श्रद्धालु, परिवार, महिलाओं, बच्चों और बुजुर्गों को प्राथमिकता" },
            { label: "शुल्क", value: "ट्रस्ट इसे नाममात्र कहता है। अंक आधिकारिक पृष्ठ पर है, यहाँ गढ़ा नहीं।" },
          ],
        },
        { type: "h2", text: "ट्रस्ट का बिस्तर कैसे बुक करें" },
        {
          type: "p",
          text: "shriomkareshwar.org पर {{vishramalaya|विश्रामालय पृष्ठ}} खोलें। फॉर्म बंद या भरा हो तो भरा है। पृष्ठ और भुगतान में फर्क हो तो सुबह 8 से रात 8 के बीच +91 8989998686 पर कॉल करें। पहचान पत्र उस नंबर पर न भेजें जो यह हेल्पलाइन नहीं।",
        },
        { type: "h2", text: "बिस्तर के पास भोजन" },
        {
          type: "p",
          text: "ट्रस्ट का प्रश्नोत्तर कहता है कि ओंकार प्रसादालय सुबह 10 से दोपहर 3 भोजन और शाम 5 से रात 9 खिचड़ी देता है, नाममात्र दाम पर। इससे दिन का मध्य सुलझता है। सुबह 4:15 की चाय नहीं सुलझती। मंगला आरती के लिए निकलना हो तो पिछली रात पूछ लें कि कुछ खुलेगा कहाँ।",
        },
      ],
      faqs: [
        {
          q: "क्या ओंकारेश्वर में आधिकारिक धर्मशाला है?",
          a: "ट्रस्ट का ठहरना श्री जी विश्रामालय है। बुकिंग आधिकारिक वेबसाइट पर करें। अन्य धर्मशालाओं की अपनी पुष्टि चाहिए।",
        },
        {
          q: "विश्रामालय मंदिर से कितनी दूर है?",
          a: "ट्रस्ट के अनुसार लगभग 1 किलोमीटर, ओंकार प्रसादालय परिसर में।",
        },
        {
          q: "भर गया तो?",
          a: "भर गया। निजी लॉज अलग बुकिंग है। ट्रस्ट का प्रश्नोत्तर निजी कमरे के लिए भक्त निवास या होटल टेम्पल व्यू का उदाहरण देता है। यह इस वेबसाइट का ऑफर नहीं है।",
        },
      ],
    },
  },
  {
    slug: "budget-hotels-omkareshwar",
    cluster: "stay",
    kind: "guide",
    updated,
    sources: ["faq", "vishramalaya", "timetable"],
    related: ["omkareshwar-dharamshala", "hotels-in-omkareshwar", "family-hotels-omkareshwar", "omkareshwar-one-day-trip"],
    en: {
      title: "Budget Stays in Omkareshwar – What Cheap Should Still Include",
      description:
        "A cheaper room in Omkareshwar is still a private booking. Judge it by the walk to the 5 AM queue, not by a price this guide refuses to invent.",
      h1: "Budget stays in Omkareshwar",
      kicker: "Less money, same clock",
      answer:
        "A budget stay in Omkareshwar is a private room or a pilgrim hall at a lower price. This guide does not publish a rupee band, because we have not verified one across the town. Cheap is only useful if you can still reach darshan. The trust’s Vishramalaya is the low-cost option that is actually the temple’s, and its fee is whatever the official page shows that day.",
      blocks: [
        { type: "h2", text: "Spend the money on the walk" },
        {
          type: "p",
          text: "The costly mistake is not a fan that rattles. It is a room that looked thrifty at noon and is a dark highway at 4:10 AM, with no auto and a sanctum that opened at 5:00. Pay a little more for the bank you can walk, or pay for the auto at the same time as the room. Do not pay a stranger for “budget VIP darshan”. The free queue is already the budget darshan. Shighra, if you add it, is ₹300 a person on the trust’s page, not a room discount.",
        },
        { type: "h2", text: "What to check in a simple room" },
        {
          type: "ul",
          items: [
            "A lock that works, and a bathroom you have seen.",
            "Who is awake before 4:30, if anyone.",
            "Whether Monday and Shravan were included in the price you were told.",
            "A written name that matches the building you will sleep in. Lane names repeat.",
            "Drinking water. The river is for worship. It is not the tap.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the cheapest official stay?",
          a: "Shri Ji Vishramalaya is the trust’s own low-cost lodging. The fee is on the official page. We do not reprint a number we might stale.",
        },
        {
          q: "Are budget hotels safe for a single night?",
          a: "Judge the lock, the bathroom and the morning walk. A low price does not answer those. This guide does not certify properties.",
        },
        {
          q: "Does a cheap room include darshan?",
          a: "No. Normal darshan is free at the temple. A room rate that claims to include VIP darshan should show an official trust receipt.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर में किफायती ठहरना – सस्ते में भी क्या होना चाहिए",
      description:
        "ओंकारेश्वर का सस्ता कमरा फिर भी निजी बुकिंग है। उसे सुबह 5 की कतार तक की चाल से आँकें, उस दाम से नहीं जिसे यह गाइड गढ़ने से इनकार करती है।",
      h1: "ओंकारेश्वर में किफायती ठहरना",
      kicker: "कम पैसे, वही घड़ी",
      answer:
        "ओंकारेश्वर में किफायती ठहरना कम दाम का निजी कमरा या तीर्थ-हॉल है। यह गाइड रुपए का बैंड नहीं छापती, क्योंकि हमने पूरे नगर का एक बैंड जाँचा नहीं। सस्ता तभी उपयोगी है जब दर्शन तक पहुँच बचती है। ट्रस्ट का विश्रामालय वह सस्ता विकल्प है जो सच में मंदिर का है, और शुल्क वही है जो उस दिन आधिकारिक पृष्ठ दिखाए।",
      blocks: [
        { type: "h2", text: "पैसे चाल पर खर्च करें" },
        {
          type: "p",
          text: "महँगी भूल खड़खड़ाता पंखा नहीं है। वह कमरा है जो दोपहर को किफायती लगा और सुबह 4:10 को अँधेरा राजमार्ग है, ऑटो नहीं, और गर्भगृह 5:00 बजे खुल चुका। जिस तट पर चल सकें उसके लिए थोड़ा अधिक दें, या कमरे के साथ ऑटो का दाम एक साथ दें। किसी अजनबी को “सस्ता वीआईपी दर्शन” न दें। मुफ्त कतार पहले से किफायती दर्शन है। शीघ्र जोड़ें तो ट्रस्ट के पृष्ठ पर ₹300 प्रति व्यक्ति है, कमरे की छूट नहीं।",
        },
        { type: "h2", text: "सादे कमरे में क्या देखें" },
        {
          type: "ul",
          items: [
            "ताला जो चले, और स्नानघर जिसे आपने देखा हो।",
            "सुबह 4:30 से पहले कौन जागा है, यदि कोई है।",
            "सोमवार और सावन उस दाम में थे या नहीं जो आपको बताया गया।",
            "लिखा नाम उसी भवन से मिले जिसमें सोएँगे। गलियों के नाम दोहराते हैं।",
            "पीने का पानी। नदी पूजा के लिए है। नल नहीं है।",
          ],
        },
      ],
      faqs: [
        {
          q: "सबसे सस्ता आधिकारिक ठहरना क्या है?",
          a: "श्री जी विश्रामालय ट्रस्ट का अपना कम लागत वाला ठहरना है। शुल्क आधिकारिक पृष्ठ पर है। हम ऐसा अंक नहीं छापते जो बासी पड़ जाए।",
        },
        {
          q: "क्या सस्ता होटल एक रात के लिए ठीक है?",
          a: "ताला, स्नानघर और सुबह की चाल देखें। कम दाम इनका उत्तर नहीं। यह गाइड संपत्ति प्रमाणित नहीं करती।",
        },
        {
          q: "क्या सस्ते कमरे में दर्शन शामिल है?",
          a: "नहीं। सामान्य दर्शन मंदिर में मुफ्त है। जो कमरा वीआईपी दर्शन शामिल बताए, उसके पास आधिकारिक ट्रस्ट रसीद होनी चाहिए।",
        },
      ],
    },
  },
  {
    slug: "family-hotels-omkareshwar",
    cluster: "stay",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["faq", "darshanBooking", "vishramalaya", "timetable"],
    related: ["hotels-near-omkareshwar-temple", "omkareshwar-dharamshala", "omkareshwar-vip-darshan", "omkareshwar-two-day-trip"],
    en: {
      title: "Family Stays in Omkareshwar – Elders, Children & the Queue",
      description:
        "Families in Omkareshwar need a walkable room, a plan for the midday closure, and the trust’s rule on children under 12 in Shighra.",
      h1: "Family stays in Omkareshwar",
      kicker: "Elders and children",
      answer:
        "A family room in Omkareshwar is worth more when elders can reach an open darshan hour and children are not bought tickets the trust told you not to buy. The booking page says not to purchase Shighra tickets for children below 12. Normal darshan remains free for the queue you can all stand in.",
      blocks: [
        { type: "h2", text: "Split the day so nobody is heroic" },
        {
          type: "p",
          text: "The 4:30 AM aarti is beautiful and it is early. Elders who slept across the bridge will feel the hour in their knees before they feel it as worship. Either sleep within a walk, or choose madhyanha darshan from 1:15 PM and protect the morning. The closure at 12:20 is the trap for families who sightsee first and pray second. Eat after darshan, or eat at Omkar Prasadalaya once it opens at 10, not in the last twenty minutes of the morning block.",
        },
        { type: "h2", text: "Children in the queue" },
        {
          type: "p",
          text: "Keep one adult at the front of the family and one at the back before you enter the railing. The shoe token stays with an adult. If you do buy Shighra, the trust wants the booked adults present with identity. It does not want a ticket in a child’s name under 12. A child can still come in the free queue with you. Do not hand the child to an uncle who is not inside your plan and call that darshan.",
        },
        {
          type: "p",
          text: "Vishramalaya’s stated priority — families, women, children, elders — is the trust saying the same thing in lodging. If you want that hall, book the hall. A private “family hotel” is a fair choice when you need an attached bathroom and a door that locks. It is not the hall.",
        },
      ],
      faqs: [
        {
          q: "Is Omkareshwar suitable with elderly parents?",
          a: "Yes, if the room matches their walking limit and you avoid the 12:20 closure. The queue itself is standing. Shighra is the optional shorter line, booked only on the official site.",
        },
        {
          q: "Do children need a Shighra ticket?",
          a: "The official booking page says not to book tickets for children below 12. Bring them with the adults.",
        },
        {
          q: "Where can a family eat?",
          a: "The trust says Omkar Prasadalaya serves meals from 10 AM to 3 PM and khichdi from 5 PM to 9 PM. That does not cover a 4:30 AM departure.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर में परिवार का ठहरना – बुजुर्ग, बच्चे और कतार",
      description:
        "ओंकारेश्वर में परिवार को चलने लायक कमरा, दोपहर के बंद घंटे की योजना, और शीघ्र में 12 वर्ष से छोटे बच्चों का ट्रस्ट-नियम चाहिए।",
      h1: "ओंकारेश्वर में परिवार का ठहरना",
      kicker: "बुजुर्ग और बच्चे",
      answer:
        "ओंकारेश्वर में परिवार का कमरा तब सार्थक है जब बुजुर्ग खुले दर्शन-घंटे तक पहुँच सकें और बच्चों के नाम वह टिकट न कटे जिसे ट्रस्ट ने मना किया है। बुकिंग पृष्ठ कहता है कि 12 वर्ष से छोटे बच्चों का शीघ्र टिकट न खरीदें। सामान्य दर्शन उस कतार में मुफ्त है जिसमें आप सब खड़े हो सकते हैं।",
      blocks: [
        { type: "h2", text: "दिन बाँटें ताकि कोई वीरता न करे" },
        {
          type: "p",
          text: "सुबह 4:30 की आरती सुंदर है और जल्दी है। जो बुजुर्ग पुल के पार सोए, वे पूजा से पहले घुटनों में घंटा महसूस करेंगे। या पैदल दूरी पर सोएँ, या दोपहर 1:15 का मध्याह्न दर्शन चुनें और सुबह को बचाएँ। 12:20 का बंद उन परिवारों का फंदा है जो पहले घूमते हैं और फिर प्रार्थना करते हैं। दर्शन के बाद खाएँ, या सुबह 10 बजे खुलने के बाद ओंकार प्रसादालय में, सुबह के खंड के आखिरी बीस मिनट में नहीं।",
        },
        { type: "h2", text: "कतार में बच्चे" },
        {
          type: "p",
          text: "रेलिंग में घुसने से पहले एक वयस्क परिवार के आगे रखें और एक पीछे। जूते की टोकन वयस्क के पास रहे। शीघ्र लें तो ट्रस्ट बुक किए वयस्कों को पहचान के साथ मौजूद चाहता है। वह 12 वर्ष से छोटे बच्चे के नाम टिकट नहीं चाहता। बच्चा आपके साथ मुफ्त कतार में आ सकता है। बच्चे को ऐसे चाचा के हवाले न करें जो योजना में नहीं, और उसे दर्शन न कहें।",
        },
        {
          type: "p",
          text: "विश्रामालय की कही प्राथमिकता — परिवार, महिलाएँ, बच्चे, बुजुर्ग — ठहरने में ट्रस्ट की वही बात है। वह हॉल चाहिए तो हॉल बुक करें। निजी “फैमिली होटल” तब उचित है जब संलग्न स्नानघर और बंद होने वाला दरवाजा चाहिए। वह हॉल नहीं है।",
        },
      ],
      faqs: [
        {
          q: "क्या ओंकारेश्वर बुजुर्ग माता-पिता के साथ ठीक है?",
          a: "हाँ, यदि कमरा उनकी चलने की सीमा से मेल खाए और आप 12:20 का बंद टालें। कतार में खड़े रहना पड़ता है। शीघ्र वैकल्पिक छोटी पंक्ति है, केवल आधिकारिक साइट पर।",
        },
        {
          q: "क्या बच्चों को शीघ्र टिकट चाहिए?",
          a: "आधिकारिक बुकिंग पृष्ठ कहता है कि 12 वर्ष से छोटे बच्चों का टिकट न बुक करें। उन्हें वयस्कों के साथ लाएँ।",
        },
        {
          q: "परिवार खाना कहाँ खाए?",
          a: "ट्रस्ट कहता है ओंकार प्रसादालय सुबह 10 से दोपहर 3 भोजन और शाम 5 से रात 9 खिचड़ी देता है। इससे सुबह 4:30 की रवानगी नहीं ढकती।",
        },
      ],
    },
  },
];
