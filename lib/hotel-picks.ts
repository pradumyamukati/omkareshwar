export const hotelSite = "https://omkareshwarhotel.com";

export const hotelPicks = [
  {
    id: "narmada-hills-resort",
    name: "Narmada Hills Resort",
    kind: "resort" as const,
    image: "/stays/narmada-hills-resort.webp",
  },
  {
    id: "mpt-sailani-island-resort",
    name: "MPT Sailani Island Resort",
    kind: "resort" as const,
    image: "/stays/mpt-sailani-island-resort.jpg",
  },
  {
    id: "grand-omkara",
    name: "The Grand Omkara Hotel & Resorts",
    kind: "resort" as const,
    image: "/stays/grand-omkara.jpg",
  },
  {
    id: "shankara-view",
    name: "The Shankara View",
    kind: "hotel" as const,
    image: "/stays/shankara-view.jpg",
  },
  {
    id: "panchavati-palace",
    name: "Hotel Panchavati Palace",
    kind: "hotel" as const,
    image: "/stays/panchavati-palace.jpg",
  },
  {
    id: "gurukripa-inn",
    name: "Hotel Gurukripa Inn",
    kind: "hotel" as const,
    image: "/stays/gurukripa-inn.jpg",
  },
  {
    id: "shrine-hotel",
    name: "The Shrine Hotel",
    kind: "hotel" as const,
    image: "/stays/shrine-hotel.jpg",
  },
  {
    id: "radhe-krishna",
    name: "Hotel Shri Radhe Krishna",
    kind: "hotel" as const,
    image: "/stays/radhe-krishna.jpg",
  },
  {
    id: "royal-inn",
    name: "Hotel Royal Inn",
    kind: "hotel" as const,
    image: "/stays/royal-inn.jpg",
  },
];

export function hotelDetailUrl(id: string) {
  return `${hotelSite}/hotel/${id}/`;
}
