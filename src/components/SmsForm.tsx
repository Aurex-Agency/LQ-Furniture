"use client";

import { useState } from "react";
import { SMS_CONSENT_TEXT } from "@/lib/consent";

type Status = "idle" | "sending" | "done" | "error";

export default function SmsForm() {
  const [phone, setPhone] = useState("");
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith("1"))) {
      setStatus("error");
      setMessage("That number doesn't look right. Ten digits, like 662 555 0142.");
      return;
    }
    if (!consented) {
      setStatus("error");
      setMessage("Check the box first so we know you want the texts.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/sms-optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: digits.slice(-10),
          consented: true,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage("Something broke on our end. Try again, or just call us.");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-night-3 bg-night-2 p-7">
        <p className="display text-h3 text-lamp">You&apos;re on the list</p>
        <p className="mt-3 text-body text-fog">
          Watch for a text from us. Reply STOP any time and we stop.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="sms-phone" className="label text-fog">
        Mobile number
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="sms-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="Your mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={status === "error" || undefined}
          aria-describedby={status === "error" ? "sms-error" : undefined}
          className="min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp placeholder:text-fog sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="label min-h-12 shrink-0 btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px disabled:opacity-60"
        >
          {status === "sending" ? "Joining" : "Join the text list"}
        </button>
      </div>

      <label
        htmlFor="sms-consent"
        className="mt-6 flex min-h-12 max-w-xl cursor-pointer items-start gap-3 py-2"
      >
        <input
          id="sms-consent"
          name="consent"
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-1 size-5 shrink-0 accent-(--color-lq-green)"
        />
        <span className="text-[0.9375rem] leading-relaxed text-fog">
          {SMS_CONSENT_TEXT}{" "}
          <a
            href="/privacy"
            className="text-lamp underline underline-offset-4 hover:text-lq-press"
          >
            Privacy policy
          </a>
          .
        </span>
      </label>

      {status === "error" ? (
        <p
          id="sms-error"
          role="alert"
          className="mt-4 max-w-xl rounded-ctl border border-night-3 bg-night-2 px-4 py-3 text-[0.9375rem] text-lamp"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
