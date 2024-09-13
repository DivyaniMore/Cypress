/*describe('Search Functionality and Image Visibility', () => {
    it('should type "makeup" into the search field, perform the search, and verify that the specific image is visible', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');
  
      // Type "makeup" into the search input field
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('makeup')
        .type('{enter}'); // Press Enter to perform the search
  
      // Verify that the specific image is visible
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-250x250.jpg"]')
        .should('be.visible');
    });
  });*/

  /*describe('Search Functionality and Image Visibility for Skincare', () => {
    it('should type "Skincare" into the search field, perform the search, and verify that the specific image is visible', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');
  
      // Type "Skincare" into the search input field and press Enter
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('Skincare')
        .type('{enter}'); // Perform the search
  
      // Verify that the specific image is visible
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-250x250.jpg"]')
        .should('be.visible')
        .and('have.attr', 'alt', 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
    });
  });*/
  /*describe('Search Functionality and Product Details Verification', () => {
    it('should search for "makeup", click on a product, and verify its image, price, and name', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');
  
      // Type "makeup" into the search input field and press Enter
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('makeup')
        .type('{enter}'); // Press Enter to perform the search
  
      // Click on the specific product link "L'EXTRÊME Instant Extensions Lengthening Mascara"
      cy.contains('a', "L'EXTRÊME Instant Extensions Lengthening Mascara")
        .should('be.visible')
        .click();
  
      // Verify the product image is visible on the product page
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-380x380.jpg"]')
        .should('be.visible');
  
      // Verify the price of the product is visible
      cy.get('div.productpageprice')
        .should('contain.text', '$25.00');
  
      // Verify the product name is displayed on the product page
      cy.contains('span.bgnone', "L'EXTRÊME Instant Extensions Lengthening Mascara")
        .should('be.visible');
    });
  });*/

  
  /*describe('Search Functionality and Product Details Verification', () => {
    it('should search for "makeup", verify specific images, and check product details for "makeup"', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');
      
      // Search for "makeup" and verify the specific image is visible
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('makeup')
        .type('{enter}'); // Press Enter to perform the search
  
      // Verify that the specific image for "makeup" is visible
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-250x250.jpg"]')
        .should('be.visible');

  
      // Click on the specific product link "L'EXTRÊME Instant Extensions Lengthening Mascara"
      cy.contains('a', "L'EXTRÊME Instant Extensions Lengthening Mascara")
        .should('be.visible')
        .click();
  
      // Verify the product image is visible on the product page
      cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-380x380.jpg"]')
        .should('be.visible');
  
      // Verify the price of the product is visible
      cy.get('div.productpageprice')
        .should('contain.text', '$25.00');
  
      // Verify the product name is displayed on the product page
      cy.contains('span.bgnone', "L'EXTRÊME Instant Extensions Lengthening Mascara")
        .should('be.visible');
         // Search for "Skincare" and verify the specific image is visible with an attribute check
      cy.get('input#filter_keyword')
      .clear() // Clear the previous search term
      .type('Skincare')
      .type('{enter}'); // Perform the search

    // Verify that the specific image for "Skincare" is visible and has the correct alt attribute
    cy.get('img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-250x250.jpg"]')
      .should('be.visible')
      .and('have.attr', 'alt', 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
    });
  });*/
  
  describe('Search Functionality and Product Details Verification', () => {
    it('should search for "makeup", verify specific images, and check product details for "makeup"', () => {
        // Visit the Automation Test Store homepage
        cy.visit('https://automationteststore.com/');
      
        // Search for "makeup" and verify the specific image is visible
        cy.get('input#filter_keyword')
          .should('be.visible')
          .type('makeup')
          .type('{enter}'); // Press Enter to perform the search
  
        // Verify that the specific image for "makeup" is visible
        cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-250x250.jpg"]')
          .should('be.visible');
  
        // Click on the specific product link "L'EXTRÊME Instant Extensions Lengthening Mascara"
        cy.contains('a', "L'EXTRÊME Instant Extensions Lengthening Mascara")
          .should('be.visible')
          .click();
  
        // Verify the product image is visible on the product page
        cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/lancome_mascara_jpg-100250-380x380.jpg"]')
          .should('be.visible');
  
        // Verify the price of the product is visible
        cy.get('div.productpageprice')
          .should('contain.text', '$25.00');
  
        // Verify the product name is displayed on the product page
        cy.contains('span.bgnone', "L'EXTRÊME Instant Extensions Lengthening Mascara")
          .should('be.visible');
        
        // Check the visibility of a dropdown menu and select an option
        cy.get('div[class="form-group"] label[class="control-label"]')
          .should('be.visible'); // Verify label is visible
          
        // Select an option from the dropdown menu (e.g., #option315)
        cy.get('#option315')
          .should('be.visible')
          .select('Brown $5.00 (983 In Stock)'); // Replace 'Some Option' with the actual option text
  
        // Click on the "Call to Order" link
        cy.xpath("//a[@class='call_to_order']")
          .should('be.visible')
          .click();
  
        // Verify the visibility of the element after clicking "Call to Order"
        cy.get('div[class="col-md-6 pull-left"] b')
          .should('be.visible'); // Verifying that the bold text inside is visible
    });
     it('should search for "Books", verify the specific image and product title visibility', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');
    
      // Search for "Books" and verify the search bar is visible
      cy.get('input#filter_keyword')
        .should('be.visible')
        .type('Books') // Search for "Books"
        .type('{enter}'); // Press Enter to perform the search

      // Click on the "Description" checkbox
      cy.get('input#description')
        .should('be.visible') // Ensure the checkbox is visible
        .click(); // Click on the checkbox

      // Click on the "Search" button
      cy.get('button#search_button')
        .should('be.visible') // Ensure the search button is visible
        .click(); // Click the search button

      // Verify that the specific image for "Books" is visible
      //cy.get('a.local_image img[style="width: 380px; height: 380px;"][src="//automationteststore.com/image/thumbnails/18/76/paperback1_jpg-100198-380x380.jpg"]')
        //.should('be.visible'); // Check if the image is visible

      // Verify that the product title "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life" is visible
      cy.get('span.bgnone')
        .should('contain.text', 'The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life');
  });
});