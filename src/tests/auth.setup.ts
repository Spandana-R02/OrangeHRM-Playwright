import { test as setup, expect } from '@playwright/test';

setup.use({ storageState: undefined });

setup('Create Authentication', async ({ page }) => {

    await page.goto('/');

    await page.fill('input[name="username"]', 'Admin');

    await page.fill('input[name="password"]', 'admin123');

    await page.getByRole('button', { name: 'Login' }).click({noWaitAfter: true});

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    console.log('Logged in URL:', page.url());

    await page.context().storageState({
        path: 'src/auth/auth.json'
    });
});