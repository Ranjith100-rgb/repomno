import { Given } from "@cucumber/cucumber";
import sauseHomePage from "../pageobjects/sause.home.page.ts";
import loginData from "../data/login.json" assert { type: 'json' };
//-----------------------------------------------------------------

import commonPage from "../pageobjects/online.common.page.ts"
import homepage from "../pageobjects/online.home.page.ts"
import myaddresspage from "../pageobjects/online.myaddress.page.ts"


import { expect } from 'chai';

Given(/^I am on the product listing page$/, async function () {
    /**
     * 1) Lauch the browser.
     * 2) Login to application.
     */
    await sauseHomePage.navigateTo(loginData.URL);
    await sauseHomePage.loginToSauseApp(loginData.loginUsername,loginData.loginPassword);
})

Given(/^I am on the home page$/,async () => {
    
    await commonPage.openHomePage();
    expect(await homepage.logo.isDisplayed()).to.be.true;
    expect(await homepage.signInBtn.isDisplayed()).to.be.true;
    expect(await homepage.contactUsBtn.isDisplayed()).to.be.true;
})

Given(/^I am on the Sign in page$/,async () => {
    await homepage.signOutBtn.waitForExist();
    if(await homepage.signOutBtn.isDisplayed())
    {
        await homepage.signOutBtn.click();
    }
})


//   Given(/^I add below products to Cart$/,async () => {
//         await myaddresspage.goToProductPage();
//         await browser.pause(2000);
//     })





