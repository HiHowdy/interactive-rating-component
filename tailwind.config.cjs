/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#fc7613",
          "base-100": "#141519",
          "base-200": "#1c232d",
          "base-300": "#262f38",
          "base-content": "#7c8898",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
