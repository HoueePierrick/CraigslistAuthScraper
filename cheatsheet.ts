import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  // Set viewport size (for phones)
  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("https://www.daum.net");
  // Waits for the page to navigate to a new URL or to reload. It is useful when you run code that will indirectly cause the page to navigate.
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  // Types inside the selector
  await page.type("#id", "username");
  await page.type("#loginPw", "password");
  // Clicks on the selected element
  await page.click("#loginSubmit");
  // click and wait for navigation
  await Promise.all([
    page.click("#loginSubmit"),
    page.waitForNavigation({ waitUntil: "networkidle0" }),
  ]);
}
