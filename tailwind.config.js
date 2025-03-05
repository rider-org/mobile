/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#01081E",
        secondary: "#121B2B",
        tertiary: "#222A48",
        loader: "#313B58",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
