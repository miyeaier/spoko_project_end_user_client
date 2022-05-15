describe('authenticated user', () => {

  beforeEach(() => {
    cy.intercept("GET", "api/articles", {
      fixture: "articles.json",
    })
    cy.visit("/");
    cy.window().its("store").invoke("dispatch"), {
      type: "SET_USER_AUTHENTICATED",
      payload: true,
    }
  })
  it("is expected to see a purchase subscription button", () => {
    cy.get("[data-cy=purchase-subscription-button]").should('be.visible')
  })
});