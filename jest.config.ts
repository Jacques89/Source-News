import type { Config } from '@jest/types'
import { defaults } from 'jest-config'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/**/__tests__/**/*(*.)+(test).+(tsx|ts)', '<rootDir>/src/**/*(*.)+(test).+(tsx|ts)'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  }
}
export default config
