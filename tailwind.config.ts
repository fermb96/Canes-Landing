import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canes: {
          red: "#E31C23",
          redDark: "#B5151B",
          yellow: "#FFD400",
          yellowDark: "#E6BE00",
          ink: "#0B0B0B"
        }
      },
      fontFamily: {
        display: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        floatUp: "floatUp .7s ease-out both",
        pulseSoft: "pulseSoft 2.2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
