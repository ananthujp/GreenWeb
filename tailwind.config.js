const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia : colors.fuchsia,
        cyan : colors.cyan,
        blue: colors.blue,
        orange:colors.orange,
        pink:colors.pink,
        rose:colors.rose,
      },
      spacing: {
        'w-110':'150%',
      },
      maxWidth: {
        'max-w-110': "150%",
       },
      fontFamily: {
        'beb': 'Bebas, Arial',
        'treb': 'Trebuchet, Arial',
        
      },
      backgroundImage: {
        'sky':"url('./vectors/bg-sky.svg')",
        'star':"url('./vectors/stars.svg')",
        'moon':"url('./vectors/moon.svg')",
        'island':"url('./vectors/island.svg')",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
