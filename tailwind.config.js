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

        azul: '#011640',
        verdeSemiClaro: '#03402F',
        verdeHover: '#021710',
        verdeClaro1: '#07F2B0',
        verdeClaro: '#0A7355',
        verdeSemiOscuro: '#07261D',
        verdeOscuro: '#010907',
        verdeOscuro2: '#020D09',

        // tablas 
        grisOscuro: '#0B0C0D',
        grisClaro: '#0F1110',
        grisLetras: '#868C8A',
        gris1: '#1F2523'
      }
    },
  },
  plugins: [],
}

