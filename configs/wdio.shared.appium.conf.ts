import { config as baseConfig } from "configs/wdio.shared.conf.ts";

export const config: Partial<WebdriverIO.Config> = {
  ...baseConfig,
  runner: "local",
  port: 4723,
  maxInstances: 1,
  services: [
    [
      "appium",
      {
        args: {
          // address: "127.0.0.1",
          // allowCors: true,
          relaxedSecurity: true,
          logTimestamp: true,
          log: "./logs/appium-ios.log",
        },
      },
    ],
  ],
};
