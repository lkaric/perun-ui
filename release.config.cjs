/**
 * @type {import('semantic-release').GlobalConfig}
 */
const releaseConfig = {
  branches: ['main', { name: 'next', prerelease: true }],
};

module.exports = releaseConfig;
