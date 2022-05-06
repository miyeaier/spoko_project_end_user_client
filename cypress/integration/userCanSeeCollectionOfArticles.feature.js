describe("user can see a collection of articles", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/articles", {
      fixture: "articles.json",
    }).as("getArticles");

    cy.visit("/", {});
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticles").its("request.method").should("eq", "GET");
  });

  it("is expected to display a collection of 3 articles", () => {
    cy.get("[data-cy=articles-list]").children().should("have.length", 1);
  });

  it("is expected that the first title will be Football and Golf", () => {
    cy.get("[data-cy=articles-list]")
      .first()
      .should("contain.text", "Football ");
  });
  it("is expected that the last title will be Golf", () => {
    cy.get("[data-cy=articles-list]").last().should("contain", "golf");
  });
});
