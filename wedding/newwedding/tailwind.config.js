const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        "mobile-up": "480px",
        tablet: "768px",
        desktop: "1280px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        Cedarville: ["Cedarville"],
        inter: ["Inter", "sans-serif"],
        karantina: ["Karantina", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },

      colors: ({ colors }) => ({
        gray: colors.neutral,
        silver: "#C0C0C0",
        navy: "#001F3F",
        yellow: "rgb(251 191 36)",
        orange: "#ff4d01",
        blue: "#033C66",
        newgray: "#D3D3D3",
        lightblue: "rgb(237 246 245)",
        lightorange: "	#FFD580",
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        primary: "#151F34",
        secondary: "#04AA82",
        yellow: "#FFC03D",
        newblue: "027AA8",
        red: "#ff0000",
        "gray-light": "rgba(255, 255, 255, 0.05)",
        "gray-middle": "rgba(255, 255, 255, 0.10)",
        "gray-strong": "rgba(255, 255, 255, 0.20)",
        "overlay-light": "rgba(2, 15, 8, 0.50)",
        "overlay-strong": "rgba(2, 15, 8, 0.75)",
        "overlay-burger": "rgba(1, 10, 5, 0.75)",
        "body-color": "#959CB1",
        "body-dark": "#848b9e",
      }),
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
