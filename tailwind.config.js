module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
         gray:{
           darkest: 'rgb(36,36,36)',
           light: '#808080'
         }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
