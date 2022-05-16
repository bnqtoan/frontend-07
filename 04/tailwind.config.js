module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      spacing: {
        '7.5': '30px'
      },
      colors: {
        gray: {
          100: '#F4F5F7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
