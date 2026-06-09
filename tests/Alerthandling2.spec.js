
import {test} from '@playwright/test'

test('Alert hadling ', async ({page})=> {
await page.goto('https://demoqa.com/alerts')

const dialogHandler = async dialog => {
    console.log(dialog.message());
    console.log(dialog.type())

    if(dialog.type()==='prompt'){
        await dialog.accept('priyadharsan') 
    }else{
        await dialog.accept()
    }

};
 page.on('dialog', dialogHandler)

await page.locator('//button[@id="alertButton"]').click()
await page.locator('//button[@id="confirmButton"]').click()
await page.locator('//button[@id="promtButton"]').click()
page.off('dialog', dialogHandler)


/*
page.once('dialog', async (dialog)=>{
 console.log(dialog.message());
    console.log(dialog.type())
    await dialog.accept()

})

await page.locator('//button[@id="timerAlertButton"]').click()
await page.waitForTimeout(6000)

*/


const dialogPromise = page.waitForEvent('dialog')

await page.locator('//button[@id="timerAlertButton"]').click()

const dialog = await dialogPromise

console.log(dialog.message())

console.log(dialog.type())

await dialog.accept()

})


/*

test('dialog box 2', async({page})=>{
await page.goto('https://demoqa.com/alerts')

// ok
page.once('dialog', async (dialog)=>{
 console.log("OK :", dialog.message());
    await dialog.accept()
})
await page.locator('//button[@id="alertButton"]').click()

//Cancel
page.once('dialog', async (dialog)=>{
 console.log("Cancel :", dialog.message());
    await dialog.dismiss()
})
await page.locator('//button[@id="confirmButton"]').click()

// 5 sec dealy
page.once('dialog', async (dialog)=>{
 console.log("Delay alert :", dialog.message());
    await dialog.accept()
})
await page.locator('//button[@id="timerAlertButton"]').click()
await page.waitForTimeout(6000)

//prompt alert
page.once('dialog', async (dialog)=>{
    await dialog.accept('Hi Priyan')
    console.log("Delay alert :", dialog.message());
    const text=await page.locator('//span[@id="promptResult"]').textContent()
    console.log('Text :', text);  
})
await page.locator('//button[@id="promtButton"]').click()

})

*/