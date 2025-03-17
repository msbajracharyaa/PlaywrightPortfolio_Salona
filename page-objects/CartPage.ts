import { expect, Locator, Page } from '@playwright/test'
import { Locators } from '../utils/locators'
export class CartPage {
    readonly page: Page
    readonly FirstCartStepIcon: Locator
    readonly SecondCartStepIcon: Locator
   

    constructor(page: Page) {
        this.page = page
        this.FirstCartStepIcon = page.locator(Locators.Cart.FirstCartStepIcon)
        this.SecondCartStepIcon = page.locator(Locators.Cart.SecondCartStepIcon)
    }

    // Verify the color of the step icon (Hasn't been used yet, but created for future use)
    async colorChangingVerifyAfter(stepName:string, color: string) {
        const ele=  this.page.locator(stepName);
        const bgColor= await ele.evaluate((e) => getComputedStyle(e).backgroundColor);
        expect(bgColor).toContain(color);
    }

    

    
}