import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { environments } from './src/config/environments';

const testDir = defineBddConfig({
  featuresRoot: './features',
  features: '**/*.feature',
  steps: ['./features/steps/**/*.ts', './src/fixtures/**/*.ts'],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: environments.isCI,
  retries: environments.retries,
  workers: environments.workers,
  reporter: environments.isCI
    ? [
        ['github'],
        ['allure-playwright', { resultsDir: 'allure-results' }],
        ['junit', { outputFile: 'reports/junit/results.xml' }],
      ]
    : [['allure-playwright', { resultsDir: 'allure-results' }]],
  use: {
    baseURL: environments.baseURL,
    trace: environments.isCI ? 'retain-on-failure' : 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
