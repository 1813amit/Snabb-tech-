/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: '#ff0000', // Customize the red color
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        kyivtype: ['KyivType Sans', 'sans-serif'],
      },
      keyframes: {
        underline: {
          '0%': { borderBottomWidth: '0' },
          '100%': { borderBottomWidth: '2px' },
        },
      },
      animation: {
        underline: 'underline 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
