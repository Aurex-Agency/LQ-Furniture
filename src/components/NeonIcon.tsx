// Tube-bent department icons, drawn like the shop's neon signage. Pure
// stroke geometry, always decorative (aria-hidden), always neon-stroke.

const PATHS: Record<string, string> = {
  sofa: "M12 34v-7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v1h20v-1a5 5 0 0 1 5-5 5 5 0 0 1 5 5v7a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4Zm10-6h20M18 38v4m28-4v4M22 22v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6",
  bed: "M10 42V20m0 14h44v8M10 28h40a4 4 0 0 1 4 4v2M14 28v-8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8",
  dining: "M10 20h44M16 20l-2 22m34-22 2 22M26 20l-1 10m14-10 1 10",
  lamp: "M25 6h14l7 16H18l7-16Zm7 16v18m-9 2h18",
  mattress: "M8 20a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v14H8V20Zm0 8h48M8 34v6m48-6v6",
  recliner: "M20 8h14a4 4 0 0 1 4 4v14H20V8Zm-6 18h32v10H14V26Zm0 10v6m32-6v6m-8-16v-4",
};

export type NeonIconKind = keyof typeof PATHS;

export default function NeonIcon({
  kind,
  className = "w-12",
}: {
  kind: NeonIconKind;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 48"
      className={className}
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[kind]} className="neon-stroke" />
    </svg>
  );
}
