 function acceptCookieBanner(){
  cy.get('.iubenda-cs-container').should('be.visible')
   cy.wait(300)
   cy.get('.iubenda-cs-btn-primary').contains('Accept').click()
 }

 describe('Pettswood',()=>{
  beforeEach(() => {
   cy.visit('https://www.pettswoodeyecare.co.uk/');
   acceptCookieBanner();
    });


 it('Closing the Cookie banner', ()=>{
    cy.get('.iubenda-cs-container').should('be.visible')
    cy.wait(300)
    cy.get('.iubenda-cs-btn-primary').contains('Accept').click()
  })


 /*   it('Test to check the address in the header', ()=>{
     cy.get('.address-area').find('img').should('be.visible').and('have.attr', 'src').and('include', 'map-marker-alt.png')
     cy.get('.address').should('be.visible').and('contain', "16 Station Square, Petts Wood,Orpington, BR5 1NA")
     cy.get('.address').should('have.css', 'text-align', 'left')
    })

   it('Test to check the Phone in the header', ()=>{
    cy.get('.phone').find('img').should('be.visible').and('have.attr', 'src').and('include', 'hone.png')
    cy.get('.phn').should('be.visible').and('contain', "0689 831726")
  })

  it('Test to check the logo of the site', ()=>{
 
    cy.get('.pp-photo-content').find('a').find('img')
   // cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/')
  })

  it('Testing the Request an Appointment Button',()=>{
    cy.get('.pp-button-wrap').find('a').contains("Request an Appointment").click()
    cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/request-an-appointment/')
  }) */
  it('Testing the title ',()=>{
    cy.title().should('eq', 'Petts Wood Eyecare - An independent family-run optician')
  })
  it('Testing the main menu items', ()=>{
    cy.get('ul#menu-main-menu').find('li').should('have.length',10);
    cy.get('ul#menu-main-menu').find('li').should('be.visible').contains('Home').click()
    cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/')

    cy.get('ul#menu-main-menu').find('li').should('be.visible').contains('About Us').click()
    cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/about-us/')

    cy.get('ul#menu-main-menu').find('li').should('be.visible').contains('Services')
    .trigger('mouseover').contains('ul.sub-menu')

    cy.get('ul#menu-main-menu').find('li').should('be.visible').contains('Our Brands').click()
    cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/our-brands/')

    cy.get('ul#menu-main-menu').find('li').should('be.visible').contains('Contact Us').click()
    cy.url().should('eq', 'https://www.pettswoodeyecare.co.uk/contact-us/')

  })

})