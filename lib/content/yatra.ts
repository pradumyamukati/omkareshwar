import { verifiedOn, type PageDef } from "../types";

const updated = verifiedOn;

export const yatraPages: PageDef[] = [
  {
    slug: "omkareshwar-trip",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["timetable", "howToReach", "faq", "mpTourism"],
    related: ["omkareshwar-complete-guide", "omkareshwar-one-day-trip", "omkareshwar-two-day-trip", "omkareshwar-from-indore"],
    en: {
      title: "Omkareshwar Trip – One Night or Two, by the Temple Clock",
      description:
        "Plan an Omkareshwar trip around open darshan hours, not around a slogan. One day from Indore, two days if the morning aarti matters.",
      h1: "Omkareshwar trip",
      kicker: "A workable yatra",
      answer:
        "An Omkareshwar trip works when the room, the road and the temple clock agree. From Indore, about 77–80 km, a day trip can hold one darshan window. The 4:30 AM aarti needs a night in town. From Ujjain, 140 km, give the two Jyotirlingas two mornings. This page does not sell a package.",
      blocks: [
        { type: "h2", text: "Choose the constraint first" },
        {
          type: "ul",
          items: [
            "If the constraint is a train the same night, take the [[omkareshwar-one-day-trip|one-day shape]] and one open block. Do not add parikrama.",
            "If the constraint is mangal aarti or elders, take the [[omkareshwar-two-day-trip|two-day shape]] and a walkable bed.",
            "If the constraint is Mahakaleshwar as well, do not put both lingas before lunch.",
            "If the constraint is Shravan or Mahashivratri, the room is the first booking, the darshan ticket the second, and only on the trust’s site.",
          ],
        },
        {
          type: "p",
          text: "The homepage planner is the same idea with buttons: starting city, length, and who is travelling. The buttons do not book anything. They show a plan you can still read with JavaScript turned off.",
        },
      ],
      faqs: [
        {
          q: "How many days are enough for Omkareshwar?",
          a: "One day for a single darshan from Indore. Two days if you want the morning aarti, Mamleshwar and any of the parikrama.",
        },
        {
          q: "What should I book first?",
          a: "The bed, if the date is a Monday, Shravan or Mahashivratri. Darshan itself is free unless you choose Shighra on the official site.",
        },
        {
          q: "Does this site arrange the trip?",
          a: "No. It explains the order. Vehicles, rooms and temple tickets are booked with the people who actually provide them.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर यात्रा – एक रात या दो, मंदिर की घड़ी से",
      description:
        "ओंकारेश्वर यात्रा खुले दर्शन-घंटों के चारों ओर बनाएँ, नारे के चारों ओर नहीं। इंदौर से एक दिन, सुबह की आरती हो तो दो दिन।",
      h1: "ओंकारेश्वर यात्रा",
      kicker: "काम की यात्रा",
      answer:
        "ओंकारेश्वर की यात्रा तब बनती है जब कमरा, सड़क और मंदिर की घड़ी एक हों। इंदौर से, लगभग 77–80 किलोमीटर, एक दिन में एक दर्शन-खंड समा सकता है। सुबह 4:30 की आरती के लिए नगर में रात चाहिए। उज्जैन से, 140 किलोमीटर, दोनों ज्योतिर्लिंग को दो सुबह दें। यह पृष्ठ पैकेज नहीं बेचता।",
      blocks: [
        { type: "h2", text: "पहले बंधन चुनें" },
        {
          type: "ul",
          items: [
            "बंधन उसी रात की रेल हो तो [[omkareshwar-one-day-trip|एक दिन का रूप]] और एक खुला खंड लें। परिक्रमा न जोड़ें।",
            "बंधन मंगला आरती या बुजुर्ग हों तो [[omkareshwar-two-day-trip|दो दिन का रूप]] और चलने लायक बिस्तर लें।",
            "बंधन महाकालेश्वर भी हो तो दोनों लिंग दोपहर के भोजन से पहले न रखें।",
            "बंधन सावन या महाशिवरात्रि हो तो पहली बुकिंग कमरा है, दूसरी दर्शन-टिकट, और केवल ट्रस्ट की साइट पर।",
          ],
        },
        {
          type: "p",
          text: "मुखपृष्ठ का योजनाकार वही विचार बटन के साथ है: आरंभ शहर, अवधि, और साथ कौन है। बटन कुछ बुक नहीं करते। जावास्क्रिप्ट बंद हो तब भी योजना पढ़ी जा सकती है।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर के लिए कितने दिन काफी हैं?",
          a: "इंदौर से एक दर्शन के लिए एक दिन। सुबह की आरती, ममलेश्वर और परिक्रमा का कोई अंश हो तो दो दिन।",
        },
        {
          q: "पहले क्या बुक करें?",
          a: "यदि दिन सोमवार, सावन या महाशिवरात्रि है तो बिस्तर। दर्शन स्वयं मुफ्त है, जब तक आप आधिकारिक साइट पर शीघ्र न चुनें।",
        },
        {
          q: "क्या यह साइट यात्रा कराती है?",
          a: "नहीं। यह क्रम समझाती है। गाड़ी, कमरा और मंदिर-टिकट उन्हीं के पास बुक होते हैं जो सच में देते हैं।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-one-day-trip",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["timetable", "howToReach", "faq"],
    related: ["omkareshwar-from-indore", "omkareshwar-trip", "omkareshwar-darshan", "mamleshwar-temple"],
    en: {
      title: "Omkareshwar One Day Trip from Indore",
      description:
        "A one-day Omkareshwar trip from Indore can hold one darshan block and, if you start early enough, Mamleshwar. It cannot hold the 4:30 AM aarti.",
      h1: "Omkareshwar in one day",
      kicker: "From Indore",
      answer:
        "A one-day trip suits people sleeping in Indore, about 77–80 km away. Leave so that you reach an open block: after 5:00 AM, or after the 12:20–1:15 bhog closure, or for shringar darshan in the evening. See the Jyotirlinga. Add Mamleshwar only if the queue did not eat the afternoon. Skip the 7 km parikrama. You will not attend the 4:30 AM aarti unless you slept here.",
      blocks: [
        { type: "h2", text: "A day that fits" },
        {
          type: "ol",
          items: [
            "Leave Indore with the midday closure in mind. Arriving at 12:30 means waiting until 1:15.",
            "Darshan first. Food second. Omkar Prasadalaya’s meals start at 10 AM if you are already in town.",
            "Cross to Mamleshwar if legs and light remain. The bridge is 270 feet in the tourism description, not a long pilgrimage of its own.",
            "Be back on the road before you are guessing at night buses. The trust’s FAQ only says Ujjain–Indore buses run until 7 PM or later. It is not your return guarantee.",
          ],
        },
        {
          type: "p",
          text: "Families with elders should treat this as one standing queue plus a car, not as a walking tour of the hill. The [[family-hotels-omkareshwar|family page]] explains the children-under-12 rule if someone mentions a VIP add-on.",
        },
      ],
      faqs: [
        {
          q: "Can Omkareshwar be done in one day from Indore?",
          a: "Yes, for one darshan window and possibly Mamleshwar. Not for the morning aarti and the parikrama together.",
        },
        {
          q: "What time should I leave Indore?",
          a: "Early enough to miss the 12:20–1:15 closure if you want the late morning, or after lunch if you are aiming at the afternoon block from 1:15.",
        },
        {
          q: "Is the parikrama possible the same day?",
          a: "The trust’s path is about 7 km. Added to a return drive and a queue, it turns a day trip into a rush. Leave it for a second day.",
        },
      ],
    },
    hi: {
      title: "इंदौर से ओंकारेश्वर की एक दिन की यात्रा",
      description:
        "इंदौर से ओंकारेश्वर की एक दिन की यात्रा में एक दर्शन-खंड समाता है, और जल्दी पहुँचें तो ममलेश्वर। सुबह 4:30 की आरती नहीं समाती।",
      h1: "एक दिन में ओंकारेश्वर",
      kicker: "इंदौर से",
      answer:
        "एक दिन की यात्रा उनके लिए है जो इंदौर में सोते हैं, लगभग 77–80 किलोमीटर दूर। ऐसे निकलें कि खुले खंड में पहुँचें: सुबह 5:00 के बाद, या दोपहर 12:20–1:15 के भोग के बाद, या शाम के श्रृंगार दर्शन के लिए। ज्योतिर्लिंग देखें। ममलेश्वर तभी जोड़ें जब कतार ने दोपहर न खा ली हो। 7 किलोमीटर की परिक्रमा छोड़ें। सुबह 4:30 की आरती तब होगी जब यहीं सोए हों।",
      blocks: [
        { type: "h2", text: "जो दिन समाए" },
        {
          type: "ol",
          items: [
            "इंदौर से दोपहर का बंद याद रखकर निकलें। 12:30 पर पहुँचना 1:15 तक प्रतीक्षा है।",
            "पहले दर्शन। फिर भोजन। यदि नगर में पहले से हों तो ओंकार प्रसादालय का भोजन सुबह 10 बजे से है।",
            "टाँग और उजाला बचें तो ममलेश्वर पार करें। पर्यटन-विवरण में पुल 270 फुट है, अपने आप में लंबी तीर्थयात्रा नहीं।",
            "रात की बस का अनुमान लगाने से पहले सड़क पर लौटें। ट्रस्ट का प्रश्नोत्तर केवल कहता है कि उज्जैन–इंदौर बसें शाम 7 या बाद तक हैं। यह आपकी वापसी की गारंटी नहीं।",
          ],
        },
        {
          type: "p",
          text: "बुजुर्गों वाले परिवार इसे एक खड़ी कतार और एक कार मानें, पहाड़ी का पैदल भ्रमण नहीं। कोई वीआईपी जोड़ की बात करे तो [[family-hotels-omkareshwar|परिवार पृष्ठ]] 12 वर्ष से छोटे बच्चों का नियम समझाता है।",
        },
      ],
      faqs: [
        {
          q: "क्या इंदौर से ओंकारेश्वर एक दिन में हो सकता है?",
          a: "हाँ, एक दर्शन-खंड के लिए, और संभव हो तो ममलेश्वर। सुबह की आरती और परिक्रमा एक साथ नहीं।",
        },
        {
          q: "इंदौर से कितने बजे निकलें?",
          a: "देर सुबह चाहिए तो 12:20–1:15 का बंद बचाने जितनी जल्दी। दोपहर का खंड 1:15 से है, यदि भोजन के बाद लक्ष्य हो।",
        },
        {
          q: "क्या उसी दिन परिक्रमा हो सकती है?",
          a: "ट्रस्ट का पथ लगभग 7 किलोमीटर है। वापसी की सड़क और कतार के साथ यह एक दिन को दौड़ बना देता है। दूसरे दिन के लिए छोड़ें।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-two-day-trip",
    cluster: "yatra",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["timetable", "parikrama", "faq", "mpTourism"],
    related: ["omkareshwar-parikrama", "omkareshwar-trip", "mamleshwar-temple", "hotels-near-omkareshwar-temple"],
    en: {
      title: "Omkareshwar Two Day Trip – Aarti, Mamleshwar & the Walk",
      description:
        "Two days in Omkareshwar allow the evening darshan, a night near the river, the morning aarti, and as much parikrama as the legs allow.",
      h1: "Omkareshwar in two days",
      kicker: "The fuller yatra",
      answer:
        "Two days are the shape that fits Omkareshwar without pretending. Arrive for an open afternoon or evening block, sleep within reach of the shoe stand, take mangal aarti or the 5:00 AM queue, then Mamleshwar and whatever portion of the 7 km parikrama still feels like worship rather than a deadline.",
      blocks: [
        { type: "h2", text: "Day one" },
        {
          type: "p",
          text: "Reach in daylight. Do not spend the daylight on a highway lunch that collides with 12:20. Take darshan, see the ghat you will use tomorrow, and confirm the room’s walking minutes before dark. If Shighra is wanted for the morning, buy it on the official page while the slot is still a slot you can walk to.",
        },
        { type: "h2", text: "Day two" },
        {
          type: "p",
          text: "The morning belongs to the sanctum. The late morning can belong to [[mamleshwar-temple|Mamleshwar]] or to the start of the [[omkareshwar-parikrama|parikrama]]. Do not schedule a noon train and the whole hill. State tourism’s comfortable months are October to March. Shravan is the month you still come, with a room already held and a smaller walk.",
        },
      ],
      faqs: [
        {
          q: "What fits in two days?",
          a: "Two darshan windows, Mamleshwar, and part or all of the 7 km parikrama if the party can walk.",
        },
        {
          q: "Where should we sleep?",
          a: "Close enough to walk to the 4:30 AM aarti, or with a vehicle booked the night before. See the page on hotels near the temple.",
        },
        {
          q: "Can Ujjain share these two days?",
          a: "Poorly. Ujjain is 140 km and has its own morning rite. Give it a separate day if it matters.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर की दो दिन की यात्रा – आरती, ममलेश्वर और चाल",
      description:
        "ओंकारेश्वर में दो दिन शाम का दर्शन, नदी के पास रात, सुबह की आरती, और जितनी परिक्रमा टाँगें दें उतनी समा लेते हैं।",
      h1: "दो दिन में ओंकारेश्वर",
      kicker: "पूरी यात्रा",
      answer:
        "दो दिन वह रूप है जो ओंकारेश्वर में बिना दिखावे के बैठता है। खुले दोपहर या शाम के खंड में पहुँचें, जूता-घर की पहुँच में सोएँ, मंगला आरती या सुबह 5:00 की कतार लें, फिर ममलेश्वर और 7 किलोमीटर परिक्रमा का उतना अंश जो समय-सीमा नहीं, पूजा लगे।",
      blocks: [
        { type: "h2", text: "पहला दिन" },
        {
          type: "p",
          text: "उजाले में पहुँचें। उजाला उस राजमार्ग के भोजन में न खोएँ जो 12:20 से टकराए। दर्शन करें, कल वाला घाट देख लें, और अँधेरे से पहले कमरे के पैदल मिनट पक्के कर लें। सुबह के लिए शीघ्र चाहिए तो आधिकारिक पृष्ठ पर तब खरीदें जब स्लॉट अभी भी वह स्लॉट हो जिस तक चलकर पहुँच सकते हैं।",
        },
        { type: "h2", text: "दूसरा दिन" },
        {
          type: "p",
          text: "सुबह गर्भगृह की है। देर सुबह [[mamleshwar-temple|ममलेश्वर]] की हो सकती है या [[omkareshwar-parikrama|परिक्रमा]] की शुरुआत की। दोपहर की रेल और पूरी पहाड़ी एक साथ न लिखें। राज्य पर्यटन के सुगम महीने अक्टूबर से मार्च हैं। सावन वह महीना है जब फिर भी आएँ, कमरा पहले से हो और चाल छोटी हो।",
        },
      ],
      faqs: [
        {
          q: "दो दिनों में क्या समाता है?",
          a: "दो दर्शन-खंड, ममलेश्वर, और यदि साथ वाले चल सकें तो 7 किलोमीटर परिक्रमा का अंश या पूरी परिक्रमा।",
        },
        {
          q: "कहाँ सोएँ?",
          a: "सुबह 4:30 की आरती तक पैदल, या पिछली रात बुक की गई गाड़ी के साथ। मंदिर के पास होटल वाला पृष्ठ देखें।",
        },
        {
          q: "क्या उज्जैन इन दो दिनों में आ सकता है?",
          a: "अच्छी तरह नहीं। उज्जैन 140 किलोमीटर है और उसकी अपनी सुबह की विधि है। यदि वह मायने रखता है तो अलग दिन दें।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-distance",
    cluster: "travel",
    kind: "guide",
    updated,
    verified: updated,
    sources: ["howToReach", "mpTourism", "faq", "templeWebsite"],
    related: ["where-is-omkareshwar", "how-to-reach-omkareshwar", "omkareshwar-from-indore", "omkareshwar-from-khandwa"],
    en: {
      title: "Omkareshwar Distance – Indore, Ujjain, Khandwa & Maheshwar",
      description:
        "Published distances for Omkareshwar: Indore about 77–80 km, Ujjain 140 km, Khandwa Junction 72–77 km, Sanawad 12 km, Maheshwar about 70 km.",
      h1: "Distance from Omkareshwar",
      kicker: "Approximate, and sourced",
      answer:
        "Use these as published figures, not as a survey. The temple trust says about 77 km from Indore, 12 km from Sanawad, 72 km from Khandwa Junction and 12 km from Mortakka. Madhya Pradesh Tourism says about 80 km from Indore, nearly 87 km from the airport, 77 km from Khandwa station, 140 km from Ujjain and about 70 km from Maheshwar. Driving times are not printed by those pages.",
      blocks: [
        {
          type: "table",
          caption: "Figures we will stand behind, because a public body printed them",
          headers: ["Place", "Published figure", "Source"],
          rows: [
            ["Indore", "About 77 km", "Temple trust"],
            ["Indore", "About 80 km", "Madhya Pradesh Tourism"],
            ["Indore airport", "77 km / nearly 87 km", "Trust / state tourism"],
            ["Sanawad station", "12 km", "Temple trust"],
            ["Mortakka bus stand", "12 km", "Temple trust"],
            ["Khandwa Junction", "72 km", "Temple trust"],
            ["Khandwa station", "77 km", "Madhya Pradesh Tourism"],
            ["Ujjain", "140 km", "Trust FAQ and state tourism"],
            ["Maheshwar", "About 70 km", "Madhya Pradesh Tourism"],
          ],
        },
        {
          type: "p",
          text: "Bhopal, Mumbai and Delhi do not have a figure on those pages. The [[omkareshwar-from-bhopal|Bhopal]], [[omkareshwar-from-mumbai|Mumbai]] and [[omkareshwar-from-delhi|Delhi]] pages explain the route without a fake total. A map on the morning you travel is the right instrument for minutes. A blog that prints “exactly 139 km” and “exactly 257 km” is not more careful than the two official pages that already disagree by a few kilometres.",
        },
      ],
      faqs: [
        {
          q: "How far is Indore from Omkareshwar?",
          a: "About 77 km on the temple trust’s pages and about 80 km on the Madhya Pradesh Tourism page.",
        },
        {
          q: "How far is Ujjain?",
          a: "140 km, printed both by the temple FAQ and by state tourism.",
        },
        {
          q: "Why do Khandwa figures disagree?",
          a: "The trust prints 72 km for Khandwa Junction. State tourism prints 77 km for Khandwa station. Sanawad, the nearer stop, is a separate 12 km on the trust’s page.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर की दूरी – इंदौर, उज्जैन, खंडवा और महेश्वर",
      description:
        "ओंकारेश्वर की प्रकाशित दूरियाँ: इंदौर लगभग 77–80 किमी, उज्जैन 140 किमी, खंडवा जंक्शन 72–77 किमी, सनावद 12 किमी, महेश्वर लगभग 70 किमी।",
      h1: "ओंकारेश्वर से दूरी",
      kicker: "अनुमान, स्रोत के साथ",
      answer:
        "इन्हें प्रकाशित अंक मानें, नाप नहीं। मंदिर ट्रस्ट इंदौर से लगभग 77 किलोमीटर, सनावद से 12, खंडवा जंक्शन से 72 और मोरटक्का से 12 कहता है। मध्य प्रदेश पर्यटन इंदौर से लगभग 80, हवाई अड्डे से लगभग 87, खंडवा स्टेशन से 77, उज्जैन से 140 और महेश्वर से लगभग 70 किलोमीटर कहता है। उन पृष्ठों पर वाहन-समय नहीं छपा।",
      blocks: [
        {
          type: "table",
          caption: "जिन अंकों के पीछे हम खड़े हो सकते हैं, क्योंकि किसी सार्वजनिक संस्था ने उन्हें छापा",
          headers: ["स्थान", "प्रकाशित अंक", "स्रोत"],
          rows: [
            ["इंदौर", "लगभग 77 किमी", "मंदिर ट्रस्ट"],
            ["इंदौर", "लगभग 80 किमी", "मध्य प्रदेश पर्यटन"],
            ["इंदौर हवाई अड्डा", "77 किमी / लगभग 87 किमी", "ट्रस्ट / राज्य पर्यटन"],
            ["सनावद स्टेशन", "12 किमी", "मंदिर ट्रस्ट"],
            ["मोरटक्का बस स्टैंड", "12 किमी", "मंदिर ट्रस्ट"],
            ["खंडवा जंक्शन", "72 किमी", "मंदिर ट्रस्ट"],
            ["खंडवा स्टेशन", "77 किमी", "मध्य प्रदेश पर्यटन"],
            ["उज्जैन", "140 किमी", "ट्रस्ट प्रश्नोत्तर और राज्य पर्यटन"],
            ["महेश्वर", "लगभग 70 किमी", "मध्य प्रदेश पर्यटन"],
          ],
        },
        {
          type: "p",
          text: "भोपाल, मुंबई और दिल्ली का अंक उन पृष्ठों पर नहीं है। [[omkareshwar-from-bhopal|भोपाल]], [[omkareshwar-from-mumbai|मुंबई]] और [[omkareshwar-from-delhi|दिल्ली]] पृष्ठ नकली योग के बिना रास्ता बताते हैं। मिनट के लिए जाने वाली सुबह का नक्शा सही औजार है। जो ब्लॉग “बिल्कुल 139” और “बिल्कुल 257” छापे, वह उन दो आधिकारिक पृष्ठों से अधिक सावधान नहीं जो कुछ किलोमीटर से पहले ही अलग हैं।",
        },
      ],
      faqs: [
        {
          q: "इंदौर ओंकारेश्वर से कितनी दूर है?",
          a: "मंदिर ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर और मध्य प्रदेश पर्यटन पर लगभग 80 किलोमीटर।",
        },
        {
          q: "उज्जैन कितनी दूर है?",
          a: "140 किलोमीटर, मंदिर के प्रश्नोत्तर और राज्य पर्यटन दोनों पर।",
        },
        {
          q: "खंडवा के अंक क्यों अलग हैं?",
          a: "ट्रस्ट खंडवा जंक्शन 72 किलोमीटर छापता है। राज्य पर्यटन खंडवा स्टेशन 77 किलोमीटर। सनावद, निकट पड़ाव, ट्रस्ट के पृष्ठ पर अलग 12 किलोमीटर है।",
        },
      ],
    },
  },
  {
    slug: "omkareshwar-faq",
    cluster: "yatra",
    kind: "faq",
    updated,
    verified: updated,
    sources: ["faq", "timetable", "howToReach", "shighraInfo", "liveDarshan", "mpTourism"],
    related: ["omkareshwar-temple-timings", "where-is-omkareshwar", "omkareshwar-darshan", "how-to-reach-omkareshwar"],
    en: {
      title: "Omkareshwar FAQ – Location, Timings, Darshan & Stay",
      description:
        "Short answers on Omkareshwar: where it is, the Indore distance, temple timings, live darshan, the Jyotirlinga tradition, trains, places and stays.",
      h1: "Omkareshwar questions",
      kicker: "Straight answers",
      answer:
        "Omkareshwar is the Jyotirlinga town on Mandhata island in the Narmada, Khandwa district, Madhya Pradesh. Normal darshan is free. The trust’s daily page opens it at 5:00 AM after a 4:30 aarti, with closures for bhog and shringar. Live darshan is on the trust’s website, not on this one.",
      blocks: [
        {
          type: "p",
          text: "The questions below are the ones people bring to a search box. Each answer is the short form of a page on this site. Where a number can move, the sentence says who printed it and when we read it: 5 October 2026.",
        },
      ],
      faqs: [
        {
          q: "Where is Omkareshwar?",
          a: "On Mandhata island in the Narmada, Khandwa district, Madhya Pradesh, PIN 450554. The trust calls the Jyotirlinga the shrine on the northern bank.",
        },
        {
          q: "How far is Omkareshwar from Indore?",
          a: "About 77 km on the temple trust’s pages and about 80 km on the Madhya Pradesh Tourism page.",
        },
        {
          q: "What are Omkareshwar temple timings?",
          a: "On the daily darshan page: aarti 4:30–5:00 AM, darshan from 5:00 AM, closed 12:20–1:15 PM for bhog, and shayan darshan listed at 10:00–10:30 PM. The live page shows a shorter evening. Recheck both.",
        },
        {
          q: "How can I watch Omkareshwar live darshan?",
          a: "The homepage plays the YouTube live stream the temple trust embeds on shriomkareshwar.org. This website does not run the camera and does not show a fake live badge.",
        },
        {
          q: "What is the story of Omkareshwar Jyotirlinga?",
          a: "The trust says it is the fourth Jyotirlinga and names the Skanda, Shiva and Vayu Puranas. The island is traditionally shaped like Om. That is religion, not a lab result. The full page is the story page.",
        },
        {
          q: "How do I reach Omkareshwar by train?",
          a: "The trust names Sanawad at 12 km and Khandwa Junction at 72 km. Long-distance trains more often use Khandwa. Do not mix the two stations up.",
        },
        {
          q: "What are the places to visit?",
          a: "The Jyotirlinga, Mamleshwar, the sangam and the parikrama are the trust’s short list. State tourism adds Siddhanath, Gauri Somnath, Kedareshwar and Ekatma Dham.",
        },
        {
          q: "What is Omkareshwar parikrama?",
          a: "A walk of about 7 km around Mandhata with Narmada water, as the trust describes it.",
        },
        {
          q: "Where can I stay in Omkareshwar?",
          a: "The trust’s own stay is Shri Ji Vishramalaya, about 1 km from the temple. Private hotels are separate businesses. This website books neither.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर प्रश्नोत्तर – स्थान, समय, दर्शन और ठहरना",
      description:
        "ओंकारेश्वर के सीधे उत्तर: कहाँ है, इंदौर की दूरी, मंदिर का समय, लाइव दर्शन, ज्योतिर्लिंग की परंपरा, रेल, स्थान और ठहरना।",
      h1: "ओंकारेश्वर के प्रश्न",
      kicker: "सीधे उत्तर",
      answer:
        "ओंकारेश्वर नर्मदा के मांधाता द्वीप पर ज्योतिर्लिंग नगर है, जिला खंडवा, मध्य प्रदेश। सामान्य दर्शन मुफ्त है। ट्रस्ट का दैनिक पृष्ठ उसे सुबह 4:30 की आरती के बाद 5:00 बजे खोलता है, भोग और श्रृंगार में बंद के साथ। लाइव दर्शन ट्रस्ट की वेबसाइट पर है, इस वेबसाइट पर नहीं।",
      blocks: [
        {
          type: "p",
          text: "नीचे वे प्रश्न हैं जो लोग खोज पट्टी में लाते हैं। हर उत्तर इस साइट के किसी पृष्ठ का छोटा रूप है। जहाँ अंक हिल सकता है, वाक्य बताता है किसने छापा और हमने कब पढ़ा: 5 अक्टूबर 2026।",
        },
      ],
      faqs: [
        {
          q: "ओंकारेश्वर कहाँ है?",
          a: "नर्मदा के मांधाता द्वीप पर, जिला खंडवा, मध्य प्रदेश, पिन 450554। ट्रस्ट ज्योतिर्लिंग को उत्तरी तट का मंदिर कहता है।",
        },
        {
          q: "इंदौर से ओंकारेश्वर कितनी दूर है?",
          a: "मंदिर ट्रस्ट के पृष्ठों पर लगभग 77 किलोमीटर और मध्य प्रदेश पर्यटन पर लगभग 80 किलोमीटर।",
        },
        {
          q: "ओंकारेश्वर मंदिर का समय क्या है?",
          a: "दैनिक दर्शन पृष्ठ पर: आरती सुबह 4:30–5:00, दर्शन सुबह 5:00 से, भोग के लिए दोपहर 12:20–1:15 बंद, और शयन दर्शन रात 10:00–10:30 लिखा है। लाइव पृष्ठ पर शाम छोटी है। दोनों फिर देखें।",
        },
        {
          q: "ओंकारेश्वर लाइव दर्शन कैसे देखें?",
          a: "मुखपृष्ठ पर वही यूट्यूब लाइव धारा चलती है जिसे ट्रस्ट shriomkareshwar.org पर जोड़ता है। यह वेबसाइट कैमरा नहीं चलाती और नकली लाइव चिह्न नहीं दिखाती।",
        },
        {
          q: "ओंकारेश्वर ज्योतिर्लिंग की कथा क्या है?",
          a: "ट्रस्ट इसे चौथा ज्योतिर्लिंग कहता है और स्कंद, शिव तथा वायु पुराण का नाम लेता है। द्वीप परंपरा से ॐ के आकार का है। यह धर्म है, प्रयोगशाला का परिणाम नहीं। पूरा पृष्ठ कथा पृष्ठ है।",
        },
        {
          q: "रेल से ओंकारेश्वर कैसे पहुँचें?",
          a: "ट्रस्ट सनावद 12 किलोमीटर और खंडवा जंक्शन 72 किलोमीटर बताता है। लंबी रेल अधिकतर खंडवा जाती है। दोनों स्टेशन मिलाएँ नहीं।",
        },
        {
          q: "घूमने के स्थान कौन से हैं?",
          a: "ज्योतिर्लिंग, ममलेश्वर, संगम और परिक्रमा ट्रस्ट की छोटी सूची हैं। राज्य पर्यटन सिद्धनाथ, गौरी सोमनाथ, केदारेश्वर और एकात्म धाम जोड़ता है।",
        },
        {
          q: "ओंकारेश्वर परिक्रमा क्या है?",
          a: "मांधाता के चारों ओर लगभग 7 किलोमीटर की चाल, नर्मदा जल के साथ, जैसा ट्रस्ट बताता है।",
        },
        {
          q: "ओंकारेश्वर में ठहरें कहाँ?",
          a: "ट्रस्ट का अपना ठहरना श्री जी विश्रामालय है, मंदिर से लगभग 1 किलोमीटर। निजी होटल अलग व्यापार हैं। यह वेबसाइट दोनों नहीं बुक करती।",
        },
      ],
    },
  },
  {
    slug: "latest-omkareshwar-news",
    cluster: "yatra",
    kind: "news",
    updated,
    verified: updated,
    sources: ["news", "timetable", "liveDarshan", "shighraInfo", "darshanBooking", "faq"],
    related: ["omkareshwar-temple-timings", "omkareshwar-vip-darshan", "editorial-policy", "omkareshwar-festivals"],
    en: {
      title: "Latest Omkareshwar Updates – Verified Notes",
      description:
        "What Omkareshwar.co verified on the temple trust’s website on 5 October 2026. No invented headlines. Undated trust items are left undated.",
      h1: "Latest Omkareshwar updates",
      kicker: "Only what was checked",
      answer:
        "These are not news articles. They are notes from reading the temple trust’s public pages on 5 October 2026. If a line has no date on the trust’s site, this page does not invent one. For bookings and the clock, the trust’s page that morning still outranks this note.",
      blocks: [
        { type: "h2", text: "Verified on 5 October 2026" },
        {
          type: "ul",
          items: [
            "The daily darshan page listed mangal aarti at 4:30 AM, darshan from 5:00 AM, bhog closure 12:20–1:15 PM, and shayan darshan 10:00–10:30 PM.",
            "The live darshan page listed camera sessions at 5:30 AM–12:20 PM, 1:15–4:00 PM and 4:45–8:30 PM, and a shorter evening temple table than the daily page.",
            "The Shighra page showed ₹300 a person and a note that booking was open for all slots, Monday to Sunday.",
            "The booking form showed slots at 7–9 AM, 10 AM–12 PM, 2–4 PM and 6–8 PM, and said not to book children under 12.",
            "The FAQ still contains a sentence that shayan darshan is closed because of COVID-19. The timetable on that same page does not say that. Treat the COVID line as stale until the trust removes or renews it.",
          ],
        },
        { type: "h2", text: "Headlines we will not date" },
        {
          type: "p",
          text: "The trust’s news page, when read the same day, showed items about a plantation tender, a time-slot system for special darshan, and an LED wall. The page did not show publication dates next to those lines in the text we could read. They are recorded here only as “present on the official news page on 5 October 2026”. They are not reported as events of that day.",
        },
        {
          type: "note",
          text: "Omkareshwar.co does not operate a newsroom in the town. A correction to these notes is explained on the editorial policy page. Temple emergencies go to the trust helpline, +91 8989998686, 8 AM to 8 PM.",
        },
      ],
      faqs: [
        {
          q: "Is this a live news feed?",
          a: "No. It is a dated editorial check of official pages. It does not update itself every hour.",
        },
        {
          q: "Why mention a COVID sentence?",
          a: "Because it is still on the trust’s FAQ and it conflicts with the timetable. Hiding the conflict would make this guide less accurate.",
        },
        {
          q: "Where should I look on the day I travel?",
          a: "The official daily darshan page and, if you are booking, the official ticket page. Both are linked above.",
        },
      ],
    },
    hi: {
      title: "ओंकारेश्वर के ताज़ा अपडेट – जाँचे गए नोट",
      description:
        "Omkareshwar.co ने 5 अक्टूबर 2026 को मंदिर ट्रस्ट की वेबसाइट पर क्या जाँचा। गढ़ी हुई सुर्खियाँ नहीं। बिना तिथि की पंक्तियाँ बिना तिथि छोड़ी गई हैं।",
      h1: "ओंकारेश्वर के ताज़ा अपडेट",
      kicker: "केवल जो जाँचा गया",
      answer:
        "ये समाचार-लेख नहीं हैं। ये 5 अक्टूबर 2026 को मंदिर ट्रस्ट के सार्वजनिक पृष्ठ पढ़ने के नोट हैं। ट्रस्ट की साइट पर जिस पंक्ति की तिथि नहीं, यह पृष्ठ उसे नहीं गढ़ता। बुकिंग और घड़ी के लिए उस सुबह का ट्रस्ट-पृष्ठ इस नोट से ऊपर रहता है।",
      blocks: [
        { type: "h2", text: "5 अक्टूबर 2026 को जाँचा गया" },
        {
          type: "ul",
          items: [
            "दैनिक दर्शन पृष्ठ पर मंगला आरती सुबह 4:30, दर्शन सुबह 5:00 से, भोग-बंद दोपहर 12:20–1:15, और शयन दर्शन रात 10:00–10:30 था।",
            "लाइव दर्शन पृष्ठ पर कैमरा सत्र सुबह 5:30–दोपहर 12:20, दोपहर 1:15–शाम 4:00 और शाम 4:45–रात 8:30 थे, और शाम की मंदिर-तालिका दैनिक पृष्ठ से छोटी थी।",
            "शीघ्र पृष्ठ पर ₹300 प्रति व्यक्ति दिखा, और नोट कि सोमवार से रविवार सभी स्लॉट के लिए बुकिंग खुली है।",
            "बुकिंग फॉर्म पर स्लॉट सुबह 7–9, सुबह 10–दोपहर 12, दोपहर 2–4 और शाम 6–8 दिखे, और 12 वर्ष से छोटे बच्चों की बुकिंग से मनाही थी।",
            "प्रश्नोत्तर में अब भी वाक्य है कि शयन दर्शन कोविड-19 के कारण बंद है। उसी पृष्ठ की सारिणी यह नहीं कहती। जब तक ट्रस्ट उस पंक्ति को हटाए या नए सिरे से लिखे, उसे बासी मानें।",
          ],
        },
        { type: "h2", text: "जिन सुर्खियों की तिथि हम नहीं लिखेंगे" },
        {
          type: "p",
          text: "ट्रस्ट का समाचार पृष्ठ उसी दिन पढ़ने पर वृक्षारोपण निविदा, विशेष दर्शन की समय-स्लॉट व्यवस्था, और एलईडी दीवार की पंक्तियाँ दिखाता था। जो पाठ हम पढ़ सके, उसमें इन पंक्तियों के पास प्रकाशन-तिथि नहीं थी। यहाँ वे केवल इस रूप में हैं: “5 अक्टूबर 2026 को आधिकारिक समाचार पृष्ठ पर मौजूद”। उन्हें उस दिन की घटना नहीं बताया गया।",
        },
        {
          type: "note",
          text: "Omkareshwar.co नगर में समाचार-कक्ष नहीं चलाती। इन नोटों के सुधार की विधि संपादकीय नीति पर है। मंदिर का आपात हेल्पलाइन पर जाए, +91 8989998686, सुबह 8 से रात 8।",
        },
      ],
      faqs: [
        {
          q: "क्या यह लाइव समाचार-धारा है?",
          a: "नहीं। यह आधिकारिक पृष्ठों की दिनांकित संपादकीय जाँच है। यह हर घंटे स्वयं नहीं बदलती।",
        },
        {
          q: "कोविड वाले वाक्य का जिक्र क्यों?",
          a: "क्योंकि वह अब भी ट्रस्ट के प्रश्नोत्तर पर है और सारिणी से टकराता है। टकराव छिपाना इस गाइड को कम सही बनाता।",
        },
        {
          q: "यात्रा वाले दिन कहाँ देखें?",
          a: "आधिकारिक दैनिक दर्शन पृष्ठ पर, और बुकिंग हो तो आधिकारिक टिकट पृष्ठ पर। दोनों ऊपर जुड़े हैं।",
        },
      ],
    },
  },
];
