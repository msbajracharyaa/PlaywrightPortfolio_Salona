import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/LandingPage'
import { Locators } from '../utils/locators'

test.describe('Complete one whole order step', () => {
    let landingPage: HomePage

    test.beforeEach(async ({ page }) => {
        landingPage = new HomePage(page)
        landingPage.openPage()
    })

    test('Open a product', async ({ page }) => {
        await page.locator(Locators.Products.CombinationPliers).click();

        const productCostString = await page.locator(Locators.Products.CombinationPliersUnitPriceLocator).innerText();
        const productCost = parseFloat(productCostString.replace('$', ''));
        console.log(productCost);

        await page.locator(Locators.Products.IncreaseQuantityButton).click();
        await page.locator(Locators.Products.AddToCartButton).click();

        // Calculate expected price
        const expectedPrice = (productCost * 2).toFixed(2);

        //verify the visibility of toast message
        await expect(page.locator('div').filter({ hasText: Locators.Cart.AddedToCartToastMessage }).nth(2)).toBeVisible();
        await page.locator(Locators.Cart.CartButton).click();
        await expect(page.locator(Locators.Cart.ProductTitle)).toContainText('Combination Pliers');
        await expect(page.locator(Locators.Cart.ProductQuantity)).toHaveValue('2');
        await expect(page.locator(Locators.Cart.LinePrice)).toContainText('$' + expectedPrice);
    })

})