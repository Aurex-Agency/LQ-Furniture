import { redirect } from "next/navigation";

// Phase 1 ships the brand foundation only. The homepage is built in a later
// phase; until then the root shows the style guide for review.
export default function Home() {
  redirect("/style-guide");
}
