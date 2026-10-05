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
} as const;

export type MediaKey = keyof typeof media;
