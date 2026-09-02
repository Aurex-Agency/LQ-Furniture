import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const bebas = localFont({
  src: "../fonts/BebasNeue-Regular.otf",
  variable: "--font-bebas",
  display: "swap",
});

const switzer = localFont({
  src: "../fonts/Switzer-Regular.otf",
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LQ Furniture | Furniture Warehouse in Tupelo, MS",
    template: "%s | LQ Furniture",
  },
  description:
    "LQ Furniture is a high-volume furniture warehouse in Tupelo, Mississippi. Limited Quantities + Unlimited Savings. Financing available. Come see the floor.",
};

export const viewport: Viewport = {
  themeColor: "#131311",
};

const directionContract = `<!--
THESIS: The lit sign on a clean shop. A professional, crisply structured dark site whose character lives in working neon: signs that know the store clock, fixtures you can touch. Refuses the moody serif showroom, the cream build, and the brutalist ink build.
OWN-WORLD: Night charcoal field with crisp hairline structure, no atmospheric pools. Lamp text, fog secondary. Client-supplied pairing: Bebas Neue, the American signage letter, for display and the signs; Switzer for body and small tracked labels. Neon green sign system: the live open/closed sign with tube buzz, static signs, the tube arrow, glow on primary actions. 6px controls, deep shadows under photographs only.
STORY: A North Mississippi family gets a clean, fast, obviously professional site with a lit sign burning in the corner, plays with the floor filters and the FAQ, and either joins the text list, calls about financing, or drives to Tupelo.
FIRST VIEWPORT: Full-bleed floor photo, heavy grotesk statement, the live sign burning top right, both doors beneath.
FORM: Client-pinned refinement of the night world (rolls e1b2fdb5, 6e5352b2 retained): neon vibe, clean and professional, character, interactive. Pages: home, the-floor, financing, text-list, visit, blog, contact, privacy.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${switzer.variable}`}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
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
