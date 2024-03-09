/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1a365d',
        customGreen: 'rgb(0, 128, 0)',
        customRed: '#ff0000',
      },
    },
  },
  variants: {},
  plugins: [],
}

