/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        // Add any additional font families you'd like to use here
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1280px' },
      'min-xl': { 'min': '1280px' },
      'min-lg': { 'min': '1023px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'min-md': { 'min': '767px' },
      'sm': { 'max': '639px' },
      'd-sm': { 'max': '550px' },
      'dd-sm': { 'max': '430px' },
      'min-dd-sm': { 'min': '430px' },
      'min-sm': { 'min': '639px' },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Add the line-clamp plugin here
  ],
}
