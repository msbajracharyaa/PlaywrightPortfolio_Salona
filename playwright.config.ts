import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  globalSetup: process.env.RUN_AUTH_SETUP === 'true' ? require.resolve('./globalSetup.ts') : undefined,
  projects: [
    // If Test needs login (reuses auth.json)
    {
        name: 'authenticated',
        use: {
            baseURL: 'https://practicesoftwaretesting.com/',
            storageState: 'auth.json', // Loads login session
        },
    },
    // If test doesn't need login
    {
        name: 'unauthenticated',
        use: {
            baseURL: 'https://practicesoftwaretesting.com/',
        },
    },
],
  use: {
    headless: true,
    browserName: 'chromium',
    screenshot: 'on',
    video: 'retain-on-failure'
  }

});
