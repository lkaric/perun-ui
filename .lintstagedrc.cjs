/** @type {import('lint-staged').Config} */
const lintStagedConfig = {
  '*/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'eslint'],
  '*/**/*.{json,css,md}': ['prettier --write'],
};

module.exports = lintStagedConfig;
