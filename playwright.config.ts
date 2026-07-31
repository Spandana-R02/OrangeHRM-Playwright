import {defineConfig} from '@playwright/test'
export default defineConfig({
    testDir: './src/tests',
    reporter: 'html',
    retries: 0,
    workers: 4,
    timeout: 30 * 1000,
    use: {
            browserName: 'chromium',
            baseURL: 'https://opensource-demo.orangehrmlive.com',
            headless: false,
            screenshot: 'only-on-failure',
            video: 'retain-on-failure',
            trace: 'on-first-retry',
    },
});