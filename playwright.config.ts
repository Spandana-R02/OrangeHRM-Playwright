import {defineConfig} from '@playwright/test'
export default defineConfig({
    testDir: './src/tests/',
    reporter: 'html',
    retries: 0,
    workers: 4,
    expect: {
    timeout: 10000,
    },
    projects: [
        // 1. Authentication setup
        {
            name: 'setup',
            testMatch: /auth\.setup\.ts/,
            use: {
                baseURL: 'https://opensource-demo.orangehrmlive.com/',
                headless: false,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                trace: 'on-first-retry',
            },
        },
        // 2. Login test cases
        {
            name: 'login',

            testMatch: /Login.*\.spec\.ts/,

            use: {
                browserName: 'chromium',
                baseURL: 'https://opensource-demo.orangehrmlive.com/',
                headless: false,

                // Login tests must start without authentication
                storageState: undefined,

                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                trace: 'on-first-retry',
            },
        },
        // 3. Authenticated test cases
        {
            name: 'chromium',

            // Don't execute Login tests in this project
            testIgnore: [
                /Login.*\.spec\.ts/,
                /auth\.setup\.ts/,
            ],

            use: {
                browserName: 'chromium',
                baseURL: 'https://opensource-demo.orangehrmlive.com/',
                headless: false,

                // Reuse authenticated session
                storageState: 'src/auth/auth.json',

                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                trace: 'on-first-retry',
            },

            // Authentication must run before these tests
            dependencies: ['setup'],
        },
    ],
});