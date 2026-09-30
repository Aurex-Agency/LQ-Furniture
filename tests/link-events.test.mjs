import test from "node:test";
import assert from "node:assert/strict";
import { classifyStoreLink } from "../src/lib/link-events.ts";

const base = "https://lqfurniture.com";
test("classifies actual store actions without collecting destination parameters", () => {
  assert.deepEqual(classifyStoreLink("tel:+16628415959", base), { event: "click_to_call" });
  assert.deepEqual(classifyStoreLink("https://www.google.com/maps/dir/?destination=LQ", base), { event: "get_directions" });
  assert.deepEqual(classifyStoreLink("https://creditapp.towerloan.com/Apps/ConsumerApp/example", base), { event: "financing_apply", partner: "Tower Loans" });
  assert.deepEqual(classifyStoreLink("https://apply.acima.com/?private=value", base), { event: "financing_apply", partner: "Acima" });
});
test("does not inflate conversions for ordinary links or lookalike URLs", () => {
  for (const href of ["/financing", "/visit", "https://example.com/?next=synchrony.com", "https://notsynchrony.com", "https://acima.com.example.com", "https://example.com/google.com/maps", "mailto:info@lqfurniture.com", "https://["]) {
    assert.equal(classifyStoreLink(href, base), undefined, href);
  }
});
