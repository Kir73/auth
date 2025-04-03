const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/inventory-page');

test('Verify product title, description, price, and add to cart button', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    const productTitle = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
    const productDescription = page.locator('.inventory_item_desc');
    const productPrice = page.locator('.inventory_item_price');
    const addToCartButton = page.locator('text=Add to cart');

 
    const inventoryPage = new InventoryPage();
    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText('Sauce Labs Backpack');

 
    await expect(productDescription).toBeVisible();
    await expect(productDescription).toHaveText(
        'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
    );

  
    await expect(productPrice).toBeVisible();
    await expect(productPrice).toHaveText('$29.99');

   
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toHaveText('Add to cart');
});