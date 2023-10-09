import Page from "./page.js"
//import chai from "chai"
//import reporter from "../helper/reporter.js"

class HomePage extends Page {
    constructor() {
        super()
    }

    /**Page objects */
    get usernameInputBox() { return $(`#user-name`) }
    get passwordInputBox() { return $(`#password`) }
    get loginBtn() { return $(`#login-button`) }

    /**Page Actiions */
    async enterUsername(username: string) {
        if (!username) throw Error(`Given username: ${username} is not valid`)
        try {
            username = username.trim()
            await this.typeIn(await this.usernameInputBox, username)
        } catch (err) {
            throw err
        }
    }
    async enterPassword(password: string) {
        if (!password) throw Error(`Given password is not valid`)
        try {
            password = password.trim()
            await this.typeIn(await this.passwordInputBox, password)
        } catch (err) {
            throw err
        }
    }
    async clickLoginBtn() {
        try {
            await this.click(await this.loginBtn)
        } catch (err) {
            throw err
        }
    }
    async loginToSauseApp(username: string, password: string) {
        try {
            await this.enterUsername(username)
            await this.enterPassword(password)
            await this.clickLoginBtn()
        } catch (err) {
            throw err
        }
    }

}
export default new HomePage()