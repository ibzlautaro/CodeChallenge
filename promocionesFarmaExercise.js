describe('Promociones Farma test',() =>{

    beforeEach(() => {
        // Preserve cookies in every test
        cy.log("========= Preserve cookies =========")
        Cypress.Cookies.defaults({
          preserve: (cookie) => {
            return true;
          }
        })
    })


    it('Visit promofarma web and search neutrogena product', () =>{
        cy.log("========= Start IT 1 =========")
        cy.visit('https://www.promofarma.com/')
        cy.wait(3000)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#search-bar-input').should('be.visible')
        cy.get('#search-bar-input').type('Neutrogena')
        cy.get('#search-bar-input').type('{enter}')
        
    })
    
    
    it('Visit product detail page and scroll down the page', () =>{
        cy.log("========= Start IT 2 =========")
        cy.get('#main > section > div.row.no-gutters.mt-md-2 > div.col-lg > section > div > div:nth-child(1) > article > div.row.no-gutters > div.col-6.col-sm-12.column-text > div > a > h3').should('be.visible').click()
        cy.scrollTo('bottom', { duration: 4000 })
    })
})