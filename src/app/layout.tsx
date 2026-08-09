import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-schibsted",
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
OWN-WORLD: Night charcoal field with crisp hairline structure, no atmospheric pools. Lamp text, fog secondary. One family, Schibsted Grotesk: heavy tight display in sentence case, medium body, small caps labels. Neon green sign system: the live open/closed sign with tube buzz, static signs, the tube arrow, glow on primary actions. 6px controls, deep shadows under photographs only.
STORY: A North Mississippi family gets a clean, fast, obviously professional site with a lit sign burning in the corner, plays with the floor filters and the FAQ, and either joins the text list, calls about financing, or drives to Tupelo.
FIRST VIEWPORT: Full-bleed floor photo, heavy grotesk statement, the live sign burning top right, both doors beneath.
FORM: Client-pinned refinement of the night world (rolls e1b2fdb5, 6e5352b2 retained): neon vibe, clean and professional, character, interactive. Pages: home, the-floor, financing, text-list, visit, blog, contact, privacy.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
