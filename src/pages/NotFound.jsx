import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CircleRings, FanShape } from '../components/DecoShapes'

export default function NotFound() {
  return (
    <>
      <Seo title="Not found" />
      <section className="container-x py-32 md:py-48 text-center relative overflow-hidden">
        <div className="deco-shape top-[10%] left-[10%] text-yellow-deep/30 animate-float">
          <FanShape size={120} />
        </div>
        <div className="deco-shape bottom-[10%] right-[10%] text-yellow-deep/30 animate-float-slow">
          <CircleRings size={140} />
        </div>

        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-sans font-bold text-[60px] md:text-[120px] leading-[1] tracking-tightest">
          Nothing
          <br />
          <span className="relative inline-block font-display tracking-deco">
            <span className="relative z-10 px-3">HERE.</span>
            <span className="absolute inset-0 bg-yellow -skew-y-2 z-0" />
          </span>
        </h1>
        <Link to="/" className="mt-12 inline-flex btn-yellow">
          Back to home →
        </Link>
      </section>
    </>
  )
}
