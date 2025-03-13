import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/LandingPage'
import { Locators } from '../utils/locators'
import * as dotenv from 'dotenv';

dotenv.config(); 
test.describe.skip('Login normal user', () => {
    let landingPage: HomePage

    test.beforeEach(async ({ page }) => {
        landingPage = new HomePage(page)
        landingPage.openPage()
    })

    test('login with username and password', async ({ page }) => {
        await page.locator(Locators.homePage.SignInButton).click()
        await page.fill(Locators.loginPage.UsernameField, 'customer@practicesoftwaretesting.com')
        await page.fill(Locators.loginPage.PasswordField, 'welcome01')
        await page.locator(Locators.loginPage.LoginButton).click()

        await expect(page.locator(Locators.loggedInUser.PageTitle)).toContainText ('My account')
        
        // Save session storage
        await page.context().storageState({ path: '../auth.json' });
    })
})