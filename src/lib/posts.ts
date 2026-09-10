export type Post = {
  slug: string;
  title: string;
  date: string;
  // Set when a post is materially revised. Freshness is a real ranking and
  // AI-citation signal, so this is the date to keep honest: bump it when the
  // substance changes, not when a typo is fixed.
  updated?: string;
  // Who stands behind the advice. Answer engines and Google both weigh who
  // said a thing, and "the store" is a truthful answer for a shop's own
  // floor knowledge, where inventing a person would not be.
  author: string;
  description: string;
  image: { src: string; alt: string };
  // Block-formatted body. Each string is one block:
  //   "## X"        section heading
  //   "### X"       subheading
  //   "- X"         list item; consecutive items become one list
  //   "| a | b"     table row; the first row of a run is the header
  //   anything else a paragraph
  body: string[];
};

// Blog posts live here as plain typed data, no CMS and no extra
// dependencies. To publish, add a new object to the top of this array.
// Keep claims inside what the store can stand behind.
export const POSTS: Post[] = [
  {
    slug: "how-to-buy-a-mattress",
    title: "How to buy a mattress: sizes, firmness, and what to test on the floor",
    date: "2026-09-10",
    author: "The LQ Furniture floor team",
    description:
      "Pick the size from your room and who sleeps in it, the firmness from how you sleep, and settle it by lying down for a full ten minutes in your own sleeping position. A plain guide from the LQ sleep gallery in Tupelo.",
    image: {
      src: "/photos/IMG_8627.jpg",
      alt: "Pillow-top mattress on an adjustable base in the LQ sleep gallery",
    },
    body: [
      "Buying a mattress comes down to three decisions: what size the room and the sleepers need, what firmness matches how you sleep, and whether the thing actually feels right after ten minutes lying on it in your normal position. Everything else is detail. The ten minutes is the part people skip, and it is the part that decides it.",
      "## Mattress sizes, and the room they need",
      "| Size | Dimensions | Smallest room that works |",
      "| Twin | 38 x 75 in | 7 x 10 ft |",
      "| Twin XL | 38 x 80 in | 7 x 10 ft |",
      "| Full | 54 x 75 in | 10 x 10 ft |",
      "| Queen | 60 x 80 in | 10 x 11 ft |",
      "| King | 76 x 80 in | 12 x 12 ft |",
      "| California King | 72 x 84 in | 12 x 12 ft |",
      "A queen is the most common choice for two adults and fits most bedrooms. A king gives each sleeper the same width as a twin, which is the real argument for it. A California King is four inches narrower and four inches longer than a standard king, so it suits a tall sleeper rather than a wide room, and it needs its own frame and sheets.",
      "Before you settle on a size, measure the room and leave walking space: about 24 to 30 inches on the sides you get in and out of. Then measure the bedroom doorway, because a king mattress and its foundation still have to get down the hall.",
      "## Firmness follows how you sleep",
      "Firmness is not a quality rating. It is a fit, and the fit is set mostly by your sleeping position and your weight.",
      "- Side sleepers: softer to medium, so the shoulder and hip can sink and the spine stays straight",
      "- Back sleepers: medium to medium-firm, enough support to keep the lower back from sagging",
      "- Stomach sleepers: firmer, since a soft mattress lets the hips drop and bends the lower back",
      "- Two people, different positions: medium-firm is the usual meeting point, or an adjustable base with a split configuration",
      "Heavier sleepers generally want a firmer feel than the chart suggests, because they compress a mattress more. Lighter sleepers often want softer for the same reason. If you and your partner disagree, buy for the side sleeper and add a topper for the other, which is cheaper than buying twice.",
      "## What the types actually feel like",
      "Innerspring beds are the traditional coil construction: bouncier, cooler, and usually the least expensive. Memory foam contours closely and isolates motion well, so a restless partner is less noticeable, but it can sleep warm. Hybrids put foam or latex layers over a coil base and try to split the difference, which is why they have become the most popular category. Pillow-top refers to an extra padded layer sewn on top, not to a construction, and it can appear on any of them.",
      "## Do not skip the ten minutes",
      "Sit down for thirty seconds and every mattress feels fine. That is not a test, it is a greeting. Lie down in the position you actually sleep in, with a pillow, and stay there for a full ten minutes. Long enough for your shoulders to settle and for your lower back to tell you the truth.",
      "What to pay attention to while you are down there:",
      "- Is your spine roughly straight from neck to hips, or is something sagging?",
      "- Can you roll over without shoving?",
      "- If you sleep on your side, does your shoulder feel pressed or supported?",
      "- If someone shares the bed, have them lie down too and move around",
      "Take your shoes off. Bring your own pillow if you have a strong opinion about pillows. Nobody at LQ is going to hurry you off a mattress, and our sleep gallery runs along the back of the building precisely so you can lie down on as many as you need to.",
      "## Adjustable bases",
      "An adjustable base raises the head and foot, which helps with snoring, acid reflux, circulation, and reading in bed. Most modern foam and hybrid mattresses work on one; traditional innersprings with a rigid border often do not. If an adjustable base is on your list, test the mattress on the base rather than on a flat foundation, because the feel changes.",
      "## When to replace the one you have",
      "Most mattresses have roughly seven to ten useful years in them. The clearer signals are physical: a visible dip or body impression that stays after you get up, waking with stiffness that fades during the day, or sleeping noticeably better in a hotel bed. If you are reading this because your back hurts every morning, that is your answer.",
      "## Come lie down",
      "We carry most of the name brands you already know at warehouse prices, and the tag price is the price. [Walk in](/visit) Wednesday through Saturday 10 to 6 or Sunday 12 to 6, no appointment, and give yourself an hour. Bring your room measurements, take your shoes off, and use the ten minutes. If a mattress is the big purchase this year, [financing runs four ways](/financing).",
    ],
  },
  {
    slug: "furniture-financing-tupelo-no-credit-check",
    title: "Furniture financing in Tupelo, explained without the fine print",
    date: "2026-09-08",
    author: "The LQ Furniture floor team",
    description:
      "LQ offers four ways to finance: Synchrony and Tower Loans run credit and give you up to 12 months with no interest. Acima and Snap skip the credit check and give you 90 to 100 days. Here is which one fits, and what to ask before you sign.",
    image: {
      src: "/photos/IMG_8612.jpg",
      alt: "Brown upholstered power reclining sofa and recliner with console and cup holders on the LQ floor",
    },
    body: [
      "There are four ways to finance furniture at LQ, and they split into two kinds. Synchrony and Tower Loans run your credit and give you up to 12 months with no interest. Acima and Snap do not run a credit check at all, and give you 90 to 100 days with no interest. Which one is right depends on your credit and your timeline, not on what you are buying.",
      "## The four options, side by side",
      "| Option | Credit check | No-interest window | Best for |",
      "| Synchrony | Yes | Up to 12 months | Larger rooms, if your credit is in good shape |",
      "| Tower Loans | Yes | 12 months, sometimes 24 on a promotion | A straightforward year, local lender |",
      "| Acima | No | 90 days | Getting to yes without a credit pull |",
      "| Snap | No | 100 days | The longest no-credit-check window we have |",
      "Synchrony's full 12 months applies when you spend over $2,000. Smaller purchases qualify for shorter no-interest windows based on what you spend, so ask at the counter what your amount actually earns.",
      "## What no credit check really means",
      "Acima and Snap are lease-to-own, not loans. That is a real difference and it is worth understanding before you sign. You are making scheduled payments to use the furniture, with the option to own it once you finish the payments or take an early purchase option.",
      "Approval is based on income and your ability to pay rather than a credit score, which is why there is no hard pull and why people who have been turned down elsewhere still get a yes. The tradeoff is that if you carry a lease past its no-interest window, lease-to-own is usually the more expensive road. Inside 90 or 100 days, it is a genuinely good deal. Past that, it stops being one.",
      "So the honest advice is simple: if you take Acima or Snap, plan to finish inside the window. Ask what the early purchase option is on the day you sign, and write the date on your calendar.",
      "## What no interest really means",
      "Promotional no-interest plans come in two flavors, and they are not the same. With true zero-interest, no interest exists at all. With deferred interest, interest quietly accumulates from day one and is only waived if you pay the whole balance before the promotion ends. Miss it by a month and the accumulated interest lands on your balance at once.",
      "We are not going to guess which kind your plan is, because it depends on the offer running when you apply. Ask this exact question at the counter or on the phone: is this deferred interest, and what happens if I have a balance left on the last day? Any lender worth using will answer plainly.",
      "## What to bring",
      "- A government-issued photo ID",
      "- Proof of income, usually recent pay stubs or bank statements",
      "- A working phone number and email, since approvals arrive by text or email",
      "- A debit card or bank account for the payment schedule",
      "- Your room measurements, so you finance something that actually fits",
      "## Get approved before you fall in love",
      "The single best piece of advice we give on financing is to sort it out first. The floor turns over every week and we usually cannot reorder, so a piece you are still thinking about on Saturday may be gone. Knowing your number before you walk the aisles means you can decide on the spot instead of driving home to think and losing it.",
      "You can [apply from the financing page](/financing) before you come in, or at the counter while you are here. Either way you will know where you stand before you buy a thing. The tag price is the price, so there is no negotiating step to wait on and no surprise at the register.",
      "## The short version",
      "Good credit and a bigger room: Synchrony or Tower Loans, and use the full 12 months. Bruised credit or no credit history: Acima or Snap, and finish inside 90 to 100 days. Either way, apply before you shop, bring your measurements, and ask whether the no-interest offer is deferred.",
      "Questions the page did not answer are best asked out loud. Call the store at (662) 841-5959 during store hours, or [send us a message](/contact), and we will walk you through it.",
    ],
  },
  {
    slug: "how-to-measure-for-a-sectional",
    title: "Will it fit? Measuring for a sectional before you buy",
    date: "2026-09-02",
    author: "The LQ Furniture floor team",
    description:
      "Measure four things before you shop for a sectional: the wall, the walkway, the doorway, and the tightest turn between the truck and the room. The doorway is what actually stops most deliveries, not the wall.",
    image: {
      src: "/photos/IMG_8617.jpg",
      alt: "Caramel modular sectional arranged in an L on a woven rug at LQ Furniture",
    },
    body: [
      "Four measurements decide whether a sectional works: the wall it sits against, the walkway you leave in front of it, the narrowest doorway it has to pass, and the tightest turn on the way to the room. Most people measure the first one and skip the rest. The doorway and the turn are what actually send furniture back.",
      "## Start with the room, not the sofa",
      "Measure the wall the long side will sit against, then subtract anything that eats into it: a fireplace hearth, a floor vent you cannot block, the swing of a door. What you have left is your working length, and a sectional should not fill all of it. Leave a hand's width at each end so the room does not read as stuffed.",
      "Then measure the depth. A sectional with a chaise usually runs 60 to 68 inches deep on the chaise side, which is a lot more floor than people picture. Standing in the room imagining it is unreliable. Put it on the floor instead.",
      "### Tape it out",
      "Painter's tape costs about three dollars and settles the argument in ten minutes. Mark the full footprint on your floor, including the chaise, then live with it for a day. Walk the path you actually walk. Open the closet. Pull out a dining chair. If you find yourself stepping around the tape, the piece is too big, and you learned that for three dollars instead of after delivery.",
      "## Leave room to walk",
      "- Main walkways: 30 to 36 inches of clear floor",
      "- Between the sofa and the coffee table: 14 to 18 inches",
      "- In front of a TV: roughly 1.5 to 2.5 times the screen's diagonal",
      "- Around a recliner: check the footrest extended, not closed",
      "That last one catches people. A power recliner needs its full extended depth plus clearance behind if it is a rocker style. Measure it in the position you will actually sit in.",
      "## The doorway is the real bottleneck",
      "Here is the measurement almost everybody skips. Measure the door opening frame to frame for width, and floor to the lowest point of the frame for height. If the door is hinged and cannot be removed, measure from the hinge to the opposite edge instead, because an open door steals one to two inches of usable width.",
      "A sectional gets through a door in one of two ways: on its side, or in pieces. The number that matters is the smaller of the sofa's height and its depth, because that is the dimension you can turn into the opening. If your narrowest door is 30 inches and the piece measures 34 inches through its slimmest axis, it is not going in, no matter how many people are lifting.",
      "Then walk the whole path. Front door, hallway, the corner at the top of the stairs, the turn into the room. A tight corner paired with a low ceiling is the most common failure, and it is invisible until the piece is stuck in it.",
      "## Modular pieces solve most of this",
      "A modular sectional arrives as separate seats that connect once they are in the room. Each piece has to clear the door on its own, which is a far easier problem than moving one welded L through a hallway. If your doorways are narrow, or the room is upstairs, or the turn at the end of the hall is tight, start with modular and save yourself the wrestling match.",
      "## Which way does the chaise go?",
      "Sectionals are sold as left-hand facing or right-hand facing, and the convention trips up plenty of people. Sit down on the sofa first, then look: the direction is named for the side the chaise is on as you sit, not as you look at it from across the room. Getting this backwards is one of the most common furniture ordering mistakes there is. On our floor you can walk around the actual piece and see it, which removes the guesswork entirely.",
      "## Bring the numbers with you",
      "Write these down before you come in: wall length, room depth, narrowest doorway width and height, and the tightest turn on the path. Put them in your phone. Every piece on [our floor](/the-floor) is tagged and out in the open, so with your numbers in hand you can measure the actual sofa and know in a minute whether it works.",
      "The floor changes every week and we usually cannot reorder, so the answer to will it fit is worth having before you find the piece, not after. Give yourself an hour, bring a tape measure if you like, and [come walk it](/visit). No appointment needed. To hear when a new load lands, [join the text list](/text-list).",
    ],
  },
  {
    slug: "furnishing-a-manufactured-home-north-mississippi",
    title: "Furnishing a double-wide: what actually fits in a manufactured home",
    date: "2026-08-26",
    author: "The LQ Furniture floor team",
    description:
      "Manufactured homes have narrower doors, tighter halls and lighter floors than site-built houses. Measure the door first, favor modular pieces, and watch the weight. A practical guide for North Mississippi homes.",
    image: {
      src: "/photos/IMG_8632.jpg",
      alt: "Cream sofa with exposed wood trim and nailhead detail on the LQ showroom floor",
    },
    body: [
      "Furniture that fits a site-built house does not automatically fit a manufactured home. The three differences that matter are narrower interior doors, tighter hallway turns, and floors that flex more than a slab. Measure the doorway before anything else, favor pieces that come apart, and you will avoid nearly every problem people run into.",
      "This is not a niche concern in Mississippi. About 14 percent of Mississippi households live in a manufactured home, the fourth-highest share of any state, and manufactured homes make up roughly a third of new single-family housing here. Around Tupelo and across North Mississippi, this is simply how a great many people live, and almost nobody writes furniture advice for it.",
      "## Measure the interior doors, not the front door",
      "The front door on a manufactured home is usually the easy one. The interior doors are where furniture gets stuck. Bedroom and bathroom doors are often 28 to 30 inches wide, against 32 to 36 inches in most site-built homes, and hallways can run narrower with a tighter turn at the end.",
      "Measure frame to frame for width, and floor to the lowest point of the frame for height. If a door is hinged and will not come off, measure hinge to opposite edge, because the open door itself steals an inch or two. Then walk the actual path from the outside door to the room and find the tightest point. That number is your real limit, and every piece has to clear it through its slimmest dimension.",
      "## Favor pieces that come apart",
      "This is the single most useful habit for a manufactured home.",
      "- Modular sectionals: each seat clears the door on its own, then connects in the room",
      "- Beds with knock-down frames rather than one welded piece",
      "- Dressers and chests over tall armoires, which fight low ceilings and tight turns",
      "- Dining tables with removable legs",
      "- Recliners where the back detaches, which is common on power models",
      "A one-piece sofa that measures 36 inches deep is not going through a 30-inch door on any angle. The same seating as three connecting modules goes through without a fight. When in doubt, ask us which pieces on [the floor](/the-floor) break down. We move this furniture every day and we know which ones do.",
      "## Watch the ceilings and the scale",
      "Standard manufactured home ceilings often run around 7 to 8 feet, lower than the 9-foot ceilings common in newer site-built homes. Tall headboards, big armoires and oversized floor lamps that look right in a showroom can crowd a room with a lower ceiling.",
      "Scale matters more than square footage here. A living room that is a few feet narrower will take an apartment-scale sofa, a loveseat and recliner, or a compact modular sectional far better than one enormous L. Rooms in manufactured homes are also frequently long and narrow, which suits a sofa and two chairs better than a piece that eats a corner.",
      "## Think about weight and floor support",
      "Manufactured home floors are built to a federal standard and are entirely sound, but they are typically framed lighter than a slab or a full basement floor. Concentrated weight is what to think about, not total weight.",
      "The pieces worth pausing on are the heavy, small-footprint ones: a full curio cabinet, a large aquarium, a gun safe, a solid-wood hutch loaded with dishes. Where you can, place heavy items along an exterior wall or over a floor joist rather than in the middle of a span, and spread the load across a rug or a wider base. A sectional or a bedroom set spreads its weight over a lot of floor and is not something to worry about.",
      "## A practical order to buy in",
      "Start with the pieces that are hardest to replace and hardest to fit, then fill in. In a manufactured home that usually means the bed and the sofa first, since those are the two that have to clear the narrowest doors. Storage next, because these homes tend to have less closet space than square footage suggests. Lamps and accents last, once you can see what the room needs.",
      "## Come with your numbers",
      "Bring the narrowest interior door width, the ceiling height, and the length of the wall the sofa will sit against. That is enough to answer most questions in about a minute on our floor, where everything is out in the open and priced on the tag.",
      "The floor turns over every week and we usually cannot reorder, so if a piece fits your doors and your room, that is worth acting on. If it will not fit your vehicle, we have partnered with a third-party vendor for delivery. Ask at the counter and we will get you set up, or [plan your visit](/visit) first.",
    ],
  },
  {
    slug: "why-warehouse-furniture-costs-less",
    title: "Why warehouse furniture costs less",
    date: "2026-08-09",
    author: "The LQ Furniture floor team",
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
    author: "The LQ Furniture floor team",
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
