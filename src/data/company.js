// Single source of truth for company info.
// All page content reads from this file. Replace [bracketed] values
// with real data before launch where applicable.

export const company = {
  legalName: 'TuTu Fun Games Inc.',
  shortName: 'TuTu Fun Games',
  tagline: 'Bring fun to your digital life.',
  description:
    'TuTu Fun Games Inc. is an independent mobile technology studio based in Charlottetown, Prince Edward Island. We design, develop, and publish original mobile games and provide game framework, digital marketing, and technology consulting services.',
  founded: 2024,
  address: {
    line1: '155 Queen St',
    line2: 'Charlottetown, PE',
    postal: 'C1A 4B4',
    country: 'Canada',
  },
  // Two real inboxes — keep it simple.
  business: 'business@tutufungames.com',
  hi: 'hi@tutufungames.com',
  social: {
    x: '',
    linkedin: '',
    youtube: '',
  },
}

// Four service practices, BP-aligned.
export const services = [
  {
    id: 'mobile-apps',
    number: '01',
    title: 'Mobile puzzle applications',
    summary:
      'We design and develop original mobile puzzle games — including brain teasers and casual titles — for global audiences on iOS and Android.',
    points: [
      'Original IP and brand development',
      'Unity-based mobile production',
      'Brain teaser and casual puzzle genres',
      'Cross-platform release on iOS and Android',
    ],
  },
  {
    id: 'framework',
    number: '02',
    title: 'Game framework development',
    summary:
      'Custom game frameworks and reusable systems that help client teams ship faster, optimize their development schedule, and reduce production cost.',
    points: [
      'Reusable client / server frameworks',
      'Tooling and automation for production teams',
      'Integration with existing engines and pipelines',
      'Performance and cost optimization',
    ],
  },
  {
    id: 'digital-marketing',
    number: '03',
    title: 'Digital marketing',
    summary:
      'Marketing services for game developers and studios — combining brand, content, and online channels to grow audiences sustainably.',
    points: [
      'Websites and branded asset development',
      'Video content and infographics',
      'Written content and online tools',
      'Social channels and community pages',
    ],
  },
  {
    id: 'consulting',
    number: '04',
    title: 'Technology consulting',
    summary:
      'Hands-on advisory grounded in over a decade of mobile and game-industry leadership — from technology strategy to solving critical product problems.',
    points: [
      'Technology strategy and roadmap',
      'Mobile application architecture',
      'Production and engineering leadership',
      'Market entry guidance for new regions',
    ],
  },
]

// Three games. Two live, one in development.
// `coverWord` is what's shown as a large Limelight watermark on placeholder
// covers; replace the cover image path under public/images/games/ when art
// is ready.
export const games = [
  {
    slug: 'enso-block',
    title: 'Enso Block',
    coverWord: 'ENSO',
    status: 'Available',
    year: '2026',
    genre: 'Puzzle',
    platforms: ['iOS'],
    summary:
      'An 8×8 block puzzle drawn in the language of ink-wash painting.',
    description:
      'An 8×8 block puzzle drawn in the language of ink-wash painting. A firefly collection meta-layer and rank evaluation system reward patient, focused play.',
    cover: '/images/games/enso-cover.jpg',
    icon: '/images/games/enso-block-icon.png',
    appStore: 'https://apps.apple.com/us/app/enso-block/id6761427175',
    playStore: '',
    theme: {
      cardBg: 'bg-[#E5D7B0]',
      cardBorder: 'border-ink',
      badge: 'bg-ink text-cream border-2 border-ink',
      deco: 'text-ink/15',
      iconRing: 'ring-ink/10',
    },
  },
  {
    slug: 'number-cross',
    title: 'Number Cross',
    coverWord: 'NUMBER\nCROSS',
    status: 'Available',
    year: '2025',
    genre: 'Numbers / Puzzle',
    platforms: ['iOS'],
    summary:
      'A relaxing numbers puzzle for short, focused sessions.',
    description:
      'A relaxing numbers puzzle that turns simple arithmetic into a quiet daily ritual. Designed for short sessions, calm focus, and a small moment of clarity.',
    cover: '/images/games/number-cross-cover.jpg',
    icon: '/images/games/number-cross-icon.png',
    appStore:
      'https://apps.apple.com/us/app/number-cross-numbers-games/id6738794848',
    playStore: '',
    theme: {
      cardBg: 'bg-yellow',
      cardBorder: 'border-ink',
      badge: 'bg-ink text-cream border-2 border-ink',
      deco: 'text-ink/15',
      iconRing: 'ring-ink/10',
    },
  },
  {
    slug: 'lumitris',
    title: 'Lumitris',
    coverWord: 'LUMITRIS',
    status: 'Coming soon',
    year: '2026',
    genre: 'Puzzle',
    platforms: ['iOS', 'Android'],
    summary:
      'A track-based block-placement puzzle with an evolving animated world.',
    description:
      'A track-based block-placement puzzle pairing a precise gameplay core with a softly animated background that grows and changes as players advance.',
    cover: '/images/games/lumitris-cover.jpg',
    icon: '/images/games/lumitris-icon.png',
    appStore: 'https://apps.apple.com/us/app/lumitris/id6767350876',
    playStore: '',
    theme: {
      cardBg: 'bg-[#1F1410]',
      cardBorder: 'border-cream/20',
      badge: 'bg-cream text-ink border-2 border-cream',
      deco: 'text-cream/15',
      iconRing: 'ring-cream/10',
    },
  },
]

// Founding team track record. Numbers reflect the team's prior careers in
// mobile and games before TuTu Fun Games was founded.
export const metrics = [
  { value: '10+', label: "Team's combined years in mobile and games" },
  { value: 'Millions', label: "Downloads across the team's prior titles" },
  { value: 'Dozens', label: 'Mobile games shipped by the team' },
  { value: 'iOS & Android', label: 'Both major platforms', small: true },
]

// 3-line timeline.
export const milestones = [
  {
    year: '2024',
    label: 'TuTu Fun Games Inc. founded in Prince Edward Island, Canada.',
  },
  {
    year: '2025',
    label: 'Number Cross released.',
  },
  {
    year: '2026',
    label:
      'Enso Block and Lumitris released; more puzzle games in active development.',
  },
]

// Why-work-with-us advantages.
export const advantages = [
  {
    n: '01',
    t: 'Deep mobile-game experience',
    d: 'The studio is led by a founder with over a decade of hands-on experience in mobile games — from designing and shipping original titles to running live operations across global markets.',
  },
  {
    n: '02',
    t: 'Game-industry depth, not generalists',
    d: 'Every practice we offer — apps, frameworks, marketing, consulting — is rooted in real production experience inside mobile games. We do not bring web-shop assumptions to a game problem.',
  },
  {
    n: '03',
    t: 'Small enough to care, equipped to ship',
    d: 'You work directly with senior people. No layered account managers, no junior pass-throughs. The team that scopes your work is the team that ships it.',
  },
  {
    n: '04',
    t: 'Games that are genuinely fun',
    d: 'We make games to play, not games to grind. Our titles are designed to be genuinely enjoyable and to give players a moment to relax — not to maximize their time on screen.',
  },
]

// "What we look for" cards on Join us page.
export const joinUsCriteria = [
  {
    n: '01',
    t: "You've shipped before",
    d: "You've taken something from idea to live, learned hard lessons, and want to do it again with a small, deliberate team.",
  },
  {
    n: '02',
    t: 'You play your work',
    d: "You can tell when a game is genuinely fun and when it's just trying to keep someone hooked. You care about the difference.",
  },
  {
    n: '03',
    t: 'You like small teams',
    d: "You're at your best when you have ownership, fewer meetings, and a direct line to the people you work with.",
  },
  {
    n: '04',
    t: 'You want to stay a while',
    d: "We're not building a stepping stone. We hire slowly because we plan for the long run — and we hope you do too.",
  },
]
