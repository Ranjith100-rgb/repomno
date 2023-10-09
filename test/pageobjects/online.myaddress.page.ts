import { expect } from "chai"
import addressDetail from "../data/addressDetails.json" assert {type: 'json'}
class MyAddressPage
{
    get myAddressPageHeader() { return $(`<h1>`)};

    get addNewAddressBtn() { return $(`//span[contains(text(),'Add a')]/..`)};

    get registeredFirstName() {return $(`//li/span[@class='address_name'][1]`)};

    get registeredLastName() { return $(`//li/span[@class='address_name'][2]`)};

    get registeredCompanyName() { return $(`//li/span[@class='address_company']`)};

    get registeredAddress() { return $(`//li/span[@class='address_address1']`)};

    get registeredAddress1() { return $(`//li/span[@class='address_address2']`)};

    get registeredCity() { return $(`//span[@class='address_address2']/../following-sibling::li/span[1]`)};

    get registeredState() { return $(`//span[@class='address_address2']/../following-sibling::li/span[2]`)};

    get registeredPincode() { return $(`//span[@class='address_address2']/../following-sibling::li/span[3]`)}

    get registeredCountry() {return $(`//span[@class='address_address2']/../following-sibling::li[2]/span`)};

    get registeredMobileNumber() { return $(`//span[@class='address_phone_mobile']`)};

    get registeredHomePhoneNumber() { return $(`//span[@class='address_phone']`)};

    get navigateToProductPageBtn() { return $(`.icon-home`)};

    addNewAddressLink=async()=>{
        await this.myAddressPageHeader.waitForExist({timeout:3000})
        await this.addNewAddressBtn.click();
    }

    verifyAddedAddress=async () => {
        expect(await this.registeredCompanyName.getText()).to.equal(addressDetail.company);
        // expect(await this.registeredFirstName.getText()).to.equal(addressDetail.);
        // expect(await this.registeredLastName.getText()).to.equal(addressDetail.company);
        expect(await this.registeredAddress.getText()).to.equal(addressDetail.address);
        expect(await this.registeredAddress1.getText()).to.equal(addressDetail.address1);
        expect(await this.registeredCity.getText()).to.equal(addressDetail.city+',');
        expect(await this.registeredState.getText()).to.equal(addressDetail.state);
        let postalcode=await this.registeredPincode.getText()
        expect (+postalcode).to.equal(addressDetail.postalCode);

        expect(await this.registeredCountry.getText()).to.equal(addressDetail.country);

        let mobile=await this.registeredMobileNumber.getText()
        expect (+mobile).to.equal(addressDetail.mobileNumber);

        let phoneNumber=await this.registeredHomePhoneNumber.getText()
        expect(+phoneNumber).to.equal(addressDetail.homePhoneNumber);
    }

    goToProductPage= async ()=>
    {
        await this.navigateToProductPageBtn.waitForDisplayed({timeout:3000});
        await this.navigateToProductPageBtn.click();
    }
}

export default new MyAddressPage();