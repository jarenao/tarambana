/** @type {import('tailwindcss').Config} */

const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const aspectRatio = require('@tailwindcss/aspect-ratio')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Color principal
          light: '#3B82F6', // Versión más clara
          dark: '#1E40AF' // Versión más oscura
        },
        secondary: {
          DEFAULT: '#D97706', // Color secundario
          light: '#F59E0B', // Versión más clara
          dark: '#B45309' // Versión más oscura
        }
      }
    }
  },
  plugins: [forms, typography, aspectRatio]
}
