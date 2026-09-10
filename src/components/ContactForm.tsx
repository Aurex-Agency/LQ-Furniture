"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "sending" | "done" | "error";
type Field = "name" | "phone" | "message";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [badField, setBadField] = useState<Field | null>(null);
  // When the visitor was first able to type. Set after mount so it measures
  // real time in front of the form, and so the server can reject submissions
  // that arrive faster than a person could fill it in.
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function fieldProps(field: Field) {
    const bad = status === "error" && badField === field;
    return {
      "aria-invalid": bad || undefined,
      "aria-describedby": bad ? "ct-error" : undefined,
    };
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();
    if (!name) {
      setStatus("error");
      setBadField("name");
      setMessage("Tell us your name so we know who to ask for.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith("1"))) {
      setStatus("error");
      setBadField("phone");
      setMessage("We call back rather than email, so we need a ten digit number.");
      return;
    }
    if (!body) {
      setStatus("error");
      setBadField("message");
      setMessage("Tell us what you need and we'll take it from there.");
      return;
    }
    setStatus("sending");
    setBadField(null);
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: digits.slice(-10),
          message: body,
          pageUrl: window.location.href,
          company: String(data.get("company") ?? ""),
          startedAt: startedAt.current,
        }),
      });
      if (res.status === 429) {
        setStatus("error");
        setBadField(null);
        setMessage(
          "That's a few messages in a row. Give it a few minutes, or call the store and we'll pick up.",
        );
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      // Fired only after the server confirms delivery, so the count in GA
      // matches what actually reached the store rather than what was typed.
      track("generate_lead", { form: "contact", page_path: window.location.pathname });
      setStatus("done");
    } catch {
      setStatus("error");
      setBadField(null);
      // The phone number is the reliable fallback whenever delivery fails, so
      // the visitor is never left with a dead end.
      setMessage(
        "Your message didn't go through. Please call the store at (662) 841-5959 and we'll take care of it.",
      );
    }
  }

  if (status === "done") {
    return (
      <div className="border border-night-3 bg-night-2 p-7">
        <p className="display text-h3 text-lamp">Got it</p>
        <p className="mt-3 text-body text-fog">
          Your message and number are in. For anything quick, the phone is
          faster: call us during store hours. Furniture moves faster than
          messages.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      {/* Honeypot. Positioned off-screen rather than display:none, which some
          bots check for, and hidden from assistive tech and the tab order so
          no real visitor can reach it. A filled value means a bot. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap",
        }}
      >
        <label htmlFor="ct-company">Company</label>
        <input
          id="ct-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label htmlFor="ct-name" className="label text-fog">
        Your name
      </label>
      <input
        id="ct-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        {...fieldProps("name")}
        className="mt-2 block min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp"
      />
      <label htmlFor="ct-phone" className="label mt-5 block text-fog">
        Phone number for the call back
      </label>
      <input
        id="ct-phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        {...fieldProps("phone")}
        className="mt-2 block min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp"
      />
      <label htmlFor="ct-message" className="label mt-5 block text-fog">
        What can we help with
      </label>
      <textarea
        id="ct-message"
        name="message"
        rows={5}
        required
        {...fieldProps("message")}
        className="mt-2 block w-full rounded-ctl border border-night-3 bg-night-2 px-4 py-3 text-body text-lamp"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="label mt-6 min-h-12 btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send the message"}
      </button>
      {status === "error" ? (
        <p
          id="ct-error"
          role="alert"
          className="mt-4 max-w-xl rounded-ctl border border-night-3 bg-night-2 px-4 py-3 text-[0.9375rem] text-lamp"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
