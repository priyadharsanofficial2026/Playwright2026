
import {test} from '@playwright/test'
test('Alert handling', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Alerts.html')

// simple alert
await page.once('dialog', async (dialog) =>{
    console.log('Simple Alert :', dialog.message())
    console.log('Type : ', dialog.type())
await dialog.accept()
})
await page.locator('//div[@id="OKTab"]//button').click()


// confirmation ALert
await page.locator('(//a[@class="analystic"])[2]').click()
await page.once('dialog', async (dialog) =>{
    console.log('confirmation alert : ', dialog.message())
    console.log('Type : ', dialog.type())
    await dialog.accept()
})

await page.locator('//button[text()="click the button to display a confirm box "]').click()

// promt alert
await page.locator('(//a[@class="analystic"])[3]').click()

await page.once('dialog', async (dialog)=>{
console.log('Prmopt alert :', dialog.message())
console.log('defaltvalue :', dialog.defaultValue())
console.log('Type : ', dialog.type())
dialog.accept('HI PRIYADHARSAN')
})
await page.locator('//button[text()="click the button to demonstrate the prompt box "]').click()
const vlaue=await page.locator('//p[@id="demo1"]').textContent()
console.log('promt alert :', vlaue)

})