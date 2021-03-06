module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}',],
  coveragePathIgnorePatterns: ['src/index.jsx',],
  moduleFileExtensions: [
    '/index.js',
    '/index.jsx',
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(html|ico)$': '<rootDir>/__mocks__/htmlMock.js',
  },
  modulePaths: [
    '<rootDir/src',
    '<rootDir>/node_modules',
  ],
  setupTestFrameworkScriptFile: './testConfig.js',
}
