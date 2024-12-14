// cypress/e2e/quiz.cy.js

describe('Tech Quiz End-to-End Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
  });

  it('User can complete the quiz and view the score', () => {
    cy.visit('/');
    
    // Wait for the "Start Quiz" button to be visible and click it
    cy.contains('Start Quiz', { timeout: 20000 }).should('be.visible').click();
    
    // Wait for the questions to be loaded
    cy.wait('@getQuestions');
    
    // Select the first radio button and submit the answer
    cy.get('[type="radio"]').first().click();
    cy.contains('Submit').click();
    
    // Verify the results are displayed
    cy.contains('Results', { timeout: 20000 }).should('be.visible');
  });
});