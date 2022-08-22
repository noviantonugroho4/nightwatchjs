const {Given, When, Then} = require('cucumber')
const { client } = require('nightwatch-api')

//Given user on OrangeHRM login page

Given(/^user on OrangeHRM login page$/, () => {
    return client.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .pause(2000)
})

When(/^user input invalid username "(.*?)"$/, (username) => {
    // console.log(email)
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')
    .setValue('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', username)
})

When(/^user input invalid password "(.*?)"$/, (password) => {
    return client
    .useXpath()
    .setValue('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input', password)
})

When(/^user input val password "(.*?)"$/, (password) => {
    return client
    .useXpath()
    .setValue('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input', password)
})

When(/^user input valid username "(.*?)"$/, (username) => {
    // console.log(email)
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')
    .setValue('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', username)
})

When(/^user click button login$/, () => {
    return client
    .useXpath()
    .click('//button[contains(@class, "login-button")]')
})

Then(/^user direct on homepage$/, () => {
    return client.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    .pause(3000)
})

Then(/^show alert invalid "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]')
    .assert.containsText('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]', notif)
})

Then(/^show alert empty username "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span')
    .assert.containsText('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span', notif)
})

Then(/^show alert emp password "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span')
    .assert.containsText('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span', notif)
})