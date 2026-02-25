import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '@pages/LoginPage';
import { delay } from '../../../src/utils/delay';


const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open({ timeout: 10000 });
});

When('User login without username and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('', ''); 
});

When(
  'User login with invalid username only {string}',
  async ({ page }, username: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, '');
  }
);

When(
  'User login with invalid password only {string}',
  async ({ page }, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', password);
  }
);



When('User login with valid username {string} and invalid password {string}',
      async ({ page }, username: string, password: string) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);
  }
);

When('User login with valid username {string} and valid password {string}',
      async ({ page }, username: string, password: string) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);
  }
);



Then('User click button login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginButton.click(); 
});



Then('User should see an validation credentials message on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const message = await expect(loginPage.validationCredentials).toBeVisible({ timeout: 10000 });
  
});

Then('User should see an username error message on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.usernameRequired).toBeVisible();

});

Then('User should see an password error message on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.passwordRequired).toBeVisible();

});
Then('User should see dashboard on dashboard page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.dashboardTitle).toBeVisible({ timeout: 10000 });
})
