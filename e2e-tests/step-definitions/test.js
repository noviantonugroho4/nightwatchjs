const {Given, When, Then} = require('cucumber')
const { client } = require('nightwatch-api')

//Given user on Xswift login page

Given(/^user on Xswift login page$/, () => {
    return client.url('https://qa-xswift.xapiens.id')
    .pause(2000)
})

When(/^user input invalid email "(.*?)"$/, (email) => {
    // console.log(email)
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', email)
})

When(/^user input password$/, () => {
    return client
    .useXpath()
    .setValue('//*[@id="password"]', '123')
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

When(/^user click button login$/, () => {
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