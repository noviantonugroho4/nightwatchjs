const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
const { url } = require('../pages/myAccount');
let product_name;
const details = client.page.productDetails();

Given(/^user on shop demoqa my account page$/, () => {
    return client
    .url(process.env.URL)
    .maximizeWindow()
})

When(/^user click Tools Demo QA Site$/, () => {
    const myAccount_page = client.page.myAccount();

    return myAccount_page
    .waitForElementPresent('@demo_site_lbl')
    .click('@demo_site_lbl')
})

When(/^user click the product$/, () => {
    const product_page = client.page.productPage();
    product_page.getText('@product_site', (data) => {
        product_name = data.value
    });

    return product_page
    .waitForElementPresent('@product_site')
    .click('@product_site')
})

Then(/^user should see detail product page$/, () => {
    // const details = client.page.productDetails();

    return details
    .assert.containsText('@product_name', product_name)
})

When(/^user select the color of product$/, () => {
    // const details = client.page.productDetails();

    return details
    .waitForElementPresent('@product_color')
    .click('@product_color', 'pink')
})

When(/^user select the size of product$/, () => {
    // const details = client.page.productDetails();

    return details
    .waitForElementPresent('@product_size')
    .click('@product_size', '37')
})


When(/^user add "(.*?)" quantity of product$/, (Qty) => {
    // const details = client.page.productDetails();

    return details
    .waitForElementPresent('@quantity_input')
    .clearValue('@quantity_input')
    .setValue('@quantity_input', Qty)
})

When(/^user click add to cart button$/, () => {
    // const details = client.page.productDetails();

    return details
    .waitForElementPresent('@addtocart_btn')
    .click('@addtocart_btn')
})

When(/^user click cart icon$/, () => {
    // const details = client.page.productDetails();

    return details
    .waitForElementPresent('@cart_icon')
    .click('@cart_icon')
})

Then(/^user should see the product on cart page$/, () => {
    const myCart_page = client.page.myCart();

    return myCart_page
    .assert.containsText('@product_name', product_name)
    .assert.containsText('@product_size', '37')
    .assert.valueContains('@product_qty', '7')
})

When(/^user click clear shopping cart button$/, () => {
    const myCart_page = client.page.myCart();

    return myCart_page
    .waitForElementPresent('@clear_cart')
    .click('@clear_cart')
})

Then(/^user should see empty shopping cart$/, () => {
    const myCart_page = client.page.myCart();

    return myCart_page
    .assert.containsText('@empty_cart', 'Your cart is currently empty')
})
