describe('Visitor can see single article', () => {
  
  beforeEach(() => {
    cy.intercept("GET", "**/articles", {
      fixture: "articles.json",
    }).as("getArticles");

    cy.intercept("GET", "**/article/**", {
      fixture: "single-article.json",
    }).as("getSingleArticle");
    cy.get("[data-cy=article-title]").first().click();
  });

  it("is expected to display correct url", () => {
    cy.url().should("contain", "http://localhost:3000/article/1");
  });
  it("is expected to display the body of the article", () => {
    cy.get("[data-cy=article-body]").should(
      "contain.text",
      "Lorem ipsum dolor"
    );
  });
})
