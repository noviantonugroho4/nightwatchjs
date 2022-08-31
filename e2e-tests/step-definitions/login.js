const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
const { url } = require('../pages/myAccount');

Given(/^user visit shop demoqa page$/, () => {
    return client
    .url(process.env.URL)
    .maximizeWindow()
    .useXpath()
    .waitForElementPresent('//a[contains(@class,"notice")]')
    .click('//a[contains(@class,"notice")]')
    .waitForElementNotVisible('//a[contains(@class,"notice")]')
})

When(/^user sign in with username "(.*?)" & password "(.*?)"$/, (username, password) => {
    const myAccount_page = client.page.myAccount();

    const header_section = myAccount_page.page.header();
    header_section.expect.section('@header_menu').to.be.visible;
    
    // const elements = header_section.section.header_menu
    // elements.expect.element('@my_account_btn').to.be.visible;

    return myAccount_page
    .click('@my_account_btn')
    .waitForElementPresent('@username_input')
    .setValue('@username_input', username)
    .setValue('@password_input', password)
    .click('@login_btn')
    .pause(3000);
})

Then(/^user direct to my account page$/, () => {
    const myAccount_page = client.page.myAccount();

    return myAccount_page
    .assert.urlContains(url);
})
