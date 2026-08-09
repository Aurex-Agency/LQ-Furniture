import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
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
  themeColor: "#FAF7F1",
};

const directionContract = `<!--
THESIS: The furniture makeover show, playing on a bright set. A warehouse whose floor changes weekly, shown the way this audience already watches rooms come to life on TV. Refuses both the dark brutalist rendition the client rejected and the generic white e-commerce grid.
OWN-WORLD: Warm paper field #FAF7F1, cream and sand surfaces, warm ink text, one working green #6BB22E as the action color that always carries ink text (#3E6B1A is its only text form on light). Archivo wide for episode-title display and lower-third caption bars, Newsreader for warm body. 6px control radius, square full-bleed photography, soft lift shadows only on raised controls.
STORY: A North Mississippi family on a phone sees the floor like a reveal segment, believes the savings because the scarcity is real, and either joins the text list or calls about financing before driving to Tupelo.
FIRST VIEWPORT: Full-bleed floor photo with a slow settle zoom, headline block on the paper field beneath it, both conversion doors in view; a ticker of store facts runs under it like a broadcast strip.
FORM: Replacement world assigned by direction roll, seed key 3f585062: the HGTV reveal grammar, candidate 5 of the grounded list. Homepage structure retained from surface roll 6e5352b2 (the deal board). Guide route: /style-guide.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
