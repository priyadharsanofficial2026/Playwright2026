
import {test} from '@playwright/test'

// single DD
test('Validate the dropdown', async({page}) => {
await page.goto('https://letcode.in/dropdowns#google_vignette')
const singleDD= await page.locator('//select[@id="fruits"]')
await singleDD.selectOption({index:4})

const check=await singleDD.locator('option:checked').textContent()
console.log(check)

// MultiDD
const multiselectDD=await page.locator('//select[@id="superheros"]')
await multiselectDD.selectOption([{index:0},{value:"aq"},{label:'The Avengers'}])
const check1=await multiselectDD.locator('option:checked').allTextContents()
console.log(check1);

// print all the option

const printalloption=await page.locator('//select[@id="lang"]')
const alloption=await printalloption.locator('option').allTextContents()
console.log(alloption)


const selectvalue=await page.locator('//select[@id="country"]')
await selectvalue.selectOption({label:'India'})
const value=await selectvalue.locator('option:checked').textContent()
console.log(value)


});



