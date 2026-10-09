"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { homeSlides } from "@/lib/media";
import type { Lang } from "@/lib/types";

export function HomeCarousel({ lang }: { lang: Lang }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = homeSlides.length;
  const hi = lang === "hi";

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  const slide = homeSlides[index];

  return (
    <section
      className="home-carousel"
      aria-roledescription="carousel"
      aria-label={hi ? "ओंकारेश्वर की तस्वीरें" : "Omkareshwar photographs"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
    >
      <div className="carousel-frame">
        {homeSlides.map((item, i) => (
          <div key={item.src} className={i === index ? "carousel-slide is-active" : "carousel-slide"} hidden={i !== index}>
            <Image
              src={item.src}
              alt={item.alt[lang]}
              title={item.alt[lang]}
              fill
              priority={i === 0}
              sizes="100vw"
              className="carousel-img"
            />
          </div>
        ))}
        <button
          type="button"
          className="carousel-btn prev"
          onClick={() => go(index - 1)}
          aria-label={hi ? "पिछली ओंकारेश्वर तस्वीर" : "Previous Omkareshwar photograph"}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn next"
          onClick={() => go(index + 1)}
          aria-label={hi ? "अगली ओंकारेश्वर तस्वीर" : "Next Omkareshwar photograph"}
        >
          ›
        </button>
        <div className="carousel-caption">
          <strong>{slide.label[lang]}</strong>
        </div>
        <div className="carousel-dots" role="tablist" aria-label={hi ? "तस्वीर चुनें" : "Choose a photograph"}>
          {homeSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={item.label[lang]}
              className={i === index ? "is-active" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
