import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',         // lokasi .feature
  paths: ['features/**/*.feature'],      // lokasi .feature
  steps: ['tests/steps/**/*.ts']            // lokasi step definitions

});

export default defineConfig({
  testDir,
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',         
    headless: true,

    viewport: null,//{ width: 1366, height: 768 },
    
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      args: ["--start-maximized"],
    }
  },
  reporter: [
    ['list'], // Tetap tampilkan log di terminal
    ['allure-playwright', { 
       outputFolder: 'allure-results',
       detail: true,
       suiteTitle: false 
    }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' }
    // }
  ]
});
