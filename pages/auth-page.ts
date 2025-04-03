import { Locator, Page } from "@playwright/test";

export class AuthPage {
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
