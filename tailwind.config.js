/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1db954",
        "spotify-black": "#121212",
        "spotify-dark-grey": "#212121",
        "spotify-grey": "#535353",
        "spotify-light-grey": "#b3b3b3",
        "spotify-white": "#FFFFFF",
        "hero-black": "#010101"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
