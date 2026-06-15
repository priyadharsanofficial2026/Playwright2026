import {test} from '@playwright/test';

test('google login page', async({page}) =>{
await page.goto('https://www.instagram.com/?hl=en')
await page.locator('//input[@name="email"]').type('Dharsan0105')
await page.locator('//input[@name="pass"]').type('Priyan@199')
await page.locator('//span[text()="Log in"]').click();
await page.waitForTimeout(3000)
});

 