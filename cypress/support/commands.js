// cypress/support/commands.js

// Custom command to select DOM element by data-testid attribute
Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-testid=${testId}]`)
})