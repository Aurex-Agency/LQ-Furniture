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
};

// Every photo below was shot on the LQ floor. The board rotates as the
// floor does; refresh this list as loads come and go.
//
// NAME ONLY WHAT THE PHOTO PROVES. The store's own note, August 2026:
// earlier names invented materials and piece types, and the owner marked
// them wrong ("not leather" written across the recliner photo). Describe
// colour, upholstery where it is plainly fabric, and the pieces you can
// count. Never name a wood species, never write leather, never imply a
// matching set unless matching pieces are in frame. Real product names
// have to come off the store's tags from LQ.
export const FLOOR_ITEMS: FloorItem[] = [
  {
    id: "8587",
    src: "/photos/IMG_8587.jpg",
    alt: "Oversized light gray sectional with chaise and ottoman on the LQ showroom floor",
    name: "Oversized gray sectional with ottoman",
    category: "living",
  },
  {
    id: "8594",
    src: "/photos/IMG_8594.jpg",
    alt: "Black counter-height dining table with six upholstered chairs",
    name: "Black counter-height table and chairs",
    category: "dining",
  },
  {
    id: "8617",
    src: "/photos/IMG_8617.jpg",
    alt: "Caramel modular sectional arranged in an L on a woven rug",
    name: "Caramel modular sectional",
    category: "living",
  },
  {
    id: "8600",
    src: "/photos/IMG_8600.jpg",
    alt: "Light-finish dining table with woven-back chairs, staged with lamps behind it",
    name: "Light-finish dining table and chairs",
    category: "dining",
  },
  {
    id: "8605",
    src: "/photos/IMG_8605.jpg",
    alt: "Wall of shelves stacked with dozens of table lamps in reds, greens and golds",
    name: "The lamp wall",
    category: "lamps",
  },
  {
    id: "8620",
    src: "/photos/IMG_8620.jpg",
    alt: "Bedroom grouping with upholstered bed, dresser and mirror",
    name: "Upholstered bed with dresser and mirror",
    category: "bedroom",
  },
  {
    id: "8632",
    src: "/photos/IMG_8632.jpg",
    alt: "Cream sofa with exposed wood trim and nailhead detail",
    name: "Cream sofa with exposed wood trim",
    category: "living",
  },
  {
    id: "8627",
    src: "/photos/IMG_8627.jpg",
    alt: "Pillow-top mattress on an adjustable base in the sleep gallery",
    name: "Pillow-top mattress and adjustable base",
    category: "mattresses",
  },
  {
    id: "8622",
    src: "/photos/IMG_8622.jpg",
    alt: "Bed made up in a burnt orange comforter beside a five-drawer chest",
    name: "Bed with five-drawer chest",
    category: "bedroom",
  },
  {
    id: "8602",
    src: "/photos/IMG_8602.jpg",
    alt: "Round dark-finish dining table with cream upholstered chairs",
    name: "Round dining table with upholstered chairs",
    category: "dining",
  },
  {
    id: "8612",
    src: "/photos/IMG_8612.jpg",
    alt: "Brown upholstered power reclining sofa and recliner with console and cup holders",
    name: "Brown power reclining sofa and recliner",
    category: "recliners",
  },
];
