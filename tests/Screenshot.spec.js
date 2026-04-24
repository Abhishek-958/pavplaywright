import {test, expect} from '@playwright/test';

test('page screenshot', async({page}) => {
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})
}
);
test ('Full page screenshot',async({page}) =>{

});

test('Element screenshot',async({page}) => {});