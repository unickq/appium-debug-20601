const { remote } = require("webdriverio");

const capabilities = {
  platformName: "iOS",
  "appium:automationName": "XCuiTest",
  "appium:browserName": "Safari",
  "appium:deviceName": process.env.ios_model || "iPhone 15",
  "appium:platformVersion": process.env.ios_version || "17.5",
  "appium:wdaLaunchTimeout": 300_000,
  "appium:commandTimeouts": 300_000,
  // "appium:wdaStartupRetries": 5,
  // "appium:wdaStartupRetryInterval": 30_000,
  // "appium:wdaConnectionTimeout": 60_000 * 5,
  "appium:webviewConnectTimeout": 20_000,
  "appium:webviewConnectRetries": 5,
};

async function runTest() {
  const driver = await remote({
    hostname: "localhost",
    port: 4723,
    logLevel: "debug",
    capabilities,
    connectionRetryTimeout: 300_000,
    connectionRetryCount: 3,
  });
  await driver.navigateTo("https://www.google.com");
  console.log(await driver.getTitle());
}

runTest();
