/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        matasBrown: {
          200: "#C09B8C",
        },
        matasPink: {
          700: "#c22869",
        },
        matasGreen: {
          200: "#C6E7C9",
        },
        matasPurple: {
          700: "#A094C4",
        },
        matasAqua: {
          700: "#80CDC6",
        },
        matasWhite: {
          900: "#FFFFFF",
        },
        matasBlue: {
          900: "#002643",
        },
        matasSecondaryText: {
          700: "#8C8C8C",
        },
        matasPrimaryText: {
          900: "#000000",
        },
      },
      plugins: [],
    },
  },
};
