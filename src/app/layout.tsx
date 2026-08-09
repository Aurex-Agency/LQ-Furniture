import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
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
THESIS: The showroom at night. A warehouse of real furniture presented like lit window displays after hours, premium and unhurried. Refuses the flat brutalist ink build, the bright cream build, and the white e-commerce grid, all three now dead.
OWN-WORLD: Warm charcoal night #131311 lit in radial lamp pools, never flat. Lamp white text, fog secondary. LQ green exists as the neon sign and the primary action only; green surfaces carry night text. Libre Caslon Display sentence-case display over Hanken Grotesk body and tracked-caps labels. 4px controls, deep soft shadows under photographs, square imagery.
STORY: A North Mississippi family window-shops the lit floor from their phone at night, feels the quality, and either joins the text list, calls about financing, or drives to Tupelo when the sign turns on.
FIRST VIEWPORT: A spotlit floor photograph in the dark with the serif statement over it, the neon hours sign burning in the corner, both conversion doors beneath.
FORM: Third world, assigned by direction roll e1b2fdb5: the night showroom, candidate 7. Deal-board structure retained on /the-floor (surface roll 6e5352b2). Multi-page: home, the-floor, financing, visit, privacy.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caslon.variable} ${hanken.variable}`}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
