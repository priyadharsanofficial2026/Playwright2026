

export class Loginpage {
    constructor(page) {
        this.page =page
        this.username=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.button=page.locator('//input[@id="login"]')
    }

    async visitURL(){
        await this.page.goto('https://adactinhotelapp.com/')
    }

    async enterUserName(){
        await this.username.fill('priyadharsan')
    }
    async enterPassword(){
        await this.password.fill('123456')
    }
    async submitBtn() {
        await this.button.click()
    }


}