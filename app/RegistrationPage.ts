import { Page } from '@playwright/test';

class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://rahulshettyacademy.com/client/');
  }

  async register(user: { firstName: string; lastName: string; email: string; phone: string; password: string; role: string }) {
    await this.page.getByText('Register here').click();
    await this.page.getByPlaceholder('First Name').fill(user.firstName);
    await this.page.getByPlaceholder('Last Name').fill(user.lastName);
    await this.page.getByPlaceholder('email@example.com').fill(user.email);
    await this.page.getByPlaceholder('enter your number').fill(user.phone);
    await this.page.getByLabel('Male', { exact: true }).check();
    await this.page.getByRole('combobox').selectOption(user.role);
    await this.page.getByPlaceholder('Passsword', { exact: true }).fill(user.password);
    await this.page.getByPlaceholder('Confirm Passsword').fill(user.password);
    await this.page.getByRole('checkbox').check();
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
}

export default RegistrationPage;
