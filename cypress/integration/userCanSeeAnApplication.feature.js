describe('user can see an app', () => {
  beforeEach(() => {
    cy.visit('/',)
  })

  it('is expected to show app', () => {
    cy.get('#name').should('contain.text', 'Spoko')
  })
})