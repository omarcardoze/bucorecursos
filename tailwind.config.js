/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        400: 'repeat(auto-fill, minmax(400px, 1fr))'
      }
    }
  },
  plugins: []
}
