/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'f-nato': ['Noto Sans', 'sans-serif'],
        'cadpara': ['Gentium Book Plus', 'serif'],
        
    },
    },
  },
  plugins: [],
}