import {test} from "@playwright/test"
import {expect} from "@playwright/test"

test('Frames & Alterts Assignment', async ({page}) => {
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
await page.waitForLoadState('domcontentloaded')
page.on('dialog', async (Tryalert) =>{
let alertType=Tryalert.type()
console.log(alertType)
let alertMessage=Tryalert.message()
console.log(alertMessage)
if(alertType==='confirm')
{
await Tryalert.accept() 
}
else
{
await Tryalert.dismiss()
}
})
let frame1= page.frameLocator('//iframe[@id="iframeResult"]')
await page.waitForTimeout(2000)
await frame1.locator('//button[text()="Try it"]').click()

let beforeclick=await frame1.locator('//button[text()="Try it"]').click()
await page.waitForTimeout(2000)
console.log(await frame1.locator('//p[@id="demo"]').innerText())
let afterclick=await frame1.locator('//p[@id="demo"]').innerText()
expect(afterclick).toBe('You pressed OK!')
expect(beforeclick).toBe('Try it')

})

