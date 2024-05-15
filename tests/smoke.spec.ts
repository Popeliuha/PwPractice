import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';
import PageManager from '../app/pageManager';

test('test', async ({ page }) => {
  const email = `popelyshkon${randomUUID()}@gmail.com`;
  const password = 'Pwd1111!';
  const user = {
    firstName: 'Nataliia',
    lastName: 'PYSLAR',
    email: email,
    phone: '2987654321',
    password: password,
    role: '3: Engineer',
  };

  const pageManager = new PageManager(page);

  await pageManager.registrationPage.navigate();
  await pageManager.registrationPage.register(user);
  await pageManager.loginPage.login(email, password);
});
