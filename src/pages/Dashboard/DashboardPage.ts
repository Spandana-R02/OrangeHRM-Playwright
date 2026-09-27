import { expect, Locator, Page } from '@playwright/test';

export class DashboardPage {

    private readonly page: Page;

    // Profile
    private readonly profileMenu: Locator;
    private readonly profileDropdown: Locator;
    private readonly logoutLink: Locator;
    private readonly profileUserName: Locator;

    // Dashboard
    private readonly loginHeader: Locator;
    private readonly dashboardHeading: Locator;
    private readonly quickLaunch: Locator;
    private readonly navigationMenu: Locator;

    // Dashboard widgets
    private readonly timeAtWorkWidget: Locator;
    private readonly myActionsWidget: Locator;
    private readonly quickLaunchWidget: Locator;
    private readonly buzzLatestPostsWidget: Locator;
    private readonly employeesOnLeaveWidget: Locator;
    private readonly employeeDistributionBySubUnitWidget: Locator;
    private readonly employeeDistributionByLocationWidget: Locator;

    constructor(page: Page) {

        this.page = page;

        // Profile
        this.profileMenu = this.page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.profileDropdown = this.page.getByRole('menu');
        this.logoutLink = this.page.getByText('Logout', { exact: true });
        this.profileUserName = this.profileMenu;

        // Dashboard
        this.loginHeader = this.page.getByRole('heading', { name: 'Login' });
        this.dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });
        this.quickLaunch = this.page.getByText('Quick Launch', { exact: true });
        this.navigationMenu = this.page.locator('a.oxd-main-menu-item');

        // Dashboard widgets
        this.timeAtWorkWidget = this.page.getByText('Time at Work', { exact: true });
        this.myActionsWidget = this.page.getByText('My Actions', { exact: true });
        this.quickLaunchWidget = this.page.getByText('Quick Launch', { exact: true });
        this.buzzLatestPostsWidget = this.page.getByText('Buzz Latest Posts', { exact: true });
        this.employeesOnLeaveWidget = this.page.getByText('Employees on Leave Today', { exact: true });
        this.employeeDistributionBySubUnitWidget = this.page.getByText('Employee Distribution by Sub Unit', { exact: true });
        this.employeeDistributionByLocationWidget = this.page.getByText('Employee Distribution by Location', { exact: true });
    }
}