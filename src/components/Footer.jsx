import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 md:mt-32 bg-ink text-cream relative overflow-hidden">
      {/* Yellow stripe + jagged transition */}
      <div className="h-2 bg-yellow" />
      <div className="absolute top-2 left-0 right-0 h-12 bg-yellow">
        <div
          className="absolute inset-x-0 -bottom-px h-12 bg-ink"
          style={{
            clipPath:
              'polygon(0 100%, 4% 0%, 8% 100%, 12% 0%, 16% 100%, 20% 0%, 24% 100%, 28% 0%, 32% 100%, 36% 0%, 40% 100%, 44% 0%, 48% 100%, 52% 0%, 56% 100%, 60% 0%, 64% 100%, 68% 0%, 72% 100%, 76% 0%, 80% 100%, 84% 0%, 88% 100%, 92% 0%, 96% 100%, 100% 0%, 100% 100%)',
          }}
        />
      </div>

      <div className="container-x pt-24 md:pt-28 pb-12 md:pb-16 relative">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-[20px] md:text-[24px] tracking-deco">
              TUTUFUN GAMES
            </p>
            <p className="mt-6 font-display text-yellow text-[14px] tracking-deco">
              BRING FUN TO YOUR LIFE
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <p className="eyebrow text-cream/50">Studio</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="link-underline hover:text-yellow transition-colors" to="/about">About</Link></li>
              <li><Link className="link-underline hover:text-yellow transition-colors" to="/services">Services</Link></li>
              <li><Link className="link-underline hover:text-yellow transition-colors" to="/games">Games</Link></li>
              <li><Link className="link-underline hover:text-yellow transition-colors" to="/join-us">Join us</Link></li>
              <li><Link className="link-underline hover:text-yellow transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow text-cream/50">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="text-cream/50">Business — </span>
                <a className="link-underline hover:text-yellow transition-colors" href={`mailto:${company.business}`}>
                  {company.business}
                </a>
              </li>
              <li>
                <span className="text-cream/50">Join us — </span>
                <a className="link-underline hover:text-yellow transition-colors" href={`mailto:${company.hi}`}>
                  {company.hi}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-xs text-cream/60 leading-relaxed max-w-md">
            <p className="font-medium text-cream">{company.legalName}</p>
            <p className="mt-1">
              {company.address.line1}
              <br />
              {company.address.line2} {company.address.postal}
              <br />
              {company.address.country}
            </p>
          </div>
          <div className="text-xs text-cream/60">
            © {year} {company.legalName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
