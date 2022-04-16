const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ["museo", ...defaultTheme.fontFamily.sans],
        sans: ["museo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
