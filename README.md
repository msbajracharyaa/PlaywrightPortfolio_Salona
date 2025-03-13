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

1. To run all tests:
   ```sh
   npx playwright test
   ```

2. To run tests in headed mode (see the browser UI):
   ```sh
   npx playwright test --headed
   ```

3. To run a specific test file:
   ```sh
   npx playwright test tests/example.spec.js
   ```

4. To generate an HTML report after test execution:
   ```sh
   npx playwright test --reporter=html
   ```
   - Open the report using:
     ```sh
     npx playwright show-report
     ```
**📞 Need Help?**
If you have any issues, feel free to open an issue or pull request. 🚀
