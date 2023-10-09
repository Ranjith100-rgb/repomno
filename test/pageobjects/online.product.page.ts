class ProductPage {

    get category() {return $(`//div[@id='block_top_menu']/ul/li/a[text()='Women']`)};

    get subCategory() { return $$(`//div[@id='categories_block_left']/div//li/span/following-sibling::a`)};

    get productHeader() {return $$(`.right-block .product-name`)}

    get addToCartBtn() {return $(`//span[text()='Add to cart']`)}

    
}

export default new ProductPage();