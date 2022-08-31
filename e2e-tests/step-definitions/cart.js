const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user on shop demoqa my account page$/, () => {
    const myAccount_page = client.page.myAccount();

    return myAccount_page
    .waitForElementPresent('@demo_site_lbl')
    .click('@demo_site_lbl')
    .pause(3000);
})

When(/^user open the details of the selected product$/, () => {
    const product_page = client.page.productPage();

    return product_page
    .waitForElementPresent('@product_site')
    .click('@product_site')
    .pause(3000);
})

When(/^user add "(.*?)" of the selected product to the cart$/, (Qty) => {
    const details = client.page.productDetails();

    return details
    .click('@product_color', 'pink')
    .click('@product_size', '37')
    .clearValue('@quantity_input')
    .setValue('@quantity_input', Qty)
    .click('@addtocart_btn')
    .click('@cart_icon')
    .pause(3000);
})

Then(/^selected product successfully added to the cart$/, () => {
    const myCart_page = client.page.myCart();

    return myCart_page
})
