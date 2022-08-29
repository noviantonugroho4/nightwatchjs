const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
const { url } = require('../pages/shoppage');

//@TC_02_001 - user can add 5 dress to shopping cart
//user on my account shop page
Given(/^user on my account shop page$/, () => {
    const myAccount = client.page.myAccount();

    return myAccount
    .waitForElementPresent('@shoptools_btn')
    .click('shoptools_btn')
    .pause(3000)
})

//user open the detail dress
When(/^user open the detail dress$/, () => {
    const shoppage = client.page.shoppage();

    return shoppage
    //.waitForElementPresent('@dressproduct')
    .click('@dressproduct')
    .pause(3000)
})

//user add "5" dress to shopping cart
When(/^user add "(.*?)" dress to shopping cart$/, (Qty) => {
    const addtochart = client.page.productdetail();

    return addtochart
    .waitForElementPresent('@detail_dress')
    .click('@color_dress', 'black')
    .click('@size_dress', 'small')
    .clearValue('@detail_dress')
    .setValue('@detail_dress', Qty)
    .click('@addtochart_btn')
    .pause(3000)
})

//user open my shopping cart
When(/^user open my shopping cart$/, () => {
    const charttotal = client.page.productdetail();
    return charttotal
    .click('@cart_icon_total')
})

//user should see the dress in my shopping cart
Then(/^user should see the dress in my shopping cart$/, () => {
    const myshoppingchart = client.page.myshoppingchart();
    return myshoppingchart
    .assert.urlContains(url, 'https://shop.demoqa.com/cart/')
})
