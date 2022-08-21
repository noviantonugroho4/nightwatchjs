const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

When(/^user create new account$/, () => {
    const authentication = client.page.authentication();
    return authentication

    .useXpath()
    .click('//*[@class="login"]')
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