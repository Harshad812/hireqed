import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    container: false,
  },
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
          800: "#E3F4FF",
          900: "#F6FDFF",
          1000: "#ECF6FB",
          1100: "#45A3DB1A",
        },
        accent: {
          100: "#FFEADD",
          200: "#F99B1C",
          300: "#F47120",
          400: "#C35A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF26",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000BF",
        },
        gradient: {
          small:
            "background: linear-gradient(127.37deg, #189DF8 1.37%, #253E7F 100%)",
          big: "background: linear-gradient(127.53deg, #23AEDC 1.83%, #358AD1 27.3%, #3881D3 54.16%, #253E80 101.97%)",
          orange:
            "background: linear-gradient(127.37deg, #F99B1C 1.37%, #F47120 100%)",
        },
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(127.37deg, #189DF8 1.37%, #253E7F 100%)",
        "about-bg": "url('./../images/Background-Graphics.png')",
      },
      boxShadow: {
        card: "0px 2.7px 7.21px -0.9px #45A3DB33,0px 0px 0.9px 0px #253B7C80",
        sm: "4px 2px 50px 0px #00000040",
        md: "16px 8px 100px 0px #00000040",
        lg: "0px 8px 24px -4px #18274B14,0px 6px 12px -6px #18274B1F",
        xl: "0px 18px 88px -4px #18274B24,0px 8px 28px -6px #18274B1F",
        "2xl": " 0px 2.7px 7.21px -0.9px #37353533,0px 0px 0.9px 0px #5555554D",

        Default:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        rounded: "0.25rem;" /* 4px */,
        "rounded-md": "0.375rem;" /* 6px */,
        "rounded-lg": "0.625rem;" /* 10px */,
        "rounded-xl": "0.75rem;" /* 12px */,
        "rounded-2xl": "1rem;" /* 16px */,
        "rounded-3xl": "1.5rem;" /* 24px */,
        "4xl": "2rem",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        100: "100",
        990: "990",
        999: "999",
        9999: "9999",
      },
    },
    screens: {
      mobile: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      laptop: "1440px",
      "3xl": "1500px",
      "4xl": "1600px",
    },
    // fontFamily: {
    //   poppins: ['"Poppins", sans-serif'],
    //   sourceSans: ['"Source Sans 3",sans-serif'],
    // },
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"], // Use the CSS variable defined above
      source: ["var(--font-sourceSans)", "sans-serif"], // Use the CSS variable defined above
    },
  },

  plugins: [
    function (pluginAPI: PluginAPI) {
      const { addComponents } = pluginAPI;
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 16px",
          "@screen sm": {
            maxWidth: "740px",
            padding: "0 20px",
          },
          "@screen md": {
            maxWidth: "940px",
            padding: "0 24px",
          },
          "@screen lg": {
            maxWidth: "1140px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1440px",
          },
          "@screen laptop": {
            maxWidth: "1440px",
          },
          "@screen 3xl": {
            maxWidth: "1500px",
          },
          "@screen 4xl": {
            maxWidth: "1600px",
          },
        },
      });
    },
  ],
};
export default config;
