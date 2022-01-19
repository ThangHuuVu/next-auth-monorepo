/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    "\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./config/babel.config.js" },
    ],
  },
  rootDir: "../src",
  setupFilesAfterEnv: ["../config/jest-setup.js"],
  collectCoverageFrom: ["!client/__tests__/**"],
  testMatch: ["**/*.test.js"],
  coverageDirectory: "../coverage",
  testEnvironment: "jsdom",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
}
