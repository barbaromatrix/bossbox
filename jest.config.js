Object.assign(process.env, {
  PORT:'3000',
  DATABASE_URI:'mongodb://127.0.0.1',
  DATABASE_NAME:'bossabox',
  JWT_SECRET:'sampleSecretDoNotShare',
  JWT_REFRESH_TOKEN_EXPIRATION_TIME:100,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME:300,
  ENCODE_SECRET: 'sample_encode_secret'
})

module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  modulePathIgnorePatterns: [
    'dist',
    'node_modules',
    'interfaces.ts'
  ],
  rootDir: '.',
  transform: {
    "^.+\\.(t|j)s$": 'ts-jest'
  },
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  coverageReporters: [
    'cobertura',
    'html'
  ],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
}