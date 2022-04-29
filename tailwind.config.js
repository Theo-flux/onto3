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
    },

    fontFamily: {
      oxanium: ['oxanium', defaultTheme.fontFamily.sans],
      neue: ['neue', defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
