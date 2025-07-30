const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //await page.setViewport({ width: 375, height: 812 });
  await page.setViewport({ width: 1440, height: 960 });
  await page.goto("http://localhost:5173");

  await page.screenshot({ path: "actual result.png" });
  await browser.close();
})();
