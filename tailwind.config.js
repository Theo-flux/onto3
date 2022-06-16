const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "var(--color-black)",
      white: "var(--color-white)",
      green: "var(--color-green)",
      bunker: "var(--color-bunker)",
      gray: "var(--color-gray)",
      darkgray: "var(--color-darkgray)",
      darkgreen: "var(--color-darkgreen)"
    },

    fontFamily: {
      oxanium: ['oxanium', defaultTheme.fontFamily.sans],
      bebas: ['bebas', defaultTheme.fontFamily.sans],
      neue: ['neue', defaultTheme.fontFamily.sans]
    },
    extend: {},

  },
  plugins: [],
}
