"use client";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import Mark from "@/components/Mark";

const SUPPORT_WHATSAPP_NUMBER = "233246361258";

export default function ConfirmationContent() {
  const params = useSearchParams();
  const name = params.get("name") || "";
  const destination = params.get("destination") || "";

  const whatsappMessage = encodeURIComponent(
    `Hi Drill Tours, I just submitted a reservation${destination ? ` for ${destination}` : ""}${
      name ? ` under the name ${name}` : ""
    } and wanted to follow up.`
  );

  return (
    <section className="bg-ivory text-ink py-24 min-h-[70vh] flex items-center">
      <div className="max-w-[640px] mx-auto px-8 text-center">
        <div className="flex justify-center mb-8">
          <Mark size={48} circle animate />
        </div>

        <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4">
          RESERVATION RECEIVED
        </div>
        <h1 className="font-display text-[clamp(28px,4vw,40px)] leading-tight mb-5">
          Thank you{name ? `, ${name}` : ""}.
        </h1>
        <p className="text-[15.5px] text-neutral-600 leading-relaxed mb-2">
          {destination ? (
            <>
              We&rsquo;ve logged your request for <strong>{destination}</strong>.
            </>
          ) : (
            <>We&rsquo;ve logged your request.</>
          )}{" "}
          A travel designer will confirm availability and pricing within one business day, by
          email.
        </p>
        <p className="text-[15.5px] text-neutral-600 leading-relaxed mb-10">
          For an urgent departure, you don&rsquo;t need to wait — reach us directly on WhatsApp
          and we&rsquo;ll pick it up right away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-forest text-forest px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-forest hover:text-ivory transition-colors"
          >
            Follow Up on WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-neutral-400 text-neutral-600 px-7 py-3.5 text-xs uppercase tracking-widest hover:border-ink hover:text-ink transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-[12.5px] text-neutral-500 mt-10">
          Didn&rsquo;t mean to land here, or need to submit another request?{" "}
          <Link href="/reserve" className="underline hover:text-neutral-700">
            Make another reservation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
