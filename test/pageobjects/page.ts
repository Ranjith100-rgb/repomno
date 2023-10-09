
export default class Page
{
    constructor()
    {

    }

    async getPageUrl()
    {
        return await browser.getUrl();
    }

    async getPageTitle()
    {
        return await browser.getTitle();
    }

    async navigateTo(path:string)
    {
            await browser.url(path);
            await browser.maximizeWindow();
    }

    async click(ele: WebdriverIO.Element)
    {
        await ele.waitForClickable({timeout:3000});
        if(!ele.elementId)
        {
            throw Error(ele.error?.name);
        }
        await ele.click();
    }

    async typeIn(ele: WebdriverIO.Element, text: string)
    {
        await ele.waitForDisplayed({timeout: 3000});
        if(!ele.elementId)
        {
            throw Error(ele.error?.name);
        }
        await ele.setValue(text);
    }

}