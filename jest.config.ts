import type { Config } from '@jest/types'
import { defaults } from 'jest-config'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src/__tests__', '<rootDir>/src'],
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*(*.)+(test).+(tsx|ts)',
    '<rootDir>/src/**/*(*.)+(test).+(tsx|ts)'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  }
}
export default config
