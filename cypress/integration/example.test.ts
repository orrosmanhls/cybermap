describe('Example', () => {
    it('Should render main page', () => {
        cy.login();
        cy.findByText('Loading...');
        cy.findByRole('img').should('be.visible');
    })
});