const  {Given, When, Then} = require('cucumber')
const { client } = require('nightwatch-api')

Given(/^user visit Xswift page$/, () => {
    return client.url('https://qa-xswift.xapiens.id')
    .maximizeWindow()
    .pause(3000)
})

When(/^user input email "(.*?)"$/, (email) => {
    // console.log(email)
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', email)
})

When(/^user input password$/, () => {
    return client
    .useXpath()
    .setValue('//*[@id="password"]', '123456')
})

When(/^user click login button$/, () => {
    return client
    .useXpath()
    .click('//button[contains(@class, "btn-login")]')
    .pause(3000)
})

Then(/^show pop up error messagee "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[2]')
    .assert.containsText('/html/body/div[2]/div/div[2]', notif)
})

Then(/^show alert email "(.*?)"$/, (notifEmailEmpty) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p')
    .assert.containsText('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p', notifEmailEmpty)
})

Then(/^show alert password "(.*?)"$/, (notifPasswordEmpty) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p')
    .assert.containsText('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p', notifPasswordEmpty)
})