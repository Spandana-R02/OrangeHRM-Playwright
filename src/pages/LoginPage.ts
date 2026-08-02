import {Page, Locator, expect} from '@playwright/test'

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private invalidCredentialMessage: Locator;
    private usernameRequiredValidation: Locator;
    private passwordRequiredValidation: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.getByRole('button',{name:'Login'});
        this.invalidCredentialMessage = this.page.getByRole("alert");
        this.usernameRequiredValidation = page.getByText("Required").first();
        this.passwordRequiredValidation = page.getByText("Required").last();

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

    async verifyInvalidCredentialMessage(){
        await expect(this.invalidCredentialMessage).toContainText("Invalid credentials");
    }

    async verifyUsernameRequiredValidation(){
        await expect(this.usernameRequiredValidation).toContainText("Required");
    }

    async verifyPasswordRequiredValidation(){
        await expect(this.passwordRequiredValidation).toContainText("Required");
    }

    async verifyPasswordMasking(){
        await expect(this.passwordInput).toHaveAttribute('type','password');
    }

    async login (username: string, password: string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }
}