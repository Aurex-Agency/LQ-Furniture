import { NextRequest, NextResponse } from "next/server";

// Contact messages currently go to the deployment log stream; wire this to
// the store's preferred inbox or CRM when the client picks one.

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, phone, message, pageUrl } = (body ?? {}) as {
    name?: unknown;
    phone?: unknown;
    message?: unknown;
    pageUrl?: unknown;
  };

  if (typeof name !== "string" || name.length === 0 || name.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (typeof message !== "string" || message.length === 0 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "invalid_message" }, { status: 400 });
  }
  if (phone !== undefined && (typeof phone !== "string" || phone.length > 40)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (typeof pageUrl !== "string" || pageUrl.length > 500) {
    return NextResponse.json({ ok: false, error: "invalid_page" }, { status: 400 });
  }

  console.log(
    JSON.stringify({
      type: "contact_message",
      name,
      phone: phone ?? "",
      message,
      pageUrl,
      timestamp: new Date().toISOString(),
    }),
  );

  return NextResponse.json({ ok: true });
}
