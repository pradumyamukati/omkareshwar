"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/types";

const bookingLine = "919685392846";

type Direction = "to-mortakka" | "to-omkareshwar";

const copy = {
  en: {
    heading: "Book your ride now",
    routeTo: "Route: Omkareshwar → Mortakka (12 km)",
    routeFrom: "Route: Mortakka → Omkareshwar (12 km)",
    direction: "Direction",
    toMortakka: "Omkareshwar to Mortakka",
    toOmkareshwar: "Mortakka to Omkareshwar",
    name: "Name",
    mobile: "Mobile number",
    persons: "Number of persons",
    vehicle: "Vehicle",
    date: "Travel date",
    time: "Arrival time",
    pickup: "Pickup point",
    drop: "Drop point",
    notes: "Special instructions",
    notesPh: "Train number, hotel name, or anything the driver should know",
    send: "Send booking on WhatsApp",
    note: "Booking confirmation will be sent to you on WhatsApp.",
    alert: "Please fill all required fields.",
    ertiga: "Ertiga",
    swift: "Swift",
    bike: "Bike",
    other: "Other",
    temple: "Omkareshwar Temple area",
    omBus: "Omkareshwar Bus Stand",
    hotel: "Hotel or guesthouse",
    rail: "Mortakka Railway Station",
    bus: "Mortakka Bus Stand",
  },
  hi: {
    heading: "अभी अपनी सवारी बुक करें",
    routeTo: "मार्ग: ओंकारेश्वर → मोर्टकका (12 किलोमीटर)",
    routeFrom: "मार्ग: मोर्टकका → ओंकारेश्वर (12 किलोमीटर)",
    direction: "दिशा",
    toMortakka: "ओंकारेश्वर से मोर्टकका",
    toOmkareshwar: "मोर्टकका से ओंकारेश्वर",
    name: "नाम",
    mobile: "मोबाइल नंबर",
    persons: "यात्रियों की संख्या",
    vehicle: "वाहन",
    date: "यात्रा की तारीख",
    time: "पहुँचने का समय",
    pickup: "पिकअप",
    drop: "ड्रॉप",
    notes: "विशेष निर्देश",
    notesPh: "ट्रेन नंबर, होटल का नाम, या ड्राइवर के लिए कोई बात",
    send: "व्हाट्सऐप पर बुकिंग भेजें",
    note: "बुकिंग की पुष्टि व्हाट्सऐप पर भेजी जाएगी।",
    alert: "कृपया सभी जरूरी खाने भरें।",
    ertiga: "एर्टिगा",
    swift: "स्विफ्ट",
    bike: "बाइक",
    other: "अन्य",
    temple: "ओंकारेश्वर मंदिर क्षेत्र",
    omBus: "ओंकारेश्वर बस स्टैंड",
    hotel: "होटल या गेस्टहाउस",
    rail: "मोर्टकका रेलवे स्टेशन",
    bus: "मोर्टकका बस स्टैंड",
  },
} as const;

export function MortakkaBooking({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [direction, setDirection] = useState<Direction>("to-mortakka");
  const toMortakka = direction === "to-mortakka";
  const pickups = useMemo(
    () =>
      toMortakka
        ? [
            [t.temple, "Omkareshwar Temple Area"],
            [t.omBus, "Omkareshwar Bus Stand"],
            [t.hotel, "Hotel or guesthouse"],
            [t.other, "Other"],
          ]
        : [
            [t.rail, "Mortakka Railway Station"],
            [t.bus, "Mortakka Bus Stand"],
            [t.other, "Other"],
          ],
    [t, toMortakka],
  );
  const drops = useMemo(
    () =>
      toMortakka
        ? [
            [t.rail, "Mortakka Railway Station"],
            [t.bus, "Mortakka Bus Stand"],
            [t.other, "Other"],
          ]
        : [
            [t.temple, "Omkareshwar Temple Area"],
            [t.omBus, "Omkareshwar Bus Stand"],
            [t.hotel, "Hotel or guesthouse"],
            [t.other, "Other"],
          ],
    [t, toMortakka],
  );

  function send(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const persons = String(data.get("persons") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();
    const pickup = String(data.get("pickup") || "").trim();
    const drop = String(data.get("drop") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    if (!name || !mobile || !persons || !vehicle || !date || !time || !pickup || !drop) {
      window.alert(t.alert);
      return;
    }
    const route = toMortakka ? "Omkareshwar → Mortakka (12 km)" : "Mortakka → Omkareshwar (12 km)";
    const title = toMortakka ? "OMKARESHWAR TO MORTAKKA" : "MORTAKKA TO OMKARESHWAR";
    const lines = [
      `🚕 *CAB / BIKE BOOKING — ${title}* 🚕`,
      "",
      `🛣️ *Route:* ${route}`,
      "",
      `👤 *Name:* ${name}`,
      `📱 *Mobile:* ${mobile}`,
      `👥 *Persons:* ${persons}`,
      `🚗 *Vehicle:* ${vehicle}`,
      `📅 *Date:* ${date}`,
      `⏰ *Arrival Time:* ${time}`,
      `📍 *Pickup:* ${pickup}`,
      `🏁 *Drop:* ${drop}`,
    ];
    if (notes) lines.push("", `📝 *Notes:* ${notes}`);
    lines.push("", "✅ Please confirm my booking.");
    const href = `https://wa.me/${bookingLine}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="ride-form"
      onSubmit={(event) => {
        event.preventDefault();
        send(event.currentTarget);
      }}
    >
      <h2>{t.heading}</h2>
      <p className="ride-route">{toMortakka ? t.routeTo : t.routeFrom}</p>
      <label>
        {t.direction}
        <select name="direction" value={direction} onChange={(event) => setDirection(event.target.value as Direction)}>
          <option value="to-mortakka">{t.toMortakka}</option>
          <option value="to-omkareshwar">{t.toOmkareshwar}</option>
        </select>
      </label>
      <label>
        {t.name}
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        {t.mobile}
        <input name="mobile" type="tel" required autoComplete="tel" inputMode="tel" />
      </label>
      <div className="ride-pair">
        <label>
          {t.persons}
          <input name="persons" type="number" required min={1} max={7} inputMode="numeric" />
        </label>
        <label>
          {t.vehicle}
          <select name="vehicle" required defaultValue="">
            <option value="" disabled>
              {t.vehicle}
            </option>
            <option value="Ertiga">{t.ertiga}</option>
            <option value="Swift">{t.swift}</option>
            <option value="Bike">{t.bike}</option>
          </select>
        </label>
      </div>
      <div className="ride-pair">
        <label>
          {t.date}
          <input name="date" type="date" required />
        </label>
        <label>
          {t.time}
          <input name="time" type="time" required />
        </label>
      </div>
      <label>
        {t.pickup}
        <select name="pickup" required defaultValue={pickups[0][1]} key={`pickup-${direction}`}>
          {pickups.map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t.drop}
        <select name="drop" required defaultValue={drops[0][1]} key={`drop-${direction}`}>
          {drops.map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t.notes}
        <textarea name="notes" rows={3} placeholder={t.notesPh} />
      </label>
      <button className="ride-send" type="submit">
        {t.send}
      </button>
      <p className="ride-hint">{t.note}</p>
    </form>
  );
}
