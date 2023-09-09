/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      '7xl': '1920px',
    },
    maxWidth: {
      '7xl': '1920px',
      '790': '790px',
    },
    extend: {},
  },
  plugins: [],
}
