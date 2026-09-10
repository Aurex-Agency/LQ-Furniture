import { NextRequest, NextResponse } from "next/server";
import { getEmailConfig, isSandboxSender, sendContactEmail } from "@/lib/email";
import { checkBotSignals, clientIp, rateLimit } from "@/lib/rate-limit";

// Contact messages are emailed to the address in CONTACT_TO_EMAIL via Resend.
//
// This route fails loudly, matching the SMS opt-in route. A message the store
// never receives is a lost customer, so a delivery failure returns an error to
// the visitor instead of a reassuring "got it" that hides the problem. The
// submission is logged before the send is attempted, so an outage leaves a
// record that can be replayed by hand.

// Two tiers, because one counter cannot do both jobs.
//
// REQUEST_LIMIT is a broad abuse brake on raw hits. It is deliberately loose:
// a visitor who mistypes their phone number a few times must not be locked
// out of contacting the store.
//
// SEND_LIMIT caps how many emails one address can actually cause, and only
// counts submissions that passed validation. That is the expensive operation
// and the one worth guarding tightly.
const REQUEST_LIMIT = { limit: 30, windowMs: 10 * 60 * 1000 };
const SEND_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

// Health probe: reports whether email delivery is actually wired up, without
// ever revealing the API key. `deliverable` is the honest bottom line, and it
// is false while the sender is still Resend's sandbox domain, because the
// sandbox cannot deliver to an arbitrary recipient.
export function GET() {
  const config = getEmailConfig();
  if ("ok" in config) {
    return NextResponse.json({
      ok: true,
      emailConfigured: false,
      deliverable: false,
      detail: config.detail,
    });
  }
  const sandbox = isSandboxSender(config.from);
  return NextResponse.json({
    ok: true,
    emailConfigured: true,
    deliverable: !sandbox,
    from: config.from,
    to: config.to,
    ...(sandbox
      ? {
          warning:
            "Sender is Resend's shared sandbox domain. It only delivers to the Resend account owner's own address. Verify a domain in Resend and set CONTACT_FROM_EMAIL before pointing CONTACT_TO_EMAIL at the store inbox.",
        }
      : {}),
  });
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req.headers);

  const requests = rateLimit(`contact:req:${ip}`, REQUEST_LIMIT);
  if (!requests.allowed) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(requests.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, phone, message, pageUrl, company, startedAt } = (body ?? {}) as {
    name?: unknown;
    phone?: unknown;
    message?: unknown;
    pageUrl?: unknown;
    company?: unknown;
    startedAt?: unknown;
  };

  // Bots are answered with the same shape a person gets, so a scraper cannot
  // tell a silent drop from a real delivery and keep tuning against it.
  const botCheck = checkBotSignals({ honeypot: company, startedAt });
  if (botCheck.bot) {
    console.warn(
      JSON.stringify({
        type: "contact_rejected_bot",
        reason: botCheck.reason,
        ip,
        timestamp: new Date().toISOString(),
      }),
    );
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== "string" || name.length === 0 || name.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (typeof message !== "string" || message.length === 0 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "invalid_message" }, { status: 400 });
  }
  if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
    // The page promises a call back, so a reachable number is required.
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (typeof pageUrl !== "string" || pageUrl.length > 500) {
    return NextResponse.json({ ok: false, error: "invalid_page" }, { status: 400 });
  }

  // Only well-formed submissions reach this counter, so failed validation
  // never eats a visitor's budget.
  const sends = rateLimit(`contact:send:${ip}`, SEND_LIMIT);
  if (!sends.allowed) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(sends.retryAfterSeconds) } },
    );
  }

  const timestamp = new Date().toISOString();
  const trimmedName = name.trim();
  const trimmedMessage = message.trim();

  // Written before the send, so the message survives an email outage.
  console.log(
    JSON.stringify({
      type: "contact_message",
      name: trimmedName,
      phone,
      message: trimmedMessage,
      pageUrl,
      timestamp,
    }),
  );

  const config = getEmailConfig();
  if ("ok" in config) {
    console.error(
      JSON.stringify({
        type: "contact_email_unconfigured",
        detail: config.detail,
        phone,
        timestamp,
      }),
    );
    return NextResponse.json(
      { ok: false, error: "email_unconfigured" },
      { status: 503 },
    );
  }

  const result = await sendContactEmail(config, {
    name: trimmedName,
    phone,
    message: trimmedMessage,
    pageUrl,
    timestamp,
  });

  if (!result.ok) {
    // Resend's own wording is preserved: it is what distinguishes a bad key
    // from an unverified domain from a rejected recipient.
    console.error(
      JSON.stringify({
        type: "contact_email_failed",
        error: result.error,
        detail: result.detail,
        phone,
        timestamp,
      }),
    );
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  console.log(
    JSON.stringify({ type: "contact_email_sent", id: result.id, timestamp }),
  );

  return NextResponse.json({ ok: true });
}
