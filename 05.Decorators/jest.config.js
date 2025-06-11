export default {
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      useESM: true,
      tsconfig: './tsconfig.json'
    }]
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};