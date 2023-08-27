/** @type {import('tailwindcss').Config} */
export default {
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        divideColor: ['group-hover'],
        padding: ['hover'],
      color: {
        stone: '#B99768',
        zinc: '#313131',
        carbon: '#585552',
      fontSize: {
        '6x1': '4rem',
        '5x1': '3rem',
      },
      },
    },
  },
  plugins: [
    ['prettier-plugin-tailwindcss'],
  ],
}
