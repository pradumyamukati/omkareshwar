import { hotelDetailUrl, hotelPicks } from "@/lib/hotel-picks";
import type { Lang } from "@/lib/types";
import { ExternalLink } from "./RichText";

const kindLabel = {
  en: { hotel: "Hotel", resort: "Resort" },
  hi: { hotel: "होटल", resort: "रिसॉर्ट" },
} as const;

export function HotelPicks({ lang }: { lang: Lang }) {
  const place = lang === "en" ? "Omkareshwar, Madhya Pradesh" : "ओंकारेश्वर, मध्य प्रदेश";
  return (
    <ul className="stay-grid">
      {hotelPicks.map((stay) => (
        <li key={stay.id}>
          <ExternalLink className="stay-card" href={hotelDetailUrl(stay.id)}>
            <img src={stay.image} alt={stay.name} />
            <span className="stay-kind">{kindLabel[lang][stay.kind]}</span>
            <strong>{stay.name}</strong>
            <span className="stay-place">{place}</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
