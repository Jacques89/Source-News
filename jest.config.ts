import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testMatch: ['<rootDir>/**/__tests__/**/*(*.)+(test).+(tsx|ts)'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'target/coverage',
  collectCoverageFrom: ['src/**/*.tsx'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^.+\\.(png|svg|pdf|jpg|jpeg)$': 'jest-transform-stub',
    '^@foo/(.*)': '<rootDir>/src/$1'
  }
}

export default config
