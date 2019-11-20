import { getGreeting } from '../support/app.po';

describe('gdgfirebasedemo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to gdgfirebasedemo!');
  });
});
