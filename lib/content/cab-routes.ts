import { verifiedOn, type Block, type OfficialKey, type PageDef } from "../types";

const updated = verifiedOn;
const phone = "+91 96853 92846";

type Region = "mp" | "mh" | "gj" | "rj" | "north" | "east" | "link";

type Seed = {
  slug: string;
  fromEn: string;
  fromHi: string;
  toEn: string;
  toHi: string;
  km: number;
  min: number;
  viaEn: string;
  viaHi: string;
  region: Region;
  akaEn?: string;
  akaHi?: string;
  officialEn?: string;
  officialHi?: string;
  sources?: OfficialKey[];
  guide?: string;
};

const guides: Record<string, [string, string]> = {
  "omkareshwar-from-indore": ["Omkareshwar from Indore", "इंदौर से ओंकारेश्वर गाइड"],
  "omkareshwar-from-ujjain": ["Omkareshwar from Ujjain", "उज्जैन से ओंकारेश्वर गाइड"],
  "omkareshwar-from-khandwa": ["Omkareshwar from Khandwa", "खंडवा से ओंकारेश्वर गाइड"],
  "omkareshwar-from-bhopal": ["Omkareshwar from Bhopal", "भोपाल से ओंकारेश्वर गाइड"],
  "omkareshwar-from-mumbai": ["Omkareshwar from Mumbai", "मुंबई से ओंकारेश्वर गाइड"],
  "omkareshwar-from-delhi": ["Omkareshwar from Delhi", "दिल्ली से ओंकारेश्वर गाइड"],
  "omkareshwar-distance": ["Distance from Omkareshwar", "ओंकारेश्वर से दूरी"],
};

function road(
  slug: string,
  fromEn: string,
  fromHi: string,
  toEn: string,
  toHi: string,
  km: number,
  min: number,
  viaEn: string,
  viaHi: string,
  region: Region,
  extra: Partial<Seed> = {},
): Seed {
  return { slug, fromEn, fromHi, toEn, toHi, km, min, viaEn, viaHi, region, ...extra };
}

function toOmk(
  id: string,
  en: string,
  hi: string,
  km: number,
  min: number,
  viaEn: string,
  viaHi: string,
  region: Region,
  extra: Partial<Seed> = {},
): Seed {
  return road(`${id}-to-omkareshwar`, en, hi, "Omkareshwar", "ओंकारेश्वर", km, min, viaEn, viaHi, region, extra);
}

const seeds: Seed[] = [
  toOmk("indore", "Indore", "इंदौर", 77, 100, "through Barwaha", "बरवाहा होकर", "mp", {
    officialEn: "The temple trust prints about 77 km from Indore to Omkareshwar.",
    officialHi: "मंदिर ट्रस्ट इंदौर से ओंकारेश्वर लगभग 77 किलोमीटर छापता है।",
    sources: ["howToReach"],
    guide: "omkareshwar-from-indore",
  }),
  toOmk("ujjain", "Ujjain", "उज्जैन", 140, 151, "through Indore", "इंदौर होकर", "mp", {
    officialEn: "The temple trust’s FAQ and Madhya Pradesh Tourism both print 140 km from Ujjain to Omkareshwar.",
    officialHi: "मंदिर ट्रस्ट का प्रश्नोत्तर और मध्य प्रदेश पर्यटन दोनों उज्जैन से ओंकारेश्वर 140 किलोमीटर छापते हैं।",
    sources: ["faq"],
    guide: "omkareshwar-from-ujjain",
  }),
  toOmk("khandwa", "Khandwa", "खंडवा", 72, 72, "through Sanawad", "सनावद होकर", "mp", {
    officialEn: "The temple trust prints 72 km for Khandwa Junction to Omkareshwar.",
    officialHi: "मंदिर ट्रस्ट खंडवा जंक्शन से ओंकारेश्वर 72 किलोमीटर छापता है।",
    sources: ["howToReach"],
    guide: "omkareshwar-from-khandwa",
  }),
  toOmk("sanawad", "Sanawad", "सनावद", 12, 14, "the short road from Sanawad station", "सनावद स्टेशन से छोटी सड़क", "mp", {
    officialEn: "The temple trust prints 12 km from Sanawad station to Omkareshwar.",
    officialHi: "मंदिर ट्रस्ट सनावद स्टेशन से ओंकारेश्वर 12 किलोमीटर छापता है।",
    sources: ["howToReach"],
  }),
  toOmk("barwaha", "Barwaha", "बरवाहा", 17, 22, "the short road east of Barwaha", "बरवाहा के पूर्व की छोटी सड़क", "mp", {
    akaEn: "Barwaha is also written Barwah.",
    akaHi: "बरवाहा को बरवाह भी लिखा जाता है।",
  }),
  toOmk("khargone", "Khargone", "खरगोन", 81, 89, "through Barwaha", "बरवाहा होकर", "mp"),
  toOmk("maheshwar", "Maheshwar", "महेश्वर", 70, 67, "through Dhamnod and Barwaha", "धामनोद और बरवाहा होकर", "mp", {
    officialEn: "Madhya Pradesh Tourism prints about 70 km from Maheshwar to Omkareshwar.",
    officialHi: "मध्य प्रदेश पर्यटन महेश्वर से ओंकारेश्वर लगभग 70 किलोमीटर छापता है।",
    akaEn: "Maheshwar is also written Maheshawar.",
    akaHi: "महेश्वर को महेशवर भी लिखा जाता है।",
    sources: ["mpTourism"],
    guide: "omkareshwar-distance",
  }),
  toOmk("dewas", "Dewas", "देवास", 113, 125, "through Indore", "इंदौर होकर", "mp"),
  toOmk("bhopal", "Bhopal", "भोपाल", 276, 251, "through Indore", "इंदौर होकर", "mp", { guide: "omkareshwar-from-bhopal" }),
  toOmk("burhanpur", "Burhanpur", "बुरहानपुर", 122, 109, "through Khandwa", "खंडवा होकर", "mp"),
  toOmk("dhar", "Dhar", "धार", 138, 142, "through Dhamnod", "धामनोद होकर", "mp"),
  toOmk("mhow", "Mhow", "महू", 104, 102, "through Indore", "इंदौर होकर", "mp", {
    akaEn: "Mhow is also called Dr. Ambedkar Nagar.",
    akaHi: "महू को डॉ. आंबेडकर नगर भी कहते हैं।",
  }),
  toOmk("pithampur", "Pithampur", "पीथमपुर", 90, 108, "toward Barwaha on the Indore bypass", "इंदौर बाईपास से बरवाहा की ओर", "mp"),
  toOmk("ratlam", "Ratlam", "रतलाम", 219, 223, "through Indore", "इंदौर होकर", "mp"),
  toOmk("mandsaur", "Mandsaur", "मंदसौर", 290, 297, "through Ratlam and Indore", "रतलाम और इंदौर होकर", "mp"),
  toOmk("neemuch", "Neemuch", "नीमच", 339, 344, "through Mandsaur and Ratlam", "मंदसौर और रतलाम होकर", "mp"),
  toOmk("shajapur", "Shajapur", "शाजापुर", 174, 180, "through Ujjain and Indore", "उज्जैन और इंदौर होकर", "mp"),
  toOmk("agar-malwa", "Agar Malwa", "आगर मालवा", 202, 201, "through Ujjain", "उज्जैन होकर", "mp"),
  toOmk("sehore", "Sehore", "सीहोर", 219, 217, "through Indore", "इंदौर होकर", "mp"),
  toOmk("harda", "Harda", "हरदा", 162, 164, "through Khandwa", "खंडवा होकर", "mp"),
  toOmk("narmadapuram", "Narmadapuram", "नर्मदापुरम", 242, 210, "through Harda and Khandwa", "हरदा और खंडवा होकर", "mp", {
    akaEn: "Narmadapuram was formerly Hoshangabad.",
    akaHi: "नर्मदापुरम पहले होशंगाबाद था।",
  }),
  toOmk("betul", "Betul", "बैतूल", 260, 207, "through Khandwa", "खंडवा होकर", "mp"),
  toOmk("itarsi", "Itarsi", "इटारसी", 258, 227, "through Narmadapuram and Harda", "नर्मदापुरम और हरदा होकर", "mp"),
  toOmk("jabalpur", "Jabalpur", "जबलपुर", 517, 407, "through Narmadapuram", "नर्मदापुरम होकर", "mp"),
  toOmk("gwalior", "Gwalior", "ग्वालियर", 651, 551, "through Shivpuri and Indore", "शिवपुरी और इंदौर होकर", "mp"),
  toOmk("guna", "Guna", "गुना", 412, 362, "through Indore", "इंदौर होकर", "mp"),
  toOmk("shivpuri", "Shivpuri", "शिवपुरी", 530, 460, "through Guna and Indore", "गुना और इंदौर होकर", "mp"),
  toOmk("sagar", "Sagar", "सागर", 439, 364, "through Bhopal and Indore", "भोपाल और इंदौर होकर", "mp"),
  toOmk("vidisha", "Vidisha", "विदिशा", 328, 285, "through Bhopal", "भोपाल होकर", "mp"),
  toOmk("raisen", "Raisen", "रायसेन", 306, 270, "through Bhopal", "भोपाल होकर", "mp"),
  toOmk("rajgarh", "Rajgarh", "राजगढ़", 257, 266, "through Indore", "इंदौर होकर", "mp", {
    akaEn: "This Rajgarh is the one in Madhya Pradesh.",
    akaHi: "यह राजगढ़ मध्य प्रदेश का है।",
  }),
  toOmk("badnawar", "Badnawar", "बदनावर", 178, 181, "through Indore", "इंदौर होकर", "mp"),
  toOmk("dhamnod", "Dhamnod", "धामनोद", 80, 80, "through Barwaha", "बरवाहा होकर", "mp"),
  toOmk("mandu", "Mandu", "मांडू", 105, 119, "through Dhamnod", "धामनोद होकर", "mp"),
  toOmk("mumbai", "Mumbai", "मुंबई", 577, 429, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh", { guide: "omkareshwar-from-mumbai" }),
  toOmk("pune", "Pune", "पुणे", 573, 445, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh"),
  toOmk("nashik", "Nashik", "नासिक", 412, 315, "through Dhule", "धुळे होकर", "mh"),
  toOmk("nagpur", "Nagpur", "नागपुर", 428, 329, "through Betul and Khandwa", "बैतूल और खंडवा होकर", "mh"),
  toOmk("thane", "Thane", "ठाणे", 557, 417, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh"),
  toOmk("navi-mumbai", "Navi Mumbai", "नवी मुंबई", 574, 432, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh"),
  toOmk("chhatrapati-sambhajinagar", "Chhatrapati Sambhajinagar", "छत्रपति संभाजीनगर", 342, 263, "through Jalgaon and Burhanpur", "जलगांव और बुरहानपुर होकर", "mh", {
    akaEn: "Chhatrapati Sambhajinagar was formerly Aurangabad.",
    akaHi: "छत्रपति संभाजीनगर पहले औरंगाबाद था।",
  }),
  toOmk("jalgaon", "Jalgaon", "जलगांव", 210, 177, "through Burhanpur and Khandwa", "बुरहानपुर और खंडवा होकर", "mh"),
  toOmk("bhusawal", "Bhusawal", "भुसावल", 185, 157, "through Burhanpur", "बुरहानपुर होकर", "mh"),
  toOmk("amravati", "Amravati", "अमरावती", 326, 299, "through Akola and Khandwa", "अकोला और खंडवा होकर", "mh"),
  toOmk("akola", "Akola", "अकोला", 258, 229, "through Khandwa", "खंडवा होकर", "mh"),
  toOmk("washim", "Washim", "वाशिम", 345, 278, "through Akola", "अकोला होकर", "mh"),
  toOmk("nanded", "Nanded", "नांदेड़", 479, 371, "through Akola and Khandwa", "अकोला और खंडवा होकर", "mh"),
  toOmk("latur", "Latur", "लातूर", 553, 421, "through Nanded", "नांदेड़ होकर", "mh"),
  toOmk("kolhapur", "Kolhapur", "कोल्हापुर", 774, 591, "through Pune and Nashik", "पुणे और नासिक होकर", "mh"),
  toOmk("sangli", "Sangli", "सांगली", 738, 557, "through Pune and Nashik", "पुणे और नासिक होकर", "mh"),
  toOmk("solapur", "Solapur", "सोलापुर", 629, 478, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh"),
  toOmk("ahilyanagar", "Ahilyanagar", "अहिल्यानगर", 452, 351, "through Nashik", "नासिक होकर", "mh", {
    akaEn: "Ahilyanagar was formerly Ahmednagar.",
    akaHi: "अहिल्यानगर पहले अहमदनगर था।",
  }),
  toOmk("dhule", "Dhule", "धुळे", 253, 201, "through Shirpur toward Barwaha", "शिरपुर से बरवाहा की ओर", "mh"),
  toOmk("malegaon", "Malegaon", "मालेगांव", 307, 242, "through Dhule", "धुळे होकर", "mh"),
  toOmk("shegaon", "Shegaon", "शेगांव", 223, 195, "through Khandwa", "खंडवा होकर", "mh"),
  toOmk("khamgaon", "Khamgaon", "खामगांव", 235, 191, "through Shegaon and Khandwa", "शेगांव और खंडवा होकर", "mh"),
  toOmk("wardha", "Wardha", "वर्धा", 488, 364, "through Nagpur and Khandwa", "नागपुर और खंडवा होकर", "mh"),
  toOmk("yavatmal", "Yavatmal", "यवतमाल", 447, 348, "through Khandwa", "खंडवा होकर", "mh"),
  toOmk("panvel", "Panvel", "पनवेल", 582, 434, "through Nashik and Dhule", "नासिक और धुळे होकर", "mh"),
  toOmk("ahmedabad", "Ahmedabad", "अहमदाबाद", 460, 372, "through Dahod and Indore", "दाहोद और इंदौर होकर", "gj"),
  toOmk("vadodara", "Vadodara", "वडोदरा", 372, 320, "through Godhra and Dahod", "गोधरा और दाहोद होकर", "gj"),
  toOmk("surat", "Surat", "सूरत", 435, 335, "through Dhule", "धुळे होकर", "gj"),
  toOmk("rajkot", "Rajkot", "राजकोट", 651, 535, "through Ahmedabad", "अहमदाबाद होकर", "gj"),
  toOmk("gandhinagar", "Gandhinagar", "गांधीनगर", 474, 387, "through Ahmedabad", "अहमदाबाद होकर", "gj"),
  toOmk("anand", "Anand", "आणंद", 432, 350, "through Vadodara", "वडोदरा होकर", "gj"),
  toOmk("nadiad", "Nadiad", "नडियाद", 418, 354, "through Ahmedabad", "अहमदाबाद होकर", "gj"),
  toOmk("godhra", "Godhra", "गोधरा", 331, 280, "through Dahod and Indore", "दाहोद और इंदौर होकर", "gj"),
  toOmk("dahod", "Dahod", "दाहोद", 261, 229, "through Indore", "इंदौर होकर", "gj"),
  toOmk("bhavnagar", "Bhavnagar", "भावनगर", 576, 460, "through Ahmedabad", "अहमदाबाद होकर", "gj"),
  toOmk("vapi", "Vapi", "वापी", 493, 377, "through Surat and Dhule", "सूरत और धुळे होकर", "gj"),
  toOmk("valsad", "Valsad", "वलसाड", 470, 360, "through Surat and Dhule", "सूरत और धुळे होकर", "gj"),
  toOmk("palanpur", "Palanpur", "पालनपुर", 604, 497, "through Ahmedabad", "अहमदाबाद होकर", "gj"),
  toOmk("kota", "Kota", "कोटा", 381, 338, "through Indore", "इंदौर होकर", "rj"),
  toOmk("jaipur", "Jaipur", "जयपुर", 619, 487, "through Kota", "कोटा होकर", "rj"),
  toOmk("udaipur", "Udaipur", "उदयपुर", 501, 425, "through Banswara and Dhar", "बांसवाड़ा और धार होकर", "rj"),
  toOmk("chittorgarh", "Chittorgarh", "चित्तौड़गढ़", 425, 402, "through Neemuch and Ratlam", "नीमच और रतलाम होकर", "rj"),
  toOmk("banswara", "Banswara", "बांसवाड़ा", 303, 283, "through Dhar", "धार होकर", "rj"),
  toOmk("dungarpur", "Dungarpur", "डूंगरपुर", 395, 348, "through Banswara", "बांसवाड़ा होकर", "rj"),
  toOmk("bhilwara", "Bhilwara", "भीलवाड़ा", 483, 443, "through Chittorgarh", "चित्तौड़गढ़ होकर", "rj"),
  toOmk("ajmer", "Ajmer", "अजमेर", 587, 511, "through Chittorgarh and Indore", "चित्तौड़गढ़ और इंदौर होकर", "rj"),
  toOmk("jodhpur", "Jodhpur", "जोधपुर", 752, 603, "through Udaipur", "उदयपुर होकर", "rj"),
  toOmk("pratapgarh", "Pratapgarh", "प्रतापगढ़", 318, 314, "through Banswara", "बांसवाड़ा होकर", "rj", {
    akaEn: "This Pratapgarh is the one in Rajasthan.",
    akaHi: "यह प्रतापगढ़ राजस्थान का है।",
  }),
  toOmk("delhi", "Delhi", "दिल्ली", 801, 607, "through Agra, Gwalior and Indore", "आगरा, ग्वालियर और इंदौर होकर", "north", {
    guide: "omkareshwar-from-delhi",
  }),
  toOmk("faridabad", "Faridabad", "फरीदाबाद", 775, 582, "through Agra and Gwalior", "आगरा और ग्वालियर होकर", "north"),
  toOmk("gurugram", "Gurugram", "गुरुग्राम", 776, 579, "through Delhi and Agra", "दिल्ली और आगरा होकर", "north", {
    akaEn: "Gurugram was formerly Gurgaon.",
    akaHi: "गुरुग्राम पहले गुड़गांव था।",
  }),
  toOmk("noida", "Noida", "नोएडा", 804, 604, "through Delhi and Agra", "दिल्ली और आगरा होकर", "north"),
  toOmk("agra", "Agra", "आगरा", 746, 571, "through Gwalior and Indore", "ग्वालियर और इंदौर होकर", "north"),
  toOmk("mathura", "Mathura", "मथुरा", 728, 565, "through Agra and Gwalior", "आगरा और ग्वालियर होकर", "north"),
  toOmk("lucknow", "Lucknow", "लखनऊ", 884, 676, "south toward Gwalior and Indore", "ग्वालियर और इंदौर की ओर दक्षिण", "north"),
  toOmk("kanpur", "Kanpur", "कानपुर", 797, 616, "toward Jhansi and Indore", "झांसी और इंदौर की ओर", "north"),
  toOmk("prayagraj", "Prayagraj", "प्रयागराज", 871, 658, "toward the highway for Indore", "इंदौर वाले राजमार्ग की ओर", "north", {
    akaEn: "Prayagraj was formerly Allahabad.",
    akaHi: "प्रयागराज पहले इलाहाबाद था।",
  }),
  toOmk("varanasi", "Varanasi", "वाराणसी", 965, 735, "through Prayagraj toward Indore", "प्रयागराज से इंदौर की ओर", "north"),
  toOmk("amritsar", "Amritsar", "अमृतसर", 1240, 904, "through Delhi", "दिल्ली होकर", "north"),
  toOmk("chandigarh", "Chandigarh", "चंडीगढ़", 1070, 783, "through Delhi", "दिल्ली होकर", "north"),
  toOmk("dehradun", "Dehradun", "देहरादून", 1028, 773, "through Delhi", "दिल्ली होकर", "north"),
  toOmk("raipur", "Raipur", "रायपुर", 714, 539, "through Nagpur", "नागपुर होकर", "east"),
  toOmk("bilaspur", "Bilaspur", "बिलासपुर", 808, 612, "through Raipur and Nagpur", "रायपुर और नागपुर होकर", "east"),
  toOmk("bengaluru", "Bengaluru", "बेंगलुरु", 1245, 927, "the long road through Hyderabad and Khandwa", "हैदराबाद और खंडवा की लंबी सड़क", "east", {
    akaEn: "Bengaluru is also called Bangalore.",
    akaHi: "बेंगलुरु को बैंगलोर भी कहते हैं।",
  }),
  toOmk("hyderabad", "Hyderabad", "हैदराबाद", 746, 569, "through Khandwa", "खंडवा होकर", "east"),
  toOmk("chennai", "Chennai", "चेन्नई", 1389, 1030, "through Hyderabad", "हैदराबाद होकर", "east"),
  toOmk("kolkata", "Kolkata", "कोलकाता", 1543, 1131, "through Nagpur", "नागपुर होकर", "east"),
  road("mortakka-to-indore", "Mortakka", "मोर्टकका", "Indore", "इंदौर", 66, 85, "through the Omkareshwar road", "ओंकारेश्वर वाली सड़क होकर", "link"),
  road("mortakka-to-ujjain", "Mortakka", "मोर्टकका", "Ujjain", "उज्जैन", 122, 137, "through Indore", "इंदौर होकर", "link"),
  road("omkareshwar-to-ujjain", "Omkareshwar", "ओंकारेश्वर", "Ujjain", "उज्जैन", 140, 151, "through Indore", "इंदौर होकर", "link", {
    officialEn: "The temple trust’s FAQ and Madhya Pradesh Tourism both print 140 km from Omkareshwar to Ujjain.",
    officialHi: "मंदिर ट्रस्ट का प्रश्नोत्तर और मध्य प्रदेश पर्यटन दोनों ओंकारेश्वर से उज्जैन 140 किलोमीटर छापते हैं।",
    sources: ["faq"],
    guide: "omkareshwar-from-ujjain",
  }),
  road("omkareshwar-to-khandwa", "Omkareshwar", "ओंकारेश्वर", "Khandwa", "खंडवा", 72, 71, "through Sanawad", "सनावद होकर", "link", {
    officialEn: "The temple trust prints 72 km from Omkareshwar to Khandwa Junction.",
    officialHi: "मंदिर ट्रस्ट ओंकारेश्वर से खंडवा जंक्शन 72 किलोमीटर छापता है।",
    sources: ["howToReach"],
    guide: "omkareshwar-from-khandwa",
  }),
  road("mortakka-to-khandwa", "Mortakka", "मोर्टकका", "Khandwa", "खंडवा", 64, 66, "east toward Khandwa", "खंडवा की ओर पूर्व", "link"),
  road("omkareshwar-to-maheshwar", "Omkareshwar", "ओंकारेश्वर", "Maheshwar", "महेश्वर", 70, 67, "through Barwaha and Dhamnod", "बरवाहा और धामनोद होकर", "link", {
    officialEn: "Madhya Pradesh Tourism prints about 70 km from Omkareshwar to Maheshwar.",
    officialHi: "मध्य प्रदेश पर्यटन ओंकारेश्वर से महेश्वर लगभग 70 किलोमीटर छापता है।",
    akaEn: "Maheshwar is also written Maheshawar.",
    akaHi: "महेश्वर को महेशवर भी लिखा जाता है।",
    sources: ["mpTourism"],
    guide: "omkareshwar-distance",
  }),
];

function pick(label: string, options: string[], min: number, max: number) {
  const hit = options.find((item) => item.length >= min && item.length <= max);
  if (!hit) {
    throw new Error(`${label} no fit: ${options.map((item) => `${item.length}:${item}`).join(" || ")}`);
  }
  return hit;
}

function span(min: number, lang: "en" | "hi") {
  if (min <= 45) {
    const lo = Math.max(10, min - 8);
    const hi = min + 12;
    return lang === "en" ? `about ${lo} to ${hi} minutes when the road is clear` : `सड़क साफ हो तो लगभग ${lo} से ${hi} मिनट`;
  }
  const lo = Math.max(1, Math.round((min * 0.85) / 60));
  const hi = Math.max(lo + 1, Math.round((min * 1.3) / 60));
  return lang === "en" ? `about ${lo} to ${hi} hours when the road is clear` : `सड़क साफ हो तो लगभग ${lo} से ${hi} घंटे`;
}

function dropEn(seed: Seed) {
  return seed.toEn === "Omkareshwar" ? "the temple, a hotel, or Omkareshwar Bus Stand" : `${seed.toEn} bus stand, railway station, or a point you name`;
}

function dropHi(seed: Seed) {
  return seed.toEn === "Omkareshwar" ? "मंदिर, होटल, या ओंकारेश्वर बस स्टैंड" : `${seed.toHi} बस स्टैंड, रेलवे स्टेशन, या आपकी लिखी जगह`;
}

function flightEn(seed: Seed) {
  const airport = "The airport the temple trust names is Devi Ahilyabai Holkar Airport at Indore, 77 km from Omkareshwar.";
  if (seed.toEn !== "Omkareshwar") {
    return `${airport} This page books the cab between ${seed.fromEn} and ${seed.toEn}. A flight only helps when it shortens that road.`;
  }
  if (seed.slug !== "indore-to-omkareshwar" && seed.km > 450) {
    return `${airport} On a road this long, the practical flight lands at Indore. The cab from there is on [[indore-to-omkareshwar|Indore to Omkareshwar]]. Call ${phone}.`;
  }
  if (seed.km > 120) {
    return `${airport} From ${seed.fromEn}, fly only if the plane lands at Indore. Otherwise take the road, and call ${phone} for the cab.`;
  }
  return `${airport} ${seed.fromEn} is close enough that a flight is not this journey. Call ${phone} for the cab.`;
}

function flightHi(seed: Seed) {
  const airport = "मंदिर ट्रस्ट जिस हवाई अड्डे का नाम लेता है वह इंदौर का देवी अहिल्याबाई होल्कर हवाई अड्डा है, ओंकारेश्वर से 77 किलोमीटर।";
  if (seed.toEn !== "Omkareshwar") {
    return `${airport} यह पृष्ठ ${seed.fromHi} से ${seed.toHi} की कैब बुक करता है। फ्लाइट तभी काम की है जब वह सड़क छोटी कर दे।`;
  }
  if (seed.slug !== "indore-to-omkareshwar" && seed.km > 450) {
    return `${airport} इतनी लंबी सड़क पर व्यावहारिक फ्लाइट इंदौर उतरती है। वहाँ से कैब [[indore-to-omkareshwar|इंदौर से ओंकारेश्वर]] पर है। कॉल ${phone}।`;
  }
  if (seed.km > 120) {
    return `${airport} ${seed.fromHi} से फ्लाइट तभी लें जब विमान इंदौर उतरे। नहीं तो सड़क लें, और कैब के लिए ${phone} पर कॉल करें।`;
  }
  return `${airport} ${seed.fromHi} इतना पास है कि फ्लाइट यह यात्रा नहीं है। कैब के लिए ${phone} पर कॉल करें।`;
}

function endEn(seed: Seed) {
  if (seed.toEn !== "Omkareshwar") {
    return `This page is the cab from ${seed.fromEn} to ${seed.toEn}. If the trip is darshan, the hours are on [[omkareshwar-temple-timings|temple timings]] and the queue is on [[omkareshwar-darshan|darshan]].`;
  }
  const clock = "Darshan on the trust’s daily page opens at 5:00 AM after the 4:30 aarti. The sanctum closes for bhog from 12:20 to 1:15. Hours are on [[omkareshwar-temple-timings|temple timings]].";
  if (seed.km > 180) {
    return `${clock} Plan to sleep in Omkareshwar. A same-day return spends the visit on the highway. Stays are on [[hotels-in-omkareshwar|hotels in Omkareshwar]].`;
  }
  return `${clock} A same-day return can work if you leave ${seed.fromEn} early and keep the stop short.`;
}

function endHi(seed: Seed) {
  if (seed.toEn !== "Omkareshwar") {
    return `यह पृष्ठ ${seed.fromHi} से ${seed.toHi} की कैब है। यदि यात्रा दर्शन की है, तो घंटे [[omkareshwar-temple-timings|मंदिर के समय]] पर हैं और कतार [[omkareshwar-darshan|दर्शन]] पर।`;
  }
  const clock = "ट्रस्ट के दैनिक पृष्ठ पर दर्शन सुबह 5:00 बजे खुलता है, 4:30 की आरती के बाद। गर्भगृह भोग के लिए 12:20 से 1:15 बंद रहता है। घंटे [[omkareshwar-temple-timings|मंदिर के समय]] पर हैं।";
  if (seed.km > 180) {
    return `${clock} ओंकारेश्वर में सोने की योजना बनाएँ। उसी दिन लौटना यात्रा को राजमार्ग पर खर्च कर देता है। ठहरना [[hotels-in-omkareshwar|ओंकारेश्वर के होटल]] पर है।`;
  }
  return `${clock} उसी दिन लौटना तब बनता है जब ${seed.fromHi} से जल्दी निकलें और पड़ाव छोटा रखें।`;
}

function pageFor(seed: Seed, neighbor?: string): PageDef {
  const titleEn = pick("en title", [`${seed.fromEn} to ${seed.toEn} Cab, Bus & train flight Booking`], 15, 90);
  const titleHi = pick("hi title", [`${seed.fromHi} से ${seed.toHi} कैब, बस, ट्रेन और फ्लाइट बुकिंग`], 15, 90);
  const descriptionEn = pick(
    "en description",
    [
      `${seed.fromEn} to ${seed.toEn} cab, bus, train and flight. About ${seed.km} km by road. Call ${phone} for a cab. Pickup in ${seed.fromEn}.`,
      `${seed.fromEn} to ${seed.toEn} cab, bus, train and flight. About ${seed.km} km by road. Call ${phone} for a cab.`,
    ],
    70,
    220,
  );
  const descriptionHi = pick(
    "hi description",
    [
      `${seed.fromHi} से ${seed.toHi} कैब, बस, ट्रेन और फ्लाइट। सड़क से लगभग ${seed.km} किलोमीटर। कैब के लिए ${phone} पर कॉल करें। पिकअप ${seed.fromHi} में।`,
      `${seed.fromHi} से ${seed.toHi} कैब, बस, ट्रेन और फ्लाइट। लगभग ${seed.km} किलोमीटर। कैब के लिए ${phone} पर कॉल करें।`,
    ],
    70,
    220,
  );
  const roadEn = seed.officialEn
    ? `${seed.officialEn} The usual way is ${seed.viaEn}.`
    : `${seed.fromEn} to ${seed.toEn} is about ${seed.km} km by road. The usual way is ${seed.viaEn}. That kilometre is a driving estimate for the cab, not a figure the temple trust printed.`;
  const roadHi = seed.officialHi
    ? `${seed.officialHi} आम रास्ता ${seed.viaHi} है।`
    : `${seed.fromHi} से ${seed.toHi} सड़क से लगभग ${seed.km} किलोमीटर है। आम रास्ता ${seed.viaHi} है। यह किलोमीटर कैब के लिए ड्राइविंग अनुमान है, मंदिर ट्रस्ट का छापा अंक नहीं।`;
  const guide = seed.guide ? guides[seed.guide] : undefined;
  const related = ["omkareshwar-cab", "how-to-reach-omkareshwar", "omkareshwar-temple", "mortakka-to-omkareshwar"];
  if (seed.guide) related.push(seed.guide);
  if (neighbor && neighbor !== seed.slug && !related.includes(neighbor)) related.push(neighbor);

  const enBlocks: Block[] = [
    { type: "h2", text: "The road" },
    { type: "p", text: [roadEn, seed.akaEn].filter(Boolean).join(" ") },
    {
      type: "facts",
      items: [
        { label: "Distance", value: `About ${seed.km} km` },
        { label: "Planning time", value: span(seed.min, "en") },
        { label: "Cab", value: phone },
        { label: "Pickup", value: seed.fromEn },
        { label: "Drop", value: dropEn(seed) },
      ],
    },
    { type: "h2", text: "Cab" },
    {
      type: "p",
      text: `Call ${phone} for a cab from ${seed.fromEn} to ${seed.toEn}. ${seed.km <= 25 ? "Ertiga, Swift, or Bike." : "Ertiga or Swift. A bike is for a short hop such as Mortakka, not this full road."} The fare is confirmed on the call or on WhatsApp before the car leaves.`,
    },
    {
      type: "ul",
      items: [
        seed.km <= 25 ? "Ertiga, Swift, or Bike" : "Ertiga or Swift",
        `Pickup in ${seed.fromEn}`,
        `Drop at ${dropEn(seed)}`,
        `Call ${phone}`,
        "No rate card on this page. The fare is confirmed before the car leaves.",
      ],
    },
    { type: "cab", from: seed.fromEn, to: seed.toEn, fromHi: seed.fromHi, toHi: seed.toHi, km: seed.km, bike: seed.km <= 25 },
    { type: "h2", text: "Bus" },
    {
      type: "p",
      text:
        seed.km <= 30
          ? `A bus on this ${seed.km} km road is a thin service. The cab is the reliable seat. The trust names Mortakka bus stand, 12 km from the temple, for buses toward Indore, Ujjain, Khargone and Khandwa.`
          : `Buses use the highway between ${seed.fromEn} and ${seed.toEn}. The trust names Mortakka bus stand, 12 km from the temple, for buses toward Indore, Ujjain, Khargone and Khandwa. This page does not print a timetable. If a bus drops you short of the door, call ${phone} for the last cab.`,
    },
    { type: "h2", text: "Train" },
    {
      type: "p",
      text: `The temple trust names two railheads: Sanawad station at 12 km and Khandwa Junction at 72 km. Mortakka, also called Omkareshwar Road, has had passenger trains suspended since 2023. From ${seed.fromEn}, aim for Khandwa, Indore or Sanawad, then take a cab. This page does not invent train numbers.`,
    },
    { type: "h2", text: "Flight" },
    { type: "p", text: flightEn(seed) },
    { type: "h2", text: seed.toEn === "Omkareshwar" ? "At the temple" : "After the ride" },
    { type: "p", text: endEn(seed) },
  ];
  if (guide) {
    enBlocks.push({ type: "p", text: `A longer note on this road is on [[${seed.guide}|${guide[0]}]].` });
  }

  const hiBlocks: Block[] = [
    { type: "h2", text: "सड़क" },
    { type: "p", text: [roadHi, seed.akaHi].filter(Boolean).join(" ") },
    {
      type: "facts",
      items: [
        { label: "दूरी", value: `लगभग ${seed.km} किलोमीटर` },
        { label: "योजना का समय", value: span(seed.min, "hi") },
        { label: "कैब", value: phone },
        { label: "पिकअप", value: seed.fromHi },
        { label: "ड्रॉप", value: dropHi(seed) },
      ],
    },
    { type: "h2", text: "कैब" },
    {
      type: "p",
      text: `${seed.fromHi} से ${seed.toHi} कैब के लिए ${phone} पर कॉल करें। ${seed.km <= 25 ? "एर्टिगा, स्विफ्ट या बाइक।" : "एर्टिगा या स्विफ्ट। बाइक मोर्टकका जैसी छोटी दूरी के लिए है, इस पूरी सड़क के लिए नहीं।"} किराया कॉल पर या व्हाट्सऐप पर पक्का होता है, गाड़ी निकलने से पहले।`,
    },
    {
      type: "ul",
      items: [
        seed.km <= 25 ? "एर्टिगा, स्विफ्ट या बाइक" : "एर्टिगा या स्विफ्ट",
        `पिकअप ${seed.fromHi} में`,
        `ड्रॉप ${dropHi(seed)} पर`,
        `कॉल ${phone}`,
        "इस पृष्ठ पर किराया सूची नहीं है। किराया गाड़ी निकलने से पहले पक्का होता है।",
      ],
    },
    { type: "cab", from: seed.fromEn, to: seed.toEn, fromHi: seed.fromHi, toHi: seed.toHi, km: seed.km, bike: seed.km <= 25 },
    { type: "h2", text: "बस" },
    {
      type: "p",
      text:
        seed.km <= 30
          ? `इस ${seed.km} किलोमीटर की सड़क पर बस पतली सेवा है। भरोसे की सीट कैब है। ट्रस्ट मोर्टकका बस स्टैंड को, मंदिर से 12 किलोमीटर, इंदौर, उज्जैन, खरगोन और खंडवा की बसों के लिए नाम देता है।`
          : `${seed.fromHi} और ${seed.toHi} के बीच बसें राजमार्ग पर चलती हैं। ट्रस्ट मोर्टकका बस स्टैंड को, मंदिर से 12 किलोमीटर, इंदौर, उज्जैन, खरगोन और खंडवा की बसों के लिए नाम देता है। यह पृष्ठ समय-सारिणी नहीं छापता। बस दरवाजे से पहले उतारे तो आखिरी कैब के लिए ${phone} पर कॉल करें।`,
    },
    { type: "h2", text: "ट्रेन" },
    {
      type: "p",
      text: `मंदिर ट्रस्ट दो रेल पड़ाव नाम देता है: सनावद स्टेशन 12 किलोमीटर और खंडवा जंक्शन 72 किलोमीटर। मोर्टकका, जिसे ओंकारेश्वर रोड भी कहते हैं, 2023 से यात्री गाड़ियों के लिए बंद है। ${seed.fromHi} से खंडवा, इंदौर या सनावद का लक्ष्य रखें, फिर कैब लें। यह पृष्ठ ट्रेन नंबर नहीं गढ़ता।`,
    },
    { type: "h2", text: "फ्लाइट" },
    { type: "p", text: flightHi(seed) },
    { type: "h2", text: seed.toEn === "Omkareshwar" ? "मंदिर पर" : "सवारी के बाद" },
    { type: "p", text: endHi(seed) },
  ];
  if (guide) {
    hiBlocks.push({ type: "p", text: `इस सड़क पर लंबा नोट [[${seed.guide}|${guide[1]}]] पर है।` });
  }

  return {
    slug: seed.slug,
    cluster: "travel",
    kind: "guide",
    updated,
    cab: true,
    sources: seed.sources ?? [],
    related,
    en: {
      title: titleEn,
      description: descriptionEn,
      h1: titleEn,
      kicker: "Cab, bus, train, flight",
      answer: `${seed.fromEn} to ${seed.toEn} is about ${seed.km} km. Cab, bus, train and flight are the ways to plan it. The cab is the ride this page confirms. Call ${phone}.`,
      blocks: enBlocks,
      faqs: [
        {
          q: `How far is ${seed.toEn} from ${seed.fromEn}?`,
          a: `About ${seed.km} km by road. Plan ${span(seed.min, "en")}. ${seed.officialEn ?? "The kilometre is a driving estimate, not a temple-trust figure."}`,
        },
        {
          q: `How do I book a cab from ${seed.fromEn} to ${seed.toEn}?`,
          a: `Call ${phone}, or send the form on WhatsApp. Share the date, the pickup in ${seed.fromEn}, and the drop. The fare is confirmed before the car leaves.`,
        },
        {
          q: "Is there a bus, train, or flight?",
          a: `Buses use the highway. Trains aim for Sanawad or Khandwa, then a cab. The named airport is Indore, 77 km from the temple. This number books the cab, not an air ticket or a rail ticket.`,
        },
        {
          q: "Where is the pickup and the drop?",
          a: `Pickup in ${seed.fromEn}. Drop at ${dropEn(seed)}. Write a hotel, station, or airport in the form if you need a precise point.`,
        },
      ],
    },
    hi: {
      title: titleHi,
      description: descriptionHi,
      h1: titleHi,
      kicker: "कैब, बस, ट्रेन, फ्लाइट",
      answer: `${seed.fromHi} से ${seed.toHi} लगभग ${seed.km} किलोमीटर है। कैब, बस, ट्रेन और फ्लाइट इसी योजना के रास्ते हैं। कैब वह सवारी है जिसे यह पृष्ठ पक्का करता है। कॉल ${phone}।`,
      blocks: hiBlocks,
      faqs: [
        {
          q: `${seed.fromHi} से ${seed.toHi} कितनी दूर है?`,
          a: `सड़क से लगभग ${seed.km} किलोमीटर। ${span(seed.min, "hi")} रखें। ${seed.officialHi ?? "यह किलोमीटर ड्राइविंग अनुमान है, मंदिर ट्रस्ट का अंक नहीं।"}`,
        },
        {
          q: `${seed.fromHi} से ${seed.toHi} कैब कैसे बुक करें?`,
          a: `${phone} पर कॉल करें, या फॉर्म व्हाट्सऐप पर भेजें। तारीख, ${seed.fromHi} में पिकअप, और ड्रॉप लिखें। किराया गाड़ी निकलने से पहले पक्का होता है।`,
        },
        {
          q: "क्या बस, ट्रेन या फ्लाइट है?",
          a: "बसें राजमार्ग पर चलती हैं। ट्रेन का लक्ष्य सनावद या खंडवा है, फिर कैब। नाम वाला हवाई अड्डा इंदौर है, मंदिर से 77 किलोमीटर। यह नंबर कैब बुक करता है, हवाई टिकट या रेल टिकट नहीं।",
        },
        {
          q: "पिकअप और ड्रॉप कहाँ है?",
          a: `पिकअप ${seed.fromHi} में। ड्रॉप ${dropHi(seed)} पर। ठीक जगह चाहिए तो फॉर्म में होटल, स्टेशन या हवाई अड्डा लिखें।`,
        },
      ],
    },
  };
}

const routePages = seeds.map((seed, index) => pageFor(seed, seeds[(index + 1) % seeds.length]?.slug));

const groups: { region: Region; en: string; hi: string }[] = [
  { region: "mp", en: "Madhya Pradesh", hi: "मध्य प्रदेश" },
  { region: "mh", en: "Maharashtra", hi: "महाराष्ट्र" },
  { region: "gj", en: "Gujarat", hi: "गुजरात" },
  { region: "rj", en: "Rajasthan", hi: "राजस्थान" },
  { region: "north", en: "Delhi and the north", hi: "दिल्ली और उत्तर" },
  { region: "east", en: "Other cities", hi: "अन्य शहर" },
  { region: "link", en: "Other roads", hi: "अन्य मार्ग" },
];

function hubList(lang: "en" | "hi", region: Region) {
  const links = seeds
    .filter((seed) => seed.region === region)
    .map((seed) => `[[${seed.slug}|${lang === "en" ? `${seed.fromEn} to ${seed.toEn}` : `${seed.fromHi} से ${seed.toHi}`}]]`);
  if (region === "mp") {
    links.unshift(
      lang === "en" ? "[[mortakka-to-omkareshwar|Mortakka to Omkareshwar]]" : "[[mortakka-to-omkareshwar|मोर्टकका से ओंकारेश्वर]]",
      lang === "en" ? "[[omkareshwar-to-mortakka|Omkareshwar to Mortakka]]" : "[[omkareshwar-to-mortakka|ओंकारेश्वर से मोर्टकका]]",
    );
  }
  return links;
}

function hubBlocks(lang: "en" | "hi"): Block[] {
  const blocks: Block[] = [
    {
      type: "p",
      text:
        lang === "en"
          ? `Every road below ends with a cab you can confirm on ${phone}. Bus, train and flight are the other ways to reach the road. The form on each page sends the cab request on WhatsApp. It does not sell a rail ticket or an air ticket.`
          : `नीचे की हर सड़क उस कैब पर खत्म होती है जिसे ${phone} पर पक्का कर सकते हैं। बस, ट्रेन और फ्लाइट सड़क तक पहुँचने के दूसरे रास्ते हैं। हर पृष्ठ का फॉर्म कैब का अनुरोध व्हाट्सऐप पर भेजता है। वह रेल टिकट या हवाई टिकट नहीं बेचता।`,
    },
  ];
  for (const group of groups) {
    blocks.push({ type: "h2", text: lang === "en" ? group.en : group.hi });
    blocks.push({ type: "ul", items: hubList(lang, group.region) });
  }
  return blocks;
}

const hub: PageDef = {
  slug: "omkareshwar-cab",
  cluster: "travel",
  kind: "guide",
  updated,
  cab: true,
  sources: ["howToReach"],
  related: ["how-to-reach-omkareshwar", "mortakka-to-omkareshwar", "indore-to-omkareshwar", "omkareshwar-from-indore"],
  en: {
    title: pick("hub en title", ["Omkareshwar Cab, Bus & train flight Booking"], 15, 90),
    description: pick(
      "hub en description",
      [
        `Cab, bus, train and flight routes to Omkareshwar from Indore, Mumbai, Ahmedabad, Jaipur, Delhi and other cities. Call ${phone} for a cab.`,
      ],
      70,
      220,
    ),
    h1: "Omkareshwar Cab, Bus & train flight Booking",
    kicker: "Routes",
    answer: `These are the cab roads to Omkareshwar, plus a few return roads. Call ${phone}. Bus, train and flight are listed on each page so the journey can be planned. The number confirms the cab.`,
    blocks: hubBlocks("en"),
    faqs: [
      {
        q: "Which number books the cab?",
        a: `Call ${phone}. You can also send the form on each route page by WhatsApp. The fare is confirmed before the car leaves.`,
      },
      {
        q: "Do you sell bus, train, or flight tickets?",
        a: "No. Those sections tell you how to reach the road. Sanawad and Khandwa are the railheads the temple trust names. The named airport is Indore. The booking on this site is the cab.",
      },
    ],
  },
  hi: {
    title: pick("hub hi title", ["ओंकारेश्वर कैब, बस, ट्रेन और फ्लाइट बुकिंग"], 15, 90),
    description: pick(
      "hub hi description",
      [
        `इंदौर, मुंबई, अहमदाबाद, जयपुर, दिल्ली और अन्य शहरों से ओंकारेश्वर की कैब, बस, ट्रेन और फ्लाइट मार्ग। कैब के लिए ${phone} पर कॉल करें।`,
      ],
      70,
      220,
    ),
    h1: "ओंकारेश्वर कैब, बस, ट्रेन और फ्लाइट बुकिंग",
    kicker: "मार्ग",
    answer: `ये ओंकारेश्वर की कैब सड़कें हैं, और कुछ वापसी की सड़कें। कॉल ${phone}। बस, ट्रेन और फ्लाइट हर पृष्ठ पर हैं ताकि यात्रा की योजना बन सके। नंबर कैब पक्का करता है।`,
    blocks: hubBlocks("hi"),
    faqs: [
      {
        q: "कैब कौन सा नंबर बुक करता है?",
        a: `${phone} पर कॉल करें। हर मार्ग के पृष्ठ पर फॉर्म व्हाट्सऐप से भी भेज सकते हैं। किराया गाड़ी निकलने से पहले पक्का होता है।`,
      },
      {
        q: "क्या आप बस, ट्रेन या फ्लाइट का टिकट बेचते हैं?",
        a: "नहीं। वे अनुभाग बताते हैं कि सड़क तक कैसे पहुँचें। सनावद और खंडवा वे रेल पड़ाव हैं जिन्हें मंदिर ट्रस्ट नाम देता है। नाम वाला हवाई अड्डा इंदौर है। इस साइट की बुकिंग कैब है।",
      },
    ],
  },
};

export const cabRoutePages: PageDef[] = [hub, ...routePages];
