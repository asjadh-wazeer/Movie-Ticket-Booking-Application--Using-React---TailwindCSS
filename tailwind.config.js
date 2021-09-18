
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        asjadh : 
        {
          50: '#e1fcf8',
          100: '#c1eee6',
          200: '#9de1d5',
          300: '#78d6c5',
          400: '#55c9b4',
          500: '#3caf9b',
          600: '#2c8978',
          700: '#1e6256',
          800: '#0c3b34',
          900: '#001611',
        },
        navColor: 
        
        {
          50: '#feebf9',
          100: '#ecc6e4',
          200: '#dca2d0',
          300: '#cd7fbc',
          400: '#bf5aa9',
          500: '#a6418f',
          600: '#813270',
          700: '#5d2350',
          800: '#391431',
          900: '#180413',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
