const SERVICES = ["Conferences", "Government Travel", "NGO Logistics", "Executive Travel", "Business Delegations"];

export default function Corporate() {
  return (
    <section id="corporate" className="bg-forest py-24">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-emerald-100 mb-4">
            CORPORATE &amp; INSTITUTIONAL
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,40px)] text-ivory leading-tight mb-7">
            Delegations move differently. So do we.
          </h2>
          <a
            href="mailto:DrillTours@gmail.com?subject=Corporate%20Travel%20Inquiry"
            className="inline-flex items-center border border-ivory text-ivory px-6 py-3 text-xs uppercase tracking-widest hover:bg-ivory hover:text-forest transition-colors"
          >
            Talk to Our Corporate Team
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {SERVICES.map((s) => (
            <div key={s} className="border-t border-white/20 pt-4">
              <span className="font-display text-lg text-ivory">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
