"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CATEGORY_LABELS,
  FLOOR_ITEMS,
  type FloorCategory,
} from "@/lib/floor";

type Filter = FloorCategory | "all";

const FILTERS: Array<{ key: Filter; label: string }> = [
  { key: "all", label: "Everything" },
  { key: "living", label: "Living room" },
  { key: "dining", label: "Dining" },
  { key: "bedroom", label: "Bedroom" },
  { key: "recliners", label: "Recliners" },
  { key: "mattresses", label: "Mattresses" },
  { key: "lamps", label: "Lamps" },
];

type RevealState = "static" | "hidden" | "revealed";

export default function FloorBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const boardRef = useRef<HTMLDivElement>(null);
  // Figures render visible for no-JS visitors; once mounted, figures still
  // below the viewport get the reveal treatment when scrolled into view.
  const [reveals, setReveals] = useState<Map<string, RevealState>>(new Map());

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const figures = Array.from(
      board.querySelectorAll<HTMLElement>("[data-floor-id]"),
    );
    const below = figures.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    if (below.length === 0) return;
    setReveals(
      new Map(
        below.map((el) => [el.dataset.floorId as string, "hidden" as RevealState]),
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.floorId;
            if (id) {
              setReveals((prev) => {
                const next = new Map(prev);
                next.set(id, "revealed");
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    for (const el of below) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visible = FLOOR_ITEMS.filter(
    (item) => filter === "all" || item.category === filter,
  );

  return (
    <div ref={boardRef}>
      <div
        className="flex flex-wrap gap-2 px-5 sm:px-10 lg:px-16"
        role="group"
        aria-label="Filter the floor by department"
      >
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(f.key);
                // Filtering remounts figures; stale hidden states would strand
                // them clipped, so every figure renders static after a filter.
                setReveals(new Map());
              }}
              className={`lower-third min-h-12 rounded-ctl px-4 text-tag ${
                active
                  ? "bg-lq-green text-ink"
                  : "bg-cream text-ink hover:bg-sand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-2 px-2 sm:grid-cols-4 sm:gap-3 sm:px-3 lg:grid-cols-6">
        {visible.map((item) => {
          const state = reveals.get(item.id) ?? "static";
          const wipeCls =
            state === "hidden" ? "wipe-hidden" : state === "revealed" ? "wipe-in" : "";
          const thirdCls =
            state === "hidden" ? "third-hidden" : state === "revealed" ? "third-up" : "";
          const soldCls =
            state === "hidden" ? "sold-hidden" : state === "revealed" ? "sold-pop" : "-rotate-3";
          return (
            <figure
              key={item.id}
              data-floor-id={item.id}
              className={`relative m-0 ${item.span}`}
            >
              <div className={wipeCls}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={2200}
                  height={1650}
                  sizes={`(min-width: 1024px) ${item.span.includes("lg:col-span-3") ? 50 : 34}vw, (min-width: 640px) 50vw, ${item.span.startsWith("col-span-1") ? "50vw" : "100vw"}`}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <figcaption
                className={`absolute bottom-2 left-2 flex max-w-[calc(100%-1rem)] items-center ${thirdCls}`}
              >
                <span className="lower-third truncate sm:whitespace-normal bg-lq-green px-2 py-1.5 text-[0.6875rem] text-ink sm:px-3 sm:py-2 sm:text-tag">
                  {item.name}
                </span>
                <span className="lower-third hidden shrink-0 bg-paper px-3 py-2 text-tag text-ink sm:inline">
                  {CATEGORY_LABELS[item.category]}
                </span>
              </figcaption>
              {item.sold ? (
                <span
                  className={`display absolute right-3 top-3 border-[3px] border-lq-press bg-paper px-3 py-0.5 text-h3 text-lq-deep ${soldCls}`}
                >
                  Sold
                </span>
              ) : null}
            </figure>
          );
        })}
      </div>

      <p className="lower-third px-5 pt-5 text-tag text-stone sm:px-10 lg:px-16">
        Shot on our floor. Sold means somebody beat you to it.
      </p>
    </div>
  );
}
