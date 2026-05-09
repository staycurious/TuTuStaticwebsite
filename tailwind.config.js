/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD60A',
          soft: '#FFE45C',
          deep: '#E8B900',
        },
        cream: '#FAF7F0',
        cream2: '#F2EDE0',
        ink: '#0A0A0A',
        ink2: '#1A1A1A',
        muted: '#6B6B6B',
        line: '#E5DFD0',
      },
      fontFamily: {
        display: ['"Limelight"', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        deco: '0.02em',
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '76rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20px, -30px) rotate(8deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-25px, 20px) rotate(-12deg)' },
        },
        floatTiny: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -15px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'floatSlow 22s ease-in-out infinite',
        'float-tiny': 'floatTiny 9s ease-in-out infinite',
        'spin-slow': 'spinSlow 40s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'rise-in': 'riseIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
