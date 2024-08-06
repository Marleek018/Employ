/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      xmd: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        orange: "#E03500",
        white: "#FFF9F7",
        ablack: "#404040",
        bblack: "#101010",
        cblack: "#1C1C1C",
        dblack: "#000000",
        agray: "#313131",
        bgray: "#646464",
        cgray: "#4A4A4A",
        dgray:"#828282",
        bwhite: "#EDEDED",
      },
      fontFamily: {
        DmSans: ["DM Sans"],
      },
    },
  },
  plugins: [],
};

