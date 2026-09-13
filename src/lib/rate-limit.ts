// Per-IP rate limiting and bot heuristics for the public form endpoints.
//
// Scope, stated plainly: the counter lives in the memory of one serverless
// instance. Vercel runs several, and recycles them, so a determined attacker
// spreading requests across instances gets more than the nominal limit. This
// is a cheap brake on casual form spam and runaway retries, not a security
// boundary. If real abuse shows up, move the counter to Vercel KV or put the
// endpoints behind the platform firewall; the call sites do not change.

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Keeps the map from growing without bound on a long-lived instance.
const MAX_TRACKED = 5000;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now >= existing.resetAt) {
    if (buckets.size >= MAX_TRACKED) sweep(now);
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  return {
    allowed: true,
    remaining: limit - existing.count,
    retryAfterSeconds: 0,
  };
}

function sweep(now: number) {
  for (const [k, v] of buckets) {
    if (now >= v.resetAt) buckets.delete(k);
  }
  // Still full of live entries: drop the oldest to cap memory.
  if (buckets.size >= MAX_TRACKED) {
    const oldest = [...buckets.entries()]
      .sort((a, b) => a[1].resetAt - b[1].resetAt)
      .slice(0, Math.floor(MAX_TRACKED / 4));
    for (const [k] of oldest) buckets.delete(k);
  }
}

export function clientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}

// Bot heuristics.
//
// The honeypot is a field hidden from people and left empty by them; bots that
// fill every input give themselves away. The timing check rejects submissions
// that arrive faster than a person could plausibly read and type the form.
// Both fail closed to a generic response so a scraper learns nothing about
// which check caught it.

export const MIN_FILL_MS = 2500;

// Two confidences, because the two signals are not equally trustworthy and
// treating them alike is what caused real messages to be thrown away.
//
//   "certain"  the honeypot was filled. No person can reach that field: it is
//              off-screen, out of the tab order, hidden from assistive tech,
//              and named so no autofill heuristic recognises it. Safe to drop.
//
//   "likely"   a timing signal. A fast typist, a prefetched page, a restored
//              tab or a clock skew can all produce these honestly, so they
//              are delivered with a mark on them rather than discarded.
export type BotConfidence = "certain" | "likely";

export type BotCheck =
  | { bot: false }
  | { bot: true; reason: string; confidence: BotConfidence };

export function checkBotSignals(input: {
  honeypot?: unknown;
  startedAt?: unknown;
}): BotCheck {
  if (typeof input.honeypot === "string" && input.honeypot.trim().length > 0) {
    return { bot: true, reason: "honeypot_filled", confidence: "certain" };
  }

  // A missing or malformed timestamp is treated as suspicious rather than
  // waved through: the real form always sends one.
  if (typeof input.startedAt !== "number" || !Number.isFinite(input.startedAt)) {
    return { bot: true, reason: "missing_timing", confidence: "likely" };
  }

  const elapsed = Date.now() - input.startedAt;
  if (elapsed < MIN_FILL_MS) {
    return { bot: true, reason: "submitted_too_fast", confidence: "likely" };
  }
  // A clock far in the future means a forged or broken timestamp.
  if (elapsed < 0) {
    return { bot: true, reason: "timestamp_in_future", confidence: "likely" };
  }

  return { bot: false };
}
