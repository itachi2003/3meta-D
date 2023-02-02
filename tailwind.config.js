/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        orangu : '#FF7733',
        barda: '#18C619'
    },
    fontFamily: {
      robot: 'MontserratLightAlt1',
      koko: 'fantasy'
    }
    },
  },
  plugins: [],
}