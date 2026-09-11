import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import "./globals.css";

const bebas = localFont({
  src: "../fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas",
  display: "swap",
});

const switzer = localFont({
  src: "../fonts/Switzer-Regular.woff2",
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute base for canonical URLs, Open Graph images, and anything else
  // that must not resolve relative. Without it Next emits relative social
  // image paths, which every scraper rejects.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LQ Furniture | Furniture Warehouse in Tupelo, MS",
    template: "%s | LQ Furniture",
  },
  description:
    "LQ Furniture is a high-volume furniture warehouse in Tupelo, Mississippi. Limited Quantities + Unlimited Savings. Financing available. Come see the floor.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "LQ Furniture",
    locale: "en_US",
    url: "/",
    title: "LQ Furniture | Furniture Warehouse in Tupelo, MS",
    description:
      "A high-volume furniture warehouse in Tupelo, Mississippi. Limited Quantities + Unlimited Savings. Financing available. Come see the floor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LQ Furniture | Furniture Warehouse in Tupelo, MS",
    description:
      "A high-volume furniture warehouse in Tupelo, Mississippi. Limited Quantities + Unlimited Savings. Financing available. Come see the floor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#131311",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${switzer.variable}`}>
      <head>
        {/* Google Analytics 4, written as the plain gtag snippet rather than
            through next/script.

            This matters for more than style. next/script with
            afterInteractive does not put a script element in the served
            HTML: the page ships a <link rel="preload"> plus the script's
            definition inside React's serialized payload, and the real
            elements only exist once React has hydrated in the browser.
            Google Tag Assistant, GA's own "test installation" check, and
            anything else that reads the raw HTML therefore find no tag and
            report the site as untagged.

            Rendered here in <head> as a real element, the tag is present in
            the first byte of HTML. `async` keeps it off the critical path,
            so this does not block the hero photograph.

            googletagmanager.com and google-analytics.com are allowlisted in
            the Content Security Policy in next.config.ts; without that this
            would fail silently. Disclosed in /privacy. */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
          }}
        />
      </head>
      <body>
        {children}
        <AnalyticsEvents />
        {/* Metricool visitor analytics, the client's own tracking hash.
            Loaded after the page is interactive so it never competes with
            the hero photograph for bandwidth. Disclosed in /privacy. */}
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"7acaecc99a26af78f513bcc4c2da4451"})});`}
        </Script>
      </body>
    </html>
  );
}
