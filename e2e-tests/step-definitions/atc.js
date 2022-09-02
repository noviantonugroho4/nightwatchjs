const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user visit home page from my account page$/, () => {
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
    .pause(7000)
})

When(/^user add "(.*?)" of same product to cart$/, (qty) => {
    const details = client.page.detail_product();

    const header_section = details.page.header();
    header_section.expect.section('@header_menu').to.be.visible;
    
    const elements = header_section.section.header_menu

    details
    .waitForElementPresent('@color_tokyo_talkies')
    .click('@color_tokyo_talkies')
    .click('@select_color_tokyo_talkies')
    .click('@size_tokyo_talkies')
    .click('@select_size_tokyo_talkies')
    .clearValue('@qty_tokyo_talkies')
    .setValue('@qty_tokyo_talkies', qty)
    .click('@atc_btn')

    return elements
    .click('@cart_icon')
})

Then(/^product successfully added to cart$/, () => {
    const cart_page = client.page.cart();

    return cart_page
    .waitForElementPresent('@name_tbl')
    .assert.containsText('@name_tbl', 'TOKYO TALKIES')
    .assert.valueContains('@qty_tbl', '6')
    .pause(3000)
    //add step for empty cart
    .click('@empty_cart')
    
})