import { visitAndSearch } from '../support/pageObject/Pivotree_demo'
import { productDetailsPage, addToCart } from '../support/pageObject/Pivotree_demo'
describe('Automate spartacus-demo website',() => {
    it('To verify that the search functionality works correctly', () => {
        visitAndSearch();
    })

    it('To verify that the product detail page displays accurate information.',() =>{
        visitAndSearch();
        productDetailsPage();
    })

    it('To verify that users can successfully add products to their cart', () => {
        visitAndSearch();
        productDetailsPage();
        addToCart();
    })
})


