const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

When(/^user create new account$/, () => {
    const authentication = client.page.authentication();

    const test = client.page.nav_menu();
    test.expect.section('@nav_menu').to.be.visible;

    const menuSection = test.section.nav_menu;
    menuSection.expect.element('@sign_in').to.be.visible;
    menuSection.click('@sign_in');

    return authentication

    .useXpath()
    .waitForElementPresent('@email_input')
    .setValue('@email_input', 'asd@yopmail.com')
    .click('@create_account_btn')
})

When(/^user cannot regist new account$/, () => {
    const authentication = client.page.authentication();
    return authentication

    .useXpath()
    .waitForElementPresent('@notif_lbl')
    .assert.containsText('@notif_lbl', 'An account using this email address has already been registered. Please enter a valid password or request a new one')
  })