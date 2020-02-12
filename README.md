# E2E Connectivity UI

This project is for e2e Connectivity UI tests.

## Getting started

The tests are written in behavior-driver development (BDD) style using Cucumber.

```gherkin
Scenario: Test Scenario for insert, click and validation
  Given the landing page is shown
   When I insert "test" in the textField
    And I press the search button
   Then I should see the next page
```

This is an example of a test case written in Cucumber, it has four different lines, one for each behavior that we want to test.

Then the connection between the Cucumber scenarios and the page objects is made using the step files, where each line can be mapped to functions. Both the step files and the page objects are written in Typescript.

```typescript
// makes the connection between the cucumber and the typescript
Given(
    "the landing page is shown",
    (): void => {
        // calls the function for this step
        Page.open();
    },
);
```

Finally we write the functions on page objects that call the Webdriver.io browser.

```typescript
    public open(): void {
        // loads the browser with the desired url
        browser.url(url);
    }
```

### Folder Structure

    .
    ├── src
    │   ├── features - Where feature files are stored
    │   │   └── file_name.feature - File written in Cucumber for each feature
    │   ├── pages - Where page objects are stored
    │   │   └── file_name.ts - Page objects written in TypeScript
    │   └── steps - Where the steps are stored
    │       └── file_name.steps.ts - Steps written in Typescript
    ├── .gitignore - Configuration for files or folders to remain local
    ├── .gitlab-ci.yml - Configuration for the gitlab ci runner
    ├── .prettierrc - Used with Prettier extension on VS Code so everyone uses the same code format
    ├── package.json - Configuration for scripts and dependencies
    ├── tsconfig.json - Configuration for the Typescript
    ├── tslint.json - Set of rules to be followed/enforced
    ├── wdio.browserstack.config.js - Browserstack configuration for the Webdriver.io
    ├── wdio.config.js - Base configuration for the Webdriver.io
    └── wdio.variables.js - Variables like browser capabilities and devices to obe used when testing

### Setup

#### Dependencies

-   [Node.js](http://nodejs.org/) - At the time this was written, we are using node v10.15.0.
-   Java

After that we only need to install the dev dependencies.

`npm install`

## Running the test cases

The easier way to run the tests is be pressing F5 when inside of a feature files, this is possible with the configurations present in the .vscode/launch.json together with VS Code.

Another way to run the test is by using the command line.

`npm run test`

Where "test" is the name of the script we want to run, this can be configured on the package.json file.

```json
"scripts": {
        "build": "tsc",
        "test": "wdio",
        "test:browserstack": "wdio wdio.browserstack.conf.js"
    },
```

This script runs the tests with the wdio.cong.js configuration file.

The range of files to be tested can be configured in the wdio.config.js as such:

```json
specs: ["./src/features/**/*.feature"],
```

This runs every feature file found inside of the src/features folder.

### Devices

It's possible to run this tests both on desktop and remotely on browserstack.
Both services are installed and configured, the only thing that needs to change is the script called.

`npm run test:browserstack`

When using the browserstack service we need to configure the username and access key, use the wdio.variables.js for this purpose to hard-code them or configure the gitlab project with those variables.

```javascript
        username: process.env.BROWSERSTACK_USERNAME,
        accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
```

### Browser capabilities

There are several configurations to specify the browser we want to use using the wdio.variables.js file.
A simple way should be:

```javascript
capabilities: [
    // Browser name
    browserName: 'chrome',
]
```

Multiple browsers can be used at the same time.

```javascript
capabilities: [
    {
        // Browser name
        browserName: "chrome",
    },
    {
        // Browser name
        browserName: "firefox",
    },
];
```

When using the browserstack we can use different OS, device, browser.

```javascript
capabilities: [
    // Device used
    device: 'iPad 6th',
    //
    // Device OS
    os_version: '11.3',
    //
    // Use a real or emulator device
    realMobile: true,
    //
    // Browser Name
    browserName: 'safari'
]
```

## Troubleshooting/Tips

Some common issues and tips.

### To avoid npm error exit status 1, run the entire command instead of the script

### Run only a test suite

Instead of running all tests we can run only a suite.

`wdio --suite login`

Suites can be configured on the wdio.config.js file.

```javascript
suites: {
    login: ["./features/login/login.feature"];
}
```

### Build error node-gyp exited with code: 1

We have to make sure we are using a supported platform and node version.
Instead of having node latest version, the latest LTS version was locked.

## Built with

-   [Cucumber](https://cucumber.io/) - Open source tool to write business-readable tests.
-   [Typescript](https://www.typescriptlang.org/) - Open source programming language, syntactical superset of Javascript.
-   [Webdriver.io](https://webdriver.io/) - Test automation framework.
-   [Browserstack](https://www.browserstack.com/) - Cloud web and mobile testing platform.

## Documentation

[Webdriver.io API](https://webdriver.io/docs/api.html)
