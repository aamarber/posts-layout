/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    fontFamily:{
      'body': ['Arial', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'body': '#8EABC0',
      'orangeish': '#F6BD62',
      'pinkish': '#EB6481',
      'dark-orangeish': '#D76A50',
      'post': '#B7CE3F',
      'post-text': '#788729',
      'footer': '#F6BD62'
    },
    extend:{
      width:{
        '200': '200px'
      }
    }
  },
  plugins: [],
}

