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

When(/^user add the same "(.*?)" products$/, (Qty) => {
    const addtocart = client.page.product();

    return addtocart
    .waitForElementPresent('@qty_btn')
    .click('@color_btn', 'Black')
    .click('@size_btn', '34')
    .clearValue('@qty_btn')
    .setValue('@qty_btn', Qty)
    .click('@addCart_btn')
    .pause(3000)
})

Then(/^show notif success added the product$/, () => {
    const addtocart= client.page.product();

    return addtocart
    .useXpath()
    .waitForElementPresent('//*[@id="noo-site"]/div[2]/div/div/div[1]/div')
    .assert.containsText('//*[@id="noo-site"]/div[2]/div/div/div[1]/div')
})