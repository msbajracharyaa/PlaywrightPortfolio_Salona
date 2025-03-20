import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/LandingPage'
import { Locators } from '../../utils/locators'
test.describe('Verify some important images', () => {
    let landingPage: HomePage

    test.beforeEach(async ({page}) => {
        landingPage = new HomePage(page)
        landingPage.openPage()
    })

    test('The banner image should be correct', async({page}) => {
        const banner = page.locator(Locators.homePage.BannerImage)
        expect(await banner.screenshot()).toMatchSnapshot('banner.png')
        
    })
    // Possibilty to add a lot more snapshots test here.
})