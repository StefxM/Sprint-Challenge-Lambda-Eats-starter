describe("Testing form input", () => {
beforeEach(function () {
    cy.visit("http://localhost:3005/pizza");
});

it("Finds the Name input", () => {
//Arrange - get the element
cy.get('[for="name"] > input').type("stephanie mai").should("have.value", "stephanie mai");
//Act-mimic user interaction
//Assert - test/verify

});
it("checking multiple toppings", () => {
 cy.get('input[type="checkbox"]').check().should(("be.checked"));
})
it("submitting the form", () => {
    cy.get('form').submit();
})

})