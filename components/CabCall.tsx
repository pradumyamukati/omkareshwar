"use client";

import { useState } from "react";
import type { Lang } from "@/lib/types";

const dial = "+919685392846";
const shown = "+91 96853 92846";

function copyDial() {
  try {
    const field = document.createElement("textarea");
    field.value = dial;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.left = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.focus();
    field.select();
    field.setSelectionRange(0, dial.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    if (ok) return;
  } catch {
    /* fall through to the async clipboard */
  }
  void navigator.clipboard?.writeText(dial);
}

export function CabCall({ lang }: { lang: Lang }) {
  const [copied, setCopied] = useState(false);
  const label = lang === "en" ? "Call for cab" : "कैब के लिए कॉल";
  const copiedLabel = lang === "en" ? "Number copied" : "नंबर कॉपी हो गया";

  return (
    <p className="cab-call">
      <a
        href={`tel:${dial}`}
        onClick={() => {
          copyDial();
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2500);
        }}
      >
        <span className="cab-call-label">{label}</span>
        <span className="cab-call-num">{shown}</span>
      </a>
      {copied ? (
        <span className="cab-call-copied" role="status">
          {copiedLabel}
        </span>
      ) : null}
    </p>
  );
}
