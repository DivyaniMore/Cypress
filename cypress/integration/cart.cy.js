/*describe('Cart Management - Add, Remove Items, and Verify Cart', () => {
    it('should verify 3 items in the cart, remove one, and validate the cart', () => {
        // Visit the Automation Test Store
        cy.visit('https://automationteststore.com/');
  
        // Add the first item to the cart (Benefit Bella Bamba)
        cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg']", { timeout: 10000 })
            .click();
        cy.get('.cart', { timeout: 10000 }).click();
        cy.go('back').go('back');
  
        // Add the second item to the cart (Skinsheen Bronzer Stick)
        cy.get("section[id='featured'] div[class='thumbnails list-inline'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)", { timeout: 10000 })
            .click();
        cy.get('.cart', { timeout: 10000 }).click();
        cy.go('back').go('back');
  
        // Add the third item to the cart (Total Moisture Facial Cream)
        cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product16_1_jpg-100091-250x250.jpg']", { timeout: 10000 })
            .click();
        cy.get('.cart', { timeout: 10000 }).click();
  
        // Go to the cart by selecting "Cart" from the dropdown
        cy.get('select.form-control').first().select('Cart', { timeout: 10000 });
  
        // Verify the exact URL redirection to the cart page
        cy.url({ timeout: 10000 }).should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');
  
        // Verify that the cart contains 3 items with their corresponding names
        cy.get('a[href*="product/product&product_id=52"]').should('contain.text', 'Benefit Bella Bamba').should('be.visible');
        cy.get('a[href*="product/product&product_id=50"]').should('contain.text', 'Skinsheen Bronzer Stick').should('be.visible');
        cy.get('a[href*="product/product&product_id=66"]').should('contain.text', 'Total Moisture Facial Cream').should('be.visible');
        
        // Verify that the cart length is 3 using the new class
        cy.get('.cart-info.product-list').find('tr').should('have.length', 4); // Assuming each item is in a row in a table
  
        // Remove the first item (Benefit Bella Bamba) from the cart
        cy.get('a[href*="remove=52"]').click();
  
        // Verify that the cart length is now 2
        cy.get('.cart-info.product-list').find('tr').should('have.length', 3); // Adjust the selector as needed
    });
});*/
describe('Cart Management - Add, Remove Items, and Verify Cart', () => {
    it('should verify 3 items in the cart, remove one, and validate the cart', () => {
      // Visit the Automation Test Store
      cy.visit('https://automationteststore.com/');
      
      // Add the first item to the cart (Benefit Bella Bamba) using XPath
      cy.xpath("//img[@src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg']", { timeout: 10000 })
        .click();
      cy.get('.cart', { timeout: 10000 }).click();
      cy.go('back').go('back');
      
      // Add the second item to the cart (Skinsheen Bronzer Stick) using XPath
      cy.xpath("//section[@id='featured']//div[@class='thumbnails list-inline']//div[1]//div[2]//a[1]//img[1]", { timeout: 10000 })
        .click();
      cy.get('.cart', { timeout: 10000 }).click();
      cy.go('back').go('back');
      
      // Add the third item to the cart (Total Moisture Facial Cream) using XPath
      cy.xpath("//img[@src='//automationteststore.com/image/thumbnails/18/6f/demo_product16_1_jpg-100091-250x250.jpg']", { timeout: 10000 })
        .click();
      cy.get('.cart', { timeout: 10000 }).click();
  
      // Go to the cart by selecting "Cart" from the dropdown using XPath
      cy.xpath("//select[@class='form-control']").first().select('Cart', { timeout: 10000 });
      
      // Verify the exact URL redirection to the cart page
      cy.url({ timeout: 10000 }).should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');
      
      // Verify that the cart contains 3 items with their corresponding names using XPath
      cy.xpath("//a[contains(@href, 'product/product&product_id=52')]").should('contain.text', 'Benefit Bella Bamba').should('be.visible');
      cy.xpath("//a[contains(@href, 'product/product&product_id=50')]").should('contain.text', 'Skinsheen Bronzer Stick').should('be.visible');
      cy.xpath("//a[contains(@href, 'product/product&product_id=66')]").should('contain.text', 'Total Moisture Facial Cream').should('be.visible');
      
      // Verify that the cart length is 3 using the new class
      cy.get('.cart-info.product-list').find('tr').should('have.length', 4); // Assuming each item is in a row in a table
  
      // Remove the first item (Benefit Bella Bamba) from the cart
      cy.get('a[href*="remove=52"]').click();

      // Verify that the cart length is now 2
      cy.get('.cart-info.product-list').find('tr').should('have.length', 3); // Adjust the selector as needed
    });
  });
  

  