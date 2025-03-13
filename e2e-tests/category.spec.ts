import {test, expect} from '@playwright/test'
import { HomePage } from '../page-objects/LandingPage'
import { Locators } from '../utils/locators'

test.describe('Open category menu', () => {
    let landingPage: HomePage

    test.beforeEach(async ({page}) => {
        landingPage = new HomePage(page)
        landingPage.openPage()
    })

    test('Open Hand Tools Category', async({page}) => {
        await page.locator(Locators.homePage.CategoryMenu).click()
        await page.locator(Locators.homePage.CategoryHandTools).click()
        await expect(page.locator('#filters')).toContainText('Hand Tools');
        await landingPage.ByBrandSideCategoryVisibility()
    })

    test('Open Power Tools Category', async({page}) => {
        await page.locator(Locators.homePage.CategoryMenu).click()
        await page.locator(Locators.homePage.CategoryPowerTools).click()
        await expect(page.locator('#filters')).toContainText('Power Tools');
        await landingPage.ByBrandSideCategoryVisibility()
    })

    test('Open Other Category', async({page}) => {
        await page.locator(Locators.homePage.CategoryMenu).click()
        await page.locator(Locators.homePage.CategoryOthers).click()
        await expect(page.locator('#filters')).toContainText('Other');
        await landingPage.ByBrandSideCategoryVisibility()
    })

    test('Open Special Category', async({page}) => {
        await page.locator(Locators.homePage.CategoryMenu).click()
        await page.locator(Locators.homePage.CategorySpecialTools).click()
        await landingPage.ByBrandSideCategoryVisibility()
    })


})