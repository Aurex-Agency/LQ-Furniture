import type { FloorCategory } from "@/lib/floor";

export type ArchiveItem = {
  id: string;
  src: string;
  alt: string;
  name: string;
  category: FloorCategory;
};

// The running record of what has come through the warehouse, all shot on
// the LQ floor. Pieces here may already be gone; that's the point. Newest
// photo sets go at the top when the floor refreshes.
export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { id: "8588", src: "/photos/IMG_8588.jpg", alt: "Gray sectional with patterned pillows and a tufted ottoman", name: "Gray sectional with ottoman", category: "living" },
  { id: "8590", src: "/photos/IMG_8590.jpg", alt: "Whitewashed dining table with upholstered chairs on a rug", name: "Whitewash dining set", category: "dining" },
  { id: "8592", src: "/photos/IMG_8592.jpg", alt: "Round white pedestal table with spindle-back chairs", name: "Round pedestal dining set", category: "dining" },
  { id: "8595", src: "/photos/IMG_8595.jpg", alt: "Black counter-height table with cushioned stools", name: "Black counter-height set", category: "dining" },
  { id: "8596", src: "/photos/IMG_8596.jpg", alt: "White farmhouse dining table with ladder-back chairs", name: "White farmhouse dining set", category: "dining" },
  { id: "8598", src: "/photos/IMG_8598.jpg", alt: "Smooth-top dining table with upholstered chairs", name: "Dining table with upholstered chairs", category: "dining" },
  { id: "8599", src: "/photos/IMG_8599.jpg", alt: "Dining table flanked by tall upholstered host chairs", name: "Dining set with host chairs", category: "dining" },
  { id: "8601", src: "/photos/IMG_8601.jpg", alt: "Light oak trestle table with woven-back chairs", name: "Oak trestle dining set", category: "dining" },
  { id: "8603", src: "/photos/IMG_8603.jpg", alt: "Round walnut table with cream upholstered chairs", name: "Round walnut dining set", category: "dining" },
  { id: "8604", src: "/photos/IMG_8604.jpg", alt: "Shelving wall filled with table lamps in every color", name: "The lamp wall", category: "lamps" },
  { id: "8609", src: "/photos/IMG_8609.jpg", alt: "Rows of gray reclining sofas down a warehouse aisle", name: "Reclining sofa row", category: "recliners" },
  { id: "8611", src: "/photos/IMG_8611.jpg", alt: "Gray power recliner set with end tables and lamps", name: "Gray power recliner set", category: "recliners" },
  { id: "8613", src: "/photos/IMG_8613.jpg", alt: "Cream power reclining sofa beneath a framed horse print", name: "Cream power reclining sofa", category: "recliners" },
  { id: "8614", src: "/photos/IMG_8614.jpg", alt: "Gray sectional with white storage cocktail table", name: "Gray sectional with storage table", category: "living" },
  { id: "8615", src: "/photos/IMG_8615.jpg", alt: "Gray sectional staged with white nightstand tables", name: "Gray sectional grouping", category: "living" },
  { id: "8616", src: "/photos/IMG_8616.jpg", alt: "Taupe leather-look sectional with round coffee table", name: "Taupe sectional", category: "living" },
  { id: "8618", src: "/photos/IMG_8618.jpg", alt: "Upholstered bed with dark dresser and accent chair", name: "Upholstered bed and dresser", category: "bedroom" },
  { id: "8619", src: "/photos/IMG_8619.jpg", alt: "Bedroom staging with armchair, chest and wall clock", name: "Bedroom with sitting chair", category: "bedroom" },
  { id: "8621", src: "/photos/IMG_8621.jpg", alt: "White panel bedroom set with mirror and dresser", name: "White panel bedroom set", category: "bedroom" },
  { id: "8623", src: "/photos/IMG_8623.jpg", alt: "Gray upholstered bed with matching bench and dresser", name: "Gray bedroom with bench", category: "bedroom" },
  { id: "8624", src: "/photos/IMG_8624.jpg", alt: "Shema Sleep mattress display under a brand banner", name: "Shema Sleep gallery", category: "mattresses" },
  { id: "8625", src: "/photos/IMG_8625.jpg", alt: "Rows of mattresses on display in the sleep gallery", name: "Mattress row", category: "mattresses" },
  { id: "8626", src: "/photos/IMG_8626.jpg", alt: "Mattresses on adjustable bases in the sleep gallery", name: "Adjustable base display", category: "mattresses" },
  { id: "8628", src: "/photos/IMG_8628.jpg", alt: "Beige sofa with white farmhouse coffee table", name: "Beige sofa grouping", category: "living" },
  { id: "8629", src: "/photos/IMG_8629.jpg", alt: "Pair of gray sofas with patterned accent pillows", name: "Gray sofa pair", category: "living" },
  { id: "8630", src: "/photos/IMG_8630.jpg", alt: "Accent cabinet with glass fretwork doors staged between sofas", name: "Fretwork accent cabinet", category: "living" },
  { id: "8633", src: "/photos/IMG_8633.jpg", alt: "Cream sofa with wood trim beside orange accents", name: "Cream sofa with wood trim", category: "living" },
  { id: "8634", src: "/photos/IMG_8634.jpg", alt: "Neutral sofa with dark traditional coffee table", name: "Sofa with traditional table", category: "living" },
  { id: "8635", src: "/photos/IMG_8635.jpg", alt: "Rolled-arm sofa set with floral accent pillows", name: "Rolled-arm sofa set", category: "living" },
  { id: "8636", src: "/photos/IMG_8636.jpg", alt: "Navy blue sofa and loveseat with accent pillows", name: "Navy sofa set", category: "living" },
];
