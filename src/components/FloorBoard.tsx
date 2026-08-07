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

export default function FloorBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const boardRef = useRef<HTMLDivElement>(null);
  // Stamps render visible for no-JS visitors; once mounted, stamps still
  // below the viewport are hidden and land when scrolled into view.
  const [armed, setArmed] = useState(false);
  const [landed, setLanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const stamps = Array.from(
      board.querySelectorAll<HTMLElement>("[data-stamp-id]"),
    );
    const below = stamps.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    if (below.length === 0) return;
    setArmed(true);
    const belowIds = new Set(
      below.map((el) => el.dataset.stampId as string),
    );
    // Items already on screen stay landed from the start.
    setLanded(
      new Set(
        stamps
          .map((el) => el.dataset.stampId as string)
          .filter((id) => !belowIds.has(id)),
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.stampId;
            if (id) {
              setLanded((prev) => {
                if (prev.has(id)) return prev;
                const next = new Set(prev);
                next.add(id);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.6 },
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
              onClick={() => setFilter(f.key)}
              className={`min-h-12 rounded-ctl border px-4 font-mono text-tag uppercase ${
                active
                  ? "border-lq-green text-lq-green"
                  : "border-ink-line text-bone hover:border-ash"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-px bg-ink-line sm:grid-cols-4 lg:grid-cols-6">
        {visible.map((item) => {
          const stampState = !item.sold
            ? "none"
            : !armed || landed.has(item.id)
              ? "landed"
              : "hidden";
          return (
            <figure key={item.id} className={`relative m-0 bg-ink ${item.span}`}>
              <Image
                src={item.src}
                alt={item.alt}
                width={2200}
                height={1650}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 flex max-w-full items-center gap-px">
                <span className="bg-ink px-3 py-2 font-mono text-tag uppercase text-bone">
                  {item.name}
                </span>
                <span className="hidden bg-ink px-3 py-2 font-mono text-tag uppercase text-ash sm:inline">
                  {CATEGORY_LABELS[item.category]}
                </span>
              </figcaption>
              {item.sold ? (
                <span
                  data-stamp-id={item.id}
                  className={`display absolute right-4 top-4 border-[3px] border-lq-green bg-ink px-3 py-0.5 text-h3 text-lq-green ${
                    stampState === "hidden" ? "stamp-hidden" : ""
                  } ${stampState === "landed" && armed ? "stamp-land" : "-rotate-6"}`}
                >
                  Sold
                </span>
              ) : null}
            </figure>
          );
        })}
      </div>

      <p className="px-5 pt-4 font-mono text-tag uppercase text-ash sm:px-10 lg:px-16">
        Shot on our floor. Sold means somebody beat you to it.
      </p>
    </div>
  );
}
