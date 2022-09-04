const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user visit My Account page$/, () => {
    const myAccount = client.page.myAccount();

    return myAccount
    .waitForElementPresent('@shop_site_btn')
    .click('@shop_site_btn')
    .pause(3000)
})

When(/^user click Product Detail page$/, () => {
    const homeShop = client.page.homeShop();

    return homeShop
    .waitForElementPresent('@product_btn')
    .click('@product_btn')
    .pause(3000)
})

When(/^user add the same "(.*?)" products$/, (qty) => {
    const addtocart = client.page.product();

    return addtocart
    .click('@color_btn')
    .click('@size_btn')
    .waitForElementPresent('@qty_btn')
    .clearValue('@qty_btn')
    .setValue('@qty_btn', qty)
    .click('@addCart_btn')
    .click('@viewcart_btn')
})

Then(/^show notif success added the products and view cart$/, () => {
    const view = client.page.viewcart();

    return view
    .waitForElementPresent('@continueShop_btn')
    .click('@continueShop_btn')
    .pause(3000)
})