import type { NextConfig } from "next";

// Content Security Policy.
//
// Scoped to what the site actually loads. The Metricool tracker is the only
// third party: it is injected by an inline bootstrap in the root layout and
// then pulls tracker.metricool.com, so 'unsafe-inline' is required for
// scripts. Next's own hydration also inlines JSON, and styles are emitted
// inline by Tailwind, so 'unsafe-inline' is required for styles too.
//
// Stated honestly: with 'unsafe-inline' present, this CSP is a defence in
// depth measure that constrains which hosts can be reached, not a strict XSS
// barrier. Tightening it further means adopting nonces throughout.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://tracker.metricool.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://tracker.metricool.com",
  "font-src 'self'",
  "connect-src 'self' https://tracker.metricool.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        // Fingerprinted build output is immutable, so it can be cached hard.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Photographs are content-addressed by filename and never edited in
        // place; a changed photo ships under a new name.
        source: "/photos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 301 rather than Next's default 308. Both are permanent redirects and
      // Google treats them the same, but 301 is the form every legacy crawler,
      // link checker and analytics tool understands, and these paths exist to
      // carry a migration off an old site.
      //
      // The GoDaddy Website Builder site that lqfurniture.com served before
      // this build. Each legacy URL goes to its closest equivalent rather than
      // all of them to the homepage, so the topical signal and any bookmark
      // survive the migration.
      { source: "/home.html", destination: "/", statusCode: 301 },
      { source: "/about-us.html", destination: "/visit", statusCode: 301 },
      { source: "/our-furniture-.html", destination: "/the-floor", statusCode: 301 },
      { source: "/faq.html", destination: "/#faq", statusCode: 301 },
      { source: "/contact-us.html", destination: "/contact", statusCode: 301 },

      // The same paths were also reachable with the GoDaddy mobile prefix.
      { source: "/mobile/:path*.html", destination: "/", statusCode: 301 },

      // Convenience paths people type or that old print material may carry.
      { source: "/hours", destination: "/visit", statusCode: 301 },
      { source: "/directions", destination: "/visit", statusCode: 301 },
      { source: "/finance", destination: "/financing", statusCode: 301 },
      { source: "/sms", destination: "/text-list", statusCode: 301 },
    ];
  },
};

export default nextConfig;
