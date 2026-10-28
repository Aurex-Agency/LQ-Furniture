import type { FloorCategory } from "./floor";

export const FURNITURE_CATEGORIES: Array<{
  slug: string; title: string; description: string; floorCategory: FloorCategory;
  sections: Array<{ heading: string; body: string }>;
  guides: Array<{ slug: string; label: string }>;
}> = [
  {
    slug: "sofas-sectionals", title: "Sofas and sectionals in Tupelo",
    description: "Compare sofa and sectional styles photographed on the LQ Furniture floor. Bring room measurements and ask about the specific piece before visiting.",
    floorCategory: "living",
    sections: [
      { heading: "Start with the room and the route", body: "Measure the space available for seating and the doorways, halls and turns on the way in. For a sectional, sketch which side needs the chaise and where the main walking route runs. Bring those numbers to the floor so you can compare the actual dimensions instead of judging size from a photograph." },
      { heading: "Compare the piece you will take home", body: "Ask about overall width, depth, seat height and any moving parts. Check the upholstery label, condition and included pieces with the floor team. A modular layout in a photo does not guarantee that every section remains available or that it can be rearranged in every configuration. Confirm the model and arrangement that work for your room." },
      { heading: "Check care before choosing a cover", body: "Tell the team how your household uses the sofa and ask for its manufacturer care instructions. Color and texture matter, but a photograph cannot prove a material, cleaning method or warranty. Do not assume a removable-looking cover is washable or that a protection claim covers every spill or scratch." },
      { heading: "Confirm the details before your trip", body: "These are photographs from LQ's floor, not a live stock feed. Ask about the photographed piece, its current availability and tag price. Confirm pickup or third-party delivery arrangements, access requirements and any separate charges before making plans. No reservation is created by sending an inquiry." },
    ],
    guides: [
      { slug: "sofa-fabric-pets-children", label: "Upholstery questions for homes with pets and children" },
      { slug: "how-to-measure-for-a-sectional", label: "Measuring for a sectional" },
      { slug: "recliner-clearance-checklist", label: "Recliner clearance and access checklist" },
    ],
  },
  {
    slug: "dining", title: "Dining furniture in Tupelo",
    description: "Explore dining tables and chairs photographed at LQ Furniture. Plan seating, room clearance and access, then confirm current availability with the store.",
    floorCategory: "dining",
    sections: [
      { heading: "Leave room for people, not just a tabletop", body: "Sketch the room with doors, storage furniture and the normal walking routes. Measure with chairs pulled out and cabinet doors open. Bring your room sketch to the store and compare the actual table and chair dimensions. A table's seating description does not establish how comfortably your own chairs will fit." },
      { heading: "Compare the table and chairs together", body: "Check seat height, chair width, arm clearance and the position of table legs or a pedestal. If you are keeping existing chairs, bring their measurements. For an extending table, ask about both dimensions, how the leaf operates and whether it is included with the particular piece." },
      { heading: "Inspect the details that a photo cannot settle", body: "Ask the floor team to confirm the finish, care instructions, condition and number of pieces included. We describe what the photographs show without inventing a wood species or assuming that every chair pictured remains available. The tag and the actual furniture are the place to verify those details." },
      { heading: "Plan the purchase and transport", body: "Confirm current availability and price before a special trip. Measure the access route into your home as well as the room. Ask about transport dimensions, any manufacturer-approved disassembly, pickup arrangements or third-party delivery and separate charges. An inquiry does not reserve the furniture." },
    ],
    guides: [
      { slug: "dining-table-room-fit", label: "Choosing a dining table that leaves room to move" },
      { slug: "how-to-shop-a-warehouse-floor", label: "Planning a warehouse-floor visit" },
    ],
  },
];
