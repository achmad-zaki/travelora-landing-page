/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          50: '#71AAE4',
          100: '#5F9FE1',
          200: '#3D8BDA',
          300: '#2677C9',
          400: '#1F62A6',
          500: '#194E84',
          600: '#103255',
          700: '#071626',
        }
      }
    },
    fontFamily: {
      poppins: ['Poppins, serif']
    }
  },
  plugins: [],
}