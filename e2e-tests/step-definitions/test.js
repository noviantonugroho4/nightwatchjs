const {Given, When, Then} = require('cucumber')
const { client } = require('nightwatch-api')

//Given user visit Xswift page

Given(/^user visit Xswift page$/, () => {
    return client.url('https://qa-xswift.xapiens.id')
    .pause(4000)
})

When(/^user click login button with empty email and password$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
    .click('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
    .pause(3000)
})

When(/^user input invalid email "(.*?)"$/, (email) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', email)
})

When(/^user input invalid password "(.*?)"$/, (password) => {
    return client
    .useXpath()
    .setValue('//*[@id="password"]', password)
})

When(/^user input valid email "(.*?)"$/, (email) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', email)
})

When(/^user input valid password "(.*?)"$/, (password) => {
    return client
    .useXpath()
    .setValue('//*[@id="password"]', password)
})

When(/^user click login button$/, () => {
    return client
    .useXpath()
    .click('//button[contains(@class, "btn-login")]')
})

Then(/^show alert "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[2]')
    .assert.containsText('/html/body/div[2]/div/div[2]', notif)
})

Then(/^show alert empty email "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p')
    .assert.containsText('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p', notif)
})

Then(/^show alert empty password "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p')
    .assert.containsText('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p', notif)
})
