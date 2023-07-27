/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
        primary2: "#8C8C8C",
        primary3: "#3A3A3A",
        primary4: "#9C9C9C",
        primary7: "#CB0000",
        primary8: "#0C4DF3",
        primary9: "#5E00D6",
        primary10: "#0D0E15",
        secondary1: {
          100: "#1B4ED2 50%",
          200: "rgba(181, 65, 162, 0.93) 100%",
        },
        secondary2: {
          100: "#EA5718 0%",
          200: "#C70F0F 100%",
        },
        secondary3: {
          100: "#056ECF 0%",
          200: "#180878 65%",
        },
        secondary4: {
          100: "#030D21 0%",
          200: "rgba(0, 1, 2, 0.94) 65%",
        },
        secondary5: {
          200: "#5E00D6 0%",
          100: "rgba(0, 25, 250, 0.24) 100%",
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        'lt': { 'max' : '500px'},
        'sm': { 'max': '600px' },
        'sm1': { 'max': "768px" },
        'md': { 'max': "1100px" },
        'md1': { 'max': "850px"},
        'lg': { 'min': "2300px" },
        'xl': { 'max': "1280px" },
        "2xl": { 'max': "1536px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
