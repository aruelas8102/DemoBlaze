class HomePage{
    clickOnPhonesOption(){
        return cy.xpath("//a[contains(text(),'Phones')]")
    }
    clickOnLaptopsOption(){
        return cy.xpath("//a[contains(text(),'Laptops')]")
    }
    returnToHomePage(){
        return cy.get('#nava')
    }
}
export default HomePage;