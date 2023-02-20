/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '44px',
    },
    extend: {
      colors: {
        primary: '#8b5cf6' 
      },
      screens: {
        '2xl': '1380px',
      }
    },
  },
  plugins: [],
}
