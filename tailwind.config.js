/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      //cambiar ref a ingles!!
      logoText: '#D0D0DE',
      SemiGreen: '#03402F',
      hoverGreen: '#021710',
      brightGreen: '#07F2B0',
      lightGreen: '#0A7355',
      semiDarkGreen: '#07261D',
      deepGreen: '#010907',
      darkGreen: '#020D09',
      // tablas 
      lightGray: '#292929',
      darkGray: '#0F1110',
      deepGray: '#0B0C0D',
      textGray: '#868C8A'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}