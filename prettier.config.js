module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",

  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
