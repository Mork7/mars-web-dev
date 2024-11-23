/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3.5s ease-out forwards",
      },
      colors: {
        primary: "#B72020",
      },
      backgroundImage: {
        banner: "url('/mars-banner.jpg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
