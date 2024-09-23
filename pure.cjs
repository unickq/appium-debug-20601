const { remote } = require("webdriverio");

const wdOpts = {
  hostname: "localhost",
  port: 4723,
  logLevel: "info",
  capabilities: {
    platformName: "iOS",
    "appium:automationName": "XCUITest",
    "appium:browserName": "Safari",
    "appium:deviceName": process.env.ios_model || "iPhone 15",
    "appium:platformVersion": process.env.ios_version || "17.2",
  },
};

async function runTest() {
  const driver = await remote(wdOpts);
  await driver.navigateTo("https://www.google.com");
  console.log(await driver.getTitle());
}

runTest().catch(console.error);
