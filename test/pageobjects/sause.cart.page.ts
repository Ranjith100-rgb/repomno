
import Page from "./page.ts";
import chai from "chai"  ;
import loginData from "../data/login.json" assert { type: 'json' }


class CartPage extends Page
{
    constructor()
    {
        super();
    }

    get addedProductPriceInCart()
    {
        return $$(`//div[@class='inventory_item_price']`);
    }

    async addedProductPrice()
    {
        const cartProductPrice=[];
        const addProductPrice=await this.addedProductPriceInCart;
        for(let i=0;i<addProductPrice.length;i++)
        {
            cartProductPrice.push(await addProductPrice[i].getText())
        }
       const  cartPrice=cartProductPrice.map(price=> +(price.replace("$",""))).pop();
        chai.expect(cartPrice).equal(loginData.expectedSecondHigestPrice);
        console.log(`Test case has been executed successfully`);
    }


}

export default new CartPage();