const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      serif: ["Noto Serif", "Georgia", "Times New Roman", "Times", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
