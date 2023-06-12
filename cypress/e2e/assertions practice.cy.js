describe('Assertions Practice', ()=>{

    /*Assertions:
    Implicit: should, and
    Explicit: expect, assert */

    it('Testing the URL', ()=>{

        cy.visit('www.google.com')
        cy.url().should('include', 'google')
        cy.url().should('eq', 'www.google.com')
        cy.url().should('contains', 'google.com')
    })

})