import { useEffect } from 'react'

// Adds .is-visible class to .observe-fade elements when they enter viewport.
// Uses IntersectionObserver — no scroll listener.
export default function useRevealOnScroll() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const els = document.querySelectorAll('.observe-fade:not(.is-visible)')
    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  })
}
