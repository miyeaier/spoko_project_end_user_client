describe("user can add more products to their order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    }).as("getProducts");
    cy.intercept('GET', '**/api/articles', {
      fixture: 'articles.json',
    }).as("getArticles")
    cy.intercept("POST", "**/api/orders", {
      fixture: "order.json",
    }).as("createOrder");
    cy.intercept("PUT", "**/api/orders", {
      fixture: "orderUpdate.json",
    }).as("updateOrder")
    cy.intercept("GET","**/api/orders/**",{
      fixture:"orderReview.json"
    }).as("orderReview");
    cy.visit('/')
    cy.get('[data-cy=product-tab]').click()
    cy.get("[data-cy=order-button]").last().click();
    cy.wait(5000)
    cy.get("[data-cy=order-button]").first().click();
  });

  it("is expected to display a message when another product is added", () => {
    cy.get("#message-box").should(
      "contain.text",
      "Soccer Shoes was added to your order");
  });

  it("is expected to make a PUT request", () => {
    cy.wait("@updateOrder").its("request.method").should("eq", "PUT");
  });
  
  it.only('is expected to show 3 products on the order', () => {
    cy.get('[data-cy=show-order]').click()
    cy.wait(5000)
    cy.get('[data-cy=order-list]').children().should('have.length', 3)
  })
});