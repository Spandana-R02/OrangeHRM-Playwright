import {Page, Locator} from '@playwright/test'

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    constructor(page:Page){
        this.page = page;
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.getByRole('button',{name:'Login'});
    }
    async enterUsername (username: string){
        await this.usernameInput.fill(username);
    }

    async enterPassword (password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton (){
        await this.loginButton.click();
    }

    async login (username: string, password: string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }
}