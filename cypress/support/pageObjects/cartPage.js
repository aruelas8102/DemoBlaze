class CartPage{
    placeOrder(){
        return cy.xpath("//button[contains(text(),'Place Order')]")
    }
    getName(){
        return cy.xpath("//input[@id='name']")
    }
    getCountry(){
        return cy.xpath("//input[@id='country']")
    }
    getCity(){
        return cy.xpath("//input[@id='city']")
    }
    getCreditCard(){
        return cy.xpath("//input[@id='card']")
    }
    getMonth(){
        return cy.xpath("//input[@id='month']")
    }
    getYear(){
        return cy.xpath("//input[@id='year']")
    }
    getSuccessfullyMessage(){
        return cy.xpath("//h2[contains(text(),'Thank you for your purchase!')]")
    }
}
export default CartPage;