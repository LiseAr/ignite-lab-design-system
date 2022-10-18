/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xlg: 24,
      '2xl': 32
    },
    colors: { 

      transparent: 'transparent',
      
      'black': '#000000',
      'white': '#ffffff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4C4',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#98E1FB',
      }
    }
  },
  plugins: [],
}