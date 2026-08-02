import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test("TC_LOGIN_001_Verify valid login", async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("Admin","admin123");
    await expect(page).toHaveURL(/dashboard/);
});

test('TC_LOGIN_002_Verify the login with invalid password', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("Admin","wrong123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_003_Verify the login with invalid username', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("test","admin123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_004_Verify login with invalid username & invalid password', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("wrong","wrong123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_005_Verify login with empty username', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("","admin123");
    await loginPage.verifyUsernameRequiredValidation();
});

test('TC_LOGIN_006_Verify login with empty password', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("Admin","");
    await loginPage.verifyPasswordRequiredValidation();
});

test('TC_LOGIN_007_Verify login with empty username & password', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login("","");
    await loginPage.verifyUsernameRequiredValidation();
    await loginPage.verifyPasswordRequiredValidation();
})