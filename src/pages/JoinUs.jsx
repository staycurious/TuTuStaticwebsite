import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { joinUsCriteria } from '../data/company'
import { FanShape } from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function JoinUs() {
  useRevealOnScroll()

  return (
    <>
      <Seo
        title="Join us"
        description="Make games that bring joy with a small studio in Charlottetown, PEI."
      />

      <section className="container-x pt-12 md:pt-20 pb-16 relative overflow-hidden">
        <div className="deco-shape top-[20%] right-[6%] text-yellow-deep/40 animate-float">
          <FanShape size={140} />
        </div>

        <p className="eyebrow animate-rise-in stagger-1">Join us</p>
        <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[88px] leading-[1] tracking-tightest text-balance max-w-5xl">
          <span className="block animate-rise-in stagger-2">Make games</span>
          <span className="block animate-rise-in stagger-3">
            that bring{' '}
            <span className="relative inline-block font-display tracking-deco">
              <span className="relative z-10 px-3">JOY</span>
              <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
            </span>
          </span>
          <span className="block animate-rise-in stagger-4">— with us.</span>
        </h1>
      </section>

      {/* OUR VISION */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8 observe-fade">
          <div className="md:col-span-3">
            <p className="eyebrow">Our vision</p>
          </div>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-ink/85">
            <p>
              We believe games should be{' '}
              <span className="font-semibold text-ink">a moment of relaxation</span>,
              not another source of pressure. The titles we ship are designed to be
              fun, calm, and respectful of your time.
            </p>
            <p>If that resonates with you, we'd love to hear from you.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="container-x py-16 md:py-24 hairline">
        <div className="grid md:grid-cols-12 gap-8 mb-10 observe-fade">
          <div className="md:col-span-3">
            <p className="eyebrow">What we look for</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-sans font-bold text-[28px] md:text-[44px] tracking-tightest leading-[1.05]">
              People who genuinely care
              <br />
              about <span className="text-yellow-deep">player enjoyment.</span>
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {joinUsCriteria.map((c, i) => (
            <div
              key={c.n}
              className="border-2 border-ink rounded-sm p-7 md:p-8 bg-cream observe-fade"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-xs tracking-widest text-yellow-deep">
                {c.n}
              </span>
              <h3 className="mt-4 font-sans font-bold text-[20px] md:text-[22px] tracking-tightest">
                {c.t}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-ink/75">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — points at contact form */}
      <section className="container-x py-16 md:py-24">
        <div className="yellow-grain rounded-sm p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end relative overflow-hidden border-2 border-ink observe-fade">
          <div className="md:col-span-8 relative z-10">
            <p className="eyebrow">Interested?</p>
            <h2 className="mt-4 font-sans font-bold text-[28px] md:text-[40px] leading-[1.05] tracking-tightest text-balance">
              Tell us a bit about
              <br />
              yourself and your work.
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/80 max-w-xl leading-relaxed">
              No specific roles open right now — but if you think you'd be a fit, we'd
              love to start a conversation.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right relative z-10">
            <Link to="/contact" className="btn-primary">
              Get in touch now →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
