import { expect, Locator, Page } from '@playwright/test'
import { Locators } from '../utils/locators'
export class BillingAddressPage {
    readonly page: Page
    readonly StreetAdress: Locator
    readonly City: Locator
    readonly State: Locator
    readonly PostalCode: Locator
    readonly Country: Locator
    readonly ProcessedToCheckoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.StreetAdress = page.locator(Locators.billingAddressPage.StreetAdress)
        this.City = page.locator(Locators.billingAddressPage.City)
        this.State = page.locator(Locators.billingAddressPage.State)
        this.PostalCode = page.locator(Locators.billingAddressPage.PostalCode)
        this.Country = page.locator(Locators.billingAddressPage.Country)
        this.ProcessedToCheckoutButton = page.locator(Locators.billingAddressPage.ProcessedToCheckoutButton)
           }

    // Login with email and password
    async addBillingAddressDetails(street: string, city: string, state: string, country: string, postalCode: string) {
        await this.StreetAdress.fill(street)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.PostalCode.fill(postalCode)
        await this.Country.fill(country)
        await this.ProcessedToCheckoutButton.click()
    }
    
}