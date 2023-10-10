/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{jsx,js}",
    "./src/pages/**/*.{jsx,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
};


