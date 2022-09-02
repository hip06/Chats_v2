/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        main: '60%',
        '380': '380px',
      },
      minHeight: {
        main: '100vh'
      },
      backgroundColor: {
        main: 'rgb(243, 244, 246)'
      }
    },
  },
  plugins: [],
}
