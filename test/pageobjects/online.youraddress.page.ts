import addressDetail from "../data/addressDetails.json" assert { type: 'json' };

class YourAddressPage
{
    get yourAddressHeader() { return $(`<h1>`) }

    get companyTextfield() { return $(`#company`)}

    get addressTextfield() { return $(`#address1`)}

    get address1Textfield() { return $(`#address2`)}

    get cityTextfield() { return $('#city')}

    get stateDropdown() { return $(`#id_state`)}

    get postcodeTextfield() { return $(`#postcode`)}

    get homePhoneNumberTextfield() { return $(`#phone`)}

    get mobilePhoneNumberTextfield() { return $(`#phone_mobile`)}

    get additonalInfoTextfield() { return $(`#other`)}

    get additionalAddressTextField() { return $(`#alias`)}

    get saveAddressBtn() { return $(`#submitAddress`)}

    enterAddress= async ()=>{
        await this.yourAddressHeader.waitForExist();
        await this.companyTextfield.setValue(addressDetail.company);
        await this.addressTextfield.setValue(addressDetail.address);
        await this.address1Textfield.setValue(addressDetail.address1);
        await this.cityTextfield.setValue(addressDetail.city);
        await this.stateDropdown.selectByVisibleText(addressDetail.state);
        await this.postcodeTextfield.setValue(addressDetail.postalCode);
        await this.homePhoneNumberTextfield.setValue(addressDetail.homePhoneNumber);
        await this.mobilePhoneNumberTextfield.setValue(addressDetail.mobileNumber);
        await this.additonalInfoTextfield.setValue(addressDetail.additonalInfo);
        await this.additionalAddressTextField.setValue(addressDetail.addressLankMark);
        await this.saveAddressBtn.click();
    }
}

export default new YourAddressPage();