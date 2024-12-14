import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    it('renders the Quiz component', () => {
        mount(<Quiz />);
        cy.get('.quiz-container').should('exist');
    });
});