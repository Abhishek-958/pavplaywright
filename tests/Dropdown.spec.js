const{test , expect} = require('@playwright/test')

test("Handle dropdown", async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/');
// Multiple ways to select option from the dropdown
// await page.locator("#country").selectOption({label:'India'}); //label/ visible text  
// await page.locator("#country").selectOption('India'); //visible text
//await page.locator("#country").selectOption({value:'uk'});//by using value
//await page.locator("#country").selectOption({index:1});//by using index 
//await page.selectOption("#country",'India');// by text, directly calling function from page fixture

//Assertions
//1) check number of options in dropdown - Approach1
//const options = await page.locator('#country option');
//await expect(options).toHaveCount(10);


//2) check no of options in dropdown-Approach2
//const options=await page.$$('#country option')

//console.log("Number of options:",options.length)
//await expect(options.length).toBe(10);

//3) check presence of value in the dropdown - Approach1

const content = await page.locator('#country').textContent();
await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})



await page.waitForTimeout(5000);



}
)