/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      outfit: '"Outfit", "sans-serif"',
    },

    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s",
      },
      boxShadow: {
        foodItem: "0px 0px 10px #00000015",
      },
    },
    plugins: [],
  },
};
