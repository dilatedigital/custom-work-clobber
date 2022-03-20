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
        120: '120px',
      },

      screens: {
        xct: '1170px',
      },
      maxWidth: {
        120: '120px',
        150: '150px',
        300: '300px',
        970: '970px'
      },

      colors: {
        'wc-black': '#101010',
        'btm-bar': '#d8d8d8',
        'logos-bg': '#f0f0f0'
      },
    },
  },
  plugins: [],
}
