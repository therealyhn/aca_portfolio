/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Osnovne boje
        background: {
          DEFAULT: "#ffffff",  // body bg
          soft: "#f9f9f9",     // sekcije kao portfolio/news
          dark: "#000000",     // crne sekcije (talk, footer)
        },

        text: {
          base: "#767676",     // body tekst
          heading: "#000000",  // h1–h6
          light: "#dddddd",    // svetli tekst na tamnoj pozadini (hero job)
        },

        border: {
          subtle: "rgba(0,0,0,0.2)", // input border, mobile menu border itd
          soft: "rgba(0,0,0,0.09)",  // progress bar bg
        },

        // Glavna accent/brand boja (crimson)
        primary: "#e54b4b",

        // Paleta tema 
        theme: {
          blue: "#4169e1",
          green: "#66B95C",
          brown: "#ff9800",
          pink: "#ff5e94",
          orange: "#fa5b0f",
          black: "#333333",
          white: "#e5e5e5",
          purple: "#9200ee",
          sky: "#00D4BD",
          cadetBlue: "#5e9e9f",
          crimson: "#e54b4b",
          olive: "#666d41",
          red: "#fe0000",
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem", //
          md: "2rem",
        },
        screens: {
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
