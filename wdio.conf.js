exports.config = {
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  hostname: 'hub.browserstack.com',

  user: process.env.BROWSERSTACK_USERNAME || "jhonatancarvalho_jr9Pfu",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "1V1grbsvKapopfq8b7Fc",
  services: [
    [
      "browserstack",
      {
        appiumVersion: "2.15.0",
        testObservability: true,
        testObservabilityOptions: {
          projectName: "Your project name goes here",
          buildName:
            "The static build job name goes here e.g. Nightly regression",
        },
        browserstackLocal: false,
      },
    ], [
      "appium",
      {
        logLevel: "info",
      },
    ],
    [
      "browserstack",
      {
        app: "bs://a1d2391fcd0ed85273be3739b2b2019063252c9c",
      },
    ],
  ],

  maxInstances: 1,

  capabilities: [
    {
      "bstack:options": {
        deviceName: "Motorola Moto G71 5G",
        platformVersion: "11.0",
        platformName: "android",
        appiumVersion: "2.15.0",


      },
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      projectName: "BrowserStack Samples",
      buildName: "browserstack build",
      sessionName: "BStack parallel webdriverio-appium",
      debug: true,
      networkLogs: true,
      percy: false,
      appiumVersion: "2.15.0",
    },
  },

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
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
