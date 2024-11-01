describe('Prueba básica de la aplicación', () => {
  it('Visita la página de inicio', () => {
    cy.visit('/')
    cy.contains('h1', 'Bienvenido a la página de inicio').should('be.visible')
  })

  it('Navega a la página Acerca de', () => {
    cy.visit('/')
    cy.contains('Acerca de nosotros').click()
    cy.url().should('include', '/about')
    cy.contains('h1', 'Acerca de nosotros').should('be.visible')
  })

  it('Prueba el contador', () => {
    cy.visit('/')
    cy.contains('Contador: 0').should('be.visible')
    cy.contains('Incrementar').click()
    cy.contains('Contador: 1').should('be.visible')
    cy.contains('Decrementar').click()
    cy.contains('Contador: 0').should('be.visible')
  })

  it('Cambia el idioma', () => {
    cy.visit('/')
    cy.contains('Bienvenido a la página de inicio').should('be.visible')
    cy.contains('Cambiar idioma').click()
    cy.contains('Welcome to the home page').should('be.visible')
  })
})