describe('Featured Product Image and Details Verification', () => {
  it('should verify product image, details, and functionalities on the Skinsheen Bronzer Stick product page', () => {
    // Visit the Automation Test Store homepage
    cy.visit('https://automationteststore.com/');

    // Check if the featured product image (first thumbnail) is visible
    cy.get("section[id='featured'] div[class='thumbnails list-inline'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)")
      .should('be.visible')   // Verify that the featured product image is visible
      .click();               // Click on the featured product image

    // Verify that the updated larger product image is visible
    cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product01_jpg-100089-380x380.jpg']")
      .should('be.visible');   // Ensure the larger version of the image is visible

    // Verify that the product name 'Skinsheen Bronzer Stick' is visible
    cy.get('span.bgnone')
      .should('contain.text', 'Skinsheen Bronzer Stick');

    // Verify that the product price is visible
    cy.get('.productpageprice.jumbotron')
      .should('contain.text', '$29.50');

    // Verify that the quantity input field is visible and has the default value of '1'
    cy.get('#product_quantity')
      .should('be.visible')
      .and('have.value', '1');

    // Verify that the "Add to Cart" button is visible
    cy.get('.cart')
      .should('be.visible');
  });
  it('should add a product to the cart, select Cart from the dropdown, and verify the product image in the cart', () => {
    // Visit the Automation Test Store
    cy.visit('https://automationteststore.com/');

    // Verify that the product image is visible
    cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg'][width='250']")
      .should('be.visible');

    // Click on the cart button associated with the product
    cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1) > i:nth-child(1)")
      .click();

    // Select "Cart" from the first dropdown
    cy.get('select.form-control').first().select('Cart');

    // Verify the exact URL redirection
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');

    // Check if the product image in the cart is visible
    cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg'][width='75'][height='75']")
      .should('be.visible');
  });
});
/*describe('Select Cart from Dropdown and Verify Image', () => {
  it('should add a product to the cart, select Cart from the dropdown, and verify the product image in the cart', () => {
    // Visit the Automation Test Store
    cy.visit('https://automationteststore.com/');

    // Verify that the product image is visible
    cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg'][width='250']")
      .should('be.visible');

    // Click on the cart button associated with the product
    cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1) > i:nth-child(1)")
      .click();

    // Select "Cart" from the first dropdown
    cy.get('select.form-control').first().select('Cart');

    // Verify the exact URL redirection
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');

    // Check if the product image in the cart is visible
    cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg'][width='75'][height='75']")
      .should('be.visible');
  });
});*/
