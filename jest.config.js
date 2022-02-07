module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/app/core/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^assets/(.*)$': '<rootDir>/src/assets/$1',
      '^environments/(.*)$': '<rootDir>/src/environments/$1'
  },
  globals: {
      'jest-ts': {
          tsconfig: '<rootDir>/tsconfig.spec.json',
          stringifyContentPathRegex: '\\.html$',
          astTransformers: [
              'jest-preset-angular/build/InlineFilesTransformer',
              'jest-preset-angular/build/StripStylesTransformer'
          ],
      },
  }
};