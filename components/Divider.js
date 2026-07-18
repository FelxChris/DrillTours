import Mark from "./Mark";

export default function Divider({ label }) {
  return (
    <div className="flex flex-col items-center py-16">
      <Mark size={30} />
      {label && (
        <div className="font-mono text-[11px] tracking-[2px] text-neutral-500 mt-3.5 uppercase">
          {label}
        </div>
      )}
    </div>
  );
}
