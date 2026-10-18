"use client";

import { useState } from "react";
import type { Lang } from "@/lib/types";

const bookingLine = "919685392846";

const copy = {
  en: {
    heading: "Cab booking",
    name: "Name",
    mobile: "Mobile number",
    persons: "Number of persons",
    vehicle: "Vehicle",
    date: "Travel date",
    time: "Pickup time",
    pickup: "Pickup point",
    drop: "Drop point",
    notes: "Special instructions",
    notesPh: "Train number, flight time, hotel name, or anything the driver should know",
    send: "Send booking on WhatsApp",
    inquiry: "Call or WhatsApp",
    note: "Confirmation comes back on WhatsApp with the driver and the vehicle.",
    alert: "Please fill all required fields.",
    ertiga: "Ertiga",
    swift: "Swift",
    bike: "Bike",
  },
  hi: {
    heading: "कैब बुकिंग",
    name: "नाम",
    mobile: "मोबाइल नंबर",
    persons: "यात्रियों की संख्या",
    vehicle: "वाहन",
    date: "यात्रा की तारीख",
    time: "पिकअप का समय",
    pickup: "पिकअप",
    drop: "ड्रॉप",
    notes: "विशेष निर्देश",
    notesPh: "ट्रेन नंबर, फ्लाइट का समय, होटल का नाम, या ड्राइवर के लिए कोई बात",
    send: "व्हाट्सऐप पर बुकिंग भेजें",
    inquiry: "कॉल या व्हाट्सऐप",
    note: "पुष्टि व्हाट्सऐप पर आती है, ड्राइवर और वाहन के साथ।",
    alert: "कृपया सभी जरूरी खाने भरें।",
    ertiga: "एर्टिगा",
    swift: "स्विफ्ट",
    bike: "बाइक",
  },
} as const;

export function CabBooking({
  lang,
  from,
  to,
  fromHi,
  toHi,
  km,
  bike,
}: {
  lang: Lang;
  from: string;
  to: string;
  fromHi: string;
  toHi: string;
  km: number;
  bike?: boolean;
}) {
  const t = copy[lang];
  const fromName = lang === "en" ? from : fromHi;
  const toName = lang === "en" ? to : toHi;
  const [pickup, setPickup] = useState(fromName);
  const [drop, setDrop] = useState(to === "Omkareshwar" ? (lang === "en" ? "Omkareshwar Temple area" : "ओंकारेश्वर मंदिर क्षेत्र") : toName);

  function send(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const persons = String(data.get("persons") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();
    const pickupValue = String(data.get("pickup") || "").trim();
    const dropValue = String(data.get("drop") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    if (!name || !mobile || !persons || !vehicle || !date || !time || !pickupValue || !dropValue) {
      window.alert(t.alert);
      return;
    }
    const lines = [
      `🚕 *CAB BOOKING — ${from.toUpperCase()} TO ${to.toUpperCase()}* 🚕`,
      "",
      `🛣️ *Route:* ${from} → ${to} (about ${km} km)`,
      "",
      `👤 *Name:* ${name}`,
      `📱 *Mobile:* ${mobile}`,
      `👥 *Persons:* ${persons}`,
      `🚗 *Vehicle:* ${vehicle}`,
      `📅 *Date:* ${date}`,
      `⏰ *Pickup Time:* ${time}`,
      `📍 *Pickup:* ${pickupValue}`,
      `🏁 *Drop:* ${dropValue}`,
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
      <p className="ride-route">
        {fromName} → {toName} · {km} {lang === "en" ? "km" : "किमी"}
      </p>
      <p className="ride-line">
        {t.inquiry}:{" "}
        <a href={`https://wa.me/${bookingLine}`} target="_blank" rel="nofollow noopener noreferrer">
          +91 96853 92846
        </a>
      </p>
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
          <select name="vehicle" required defaultValue="Ertiga">
            <option value="Ertiga">{t.ertiga}</option>
            <option value="Swift">{t.swift}</option>
            {bike ? <option value="Bike">{t.bike}</option> : null}
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
        <input name="pickup" type="text" required value={pickup} onChange={(event) => setPickup(event.target.value)} />
      </label>
      <label>
        {t.drop}
        <input name="drop" type="text" required value={drop} onChange={(event) => setDrop(event.target.value)} />
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
