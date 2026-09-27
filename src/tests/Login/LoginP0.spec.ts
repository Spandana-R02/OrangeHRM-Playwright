import {test, expect} from '../../fixtures/baseTest';

test.beforeEach(async({page})=>{
    await page.goto('/');
});

test("TC_LOGIN_001_Verify valid login", async ({loginPage, page})=>{
    await loginPage.login("Admin","admin123");
    await expect(page).toHaveURL(/dashboard/);
});

test('TC_LOGIN_002_Verify the login with invalid password', async({loginPage, page})=>{
    await loginPage.login("Admin","wrong123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_003_Verify the login with invalid username', async({loginPage, page})=>{
    await loginPage.login("test","admin123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_004_Verify login with invalid username & invalid password', async({loginPage, page})=>{
    await loginPage.login("wrong","wrong123");
    await loginPage.verifyInvalidCredentialMessage();
});

test('TC_LOGIN_005_Verify login with empty username', async({loginPage, page})=>{
    await loginPage.login("","admin123");
    await loginPage.verifyUsernameRequiredValidation();
});

test('TC_LOGIN_006_Verify login with empty password', async({loginPage, page})=>{
    await loginPage.login("Admin","");
    await loginPage.verifyPasswordRequiredValidation();
});

test('TC_LOGIN_007_Verify login with empty username & password', async({loginPage, page})=>{
    await loginPage.login("","");
    await loginPage.verifyUsernameRequiredValidation();
    await loginPage.verifyPasswordRequiredValidation();
})