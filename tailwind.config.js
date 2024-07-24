/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //cambiar ref a ingles!!
        logoText: '#D0D0DE',
        verdeSemiClaro: '#03402F',
        verdeHover: '#021710',
        verdeClaro1: '#07F2B0',
        verdeClaro: '#0A7355',
        verdeSemiOscuro: '#07261D',
        verdeOscuro: '#010907',
        'green-bg': '#020D09',
        // tablas 
        grisOscuro: '#0B0C0D',
        grisClaro: '#0F1110',
        grisLetras: '#868C8A',
        gris1: '#292929'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(6,36,27,1) 0%, rgba(2,13,9,1) 50%)',
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif',],
        sinkia: ['Signika Negative', 'sans-serif']
      }
    },
  },
  plugins: [],
}

