const { getJestConfig } = require('@storybook/test-runner');

module.exports = getJestConfig({
  setupFilesAfterEnv: ['./setup-tests.ts'],
});
