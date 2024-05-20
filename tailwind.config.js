/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", ".src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        // Primary Colors
        'nike-black': '#000000',
        'nike-white': '#FFFFFF',

        // Background Colors
        'nike-bg-light': '#F9F9F9',
        'nike-bg-dark': '#333333',

        // Text Colors
        'nike-text-white': '#FFFFFF',
        'nike-text-charcoal': '#111111',
        'nike-text-warm': '#757575',
        'nike-text-orange-red': '#9E3500',
      },
      colors: {
        // Primary Colors
        'nike-black': '#000000',
        'nike-white': '#FFFFFF',

        // Background Colors
        'nike-bg-light': '#F9F9F9',
        'nike-bg-dark': '#333333',

        // Text Colors
        'nike-text-white': '#FFFFFF',
        'nike-text-charcoal': '#111111',
        'nike-text-warm': '#757575',
        'nike-text-orange-red': '#9E3500',
      },
    },
  },
  plugins: [  
    require('tailwindcss'),
    require('autoprefixer'),],
}

