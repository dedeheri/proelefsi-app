/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Sans", "sans-serif"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
