/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: { ...colors },
    },
  },
  plugins: [],
};
