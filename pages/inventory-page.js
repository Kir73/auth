export class InventoryPage {
  productTitle = page.locator(".inventory_item_name", {
    hasText: "Sauce Labs Backpack",
  });
  productDescription = page.locator(".inventory_item_desc");
  productPrice = page.locator(".inventory_item_price");
  addToCartButton = page.locator("#add-to-cart-");

  addToCart(index) {
    page.locator(`#add-to-cart-${this.getTitle(index)}`).click()
  }

  getTitle(index) {
    const titleText = page
      .locator(`#item_${index}_title_link div[data-test="inventory-item-name"]`)
      .textContent();

    return titleText.toLowerCase();
  }
}

// add-to-cart-sauce-labs-bike-light
