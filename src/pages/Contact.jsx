import { useState } from 'react'
import Seo from '../components/Seo'
import { company } from '../data/company'
import { CircleRings } from '../components/DecoShapes'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzlvkzb'

export default function Contact() {
  useRevealOnScroll()

  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setError(
          json?.errors?.[0]?.message ||
            'Something went wrong. Please email us directly.'
        )
        setStatus('error')
      }
    } catch {
      setError('Network error. Please email us directly.')
      setStatus('error')
    }
  }

  return (
    <>
      <Seo title="Contact" description={`Get in touch with ${company.legalName}.`} />

      <section className="container-x pt-12 md:pt-20 pb-16 relative overflow-hidden">
        <div className="deco-shape top-[15%] right-[5%] text-yellow-deep/40 animate-float-slow">
          <CircleRings size={160} />
        </div>

        <p className="eyebrow animate-rise-in stagger-1">Contact</p>
        <h1 className="mt-6 font-sans font-bold text-[44px] sm:text-[64px] md:text-[88px] leading-[1] tracking-tightest text-balance max-w-5xl">
          <span className="block animate-rise-in stagger-2">Tell us what</span>
          <span className="block animate-rise-in stagger-3">
            you're{' '}
            <span className="relative inline-block font-display tracking-deco">
              <span className="relative z-10 px-3">WORKING ON.</span>
              <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
            </span>
          </span>
        </h1>
      </section>

      <section className="container-x py-16 md:py-20 hairline">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Direct contact */}
          <div className="md:col-span-4 observe-fade">
            <p className="eyebrow">Direct contact</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Business inquiries
                </p>
                <a className="link-underline" href={`mailto:${company.business}`}>
                  {company.business}
                </a>
              </li>
              <li>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Say hi
                </p>
                <a className="link-underline" href={`mailto:${company.hi}`}>
                  {company.hi}
                </a>
              </li>
            </ul>

            <div className="mt-12">
              <p className="eyebrow">Studio</p>
              <p className="mt-4 text-sm text-ink/80 leading-relaxed">
                {company.legalName}
                <br />
                {company.address.line1}
                <br />
                {company.address.line2} {company.address.postal}
                <br />
                {company.address.country}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-8 observe-fade">
            <p className="eyebrow">Or send us a note</p>

            {status === 'sent' ? (
              <div className="mt-6 p-8 border-2 border-ink rounded-sm bg-yellow">
                <p className="font-display text-[28px] tracking-deco text-ink">
                  THANK YOU.
                </p>
                <p className="mt-3 text-ink/80">
                  We have received your message and will reply within a few business
                  days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field name="name" label="Your name" required />
                  <Field name="email" type="email" label="Email" required />
                </div>
                <Field name="company" label="Company / studio (optional)" />
                <Field
                  name="topic"
                  label="What is this about?"
                  as="select"
                  options={[
                    'Business inquiry',
                    'Partnership',
                    'Joining the team',
                    'Other',
                  ]}
                />
                <Field name="message" label="Message" as="textarea" rows={6} required />
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-yellow disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message →'}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-700">{error}</p>
                  )}
                </div>
                <p className="text-xs text-ink/60">
                  By submitting this form, you agree to be contacted by TuTu Fun Games at
                  the email address provided. We do not share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ name, label, type = 'text', as = 'input', required, rows, options }) {
  const base =
    'mt-2 w-full bg-transparent border-b-2 border-ink/15 focus:border-ink focus:outline-none py-3 text-base placeholder:text-ink/40 transition-colors font-sans'
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
        {label} {required && <span className="text-yellow-deep">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea name={name} required={required} rows={rows} className={base} />
      ) : as === 'select' ? (
        <select name={name} required={required} className={base} defaultValue="">
          <option value="" disabled>
            Select one…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  )
}
