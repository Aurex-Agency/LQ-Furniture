import type { FloorCategory } from "@/lib/floor";

export type Department = {
 slug: string; label: string; title: string; category: FloorCategory; description: string; intro: string;
 sections: { title: string; text: string }[]; faqs: { q: string; a: string }[]; guides: { slug: string; title: string }[];
};

export const DEPARTMENTS: Department[] = [
  {
    "slug": "sectionals-sofas",
    "label": "Sofas and sectionals",
    "title": "Sofas and sectionals in Tupelo, MS",
    "category": "living",
    "description": "Compare sofas and sectionals at LQ Furniture in Tupelo. See real floor photos, plan your room layout and call about the current selection.",
    "intro": "Find seating that fits the way your living room works. Compare the layout, seat comfort and size of sofas and sectionals at our Tupelo furniture warehouse.",
    "sections": [
      {
        "title": "Choose the arrangement before the color",
        "text": "A sectional brings the seating together, while a sofa with separate chairs or a loveseat lets you leave openings between pieces. Bring a sketch showing the doors, windows and main walkway. Decide where the chaise should sit before choosing a configuration."
      },
      {
        "title": "Sit in the seats you will use",
        "text": "Compare seat depth, arm height and back support in person. If several people share the room, have each person try the positions they expect to use. Measure reclining pieces fully open and allow room for tables and the route through the room."
      },
      {
        "title": "Measure the route home",
        "text": "Room fit and delivery access are separate checks. Measure doorways, hallways and tight turns. Ask about the largest component and which parts can be removed on the exact piece you choose."
      }
    ],
    "faqs": [
      {
        "q": "Can I order a sofa online?",
        "a": "Purchases happen in the store. The photos help you plan a visit; call to check whether a particular piece is still available."
      },
      {
        "q": "Can I change the side of the chaise?",
        "a": "It depends on the exact model. Bring a room photo and confirm the orientation and allowed configurations before buying."
      },
      {
        "q": "Can I arrange delivery?",
        "a": "We have partnered with a 3rd party vendor to provide you delivery services. Delivery is separate from the tag price; ask about the arrangements for your purchase."
      }
    ],
    "guides": [
      {
        "slug": "sectional-vs-sofa-and-loveseat",
        "title": "Sectional or sofa and loveseat"
      },
      {
        "slug": "how-to-measure-for-a-sectional",
        "title": "Measure for a sectional"
      }
    ]
  },
  {
    "slug": "recliners",
    "label": "Recliners",
    "title": "Recliners in Tupelo, MS",
    "category": "recliners",
    "description": "Compare recliners at LQ Furniture in Tupelo. Check seat comfort, controls and fully reclined dimensions, then call or visit to see the current floor.",
    "intro": "A recliner needs to fit you as well as your room. Visit LQ Furniture in Tupelo to compare the seating on the floor and ask about the controls and features of each piece.",
    "sections": [
      {
        "title": "Try the whole movement",
        "text": "Sit upright, recline and return to the starting position. Make sure you can reach the controls and use them comfortably. A power recliner is not necessarily a lift chair; confirm the exact functions rather than judging by appearance."
      },
      {
        "title": "Leave room when it opens",
        "text": "Bring the width and depth of your available space. Ask for the fully reclined dimensions and the clearance required behind the chair. For powered models, plan a suitable outlet without placing the cord across a walking route."
      },
      {
        "title": "Ask about care and service",
        "text": "Check the upholstery label and care instructions on the particular chair. Ask what warranty applies to its frame, mechanism and any electrical parts, and who to contact for service."
      }
    ],
    "faqs": [
      {
        "q": "Are the pictured recliners still available?",
        "a": "The photos show pieces photographed on our floor. Selection changes, so call about the chair you have in mind before making the trip."
      },
      {
        "q": "Should I choose power or manual?",
        "a": "Compare how easily you can operate each chair and how it fits your room. Ask about the features on the models currently available."
      },
      {
        "q": "What measurements should I bring?",
        "a": "Bring the available width and depth, doorway measurements and a photo of the room. Include room for the chair to open and for people to walk past."
      }
    ],
    "guides": [
      {
        "slug": "power-vs-manual-recliner",
        "title": "Power or manual recliner"
      }
    ]
  },
  {
    "slug": "bedroom-furniture",
    "label": "Bedroom furniture",
    "title": "Bedroom furniture in Tupelo, MS",
    "category": "bedroom",
    "description": "Explore bedroom furniture at LQ Furniture in Tupelo. Compare beds, dressers and storage, check what a package includes and plan your store visit.",
    "intro": "Build a bedroom around the pieces you need. At LQ Furniture in Tupelo, compare bedroom furniture in person and check the contents of each package before you decide.",
    "sections": [
      {
        "title": "Know what the price includes",
        "text": "Ask for an itemized list of the pieces in the package. A mattress, foundation, mirror or second nightstand may be separate. Compare the complete purchase instead of assuming two sets with the same piece count contain the same things."
      },
      {
        "title": "Make room for doors and drawers",
        "text": "Measure the outside of the bed frame, not only the mattress. Allow space to open the dresser, closet and any storage drawers. Bring measurements for the furniture you plan to keep so you can compare the whole room."
      },
      {
        "title": "Check the support system",
        "text": "Confirm the bed and mattress requirements together, including the foundation, slats and center supports. Ask about assembly and follow the manufacturer instructions for installation and anchoring storage furniture."
      }
    ],
    "faqs": [
      {
        "q": "Does a bedroom set include a mattress?",
        "a": "Check the exact package. Do not assume the mattress or required foundation is included in the furniture price."
      },
      {
        "q": "Can I buy the matching nightstand later?",
        "a": "Ask before buying. Quantities change and matching pieces may not be available to reorder."
      },
      {
        "q": "How do I check whether a dresser will fit?",
        "a": "Measure the dresser footprint with drawers open, then check the entrance and hallway route separately. Bring those measurements when you visit."
      }
    ],
    "guides": [
      {
        "slug": "what-is-included-bedroom-set",
        "title": "What is included in a bedroom set"
      },
      {
        "slug": "how-to-buy-a-mattress",
        "title": "Choosing a mattress"
      }
    ]
  },
  {
    "slug": "dining-room-furniture",
    "label": "Dining furniture",
    "title": "Dining room furniture in Tupelo, MS",
    "category": "dining",
    "description": "Compare dining furniture at LQ Furniture in Tupelo. See real floor examples and check table dimensions, chairs and room clearance before you visit.",
    "intro": "Choose a dining table and chairs for everyday meals and the people you gather around them. Bring your room measurements to the LQ Furniture floor in Tupelo.",
    "sections": [
      {
        "title": "Start with the space around the table",
        "text": "Measure from the nearest obstruction, including a sideboard or kitchen island. Tape the proposed table footprint onto the floor and try chairs around it. Leave space to sit down, stand up and pass behind occupied seats."
      },
      {
        "title": "Try the chairs with the table",
        "text": "Seat count is only a starting point. Chair width, arms, table legs and pedestal bases affect the room each person has. Sit at the table, pull the chair in and check knee room before choosing a combination."
      },
      {
        "title": "Plan for both ordinary meals and company",
        "text": "Count your everyday seats first. If you are considering an extending table, check its open and closed dimensions and where the leaf will be stored. Confirm which chairs or benches are included in the displayed price."
      }
    ],
    "faqs": [
      {
        "q": "Is a round table better for a small room?",
        "a": "Not always. Compare the full diameter and occupied chairs with the room layout. The actual footprint matters more than the shape alone."
      },
      {
        "q": "Are all the chairs in a photo included?",
        "a": "Ask about the specific package on the floor. Photos show examples and do not establish package contents or current availability."
      },
      {
        "q": "Can the table be taken apart for pickup?",
        "a": "That depends on the model. Confirm removable parts and the largest component dimensions before arranging transport."
      }
    ],
    "guides": [
      {
        "slug": "dining-table-size-guide",
        "title": "Choose a dining table size"
      }
    ]
  },
  {
    "slug": "mattresses",
    "label": "Mattresses",
    "title": "Mattresses in Tupelo, MS",
    "category": "mattresses",
    "description": "Visit the LQ Furniture sleep gallery in Tupelo. Compare mattress comfort, room fit and base requirements in person, and call about current availability.",
    "intro": "We carry most of your favorite name brands at discounted prices. Visit the sleep gallery at LQ Furniture in Tupelo to compare mattresses and ask about the bases on the floor.",
    "sections": [
      {
        "title": "Compare comfort in person",
        "text": "Take time to lie down in your usual sleeping position. Compare how the mattress feels when you turn, sit at the edge or share it with someone else. Firmness labels are a starting point; the feel of the exact mattress matters."
      },
      {
        "title": "Fit the bed to the room",
        "text": "Bring your room measurements and the size of any frame you want to keep. Check the outside bed dimensions and walking space, then measure doors and the route into the bedroom. Ask for the dimensions of the actual mattress and base."
      },
      {
        "title": "Confirm what goes underneath",
        "text": "Ask whether the mattress requires a particular foundation or support system. If you want an adjustable base, verify compatibility with both the mattress and bed frame. Ask about purchase policies and warranty terms for the exact item before paying."
      }
    ],
    "faqs": [
      {
        "q": "Can I try a mattress before buying?",
        "a": "Yes. Visit the sleep gallery during store hours to compare the selection in person."
      },
      {
        "q": "Is a base included with the mattress?",
        "a": "Confirm the contents of the particular offer. Do not assume the photographed base is included in the mattress price."
      },
      {
        "q": "Do you sell mattresses online?",
        "a": "No. Purchases happen in the store. Call to check the current selection before making a trip for a particular size or model."
      }
    ],
    "guides": [
      {
        "slug": "how-to-buy-a-mattress",
        "title": "How to choose a mattress"
      },
      {
        "slug": "what-is-included-bedroom-set",
        "title": "Check your bedroom furniture package"
      }
    ]
  }
];

export const getDepartment = (slug: string) => DEPARTMENTS.find((d) => d.slug === slug);
