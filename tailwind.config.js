/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");
let plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ["skip-to-content-link"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "6rem",
      },
      screens: {
        sm: `640px`,
        md: `768px`,
        lg: `1024px`,
        xl: `1280px`,
        "2xl": `1560px`,
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        "open-sans": ['"Satoshi Variable"', "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--color-neutral-400)",
            iframe: {
              width: "100%",
              height: "100%",
              aspectRatio: "16/9",
            },
            a: {
              color: "var(--color-secondary-500)",
              "&:hover": {
                color: "var(--color-secondary-200)",
              },
            },
          },
        },
      },
      colors: {
        "base-colors": {
          DEFAULT: "#2D2D2E",
          100: "#FAFAFA",
          200: "#F4F6F7",
          300: "EFF0F1",
          400: "E8EAEA",
          500: "#D9DDDD",
          600: "#2D2D2E",
        },
        "paper-blue": {
          DEFAULT: "#E1EBF2",
        },
        "sky-blue": {
          DEFAULT: "#4AA0E7",
        },
        "dawn-blue": {
          DEFAULT: "#1A4B73",
        },
        "night-sky": {
          DEFAULT: "#283548",
        },
      },
      keyframes: {
        animationHorizotal: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        animationHorizontalReverse: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        horizontal: "animationHorizotal 15s linear infinite",
        horizontalReverse: "animationHorizontalReverse 40s linear infinite",
        horizontalFast: "animationHorizotal 20s linear infinite",
        horizontalSlow: "animationHorizotal 80s linear infinite",
      },
      boxShadow: {
        file_shadow: "7.5px 32px 20px 0 rgba(0, 0, 0, 0.07)",
      },
      gridTemplateColumns: {
        product_type: "1fr 1.4fr",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")(),
    plugin(function ({ addVariant }) {
      addVariant("scrolled", ".scrolled &"),
        addVariant("mobile-menu-visible", ".mobile-menu-visible &");
    }),
  ],
};
