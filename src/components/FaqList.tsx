import type { Faq } from "@/lib/faq";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-night-3">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-night-3">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-6 py-5 hover:text-lq-press">
            <span className="display text-h3 text-lamp group-hover:text-lq-press">
              {item.q}
            </span>
            <span
              aria-hidden
              className="faq-mark display shrink-0 text-h3 leading-none text-fog"
            >
              +
            </span>
          </summary>
          <div className="faq-body">
            <div>
              <p className="max-w-2xl pb-6 text-body text-fog">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
