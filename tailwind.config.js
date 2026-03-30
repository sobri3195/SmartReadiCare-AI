import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        surface: '#121A2B',
        soft: '#1A2438',
        text: '#F4F7FB',
        primary: '#23D5FF',
        secondary: '#7A5CFF',
        success: '#2ED3A1',
        warning: '#FFB547',
        danger: '#FF6B6B',
      },
      boxShadow: {
        card: '0 10px 35px rgba(8, 14, 30, 0.35)',
      },
      borderRadius: {
        xl2: '1rem',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top right, #1e2b4f, #0b1020 48%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
