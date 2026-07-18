const SCHEDULE = [
  {
    time: "11:00 AM",
    title: "Gates Open",
    desc: "Mohee Food Court welcomes clans and visitors — food vendors and merchandise pickup open from the start.",
  },
  {
    time: "Afternoon",
    title: "Clan Processions",
    desc: "Adibiawe, Lomobiawe, Kabiawe, and neighboring clans arrive in colour, drumming their way through the grounds.",
  },
  {
    time: "Early Evening",
    title: "Live Drumming & Dance",
    desc: "Traditional Ada rhythm sets the pace before the sound system takes over.",
  },
  {
    time: "Night",
    title: "Rep Your Clan Concert",
    desc: "The main stage lights up — DJ sets and live performances running till late.",
  },
];

export default function FestivalProgramme() {
  return (
    <section className="bg-ivory text-ink py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[600px] mb-14">
          <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4 uppercase">
            The Programme
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight">
            One day, Sege to sundown.
          </h2>
        </div>

        <div>
          {SCHEDULE.map((item, i) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 py-7 ${
                i === SCHEDULE.length - 1 ? "" : "border-b border-neutral-300"
              }`}
            >
              <div className="font-mono text-[13px] tracking-[1px] text-forest uppercase">
                {item.time}
              </div>
              <div>
                <h3 className="font-display text-xl mb-1.5">{item.title}</h3>
                <p className="text-[14.5px] text-neutral-600 leading-relaxed max-w-[560px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-neutral-500 max-w-[600px]">
          Times are approximate and may shift on the day — follow{" "}
          <a
            href="https://www.instagram.com/cliffdrills/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest underline"
          >
            @cliffdrills
          </a>{" "}
          for live updates.
        </p>
      </div>
    </section>
  );
}
