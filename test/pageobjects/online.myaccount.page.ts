class MyAccountPage{

    get myAccountHeader() { return $(`<h1>`)}

    get addMyFirstAddressBtn() { return $(`//span[text()='Add my first address']`)}

    get orderHistoryDetailBtn() {return $(`//span[text()='Order history and details']`)}

    get myCreditSlipBtn() { return $(`//span[text()='My credit slips']`)}

    get myAddressDetailBtn() { return $(`//span[text()='My addresses']`)}

    get myPersonalInfoBtn() { return $(`//span[text()='My personal information']`)}

    get navigateToProductPageBtn() { return $(`.icon-home`)};

    goToMyAddressPage= async ()=>
    {
        await this.myAccountHeader.waitForExist( {timeout:3000});
        await this.myAddressDetailBtn.click();
    }

    goToProductPage= async ()=>
    {
        await this.navigateToProductPageBtn.waitForDisplayed({timeout:3000});
        await this.navigateToProductPageBtn.click();
    }

}

export default new MyAccountPage();