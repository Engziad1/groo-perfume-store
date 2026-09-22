describe("application routes", () => {
  it("shows the product listing page", () => {
    cy.visit("/products");
    cy.contains("Products").should("be.visible");
  });

  it("shows the cart page", () => {
    cy.visit("/cart");
    cy.contains("Cart").should("be.visible");
  });

  it("shows the product details page", () => {
    cy.visit("/products/santal-parchment");
    cy.contains("Santal Parchment").should("be.visible");
    cy.contains("Scent Anatomy").should("be.visible");
    cy.contains("Add to cart").should("be.visible");
  });
});
