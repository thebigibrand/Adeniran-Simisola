/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: "Satoshi, sans-serif",
        Cabinet: "Cabinet Grotesk, sans-serif",
      },
      colors: {
        background: "#36022E",
        primary: "#FFE8CC",
        text: "#FFE8CC",
        mouse: "#FFE8CC",
      },
      screens: {
        break: "620px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
