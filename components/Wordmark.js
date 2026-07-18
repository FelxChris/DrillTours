export default function Wordmark({ color = "#FAF8F3", size = 26 }) {
  return (
    <div
      className="font-body leading-none whitespace-nowrap"
      style={{ color, fontSize: size }}
    >
      <span style={{ fontWeight: 400 }}>Drill</span>
      <span style={{ fontWeight: 800 }}>Tours</span>
    </div>
  );
}
