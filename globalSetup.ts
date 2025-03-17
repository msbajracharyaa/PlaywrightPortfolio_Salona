import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import { Locators } from './utils/locators';

dotenv.config(); // Load credentials

async function globalSetup(config: FullConfig) {
    // Run if authentication setup is enabled
    if (process.env.RUN_AUTH_SETUP !== 'true') {
      console.log('Skipping global setup as RUN_AUTH_SETUP is not set to true.');
      return;
    }
  
  const browser = await chromium.launch()
  const page = await browser.newPage();

  const baseURL = config.projects?.[0]?.use?.baseURL
  await page.goto(`${baseURL}/auth/login`);

  await page.fill(Locators.loginPage.UsernameField, process.env.USER1!)
  await page.fill(Locators.loginPage.PasswordField, process.env.PASSWORD!)
  await page.locator(Locators.loginPage.LoginButton).click()

  // Save session
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
}

export default globalSetup;
