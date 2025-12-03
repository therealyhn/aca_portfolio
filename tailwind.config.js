/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          soft: "#f2f2f2",
          dark: "#000000",
        },
        text: {
          base: "#767676",
          heading: "#000000",
          light: "#dddddd",
        },
        border: {
          subtle: "rgba(0,0,0,0.2)",
          soft: "rgba(0,0,0,0.09)",
        },
        primary: "#e54b4b",
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

      keyframes: {
        scrollLine: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      animation: {
        scrollLine: "scrollLine 2s ease-in-out infinite",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
        },
        screens: {
          lg: "1024px",
          xl: "1200px",
          xl2: "1600px",
          xl3: "1800px",
          xl4: "2000px",
        },
      },
    },
  },
  plugins: [],
};
