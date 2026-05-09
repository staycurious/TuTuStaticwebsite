// Symmetric yellow dot band used as a section divider.
// Light, modern, subtly playful.
export default function DotBand() {
  // Sizes flow from edge (smallest, most transparent) to center (largest, full opacity)
  // then back. Center has a black dot inside the yellow circle.
  return (
    <div
      className="py-8 md:py-10 flex items-center justify-center gap-3 md:gap-4 select-none"
      aria-hidden
    >
      <Dot size={6} opacity={0.3} />
      <Dot size={8} opacity={0.5} />
      <Dot size={10} opacity={0.7} />
      <Dot size={14} />
      <Dot size={18} />
      <Dot size={22} />
      <Center />
      <Dot size={22} />
      <Dot size={18} />
      <Dot size={14} />
      <Dot size={10} opacity={0.7} />
      <Dot size={8} opacity={0.5} />
      <Dot size={6} opacity={0.3} />
    </div>
  )
}

function Dot({ size, opacity = 1 }) {
  return (
    <span
      className="inline-block rounded-full bg-yellow"
      style={{ width: size, height: size, opacity }}
    />
  )
}

function Center() {
  return (
    <span className="inline-grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow">
      <span className="w-4 h-4 md:w-[18px] md:h-[18px] rounded-full bg-ink" />
    </span>
  )
}
