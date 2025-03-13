export const Locators = {

    homePage: {
        SignInButton : '//a[@data-test="nav-sign-in"]' ,
        CategoryMenu : '//a[@data-test="nav-categories"]',
        CategoryHandTools :'//a[@data-test="nav-hand-tools"]',
        CategoryPowerTools : '//a[@data-test="nav-power-tools"]',
        CategoryOthers : '//a[@data-test="nav-other"]',
        CategorySpecialTools : '//a[@data-test="nav-special-tools"]',
        ContactMenu : '//a[@data-test="nav-contact"]',
        LanguageMenu : '//button[@data-test="language-select"]',
        SortingDrodown : '//select[@data-test="sort"]',
        PriceRangeMover : '//span[@role="slider"][2]',
        SearchTextBox : '#search-query',
        FilterLists : '',
        ByBrandFilterCategory : 'text=By brand:',
        ForgeFlexBrand: 'text= ForgeFlex Tools',
        MightyCraft : 'text= MightyCraft Hardware'
    },
    
    loginPage:{
        UsernameField: '#email',
        PasswordField: '#password',
        LoginButton: '//input[@value="Login"]',
        PasswordVisibleButton: '',
        RegisterButton: '//a[@data-test="register-link"]',
        ForgotPasswordLink: '//a[@data-test="forgot-password-link"]',
        SignInWithGoogleButton: '//a[@aria-label="Sign in with Google"]'
    },

    Products:{
        CombinationPliers: '[data-test="product-01JP57283CH9587AAT8FPW52HG"]',
        CombinationPliersUnitPriceLocator: '[data-test="unit-price"]',
        IncreaseQuantityButton: '[data-test="increase-quantity"]',
        AddToCartButton: '[data-test="add-to-cart"]',
    },

    Cart: {
        AddedToCartToastMessage: 'Product added to shopping',
        CartButton: '[data-test="nav-cart"]',
        ProductTitle: '[data-test="product-title"]',
        ProductQuantity: '[data-test="product-quantity"]',
        LinePrice: '[data-test="line-price"]'
    },
     
    loggedInUser: {
        PageTitle: '//h1[@data-test="page-title"]'
        
    }
}