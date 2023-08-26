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
      }
    },
  },
  plugins: [
    ['prettier-plugin-tailwindcss'],
  ],
}
