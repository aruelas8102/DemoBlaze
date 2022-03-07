/// <reference types="Cypress" />
require('cypress-xpath')
import HomePage from '../support/pageObjects/HomePage'
import CartPage from '../support/pageObjects/cartPage'

describe('Add products to cart and buy it', () => {
    it('Select and add Nexus 6 phone and Mackbook Pro to the cart', () => {
        const homePage = new HomePage()
        const cartPage = new CartPage()

        cy.visit('https://www.demoblaze.com/')

        homePage.clickOnPhonesOption().click()         
        cy.wait(2000)

        var sum = 0
        cy.fixture('inputData').then((fdata) => {
            fdata.productName.forEach(function(element){
                cy.wait(2000)
                cy.selectProduct(element)
                cy.xpath("//a[contains(text(),'Add to cart')]").click()
                homePage.returnToHomePage().click()
                homePage.clickOnLaptopsOption().click()
                cy.wait(2000)               
            });
        })
        cy.get('#cartur').click()
        cy.get('tr td:nth-child(3)').each(($el, index) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[0].trim()
            sum = Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
            expect(Number(sum)).to.lessThan(2000)
        })

        cartPage.placeOrder().click()
        cartPage.getName().type("Alejandro")
        cartPage.getCountry().type("Mexico")
        cartPage.getCity().type("Guadalajara")
        cartPage.getCreditCard().type("0000-0000-0000-0000")
        cartPage.getMonth().type("January")
        cartPage.getYear().type("2022")
        cy.xpath("//button[contains(text(),'Purchase')]").click()
        cartPage.getSuccessfullyMessage().should('have.text', 'Thank you for your purchase!')
    })
  })