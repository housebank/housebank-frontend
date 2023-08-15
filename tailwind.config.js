/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens:{
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    colors: {
      blue: "#60a5fa",
      green: "#34d399",
      red: "#f47185",
      black: "#09090b",
      gray:"#9ca3af",
      white:"#fff",
      emerald: "#047857"
    },
    fontFamily:{
      primary: "Montserrat",
      logo:"Titan One"
    },
    borderRadius: {},
    spacing: {},
    extend: {},
    opacity: {},
    backgroundSize: {},
    borderWidth: {},
  },
  plugins: [],
}

