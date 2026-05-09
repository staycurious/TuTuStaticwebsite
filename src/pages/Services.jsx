import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { services } from '../data/company'
import { FanShape, StackedTriangles } from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Services() {
  useRevealOnScroll()

  return (
    <>
      <Seo
        title="Services"
        description="Mobile game services: original development, game framework, digital marketing, and technology consulting."
      />

      <section className="container-x pt-12 md:pt-20 pb-16 relative overflow-hidden">
        <div className="deco-shape top-[15%] right-[6%] text-yellow-deep/40 animate-float">
          <FanShape size={140} />
        </div>
        <div className="deco-shape bottom-[15%] right-[20%] text-ink/15 animate-float-tiny hidden md:block">
          <StackedTriangles size={70} />
        </div>

        <p className="eyebrow animate-rise-in stagger-1">Services</p>
        <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[88px] leading-[1] tracking-tightest text-balance max-w-5xl">
          <span className="block animate-rise-in stagger-2">Everything a</span>
          <span className="block animate-rise-in stagger-3">
            mobile game{' '}
            <span className="relative inline-block font-display tracking-deco">
              <span className="relative z-10 px-3">NEEDS</span>
              <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
            </span>
            ,
          </span>
          <span className="block animate-rise-in stagger-4">under one roof.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-ink/75 leading-relaxed animate-rise-in stagger-5">
          We work both on our own original titles and on selected partner projects. The
          services below describe what we offer to outside studios, publishers, and IP
          owners.
        </p>
      </section>

      <section className="container-x py-16 md:py-24 hairline">
        <div className="space-y-0">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-10 border-t-2 border-ink/10 observe-fade"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-4">
                <span className="font-mono text-[24px] md:text-[36px] font-medium tracking-tight text-yellow-deep">
                  {s.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Practice {i + 1} / {services.length}
                </span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-sans font-bold text-[26px] md:text-[36px] tracking-tightest leading-[1.1]">
                  {s.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-ink/80 leading-relaxed">
                  {s.summary}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="eyebrow mb-4">Capabilities</p>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-ink/85 flex gap-3 leading-relaxed"
                    >
                      <span className="text-yellow-deep mt-0.5 font-bold">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 md:py-24">
        <div className="bg-ink text-cream rounded-sm p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end observe-fade">
          <div className="md:col-span-8">
            <p className="eyebrow text-yellow">Engage the studio</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[44px] leading-[1] tracking-tightest">
              Tell us about
              <br />
              <span className="text-yellow">your project.</span>
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
