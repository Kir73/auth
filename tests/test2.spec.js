const { test, expect } = require("@playwright/test");
const { InventoryPage } = require("../pages/inventory-page");

test("Verify product details match between main page and cart", async ({
  page,
}) => {
  const inventoryPage = new InventoryPage();

  await page.goto("https://www.saucedemo.com/inventory.html");

  const titleText = await inventoryPage.productTitle.textContent();
  const descriptionText = await inventoryPage.productDescription.textContent();
  const priceText = await productPrice.textContent();

  await inventoryPage.addToCart(3)

  await page.locator(".shopping_cart_link").click();

  const cartTitle = page.locator(".inventory_item_name");
  const cartDescription = page.locator(".inventory_item_desc");
  const cartPrice = page.locator(".inventory_item_price");

  await expect(cartTitle).toHaveText(titleText);
  await expect(cartDescription).toHaveText(descriptionText);
  await expect(cartPrice).toHaveText(priceText);
});
