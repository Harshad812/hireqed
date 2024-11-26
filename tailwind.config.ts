import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#D9D9D9",
          400: "#AFAFAF",
          500: "#7D7D7D",
          600: "#555555",
          700: "#212A35",
          800: "#0B1624",
        },
        primary: {
          100: "#A7E9FF",
          200: "#23AEDC",
          300: "#18A0FB",
          400: "#253B7C",
          500: "#354860",
          600: "#17273B",
          700: "#132337",
        },
        accent: {
          100: "#FFEADD",
          200: "#F99B1C",
          300: "#F47120",
          400: "#C35A1A",
        },
        gradient: {
          small:
            "background: linear-gradient(127.37deg, #189DF8 1.37%, #253E7F 100%)",
          big: "background: linear-gradient(127.53deg, #23AEDC 1.83%, #358AD1 27.3%, #3881D3 54.16%, #253E80 101.97%)",
          orange:
            "background: linear-gradient(127.37deg, #F99B1C 1.37%, #F47120 100%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
