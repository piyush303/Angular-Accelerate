describe('Testing app component', function() {
  it('should contain title of component', function() {
    cy.visit('http://localhost:4200');
    cy.contains("angular-accelerator");
  })
});