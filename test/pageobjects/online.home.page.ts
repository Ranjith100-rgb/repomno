
class HomePage 
{
    get signInBtn() {return $(`*=Sign in`)}
    get contactUsBtn() { return $(`=Contact us`)}
    get logo() { return $(`//img[@class='logo img-responsive']`)}
    get signOutBtn() {return $(`*=Sign out`)}

    async navigateToLoginPage()
    {
        await this.signInBtn.click();
    }
}

export default new HomePage();