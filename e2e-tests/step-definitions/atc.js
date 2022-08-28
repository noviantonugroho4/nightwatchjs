const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user visit home page from My Account page$/, () => {
    const myAccount_page = client.page.myAccount();

    return myAccount_page
    .waitForElementPresent('@demo_site_link')
    .click('@demo_site_link')
})

When(/^user open product detail$/, () => {
    const homepage = client.page.home();

    return homepage
    .waitForElementPresent('@product_link')
    .click('@product_link')
    .pause(10000)
})

When(/^user add "(.*?)" of same product to cart$/, (qty) => {
    const details = client.page.detail_product();

    return details
    .waitForElementPresent('@detail_tokyo_talkies')
    .clearValue('@detail_tokyo_talkies')
    .setValue('@detail_tokyo_talkies', qty)
    .click('@atc_btn')
    .click('@cart_icon')
})

Then(/^product successfully added to cart$/, () => {
    const cart_page = client.page.cart();

    return cart_page
    .waitForElementPresent('@name_tbl')
    .assert.containsText('@name_tbl', 'TOKYO TALKIES')
    .assert.valueContains('@qty_tbl', '6')
})