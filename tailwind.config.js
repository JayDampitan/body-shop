/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AD23",
        secondary: "#06202F",
        darkGrey: "#1B1B1B",
        offWhite: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
