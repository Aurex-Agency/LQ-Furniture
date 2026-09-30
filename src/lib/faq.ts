// Every answer stays inside verified store facts and established
// positioning. Do not add operational claims here without confirming
// them with LQ first.

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Is the tag price the price?",
    a: "Yes. The tag price is the price, and everything on the floor is priced to leave. No haggling required, no surprise at the counter.",
  },
  {
    q: "Do y'all really do financing?",
    a: "Yes. Review options from Synchrony, Tower Loans, Acima and Snap on our financing page or at the counter. Products, approval requirements, costs and promotional terms vary. Review the provider's agreement before choosing.",
  },
  {
    q: "Why is it so cheap? What's wrong with it?",
    a: "Nothing is wrong with it. We buy whole factory loads at volume prices and the building is a warehouse, not a showroom. The math is just different here.",
  },
  {
    q: "Can I take it home the same day?",
    a: "If it fits your vehicle, we'll help you load it. If it doesn't, we have partnered with a 3rd party vendor to provide you delivery services, or we'll hold your piece while you arrange the trip home.",
  },
  {
    q: "Will you hold something while I think about it?",
    a: "Once it's yours, we'll hold it while you arrange the trip home. Before that, the floor doesn't hold spots. When the last one sells, it's gone.",
  },
  {
    q: "When do new loads come in?",
    a: "The floor turns over every week, and the text list hears about new loads first. Wednesday and Thursday shoppers get the widest pick of whatever the last truck brought.",
  },
  {
    q: "Do you deliver?",
    a: "We have partnered with a 3rd party vendor to provide you delivery services. Delivery is handled by that vendor and is not included in the price on the tag, so ask at the counter and we'll get you set up with them.",
  },
  {
    q: "Do you sell mattresses?",
    a: "Yes. We carry most of your favorite name brands at discounted prices. The sleep gallery runs along the back of the building, mattresses and adjustable bases included. Lie down on as many as you need to.",
  },
  {
    q: "What about warranties?",
    a: "Ask about the warranty on the exact piece before buying. Coverage, exclusions and service arrangements depend on the product; keep the written terms with your receipt.",
  },
  {
    q: "Do I need an appointment?",
    a: "No. Walk in any time we're open: Wednesday through Saturday 10 to 6, Sunday 12 to 6. Bring your measurements and give yourself an hour.",
  },
  {
    q: "Can I buy from the website?",
    a: "No, and that's on purpose. Nothing on this site is for sale online. The website shows you what's here; the store is where furniture changes hands.",
  },
];
