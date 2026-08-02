import {test} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test('TC_LOGIN_008_Verify password is masked', async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.enterUsername("Admin");
    await loginPage.enterPassword("admin123");
    await loginPage.verifyPasswordMasking();
})

test('TC_LOGIN_009_Verify Logout option is available', async({page})=>{
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto('/');
    await loginPage.login("Admin","admin123");
    await dashboardPage.clickProfileMenu();
    await dashboardPage.verifyLogout();
});

test('TC_LOGIN_010_Verify user can logged out successfully', async({page})=>{
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto('/');
    await loginPage.login("Admin", "admin123");
    await dashboardPage.clickProfileMenu();
    await dashboardPage.clickLogoutLink();
    await dashboardPage.verifyUserLoggedout();
});
