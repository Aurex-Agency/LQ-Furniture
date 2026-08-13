export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: { src: string; alt: string };
  // Paragraphs of plain text; headings are marked with a leading "## ".
  body: string[];
};

// Blog posts live here as plain typed data, no CMS and no extra
// dependencies. To publish, add a new object to the top of this array.
// Keep claims inside what the store can stand behind.
export const POSTS: Post[] = [
  {
    slug: "why-warehouse-furniture-costs-less",
    title: "Why warehouse furniture costs less",
    date: "2026-08-09",
    description:
      "The honest math behind LQ's prices: truckload buying, fast turnover, and a building that works for a living.",
    image: {
      src: "/photos/IMG_8607.jpg",
      alt: "A long aisle of the LQ warehouse stacked with furniture and decor",
    },
    body: [
      "People walk our floor, look at a tag, and ask the same question: what's wrong with it? Nothing is wrong with it. The math is just different here.",
      "## We buy whole loads",
      "Furniture makers move product in truckloads, and the price per piece drops hard when you take the whole truck. That's what we do. We're not ordering one sofa in one fabric with one delivery window. We're taking factory loads at volume prices, and the discount rides along to the tag.",
      "## The building works for a living",
      "A showroom with rugs and soft lighting and a coffee bar is lovely, and you pay for every bit of it in the furniture. Our building is a warehouse. The lights are bright, the floor is concrete, and all of it costs a lot less to keep running. That gap goes to you.",
      "## Furniture that sits costs money",
      "Every week a piece sits on our floor, it costs us space we could give to the next load. So we price things to leave. That's why the floor looks different every time you come in, and why the same set can be here Tuesday and gone Saturday.",
      "## The catch",
      "The catch is the flip side of the deal: limited quantities. We usually can't reorder, so when the last one sells, it's gone. If you want first crack at what comes off the next truck, join the text list and you'll hear before anyone else.",
    ],
  },
  {
    slug: "how-to-shop-a-warehouse-floor",
    title: "How to shop a warehouse floor without missing out",
    date: "2026-08-09",
    description:
      "Measure first, come early in the week's run, and know what you're sitting on. A short guide to shopping the LQ floor like a regular.",
    image: {
      src: "/photos/IMG_8609.jpg",
      alt: "Rows of reclining sofas stretching down a warehouse aisle",
    },
    body: [
      "Warehouse shopping rewards people who show up ready. Here's what our regulars know.",
      "## Measure before you drive",
      "Measure the wall, the doorway, the stairwell, and the truck bed. Write it down. The heartbreak we see most isn't price, it's a sectional that won't make the turn in a hallway.",
      "## Come early in the run",
      "We're open Wednesday through Saturday 10 to 6 and Sunday 12 to 6. Fresh floor moves fastest at the front of that run, so Wednesday and Thursday shoppers get the widest pick of whatever the last truck brought.",
      "## Sit like you mean it",
      "Nobody here minds if you sit on every sofa in the building. Take your time, stretch out, try the recliner handle. Furniture is a years-long decision and a two-minute sit costs nothing.",
      "## Ask about the tag",
      "The tag price is the price, and if you're financing, ask at the counter before you fall in love. You'll know where you stand before you buy a thing.",
      "## When you see it, say so",
      "The one rule of limited quantities: the floor doesn't hold your spot. If a piece stops you in the aisle, tell one of us. It can be sold, loaded, and gone while you sleep on it.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
