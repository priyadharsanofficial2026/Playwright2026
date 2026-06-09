
import {test} from '@playwright/test'


test('window handling', async ({browser})=> {

const context=await browser.newContext()
const page= await context.newPage()

await page.goto('https://www.amazon.in/')
await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
await page.keyboard.press('Enter')

const [newPage]= await Promise.all([context.waitForEvent('page'), page.click('(//h2/span[contains(text(),"iPhone 17 Pro 256 GB")])[1]')])
//await newPage.waitForLoadState()
await newPage.waitForLoadState('domcontentloaded');
const title=await newPage.title()
console.log(title);

//await newPage.pause()

// back to previous page
const parent =await newPage.opener()
console.log('parent window :',await parent.title());


 await page.bringToFront();
 console.log("Old page brought to front");
 await page.locator('#twotabsearchtextbox').fill('Samsung');


})