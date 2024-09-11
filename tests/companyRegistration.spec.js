import { test, expect } from '@playwright/test';
import { SignUpPage } from '../src/pages/sign-up-page';

const regCountry = 'Sweden';
const regCounryPrefix = 'Swe';

test(`Verify that ${regCountry} can be selected from Company Registration Country combobox on Sign-Up page`, async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.goto();
  await signUp.selectCountry(regCountry);
  await expect(signUp.companyRegComboBox).toHaveValue(regCountry);
});

test(`Verify that ${regCountry} can be typed into Company Registration Country combobox on Sign-Up page`, async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.goto();
  await signUp.typeCountry(regCountry);
  await expect(signUp.companyRegComboBox).toHaveValue(regCountry);
});


test(`Verify that ${regCountry} is filterred after typing ${regCounryPrefix} into Company Registration Country combobox on Sign-Up page`, async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.goto();
  await signUp.typeCountry(regCounryPrefix);
  await expect(signUp.companyRegComboBoxSwe).toBeVisible();
});


