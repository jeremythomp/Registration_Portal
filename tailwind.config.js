/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      fontSize: {
        xs: "1.3rem",
        sm: "1.4rem",
        md: "1.6rem",
        lg: ["2.2rem", "1.3"],
        "5xl": ["8rem", "1"],
      },
      colors: {
        primary: "#001489",
        secondary: "#F5BD00"
      },
      boxShadow: {
        primary: "rgb(80 63 205 / 50%) 0px 1px 40px"
      }
    },
  },
  plugins: [],
}