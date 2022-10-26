/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: "#8c8a8a",
      lightgray: "#F7F7F7",
      dark: "#333333",
      primaryBlue: "#199ef3",
      secondaryBlue: "#3898ec",
      lightblue: "#199ef3",
      darkblue: "#01013e"
    }
  },
  plugins: [],
}
