/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
          500: '#3CED00',
          900: '#00920F',
        },
        black: {
          400: '#777474',
          500: '#999798',
          900: '#0A150F',
        },
        white: {
          10: '#FDFFFE',
          20: '#D9D9D9',
        },
      },
    },
  },
  plugins: [],
};
