
import {test} from '@playwright/test'

test('window handling', async({browser})=> {
const context=await browser.newContext()
const page= await context.newPage()
await page.goto('https://demo.automationtesting.in/Windows.html')

// Open New Tab Window
const [curentpage]=await Promise.all([context.waitForEvent('page'), page.click('//button[text()="    click   "]')])
await curentpage.waitForLoadState('domcontentloaded')
const title=await curentpage.title()
console.log(title);

const content=await curentpage.locator('h4').first().textContent()
console.log("content :",content)

console.log("First : ",await curentpage.locator('h4').first().textContent())
console.log('Last :',await curentpage.locator('h4').last().textContent())
console.log('Nth :',await curentpage.locator('h4').nth(2).textContent())
await curentpage.close()


//SEPEARTE WINDOW
await page.click('//a[text()="Open New Seperate Windows"]')
const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.click('//button[@onclick="newwindow()"]')
])


await newPage.waitForLoadState('domcontentloaded')
console.log(await newPage.url());
const title1=await newPage.title()
console.log(title1);

const content1=await newPage.locator('h2').first().textContent()
console.log("content :",content1)

await newPage.close()

// THIRD
await page.click('(//a[@class="analystic"])[3]')
console.log(await page.url());
const title2=await page.title()
console.log(title2)

})