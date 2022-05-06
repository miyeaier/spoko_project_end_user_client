describe('user can see an app', () => {
  beforeEach(() => {
    cy.visit('/', {})
  })

  it('is expected to show app', () => {
    cy.get('[data-cy=name]').should('contain.text', 'Spoko')
  })
})