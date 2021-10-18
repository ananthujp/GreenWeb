module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
