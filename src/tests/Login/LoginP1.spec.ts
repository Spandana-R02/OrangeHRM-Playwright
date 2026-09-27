import {test} from '../../fixtures/baseTest';

test.beforeEach(async({page})=>{
    await page.goto('/');
});

test('TC_LOGIN_008_Verify password is masked', async({loginPage, dashboardPage, page})=>{
    await loginPage.enterUsername("Admin");
    await loginPage.enterPassword("admin123");
    await loginPage.verifyPasswordMasking();
})

test('TC_LOGIN_009_Verify Logout option is available', async({loginPage, dashboardPage, page})=>{
    await loginPage.login("Admin","admin123");
    await dashboardPage.clickProfileMenu();
    await dashboardPage.verifyLogout();
});

test('TC_LOGIN_010_Verify user can logged out successfully', async({loginPage, dashboardPage, page})=>{
    await loginPage.login("Admin", "admin123");
    await dashboardPage.clickProfileMenu();
    await dashboardPage.clickLogoutLink();
    await dashboardPage.verifyUserLoggedout();
});
