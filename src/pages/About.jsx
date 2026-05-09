import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import {
  services,
  games,
  metrics,
  milestones,
  advantages,
  company,
} from '../data/company'
import { FanShape, DiamondGrid, CircleRings } from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function About() {
  useRevealOnScroll()

  return (
    <>
      <Seo
        title="About"
        description={`${company.legalName} — independent mobile technology studio based in Charlottetown, Prince Edward Island.`}
      />

      {/* HERO */}
      <section className="container-x pt-12 md:pt-20 pb-16 relative overflow-hidden">
        <div className="deco-shape top-[20%] right-[5%] text-yellow-deep/40 animate-float">
          <FanShape size={140} />
        </div>
        <div className="deco-shape bottom-[10%] left-[2%] text-ink/15 animate-float-slow hidden md:block">
          <DiamondGrid size={100} />
        </div>

        <p className="eyebrow animate-rise-in stagger-1">About the studio</p>
        <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[88px] leading-[1] tracking-tightest text-balance max-w-5xl">
          <span className="block animate-rise-in stagger-2">A mobile studio</span>
          <span className="block animate-rise-in stagger-3">
            built around{' '}
            <span className="relative inline-block font-display tracking-deco">
              <span className="relative z-10 px-3">CRAFT</span>
              <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
            </span>
          </span>
          <span className="block animate-rise-in stagger-4">and operations.</span>
        </h1>
      </section>

      {/* WHO WE ARE */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8 observe-fade">
          <div className="md:col-span-3">
            <p className="eyebrow">Who we are</p>
          </div>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-ink/85">
            <p>
              {company.legalName} is an independent mobile technology studio
              incorporated and operating in Charlottetown, Prince Edward Island. We
              develop original mobile games and provide game framework development,
              digital marketing, and technology consulting services to clients across
              the industry.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITY METRICS */}
      <section className="bg-ink2 text-cream py-20 md:py-28 relative overflow-hidden">
        <div className="deco-shape top-[15%] right-[5%] text-yellow/15 animate-float">
          <CircleRings size={180} />
        </div>
        <div className="deco-shape bottom-[10%] left-[3%] text-yellow/10 animate-float-slow hidden md:block">
          <DiamondGrid size={120} />
        </div>

        <div className="container-x relative">
          <div className="observe-fade max-w-2xl">
            <p className="eyebrow text-yellow">Founding team</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1.05] tracking-tightest">
              Built on a decade
              <br />
              <span className="text-yellow">of shipped product.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-cream/70 leading-relaxed">
              The numbers below reflect the prior careers our founding team brings to
              TuTu Fun Games — the experience the studio is built on.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="bg-ink2 p-6 md:p-8 observe-fade"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p
                  className="font-display tracking-deco text-yellow leading-[1.05]"
                  style={{ fontSize: m.small ? '32px' : '52px' }}
                >
                  {m.value}
                </p>
                <p className="mt-3 text-sm text-cream/70 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8 mb-10 md:mb-14 observe-fade">
          <div className="md:col-span-5">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1.05] tracking-tightest">
              Four practices,
              <br />
              one studio.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base md:text-lg text-ink/80 leading-relaxed max-w-xl">
              We work both on our own original titles and on selected client projects.
              Each practice is grounded in production-grade mobile experience.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-block link-underline text-sm font-medium"
            >
              Full service breakdown →
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="bg-cream p-7 md:p-8 observe-fade"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-mono text-xs tracking-widest text-yellow-deep">
                {s.number}
              </span>
              <h3 className="mt-3 font-sans font-bold text-[20px] md:text-[24px] tracking-tightest">
                {s.title}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-ink/75">
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR GAMES */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="flex items-end justify-between mb-10 md:mb-14 observe-fade">
          <div>
            <p className="eyebrow">Our games</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1.05] tracking-tightest">
              Original titles.
            </h2>
          </div>
          <Link
            to="/games"
            className="link-underline text-sm font-medium hidden md:inline-block"
          >
            All games →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {games.map((g, i) => {
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
                <div className={`aspect-[4/5] ${t.cardBg} rounded-sm overflow-hidden relative border-2 ${t.cardBorder} transition-transform duration-700 group-hover:-translate-y-1.5`}>
                  <div className="absolute inset-0 grid place-items-center p-7 md:p-10">
                    {g.icon ? (
                      <img
                        src={g.icon}
                        alt={`${g.title} icon`}
                        loading="lazy"
                        className={`w-full aspect-square max-w-[200px] rounded-[22%] shadow-xl ring-1 ${t.iconRing} transition-transform duration-700 group-hover:scale-105`}
                      />
                    ) : (
                      <span className={`${t.deco} font-display text-[44px] md:text-[60px] tracking-deco text-center leading-[0.95] whitespace-pre-line`}>
                        {g.coverWord}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${t.badge}`}>
                      {g.status}
                    </span>
                  </div>
                  <div className={`absolute -bottom-3 -right-3 ${t.deco} pointer-events-none`}>
                    <DiamondGrid size={70} />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-sans font-bold text-[20px] md:text-[22px] tracking-tightest">
                    {g.title}
                  </h3>
                  <p className="text-sm text-ink/60 mt-1.5">
                    {g.genre} · {g.platforms.join(' / ')} · {g.year}
                  </p>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                    {g.summary}
                  </p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8 mb-10 observe-fade">
          <div className="md:col-span-5">
            <p className="eyebrow">Why work with us</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1.05] tracking-tightest">
              What sets the
              <br />
              <span className="text-yellow-deep">studio apart.</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div
              key={a.n}
              className="border-2 border-ink rounded-sm p-7 md:p-8 bg-cream observe-fade"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-xs tracking-widest text-yellow-deep">
                {a.n}
              </span>
              <h3 className="mt-4 font-sans font-bold text-[20px] md:text-[22px] tracking-tightest">
                {a.t}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-ink/75">
                {a.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 observe-fade">
            <p className="eyebrow">Timeline</p>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[80px_1fr] gap-6 py-5 border-t-2 border-ink/10 observe-fade"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-mono text-[14px] font-medium text-yellow-deep pt-0.5">
                    {m.year}
                  </span>
                  <span className="text-base md:text-lg text-ink/85 leading-relaxed">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 md:py-24">
        <div className="bg-ink text-cream rounded-sm p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end observe-fade">
          <div className="md:col-span-8">
            <p className="eyebrow text-yellow">Engage the studio</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1] tracking-tightest">
              Have a project
              <br />
              <span className="text-yellow">we should talk about?</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="btn-yellow">
              Get in touch now →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
