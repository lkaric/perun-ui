const rootTailwindConfig = require("../tailwind.config.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...rootTailwindConfig,
  content: [
    "./.storybook/preview.{js,jsx,ts,tsx}",
    "./src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
};
