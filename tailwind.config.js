/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "lighterTan": "f9f9f9",
      "lightTan": "#FBF7F8",
      "darkerTan": "#F6F5F5",
      "white": "#FFFFFF",
      "black": "#000000"
    },
    extend: {},
  },
  plugins: [],
}

