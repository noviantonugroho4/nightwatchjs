const {Given, When, Then} = require('cucumber')
const {client} = require('nightwatch-api');
const { url } = require('../pages/authentication');

Given(/^user visit automation practice home page$/, () => {

    const home = client.page.home1();
    
    return home
    .navigate()
    .maximizeWindow()
    .pause(3000)
})

When(/^user create account with account registered$/, () => {

    const header = client.page.header(); 
    header.expect.section('@header').to.be.visible;

    const sign_in = header.section.header;
    // return sign_in
    sign_in
    .waitForElementPresent('@sign_in_btn')
    .click('@sign_in_btn')
    .pause(5000)

    const auth = client.page.authentication();

    auth
    .useXpath()
    .click('//*[@class="login"]')
    .waitForElementPresent('@email_input')
    .setValue('@email_input', 'asd@yopmail.com')
    .click('@create_account_btn')
    .pause(3000)
})

Then(/^user cannot create account$/, () => {

    // const auth = client.page.authentication();

    // return auth
    // .useXpath()
    // .waitForElementPresent('@globalErrorMessage_label')
    // .assert.containsText('@globalErrorMessage_label', 'An account using this email address has already been registered. Please enter a valid password or request a new one.')
    }
    )