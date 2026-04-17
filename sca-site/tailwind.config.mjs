import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          50: '#FDFCF8',
          100: '#FAF7F2',
          200: '#F2ECE0',
          300: '#E8DFC9',
        },
        navy: {
          DEFAULT: '#1B2B4B',
          50: '#EDF0F6',
          100: '#C4CDDF',
          200: '#9CA8C4',
          500: '#2F4470',
          700: '#1B2B4B',
          900: '#0E1A33',
          950: '#07101F',
        },
        brass: {
          DEFAULT: '#C9A55C',
          50: '#FAF4E4',
          100: '#F1E3BD',
          200: '#E7D5A5',
          500: '#C9A55C',
          700: '#9B7D3D',
          800: '#7A6130',
        },
        sage: {
          DEFAULT: '#6B8E6F',
          100: '#D9E2DA',
          500: '#6B8E6F',
          700: '#4A6A4D',
        },
        ink: {
          DEFAULT: '#1A1918',
          muted: '#5B5850',
          soft: '#8A857A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        prose: '68ch',
        container: '1240px',
        'container-wide': '1440px',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
      },
      boxShadow: {
        'lift': '0 1px 2px rgb(27 43 75 / 0.04), 0 8px 24px -8px rgb(27 43 75 / 0.12)',
        'lift-hover': '0 1px 2px rgb(27 43 75 / 0.05), 0 20px 40px -12px rgb(27 43 75 / 0.22)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.navy.700'),
            '--tw-prose-links': theme('colors.navy.700'),
            '--tw-prose-bold': theme('colors.navy.900'),
            '--tw-prose-quotes': theme('colors.navy.700'),
            '--tw-prose-quote-borders': theme('colors.brass.500'),
            fontFamily: theme('fontFamily.sans').join(', '),
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            h1: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '500', letterSpacing: '-0.02em' },
            h2: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '500', letterSpacing: '-0.02em' },
            h3: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '500', letterSpacing: '-0.015em' },
            h4: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '600' },
            blockquote: { fontStyle: 'italic', fontFamily: theme('fontFamily.display').join(', '), fontWeight: '400' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
