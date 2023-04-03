
describe('Автотесты для HuntingPony', function () {
    it('Оформление заказа', function () {
        cy.reload(); 
        cy.visit('https://huntingpony.com/');
         cy.wait(5000);
         cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo').click();
         cy.wait(5000);
         cy.get('.add-cart-counter__btn').click();
         cy.wait(5000);
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.wait(5000);
         cy.get('.header__cart').click();
         cy.wait(5000);
         cy.get('.cart-controls > .button').click();
         cy.wait(5000);
         cy.contains('Оформление заказа');  

     })
 })
 