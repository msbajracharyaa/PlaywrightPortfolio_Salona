import { expect, Locator, Page } from '@playwright/test'
import { Locators } from '../utils/locators'
export class LoginPage {
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly loginSubmitButton: Locator
    readonly registerButton: Locator
    readonly forgotPasswordButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.emailInput = page.locator(Locators.loginPage.UsernameField)
        this.passwordInput = page.locator(Locators.loginPage.PasswordField)
        this.loginSubmitButton = page.locator(Locators.loginPage.LoginButton)
        this.registerButton = page.locator(Locators.loginPage.RegisterButton)
        this.forgotPasswordButton = page.locator(Locators.loginPage.ForgotPasswordLink)
        this.errorMessage = page.locator(Locators.loginPage.InvalidLoginCredentialsMessage)
    }

    // Login with email and password
    async loginPage(username: string, password: string) {
        await this.emailInput.type(username)
        await this.passwordInput.type(password)
        await this.loginSubmitButton.click()
    }

    
    // if the user doesn't exist, show error message
    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText(
          'Invalid email or password'
        )
      }

    
}