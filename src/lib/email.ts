import { Resend } from "resend";

// Outbound email for the contact form.
//
// Every address is an environment variable on purpose. The Resend account
// behind RESEND_API_KEY has no verified custom domain yet, so today the only
// sender it will accept is Resend's shared sandbox, onboarding@resend.dev,
// and that sandbox only delivers to the account owner's own address.
//
// That is a real constraint, not a placeholder: pointing CONTACT_TO_EMAIL at
// the store's inbox before a domain is verified would fail on every real
// submission. Verifying lqfurniture.com in Resend and setting the two
// variables below is a config change, never a code change.
//
//   CONTACT_FROM_EMAIL  defaults to the sandbox sender
//   CONTACT_TO_EMAIL    defaults to the account owner, the only address the
//                       sandbox can currently reach

const SANDBOX_FROM = "onboarding@resend.dev";
const SANDBOX_DOMAIN = "resend.dev";

// A From header with a display name is both friendlier in an inbox list and
// measurably better for deliverability than a bare address. A new sending
// domain has no reputation to lean on, so it should not give a spam filter
// any more reason to doubt it than necessary.
//
// CONTACT_FROM_EMAIL may be set either way. If it already carries a display
// name, it is used untouched; a bare address gets the default name.
const DEFAULT_FROM_NAME = "LQ Furniture Website";

function withDisplayName(from: string): string {
  const value = from.trim();
  if (value.includes("<")) return value;
  const name = process.env.CONTACT_FROM_NAME ?? DEFAULT_FROM_NAME;
  return `${name} <${value}>`;
}

export type EmailConfig = {
  apiKey: string;
  from: string;
  to: string;
  replyTo?: string;
};

export type ConfigProblem = { ok: false; error: string; detail: string };

// Resolves and validates configuration up front so a misconfigured deploy
// reports the specific missing piece instead of a generic failure.
export function getEmailConfig(): EmailConfig | ConfigProblem {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "email_unconfigured",
      detail: "RESEND_API_KEY is not set in this environment",
    };
  }

  const from = withDisplayName(process.env.CONTACT_FROM_EMAIL ?? SANDBOX_FROM);
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return {
      ok: false,
      error: "email_unconfigured",
      detail: "CONTACT_TO_EMAIL is not set in this environment",
    };
  }

  return { apiKey, from, to };
}

// True while the sender is still Resend's shared sandbox. The sandbox cannot
// deliver to arbitrary recipients, so a deploy in this state is testing-only
// and says so in its health probe rather than looking production-ready.
export function isSandboxSender(from: string): boolean {
  // `from` may be a bare address or "Display Name <address>", so the address
  // is extracted first. A suffix match on the whole string would miss the
  // second form and report a sandbox deploy as production-ready.
  const address = /<([^>]+)>/.exec(from)?.[1] ?? from;
  return address.trim().toLowerCase().endsWith(`@${SANDBOX_DOMAIN}`);
}

export type SendResult =
  | { ok: true; id: string }
  | { ok: false; error: string; detail: string };

export async function sendContactEmail(
  config: EmailConfig,
  fields: {
    name: string;
    phone: string;
    message: string;
    pageUrl: string;
    timestamp: string;
    // Set when the bot heuristics flagged this submission. It is delivered
    // either way; this only marks it so the reader can judge.
    suspicion?: string;
  },
): Promise<SendResult> {
  const resend = new Resend(config.apiKey);

  const prettyPhone = `(${fields.phone.slice(0, 3)}) ${fields.phone.slice(3, 6)}-${fields.phone.slice(6)}`;

  // Plain text alongside HTML: the store reads this on a phone, and a text
  // part keeps it out of the promotions bucket.
  const flag = fields.suspicion ? "[Possible spam] " : "";

  const text = [
    `${flag}New message from the LQ Furniture website`,
    ``,
    `Name:    ${fields.name}`,
    `Phone:   ${prettyPhone}`,
    ``,
    `Message:`,
    fields.message,
    ``,
    `---`,
    `Sent from: ${fields.pageUrl}`,
    `Received:  ${fields.timestamp}`,
    ...(fields.suspicion ? [`Flagged:   ${fields.suspicion}`] : []),
  ].join("\n");

  // Inline px styles: email clients do not support CSS variables or rem
  // reliably, so the design system's tokens are transcribed to their px
  // equivalents rather than referenced. Values track DESIGN.md: body
  // 1.0625rem/17px, small 0.9375rem/15px, label 0.75rem/12px, night #131311,
  // lamp #f4f2ec. Labels are distinguished by the uppercase label treatment
  // rather than by a lighter color, because brand fog (#a3a094) does not hold
  // contrast on a light email background.
  const label =
    "font-size:12px;letter-spacing:0.08em;text-transform:uppercase;padding:4px 16px 4px 0;vertical-align:top";

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:17px;line-height:1.6;color:#131311">
  <h2 style="font-size:22px;margin:0 0 16px">${flag}New message from the LQ Furniture website</h2>
  <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
    <tr><td style="${label}">Name</td><td style="padding:4px 0"><strong>${escapeHtml(fields.name)}</strong></td></tr>
    <tr><td style="${label}">Phone</td><td style="padding:4px 0"><a href="tel:+1${fields.phone}" style="color:#131311"><strong>${prettyPhone}</strong></a></td></tr>
  </table>
  <div style="padding:16px;background:#f4f2ec;border-radius:6px;white-space:pre-wrap">${escapeHtml(fields.message)}</div>
  <p style="margin-top:20px;font-size:15px">
    Sent from ${escapeHtml(fields.pageUrl)}<br>Received ${fields.timestamp}
    ${fields.suspicion ? `<br>Flagged by the spam check: ${escapeHtml(fields.suspicion)}. It was delivered anyway.` : ""}
  </p>
</div>`;

  try {
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      subject: `${flag}LQ Furniture website: ${fields.name}`,
      text,
      html,
      // Replies go to the store's own thread, not to the sandbox sender.
      ...(config.replyTo ? { replyTo: config.replyTo } : {}),
    });

    if (error) {
      // Resend's own message is the single most useful thing for diagnosing a
      // bad key, an unverified domain, or a blocked recipient. Keep it whole.
      return {
        ok: false,
        error: "email_rejected",
        detail: `${error.name ?? "error"}: ${error.message ?? "unknown"}`,
      };
    }
    if (!data?.id) {
      return { ok: false, error: "email_rejected", detail: "no message id returned" };
    }
    return { ok: true, id: data.id };
  } catch (err) {
    return {
      ok: false,
      error: "email_failed",
      detail: err instanceof Error ? err.message : "unknown transport error",
    };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
