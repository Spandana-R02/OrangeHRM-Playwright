import {Page, expect, Locator} from '@playwright/test';

export class DashboardPage{
    private page: Page;
    private profileMenu: Locator;
    private logoutLink: Locator;
    private loginHeader: Locator;

    constructor(page:Page){
        this.page = page;
        this.profileMenu = this.page.getByAltText("profile picture");
        this.logoutLink = this.page.getByText("Logout");
        this.loginHeader = this.page.getByRole('heading',{name:"Login"});
    }

    async clickProfileMenu(){
        await this.profileMenu.click();
    }

    async verifyLogout(){
        await expect(this.logoutLink).toBeVisible();
    }

    async clickLogoutLink(){
        await this.logoutLink.click();
    }

    async verifyUserLoggedout(){
        await expect(this.loginHeader).toContainText("Login");
    }
}