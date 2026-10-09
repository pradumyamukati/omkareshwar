export const media = {
  temple: {
    src: "/media/jyotirlinga-temple.jpg",
    width: 960,
    height: 1280,
    taken: "2021-10-26",
    takenLabel: { en: "26 October 2021", hi: "26 अक्टूबर 2021" },
    author: "Ms Sarah Welch",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:0102621_Omkareswar_Jyothirlinga_temple,_Mandhata_Madhya_Pradesh_011.jpg",
    alt: {
      en: "Shri Omkareshwar Jyotirlinga temple on Mandhata island, photographed on 26 October 2021",
      hi: "मांधाता द्वीप पर श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर, 26 अक्टूबर 2021 की तस्वीर",
    },
    caption: {
      en: "Shri Omkareshwar Jyotirlinga on Mandhata. Photographed 26 October 2021. This is not a live view and not an official temple image.",
      hi: "मांधाता पर श्री ओंकारेश्वर ज्योतिर्लिंग। तस्वीर 26 अक्टूबर 2021 की है। यह लाइव दृश्य नहीं है और मंदिर की आधिकारिक तस्वीर नहीं है।",
    },
  },
  mamleshwar: {
    src: "/media/mamleshwar.jpg",
    width: 1280,
    height: 960,
    taken: "2021-10-26",
    takenLabel: { en: "26 October 2021", hi: "26 अक्टूबर 2021" },
    author: "Ms Sarah Welch",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:0102621_Mamleshwar_Temple,_Amareshwar_mandir,_Omkareshwar_Madhya_Pradesh_201.jpg",
    alt: {
      en: "Mamleshwar Temple, also called Amareshwar, on the south bank of the Narmada at Omkareshwar, photographed on 26 October 2021",
      hi: "ओंकारेश्वर में नर्मदा के दक्षिणी तट पर ममलेश्वर मंदिर, जिसे अमरेश्वर भी कहते हैं, 26 अक्टूबर 2021 की तस्वीर",
    },
    caption: {
      en: "Mamleshwar (Amareshwar) on the south bank. Photographed 26 October 2021 by Ms Sarah Welch. Public domain (CC0).",
      hi: "दक्षिणी तट पर ममलेश्वर (अमरेश्वर)। 26 अक्टूबर 2021, सुश्री सारा वेल्च। सार्वजनिक डोमेन (CC0)।",
    },
  },
  aerial: {
    src: "/media/mandhata-aerial.jpg",
    width: 1280,
    height: 854,
    taken: null,
    takenLabel: { en: "", hi: "" },
    author: "Ms Sarah Welch",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:0102621_Aerial_view_of_Mandhata,_Narmada_river_and_Godarpura,_Omakareshwar_01.jpg",
    alt: {
      en: "Aerial view of Mandhata island in the Narmada at Omkareshwar, with Godarpura on the south bank",
      hi: "ओंकारेश्वर में नर्मदा के भीतर मांधाता द्वीप का हवाई दृश्य, दक्षिणी तट पर गोदरपुरा के साथ",
    },
    caption: {
      en: "Mandhata island and the Narmada. Wikimedia Commons file by Ms Sarah Welch, CC0. No capture date is claimed because the file metadata does not clearly record one.",
      hi: "मांधाता द्वीप और नर्मदा। विकिमीडिया कॉमन्स पर सुश्री सारा वेल्च की फ़ाइल, CC0। फ़ाइल में स्पष्ट तस्वीर-तिथि नहीं है, इसलिए कोई तिथि नहीं लिखी गई।",
    },
  },
  ghat: {
    src: "/media/omkareshwar-narmada-ghat.jpg",
    width: 1024,
    height: 576,
    taken: null,
    takenLabel: { en: "", hi: "" },
    author: "Saurabh Solanki",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    sourceUrl: "https://unsplash.com/@saurabh5986",
    alt: {
      en: "Narmada ghat at Omkareshwar, with riverfront steps, yellow canopies and the riverside temple on Mandhata",
      hi: "ओंकारेश्वर का नर्मदा घाट, नदी की सीढ़ियाँ, पीले छत्र और मांधाता पर नदी किनारे का मंदिर",
    },
    caption: {
      en: "The Narmada ghat at Omkareshwar, looking across the river toward the steps and the riverside temple on Mandhata.",
      hi: "ओंकारेश्वर का नर्मदा घाट, नदी के पार सीढ़ियों और मांधाता पर नदी किनारे के मंदिर की ओर।",
    },
  },
} as const;

export type MediaKey = keyof typeof media;

/** Homepage carousel. Filenames and alt text name Omkareshwar for the photograph itself. */
export const homeSlides = [
  {
    src: "/media/omkareshwar-jyotirlinga-shringar.webp",
    width: 512,
    height: 384,
    alt: {
      en: "Omkareshwar Jyotirlinga at Shri Omkareshwar Temple, decorated with roses, marigolds and jasmine",
      hi: "श्री ओंकारेश्वर मंदिर में गुलाब, गेंदा और चमेली से सजा ओंकारेश्वर ज्योतिर्लिंग",
    },
    label: { en: "Omkareshwar Jyotirlinga", hi: "ओंकारेश्वर ज्योतिर्लिंग" },
  },
  {
    src: "/media/omkareshwar-narmada-ghat.jpg",
    width: 1024,
    height: 576,
    alt: {
      en: "Omkareshwar Narmada ghat with yellow canopies below the riverside temple on Mandhata island",
      hi: "मांधाता द्वीप पर ओंकारेश्वर का नर्मदा घाट, नदी किनारे मंदिर के नीचे पीले छत्रों के साथ",
    },
    label: { en: "Omkareshwar Narmada ghat", hi: "ओंकारेश्वर नर्मदा घाट" },
  },
  {
    src: "/media/omkareshwar-mandhata-boats.jpg",
    width: 1024,
    height: 682,
    alt: {
      en: "Boats on the Narmada at Omkareshwar, with Mandhata island temples and ghats along the bank",
      hi: "ओंकारेश्वर में नर्मदा पर नावें, किनारे मांधाता द्वीप के मंदिर और घाट",
    },
    label: { en: "Omkareshwar and Mandhata", hi: "ओंकारेश्वर और मांधाता" },
  },
  {
    src: "/media/omkareshwar-narmada-bridge.jpg",
    width: 1024,
    height: 767,
    alt: {
      en: "Omkareshwar along the Narmada, with riverside ghats, temple spires and the suspension bridge",
      hi: "नर्मदा किनारे ओंकारेश्वर, घाट, मंदिर शिखर और झूला पुल",
    },
    label: { en: "Omkareshwar and the Narmada bridge", hi: "ओंकारेश्वर और नर्मदा पुल" },
  },
  {
    src: "/media/omkareshwar-riverfront-walkway.jpg",
    width: 1024,
    height: 767,
    alt: {
      en: "Omkareshwar riverfront walkway overlooking the Narmada and the bridge to Mandhata island",
      hi: "ओंकारेश्वर का नदी किनारे का मार्ग, नर्मदा और मांधाता द्वीप के पुल की ओर",
    },
    label: { en: "Omkareshwar riverfront", hi: "ओंकारेश्वर नदी तट" },
  },
  {
    src: "/media/omkareshwar-suspension-bridge.jpg",
    width: 1024,
    height: 768,
    alt: {
      en: "Suspension bridge across the rocky Narmada at Omkareshwar in Madhya Pradesh",
      hi: "मध्य प्रदेश के ओंकारेश्वर में चट्टानी नर्मदा पर झूला पुल",
    },
    label: { en: "Omkareshwar suspension bridge", hi: "ओंकारेश्वर झूला पुल" },
  },
] as const;
