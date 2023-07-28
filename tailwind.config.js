/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/gradient2.jpeg')",
      }
    },
  },
  plugins: [],
}

