import {test} from "@playwright/test"
test('Windows Handling Assignment', async ({page,context}) => {
await page.goto('https://www.leafground.com/window.xhtml')
await page.waitForLoadState('domcontentloaded')
// My listener is ready to receive the Page and we are catching it in a variable Upcoming Page///
let UpcomingPage=context.waitForEvent('page')
await page.locator('//button[@id="j_idt88:new"]').click()
await page.waitForLoadState('domcontentloaded')
//to print [page titles of both child and parent]
let childpage=await UpcomingPage
let ChildPagetitle= childpage.title()
console.log("The Child Page Title is" + ChildPagetitle)
let pageTitle=await page.title()
console.log("the Main Page title is " +pageTitle)
//perform action on Child Page//
await childpage.locator('//input[@id="email"]').fill('rafastane@gmail.com')
await childpage.getByRole('textbox',{name:'Message'}).fill('Playwright window handling')
await page.waitForTimeout(2000)
})

