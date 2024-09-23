export const config: Partial<WebdriverIO.Config> = {
  tsConfigPath: "../tsconfig.json",

  logLevel: "debug",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  framework: "mocha",
  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "test-reports",
        outputFileFormat: function (options) {
          return `results-${options.cid}-${
            (options.capabilities as WebdriverIO.Capabilities).platformName
          }.xml`;
        },
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
