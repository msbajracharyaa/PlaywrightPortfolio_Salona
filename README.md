This is a public repository I created showcasing my skills and knowledge in Playwright. This is a Playwright git repository that includes some E2E Tests that has been developed from scratch for a demo website 'https://practicesoftwaretesting.com/' . This is entirely for practise purpose and whoever wanting to learn can use it too. In addition to that if there's any suggestion and improvement you believe I can make here, feel free to email me here msbajracharya.salona@gmail.com
This repo is still on developing phase as I keep on adding the test cases or improve the existing ones. 
## 🚀 Features
- **Playwright with TypeScript**
- **Page Object Model (POM)**
- **Simple and easy to understand Test Architecture**
- **Base URL Configuration**
- **Authentication Handling**

## Test Details(IN PROGRESS, DETAILS ADDED EVERYTIME NEW DEVELOPMENT IS DONE ##
- Test has been categoried into different components
- All the features that are available only after login has been separated
- Similar features are bundled in same test

**Pre-requisite**
Ensure you have the following installed before setting up Playwright:

- **Node.js** (>= 16.x)
  - Download and install from [Node.js official site](https://nodejs.org/)
- **npm** or **yarn** (Comes with Node.js)

**⚙️ Setup Instructions**
-  Clone this Repository in your machine
-  Open the repo from the Visual Studio or any IDE you installed
-  Install Playwright:
   ```sh
    npm install
    npx playwright install
   ```
**Running Tests**
The test are usuaky categorized in such a way that they might or moght not need login session. Currently there's 2 test in this repo
- e2e-test > addToCart [this is test with logged in user]
- catogory [this doesn't need login]
- Other test [IN PROGRESS]

1. To run tests that needs login as first step:
   ```sh
   RUN_AUTH_SETUP=true npx playwright test --project=authenticated
   ```
2. To run tests that needs login as first step:
   ```sh
   RUN_AUTH_SETUP=false npx playwright test --project=unauthenticated
   ```

2. To run tests in headed mode (see the browser UI):
   ```sh
   RUN_AUTH_SETUP=false npx playwright test --project=unauthenticated --headed
   ```

3. To run a specific test file that needs login as first step :
   ```sh
   RUN_AUTH_SETUP=true npx playwright tests/example.spec.js --project=authenticated
   ```
4. To run a specific test file that doesn't need login as first step :
   ```sh
   RUN_AUTH_SETUP=false npx playwright tests/example.spec.js --project=unauthenticated
   ```
4. To generate an HTML report after test execution:
   ```sh
   RUN_AUTH_SETUP=false npx playwright tests --project=unauthenticated --reporter=html
   ```
   - Open the report using:
     ```sh
     npx playwright show-report
     ```
**📞 Need Help?**
If you have any issues, feel free to open an issue or pull request. 🚀
