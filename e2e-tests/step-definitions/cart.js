const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user on shop demoqa my account page$/, () => {
    const myAccount_page = client.page.myAccount();

    return myAccount_page
    .waitForElementPresent('@shop_qa_site')
    .click('@shop_qa_site')
})

When(/^user open the details of the selected product$/, () => {
    const homepage = client.page.home();

    return homepage
    .waitForElementPresent('@product_site')
    .click('@product_site')
    .pause(10000)
})

When(/^user add "(.*?)" of the selected product to cart$/, (qty) => {
    const details = client.page.productDetails();

    return details
    .waitForElementPresent('product_name')
    .click('@product_color', 'pink')
    .click('@product_size', '37')
    .clearValue('@quantity_input')
    .setValue('@quantity_input', Qty)
    .click('@addtocart_btn')
    .pause(3000)
})

Then(/^selected product successfully added to the cart$/, () => {
    const myCart_page = client.page.myCart();

    return myCart_page
    .waitForElementPresent('@product_name')
    .assert.containsText('@product_name', 'PINK DROP SHOULDER')
    .assert.valueContains('@product_qty', '7')
})
