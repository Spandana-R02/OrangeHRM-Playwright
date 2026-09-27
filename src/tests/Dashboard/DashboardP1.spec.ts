import { test, expect } from '../../fixtures/baseTest';

test.beforeEach(async({page})=>{
    await page.goto('/');
});

test('TC_DASHBOARD_001_Verify dashboard heading after successful login', async({dashboardPage, page})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyDashboardHeading();
});

test('TC_DASHBOARD_002_Verify Quick Launch section is visble on Dashboard screen', async({dashboardPage, page})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyQuickLaunch(); 
});

test('TC_DASHBOARD_003_Verify Dashboard left navigation menu items', async({page, dashboardPage})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyDashboardNavigationMenu();
});

test('TC_DASHBOARD_004_Verify the name of the user is displayed in the profile menu on the Dashboard', async({page, dashboardPage})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyProfileUserName();
});

test('TC_DASHBOARD_005_Verify the options displayed in the profile menu', async ({page, dashboardPage})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyPrifileOptions();
});

test('TC_DASHBOARD_006_Verify Time at Work widget is displayed on the Dashboard', async ({page, dashboardPage})=>{
    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.verifyDashboardWidgets();
});

