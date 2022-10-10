/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '<rootDir>/src/server.ts',
    '<rootDir>/src/utils',
    '<rootDir>/src/config',
    '<rootDir>/prisma/factories'
  ]
};