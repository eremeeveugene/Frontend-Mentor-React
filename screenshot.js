const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 375, height: 812 });
  await page.goto("http://localhost:5173");

  await page.screenshot({ path: "export.png" });
  await browser.close();
})();
