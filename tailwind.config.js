/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './src/components/*.js',  "./src/pages/**/*.{html,js}"],
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
      padding: {
        'desktop' : '0 38px 0 36px',
        'teblet' : '0 14px 0 16px'
      },
      screens: {
        'tablet' : '960px'
      },
      screens: {
        'tablet' : '960px'
      },
      height: {
        '15' : '60px'
      },
      screens: {
        tab: '960px',
        mob: '600px'
      },
      fontFamily: {
        Futura: 'Futura'
      }
    },
    screens: {
      tab: '960px',
      mob: '600px'
    },
    fontFamily: {
      Futura: 'Futura',
      HelveticaNowText_Regular: 'HelveticaNowText-Regular',
      HelveticaNowText_Medium: 'HelveticaNowText-Medium'
    }
  },
  plugins: [  
    require('tailwindcss'),
    require('autoprefixer'),],
}

