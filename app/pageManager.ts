import { Page } from '@playwright/test';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';

class PageManager {
  public registrationPage: RegistrationPage;
  public loginPage: LoginPage;

  constructor(page: Page) {
    this.registrationPage = new RegistrationPage(page);
    this.loginPage = new LoginPage(page);
  }
}

export default PageManager;