/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors:{
        desRed: 'hsl(0, 36%, 70%)',
        softRed: 'hsl(0, 93%, 68%)',
        darkGrayishRed: 'hsl(0, 6%, 24%)',
        grGray:'hsl(0, 0%, 100%)',
        grVerySoftPink: 'hsl(0, 100%, 98%)',
        grSoftPink: 'hsl(0, 80%, 86%)',
        grDarkPink: 'hsl(0, 74%, 74%)'
      },
      fontFamily:{
        josfin: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage:{
        desktop: "url('./images/bg-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}
