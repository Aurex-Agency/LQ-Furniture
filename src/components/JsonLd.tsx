import { jsonLdScript } from "@/lib/schema";

// One place that emits structured data, so the escaping rule lives in a single
// spot rather than at every call site.
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}
