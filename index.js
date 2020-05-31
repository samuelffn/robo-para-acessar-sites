const puppeteer = require('puppeteer');

console.log('Bem vindo ao conversor');

(async () => {
  try{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
  }
  catch(e){
      console.log(e);
  }
})();