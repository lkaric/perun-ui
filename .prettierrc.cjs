/** @type {import('prettier').Config} */
const prettierConfig = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'clsx'],
};

module.exports = prettierConfig;
