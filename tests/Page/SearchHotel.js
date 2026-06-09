
export class SearchHotel {
    constructor(page) {
    this.page=page    
    this.location=page.locator('//select[@id="location"]')
    this.hotel=page.locator('//select[@id="hotels"]')
    this.hoteltype=page.locator('//select[@id="room_type"]')
    this.numberofroom=page.locator('//select[@id="room_nos"]')
    this.adult=page.locator('//select[@id="adult_room"]')
    this.childern=page.locator('//select[@id="child_room"]')
    this.searchclk=page.locator('//input[@id="Submit"]')

    this.selecthotel=page.locator('//input[@id="radiobutton_0"]')
    this.continue=page.locator('//input[@id="continue"]')

    }

    async  DD_location(){
        await this.location.selectOption({label:'Sydney'})
    }

    async DD_hotel(){
        await this.hotel.selectOption({index:1})
    }

    async DD_hoteltype(){
        await this.hoteltype.selectOption({value: "Deluxe"})
    }
    async DD_numberofroom(){
        await this.numberofroom.selectOption({value:"2"})
    }
    async DD_adult(){
        await this.adult.selectOption({label:"2 - Two"})
    }
    async DD_childern(){    
        await this.childern.selectOption({index:2})
    }
    async searchBtn(){
        await this.searchclk.click()
    }


    async selectradiobtn(){
        await this.selecthotel.click()
    }
    async ContinueBtn(){
        await this.continue.click()
    }


}