import { getGreeting } from '../support/app.po';

describe('planner-form', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to planner-form!');
  });
});
