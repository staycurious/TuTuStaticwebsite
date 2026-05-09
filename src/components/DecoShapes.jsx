// Art Deco–inspired SVG shapes used as decorative floating elements.
// They scale via width/height props and inherit color via `fill`/`stroke`.

export function FanShape({ className = '', size = 120 }) {
  // Stylized Art Deco fan / sunray
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M60 110 A50 50 0 0 1 10 60" />
        <path d="M60 110 A40 40 0 0 1 20 60" />
        <path d="M60 110 A30 30 0 0 1 30 60" />
        <path d="M60 110 A20 20 0 0 1 40 60" />
        <path d="M60 110 A10 10 0 0 1 50 60" />
        <path d="M60 110 L10 60" />
        <path d="M60 110 L60 60" />
        <path d="M60 110 L110 60" />
        <path d="M60 110 A50 50 0 0 0 110 60" />
      </g>
    </svg>
  )
}

export function DiamondGrid({ className = '', size = 100 }) {
  // Concentric diamonds
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <rect x="50" y="5" width="63.6" height="63.6" transform="rotate(45 50 50)" />
        <rect x="50" y="20" width="42.4" height="42.4" transform="rotate(45 50 50)" />
        <rect x="50" y="35" width="21.2" height="21.2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </g>
    </svg>
  )
}

export function CircleRings({ className = '', size = 140 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <circle cx="70" cy="70" r="64" />
        <circle cx="70" cy="70" r="48" />
        <circle cx="70" cy="70" r="32" />
        <circle cx="70" cy="70" r="16" />
        <line x1="6" y1="70" x2="134" y2="70" />
        <line x1="70" y1="6" x2="70" y2="134" />
      </g>
    </svg>
  )
}

export function ZigZag({ className = '', size = 120 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size / 4}
      viewBox="0 0 120 30"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 25 L12 5 L24 25 L36 5 L48 25 L60 5 L72 25 L84 5 L96 25 L108 5 L120 25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

export function Sunburst({ className = '', size = 200 }) {
  // Classic Art Deco half sunburst — 12 rays
  const rays = []
  for (let i = 0; i < 13; i++) {
    const angle = (i / 12) * 180 - 180
    const rad = (angle * Math.PI) / 180
    const x2 = 100 + Math.cos(rad) * 95
    const y2 = 100 + Math.sin(rad) * 95
    rays.push(<line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />)
  }
  return (
    <svg
      className={className}
      width={size}
      height={size / 2}
      viewBox="0 0 200 100"
      fill="none"
      aria-hidden
    >
      {rays}
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function StackedTriangles({ className = '', size = 80 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
    >
      <g fill="currentColor">
        <polygon points="40,10 70,55 10,55" opacity="0.25" />
        <polygon points="40,25 60,55 20,55" opacity="0.5" />
        <polygon points="40,40 50,55 30,55" />
      </g>
    </svg>
  )
}
