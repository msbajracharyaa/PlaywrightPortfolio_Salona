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
        MightyCraft : 'text= MightyCraft Hardware',
        BannerImage: '//img[@alt="Banner"]'
    },
    
    loginPage:{
        UsernameField: '#email',
        PasswordField: '#password',
        LoginButton: '//input[@value="Login"]',
        PasswordVisibleButton: '',
        RegisterButton: '//a[@data-test="register-link"]',
        ForgotPasswordLink: '//a[@data-test="forgot-password-link"]',
        SignInWithGoogleButton: '//a[@aria-label="Sign in with Google"]',
        InvalidLoginCredentialsMessage: '//div[@data-test="login-error"]'
    },

    Products:{
        CombinationPliers: '//img[@alt="Combination Pliers"]',
        CombinationPliersUnitPriceLocator: '//span[@data-test="unit-price"]',
        IncreaseQuantityButton: '//button[@data-test="increase-quantity"]',
        AddToCartButton: '#btn-add-to-cart',
    },

    Cart: {
        AddedToCartToastMessage: 'Product added to shopping',
        CartButton: '//a[@data-test="nav-cart"]',
        ProductTitle: '//span[@data-test="product-title"]',
        ProductQuantity: '//input[@data-test="product-quantity"]',
        LinePrice: '//span[@data-test="line-price"]',
        CheckoutButton: '//button[@data-test="proceed-1"]',
        FirstCartStepIcon: '(//div[@class="step-indicator"])[1]',
        SecondCartStepIcon: '(//div[@class="step-indicator"])[2]',
        ProcessToCheckoutButton: '//button[@data-test="proceed-2"]',
        paymentPage: '//select[@data-test="payment-method"]'
    },
    
    billingAddressPage: {
        StreetAdress: '//input[@data-test="street"]',
        City: '//input[@data-test="city"]',
        State: '//input[@data-test="state"]',
        PostalCode: '//input[@data-test="postal_code"]',
        Country: '//input[@data-test="country"]',
        ProcessedToCheckoutButton: '//button[@data-test="proceed-3"]'
    },
    loggedInUser: {
        PageTitle: '//h1[@data-test="page-title"]'
        
    }
}