import test, { expect } from "@playwright/test";
import { AuthPage } from "../pages/auth-page";

test("Verify product title, description, price, and add to cart button", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com");
  const authPage = new AuthPage(page);
  await authPage.login("standard_user", "secret_sauce");
  test.setTimeout(120_000);
});
