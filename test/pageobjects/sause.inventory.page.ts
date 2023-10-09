import Page from "./page.ts";
import loginData from "../data/login.json"  assert { type: 'json' };

class InventoryPage extends Page {
    constructor() {
        super()
    }

    get allPriceOfProduct() {
        return $$(`//div[@class='inventory_item_price']`);
    }

    get addToCartButton() {
        return $$(`//button[text()="Add to cart"]`);
    }

    get myCartLink() {
        return $(`//a[@class='shopping_cart_link']`);
    }


    async selectSecondHigestPriceProductAddToCart() {
        const listOfProductPrice = [];
        const allProductPrice = await this.allPriceOfProduct;
        const addToCart = await this.addToCartButton;

        for (let i = 0; i < allProductPrice.length; i++) {
            listOfProductPrice.push(await allProductPrice[i].getText());
        }

        const productPrice = listOfProductPrice.map(price => +(price.replace("$", "")))

        for (let i = 0; i < productPrice.length; i++) {
            if (productPrice[i] === loginData.expectedSecondHigestPrice) {
                await addToCart[i].click();
                await browser.pause(2000);
                
            }
        }
        await this.myCartLink.click();

    }


}


export default new InventoryPage();