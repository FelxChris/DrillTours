"use client";
import { useState } from "react";

const CONTACT_WHATSAPP_NUMBER = "233246361258";
const OFFICE_ADDRESS = "26 Lolite Street, Spintex, Accra, Ghana";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] mb-6">
            Let&rsquo;s plan it together.
          </h2>
          <div className="flex flex-col gap-4 text-[14.5px]">
            <div>
              <span className="cdt-label">Email</span>
              <a href="mailto:DrillTours@gmail.com" className="hover:text-gold transition-colors">
                DrillTours@gmail.com
              </a>
            </div>
            <div>
              <span className="cdt-label">Phone</span>
              <a href="tel:+233246361258" className="hover:text-gold transition-colors">
                +233 24 636 1258
              </a>
            </div>
            <div>
              <span className="cdt-label">Headquarters</span>
              {OFFICE_ADDRESS}
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit mt-7 border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
          >
            WhatsApp Us
          </a>

          <div className="mt-8 border border-neutral-900 h-56 overflow-hidden">
            <iframe
              title="Drill Tours Ltd — Office Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`}
            />
          </div>
        </div>

        {status === "success" ? (
          <div className="border border-gold p-10 self-start">
            <h3 className="font-display text-2xl mb-2.5">Message sent.</h3>
            <p className="text-sm text-neutral-400">
              Thanks, {form.name || "there"} — we'll reply to {form.email} shortly.
            </p>
            <button
              onClick={() => {
                setForm({ name: "", email: "", message: "" });
                setStatus("idle");
              }}
              className="mt-5 text-sm text-gold border-b border-gold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="cdt-label">Name</label>
              <input
                required
                className="cdt-field"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label">Email</label>
              <input
                required
                type="email"
                className="cdt-field"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label">Message</label>
              <textarea
                required
                className="cdt-field min-h-[110px] resize-y"
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {status === "error" && (
              <div className="text-sm text-red-400 bg-red-950/30 border border-red-800 px-4 py-3">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-fit border border-ivory text-ivory px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-ivory hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
