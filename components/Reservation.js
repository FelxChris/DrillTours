"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter, Link } from "@/i18n/routing";
import { PACKAGES } from "./Packages";

const initialForm = {
  name: "",
  email: "",
  country: "",
  phone: "",
  destination: "",
  travelers: "1",
  date: "",
  pkg: "",
  notes: "",
};

const RESERVATION_WHATSAPP_NUMBER = "233246361258";

export default function Reservation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMessage, setErrorMessage] = useState("");

  // Deep-link prefill — e.g. /reserve?destination=Asafotufiami+Festival%2C+Ada&pkg=Cultural+Experiences
  // lets other pages (like the festival page's "Book Festival + Tour" button) send someone here
  // with the relevant fields already filled in, instead of starting from a blank form.
  useEffect(() => {
    const destination = searchParams.get("destination");
    const pkg = searchParams.get("pkg");
    const notes = searchParams.get("notes");
    if (destination || pkg || notes) {
      setForm((f) => ({
        ...f,
        ...(destination ? { destination } : {}),
        ...(pkg ? { pkg } : {}),
        ...(notes ? { notes } : {}),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      const params = new URLSearchParams();
      if (form.name) params.set("name", form.name);
      if (form.destination) params.set("destination", form.destination);
      router.push(`/reserve/confirmed?${params.toString()}`);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Drill Tours, I'd like to make a reservation${form.destination ? ` for ${form.destination}` : ""}.`
  );

  return (
    <section id="reserve" className="bg-ivory text-ink py-24">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4">
            RESERVATION
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-4">
            Tell us where, we&rsquo;ll handle how.
          </h2>
          <p className="text-[14.5px] text-neutral-600 leading-relaxed mb-6">
            Submit your details and a travel designer will confirm availability and pricing
            within one business day. For urgent departures, reach us directly on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${RESERVATION_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-forest text-forest px-6 py-3 text-xs uppercase tracking-widest hover:bg-forest hover:text-ivory transition-colors"
          >
            Reserve via WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="cdt-label !text-neutral-500">Full Name</label>
              <input
                required
                className="cdt-field !text-ink !border-neutral-300"
                placeholder="Ama Owusu"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Email</label>
              <input
                required
                type="email"
                className="cdt-field !text-ink !border-neutral-300"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Country</label>
              <input
                className="cdt-field !text-ink !border-neutral-300"
                placeholder="Ghana"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Phone Number</label>
              <input
                className="cdt-field !text-ink !border-neutral-300"
                placeholder="+233 ..."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Destination</label>
              <input
                className="cdt-field !text-ink !border-neutral-300"
                placeholder="e.g. Cape Coast, Ghana"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Number of Travelers</label>
              <input
                type="number"
                min="1"
                className="cdt-field !text-ink !border-neutral-300"
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Travel Date</label>
              <input
                type="date"
                className="cdt-field !text-ink !border-neutral-300"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div>
              <label className="cdt-label !text-neutral-500">Package Type</label>
              <select
                className="cdt-field !text-ink !border-neutral-300"
                value={form.pkg}
                onChange={(e) => setForm({ ...form, pkg: e.target.value })}
              >
                <option value="">Select a package</option>
                {PACKAGES.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="cdt-label !text-neutral-500">Additional Notes</label>
              <textarea
                className="cdt-field !text-ink !border-neutral-300 min-h-[70px] resize-y"
                placeholder="Dietary needs, accessibility, special occasions…"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            {status === "error" && (
              <div className="sm:col-span-2 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                {errorMessage}
              </div>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full justify-center inline-flex border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting…" : "Submit Reservation"}
              </button>
              <p className="text-[11.5px] text-neutral-500 mt-3 text-center">
                By submitting, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-neutral-700">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="underline hover:text-neutral-700">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </form>
      </div>
    </section>
  );
}
