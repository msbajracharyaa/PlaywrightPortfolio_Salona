import { expect, Locator, Page } from '@playwright/test'
import { Locators } from '../utils/locators'
export class HomePage {
    readonly page: Page
    readonly SignInButton: Locator
    readonly CategoryMenu: Locator
    readonly ContactMenu: Locator
    readonly LanguageMenu: Locator
    readonly SortingDrodown: Locator
    readonly PriceRangeMover: Locator
    readonly SearchTextBox: Locator
    readonly FilterLists: Locator
    readonly ByBrandFilterCategory: Locator
    readonly ForgeFlexBrand: Locator
    readonly MightyCraft: Locator

    constructor(page:Page){
        this.page = page
        this.SignInButton = page.locator(Locators.homePage.SignInButton)
        this.CategoryMenu = page.locator(Locators.homePage.CategoryMenu)
        this.ContactMenu = page.locator(Locators.homePage.ContactMenu)
        this.LanguageMenu = page.locator(Locators.homePage.LanguageMenu)
        this.SortingDrodown = page.locator(Locators.homePage.SortingDrodown)
        this.PriceRangeMover = page.locator(Locators.homePage.PriceRangeMover)
        this.SearchTextBox = page.locator(Locators.homePage.SearchTextBox)
        this.FilterLists = page.locator('')
        this.ByBrandFilterCategory = page.locator(Locators.homePage.ByBrandFilterCategory)
        this.ForgeFlexBrand = page.locator(Locators.homePage.ForgeFlexBrand)
        this.MightyCraft = page.locator(Locators.homePage.MightyCraft)

    }

    async openPage(){
        await this.page.goto('https://practicesoftwaretesting.com/')
    }

    // this category list is visible no matter what category is selected
    async ByBrandSideCategoryVisibility(){
        await expect(this.ByBrandFilterCategory).toBeVisible()
        await expect(this.ForgeFlexBrand).toBeVisible()
        await expect(this.MightyCraft).toBeVisible()
    }
    
}