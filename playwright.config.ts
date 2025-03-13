import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  globalSetup: './globalSetup.ts',
  use: {
    headless: true,
    baseURL: 'https://practicesoftwaretesting.com/',
    browserName: 'chromium',
    screenshot: 'on',
    video: 'retain-on-failure',
    storageState: 'auth.json', // Loads saved authentication state
  }

});
