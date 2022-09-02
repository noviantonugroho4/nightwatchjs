const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
const { url } = require('../pages/shoppage');

//@TC_02_001 - user can add 5 dress to shopping cart
//user on my account shop page
Given(/^user on my account shop page$/, () => {
    const myAccount = client.page.myAccount();

    return myAccount
    //.maximizeWindow()
    .waitForElementPresent('@shoptools_btn')
    .click('shoptools_btn')
})

//user open the detail dress
When(/^user open the detail dress$/, () => {
    const shoppage = client.page.shoppage();

    return shoppage
    .waitForElementPresent('@dressproduct')
    .click('@dressproduct')
})

//user add "5" dress to shopping cart
When(/^user add "(.*?)" dress to shopping cart$/, (Qty) => {
    const addtocart = client.page.productdetail();

    return addtocart
    .click('@color_dress', 'black')
    .click('@size_dress', 'small')
    .waitForElementPresent('@detail_dress')
    .clearValue('@detail_dress')
    .setValue('@detail_dress', Qty)
    .click('@addtocart_btn')
})

//user open my shopping cart
When(/^user open my shopping cart$/, () => {
    const charttotal = client.page.productdetail();
    return charttotal
    .waitForElementPresent('@cart_icon_total')
    .click('@cart_icon_total')
})

//user should see the dress in my shopping cart
Then(/^user should see the dress in my shopping cart$/, () => {
    const myshoppingchart = client.page.myshoppingchart();
    return myshoppingchart
    .assert.urlContains(url)
    .click('@hapuscart')
})
