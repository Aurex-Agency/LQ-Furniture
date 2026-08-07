import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader, DM_Mono } from "next/font/google";
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

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
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
  themeColor: "#0C0C0B",
};

const directionContract = `<!--
THESIS: A warehouse floor that moves fast, shown honestly on a near-black field. Refuses the cream-and-serif furniture-boutique template and the e-commerce grid it can never be.
OWN-WORLD: Ink field #0C0C0B, bone text, ash secondary, one working green #6BB22E used only as signal (primary button, SOLD stamp, active chip, days-on-floor numeral, one hairline). Archivo expanded uppercase display, Newsreader body, DM Mono data. Radius 0 structural, 2px controls. Full-bleed photography, no cards, no gradients.
STORY: A North Mississippi family on a phone sees real inventory moving, believes the savings are real because the scarcity is real, and either joins the text list or gets pre-approved before driving to Tupelo.
FIRST VIEWPORT: Established per page in later phases; Phase 1 ships tokens and the style guide.
FORM: Brief-pinned world from the client; no concept roll. Guide route: /style-guide.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${dmMono.variable}`}
    >
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
