import authData from "../data/authDetails.json" assert {type: 'json'};

class AuthPage {
    //Page objects
    get createNewEmailTextfield() { return $(`#email_create`) };

    get createNewEmailBtn() { return $(`#SubmitCreate`) };

    get personalInfoHeader() { return $(`<h3>`)};

    get maleRadioButton() { return $(`#id_gender1`) };

    get femaleRadioButton() { return $(`id_gender2`) };

    get firstNameTextfield() { return $(`#customer_firstname`) };

    get lastNameTextfield() { return $(`#customer_lastname`) };

    get passwordTextfield() { return $(`#passwd`) };

    get emailTextfield() { return $(`#email`) };

    get daysDropdown() { return $(`#days`) };

    get monthsDropdown() { return $(`#months`) };

    get yearDropdown() { return $(`#years`) };

    get checkboxNewsletter() { return $(`#newsletter`) };

    get registerButton() { return $(`#submitAccount`) };

    get loginEmailaddressTextfield() { return $(`#email`)}

    get loginPasswordTextfield() {return $(`#passwd`)}

    get loginSumitBtn() {return $(`#SubmitLogin`)}

    //Page actions

    createAccount = async (email: string) => {
        await this.createNewEmailTextfield.waitForExist({ timeout: 5000 });
        await this.createNewEmailTextfield.setValue(email);
        await this.createNewEmailBtn.click();
        await this.personalInfoHeader.waitForExist({timeout:5000});
        await this.maleRadioButton.click();
        await this.firstNameTextfield.setValue(authData.details.firstName);
        await this.lastNameTextfield.setValue(authData.details.lastName);
        await this.passwordTextfield.setValue(authData.details.password);
        await this.daysDropdown.selectByAttribute("value","14");
        await this.monthsDropdown.selectByAttribute("value","10");
        await this.yearDropdown.selectByAttribute("value","1996");
        await this.checkboxNewsletter.click();
        await this.registerButton.click();
    }

    //Sign in functionality

    signIn=async (email:any) =>
    {
        await this.loginEmailaddressTextfield.setValue(email);
        await this.loginPasswordTextfield.setValue(authData.details.password);
        await this.loginSumitBtn.click();
    }

   
}

export default new AuthPage();