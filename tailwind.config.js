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
          tertiary: 'var(--bg-tertiary)',
        },
        fg: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          glow: 'var(--accent-glow)',
        },
        surface: {
          border: 'var(--border-color)',
          card: 'var(--card-bg)',
          cardHover: 'var(--card-hover)',
        },
        maroon: {
          50: '#FDF2F4',
          100: '#FBE4E7',
          200: '#F5CBD2',
          300: '#ECA4AF',
          400: '#DE7083',
          500: '#B83246',
          600: '#9E2A3B',
          700: '#7A1C29',
          800: '#641722',
          900: '#4D121B',
          950: '#2C060C',
        },
        cream: {
          50: '#FAF6F0',
          100: '#F5ECE0',
          200: '#F2EAE0',
          300: '#E8DCCF',
          400: '#E2D6C8',
          500: '#D5C4B1',
        },
        obsidian: {
          800: '#2A2023',
          850: '#1F191B',
          900: '#171214',
          950: '#0D0B0C',
        }
      },
      fontFamily: {
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee-left': 'marquee-left 32s linear infinite',
        'marquee-right': 'marquee-right 32s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

