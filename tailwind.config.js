/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'arrow': 'url(hand.cur), pointer'
      }
    },
    fontFamily: {
      'sans' : ['Inter', 'ui-sans-serif', 'system-ui'],
      'serif': ['Times Now', 'Georgia']
    },
    fontSize: {
      xs: '0.65rem',
      sm: '0.75rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}