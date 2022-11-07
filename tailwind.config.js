/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customBlue: {
          100: '#EFF0F5',
          200: '#E6E9F2',
          600: '#55699E',
          800: '#3A4562',
          900: '#384564',
          950: '#2A3047',
          transperent: {
            80: '#38415DD1',
            60: '#38415D9A',
            30: '#a1b1db51'
          }
        },
        customGray: {
          50: '#E7EAF0',
          100: '#D8D8D8',
          150: '#FFFFFFAB',
          200: '#878D9D',
          600: '#0000001F'
        },
        customYellow: {
          400: '#FFCF0026',
          500: '#988B49',
          800: '#FFCF00'
        }
      },
      fontFamily: { roboto: ['Roboto', 'sans-serif'] },
      maxWidth: {
        1400: '1400px',
        280: '280px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
