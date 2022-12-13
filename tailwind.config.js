/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // spacing: {
      //   0.5: '0.12rem'
      // },
      transitionTimingFunction: {
        DEFAULT: 'ease'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      },
      zIndex: {
        1: '1',
        2: '2'
      }
    },
  },
  plugins: [],
};
