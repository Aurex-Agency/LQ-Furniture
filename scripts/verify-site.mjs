import assert from 'node:assert/strict';
const base = process.env.SEO_BASE_URL || 'http://127.0.0.1:3010';
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 24); assert.equal(new Set(urls).size, 24);
const titles = new Set();
for (const url of urls) {
  const route = new URL(url).pathname;
  const response = await fetch(`${base}${route}`); assert.equal(response.status, 200, route);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `Title: ${route}`); titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `Canonical: ${route}`);
  assert.ok(!html.includes('googletagmanager.com/gtag/js'), 'Preview must not send GA traffic');
  assert.ok(!html.includes('tracker.metricool.com/resources/be.js'), 'Preview must not send Metricool traffic');
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) assert.doesNotThrow(() => JSON.parse(match[1]));
}
const known = await (await fetch(`${base}/contact?item=8587`)).text();
assert.ok(known.includes('Please confirm availability, dimensions and current price for Oversized gray sectional with ottoman (photo 8587).'));
const unknown = await (await fetch(`${base}/contact?item=untrusted`)).text();
assert.ok(!unknown.includes('Please confirm availability, dimensions and current price for untrusted'));
for (const route of ['/furniture/missing', '/blog/missing']) assert.equal((await fetch(`${base}${route}`)).status, 404);
const redirect = await fetch(`${base}/our-furniture-.html`, { redirect: 'manual' });
assert.equal(redirect.status, 301); assert.equal(redirect.headers.get('location'), '/the-floor');
console.log('Verified 24 rendered pages, unique titles, H1s, canonicals, JSON-LD, preview analytics isolation, inquiry prefill, legacy redirect and genuine 404s.');
