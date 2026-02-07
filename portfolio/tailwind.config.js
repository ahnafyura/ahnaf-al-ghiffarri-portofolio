/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9',
        accent: '#06b6d4',
        glow: '#22d3ee',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(34, 211, 238, 0.3)',
        'glow-md': '0 0 20px rgba(34, 211, 238, 0.4)',
        'glow-lg': '0 0 30px rgba(34, 211, 238, 0.5)',
      },
    },
  },
  plugins: [],
}
