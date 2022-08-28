const {Given, When, Then} = require('cucumber')
const {client} = require('nightwatch-api')

Given(/^user visit orangeHRM$/, () => {
    return client
    .url(process.env.URL)
    .maximizeWindow()
    .pause(6000)
})

When(/^user sign with valid username "(.*?)" and valid password "(.*?)"$/, (username, password) => {
    const login = client.page.login();
    return login
    .navigate()
    .useXpath()
    .waitForElementPresent('@username_input')
    .setValue('@username_input', username)
    .setValue('@password_input', password)
    .click('@login_button')
})

Then(/^user direct to home page "(.*?)"$/, (url_orangeHRM) => {
    return client
    .assert.urlEquals(url_orangeHRM)
})

// When(/^user sign with invalid username "(.*?)" and invalid password "(.*?)"$/, (username, password) => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//input[@name="username"]')
//     .setValue('//input[@name="username"]', username)
//     .setValue('//input[@name="password"]', password)
//     .click('//button[@type="submit"]')
// })

// Then(/^user failed login with error message "(.*?)"$/, (global_error_login) => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="app"]//preceding::p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')
//     .assert.containsText('//*[@id="app"]//preceding::p[@class="oxd-text oxd-text--p oxd-alert-content-text"]', global_error_login)
// })