import Seo from '../components/Seo'
import { games } from '../data/company'
import { CircleRings, DiamondGrid } from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Games() {
  useRevealOnScroll()

  return (
    <>
      <Seo
        title="Games"
        description="Original mobile titles from TuTu Fun Games — Enso Block, Number Cross, and Lumitris."
      />

      <section className="container-x pt-12 md:pt-20 pb-16 relative overflow-hidden">
        <div className="deco-shape top-[20%] right-[5%] text-yellow-deep/40 animate-float-slow">
          <CircleRings size={140} />
        </div>

        <p className="eyebrow animate-rise-in stagger-1">Games</p>
        <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[88px] leading-[1] tracking-tightest text-balance max-w-5xl">
          <span className="block animate-rise-in stagger-2">Original titles,</span>
          <span className="block animate-rise-in stagger-3">
            made with{' '}
            <span className="relative inline-block font-display tracking-deco">
              <span className="relative z-10 px-3">INTENTION.</span>
              <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
            </span>
          </span>
        </h1>
      </section>

      <section className="container-x py-16 md:py-20 hairline space-y-24 md:space-y-32">
        {games.map((g, i) => (
          <article
            key={g.slug}
            className={`grid md:grid-cols-12 gap-8 md:gap-12 observe-fade ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="md:col-span-7">
              <CoverFrame g={g} />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <p className="eyebrow">
                {g.year} · {g.genre}
              </p>
              <h2 className="mt-4 font-sans font-bold text-[32px] md:text-[48px] tracking-tightest leading-[1.05] text-balance">
                {g.title}
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink/80 leading-relaxed">
                {g.description}
              </p>

              <dl className="mt-8 space-y-3 text-sm">
                <Row label="Status" value={g.status} />
                <Row label="Genre" value={g.genre} />
                <Row label="Platforms" value={g.platforms.join(' · ')} />
              </dl>

              {(g.appStore || g.playStore) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {g.appStore && (
                    <a
                      href={g.appStore}
                      className="btn-yellow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      App Store →
                    </a>
                  )}
                  {g.playStore && (
                    <a
                      href={g.playStore}
                      className="btn-ghost"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Play →
                    </a>
                  )}
                </div>
              )}
              {!g.appStore && !g.playStore && (
                <p className="mt-8 text-sm text-ink/60 italic">Coming soon.</p>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-2.5 border-t-2 border-ink/10">
      <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
        {label}
      </dt>
      <dd className="text-ink/90">{value}</dd>
    </div>
  )
}

function CoverFrame({ g }) {
  const t = g.theme
  const inner = (
    <div className={`aspect-[4/3] ${t.cardBg} rounded-sm relative overflow-hidden border-2 ${t.cardBorder} group`}>
      <div className="absolute inset-0 grid place-items-center p-8 md:p-12">
        {g.icon ? (
          <img
            src={g.icon}
            alt={`${g.title} icon`}
            loading="lazy"
            className={`h-full max-h-[280px] aspect-square rounded-[22%] shadow-2xl ring-1 ${t.iconRing} transition-transform duration-700 group-hover:scale-105`}
          />
        ) : (
          <span className={`${t.deco} font-display text-[60px] md:text-[100px] tracking-deco text-center leading-[0.95] whitespace-pre-line`}>
            {g.coverWord}
          </span>
        )}
      </div>
      <div className="absolute top-5 left-5">
        <span className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${t.badge}`}>
          {g.status}
        </span>
      </div>
      <div className={`absolute -bottom-4 -right-4 ${t.deco} group-hover:rotate-12 transition-transform duration-700 pointer-events-none`}>
        <DiamondGrid size={120} />
      </div>
    </div>
  )

  if (g.appStore) {
    return (
      <a
        href={g.appStore}
        target="_blank"
        rel="noreferrer"
        aria-label={`${g.title} on the App Store`}
        className="block"
      >
        {inner}
      </a>
    )
  }
  return inner
}
