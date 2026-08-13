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
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
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
