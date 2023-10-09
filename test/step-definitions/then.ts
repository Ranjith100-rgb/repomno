import { Then } from "@wdio/cucumber-framework";
import cartPage from "../pageobjects/sause.cart.page.ts";
import homepage from "../pageobjects/online.home.page.ts";
import authpage from "../pageobjects/online.auth.page.ts";
import globalContext from '../step-definitions/globalContext.ts';
import myaccountpage from "../pageobjects/online.myaccount.page.ts"
import myaddresspage from "../pageobjects/online.myaddress.page.ts"
import youraddresspage from "../pageobjects/online.youraddress.page.ts"


Then(/^I add the second-highest priced product to the cart$/, async function () {
    
    await cartPage.addedProductPrice();
})

Then(/^I navigate to signup page$/, async function(){

    await homepage.navigateToLoginPage();
    
})

Then(/^Create an account with random username$/, async function(){

    const randomStr=Math.random().toString(36).substring(2,5);
    let emailID=`myemail_${randomStr}@gmail.com`;
    globalContext.setMyVariable(emailID);
    await authpage.createAccount(emailID); 
})

Then(/^I am on my account page select My Address option$/, async()=>{
    await myaccountpage.goToMyAddressPage();
})

Then(/^I am on My Address page select Add a new address option$/, async ()=>{
    await myaddresspage.addNewAddressLink();
})

Then(/^On Your Adress Page, add address$/, async()=>{
    await youraddresspage.enterAddress();
    await browser.pause(3000);
})

Then(/^Verify the added address page$/,async () => {
    
    await myaddresspage.verifyAddedAddress();
    console.log(`Test case has been executed`);

})

Then(/^I add below products to Cart$/,async (table) => {
    await myaccountpage.goToProductPage();
    await browser.pause(2000);
})


