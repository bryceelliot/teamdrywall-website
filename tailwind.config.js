/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './404.html',
    './areas.html',
    './contact.html',
    './newsfeed.html',
    './our-work.html',
    './quote.html',
    './services.html',
    './testimonials.html',
    './components.js',
  ],
  theme: {
    extend: {
      colors: {
        // Ferrari-inspired palette
        ferrari: {
          red: '#DA291C',
          'red-dark': '#B01E0A',
          'red-deep': '#9D2211',
        },
        // Legacy brand aliases (so old class names still work)
        brand: {
          red: '#DA291C',
          'red-dark': '#B01E0A',
          'red-light': '#F13A2C',
          black: '#000000',
          charcoal: '#181818',
          gray: '#666666',
          'light-gray': '#F4F4F4',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Archivo', 'system-ui', 'sans-serif'],
        narrow: ['"Archivo Narrow"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
};
