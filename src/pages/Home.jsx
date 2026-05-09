import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import DotBand from '../components/DotBand'
import { services, games, milestones } from '../data/company'
import {
  FanShape,
  DiamondGrid,
  CircleRings,
  ZigZag,
  StackedTriangles,
} from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Home() {
  useRevealOnScroll()

  const featured = games

  return (
    <>
      <Seo />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="deco-shape top-[10%] right-[6%] text-yellow-deep/40 animate-float">
          <FanShape size={140} />
        </div>
        <div className="deco-shape top-[55%] right-[12%] text-ink/15 animate-float-slow">
          <DiamondGrid size={90} />
        </div>
        <div className="deco-shape top-[18%] left-[4%] text-yellow-deep/35 animate-float-tiny hidden md:block">
          <CircleRings size={120} />
        </div>
        <div className="deco-shape bottom-[8%] left-[20%] text-ink/15 animate-float hidden md:block">
          <StackedTriangles size={70} />
        </div>

        <div className="container-x pt-12 md:pt-20 pb-20 md:pb-28 relative">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <p className="eyebrow animate-rise-in stagger-1">
                Mobile Game Studio · Prince Edward Island, Canada
              </p>
              <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[92px] leading-[1] tracking-tightest text-balance">
                <span className="block animate-rise-in stagger-2">We bring</span>
                <span className="block animate-rise-in stagger-3">
                  <span className="relative inline-block font-display tracking-deco">
                    <span className="relative z-10 px-3">FUN</span>
                    <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
                  </span>{' '}
                  to your
                </span>
                <span className="block animate-rise-in stagger-4">digital life.</span>
              </h1>
            </div>
            <div className="md:col-span-3 animate-rise-in stagger-5">
              <p className="text-sm md:text-base text-ink/70 leading-relaxed max-w-xs">
                An independent mobile technology studio in Charlottetown, PEI — building
                original puzzle games and partnering with studios on mobile game
                development, marketing, and strategic consulting.
              </p>
              <div className="mt-6">
                <Link to="/games" className="btn-yellow">
                  Our games
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-10 hairline pt-8 animate-rise-in stagger-6">
            <Stat eyebrow="Founded" value="2024" />
            <Stat eyebrow="HQ" value="PE · Canada" />
            <Stat eyebrow="Focus" value="Mobile · Puzzle" />
            <Stat eyebrow="Markets" value="Global" />
          </div>
        </div>
      </section>

      {/* DOT BAND TRANSITION */}
      <DotBand />

      {/* SERVICES */}
      <section className="container-x pb-24 md:pb-32 relative">
        <div className="deco-shape top-10 right-0 text-yellow-deep/40 hidden md:block animate-float-slow">
          <ZigZag size={180} />
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16 observe-fade">
          <div className="md:col-span-5">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-sans font-bold text-[36px] md:text-[56px] leading-[1] tracking-tightest">
              Four practices,
              <br />
              one studio.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base md:text-lg text-ink/80 leading-relaxed max-w-xl">
              We operate as a small, integrated team across the full lifecycle of a mobile
              game — from the first prototype to live operations and growth. Bring us a
              concept, an existing title, or a market entry challenge.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="observe-fade group relative border-2 border-ink rounded-sm p-8 md:p-10 bg-cream overflow-hidden cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-ink/60">
                    {s.number}
                  </span>
                  <Arrow className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" />
                </div>
                <h3 className="font-sans font-bold text-[22px] md:text-[26px] tracking-tightest leading-[1.15] mb-4">
                  {s.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-ink/80 group-hover:text-ink transition-colors">
                  {s.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/services" className="link-underline text-sm font-medium text-moss">
            See full service breakdown →
          </Link>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-ink2 text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="deco-shape top-[10%] left-[3%] text-yellow/15 animate-float">
          <CircleRings size={180} />
        </div>
        <div className="deco-shape bottom-[10%] right-[5%] text-yellow/15 animate-float-slow">
          <FanShape size={160} />
        </div>

        <div className="container-x relative">
          <div className="flex items-end justify-between mb-12 md:mb-16 observe-fade">
            <div>
              <p className="eyebrow text-yellow">Selected work</p>
              <h2 className="mt-4 font-sans font-bold text-[36px] md:text-[56px] leading-[1] tracking-tightest">
                Original titles.
              </h2>
            </div>
            <Link to="/games" className="link-underline text-sm hidden md:inline-block hover:text-yellow transition-colors">
              All games →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featured.map((g, i) => {
              const Wrapper = g.appStore ? 'a' : Link
              const wrapperProps = g.appStore
                ? { href: g.appStore, target: '_blank', rel: 'noreferrer' }
                : { to: '/games' }
              const t = g.theme
              return (
                <Wrapper
                  {...wrapperProps}
                  key={g.slug}
                  className="group block observe-fade"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  aria-label={g.appStore ? `${g.title} on the App Store` : g.title}
                >
                  <div className={`aspect-[4/5] ${t.cardBg} rounded-sm overflow-hidden relative transition-transform duration-700 group-hover:-translate-y-2 border-2 ${t.cardBorder}`}>
                    <div className="absolute inset-0 grid place-items-center p-10 md:p-14">
                      {g.icon ? (
                        <img
                          src={g.icon}
                          alt={`${g.title} icon`}
                          loading="lazy"
                          className={`w-full aspect-square max-w-[260px] rounded-[22%] shadow-2xl ring-1 ${t.iconRing} transition-transform duration-700 group-hover:scale-105`}
                        />
                      ) : (
                        <span className={`${t.deco} font-display text-[64px] md:text-[80px] tracking-deco text-center leading-[0.95] whitespace-pre-line`}>
                          {g.coverWord}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${t.badge}`}>
                        {g.status}
                      </span>
                    </div>
                    <div className={`absolute bottom-0 right-0 ${t.deco} pointer-events-none`}>
                      <DiamondGrid size={70} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-sans font-bold text-[22px] md:text-[26px] tracking-tightest">
                        {g.title}
                      </h3>
                      <p className="text-sm text-cream/60 mt-1.5">
                        {g.genre} · {g.platforms.join(' / ')} · {g.year}
                      </p>
                    </div>
                    <Arrow className="mt-2 transition-transform group-hover:translate-x-1 text-yellow" />
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-x py-24 md:py-32 relative">
        <div className="deco-shape top-1/4 right-[3%] text-yellow-deep/30 hidden lg:block animate-float-tiny">
          <DiamondGrid size={110} />
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 observe-fade">
            <p className="eyebrow">Studio</p>
          </div>
          <div className="md:col-span-9">
            <p className="font-sans font-bold text-[28px] md:text-[44px] leading-[1.1] tracking-tightest text-balance observe-fade">
              Small studio.
              <br />
              Big ideas.
              <br />
              <span className="text-yellow-deep">Long horizons.</span>
            </p>
            <p className="mt-8 text-base md:text-lg text-ink/80 max-w-3xl leading-relaxed observe-fade">
              We design and operate original mobile puzzle games, and partner with
              other studios on game framework development, digital marketing, and
              technology consulting — bringing more than a decade of mobile and
              game-industry experience to every project.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-x-10">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex gap-5 py-4 border-t border-line observe-fade"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="font-mono text-xs text-ink/60 pt-1 min-w-[50px]">
                    {m.year}
                  </span>
                  <span className="text-sm text-ink/85 leading-relaxed">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 md:pb-32">
        <div className="yellow-grain rounded-sm p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end relative overflow-hidden border-2 border-ink observe-fade">
          <div className="absolute -top-10 -right-10 text-ink/15 animate-spin-slow">
            <CircleRings size={240} />
          </div>
          <div className="md:col-span-8 relative z-10">
            <p className="eyebrow">Let's talk</p>
            <h2 className="mt-4 font-sans font-bold text-[32px] md:text-[52px] leading-[1] tracking-tightest text-balance">
              Got a project?
              <br />
              So do we.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right relative z-10">
            <Link to="/contact" className="btn-primary">
              Get in touch now
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ eyebrow, value }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
        {eyebrow}
      </p>
      <p className="mt-2 font-sans font-bold text-[20px] md:text-[24px] tracking-tightest">
        {value}
      </p>
    </div>
  )
}

function Arrow({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
