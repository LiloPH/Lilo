/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brand-color": "#FCD500",
        "brand-50": "#ffffe7",
        "brand-100": "#feffc1",
        "brand-200": "#fffe86",
        "brand-300": "#fff541",
        "brand-400": "#ffe60d",
        "brand-500": "#fcd500",
        "brand-600": "#d19f00",
        "brand-700": "#a67202",
        "brand-800": "#89580a",
        "brand-900": "#74480f",
        "brand-950": "#442604",
      },
    },
  },
  plugins: [],
};
