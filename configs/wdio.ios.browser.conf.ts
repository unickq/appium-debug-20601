import { config as baseConfig } from "configs/wdio.shared.appium.conf.ts";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  specs: ["../tests/browser/**/*.ts"],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "safari",
      platformName: "iOS",
      "appium:deviceName": process.env.ios_model || "iPhone 15",
      "appium:platformVersion": process.env.ios_version || "17.5",
      "appium:orientation": "PORTRAIT",
      "appium:automationName": "XCUITest",
      "appium:useXctestrunFile": true,
      "appium:bootstrapPath": "./wda_build/Build/Products",
    },
  ],
};
