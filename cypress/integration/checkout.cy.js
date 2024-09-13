describe('Checkout Process', () => {
    it('should complete the checkout process with valid login and payment information', () => {
        // Visit the homepage
        cy.visit('https://automationteststore.com/'); // Replace with your actual URL

        // Click on the product image to view the product
        cy.get("img[src='//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg']").click();

        // Add the product to the cart
        cy.get('.cart', { timeout: 10000 }).click();// Replace with the actual selector for adding to cartL
         cy.get('select.form-control').first().select('Checkout');
        
         cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');


        // Proceed to checkout
        cy.fixture('ecommerce').then( (data)=>{

        cy.get('#loginFrm_loginname').type(data.username); // Replace with actual username
        cy.get('#loginFrm_password').type(data.password); // Replace with actual password
        cy.get('button[title="Login"]').click();
    })
    cy.get('#checkout_btn')
    .should('be.visible') // Ensure the button is visible
    .and('not.be.disabled') // Ensure the button is not disabled
    .click();
      
          // Verify successful login and checkout
         // cy.get('#checkout_btn').click().click()
        //  cy.login('divani', '1234567');

         // cy.get('#checkout_btn').click(); // Proceed to checkout
        //  cy.get('button#checkout_btn').click(); // Confirm order button
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/confirm');
    
        cy.get('h1').should('contain.text', ' Your Order Has Been Processed!'); // Verify the confirmation message
    });
});
