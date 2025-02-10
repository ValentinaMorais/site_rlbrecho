/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#606c38',
        secondary: '#bc6c25',
        background: '#f8f7f5',
      },
    },
  },
  plugins: [],
};