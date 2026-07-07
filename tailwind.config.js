/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        coal: '#111111',
        panel: '#181818',
        surface: '#1F1F1F',
        brand: '#f04438',
        brandBright: '#ff5a4d',
        mist: '#A8A8A8',
        faint: '#606060',
        accept: '#4ade80',
        submit: '#5b9dff',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1320px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        ticker: 'ticker 40s linear infinite',
        blink: 'blink 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
