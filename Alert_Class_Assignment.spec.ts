import {test} from "@playwright/test"

test('Alert Handling-Home Assignment', async ({page,}) => {

page.on('dialog', async (prompt_alert) => {
// await prompt_alert.accept()   
let promptType=prompt_alert.type()
console.log(promptType)

let promptmessage=prompt_alert.message()
console.log(promptmessage)

if(promptType==="prompt")
{
await prompt_alert.accept("Playwright")
}
else
{
await prompt_alert.dismiss()
}
})
await page.goto('https://www.leafground.com/alert.xhtml')
await page.waitForLoadState()
await page.locator('//span[text()="Show"]').nth(4).click()
await page.waitForTimeout(3000)
})


