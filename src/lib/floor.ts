export type FloorCategory =
  | "living"
  | "dining"
  | "bedroom"
  | "recliners"
  | "mattresses"
  | "lamps";

export const CATEGORY_LABELS: Record<FloorCategory, string> = {
  living: "Living room",
  dining: "Dining",
  bedroom: "Bedroom",
  recliners: "Recliners",
  mattresses: "Mattresses",
  lamps: "Lamps and decor",
};

export type FloorItem = {
  id: string;
  src: string;
  alt: string;
  name: string;
  category: FloorCategory;
  sold: boolean;
};

// Every photo below was shot on the LQ floor. The board rotates as the
// floor does; sold pieces keep their stamp until the next refresh.
//
// PLACEHOLDER DATA: the `sold` flags are authored to demonstrate the stamp
// moment and are not live inventory status. Confirm which pieces are
// actually gone with LQ before launch, and keep the flags in sync with the
// floor after that.
export const FLOOR_ITEMS: FloorItem[] = [
  {
    id: "8587",
    src: "/photos/IMG_8587.jpg",
    alt: "Oversized light gray sectional with chaise and ottoman on the LQ showroom floor",
    name: "Oversized gray sectional with ottoman",
    category: "living",
    sold: false,
  },
  {
    id: "8594",
    src: "/photos/IMG_8594.jpg",
    alt: "Black counter-height dining table with six upholstered chairs",
    name: "Black counter-height dining set",
    category: "dining",
    sold: true,
  },
  {
    id: "8617",
    src: "/photos/IMG_8617.jpg",
    alt: "Caramel leather modular sectional arranged in an L on a woven rug",
    name: "Caramel leather modular sectional",
    category: "living",
    sold: false,
  },
  {
    id: "8600",
    src: "/photos/IMG_8600.jpg",
    alt: "Light oak dining table with woven-back chairs, staged with lamps behind it",
    name: "Light oak dining set",
    category: "dining",
    sold: false,
  },
  {
    id: "8605",
    src: "/photos/IMG_8605.jpg",
    alt: "Wall of shelves stacked with dozens of table lamps in reds, greens and golds",
    name: "The lamp wall",
    category: "lamps",
    sold: false,
  },
  {
    id: "8620",
    src: "/photos/IMG_8620.jpg",
    alt: "Driftwood-finish bedroom set with dresser, mirror and upholstered bed",
    name: "Driftwood bedroom set",
    category: "bedroom",
    sold: false,
  },
  {
    id: "8610",
    src: "/photos/IMG_8610.jpg",
    alt: "Gray power reclining sofa and loveseat under warehouse lights",
    name: "Gray power reclining set",
    category: "recliners",
    sold: false,
  },
  {
    id: "8632",
    src: "/photos/IMG_8632.jpg",
    alt: "Cream sofa with exposed wood trim and nailhead detail",
    name: "Cream sofa with wood trim",
    category: "living",
    sold: true,
  },
  {
    id: "8627",
    src: "/photos/IMG_8627.jpg",
    alt: "Pillow-top mattress on an adjustable base in the Shema Sleep gallery",
    name: "Shema Sleep pillow-top",
    category: "mattresses",
    sold: false,
  },
  {
    id: "8622",
    src: "/photos/IMG_8622.jpg",
    alt: "Bed made up in a burnt orange comforter beside a five-drawer chest",
    name: "Panel bed and chest",
    category: "bedroom",
    sold: false,
  },
  {
    id: "8602",
    src: "/photos/IMG_8602.jpg",
    alt: "Round walnut dining table with cream upholstered chairs",
    name: "Round walnut dining set",
    category: "dining",
    sold: false,
  },
  {
    id: "8612",
    src: "/photos/IMG_8612.jpg",
    alt: "Brown leather power recliners with console and cup holders",
    name: "Brown leather power recliners",
    category: "recliners",
    sold: true,
  },
];
