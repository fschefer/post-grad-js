const WebDriver = require("selenium-webdriver")
const assert = require("node:assert")
describe("Store login", function () {
    it("Validate valid login", async () => {
        const browser = new WebDriver.Builder().forBrowser(WebDriver.Browser.CHROME).build()
        await browser.get("http://165.227.93.41/lojinha-web/v2/")
        await browser.findElement(WebDriver.By.id("usuario")).sendKeys("admin")
        await browser.findElement(WebDriver.By.id("senha")).sendKeys("admin")
        await browser.findElement(WebDriver.By.css(".btn")).click()
        const urlAtual = await browser.getCurrentUrl()
        const urlEsperada = "http://165.227.93.41/lojinha-web/v2/produto"
        assert.equal(urlAtual, urlEsperada)

        await browser.quit()

    })
})
