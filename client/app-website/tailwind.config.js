/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        black: "#101010", // Fond noir
        indigo: "#2F2E5E" //Fond indigo
      },
      textColor: {
        white: "#FFFFFF", // Texte blanc
        gray: "#5A5A5A", // Texte gris pour sous-titres
        gold: "#FFD700", // Texte or pour éléments d'accentuation
      },
      borderColor: {
        gray: "#C0C0C0", // Bordure grise claire
      },
      gradientColorStops: {
        blue: "#0072C6", // Dégradé bleu pour éléments interactifs
      }
    },
  },
  plugins: [],
}
