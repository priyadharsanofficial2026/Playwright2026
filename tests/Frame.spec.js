
import{test} from '@playwright/test'

test('Frame validarion', async({page})=>{

    // single frame
     await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleframe=await page.frameLocator('//iframe[@id="singleframe"]')
    await singleframe.locator('//input[@type="text"]').fill('priyadharsan')
    await page.waitForTimeout(3000)

    // multiframe

    await page.locator('(//a[@class="analystic"])[2]').click()
    const firstframe=  page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const secondfrmae= firstframe.frameLocator('//iframe[@src="SingleFrame.html"]')
    await page.waitForTimeout(3000)
    await secondfrmae.locator('//input[@type="text"]').fill('Hi Priyadharsan')
       
})