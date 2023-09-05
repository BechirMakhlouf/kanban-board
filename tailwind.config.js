/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway"],
    },
    extend: {
      colors: {
        "primary": "#6E34BF",
        "primary-dark": "#201740",
        "accent": "#4EA66D",
      },
    },
  },
  plugins: [],
};
