import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/LandingPage'
import { Locators } from '../../utils/locators'
import { LoginPage } from '../../page-objects/LoginPage'
import { BillingAddressPage } from '../../page-objects/BillingAddressPage';

test.describe('Complete one whole order step', () => {
    let landingPage: HomePage
    let loginPage: LoginPage
    let billingAddressPage: BillingAddressPage

    test.beforeEach(async ({ page }) => {
        landingPage = new HomePage(page)
        landingPage.openPage()
    })

    test('Open a product and Add to cart', async ({ page }) => {
        await page.locator(Locators.Products.CombinationPliers).click();

        const productCostString = await page.locator(Locators.Products.CombinationPliersUnitPriceLocator).innerText();
        const productCost = parseFloat(productCostString.replace('$', ''));

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
        await page.locator(Locators.Cart.CheckoutButton).click();


        //User logs in, user logs with wrong credentials
        loginPage = new LoginPage(page)
        await loginPage.loginPage('this@this.com', 'DummyTestPass123')
        await page.locator(Locators.loginPage.LoginButton).click();
        await loginPage.assertErrorMessage();
  
        await page.locator(Locators.loginPage.UsernameField).clear();
        await page.locator(Locators.loginPage.PasswordField).clear();
    
        //User logs in, user logs with correct credentials
        await loginPage.loginPage(process.env.USER1!, process.env.PASSWORD!)
        await page.locator(Locators.loginPage.LoginButton).click(); 

        //verify the second step of the checkout process
        await page.locator(Locators.Cart.ProcessToCheckoutButton).click();
        await expect (page.locator(Locators.billingAddressPage.ProcessedToCheckoutButton)).toBeDisabled();
        
        // Since, there's already address registered, we clear it out add new one
        await page.locator(Locators.billingAddressPage.StreetAdress).clear();
        await page.locator(Locators.billingAddressPage.City).clear();
        await page.locator(Locators.billingAddressPage.Country).clear();

        billingAddressPage = new BillingAddressPage(page);
        await billingAddressPage.addBillingAddressDetails('123 Main St', 'New York', 'State', 'United States','10001');
        await expect(page.locator(Locators.billingAddressPage.ProcessedToCheckoutButton)).toBeEnabled();
        
        //verify the third step of the checkout process
        await expect(page.locator(Locators.Cart.paymentPage)).toBeVisible();
  
})
})