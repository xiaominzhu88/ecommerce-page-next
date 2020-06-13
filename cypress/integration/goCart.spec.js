/// <reference types="cypress" />

context('Add to cart', () => {
  it('Add item to cart', () => {
    // test if add items button works, at each item page
    cy.visit('http://localhost:3000/products/1');
    cy.get('[data-cy="addCart-button"]').click();

    // test at cart page if it's contains item 'dress'
    cy.visit('http://localhost:3000/cartForPayment');
    cy.get('[data-cy="cart-item-name"]').contains('dress');

    // test if remove button works
    cy.get('[data-cy="remove-button"]').click();
    cy.get('ul').should('be.empty');

    cy.visit('http://localhost:3000/products/6');
    cy.get('input').type('5');
    cy.get('[data-cy="addCart-button"]').click();
    cy.get('[data-cy="go-to-cart-button"]').click();

    cy.visit('http://localhost:3000/cartForPayment');
    cy.get('[data-cy="add-one-more-button"]').click();

    cy.get('[data-cy="qty-cart"]').contains('6');
    cy.get('[data-cy="price-cart"]').contains('90,00');
  });
});
