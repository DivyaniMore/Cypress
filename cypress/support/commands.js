// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.get('#loginFrm_loginname').type(username);   // Enter username
    cy.get('#loginFrm_password').type(password);    // Enter password
    cy.get('button[title="Login"]').click();        // Click the login button
  });
  // cypress/support/commands.js

/*Cypress.Commands.add('loginByToken', (token) => {
    // Set the token in localStorage
    window.localStorage.setItem('authToken', token);
  
    // Reload or visit a protected page after setting the token
    cy.visit('/');
  });*/
  
  