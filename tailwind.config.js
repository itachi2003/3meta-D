/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'rou': '24px 12px',
        'roundd': '60px 30px',
      },
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