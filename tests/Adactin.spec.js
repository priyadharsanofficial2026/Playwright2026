import {test} from '@playwright/test'
import { Loginpage } from './Page/Loginpage'
import { SearchHotel } from './Page/SearchHotel'
import { BookHotel } from './Page/BookHotel'
test('pom', async ({page})=>{

const login=new Loginpage(page)
await login.visitURL()
await login.enterUserName()
await login.enterPassword()
await login.submitBtn()

const searchscreen=new SearchHotel(page)
await searchscreen.DD_location()
await searchscreen.DD_hotel()
await searchscreen.DD_hoteltype()
await searchscreen.DD_numberofroom()
await searchscreen.DD_adult()
await searchscreen.DD_childern()
await searchscreen.searchBtn()

await searchscreen.selectradiobtn()
await searchscreen.ContinueBtn()


const booknowscreen=new BookHotel(page)
await booknowscreen.FristName()
await booknowscreen.LastName()
await booknowscreen.BillingAddress()
await booknowscreen.CreditCardNo()
await booknowscreen.CreditCardType()
await booknowscreen.ExpirydateMonth()
await booknowscreen.Expirydateyear()
await booknowscreen.CvvNumber('123')
await booknowscreen.BookNow()

await booknowscreen.OrderNo()





})