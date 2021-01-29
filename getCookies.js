
const pry = require('pryjs');
const puppeteer = require('puppeteer');


const getCookies = async () => {
  const browser = await puppeteer.launch({ headless: true  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36");
  await page.goto('https://stopandshop.com', {waitUntil: 'networkidle2'});

  const signin = await page.$('.st_footer-button button');
  await signin.click();
  await page.waitForSelector('#login-username');

  const username = await page.$('#login-username');
  const password = await page.$('#login-password');
  const button   = await page.$('#sign-in-button');

  await username.focus();
  await username.type(process.env.SNS_USERNAME);

  await page.waitForTimeout(500);
  await password.focus();
  await password.type(process.env.SNS_PASSWORD);

  await page.waitForTimeout(500);
  await button.click();
  await page.waitForSelector('#alert-button_primary-button');

  await page.goto('https://stopandshop.com', { waitUntil: 'networkidle2' });
  await page.goto('https://stopandshop.com', { waitUntil: 'networkidle2' });

  return page.cookies();
};


module.exports = getCookies;
