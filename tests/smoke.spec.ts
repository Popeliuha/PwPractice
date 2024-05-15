
    import { test, expect } from '@playwright/test';
    import { randomUUID } from 'crypto';

    test('test', async ({ page }) => {
        const email = `popelyshkon${randomUUID()}@gmail.com`;
        const password = 'Pwd1111!'
      await page.goto('https://rahulshettyacademy.com/client/');
      await page.getByText('Register here').click();
      await page.getByPlaceholder('First Name').fill('Nataliia');
      await page.getByPlaceholder('Last Name').fill('PYSLAR');
      await page.getByPlaceholder('email@example.com').fill(email);
      await page.getByPlaceholder('enter your number').fill('2987654321');
      await page.getByLabel('Male', { exact: true }).check();
      await page.getByRole('combobox').selectOption('3: Engineer');
      await page.getByPlaceholder('Passsword', { exact: true }).fill(password);
      await page.getByPlaceholder('Confirm Passsword').fill(password);
      await page.getByRole('checkbox').check();
      await page.getByRole('button', { name: 'Register' }).click();
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page).toHaveTitle("Let's Shop");
      await page.getByPlaceholder('email@example.com').fill(email);
      await page.getByPlaceholder('enter your passsword').fill(password);
      await page.getByRole('button', { name: 'Login' }).click();
    });