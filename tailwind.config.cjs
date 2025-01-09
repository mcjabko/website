/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        discord: "#5865F2",
      },
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
