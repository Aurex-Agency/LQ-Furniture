"use client";

import { useState } from "react";
import { SMS_CONSENT_TEXT } from "@/lib/consent";
import { TENURE_OPTIONS, type Tenure } from "@/lib/signup";

type Status = "idle" | "sending" | "done" | "error";
type Field = "firstName" | "phone" | "consent";

export default function SmsForm() {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [tenure, setTenure] = useState<Tenure | "">("");
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [badField, setBadField] = useState<Field | null>(null);

  function fieldProps(field: Field) {
    const bad = status === "error" && badField === field;
    return {
      "aria-invalid": bad || undefined,
      "aria-describedby": bad ? "sms-error" : undefined,
    };
  }

  function fail(field: Field, text: string) {
    setStatus("error");
    setBadField(field);
    setMessage(text);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = firstName.trim();
    if (!name) {
      fail("firstName", "Tell us your first name so the texts aren't from a stranger.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith("1"))) {
      fail("phone", "That number doesn't look right. Ten digits, like 662 555 0142.");
      return;
    }
    if (!consented) {
      fail("consent", "Check the box first so we know you want the texts.");
      return;
    }
    setStatus("sending");
    setBadField(null);
    setMessage("");
    try {
      const res = await fetch("/api/sms-optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.slice(0, 60),
          phone: digits.slice(-10),
          tenure,
          consented: true,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      fail("phone", "Something broke on our end. Try again, or just call us.");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-night-3 bg-night-2 p-7">
        <p className="display text-h3 text-lamp">
          You&apos;re on the list{firstName.trim() ? `, ${firstName.trim()}` : ""}
        </p>
        <p className="mt-3 text-body text-fog">
          Watch for a text from us. Reply STOP any time and we stop.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="sms-first-name" className="label text-fog">
            First name
          </label>
          <input
            id="sms-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            {...fieldProps("firstName")}
            className="mt-3 min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp placeholder:text-fog"
          />
        </div>
        <div className="sm:flex-1">
          <label htmlFor="sms-phone" className="label text-fog">
            Mobile number
          </label>
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
            {...fieldProps("phone")}
            className="mt-3 min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp placeholder:text-fog"
          />
        </div>
      </div>

      {/* The one question that isn't required. Regulars and first timers
          hear about different loads. */}
      <fieldset className="mt-7 border-0 p-0">
        <legend className="label text-fog">
          How long have you shopped with us?
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {TENURE_OPTIONS.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="tenure"
                value={option}
                checked={tenure === option}
                onChange={() => setTenure(option)}
                className="peer sr-only"
              />
              <span className="label flex min-h-12 items-center rounded-ctl border border-night-3 px-5 text-fog transition-colors hover:border-fog hover:text-lamp peer-checked:border-lq-green peer-checked:bg-lq-green peer-checked:text-night peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-lamp">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label
        htmlFor="sms-consent"
        className="mt-7 flex min-h-12 max-w-xl cursor-pointer items-start gap-3 py-2"
      >
        <input
          id="sms-consent"
          name="consent"
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          {...fieldProps("consent")}
          className="mt-1 size-5 shrink-0 accent-(--color-lq-green)"
        />
        <span className="text-[0.9375rem] leading-relaxed text-fog">
          {SMS_CONSENT_TEXT}{" "}
          <a
            href="/terms"
            className="text-lamp underline underline-offset-4 hover:text-lq-press"
          >
            Terms and conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-lamp underline underline-offset-4 hover:text-lq-press"
          >
            privacy policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="label mt-6 flex min-h-12 w-full items-center justify-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Joining" : "Join the text list"}
      </button>

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
