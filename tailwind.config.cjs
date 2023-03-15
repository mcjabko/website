/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--poppins-font)"],
      },
      backgroundIímage: {
        heroimage: "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
