import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://tutufungames.com'
const DEFAULT_TITLE = 'TuTu Fun Games — Mobile Game Studio'
const DEFAULT_DESC =
  'TuTu Fun Games is an independent mobile game studio crafting quietly beautiful puzzle games. Based in Prince Edward Island, Canada.'

function upsertMeta(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const path =
      pathname !== '/' && pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname
    const canonical = `${SITE_URL}${path}`
    const fullTitle = title ? `${title} — TuTu Fun Games` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertLink('canonical', canonical)
  }, [title, description, pathname])

  return null
}
