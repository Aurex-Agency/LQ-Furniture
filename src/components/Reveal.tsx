"use client";

import { useEffect, useRef, useState } from "react";

// Wraps a photograph in the lights-up reveal: the display sits dark until
// you reach it, then brightens and settles. Renders visible for no-JS
// visitors; once mounted, anything still below the viewport goes dark and
// lights up when scrolled to. The observed outer div stays unfiltered; the
// effect lives on an inner wrapper so IntersectionObserver geometry and
// hover filters stay clean.
export default function Reveal({
  children,
  className = "",
  inner = "absolute inset-0",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  inner?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "revealed">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The observer's first callback reports position without a synchronous
    // layout read. Calling getBoundingClientRect() here instead forced a
    // layout flush per instance during hydration, and this component is
    // mounted a dozen times on the homepage alone.
    //
    // Anything already at or above the fold on that first callback stays
    // visible; only elements still below it go dark and light up on scroll.
    let settled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!settled) {
            settled = true;
            // boundingClientRect comes from the observer, already measured.
            const below = entry.boundingClientRect.top > window.innerHeight;
            if (!below) {
              observer.disconnect();
              return;
            }
            setState("hidden");
            // Not yet on screen: wait for the intersection that follows.
            if (!entry.isIntersecting) continue;
          }
          if (entry.isIntersecting) {
            setState("revealed");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className={`${inner} ${
          state === "hidden" ? "lit-hidden" : state === "revealed" ? "lit-go" : ""
        }`}
        style={
          state === "revealed" && delay ? { animationDelay: `${delay}ms` } : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
