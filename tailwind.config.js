/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",
      "./src/Components/**/*.{js,jsx,ts,tsx}",
      "./src/AtomicComponents/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      spacing: {
        xpadding: "6.94%",
      },
      colors: {
        primary1: "#00AC76",
        primary2: "#FFF",
        primary3: "#090914",
        primary4: "#52525B",
        primary5: "#222",
        primary6: "#FDEFD2",
        primary7: "#000",
        yellowPrime: "#F5AE1E",
        purplePrime: "#8D67CE",
        redPrime: "#FE5972",
        secondary1: {
          100: "#1B4ED2 50%",
          200: "rgba(181, 65, 162, 0.93) 100%",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        lt: { max: "500px" },
        sm: { max: "600px" },
        sm1: { max: "768px" },
        md: { min: "800px" },
        md1: { max: "850px" },
        lg: { min: "2300px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
