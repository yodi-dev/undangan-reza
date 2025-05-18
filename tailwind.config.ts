/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        fontFamily: {
            heading: ['Great Vibes', 'serif'],
          body:    ['Montserrat', 'sans-serif'],
        }
      }
    },
    // pastikan content mencakup .vue di seluruh direktori
    content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue']
  }
  