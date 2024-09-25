const { remote } = require("webdriverio");

const capabilities = {
  platformName: "iOS",
  "appium:automationName": "XCuiTest",
  "appium:browserName": "Safari",
  "appium:deviceName": process.env.ios_model || "iPhone 15",
  "appium:platformVersion": process.env.ios_version || "18.0",
  // "appium:wdaLaunchTimeout": 300_000,
  // "appium:commandTimeouts": 300_000,
  // "appium:wdaStartupRetries": 5,
  // "appium:wdaStartupRetryInterval": 30_000,
  // "appium:usePreinstalledWDA": true,

  "appium:useXctestrunFile": true,
  "appium:bootstrapPath": "wda_build/Build/Products",
  // "appium:updatedWDABundleId": "com.appium.WebDriverAgentRunner",
  // "appium:wdaConnectionTimeout": 60_000 * 5,
  // "appium:webviewConnectTimeout": 60_000 * 3,
  // "appium:showXcodeLog": true,
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
