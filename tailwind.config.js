/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customBlue: {
          100: '#EFF0F5',
          200: '#E6E9F2',
          800: '#3A4562',
          900: '#384564',
          transperent: {
            80: '#38415DD1',
            60: '#38415D9A'
          }
        },
        customGray: {
          100: '#D8D8D8',
          200: '#878D9D'
        }
      },
      fontFamily: { roboto: ['Roboto', 'sans-serif'] },
      maxWidth: {
        1400: '1400px',
        280: '280px'
      }
    }
  },
  plugins: []
}
