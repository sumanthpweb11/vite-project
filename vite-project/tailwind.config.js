/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "border",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-full",
    "bg-color",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DF2E38",
      },
    },
  },
  plugins: [],
};
