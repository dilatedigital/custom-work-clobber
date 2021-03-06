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
        230: '230px',
        430: '430px'
      },

      screens: {
        xct: '1170px',
      },
      maxWidth: {
        120: '120px',
        150: '150px',
        300: '300px',
        315: '315px',
        360: '360px',
        970: '970px',
        1170: '1170px'
      },
      padding: {
        '30px': '30px',
        '35px': '35px',
        '50px': '50px',
        '100px': '100px'
      },

      colors: {
        'wc-black': '#101010',
        'wc-yellow': '#eecc2d',
        'wc-orange': '#f7791d',
        'btm-bar': '#d8d8d8',
        'logos-bg': '#f0f0f0',
        'cart-gray-ac': "#acacac"
      },
      gap: {
        '30px': '30px'
      },
      borderWidth: {
        '3': '3px'
      },
      fontFamily: {
        'euro': ['Eurostile', 'system-ui'],
        'campton': ['CamptonBook', 'system-ui']
      },
      fontSize: {
        '40px': '40px'
      }
    },
  },
  plugins: [],
}
