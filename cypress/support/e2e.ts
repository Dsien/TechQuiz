// cypress/support/e2e.ts

import './commands';

// Prevent Cypress from failing tests due to uncaught exceptions
Cypress.on('uncaught:exception', () => false);