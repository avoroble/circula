const { expect } = require('@playwright/test');

exports.SignUpPage = class SignUpPage {

  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByLabel('First name');
    this.lastNameField = page.getByLabel('Last name');
    this.workEmailFiled = page.getByLabel('Work e-mail');
    this.phoneNumberField = page.getByLabel('Phone number');
    this.passwordField = page.getByLabel('Password');
    this.companyNameField = page.getByLabel('Company name');
    this.companyRegComboBox = page.getByRole('combobox', { name: 'Where’s your company' });
    this.companyRegComboBoxSwe = page.getByRole('option', { name: 'Sweden' });
    this.howDidYouHearField = page.getByLabel('How did you hear about us?');
    this.termsAndConditionsCheckBox = page.locator('label').filter({ hasText: 'I agree to the Terms and' });
    this.termsAndConditionsLink = page.getByRole('link', { name: 'Terms and Conditions' });
    this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
    this.porductUpdatesCheckBox = page.locator('label').filter({ hasText: 'I\'m happy to receive very' });
    this.createAccountButton = page.getByRole('button', { name: 'Create an account' });

  };

  async goto() {
    await this.page.goto('https://circula-qa-challange.vercel.app/users/sign_up');
    await this.page.getByTestId('uc-deny-all-button').click();
  }

  async selectCountry(country) {
    await this.companyRegComboBox.click();
    await this.page.getByText(country).click();
  }

  async typeCountry(country) {
    await this.companyRegComboBox.fill(country);
  }

};