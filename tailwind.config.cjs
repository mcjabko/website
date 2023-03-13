/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundIímage: {
        "hero-image": "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
