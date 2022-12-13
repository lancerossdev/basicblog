/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p, li": {
              code: {
                backgroundColor: "#27272a",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "white",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
            "html:not(.dark) p, li": {
              code: {
                backgroundColor: "#e4e4e7",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "black",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
