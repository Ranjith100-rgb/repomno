class CommonPage
{

    async openHomePage()
    {
        await browser.maximizeWindow();
        await browser.url("http://www.automationpractice.pl/index.php");
    }
}

export default new CommonPage();