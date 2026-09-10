import type { ReactNode } from "react";
import Link from "next/link";

// Inline links, written as [text](/path).
//
// Posts point at the financing page, the floor and the text list constantly,
// and a post that names those pages without linking them wastes the internal
// link that both a reader and a crawler are looking for. Internal paths use
// next/link so navigation stays client-side; anything external is a plain
// anchor that opens in a new tab.
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function inline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK.lastIndex = 0;

  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (label && href) {
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} className="text-lq-green underline underline-offset-2">
            {label}
          </Link>
        ) : (
          <a
            key={m.index}
            href={href}
            className="text-lq-green underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out.length === 1 ? out[0] : out;
}

// Renders a post's block list.
//
// The format stays plain strings so posts remain typed data with no CMS and
// no markdown dependency, but it now covers lists and tables as well as
// prose. That is not decoration: a comparison people are trying to settle,
// like which financing runs a credit check, is read faster as a table than as
// a paragraph, by a shopper on a phone and by the answer engines that quote
// this page.

type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

function parse(body: readonly string[]): Block[] {
  const blocks: Block[] = [];

  for (const raw of body) {
    const line = raw.trimEnd();

    if (line.startsWith("## ")) {
      blocks.push({ kind: "h2", text: line.slice(3) });
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ kind: "h3", text: line.slice(4) });
      continue;
    }

    // Consecutive list items merge into one list.
    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      const item = line.slice(2);
      if (last?.kind === "ul") last.items.push(item);
      else blocks.push({ kind: "ul", items: [item] });
      continue;
    }

    // Consecutive pipe rows merge into one table; the first row is the header.
    if (line.startsWith("|")) {
      const cells = line
        .split("|")
        .slice(1)
        .map((c) => c.trim())
        .filter((c, i, arr) => !(i === arr.length - 1 && c === ""));
      const last = blocks[blocks.length - 1];
      if (last?.kind === "table") last.rows.push(cells);
      else blocks.push({ kind: "table", head: cells, rows: [] });
      continue;
    }

    if (line.length > 0) blocks.push({ kind: "p", text: line });
  }

  return blocks;
}

export default function PostBody({ body }: { body: readonly string[] }) {
  const blocks = parse(body);

  return (
    <>
      {blocks.map((block, i): ReactNode => {
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={i} className="display mt-10 text-h3 text-lamp">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="label mt-8 text-lamp">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-2">
                {block.items.map((item, n) => (
                  <li
                    key={n}
                    className="relative pl-5 text-body-lg leading-relaxed text-lamp before:absolute before:left-0 before:text-lq-green before:content-['—']"
                  >
                    {inline(item)}
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              // Tables are the one thing allowed to scroll sideways on a
              // phone, inside their own container, so the page itself never
              // does.
              <div key={i} className="mt-6 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-night-3">
                      {block.head.map((cell, n) => (
                        <th key={n} className="label py-3 pr-6 align-bottom text-fog">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, n) => (
                      <tr key={n} className="border-b border-night-3/60">
                        {row.map((cell, m) => (
                          <td
                            key={m}
                            className="py-3 pr-6 align-top text-body leading-relaxed text-lamp"
                          >
                            {inline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return (
              <p key={i} className="mt-5 text-body-lg leading-relaxed text-lamp">
                {inline(block.text)}
              </p>
            );
        }
      })}
    </>
  );
}
