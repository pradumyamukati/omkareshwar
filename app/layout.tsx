import type { Metadata, Viewport } from "next";
import { Poppins, Source_Sans_3, Noto_Sans_Devanagari } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import { Footer, Header } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/paths";
import { site } from "@/lib/site";
import "./globals.css";

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});
const hindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "600", "700"], variable: "--font-hindi" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { absolute: "Omkareshwar – Jyotirlinga, Temple, Darshan & Travel Guide" },
  description: site.description.en,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-JZTKS2G7PS";
  if (!/^G-[A-Z0-9]+$/i.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const path = (await headers()).get("x-pathname") || "/";
  const lang = path === "/hi" || path.startsWith("/hi/") ? "hi" : "en";
  const ampHref = `${absoluteUrl(path)}?amp=1`;
  return (
    <html lang={lang} className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <body style={{ fontFamily: "var(--font-body), var(--font-hindi), sans-serif" }}>
        <link rel="amphtml" href={ampHref} />
        <JsonLd data={siteJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
