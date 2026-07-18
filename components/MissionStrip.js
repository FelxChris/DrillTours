export default function MissionStrip() {
  return (
    <section className="border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8 py-11 flex justify-between flex-wrap gap-6">
        <p className="font-display text-lg italic text-neutral-200 max-w-[560px]">
          &ldquo;To connect travelers with authentic African experiences — without compromise on
          service, safety, or comfort.&rdquo;
        </p>
        <div className="flex gap-10 font-mono text-xs text-neutral-400">
          <div>
            <div className="text-gold text-[22px]">5</div>REGIONS
          </div>
          <div>
            <div className="text-gold text-[22px]">8</div>PACKAGE TYPES
          </div>
          <div>
            <div className="text-gold text-[22px]">9</div>GHANA SITES
          </div>
        </div>
      </div>
    </section>
  );
}
