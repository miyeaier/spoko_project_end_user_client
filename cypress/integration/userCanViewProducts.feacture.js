beforeEach(() => {
  cy.intercept("GET", "**/api/products", {
    fixture: "products.json",
  }).as("getProducts");
  cy.visit("/products");
});
it('is expected to make a GET request to the API', () => {
  cy.wait('@getProducts').its('request.method').should('eq', 'GET');
});

it("is expected to show a list of products", () => {
  cy.get("[data-cy=products-list]").children().should("have.length", 3);
})
it("is expected to display the list items display the expected content", () => {
  cy.get("[data-cy=products-list]").first().should("contain", "Soccer Shoes");
});

it("is expected that the list items display price", () => {
  cy.get("[data-cy=products-list]").first().should("contain", "1100");
});
it("is expected that the list items display description", () => {
  cy.get("[data-cy=products-list]").first().should("contain", "Nike,White,Cleated,Spiked Shoes");
})