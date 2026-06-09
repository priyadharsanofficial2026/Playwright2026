
import {test, expect} from '@playwright/test'

/*
test('Webtable', async ({page})=>{
await page.goto('https://qavbox.github.io/demo/webtable/')

const tableheader=await page.locator('//table[@id="table02"]//thead//tr//th').allTextContents()
console.log(tableheader);

await expect(tableheader).toEqual(['Name\n\n      ',
  'Position\n\n      ',
  'Office\n\n      ',
  'Age\n\n      ',
  'Start date\n\n      ',
  'Salary\n\n      '])


await expect(tableheader).toContain('Position\n\n      ')

// row Data
const rowdata= await page.locator('//table[@id="table02"]//tbody//tr[1]//td[3]').allTextContents()
console.log(rowdata);
await expect(rowdata).toContain('Edinburgh')

// column 
const columndata=await page.locator('//table[@id="table02"]//tbody//tr//td[3]').allTextContents()
console.log(columndata);

await expect(columndata).toContain('Tokyo')

// howmany times repeated samename
const tokyoCount = columndata.filter(name => name.trim() === 'Tokyo').length;
console.log(tokyoCount);

})

*/

/*
test('Webtable1', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

const rowdata1=await page.locator('//table[@id="taskTable"]//tbody/tr/td[1]').allTextContents()
console.log(rowdata1);

await expect(rowdata1).toContain('Chrome')


const columndata2=await page.locator('//table[@id="taskTable"]//tbody//tr[1]//td')
console.log('Count : ',await columndata2.count())

const particulardata=await page.locator('//table[@id="taskTable"]//tbody//tr//td[3]').allTextContents()
console.log('particulardata :', particulardata);

const title=await page.locator('//table[@id="taskTable"]//thead//tr//th').allTextContents()
console.log('Title :', title);

})
*/

test('Webtable1', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('//label[text()="Male"]').click()  // radio btn
await page.click('//input[@id="sunday"]')             // checkbox
await page.locator('(//table[@id="productTable"]//input)[1]').click() // checkbox in webtable
await page.waitForTimeout(4000)

})