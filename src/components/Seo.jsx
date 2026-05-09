import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description }) {
  const fullTitle = title
    ? `${title} — TuTu Fun Games`
    : 'TuTu Fun Games — Mobile Game Studio'
  const desc =
    description ||
    'TuTu Fun Games is an independent mobile game studio crafting quietly beautiful puzzle games. Based in Prince Edward Island, Canada.'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
