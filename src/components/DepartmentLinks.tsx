import Link from "next/link";
import { DEPARTMENTS } from "@/lib/departments";

export default function DepartmentLinks({ current }: { current?: string }) {
  return (
    <nav aria-label="Furniture departments" className="border-y border-night-3 px-5 py-8 sm:px-10 lg:px-16">
      <h2 className="display text-h3 text-lamp">Explore the departments</h2>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
        {DEPARTMENTS.map((department) => (
          <li key={department.slug}>
            <Link href={`/${department.slug}`} aria-current={current === department.slug ? "page" : undefined}
              className="inline-flex min-h-12 items-center text-body text-lq-green underline decoration-lq-green/40 underline-offset-4 hover:decoration-lq-green">
              {department.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
