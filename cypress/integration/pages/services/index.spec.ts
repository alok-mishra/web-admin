/// <reference types="cypress" />

context('/services', () => {
  describe('Without a client in localStorage', () => {
    beforeEach(() => {
      window.localStorage.removeItem('PHOTION_INTEGRATION');
      cy.visit('/services');
    });

    [
      { label: 'Browser Memory', slug: 'browser' },
      { label: 'Google Drive', slug: 'googleDrive' },
      { label: 'GCP', slug: 'gcp' },
      { label: 'AWS', slug: 'aws' },
    ]
      .forEach((testCase) => {
        it(`Displays the ${testCase.label} integration`, () => {
          cy.get(`[data-cy="integration-${testCase.slug}"]`)
          .contains("Select")
          .click();

          cy.location('pathname', { log: true })
            .should('eq', `/services/${testCase.slug}`);
        });
      });

  });

});
