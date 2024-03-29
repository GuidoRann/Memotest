import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        blueShadow: ["0 0px 10px #3b82f6", "0 0px 15px #1d4ed8"],
      },
      fontFamily: {
        poppins: ["Poppins"],
        MagicFunk: ["MagicFunk"],
      },
    },
  },
  darkMode: "class",
  plugins: [animations, require("tailwindcss-text-fill-stroke")()],
};
