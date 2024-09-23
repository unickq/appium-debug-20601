import { browser } from "@wdio/globals";

describe("Bolt", () => {
  it("Bolt", async () => {
    await browser.navigateTo("https://google.com");
    await browser.pause(5000);
  });
});
