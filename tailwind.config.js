/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
      '3xl': '2560px',
    },
    extend: {
      colors: {
        zIndex: {
          100: '100',
          500: '500',
          1000: '1000',
        },
        green: {
          80: '#004701',
          100: '#00920F',
          200: '#B6FF92',
          300: '#87FF53',
          500: '#3CED00',
          900: '#00920F',
        },
        black: {
          100: '#0A150F',
          200: '#3E3C3C',
          300: '#BDBCBC',
          400: '#777474',
          500: '#999798',
          800: '#474545',
          900: '#0A150F',
        },
        white: {
          10: '#FDFFFE',
          20: '#D9D9D9',
          50: '#FBFBFB',
          900: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};