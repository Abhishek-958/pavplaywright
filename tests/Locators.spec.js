const {test, expect} =require("@playwright/test");
// import {test,expect} from "@playwright/test";

test('Locators',async ({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill("pavanol");
    await page.locator('id=loginpassword').fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
    const logoutlink = await page.locator("#logout2");
    await expect(logoutlink).toBeVisible();
    await page.close();
}

)
