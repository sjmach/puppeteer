const puppeteer = require('puppeteer');

let config = {
    launchOptions: {
        headless: false
    }
}

puppeteer.launch(config.launchOptions).then(async browser => {
  const page = await browser.newPage();
  //Simple test
  await page.goto('https://www.google.com');
  await browser.close();    
});