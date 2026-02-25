import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  abstract readonly path: string;  // wajib di-override di tiap Page

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(this.path); // auto navigate ke path page ini
  }

  async click(locator: Locator | string) {
    if (typeof locator === 'string') {
      await this.page.locator(locator).click();
    } else {
      await locator.click();
    }
  }

  async fill(locator: Locator | string, value: string) {
    if (typeof locator === 'string') {
      await this.page.locator(locator).fill(value);
    } else {
      await locator.fill(value);
    }
  }

  async assertTextVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}
