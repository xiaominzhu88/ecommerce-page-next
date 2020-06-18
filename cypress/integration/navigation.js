/// <reference types="cypress" />

context('Navigation', () => {
  it('contains link', () => {
    cy.visit('http://localhost:3000');
    cy.get('.header').contains('PET-STORE');
  });

  it('contains image', () => {
    cy.visit('http://localhost:3000/content');
    cy.get('h3').contains('dress');
  });
});
