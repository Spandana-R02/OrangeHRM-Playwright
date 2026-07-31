import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test("Verify that the user can login with the valid crdential", async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("Admin","admin123");
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});
