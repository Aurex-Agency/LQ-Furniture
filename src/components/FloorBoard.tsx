"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CATEGORY_LABELS,
  FLOOR_ITEMS,
  type FloorCategory,
  type FloorItem,
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

function countFor(key: Filter): number {
  if (key === "all") return FLOOR_ITEMS.length;
  return FLOOR_ITEMS.filter((i) => i.category === key).length;
}

type RevealState = "static" | "hidden" | "revealed";

export default function FloorBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const boardRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openItem, setOpenItem] = useState<FloorItem | null>(null);
  // Figures render visible for no-JS visitors; once mounted, figures still
  // below the viewport open like lit displays when scrolled into view.
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
      { threshold: 0.3 },
    );
    for (const el of below) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function openLightbox(item: FloorItem) {
    setOpenItem(item);
    dialogRef.current?.showModal();
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  const visible = FLOOR_ITEMS.filter(
    (item) => filter === "all" || item.category === filter,
  );

  return (
    <div ref={boardRef}>
      <div
        className="flex flex-wrap gap-x-6 gap-y-2 px-5 sm:px-10 lg:px-16"
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
                // Filtering remounts figures; stale hidden states would
                // strand them clipped, so everything renders static after.
                setReveals(new Map());
              }}
              className={`label flex min-h-12 items-center gap-2 border-b-2 pt-0.5 ${
                active
                  ? "border-lq-green text-lamp"
                  : "border-transparent text-fog hover:text-lamp"
              }`}
            >
              {f.label}
              <span className={active ? "text-lq-press" : "text-fog/70"}>
                {countFor(f.key)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:gap-x-8 lg:px-16">
        {visible.map((item, i) => {
          const state = reveals.get(item.id) ?? "static";
          const maskCls =
            state === "hidden" ? "lit-hidden" : state === "revealed" ? "lit-go" : "";
          const capCls =
            state === "hidden" ? "rise-hidden" : state === "revealed" ? "rise-go" : "";
          // Paired rows of one wide 3:2 piece and one 3:4 portrait at
          // matched heights, every third row a plain trio.
          const slot = i % 6;
          const wide = slot === 0 || slot === 4;
          const portrait = slot === 1 || slot === 3;
          return (
            <figure
              key={item.id}
              data-floor-id={item.id}
              className={`group m-0 ${wide ? "sm:col-span-2" : ""}`}
            >
              <button
                type="button"
                onClick={() => openLightbox(item)}
                aria-label={`See ${item.name} bigger`}
                className="block w-full cursor-zoom-in"
              >
                <span className={`block ${maskCls}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={2200}
                    height={1650}
                    sizes={wide ? "(min-width: 1024px) 67vw, 100vw" : "(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"}
                    className={`window-photo aspect-[4/3] w-full object-cover ${
                      wide ? "sm:aspect-[3/2]" : portrait ? "sm:aspect-[3/4]" : ""
                    } ${item.sold ? "opacity-55 saturate-[0.6]" : "transition-[filter] duration-500 group-hover:brightness-110"}`}
                  />
                </span>
              </button>
              <figcaption
                className={`mt-4 flex items-baseline justify-between gap-4 ${capCls}`}
              >
                <span className="display text-h3 text-lamp">
                  {item.name}
                  {item.sold ? (
                    <span className="ml-3 text-body font-normal italic text-fog">
                      sold
                    </span>
                  ) : null}
                </span>
                <span className="label shrink-0 text-fog">
                  {CATEGORY_LABELS[item.category]}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <p className="label px-5 pt-10 text-fog sm:px-10 lg:px-16">
        Tap a photo to see it bigger. Sold means somebody beat you to it.
      </p>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenItem(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeLightbox();
        }}
        className="m-auto w-[min(96vw,1100px)] bg-night p-0 backdrop:bg-night/90"
      >
        {openItem ? (
          <div className="p-3 sm:p-4">
            <Image
              src={openItem.src}
              alt={openItem.alt}
              width={2200}
              height={1650}
              sizes="96vw"
              className="max-h-[78svh] w-full object-contain"
            />
            <div className="flex items-center justify-between gap-4 px-1 py-4">
              <p className="display text-h3 text-lamp">
                {openItem.name}
                {openItem.sold ? (
                  <span className="ml-3 text-body font-normal italic text-fog">
                    sold
                  </span>
                ) : null}
              </p>
              <div className="flex items-center gap-4">
                <span className="label hidden text-fog sm:inline">
                  {CATEGORY_LABELS[openItem.category]}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="label min-h-12 rounded-ctl border border-night-3 px-5 text-lamp hover:border-fog"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
