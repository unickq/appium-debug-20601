import { config as baseConfig } from "configs/wdio.shared.appium.conf.ts";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  specs: ["../tests/browser/**/*.ts"],
  connectionRetryTimeout: 120_000,
  connectionRetryCount: 3,
  maxInstances: 1,
  capabilities: [
    {
      browserName: "safari",
      platformName: "iOS",
      "appium:deviceName": process.env.ios_model || "iPhone 15",
      "appium:platformVersion": process.env.ios_version || "17.2",
      "appium:orientation": "PORTRAIT",
      "appium:automationName": "XCUITest",
      "appium:newCommandTimeout": 240,
      // "appium:prebuildWDA": true,
      // "appium:showXcodeLog": false,
      // "appium:showIOSLog": false,
      // "appium:launchWithIDB": true,
      // "appium:wdaLaunchTimeout": 60_000 * 5,
      // "appium:wdaStartupRetries": 5,
      // "appium:wdaStartupRetryInterval": 30_000,
      // "appium:wdaConnectionTimeout": 60_000 * 3,
      // "appium:simulatorStartupTimeout": 60_000 * 3,
    },
  ],
};
