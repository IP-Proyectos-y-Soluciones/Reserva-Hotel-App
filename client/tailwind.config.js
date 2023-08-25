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
      padding: ['hover']
    },
  },
  plugins: [
    ['prettier-plugin-tailwindcss'],
  ],
}
