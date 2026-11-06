/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        fg: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
        },
        surface: {
          border: 'var(--border-color)',
          card: 'var(--bg-card)',
          cardBorder: 'var(--card-border)',
        },
        studio: {
          black: '#0A0909',
          cardDark: '#121010',
          crimson: '#BE123C',
          deepMaroon: '#7C1D2D',
          paperLight: '#F7F3EB',
        }
      },
      fontFamily: {
        display: ['Oswald', 'Plus Jakarta Sans', 'sans-serif'],
        condensed: ['Oswald', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
