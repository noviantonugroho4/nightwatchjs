const {Given, When, Then} = require('cucumber')
const {client} = require('nightwatch-api')

//Given user visit Xswift page
Given (/^user visit page Xswift$/,() => {
    return client.url('https://qa-xswift.xapiens.id')
    .pause(3000)
})

//Scenario @TC_01_001
When(/^Invalid Email And Password$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
    .pause(500)
})

//When user input email "nurmawar1603@gmail.com"
When(/^user input email "(.*?)"$/, (email) => {
   // console.log(email)
   //Xpath
   return client
   .useXpath()
   .waitForElementPresent('//*[@id="email"]')
   .setValue('//*[@id="email"]', email)
})

//When user input password "123456"
When(/^user input password "(.*?)"$/, (password) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="password"]')
    .setValue('//*[@id="password"]', password)
})

//Show error message invalid email "Invalid user email or password"
Then(/^Show error message invalid email "(.*?)"$/, (notif) => {
    return client
   .useXpath()
   .waitForElementPresent('/html/body/div[2]/div/div[2]')
   .assert.containsText('/html/body/div[2]/div/div[2]', notif)
})

//Scenario @TC_01_002
When(/^Empty field email and valid password$/, () => {
   return client
    .useXpath()
    .click('//*[@id="root"x]/div/div/div/div[2]/div/div/form/button')
    .pause(500)
})

 //When user input empty email "" 
When(/^user input empty email$/, () => {
     return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', '')
 })

//user input password "123456"
When(/^user input password$/, () => {
    return client
    .useXpath()
    .setValue('//*[@id="password"]', '123456')
})

//When user click login button
When(/^user click login button$/, () => {
    return client
    .useXpath()
    .click('//button[contains(@class, "btn-login")]')
    .pause(500)
})

//Then Show error message empty email "Email input cannot be empty"
Then(/^Show error message empty email "(.*?)"$/, (notif) => {
    return client
    .useXpath()
    //.waitForElementPresent('/html/body/div[2]/div/div[2]')
    .assert.containsText('/html/body/div[2]/div/div[2]', notif)
    .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p')
})

//Scenario @TC_01_004
When(/^Valid email and empty field password$/, () => {
     return client
     .useXpath()
     .click('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
     .pause(500)
 })

//user input email name "nurmawar1603@gmail.com"
When(/^user input email name "(.*?)"$/, (email) => {
     return client
    .useXpath()
    .waitForElementPresent('//*[@id="email"]')
    .setValue('//*[@id="email"]', email)
    .pause(500)
 })

//user input password empty ""
When(/^user input password empty ""$/, () => {
     return client
    .useXpath()
    .setValue('//*[@id=""]', '')
 })

//Show error message empty password "Password input cannot be empty"
When(/^Show error message empty password "(.*?)"$/, (notif) => {
     return client
    .useXpath()
    .waitForElementPresent('//*[@id="password"]')
    //.waitForElementPresent('/html/body/div[2]/div/div[2]')
    //.assert.containsText('/html/body/div[2]/div/div[2]', notif)
 })
