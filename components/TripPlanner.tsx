"use client";

import { useState } from "react";
import type { Lang } from "@/lib/types";

type Plan = {
  city: string;
  days: string;
  party: string;
  title: string;
  text: string;
};

export function TripPlanner({ lang, plans }: { lang: Lang; plans: Plan[] }) {
  const [city, setCity] = useState("all");
  const [days, setDays] = useState("all");
  const [party, setParty] = useState("all");
  const visible = plans.filter(
    (plan) =>
      (city === "all" || plan.city === city) &&
      (days === "all" || plan.days === days) &&
      (party === "all" || plan.party === party),
  );
  const labels =
    lang === "en"
      ? {
          city: "Starting city",
          days: "Trip duration",
          party: "Travelling with",
          all: "All",
          one: "One day",
          two: "Two days",
          family: "Family or elders",
          general: "General",
        }
      : {
          city: "प्रस्थान शहर",
          days: "यात्रा की अवधि",
          party: "साथ में कौन",
          all: "सभी",
          one: "एक दिन",
          two: "दो दिन",
          family: "परिवार या बुजुर्ग",
          general: "सामान्य",
        };
  return (
    <div className="planner">
      <div className="planner-controls">
        <label>
          {labels.city}
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="all">{labels.all}</option>
            <option value="indore">Indore / इंदौर</option>
            <option value="ujjain">Ujjain / उज्जैन</option>
            <option value="khandwa">Khandwa / खंडवा</option>
            <option value="bhopal">Bhopal / भोपाल</option>
          </select>
        </label>
        <label>
          {labels.days}
          <select value={days} onChange={(event) => setDays(event.target.value)}>
            <option value="all">{labels.all}</option>
            <option value="1">{labels.one}</option>
            <option value="2">{labels.two}</option>
          </select>
        </label>
        <label>
          {labels.party}
          <select value={party} onChange={(event) => setParty(event.target.value)}>
            <option value="all">{labels.all}</option>
            <option value="family">{labels.family}</option>
            <option value="general">{labels.general}</option>
          </select>
        </label>
      </div>
      <div className="plan-list">
        {visible.map((plan) => (
          <article key={`${plan.city}-${plan.days}-${plan.party}`}>
            <h3>{plan.title}</h3>
            <p>{plan.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
