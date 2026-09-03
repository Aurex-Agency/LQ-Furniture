import type { FloorCategory } from "@/lib/floor";

export type ArchiveItem = {
  id: string;
  src: string;
  alt: string;
  category: FloorCategory;
};

// The running record of what has come through the warehouse, all shot on
// the LQ floor. Pieces here may already be gone; that's the point. Newest
// photo sets go at the top when the floor refreshes.
//
// NO PRODUCT NAMES. The store's own note, August 2026: invented names were
// wrong about materials and piece counts (a "walnut" table that isn't
// walnut, a "bench" that is two chairs). The grid shows the photograph and
// the department, nothing more. Alt text describes only colour, fabric
// where it is plainly upholstery, and the pieces you can count. Never name
// a wood, never call anything leather, and never claim a piece is part of a
// set unless the photo shows matching pieces. If real product names are
// wanted here, they have to come off the store's tags from LQ.
export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { id: "8588", src: "/photos/IMG_8588.jpg", alt: "Gray sectional with patterned pillows and a tufted ottoman", category: "living" },
  { id: "8590", src: "/photos/IMG_8590.jpg", alt: "Whitewashed dining table with upholstered chairs on a rug", category: "dining" },
  { id: "8592", src: "/photos/IMG_8592.jpg", alt: "Round white pedestal table with spindle-back chairs", category: "dining" },
  { id: "8595", src: "/photos/IMG_8595.jpg", alt: "Black counter-height table with cushioned stools", category: "dining" },
  { id: "8596", src: "/photos/IMG_8596.jpg", alt: "White dining table with ladder-back chairs", category: "dining" },
  { id: "8598", src: "/photos/IMG_8598.jpg", alt: "Smooth-top dining table with upholstered chairs", category: "dining" },
  { id: "8599", src: "/photos/IMG_8599.jpg", alt: "Dining table flanked by tall upholstered host chairs", category: "dining" },
  { id: "8601", src: "/photos/IMG_8601.jpg", alt: "Light-finish dining table with woven-back chairs", category: "dining" },
  { id: "8603", src: "/photos/IMG_8603.jpg", alt: "Round dark-finish table with cream upholstered chairs", category: "dining" },
  { id: "8604", src: "/photos/IMG_8604.jpg", alt: "Shelving wall filled with table lamps in every color", category: "lamps" },
  { id: "8609", src: "/photos/IMG_8609.jpg", alt: "Rows of gray reclining sofas down a warehouse aisle", category: "recliners" },
  { id: "8611", src: "/photos/IMG_8611.jpg", alt: "Gray power reclining sofa and loveseat with end tables and lamps", category: "recliners" },
  { id: "8613", src: "/photos/IMG_8613.jpg", alt: "Cream power reclining sofa beneath a framed horse print", category: "recliners" },
  { id: "8614", src: "/photos/IMG_8614.jpg", alt: "Gray sectional with white storage cocktail table", category: "living" },
  { id: "8615", src: "/photos/IMG_8615.jpg", alt: "Gray sectional staged with white side tables", category: "living" },
  { id: "8616", src: "/photos/IMG_8616.jpg", alt: "Taupe sectional with a round coffee table", category: "living" },
  { id: "8618", src: "/photos/IMG_8618.jpg", alt: "Upholstered bed with wood chest, dresser and mirror", category: "bedroom" },
  { id: "8621", src: "/photos/IMG_8621.jpg", alt: "White bed with matching mirror and dresser", category: "bedroom" },
  { id: "8623", src: "/photos/IMG_8623.jpg", alt: "Upholstered headboard bed with wood chest and dresser, two gray armless chairs in front", category: "bedroom" },
  { id: "8624", src: "/photos/IMG_8624.jpg", alt: "Mattress display with pillow-tops on platform bases", category: "mattresses" },
  { id: "8625", src: "/photos/IMG_8625.jpg", alt: "Rows of mattresses on display in the sleep gallery", category: "mattresses" },
  { id: "8626", src: "/photos/IMG_8626.jpg", alt: "Mattresses on adjustable bases in the sleep gallery", category: "mattresses" },
  { id: "8628", src: "/photos/IMG_8628.jpg", alt: "Beige upholstered sectional with a white coffee table", category: "living" },
  { id: "8629", src: "/photos/IMG_8629.jpg", alt: "Light beige sofa beside a charcoal sofa with patterned pillows", category: "living" },
  { id: "8630", src: "/photos/IMG_8630.jpg", alt: "Accent cabinet with glass fretwork doors staged between sofas", category: "living" },
  { id: "8633", src: "/photos/IMG_8633.jpg", alt: "Cream sofa with exposed wood trim beside orange accents", category: "living" },
  { id: "8634", src: "/photos/IMG_8634.jpg", alt: "Cream rolled-arm sofa with a dark traditional coffee table", category: "living" },
  { id: "8636", src: "/photos/IMG_8636.jpg", alt: "Navy blue upholstered sofa with accent pillows and a white ottoman", category: "living" },
];
