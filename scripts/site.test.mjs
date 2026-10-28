import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
function load(file, mocks = {}, globals = {}, cache = new Map()) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  const exports = {}; cache.set(absolute, exports);
  const code = ts.transpileModule(readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, { exports, process: { env: {} }, Date, URL, console, ...globals, require(name) {
    if (name in mocks) return mocks[name];
    const base = name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(absolute), name);
    return load(base + (path.extname(base) ? '' : '.ts'), mocks, globals, cache);
  } });
  return exports;
}
const { POSTS } = load('src/lib/posts.ts');
const { FURNITURE_CATEGORIES } = load('src/lib/furniture-categories.ts');
const { FLOOR_ITEMS, floorInquiry } = load('src/lib/floor.ts');
test('four new guides and two evidence-backed categories have valid links and images', () => {
  assert.equal(POSTS.length, 12);
  assert.equal(new Set(POSTS.map(post => post.slug)).size, 12);
  assert.equal(FURNITURE_CATEGORIES.length, 2);
  const routes = new Set(['/', '/the-floor', '/visit', '/contact', '/text-list', '/financing', '/weekly-drop', '/blog', ...POSTS.map(p => `/blog/${p.slug}`), ...FURNITURE_CATEGORIES.map(c => `/furniture/${c.slug}`)]);
  for (const post of POSTS) {
    assert.ok(existsSync(`public${post.image.src}`));
    for (const match of post.body.join('\n').matchAll(/\]\((\/[^)]+)\)/g)) assert.ok(routes.has(match[1].split('#')[0]), match[1]);
  }
  for (const category of FURNITURE_CATEGORIES) {
    assert.ok(FLOOR_ITEMS.filter(item => item.category === category.floorCategory).length >= 2);
    for (const guide of category.guides) assert.ok(POSTS.some(p => p.slug === guide.slug));
  }
});
test('inquiry prefill accepts only known public photo IDs', () => {
  assert.ok(floorInquiry('8587').includes('photo 8587'));
  for (const value of ['<script>', 'unknown', ['8587'], null, 8587]) assert.equal(floorInquiry(value), '');
});
function harness(file, responder, sms = false, overrides = {}) {
  const events = []; let requests = 0; let states = 0;
  const initialStates = sms ? ['Sample', '6625550100', '', true] : [];
  const jsx = (type, props) => ({ type, props });
  const module = load(file, {
    react: { useState: initial => [states < initialStates.length ? initialStates[states++] : (states++, initial), () => {}], useRef: current => ({ current }), useEffect: effect => effect() },
    'react/jsx-runtime': { jsx, jsxs: jsx },
    '@/lib/analytics': { track: (...args) => events.push(args) },
  }, {
    window: { location: { href: 'https://lqfurniture.com/contact?item=8587', pathname: '/contact' } },
    FormData: class { get(key) { return ({ name: 'Sample', phone: '6625550100', email: '', message: 'Availability question', ...overrides })[key]; } },
    fetch: async () => { requests++; return responder(requests); },
  });
  const form = module.default({ initialInquiry: floorInquiry('8587') });
  const submit = () => form.props.onSubmit({ preventDefault() {}, currentTarget: {} });
  return { submit, events, requests: () => requests };
}
for (const [file, event, sms] of [['src/components/ContactForm.tsx', 'generate_lead', false], ['src/components/SmsForm.tsx', 'join_text_list', true]]) {
  test(`${event}: pending and accepted submissions cannot send twice`, async () => {
    let finish;
    const h = harness(file, () => new Promise(resolve => { finish = resolve; }), sms);
    assert.equal(h.events.length, 0);
    const pending = h.submit(); await h.submit();
    assert.equal(h.requests(), 1); assert.equal(h.events.length, 0);
    finish({ ok: true, json: async () => ({ ok: true }) }); await pending; await h.submit();
    assert.equal(h.requests(), 1); assert.equal(h.events.length, 1); assert.equal(h.events[0][0], event);
    assert.ok(!JSON.stringify(h.events).includes('Sample'));
    assert.ok(!JSON.stringify(h.events).includes('Availability question'));
  });
  test(`${event}: failure, malformed success and network errors are retryable without counting`, async () => {
    const responses = [() => ({ ok: false, status: 503 }), () => ({ ok: true, json: async () => ({ ok: false }) }), () => { throw new Error('offline'); }, () => ({ ok: true, json: async () => ({ ok: true }) })];
    const h = harness(file, n => responses[n - 1](), sms);
    for (let i = 0; i < 3; i++) { await h.submit(); assert.equal(h.events.length, 0); }
    await h.submit(); assert.equal(h.events.length, 1);
  });
}
test('invalid contact fields do not send or count', async () => {
  const h = harness('src/components/ContactForm.tsx', () => { throw new Error('must not send'); }, false, { phone: '123' });
  await h.submit(); assert.equal(h.requests(), 0); assert.equal(h.events.length, 0);
});
test('blocked analytics cannot break ordinary actions', () => {
  const analytics = load('src/lib/analytics.ts', {}, { window: { gtag() { throw new Error('blocked'); } } });
  assert.doesNotThrow(() => analytics.track('generate_lead', { form: 'contact' }));
});
