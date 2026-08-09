"use client";

import { useEffect, useRef, useState } from "react";

// Wraps a section photo in the one-time wipe reveal. Renders visible for
// no-JS visitors; once mounted, anything still below the viewport is hidden
// and wipes in when scrolled to. The observed outer div stays unclipped;
// the clip lives on an inner wrapper, because Chromium computes
// IntersectionObserver geometry after clip-path.
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
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
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className={`absolute inset-0 ${
          state === "hidden" ? "wipe-hidden" : state === "revealed" ? "wipe-in" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
