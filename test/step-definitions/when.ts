import { When } from "@wdio/cucumber-framework";
import sauseInventoryPage from "../pageobjects/sause.inventory.page.ts";

import globalContext from "./globalContext.ts";
import authpage from "../pageobjects/online.auth.page.ts"


When(/^I sort the products by price in descending order$/, async function(){

    /** 
     * Fetch all the price in the product list.
     */
    await sauseInventoryPage.selectSecondHigestPriceProductAddToCart();
})

When(/^Login using newly created credentail$/, async function(){

    
    await authpage.signIn(globalContext.getMyVariable())
  
})

