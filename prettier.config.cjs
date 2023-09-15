/** @type {import("prettier").Config} */
const config = {
  plugins: 
  [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss'
  ],
  tailwindFunctions: ['tw'],
};

module.exports = config;