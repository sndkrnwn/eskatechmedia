/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          cyan: '#06B6D4',
          emerald: '#10B981',
          dark: '#0B0F19',
          darker: '#060911',
          card: '#111827',
          border: '#1F2937'
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.4)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    }
  },
  plugins: [],
}
