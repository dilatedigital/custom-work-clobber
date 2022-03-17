module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.liquid',
    './templates/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      width: {
        150: '150px',
      },
      height: {
        65: '65px',
      },

      screens: {
        xct: '1170px',
      },
      maxWidth: {
        120: '120px',
        300: '300px',
      },

      colors: {
        'wc-black': '#101010',
        'btm-bar': '#d8d8d8',
      },
    },
  },
  plugins: [],
}
