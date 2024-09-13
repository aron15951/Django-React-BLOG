/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#3f3cbb",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "pink-color": "#ff3190",
        "pale-pink": "#ffdac2",
        blued: "#eeeeff",
        "pale-gray": "#EAEAEA",
      },
    },
  },
  plugins: [],
  important: true,
};
