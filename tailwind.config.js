/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
