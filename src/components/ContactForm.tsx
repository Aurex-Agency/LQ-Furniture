"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();
    if (!name || !body) {
      setStatus("error");
      setMessage("Give us your name and a message, and we'll take it from there.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: body, pageUrl: window.location.href }),
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
        <p className="display text-h3 text-lamp">Got it</p>
        <p className="mt-3 text-body text-fog">
          We read these during store hours and we&apos;ll get back to you. If
          it&apos;s about a piece on the floor, call instead. Furniture moves
          faster than messages.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="ct-name" className="label text-fog">
        Your name
      </label>
      <input
        id="ct-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        className="mt-2 block min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp"
      />
      <label htmlFor="ct-phone" className="label mt-5 block text-fog">
        Phone, if you want a call back
      </label>
      <input
        id="ct-phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
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
        className="mt-2 block w-full rounded-ctl border border-night-3 bg-night-2 px-4 py-3 text-body text-lamp"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="label mt-6 min-h-12 rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send the message"}
      </button>
      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 max-w-xl rounded-ctl border border-night-3 bg-night-2 px-4 py-3 text-[0.9375rem] text-lamp"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
