import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found – Omkareshwar.co" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <article id="content">
      <h1>Page not found</h1>
      <p>यह पृष्ठ नहीं मिला। The address is not a page on this guide.</p>
      <p>
        <Link href="/">Omkareshwar</Link>
      </p>
    </article>
  );
}
