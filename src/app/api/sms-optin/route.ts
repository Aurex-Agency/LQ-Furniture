import { NextRequest, NextResponse } from "next/server";
import { SMS_CONSENT_TEXT, SMS_CONSENT_VERSION } from "@/lib/consent";

// TCPA record keeping: every accepted opt-in logs the consent text version,
// timestamp, IP, page URL, and checkbox state. Records currently go to the
// deployment log stream; wire this to the SMS platform's API once the client
// picks one, keeping every field below.

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { phone, consented, pageUrl } = (body ?? {}) as {
    phone?: unknown;
    consented?: unknown;
    pageUrl?: unknown;
  };

  if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (consented !== true) {
    // Consent must be an affirmative, unchecked-by-default action.
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }
  if (typeof pageUrl !== "string" || pageUrl.length > 500) {
    return NextResponse.json({ ok: false, error: "invalid_page" }, { status: 400 });
  }

  const record = {
    type: "sms_consent",
    consentVersion: SMS_CONSENT_VERSION,
    consentText: SMS_CONSENT_TEXT,
    checkboxState: true,
    phone,
    pageUrl,
    timestamp: new Date().toISOString(),
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown",
    userAgent: req.headers.get("user-agent") ?? "unknown",
  };

  console.log(JSON.stringify(record));

  return NextResponse.json({ ok: true });
}
