/**
 * Verified on 5 October 2026 by opening the temple trust and
 * Madhya Pradesh Tourism pages. Do not add a URL that has not been checked.
 */
export const officialSources = {
  templeWebsite: "https://shriomkareshwar.org/",
  liveDarshan: "https://shriomkareshwar.org/LiveDarshan.aspx",
  darshanBooking: "https://shriomkareshwar.org/OnlineTicketBooking.aspx",
  pujaBooking: "https://shriomkareshwar.org/AbhishekPuja.aspx",
  abhishekBooking: "https://shriomkareshwar.org/AbhishekPuja.aspx",
  timetable: "https://shriomkareshwar.org/DailyDarshan.aspx",
  howToReach: "https://www.shriomkareshwar.org/HowToReach.aspx",
  parikrama: "https://www.shriomkareshwar.org/Parikrama.aspx",
  vishramalaya: "https://www.shriomkareshwar.org/Vishramalaya.aspx",
  faq: "https://www.shriomkareshwar.org/FAQ.aspx",
  rules: "https://shriomkareshwar.org/Rules.aspx",
  schedules: "https://shriomkareshwar.org/Schedules.aspx",
  shighraInfo: "https://shriomkareshwar.org/VisheshDarshan.aspx",
  news: "https://shriomkareshwar.org/LatestNews.aspx",
  mpTourism: "https://www.mptourism.com/destination-omkareshwar.php",
  youtubeLive:
    "https://www.youtube.com/embed/live_stream?channel=UCsIZ3yYwCW4316fPX3V-4lg",
  youtubeChannel: "https://www.youtube.com/@Shriomkareshwar",
} as const;

export type OfficialKey = keyof typeof officialSources;

export const sourceCatalog: Record<
  OfficialKey,
  { en: string; hi: string }
> = {
  templeWebsite: {
    en: "Official Shri Omkareshwar Jyotirlinga website",
    hi: "श्री ओंकारेश्वर ज्योतिर्लिंग की आधिकारिक वेबसाइट",
  },
  liveDarshan: {
    en: "Official live darshan page, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक लाइव दर्शन पृष्ठ, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  darshanBooking: {
    en: "Official Shighra Darshan booking, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक शीघ्र दर्शन बुकिंग, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  pujaBooking: {
    en: "Official Abhishek booking, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक अभिषेक बुकिंग, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  abhishekBooking: {
    en: "Official Abhishek booking, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक अभिषेक बुकिंग, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  timetable: {
    en: "Official daily darshan timetable, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक दैनिक दर्शन समय-सारिणी, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  howToReach: {
    en: "Official how-to-reach page, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक कैसे पहुँचें पृष्ठ, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  parikrama: {
    en: "Official parikrama page, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक परिक्रमा पृष्ठ, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  vishramalaya: {
    en: "Official Shri Ji Vishramalaya page, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक श्री जी विश्रामालय पृष्ठ, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  faq: {
    en: "Official FAQ, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक प्रश्नोत्तर, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  rules: {
    en: "Official rules, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक नियम, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  schedules: {
    en: "Official day schedule, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक दिनचर्या, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  shighraInfo: {
    en: "Official Shighra Darshan information, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक शीघ्र दर्शन जानकारी, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  news: {
    en: "Official temple news page, Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक मंदिर समाचार पृष्ठ, श्री ओंकारेश्वर मंदिर ट्रस्ट",
  },
  mpTourism: {
    en: "Madhya Pradesh Tourism — Omkareshwar",
    hi: "मध्य प्रदेश पर्यटन — ओंकारेश्वर",
  },
  youtubeLive: {
    en: "Official YouTube live stream embedded by Shri Omkareshwar Mandir Trust",
    hi: "आधिकारिक यूट्यूब लाइव धारा, जिसे श्री ओंकारेश्वर मंदिर ट्रस्ट जोड़ता है",
  },
  youtubeChannel: {
    en: "Official YouTube channel, Shri Omkareshwar",
    hi: "आधिकारिक यूट्यूब चैनल, श्री ओंकारेश्वर",
  },
};

export const allowedExternalHosts = [
  "shriomkareshwar.org",
  "www.shriomkareshwar.org",
  "mptourism.com",
  "www.mptourism.com",
  "creativecommons.org",
  "commons.wikimedia.org",
  "www.openstreetmap.org",
  "openstreetmap.org",
  "www.youtube.com",
  "youtube.com",
];
