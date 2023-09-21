/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    maxWidth: {
      '7xl': '1920px',
      '790': '790px',
    },
    extend: {
      backgroundColor: {
        'dark-100': '#212121',
        'dark-200': '#303030',
        'dark-300': '#424242',
      },
      borderColor: {
        'dark-100': '#212121',
        'dark-200': '#303030',
        'dark-300': '#424242',
      },
    },
  },
  plugins: [],
}
