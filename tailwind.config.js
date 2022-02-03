const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        widexl: "1.2em",
      },
      minWidth: {
        64: "14rem",
      },
      maxWidth: {
        64: "16rem",
      },
      colors: {
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        blue: colors.blue,
        orange: colors.orange,
        pink: colors.pink,
        rose: colors.rose,
        cust: {
          bg: "#26003A",
        },
      },
      spacing: {
        "w-110": "150%",
      },
      maxWidth: {
        "max-w-110": "150%",
      },
      fontFamily: {
        beb: "Bebas, Arial",
        treb: "Trebuchet, Arial",
        pop: "Poppins, Arial",
        popb: "Poppins-Bold, Arial",
        popt: "Poppins-Light, Arial",
      },
      backgroundImage: {
        sky: "url('./vectors/bg-sky.svg')",
        star: "url('./vectors/stars.svg')",
        moon: "url('./vectors/moon.svg')",
        island: "url('./vectors/island.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
