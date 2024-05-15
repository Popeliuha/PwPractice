import { Page } from '@playwright/test';

class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.getByPlaceholder('email@example.com').fill(email);
    await this.page.getByPlaceholder('enter your passsword').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}

export default LoginPage;
