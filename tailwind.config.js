/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "lightTan": "#FBF7F8",
      "white": "#FFFFFF",
      "black": "#000000"
    },
    extend: {},
  },
  plugins: [],
}

