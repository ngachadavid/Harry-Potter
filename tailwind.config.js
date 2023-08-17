/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
      },
      spacing: {
        '2.5': '0.625rem',
      },
    },
  },
  plugins: [],
};

