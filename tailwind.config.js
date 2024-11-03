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
          DEFAULT: '#000',
          light: '#6d6d6d',
          dark: '#4f4f4f'
        },
        secondary: {
          DEFAULT: '#ca8a04',
          light: '#eaa108',
          dark: '#a16f07'
        }
      }
    }
  },
  plugins: [forms, typography, aspectRatio]
}
