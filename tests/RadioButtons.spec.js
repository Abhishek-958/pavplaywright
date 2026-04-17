const {test,expect}=require('@playwright/test')

test('handle inputbox',async({page}) =>{
   await page.goto('https://testautomationpractice.blogspot.com/');
   //Radio button
   await page.locator("#female").check();
   //await page.check("#female");
   await expect(await page.locator("#female")).toBeChecked();
   await expect(await page.locator("#female").isChecked()).toBeTruthy();
   await expect(await page.locator("#male").isChecked()).toBeFalsy();
   
   // await page.locator()
   await page.waitForTimeout(5000);//pausing code 

}
)