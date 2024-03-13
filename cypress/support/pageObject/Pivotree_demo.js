import { Selector, selector } from "../Locator/locator";
import { textConstant } from "../Text/text";

export const visitAndSearch = () => {
    cy.visit('https://spartacus-demo.eastus.cloudapp.azure.com/electronics-spa/en/USD/')
    cy.url().should('include', 'https://spartacus-demo.eastus.cloudapp.azure.com/electronics-spa/en/USD/')
    cy.wait(5000)
    cy.get(selector.Searchbox).should('be.visible').click()
    cy.get(selector.Enter_product_name).should('be.visible').clear().type(textConstant.Product_name).type("{enter}");
    cy.url().should('include',textConstant.Product_url)
};
  
export const productDetailsPage = () => {
    cy.get(selector.Enter_product_name).should('be.visible').clear().type(textConstant.Prouct_NV_10_camera);
    cy.get(selector.Select_Product).click()
    cy.wait(3000)
    cy.url().should('include',textConstant.NV_10_url)
    cy.get(selector.Product_price).should('be.visible').invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(textConstant.Product_price)
    })
    cy.get(selector.Product_details).should('be.visible')
    cy.wait(2000)
}

export const addToCart = () => {
    cy.get(selector.Add_to_cart_button).should('be.visible').click()
    cy.wait(5000)
    cy.get(selector.Items_lable).should('be.visible').invoke('text').then((text) => {
        const trimmedExpectedText = textConstant.Item_label_text.trim();
        const trimmedActualText = text.trim();
        expect(trimmedActualText).to.equal(trimmedExpectedText);
    })
    cy.get(selector.View_cart_button).should('be.visible')
    cy.get(selector.Added_product).should('be.visible').contains(textConstant.Product_name)
    cy.wait(5000)
}