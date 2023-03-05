/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        400: 'repeat(auto-fill, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
}
