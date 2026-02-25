import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly path = '/web/index.php/auth/login';  // otomatis: baseURL + '/'
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly validationCredentials: Locator
  readonly usernameRequired: Locator;
  readonly passwordRequired: Locator;
  readonly roleUser: Locator
  readonly dashboardTitle: Locator
  
  //   readonly errorMessage: Locator;
//   readonly userMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('//*[@name="username"]');
    this.passwordInput = page.locator('//*[@name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.nameUser = page.getByText('Fadhilah Alwi');
    this.roleUser = page.getByRole('generic').getByText('Admin');
    this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard', level: 6 });
    this.usernameRequired = page
    .locator('input[name="username"]')
    .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
    .locator('.oxd-input-field-error-message');
    this.passwordRequired = page
    .locator('input[name="password"]')
    .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
    .locator('.oxd-input-field-error-message');
    this.validationCredentials = page.getByText("Invalid credentials");
    
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);

  }

}
