/* global describe, it, cy */

describe('Petgram', () => {
  it('Para ver si la app funciona', () => {
    cy.visit('/');
  });

  it('Navegamos a una categoría y vemos fotos', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('Si podemos navegar con la navbar a la home', () => {
    cy.visit('pet/1');
    cy.get('nav a').first().click();
    // eslint-disable-next-line no-undef
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('Los usuarios no registrados ven el formulario de registro e inicio de sesión al ir a favs', () => {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
