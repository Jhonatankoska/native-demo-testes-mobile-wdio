exports.config = {
  runner: "local",
  port: 4723,
  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "0069910737",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.wdiodemoapp",
      "appium:appActivity": "com.wdiodemoapp.MainActivity",
      "appium:noReset": true,
      "appium:fullReset": false,
    },
  ],

  logLevel: "error",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [
    [
      "appium",
      {
        logLevel: "error",
      },
    ],
  ],

  framework: "mocha",

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
