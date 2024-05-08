import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(122deg,rgba(4,25,7,0.848182485884979)51%, rgba(12,15,15,0.7973564425770308) 100%);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;