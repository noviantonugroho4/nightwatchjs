const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
// const { url } = require('../pages/myAccount');

const myCart_page = client.page.myCart();
const details = client.page.productDetails();

let product_name;
let product_color;
let product_size;
let product_qty;

Given(/^user on shop demoqa my account page$/, () => client
    .url(process.env.URL)
    .maximizeWindow())

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

Then(/^user should see detail product page$/, () => details
    .assert.containsText('@product_name', product_name))

When(/^user select the color of product$/, () => {
    const details = client.page.productDetails();
    // details.getText(({
    //     selector: `//select[@id="pa_color"]/option[@value="${color}"]`
    // }), (data) => {
    //     product_color = data.value
    // });
    // return details
    //     .waitForElementPresent('@product_color')
    //     .click(({
    //         selector: `//select[@id="pa_color"]/option[@value="${color}"]`
    //     }))

    details.getText('@product_color', (data) => {
        product_color = data.value
    });

    return details
        .waitForElementPresent('@product_color')
        .click('@product_color')
})

When(/^user select the size of product$/, () => {
    const details = client.page.productDetails();
    // details.getText(({
    //     selector: `//select[@id="pa_size"]/option[@value="${size}"]`
    // }), (data) => {
    //     product_size = data.value
    // });
    // return details
    //     .waitForElementPresent('@product_size')
    //     .click(({
    //         selector: `//select[@id="pa_size"]/option[@value="${size}"]`
    //     }))

    details.getText('@product_size', (data) => {
        product_size = data.value
    });

    return details
        .waitForElementPresent('@product_size')
        .click('@product_size')
})


When(/^user add "(.*?)" quantity of product$/, (Qty) => {
    product_qty = Qty
    return details
        .waitForElementPresent('@quantity_input')
        .clearValue('@quantity_input')
        .setValue('@quantity_input', Qty)
})

When(/^user click add to cart button$/, () => details
    .waitForElementPresent('@addtocart_btn')
    .click('@addtocart_btn'))

When(/^user click cart icon$/, () => details
    .waitForElementPresent('@cart_icon')
    .click('@cart_icon'))

Then(/^user should see the product on cart page$/, () => myCart_page
    .assert.containsText('@product_name', product_name)
    .assert.containsText('@product_size', product_size)
    .assert.valueContains('@product_qty', product_qty))

When(/^user click clear shopping cart button$/, () => myCart_page
    .waitForElementPresent('@clear_cart')
    .click('@clear_cart'))

Then(/^user should see empty shopping cart$/, () => myCart_page
    .assert.containsText('@empty_cart', 'Your cart is currently empty'))
