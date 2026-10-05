export const place = {
  state: { en: "Madhya Pradesh", hi: "मध्य प्रदेश" },
  district: { en: "Khandwa", hi: "खंडवा" },
  pin: "450554",
  river: { en: "Narmada", hi: "नर्मदा" },
  island: { en: "Mandhata", hi: "मांधाता" },
  trust: {
    en: "Shri Omkareshwar Mandir Trust",
    hi: "श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  address: {
    en: "Shri Omkareshwar Mandir Trust, Omkareshwar, Dist. Khandwa, Pin 450554",
    hi: "श्री ओंकारेश्वर मंदिर ट्रस्ट, ओंकारेश्वर, जिला खंडवा, पिन 450554",
  },
  helpline: "+91 8989998686",
  helplineHours: { en: "8:00 AM to 8:00 PM", hi: "सुबह 8 से रात 8 बजे तक" },
  email: "shriomkareshwar@gmail.com",
  /** Camera position on the 26 October 2021 temple photograph. */
  latitude: 22.243486,
  longitude: 76.150892,
};

export const schedule = [
  ["4:30–5:00 AM", "Mangal aarti and bhog", "मंगला आरती और भोग"],
  ["5:00 AM–12:20 PM", "Mangal darshan", "मंगल दर्शन"],
  ["12:20–1:15 PM", "Madhyanha bhog — darshan closed", "मध्याह्न भोग — दर्शन बंद"],
  ["1:15–4:00 PM", "Madhyanha darshan", "मध्याह्न दर्शन"],
  ["4:00–4:30 PM", "Sayamkalin shringar", "सायंकालीन श्रृंगार"],
  ["4:30–9:30 PM", "Shringar darshan", "श्रृंगार दर्शन"],
  ["9:30–10:00 PM", "Shayan aarti", "शयन आरती"],
  ["10:00–10:30 PM", "Shayan darshan", "शयन दर्शन"],
] as const;

export const liveSessions = [
  ["Morning", "सुबह", "5:30 AM–12:20 PM"],
  ["Afternoon", "दोपहर", "1:15 PM–4:00 PM"],
  ["Evening", "शाम", "4:45 PM–8:30 PM"],
] as const;
