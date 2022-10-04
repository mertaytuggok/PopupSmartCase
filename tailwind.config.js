/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: { min: "375px", max: "390px" },

      md: { min: "390px", max: "500px" },

      lg: { min: "510px", max: "912px" },

      xl: { min: "920px", max: "1280px" },
    },
  },
  plugins: [],
};
