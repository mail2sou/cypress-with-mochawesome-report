import '@testing-library/cypress/add-commands'
//below method is called in the beforeEach block to navigate to the application
//This also validates few basic checks
Cypress.Commands.add("navigateToSearchPage",() => {
    //The baseURL is picked up from the cypress.json file
    cy.visit('/')
    cy.location('protocol').should('eq','https:')
    cy.title().should('eq', 'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows')
})