/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marko: ["Marko One", "serif"],
        lexend: ["Lexend", "sans-serif"],
        against: ["Bona Nova SC", "serif"],
      },
      colors: {
        "bg-blue": "#1B2D48",
        "bg-pink": "#4C0033",
        "heading-1": "#FEFFE4",
        "heading-2": "#EF77DE",
      },
      keyframes: {
        fadeanim: {
          "0%": { scale: 0.8 },
          "100%": { scale: 1 },
        },
      },
      animation: {
        fadeanimation: "fadeanim 2s infinite",
      },
    },
    plugins: [],
  },
};
