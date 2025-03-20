const { test, expect } = require("@playwright/test");

test("Verify product details match between main page and cart", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  const productTitle = page.locator(".inventory_item_name", {
    hasText: "Sauce Labs Backpack",
  });
  const productDescription = page.locator(".inventory_item_desc");
  const productPrice = page.locator(".inventory_item_price");
  const addToCartButton = page.locator("text=Add to cart");

  const titleText = await productTitle.textContent();
  const descriptionText = await productDescription.textContent();
  const priceText = await productPrice.textContent();

  await addToCartButton.click();

  await page.locator(".shopping_cart_link").click();
  const cartTitle = page.locator(".inventory_item_name");
  const cartDescription = page.locator(".inventory_item_desc");
  const cartPrice = page.locator(".inventory_item_price");
  await expect(cartTitle).toHaveText(titleText);
  await expect(cartDescription).toHaveText(descriptionText);
  await expect(cartPrice).toHaveText(priceText);
});
