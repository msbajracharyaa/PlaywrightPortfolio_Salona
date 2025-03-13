import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import { Locators } from './utils/locators';

dotenv.config(); // Load credentials

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch()
  const page = await browser.newPage();

  const baseURL = config.projects?.[0]?.use?.baseURL
  await page.goto(`${baseURL}/auth/login`);

  await page.fill(Locators.loginPage.UsernameField, process.env.USERNAME!)
  await page.fill(Locators.loginPage.PasswordField, process.env.PASSWORD!)
  await page.locator(Locators.loginPage.LoginButton).click()
  await page.waitForURL(`${baseURL}/account`);

  // Save session
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
}

export default globalSetup;
