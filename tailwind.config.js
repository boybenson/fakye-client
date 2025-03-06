/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_dark: "#1A0E00",
        main_green: "#08A045",
        main_gray: "#6B7280",
        main_red: "#FF0000",
      },
    },
  },
};
