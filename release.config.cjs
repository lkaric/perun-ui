/**
 * @type {import('semantic-release').GlobalConfig}
 */
const releaseConfig = {
  branches: ['master', { name: 'next', prerelease: true }],
};

module.exports = releaseConfig;
