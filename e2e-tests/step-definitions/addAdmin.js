const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

When(/^user click (.*?) button$/, (button) => {
    if (button == 'Add') {
        return client
        .useXpath()
        .waitForElementPresent('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
        .moveToElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button', 0, 0)
        .click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
    }
    if (button == 'Delete') {
        return client
        .useXpath()
        .waitForElementPresent('//*[@id="btnDelete"]')
        .click('//*[@id="btnDelete"]')
    }
})
//person[contains(firstname, 'Kerr') and contains(lastname, 'och')]

When(/^user select user role "(.*?)"$/, (user_role) => {
    return client
    .useXpath()
    .waitForElementPresent('//div[1]/div/div/div[contains(@class, "oxd-select-wrapper")]')
    .click('//div[1]/div/div/div[contains(@class, "oxd-select-wrapper")]')
    .waitForElementPresent(`//div[contains(@role, "option") and .//span[contains(text(), "${user_role}")]]`)
    .click(`//div[contains(@role, "option") and .//span[contains(text(), "${user_role}")]]`)
    .assert.containsText('//div[1]/div/div/div[contains(@class, "oxd-select-wrapper")]', user_role)
})

When(/^user input employee name "(.*?)"$/, (employee_name) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[contains(@placeholder, "Type")]')
    .setValue('//input[contains(@placeholder, "Type")]', employee_name)
    .waitForElementPresent('//*[contains(@class, "oxd-autocomplete-dropdown")]')
    .assert.valueContains('//input[contains(@placeholder, "Type")]', employee_name)
})

When(/^user input username "(.*?)"$/, (username) => {
    return client
    .useXpath()
    .setValue('//div[4]/div/div[2]/input[contains(@class, "oxd-input")]', username)
    .assert.containsText('//div[4]/div/div[2]/input[contains(@class, "oxd-input")]', 'longbootcamp')
    // .useXpath()
    // .pause(3000)
    // .waitForElementPresent('//*[@id="systemUser_userName"]')
    // .setValue('//*[@id="systemUser_userName"]"]', username)

    // .getValue('xpath',`//*[@id="systemUser_userName"]`,function(tests){
    //     test = tests.value;
    //     for (var i = 0; i < test.length; i++) {
    //         client.setValue(`//*[@id="address"]`,'').keys('\ue003')
    //     }
    //     client.keys('\ue01e')
    //     .pause(3000)
    // })
    .pause(10000)
})


// user click Add button
// And user input employee name "Admin A"
// And user input username "longbootcamp"
// And user input password "delapandigit"
// And user input confirm password "delapandigit"
// And user click Save button
// Then user should see notification "Successfully Saved"