import { NextRequest, NextResponse } from "next/server";
import { SMS_CONSENT_TEXT, SMS_CONSENT_VERSION } from "@/lib/consent";
import { isTenure } from "@/lib/signup";

// TCPA record keeping: every accepted opt-in logs the consent text version,
// timestamp, IP, page URL, and checkbox state to the deployment log stream,
// then forwards the contact to the CRM webhook in GHL_SMS_WEBHOOK_URL.
//
// The log write happens first and always, so a webhook outage never loses
// the consent record; a configured webhook that fails returns an error to
// the visitor rather than telling them they joined when they did not.

const WEBHOOK_TIMEOUT_MS = 8000;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { firstName, phone, tenure, consented, pageUrl } = (body ?? {}) as {
    firstName?: unknown;
    phone?: unknown;
    tenure?: unknown;
    consented?: unknown;
    pageUrl?: unknown;
  };

  if (
    typeof firstName !== "string" ||
    firstName.trim().length === 0 ||
    firstName.length > 60
  ) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  // The tenure question is optional; anything outside the offered answers
  // is dropped rather than trusted.
  const answeredTenure = isTenure(tenure) ? tenure : "";
  if (consented !== true) {
    // Consent must be an affirmative, unchecked-by-default action.
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }
  if (typeof pageUrl !== "string" || pageUrl.length > 500) {
    return NextResponse.json({ ok: false, error: "invalid_page" }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const userAgent = req.headers.get("user-agent") ?? "unknown";

  const record = {
    type: "sms_consent",
    consentVersion: SMS_CONSENT_VERSION,
    consentText: SMS_CONSENT_TEXT,
    checkboxState: true,
    firstName: firstName.trim(),
    phone,
    tenure: answeredTenure,
    pageUrl,
    timestamp,
    ip,
    userAgent,
  };

  console.log(JSON.stringify(record));

  const webhookUrl = process.env.GHL_SMS_WEBHOOK_URL;
  if (!webhookUrl) {
    // Unconfigured is not a visitor-facing failure: the consent record is
    // already durable in the log above and can be replayed by hand.
    console.warn(
      JSON.stringify({ type: "sms_consent_webhook_unconfigured", timestamp }),
    );
    return NextResponse.json({ ok: true });
  }

  // Flat keys, E.164 phone: the shape the CRM maps fields from.
  const payload = {
    firstName: firstName.trim(),
    phone: `+1${phone}`,
    customerSince: answeredTenure,
    consented: true,
    consentText: SMS_CONSENT_TEXT,
    consentVersion: SMS_CONSENT_VERSION,
    consentTimestamp: timestamp,
    optInPageUrl: pageUrl,
    optInIp: ip,
    optInUserAgent: userAgent,
    source: "LQ Furniture website text list",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`webhook_status_${res.status}`);
  } catch (err) {
    // Log enough to replay the contact by hand, never the webhook URL.
    console.error(
      JSON.stringify({
        type: "sms_consent_webhook_failed",
        reason: err instanceof Error ? err.message : "unknown",
        phone,
        timestamp,
      }),
    );
    return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
