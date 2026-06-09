
export class BookHotel{

    constructor(page){
          this.page=page
            this.firstname=page.locator('//input[@id="first_name"]')
            this.lastname=page.locator('//input[@id="last_name"]')
            this.billingaddress=page.locator('//textarea[@id="address"]')
            this.creditcardno=page.locator('//input[@id="cc_num"]')
            this.credittype=page.locator('//select[@id="cc_type"]')
            this.expirymonth=page.locator('//select[@id="cc_exp_month"]')
            this.expirydate=page.locator('//select[@id="cc_exp_year"]')
            this.cvv=page.locator('//input[@id="cc_cvv"]')
            this.booknow=page.locator('//input[@id="book_now"]')


            this.orderno=page.locator('//input[@id="order_no"]')

    }
  

    async FristName(){
        await this.firstname.fill('priyadharsan')
    }
    async LastName(){
        await this.lastname.fill('R')
    }
    async BillingAddress(){
        await this.billingaddress.fill("Chennai")
    }
    async CreditCardNo(){
        await this.creditcardno.fill("9876543212345678")
    }
    async CreditCardType(){
        await this.credittype.selectOption({label:"VISA"})
    }
    async ExpirydateMonth(){
        await this.expirymonth.selectOption({value :"3"})
    }
    async Expirydateyear(){
        await this.expirydate.selectOption({index : 3})
    }
    async CvvNumber(cvvnumber){
        await this.cvv.fill(cvvnumber)
    }
    async BookNow(){
        await this.booknow.click()
    }




    async OrderNo(){
        const ordernumber =await this.orderno.inputValue()
        console.log(ordernumber);
        
    }



}