/*describe('User Registration', () => {
    it('should complete the registration form with valid data', () => {
        // Visit the registration page
        cy.visit('https://automationteststore.com/'); // Replace with your registration page URL

       
    // Select "Cart" from the first dropdown
    cy.get('select.form-control').first().select('Account');
    // Verify the exact URL redirection
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

        // Click on the 'Continue' button
        cy.get('button[title="Continue"]').click();

        // Fill in the registration form
        cy.get('#AccountFrm_firstname').type('dia');
        cy.get('#AccountFrm_lastname').type('Dpatil');
        cy.get('#AccountFrm_email').type('hello.doe@example.com');
        cy.get('#AccountFrm_telephone').type('14567890');
        cy.get('#AccountFrm_fax').type('098761');
        cy.get('#AccountFrm_company').type('electronic Enterprises');
        cy.get('#AccountFrm_address_1').type('123 Main St');
        cy.get('#AccountFrm_city').type('Anytown');
        

        // Fill in the remaining address fields
        cy.get('#AccountFrm_postcode').type('12345');
        
        // Select a country from the dropdown
        cy.get('#AccountFrm_country_id').select('Togo'); // Ensure 'Togo' is a valid option
        
        // Fill in the login details
        cy.get('#AccountFrm_loginname').type('Divani');
        cy.get('#AccountFrm_password').type('raj1234');
        cy.get('#AccountFrm_confirm').type('raj1234');
        
        // Subscribe to the newsletter
        cy.get('#AccountFrm_newsletter1').check(); // Check the 'Yes' option
        
        // Agree to the terms and conditions
        cy.get('#AccountFrm_agree').check(); // Assuming it's a checkbox
        
        // Click on the 'Continue' button to submit the form
        cy.get('button[title="Continue"]').click();

        // Verify successful registration (adjust based on your application's success indicator)
        
       // cy.contains('Please select a region / state!').should('be.visible');
    });
});*/

/*describe('User Registration', () => {
    it('should complete the registration form with valid data', () => {
        // Visit the registration page
        cy.visit('https://automationteststore.com/'); // Replace with your registration page URL

        // Select "Account" from the first dropdown
        cy.get('select.form-control').first().select('Account');
        
        // Verify the exact URL redirection
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

        // Click on the 'Continue' button to start registration
        cy.get('button[title="Continue"]').click();

        // Fill in the registration form
        cy.get('#AccountFrm_firstname').type('dia');
        cy.get('#AccountFrm_lastname').type('Dpatil');
        cy.get('#AccountFrm_email').type('hello.doe@example.com');
        cy.get('#AccountFrm_telephone').type('14567890');
        cy.get('#AccountFrm_fax').type('098761');
        cy.get('#AccountFrm_company').type('electronic Enterprises');
        cy.get('#AccountFrm_address_1').type('123 Main St');
        cy.get('#AccountFrm_city').type('Anytown');
        cy.get('#AccountFrm_postcode').type('12345');
        
        // Select a country from the dropdown
        cy.get('#AccountFrm_country_id').select('Togo'); // Ensure 'Togo' is a valid option
        
        // Select a region (state) from the dropdown
        cy.get('#AccountFrm_zone_id').select('Maritime'); // Select region from options

        // Fill in the login details
        cy.get('#AccountFrm_loginname').type('vidyasagar');
        cy.get('#AccountFrm_password').type('raj1234');
        cy.get('#AccountFrm_confirm').type('raj1234');
        
        // Subscribe to the newsletter
        cy.get('#AccountFrm_newsletter1').check(); // Check the 'Yes' option
        
        // Agree to the terms and conditions
        cy.get('#AccountFrm_agree').check(); // Assuming it's a checkbox
        
        // Click on the 'Continue' button to submit the form
        cy.get('button[title="Continue"]').click();

        // Verify successful registration (adjust based on your application's success indicator)
        // You can assert based on what is displayed after successful registration
        cy.contains('Your account has been created').should('be.visible'); // Example success message
    });
});*/
describe('User Registration', () => {
    it('should complete the registration form with valid data and verify the address details', () => {
        // Visit the registration page
        cy.visit('https://automationteststore.com/'); // Replace with your registration page URL

        // Select "Account" from the first dropdown
        cy.get('select.form-control').first().select('Account');
        
        // Verify the exact URL redirection
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login');

        // Click on the 'Continue' button to start registration
        cy.get('button[title="Continue"]').click();

        // Fill in the registration form
        cy.get('#AccountFrm_firstname').type('raja');
        cy.get('#AccountFrm_lastname').type('patil');
        cy.get('#AccountFrm_email').type('rss@example.com');
        cy.get('#AccountFrm_telephone').type('14567890');
        cy.get('#AccountFrm_fax').type('098761');
        cy.get('#AccountFrm_company').type('electronic Enterprises');
        cy.get('#AccountFrm_address_1').type('123 Main St');
        cy.get('#AccountFrm_city').type('Anytown');
        cy.get('#AccountFrm_postcode').type('12345');
        
        // Select a country from the dropdown
        cy.get('#AccountFrm_country_id').select('Togo'); // Ensure 'Togo' is a valid option
        
        // Select a region (state) from the dropdown
        cy.get('#AccountFrm_zone_id').select('Maritime'); // Select region from options

        // Fill in the login details
        cy.get('#AccountFrm_loginname').type('rajasa');
        cy.get('#AccountFrm_password').type('raj1234');
        cy.get('#AccountFrm_confirm').type('raj1234');
        
        // Subscribe to the newsletter
        cy.get('#AccountFrm_newsletter1').check(); // Check the 'Yes' option
        
        // Agree to the terms and conditions
        cy.get('#AccountFrm_agree').check(); // Assuming it's a checkbox
        
        // Click on the 'Continue' button to submit the form
        cy.get('button[title="Continue"]').click();

        cy.wait(2000); // Adjust the wait time as needed

        // Click on "Manage Address Book" link using CSS selectors
        cy.get('.myaccountbox .side_account_list')
            .contains('Manage Address Book')
            .should('be.visible') // Ensure the link is visible
            .click();

        // Verify that the address details are correctly displayed
        cy.get('address').should('contain.text', 'raja patil')
                         .and('contain.text', 'electronic Enterprises')
                         .and('contain.text', '123 Main St')
                         .and('contain.text', 'Anytown 12345')
                         .and('contain.text', 'Maritime')
                         .and('contain.text', 'Togo');
    });
});
