// @ts-ignore
describe('Test Home', () => {
  it('should display home page', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Home Page')
  })
})
