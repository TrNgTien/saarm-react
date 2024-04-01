/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        green: {
          80: '#004701',
          100: '#00920F',
          200: '#B6FF92',
          500: '#3CED00',
          900: '#00920F',
        },
        black: {
          500: '#999798',
        },
      },
    },
  },
  plugins: [],
};
