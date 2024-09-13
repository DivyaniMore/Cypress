/*describe('User Registration, Login, and Logout', () => {
    it('should complete the registration, login, and logout process', () => {
        // Visit the website
        cy.visit('https://automationteststore.com/'); // Replace with your actual URL

        // Select "Account" from the first dropdown
        cy.get('select.form-control').first().select('Account');
        // Verify the exact URL redirection to login page
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

        // Enter login credentials and submit
       // cy.get('#loginFrm_loginname').type('divani'); // Replace with actual username
      //  cy.get('#loginFrm_password').type('1234567'); // Replace with actual password
       // cy.get('button[title="Login"]').click();
       cy.login('divani', '1234567');
        // Verify successful login by checking for My Account page
        cy.url().should('include', 'account/account');
        cy.get('h2.heading2 span').should('contain.text', 'My Account');

        // Select "Logout" from the dropdown
        cy.get('select.form-control').first().select('Logout');

        // Verify that the URL changes to logout
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/logout');

        // Click on the "Continue" button
        cy.get('a.btn.btn-default.mr10[title="Continue"]').click();

        // Verify redirection to the homepage
        cy.url().should('eq', 'https://automationteststore.com/'); // URL of the homepage
    });
});*/

describe('User Registration, Login, and Logout', () => {
    it('should complete the registration, login, invalid login, and logout process', () => {
      // Visit the website
      cy.visit('https://automationteststore.com/'); // Replace with actual URL
  
      // Select "Account" from the first dropdown
      cy.get('select.form-control').first().select('Account');
  
      // Verify redirection to login page
      cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');
  
      // Verify the password field is of type "password"
      cy.get('#loginFrm_password').should('have.attr', 'type', 'password');
  
      // Test invalid login
      cy.get('#loginFrm_loginname').type('invalidUser'); // Invalid username
      cy.get('#loginFrm_password').type('wrongPassword'); // Invalid password
      cy.get('button[title="Login"]').click();
      
      // Verify error message for invalid login
      cy.get('.alert.alert-error').should('contain.text', 'Error: Incorrect login or password provided.');
  
      // Clear the login fields
      cy.get('#loginFrm_loginname').clear();
      cy.get('#loginFrm_password').clear();
  
      // Enter valid login credentials and submit
      cy.login('divani', '1234567'); // Use the login command
  
      // Verify successful login by checking URL and My Account page
      cy.url().should('include', 'account/account');
      cy.get('h2.heading2 span').should('contain.text', 'My Account');
  
    
  
      // Test accessing account after login
      cy.visit('https://automationteststore.com/index.php?rt=account/account');
      cy.url().should('include', 'account/account');
  
      // Select "Logout" from the dropdown
      cy.get('select.form-control').first().select('Logout');
  
      // Verify redirection to logout page
      cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/logout');
  
  
      // Click on the "Continue" button after logout
      cy.get('a.btn.btn-default.mr10[title="Continue"]').click();
  
      // Verify redirection to the homepage
      cy.url().should('eq', 'https://automationteststore.com/');
  
      // Verify that accessing account page after logout redirects to login page
      cy.visit('https://automationteststore.com/index.php?rt=account/account');
      cy.url().should('include', 'account/login');
    });
  });
  