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
          "linear-gradient(122deg,rgba(4,25,7,0.85)51%, rgba(12,15,15,0.7973564425770308) 100%);",

        "footer-gradient":
          "radial-gradient(circle, rgba(4,25,7,0.8) 17%, rgba(12,15,15,0.7) 81%)",

        "cards-gradient":
          "linear-gradient(83deg, rgba(9,20,1,0.89) 40%, rgba(9,20,1,0.7014444713432247) 100%);",

        hypedog1: "url('/image1-transparent.png')",
        hypedog2: "url('/img2.jpeg')",
      },
      gridTemplateColumns: {
        tokenomics: "repeat(auto-fit, minmax(180px, 300px))",
        "coming-soon": "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
